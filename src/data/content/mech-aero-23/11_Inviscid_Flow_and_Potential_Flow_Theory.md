# Inviscid Flow and Potential Flow Theory

By making two massive assumptions—that flow is **incompressible** (constant density) and **inviscid/irrotational** (frictionless, no vorticity)—we bypass the unsolvable Navier-Stokes equations and arrive at the linear Laplace equation ($\nabla^2 \phi = 0$ and $\nabla^2 \psi = 0$). 

This regime is known as **Potential Flow Theory** or Ideal Fluid Flow.

## 1. Why Ignore Viscosity?

To a layman, assuming air is "frictionless" seems absurd; wouldn't planes fall out of the sky? 
In reality, the viscosity of air is incredibly small. For flow over an airplane wing or a car, the effects of viscous friction are strictly confined to a microscopic layer of air immediately touching the surface of the vehicle—the **Boundary Layer**. 

Everywhere else in the massive surrounding flow field, the viscous shear stresses are practically zero. Therefore, treating 99% of the flow field as an ideal, irrotational, inviscid potential flow yields incredibly accurate predictions for velocity and pressure distributions. (We just have to remember to add the boundary layer back in later to calculate drag).

## 2. Elementary Potential Flows

Because Laplace's equation is linear, mathematicians identified several basic, elementary "building block" flows that satisfy it perfectly.

**1. Uniform Flow:**
A perfectly straight, uniform wind blowing at velocity $U$.
- Streamlines are straight parallel horizontal lines.
- $\psi = U y$
- $\phi = U x$

**2. Source / Sink:**
Fluid exploding outward from a single point in space (Source, $+q$), or being sucked into a single point (Sink, $-q$), like a drain.
- Streamlines are straight lines radiating outward from the origin. Equipotential lines are concentric circles.
- Velocity drops off as $1/r$.
- $\psi = \frac{q}{2\pi} \theta$ (in polar coordinates).

**3. Free Vortex:**
Fluid swirling in perfect circles around the origin. Unlike a forced vortex (like water in a spinning bucket), a free vortex has a singularity at the center where velocity goes to infinity, and velocity drops off as $1/r$ moving outward. It is irrotational everywhere except the exact origin point.
- Streamlines are concentric circles.
- $\psi = -\frac{\Gamma}{2\pi} \ln r$
*(Where $\Gamma$ is the circulation, representing the strength of the vortex).*

**4. Doublet:**
Imagine a Source and a Sink placed very close to each other. Fluid explodes out of the source and is immediately sucked into the sink, creating circular lobes of flow. If you bring them infinitely close together while increasing their strength, you create a Doublet.

## 3. D'Alembert's Paradox

In 1752, the mathematician d'Alembert used these perfect potential flow equations to calculate the aerodynamic drag force on a sphere moving through an ideal fluid. 

He found that the pressure pushing on the front of the sphere was exactly perfectly balanced by the pressure pushing on the back of the sphere. The mathematical result: **Drag = 0**.

This is d'Alembert's Paradox. Potential flow theory predicts that all objects experience exactly zero aerodynamic drag. This glaring flaw is exactly what led Ludwig Prandtl to discover Boundary Layer Theory in 1904, proving that the tiny microscopic layer of viscous friction we ignored is solely responsible for flow separation, pressure imbalances, and aerodynamic drag.
