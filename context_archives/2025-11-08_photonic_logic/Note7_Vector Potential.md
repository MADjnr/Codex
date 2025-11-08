---
tags:
  - PratherElectromagenticFall2025
subject:
Mood:
creation-date: 15-10-2025
Note Model:
aliases:
Prompt:
---
This is a comment-----[Input Slide on Chapter 6 here: Vector Potential]

In the antenna design, the reason we have a horn that flares is for the purpose of transforming the waveguide impedance into that of free space to minimize back reflections

## Slide 6:
How we solve this is the question:
- When we have sources that are the non trivial thing to solve. we have a curl E or H with some kind source term, how do we solve it. What we do, is figure out a simplified way of solving for E and H in the presence of sources that are not so complicated. Get a source, solve the problem, and somehow derive E and H. That is the main reason for using vector potential. The vector potential enable us to solve for inhomogeneous type of sources and then recover the fields by simple derivatives. 

We use this formalism to figure out what we want. What we want is that there are sources and we want to know the fields that those sources generate. If we have antenna like in the cell phone, we push to send a message in the phone. When we do this, through the circuit in the cell phone, it generate a current  distribution that goes around the antenna outside the phone, called looped antennas. That current forms a distribution on the metal structure and then oscillates as a function time, which gives rise to a radiated field. To understand this radiated field we look at the sources in the context of the physical distribution. So we take the geometry and look at the sources in the geometry and figure out how to use the sources in the geometry to figure out how the field come out. To do that are so many ways, but here we gonna use the vector potential. 


## Slide 8:
The curl of a vector equals zero means that I represent that vector as gradient of some scalar function. The divergence of a curl gives zero, it is the same, same with the curl of a gradient of a scalar also gives zero. 

## Slide 12:
There is a wave equation like equation, equal to a source. And it can be solved using green function technique. We make this assumption using Gauge theory. 

## Slide 13:

## Slide 20:
Go from Slide 8 to here
There are different guages for different formulations. The one that corresponds to the wave equation is the one that derived by lorentz. There is one we use in electrostatics, it is called the coulomb guage. There are so many times of guage in mathematics. It is important to have this awareness. The good thing with using the lorenz guage is that we pass the electric field in terms of vector potential. The good news is that once we get A, we can easily recover E and H by doing nothing more than derivatives. 

## Slide 9:
Slide 9 is here because thats how the explanation in the class is arranged. 


## Slide 22:
Looking the lorentz guage, then we obtain the second order partial differential equation for an inhomogeneous source. The solution to that is the integral and the term in exponential is the greens function. It is usually called G. It is the solution to a spherical wave or a point source. 
All the the integral is that it takes the current and break it into sources and add, add, add. All integral does is add, add, add. All derivative does is subtract and we do that over some volume. Anytime we see a primed variable in the electromagnetics, the primed variable corresponds to the location of the source within the reference frame. 


## Slide 29:
This is the solution space in cartesian coordinate as a way to  look at radiation problems and scattering problems. The convention of this notation is that all sources are represented with prime coordinates. It is the spatial coordinate for the location of the sources. The non primed coordinates are the points of observation. 

## Slide 30:
We have the sources and the point of observation. The reference frame can be arbitrary and if we have the latitude to do that, then we would refer the source to be located at the origin, in that case the vector R would just be the point of observation and we wont need to worry about vector R. In reality that is not usually the case. The reference frame could be set as the back of a ship. The wing of a plane. 

## Slide 33:
The current source can be


## Slide 35:
Vertical dipole means that I align the lines of my dipoles along the vertical axis, called the Z axis. 
The dipole is shaded in blue. We have a feed system and a current source. We put the current in the wire. It is nothing but a charge accumulation. 
But how can we have a current in two wires that are not connected, it works, think of having a battery and we connected that battery to two plates.  There is a charge accumulation in those two plates. We call that a capacitor. And we know that a capacitor has a voltage between them due to the plus charge and minus charge and it creates an electric field and if we integrate E.dl, it will gives us V, which is the voltage in the top plate and the bottom plate. If we take that plate and fold it into a wire, that is how we form this dipole. Instead of the fields going from the top and bottom plate, the field go out in space. The field lines goes the way you see it. If the polarity of the +/- changes, the field lines flip direction. We create this field lines out in space based on the ability to AC current feed. If we have a sinusiodal feed, that has some kinda acceleration to it, the field lines break off and fly away and that is how antennas work when they create radiation from a type of source, a current source, that creates a field line distribution that when we create an acceleration which means that it has a non zero second order derivative in time, the field lines breakoff and fly away and because they fly away as a result of the mutual repulsive forces, they fly away at the speed of light.

How we shape the field lines, mechanically dictates how the field lines fly away. It is important because we can create weird shapes and in far field, we can create any arbitrary radiation pattern we want, within the limitations of physics and this limitation are the solution to the equation 6-16. And J will have within it the physical form of the antenna, this is because J corresponds to the source variables of the current within the 3D volume. Then we will use the mathematical representation of that current to solve that equation within the integral construction slide 37

The feed network for an antenna is one of the most difficult part to designing an antenna. The antenna itself has a straight forward way to get to it. But the feed is never simple. This is because the feed usually comes from a waveguide feed or coaxial feed or transmission line feed and all those have impedances that vary as a function frequency. So If I want to design a very broadband antenna, I have to design a broadband feed. And this is where the challenge it. 
In our group, we use an optical fiber which has no RF impedance to it. Then we put a photodetector, and a fiber will hit the photodetector and create a current in the photodetector where the feed is. 


Time symmetry in something like metamaterials. Time inversion does not necessarily mean that we get the same answer

## The Relationship between delta function Convolution:
In time sense there is one data point. A delta function is a point unit in time. 
How many temporal frequencies are in a delta function if we look at it in frequency sense. It is infinite. If we input a delta function into an LTI, we are inputing every frequency you can think of. What comes out are only the frequency that are passed by the system. #ModulationWithPrather/TFLN-Filters . That is why it is called transfer function because the frequency is transferred from the input to the output. If we do a LTI system as low pass filter and put a delta function the only thing that comes out is the low frequencies defined by the time constant. Or we can have bandpass system and we put all kinda frequencies, the only the thing that comes out is one little range of frequencies which are the only frequencies that transfers from the input to the output, hence the transfer function. The transfer function is the fourier transform of the response to the impulse or the impulse response, h(t), so h(t) transfers to h(w). The main message is that if we input a delta function into an LTI, we are inputting every frequency you can think about, what comes out are the only frequencies that are passed by the system. That is why it is called transfer function. Because the frequencies are transferred from the input to the output. 

This is how this concept is related to the work we are talking about:
	When we use a green's function, what we do is that we assume that the current J in the right hand side in the wave vector potential is a point current, a delta function current. If we look at it in context, we have a point current and the response to that, you will think its something called impulse response, it is called green functions. In electromagnetics, we use the same concept in LTI in 305. That means that when we put a point current, then we look at the solution to that as a green function, as a response to the impulse current. This is important when you look at it from the point of view to the concept of convolution - the input x(t) can be seen as lots of delta functions, each one put into the LTI system and each have an output corresponding to delayed delta function in the input which is also the delayed version of impulse response, and when we add that up, it becomes a convolution. 
	So what we do in electromagnetics is solving for the point current, getting the green function and using it through an integral to add everything up like a convolution or superposition. 

You have to see how everything is related. As long as we stay within the linear regime, everything is analogous, you just have to draw this analogies when you study. The more your insight it and the more you build intuition and that is what makes an engineer, to see complex thing in simple. 

A CNN uses the same principle to the same principle to convolve inputs to get a transfer function which is based on the weights. A CNN is not more than when you sum things together and asign them a weight. A high weight or low weight corresponds to what you want to get in the output. Correlation is Convolution. 
