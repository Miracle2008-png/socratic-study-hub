# Surface Tension and Capillarity

At the interface between two immiscible fluids (like liquid water and gaseous air), the fluid molecules experience an imbalance of intermolecular cohesive forces, resulting in macroscopic phenomena that defy simple hydrostatics.

## 1. Surface Tension ($\sigma_s$)

Within the bulk of a liquid, a molecule is pulled equally in all directions by surrounding molecules. However, a molecule exactly at the surface has no liquid molecules above it. It is pulled downward and sideways, but not upward.

This imbalance creates a "skin" across the surface that acts like a stretched elastic membrane. The surface attempts to contract to the minimum possible area (which is why free-falling raindrops form spheres, the shape with the minimum surface-area-to-volume ratio).

**Surface Tension ($\sigma_s$)** is defined as the force per unit length [$N/m$] acting to stretch or pull the surface. It is a property of the specific liquid-gas (or liquid-liquid) interface, highly dependent on temperature (decreasing as temperature rises).

## 2. Pressure Drop Across a Curved Interface

Because the surface acts like a stretched rubber balloon, if the surface is curved, the tension forces create a pressure difference across the interface. The pressure on the concave (inside) side is always higher than the pressure on the convex (outside) side.

For a spherical droplet of radius $R$, a force balance between internal pressure pushing out and surface tension pulling the perimeter yields the **Young-Laplace Equation**:
$$\Delta P = P_{inside} - P_{outside} = \frac{2\sigma_s}{R}$$

- As $R \to \infty$ (a flat surface), $\Delta P = 0$.
- As $R \to 0$ (a microscopic droplet), the internal pressure becomes immensely high.

For a soap bubble, which has *two* surfaces (an inside film and an outside film), the pressure difference is double: $\Delta P = 4\sigma_s/R$.

## 3. Wetting and the Contact Angle ($\theta$)

When a liquid droplet is placed on a solid surface, three phases meet (solid, liquid, gas). The angle the liquid makes with the solid surface (measured inside the liquid) is the **contact angle $\theta$**.

- **Wetting Liquid ($\theta < 90^\circ$):** The liquid molecules are more attracted to the solid (adhesion) than to each other (cohesion). It spreads out. (e.g., Water on clean glass).
- **Non-Wetting Liquid ($\theta > 90^\circ$):** Cohesion dominates adhesion. It beads up. (e.g., Mercury on glass, or water on a waxed car hood).

## 4. Capillary Action

If you place a narrow glass tube (capillary) into a beaker of water, the water climbs up the tube, defying gravity! 

Because water wets glass ($\theta \approx 0^\circ$), it crawls up the inner wall, forming a concave curved surface (meniscus). By the Young-Laplace equation, the pressure immediately under this curved meniscus is *lower* than atmospheric pressure. The atmospheric pressure pushing down on the beaker outside forces fluid up the tube until the hydrostatic weight of the column balances this pressure deficit.

A force balance (upward surface tension = downward weight of column) yields the capillary rise height $h$:
$$h = \frac{2\sigma_s \cos\theta}{\rho g R}$$
Where $R$ is the radius of the tube.

Notice that $h$ is inversely proportional to $R$. Capillary action is incredibly powerful in microscopic tubes. This exact mechanism is how tall trees draw water from their roots to leaves hundreds of feet in the air without any mechanical pump.

*(If a non-wetting fluid like mercury is used, the meniscus is convex, and the fluid is pushed down below the beaker level—capillary depression).*
