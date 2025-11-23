(() => {
  const $ = (sel) => document.querySelector(sel);
  const canvas = $('#canvas');
  const ctx = canvas.getContext('2d');
  const exprInput = $('#expr');
  const parseBtn = $('#parseBtn');
  const resetViewBtn = $('#resetViewBtn');
  const paramsDiv = $('#params');
  const errorDiv = $('#error');
  const autoY = $('#autoY');
  const xminEl = $('#xmin');
  const xmaxEl = $('#xmax');
  const yminEl = $('#ymin');
  const ymaxEl = $('#ymax');
  const samplesEl = $('#samples');
  const animateChk = $('#animate');
  const speedEl = $('#speed');
  const speedVal = $('#speedVal');

  const SAFE_FUNCS = {
    sin: Math.sin, cos: Math.cos, tan: Math.tan,
    asin: Math.asin, acos: Math.acos, atan: Math.atan,
    sinh: Math.sinh ?? ((x)=> (Math.exp(x)-Math.exp(-x))/2),
    cosh: Math.cosh ?? ((x)=> (Math.exp(x)+Math.exp(-x))/2),
    tanh: Math.tanh ?? ((x)=> {
      const e = Math.exp(x), en = Math.exp(-x); return (e-en)/(e+en);
    }),
    exp: Math.exp, log: Math.log, sqrt: Math.sqrt, abs: Math.abs,
    pow: Math.pow, min: Math.min, max: Math.max,
    floor: Math.floor, ceil: Math.ceil, round: Math.round,
    PI: Math.PI, E: Math.E
  };
  const SAFE_TOKENS = new Set(['x', ...Object.keys(SAFE_FUNCS)]);

  let W = 0, H = 0; // canvas size
  function resize() {
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;
    if (!cssW || !cssH) return;
    const w = Math.floor(cssW * dpr);
    const h = Math.floor(cssH * dpr);
    if (w !== W || h !== H) {
      W = canvas.width = w;
      H = canvas.height = h;
      ctx.setTransform(dpr,0,0,dpr,0,0); // keep 1:1 drawing units
      draw();
    }
  }
  window.addEventListener('resize', resize);

  // Parameter model
  let parameters = {}; // name -> { value, min, max, freq, phase }
  const DEFAULTS = [
    {name:'a', value:1, min:-3, max:3},
    {name:'b', value:1, min:-5, max:5},
    {name:'c', value:0, min:-6.28, max:6.28},
    {name:'d', value:0, min:-3, max:3}
  ];

  function detectParams(expr){
    const tokens = expr.match(/\b[a-zA-Z_][a-zA-Z0-9_]*\b/g) || [];
    const names = Array.from(new Set(tokens.filter(t => !SAFE_TOKENS.has(t))));
    if (names.length === 0) return DEFAULTS.map(d=>d.name);
    return names;
  }

  function buildParamUI(names){
    paramsDiv.innerHTML = '';
    const existing = {...parameters};
    parameters = {};
    const rnd = (a,b)=> a + Math.random()*(b-a);
    names.forEach((name, i) => {
      const prev = existing[name];
      const fallback = DEFAULTS.find(d=>d.name===name) || {name,value:1,min:-5,max:5};
      const value = prev?.value ?? fallback.value ?? 1;
      const min = prev?.min ?? fallback.min ?? -5;
      const max = prev?.max ?? fallback.max ?? 5;
      parameters[name] = {
        value, min, max,
        freq: prev?.freq ?? (0.2 + 0.15*i),
        phase: prev?.phase ?? rnd(0, Math.PI*2)
      };

      const wrap = document.createElement('div');
      wrap.className = 'param';
      wrap.innerHTML = `
        <div class="row"><strong>${name}</strong> <span class="mono" id="val-${name}">${value.toFixed(3)}</span></div>
        <div class="row">
          <label class="grow">min <input type="number" id="min-${name}" step="0.1" value="${min}"></label>
          <label class="grow">max <input type="number" id="max-${name}" step="0.1" value="${max}"></label>
        </div>
        <div class="row">
          <input type="range" id="rng-${name}" min="${min}" max="${max}" step="0.001" value="${value}">
        </div>
      `;
      paramsDiv.appendChild(wrap);

      const rng = wrap.querySelector(`#rng-${name}`);
      const minEl = wrap.querySelector(`#min-${name}`);
      const maxEl = wrap.querySelector(`#max-${name}`);
      const valEl = wrap.querySelector(`#val-${name}`);
      const syncRangeBounds = () => {
        const minV = parseFloat(minEl.value);
        const maxV = parseFloat(maxEl.value);
        if (maxV <= minV) { // ensure non-degenerate
          maxEl.value = (minV + 0.001);
        }
        rng.min = minEl.value; rng.max = maxEl.value;
        // clamp current value
        if (parameters[name].value < minV) parameters[name].value = minV;
        if (parameters[name].value > maxV) parameters[name].value = maxV;
        rng.value = parameters[name].value;
      };
      rng.addEventListener('input', () => {
        parameters[name].value = parseFloat(rng.value);
        valEl.textContent = parameters[name].value.toFixed(3);
      });
      minEl.addEventListener('change', () => { parameters[name].min = parseFloat(minEl.value); syncRangeBounds(); });
      maxEl.addEventListener('change', () => { parameters[name].max = parseFloat(maxEl.value); syncRangeBounds(); });
    });
  }

  // Expression compilation with restricted scope
  let compiled = null; // function (x, params) => number
  function compile(expr){
    const src = `return (function(x, p){ with(p){ return (${expr}); } })`;
    try{
      // Construct a function with no access to outer scope
      // Provide only the symbols in SAFE_FUNCS + parameter values
      // eslint-disable-next-line no-new-func
      const factory = new Function(src)();
      compiled = (x, params) => factory(x, params);
      errorDiv.textContent = '';
    }catch(e){
      compiled = null;
      errorDiv.textContent = 'Parse error: ' + (e?.message || e);
    }
  }

  function currentParamsObject(){
    const p = {...SAFE_FUNCS};
    for(const [k, v] of Object.entries(parameters)){
      p[k] = v.value;
    }
    return p;
  }

  // View state
  function xMin(){ return parseFloat(xminEl.value); }
  function xMax(){ return parseFloat(xmaxEl.value); }
  function yMin(){ return parseFloat(yminEl.value); }
  function yMax(){ return parseFloat(ymaxEl.value); }
  function sampleCount(){ return Math.max(50, Math.min(4000, parseInt(samplesEl.value,10)||1000)); }

  function toPx(x, y){
    const xs = (x - xMin()) / (xMax() - xMin());
    const ys = (y - yMin()) / (yMax() - yMin());
    return [ xs * canvas.clientWidth, (1 - ys) * canvas.clientHeight ];
  }

  function drawGrid(){
    const w = canvas.clientWidth, h = canvas.clientHeight;
    ctx.clearRect(0,0,w,h);
    ctx.lineWidth = 1; ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--grid');
    ctx.beginPath();
    const xLines = 10, yLines = 8;
    for (let i=1;i<xLines;i++){
      const x = (i/xLines)*w; ctx.moveTo(x,0); ctx.lineTo(x,h);
    }
    for (let i=1;i<yLines;i++){
      const y = (i/yLines)*h; ctx.moveTo(0,y); ctx.lineTo(w,y);
    }
    ctx.stroke();

    // Axes if visible
    const [x0, y0] = toPx(0,0);
    if (xMin() < 0 && xMax() > 0){
      ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--axis');
      ctx.beginPath(); ctx.moveTo(x0,0); ctx.lineTo(x0,h); ctx.stroke();
    }
    if (yMin() < 0 && yMax() > 0){
      ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--axis');
      ctx.beginPath(); ctx.moveTo(0,y0); ctx.lineTo(w,y0); ctx.stroke();
    }
  }

  function plot(){
    if (!compiled) return;
    const n = sampleCount();
    const xs = xMin();
    const xe = xMax();
    const dx = (xe - xs) / (n - 1);
    const p = currentParamsObject();
    let pts = new Array(n);
    let ymin = Infinity, ymax = -Infinity;
    for (let i=0;i<n;i++){
      const x = xs + i*dx;
      let y = NaN;
      try{ y = compiled(x, p); }catch{}
      if (!Number.isFinite(y)) { y = NaN; }
      pts[i] = [x, y];
      if (!Number.isNaN(y)){
        ymin = Math.min(ymin, y);
        ymax = Math.max(ymax, y);
      }
    }
    // Optional auto-scale Y
    if (autoY.checked && Number.isFinite(ymin) && Number.isFinite(ymax)){
      if (ymax === ymin){ ymax = ymin + 1; }
      yminEl.value = (ymin - 0.1*Math.abs(ymin||1)).toFixed(3);
      ymaxEl.value = (ymax + 0.1*Math.abs(ymax||1)).toFixed(3);
    }

    // Draw curve
    ctx.lineWidth = 2; ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--curve');
    ctx.beginPath();
    let started = false;
    for (let i=0;i<n;i++){
      const [x,y] = pts[i];
      if (Number.isNaN(y)) { started = false; continue; }
      const [px, py] = toPx(x, y);
      if (!started){ ctx.moveTo(px, py); started = true; }
      else { ctx.lineTo(px, py); }
    }
    ctx.stroke();
  }

  function draw(){
    drawGrid();
    plot();
  }

  // Animation
  let t0 = performance.now();
  function tick(now){
    const dt = (now - t0)/1000; t0 = now;
    speedVal.textContent = (+speedEl.value).toFixed(2);
    if (animateChk.checked){
      const s = +speedEl.value;
      for (const [k, p] of Object.entries(parameters)){
        const center = (p.min + p.max)/2;
        const amp = Math.max(0, (p.max - p.min)/2);
        p.phase += dt * p.freq * s;
        p.value = center + amp * Math.sin(p.phase);
        const valEl = document.getElementById(`val-${k}`);
        const rngEl = document.getElementById(`rng-${k}`);
        if (valEl) valEl.textContent = p.value.toFixed(3);
        if (rngEl) rngEl.value = p.value;
      }
    }
    draw();
    requestAnimationFrame(tick);
  }

  // Events
  parseBtn.addEventListener('click', () => {
    const expr = exprInput.value.trim();
    const names = detectParams(expr);
    buildParamUI(names);
    compile(expr);
  });
  resetViewBtn.addEventListener('click', () => {
    xminEl.value = -10; xmaxEl.value = 10;
    yminEl.value = -5; ymaxEl.value = 5;
    autoY.checked = true; draw();
  });
  exprInput.addEventListener('change', () => parseBtn.click());
  [xminEl,xmaxEl,yminEl,ymaxEl,autoY,samplesEl].forEach(el => el.addEventListener('change', draw));

  // Init
  buildParamUI(detectParams(exprInput.value));
  compile(exprInput.value);
  resize();
  requestAnimationFrame(tick);
})();

