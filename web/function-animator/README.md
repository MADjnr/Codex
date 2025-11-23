Function Animator (Local Website)

Overview
- A single‑page site to visualize y = f(x, params) on a canvas.
- Type an expression (e.g., a*sin(b*x+c)+d), auto‑detect parameters, tweak sliders, and animate.

How to Run
- Option 1: Double‑click `index.html` to open in your browser.
- Option 2: Serve locally (recommended for best performance) using any static server:
  - Python 3: `cd Codex/web/function-animator && python3 -m http.server 8080`
  - Node (serve): `npx serve Codex/web/function-animator`
  - Then visit http://localhost:8080

Notes
- Supported functions/constants in expressions without `Math.` prefix: sin, cos, tan, asin, acos, atan, sinh, cosh, tanh, exp, log, sqrt, abs, pow, min, max, floor, ceil, round, PI, E.
- Variables: use `x` for the independent variable; any other identifiers are treated as parameters (e.g., a, b, c, d).
- Safety: expressions are evaluated locally via the Function constructor with a restricted symbol table; still only paste trusted expressions.

