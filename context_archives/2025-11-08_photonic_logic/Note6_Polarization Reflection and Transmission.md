---
tags:
  - PratherElectromagenticFall2025
subject: Polarization, Reflection and Transmission
Mood:
creation-date: 05-10-2025
Note Model:
aliases:
Prompt:
---
![[Polarization_Reflection and Tranmission.pdf]]


National Reconananise office. It is an intelligence office. Professor is giving a talk on how photonics can help satellite.


## Slide 5:
It is important to understand where gamma comes from in the context of it as a general way to look at the solution of to wave equation in the context of loss in the media. Every media has a loss sigma. Sigma gives losses as a result of the conduction but the material loss arises from the complex part of the permittivity. Ex is the orientation of the field. In the plane wave context, within the plane, the electric field does not vary. However, it does vary as a function of Z, this is because it goes up and down as a sine wave as it goes down the Z axis. But only points in the X direction. 

## Slide 7:
The equation written in the blue pen is not correct. gamma is equals alpha plus beta


## Slide 8
In a lossy media, that equation is the complex wave impedance. 

## Slide 13 to 16:
Discuss the derivation of Impedance in general media

## Slide 17:
Polarization is the orientation of electric field as it propagates through free space. There are three general types of polarizations - Linear polarization means that the electric field projects itself along a line, it does not have to be aligned straight up and down or side to side. It can be aligned anywhere, so that it always follow the line. Circular polarization is that it goes in spiral as it goes down the axis, if the magnitude is always  the same as it goes down the propagation axis, it is called circular polarization. If the magnitude changes as it goes down, it forms an ellipse. It can spin to the right or left called right circular or left circular polarization. 

The most general way to represent the polarization is called elliptical polarization which means that the magnitude does always spin to the left or right, it changes. If Ex and Ey are equal and in phase, then their vector sum will be some kinda circle.  If Ex and Ey is not the same then it will project into an ellipse. 


## Slide 19:
In depth explanation of what each of the polarization types are;
In linear, the electric field is projected along the vertical axis, it can be horizontal axis, it can be a line anywhere in the given plane. But it is always a line. In this case, it ought to be only one component projected on itself as one goes down the axis. 

If there are two components, then they have to be equal and static relative to each other and it essentially points along the vector sum of the two values. If however, those two components, Ex and Ey has a phase between them, say +/- pi/2, then they are not necessarily aligned along the origin of the Z axis, there is a little bit of an offset. There is a  superimposition that is based on the phase that makes the vector constantly rorate along the circle. However, if there is different amplitude as well as different phase, that is when we have a general case of elliptical. 


## Slide 22:
We can have two components and still have linear polarization, as long as phi_x and phi_y are the same. Here we are just considering the forward going components, we combine the E_x term and the E_y term. The orientation of the phi is important. If we can assume that the E_x0 and E_y0 are the same value. Then phi_x and ph_y equals to eachother, then they are going to add into some vector sum that will give a projection of a constant line within a plane. The line will go up and down as it propagates and it will not be along this line. We recover the magnetic field by doing the Curl. 

We have to multiply e^jwt and take the real part and get the instantaneous version of the field in terms of cosine. 


## Slide 23 and 24:
We call it linear X polarized. It is linear polarization along the X axis. It can have some phase to it, it does not have to be zero at the origin. It can be slightly displaced =/- shift which is the phase term. 

## Slide 25:
Here we assume the opposite as the E_x term is equals to zero and the E_y term is not equals to zero. Because it is in the Y-axis, it is linear Y polarization. When discussing antenna, this is important -Because most times, we have an antenna with some aperture and that aperture will define the polarization of the field, in antenna sense, it is called H and V which is horizontal and vertical polarization. 

## Slide 27 and 28:
Here we have phi_x and phi_y being equals to some phi and the difference between them is zero. In this case the E_x and the E_y are in phase, even though they have some offset phase phi. Then we look at the magnitude of the electric field which is the Ex term squared plus the E_y term squared and then take the square root of it. The phi here is just some offset from the Z equals to zero axis. 

Here if phi is equals zero, then it becomes linear x polarized. If pi/2, then it is linear y polarized. If some arbitrary angle, then it is projected within the x,y plane. It is not linear x or y, but a linear polarization at some angle phi. It could be anywhere along the plane. 


## Slide 30 to 38:
The amplitudes are equal to some radial electric field component. 
The propagation is along the Z axis and if it spin to the right hand side, it is called right circularly polarized. 

In the CCW, the thing that changes is the minus sign in front of wt. As time increase it goes to the left. 

## Slide 42:
Elliptical polarization, the magnitude of the fields are not equal. If the angle is pi/2, there is possibility of circular polarization but the magnitudes have to be equal. If the magnitudes highlighted in red are not equal but the phase is pi/2, then it is clearly elliptical polarization. 

E_r and E_L are the jones vector. 

## Slide 43:
E_R and E_L terms are not equal. 

## Slide 46 and 47:
AR is the axial ration is the ratio of max to the min and can be thought of an the degree of ellipticity. Every ellipse is defined with a parameter that tells you the extent where it is not circular. 

Being elliptical does not mean that it is spinning in one way or another, it could be elliptical and be CW or CCW. 


## Slide 65:
The sphere defines the polarization state, be it linear, circular or elliptical. It defines it as it is projected on a spherical reference.

This is the nature of the spherical reference:
the equator of the sphere is all linear polarization, whether it points to the left or right. If we go all the way to the poles, north pole and south pole, we have circular polarization. As we look at the circular polarization and deviate from the pole, it becomes more and more elliptical. The ellipticity or something called the essentricity of the ellipse, which is the ratio of the major to the minor axis, as we collapse the circular into more elliptical, in the limit as it goes to infinity eccentricity, it becomes a line. As we start in the north right hand circular and move them down to the equator, it eventually become linear polarization based on the direction it points. 

The sphere accounts for any kind of polarization you can think of: The idea of circular is along the poles, the idea of linear is along the equator and everything changes as we move from pole to the equator and as we rotate around the sphere. Anytime you have a wave, it will have one point on the poincere sphere because it will have one unique polarization. 

There is something called polarization loss. Polarization loss is important to consider in any type of wireless communication system, be it Radar. This is because every antenna, has some kind of polarization characteristics. If you launch an electric field and the electric field the electric field has some orientation, it is dependent on the antenna designed and how the antenna is designed. All satelite communication antennas are designed for circular. This is because, we can project elliptical on the circular and get some nonzero value. But if we project a linear on the circular, we can get almost nothing. This is because we are only getting one component and the componenet could be athorgonal. If we always design the antenna to have circular polarization, then we have the advantage of always getting some kinda good signal but a circular polarization requires two field components. It requires in the E_x and in the E_y. So now the antenna requires two feeds. Think of it as a dipole (look at the drawing in the red pen). The two antenna can form a plus sign and one feeding the horizontal one and the other feeding the vertical one. If they are fed in phase and in equal weight, then we get some combination of linear polarization coming out of it. If they are fed with equal weights but with out of phase, then what comes out of the cross dipoles will be circular polarization. If they are fed with non equal weights, and an arbitrary phase, then it will come out to be elliptical. It changes its projection. They will have some point in poincere sphere. The probelm is if there is just one vertical dipole, and transmit a field in the E_x term, and it goes from one point to another, if the antenna in the other side is a horizontal antenna, then incident polarization will not excit any fields on it. So even though there is a clear line of sight, no losses and a lot of power, no signal will be recieved. This is because, it is the boundary condition in the electric field that gives rise to the signal on the reciever, that boundary condition is the fact that electric field has to be equals to zero. And the magnetic field equals a current. That current is what is recieved, and that current goes into the feed point of the antenna, which usually goes to an amplifier, a low noise amplifier LNA, which jacks it up! and then puts the signal into some ADC, and goes into DSP to do modulation on the IQ values. The loss is called the polarization loss factor PLF. Check the slide on the derivation of friss equation. 

Inter-satellite links are high data rates
It is hard to have polarization based multiplexing in environment that are not pristine. This is because when the electric field bounce off irregular objects, they generate their own polarization. 

## Slide 72:
This is the image of the poincere sphere. At the poles we have circular, the south pole is RHC. From circular towards the equator, the circle starts to collapse into, the eccentricity of the the ellipse becomes infinite. It the collapses to a line. The orientation of the line relative to the equator, is the projection of the linear polarization onto the x and y axis. This is a nice way to visualize the projection of the polarization state. P_a is the polarization of the antenna, and P_w is the polarization of the wave. If there is a wave coming from a recieve antenna, if the polarizations are not aligned, no matter how good the system is designed, how good the amplifiers are, how sensistive the system is, if the polarizations are not aligned, no signal recieved. 


## Slide 73:
This is the loss. P_w and P_a are the polarization state of the wave and antenna.. This is inner product. And idealy we want the angle between them to be zero so that cos(0) will give us maximum. Cos(0) is 1. If its pi/2 or 90, then its not good for us. 


## Slide 80: 

Here the dot in the electric field signifies that the electric field is point out of the screen while the cross means that the electric field is going into the screen. And that is the Y

This chapter is about reflection and transmission. From here we go into scattering and waveguide

Lets imagine a planar interface like in a mirror. If the planar interface is a mirror in bath room, where someone is shaving, then the wave hitting the mirror from all direction and reflecting back forms the image we see. But if the mirror were a glass or metal, then it will go through. This can be imagined in the context of TEM mode where the electric field and magnetic field are transverse to the direction of propagation. 

## Slide 81:
E_i is incident electric field. Hi_ is also incident. But if the incident hits a surface, then there will be a refelected electric and magnetic component and also transmitted field. All these are generated at the material interface. Using boundary conditions, in general the tangential component of one side is equals to tangential component of the other side. Its only when we assume material properties like in PEC that the one inside is zero. In general E_t1 has to be equals to E_t2. E_t1 is sum of the left hand side of incident and relfected wave. On the right hand side it is just E_t2. 

Recall that we have defined the reflection coefficient which is the ratio of E_r/E_i equals gamma. The tranmission coefficient is equals 1- reflection coefficient. This is also applicable to magnetic field because H_t1 is equals to H_t2, in the absence of current source. 


## Slide 82:
The direction of Z here is relative to the Z axis ie (Z=-L_i)
![[20251007_122234.jpg]]

Here the analysis is considered for a distance where the electric field is -l away from the second media. The wave can interact with the boundary and return back to form a standing wave. That is how we calculated the reflection coefficient. 


## Slide 83:
Short circuit is when the boundary is a PEC. As soon as we put a voltage, it goes to zero. If we have PEC, then we cannot have resistance. When where is no resistance, then we cannot have V =IR. if V is equals zero, V is the electric field because its unit is in volts/meter. It has be extinguided. Short circuit means that at Z = 0, the electric field is equals zero. If that is true the Et_2 is equals zero because we cannot transmit into a PEC. What that means is the E_i + E_r is equals zero. 


Open circuit is when there is a huge load. There is a debate whether we should have high input impedance. They do not couple power well.  