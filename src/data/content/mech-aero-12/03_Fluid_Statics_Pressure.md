---
title: "Fluid Statics: Pressure and the Hydrostatic Equation"
---

# Fluid Statics: Pressure and the Hydrostatic Equation

In fluid statics, the fluid is completely at rest. There is no flow, no velocity, and no shear stress. The only force acting between fluid particles is a **normal compressive force** — we call this **pressure**.

## 1. The Nature of Pressure

Pressure ($P$) is defined as the normal force per unit area acting on any surface within or bounding the fluid:
$$ P = \frac{F_n}{A} \quad \text{[Pa = N/m}^2\text{]} $$

A critical property of pressure in a static fluid is **Pascal's Principle:**
**At any given point within a static fluid, pressure acts with equal intensity in all directions simultaneously.**

This means the pressure at a specific point does not depend on which direction you orient your measurement surface. Pressure is a scalar quantity—it has magnitude but no direction.

## 2. The Hydrostatic Equation

Consider a small vertical column of fluid at rest. Two forces act on this fluid column vertically:
1.  The pressure pushing upward on the bottom face: $P \cdot A$ (upward)
2.  The pressure pushing downward on the top face: $(P + dP) \cdot A$ (downward)
3.  The weight of the fluid slice itself: $\rho g \, dA \, dy$ (downward)

For the fluid to remain perfectly at rest ($\sum F = 0$):
$$ P \cdot A - (P + dP) \cdot A - \rho g \, A \, dy = 0 $$
$$ -dP = \rho g \, dy $$

Rearranging (taking downward as the positive depth $h$):
$$ \frac{dP}{dh} = \rho g $$

Integrating between the surface (where gauge pressure $= 0$) and a depth $h$ below:

$$ \boxed{P = \rho g h = \gamma h} $$

This is the **Hydrostatic Pressure Equation**. It states: **Pressure in a static fluid increases linearly with depth.** For every 10 meters deeper in water, pressure increases by approximately 98,100 Pa ≈ 1 atm.

## 3. Key Implications

*   **Pressure is independent of horizontal position.** Two points at the same depth in a connected static fluid always have exactly the same pressure, regardless of the shape of the container. This is why dams built at the same depth must hold the same pressure, even if the reservoir upstream is huge.
*   **Pressure acts perpendicular to any surface.** Water pressure on a submerged wall pushes straight into the wall—always perpendicular.
*   The pressure at any depth is an absolute sum of all the layers above it. At the bottom of the ocean (11 km deep), the pressure is over 1000 atmospheres.
