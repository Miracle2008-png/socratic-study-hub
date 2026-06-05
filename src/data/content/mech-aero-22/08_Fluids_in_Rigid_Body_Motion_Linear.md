# Fluids in Rigid-Body Motion: Linear Acceleration

We defined fluid statics as a situation where there are no shear stresses. Usually, this means the fluid is completely at rest relative to the Earth.

However, consider a cup of coffee resting on the dashboard of a car. When the car accelerates continuously, the coffee sloshes back, and eventually, the liquid surface settles at a constant slanted angle. The fluid is now moving relative to the Earth, but the fluid particles are *not moving relative to each other* or relative to the cup. It moves as a solid block.

This is **rigid-body motion**. Because there is no relative motion between fluid layers, there is no shear stress. Therefore, we can analyze this using the laws of fluid statics!

## 1. The General Equation

The general equation of motion for a fluid element is the Navier-Stokes equation. If shear stresses are zero, it reduces to Euler's equation:
$$\nabla P = \rho(\vec{g} - \vec{a})$$

Where $\nabla P$ is the pressure gradient, $\vec{g}$ is the gravity vector (downward), and $\vec{a}$ is the rigid-body acceleration vector of the container.
This states that the pressure gradient is aligned with the effective "apparent gravity" felt by the fluid.

## 2. Linear Acceleration on a Horizontal Path

Consider a rectangular tank of water accelerating horizontally to the right with constant acceleration $a_x$. There is no vertical acceleration ($a_z = 0$).

The equations become:
$$\frac{\partial P}{\partial x} = -\rho a_x$$
$$\frac{\partial P}{\partial z} = -\rho g$$

Integrating these partial derivatives yields the pressure field:
$$P(x,z) = P_0 - \rho a_x x - \rho g z$$
(where $P_0$ is the pressure at the origin).

## 3. The Shape of the Free Surface

The free surface of a liquid is a line of constant pressure (isobar), specifically where $P = P_{atm}$.
Setting $P(x,z)$ to a constant and differentiating ($dP = 0$):
$$0 = -\rho a_x dx - \rho g dz$$
$$\frac{dz}{dx} = -\frac{a_x}{g}$$

The term $dz/dx$ is the slope of the free surface. Since $a_x$ and $g$ are constants, the slope is constant.
**Result:** The free surface is a perfect, flat, inclined plane.

The angle $\theta$ the surface makes with the horizontal is:
$$\tan\theta = \frac{a_x}{g}$$

As acceleration $a_x$ increases, the fluid piles up higher against the back wall. If $a_x = 1g$ ($9.81 m/s^2$), the fluid surface rests at exactly $45^\circ$.

## 4. Vertical Acceleration

Consider an elevator accelerating upward with $a_z$ ($a_x = 0$).
$$\frac{\partial P}{\partial z} = -\rho(g + a_z)$$
The free surface remains perfectly horizontal. However, the apparent gravity increases. The hydrostatic pressure at depth $h$ is now:
$$P = \rho (g + a_z) h$$
If the elevator is in free-fall ($a_z = -g$), the apparent gravity is zero, pressure is uniform everywhere, and the fluid exhibits zero-gravity behavior.
