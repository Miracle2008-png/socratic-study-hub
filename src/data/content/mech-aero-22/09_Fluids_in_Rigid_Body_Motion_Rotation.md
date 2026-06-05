# Fluids in Rigid-Body Motion: Rotation

Consider a cylindrical tank of liquid spun at a constant angular velocity $\omega$ around its vertical axis. Initially, viscosity drags the fluid along with the walls. Eventually, the entire body of fluid spins together as a single solid unit (a forced vortex). 

Because the fluid rotates as a rigid body, there are no shear stresses between fluid layers. We can apply fluid statics.

## 1. The Governing Equations

We use cylindrical coordinates ($r, \theta, z$). 
- Acceleration in the radial direction is centripetal: $a_r = -r\omega^2$.
- Acceleration in the vertical direction is zero: $a_z = 0$.

The Euler equations become:
$$\frac{\partial P}{\partial r} = \rho r \omega^2$$
$$\frac{\partial P}{\partial z} = -\rho g$$

Pressure increases outward (due to centrifugal effects pushing fluid to the walls) and increases downward (due to gravity).

Integrating these gives the pressure field:
$$P(r,z) = \frac{\rho \omega^2 r^2}{2} - \rho g z + C$$

## 2. The Shape of the Free Surface

The free surface is an isobar (surface of constant pressure, $P = P_{atm}$). Setting $P$ to a constant and solving for $z$:

$$z_{surface} = \frac{\omega^2 r^2}{2g} + C'$$

This is the equation of a parabola. When spun, **the free surface of a liquid forms a perfect paraboloid of revolution.**

To find the constant $C'$, we set the origin $r=0$ at the lowest point of the free surface (the center vertex), where $z=h_0$. Thus $C' = h_0$.
$$z_s(r) = h_0 + \frac{\omega^2 r^2}{2g}$$

## 3. Volume Conservation

As the fluid spins, it crawls up the walls and dips in the center, but the total volume of liquid in the tank remains constant (assuming it hasn't spilled over the edge).

By integrating the volume of the paraboloid and equating it to the initial resting volume (a flat cylinder of height $H$), we find an elegant geometric fact about paraboloids:

**The vertex (lowest point) drops exactly as much as the edge (highest point) rises.**
- Height of fluid at the wall: $z_{edge} = H + \frac{\Delta z_{max}}{2}$
- Height of fluid at the center: $h_0 = H - \frac{\Delta z_{max}}{2}$

Where $\Delta z_{max} = \frac{\omega^2 R^2}{2g}$ is the total height difference between the edge and the center ($R$ is the tank radius).

## 4. Engineering Applications

**1. Centrifuges:** By spinning very fast, $\omega^2 r$ becomes vastly larger than $g$. This creates an immense artificial gravity gradient in the radial direction, which is used to separate fluids of slightly different densities (like blood components or uranium isotopes), or to force solids to settle out of liquids.
**2. Liquid Metal Telescopes:** A slowly spinning dish of liquid mercury forms a perfectly smooth, flawless parabolic mirror, much cheaper to produce than grinding a solid glass lens. It can only point straight up, but is highly effective for zenith astronomy.
