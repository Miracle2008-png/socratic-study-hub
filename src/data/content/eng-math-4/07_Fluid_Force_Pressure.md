# Fluid Force and Pressure

Civil and mechanical engineers must frequently calculate the enormous forces exerted by static fluids on dams, aquariums, submarines, and storage tanks.

## 1. Pressure vs. Force

*   **Pressure ($P$)** is force per unit area. Under water, pressure depends only on depth ($h$).
    $$ P = \rho g h $$
    Where $\rho$ is the fluid density, $g$ is gravity, and $h$ is the depth below the surface.
*   **Force ($F$)** is pressure multiplied by area: $F = P \cdot A$.

If a flat plate is submerged horizontally, all points on the plate are at the exact same depth $h$. The pressure is constant over the entire plate. Therefore, calculating the force is simple multiplication:
$$ F = (\rho g h) \cdot A $$

## 2. The Problem with Vertical Submersion

If a flat plate (like a dam face or an underwater window) is submerged *vertically*, the pressure is not constant.
*   The water near the top of the plate exerts a small pressure.
*   The water near the bottom of the plate exerts a much larger pressure.

Because the pressure varies continuously with depth, we cannot use simple multiplication. We must use integration.

## 3. Calculating Hydrostatic Force

We solve this by breaking the vertical plate into thin horizontal strips. For a sufficiently thin strip, we can assume the depth $h$ is practically constant across the strip.

**The Strategy:**
1.  **Set up a coordinate system:** It is often easiest to set $y=0$ at the surface of the fluid, with positive $y$ pointing downward. Therefore, the depth $h$ is simply $y$.
2.  **Take a horizontal strip:** Consider a strip at depth $y$ with thickness $dy$.
3.  **Find the Area of the strip ($dA$):**
    $dA = L(y) \cdot dy$
    Where $L(y)$ is the width (or length) of the plate at depth $y$. For a rectangular dam, $L(y)$ is a constant width $W$. For a triangular or circular plate, $L(y)$ must be expressed as a function of $y$ using geometry.
4.  **Find the Pressure on the strip ($P$):**
    $P(y) = \rho g y$
5.  **Find the Force on the strip ($dF$):**
    $dF = \text{Pressure} \times \text{Area} = (\rho g y) \cdot (L(y) \, dy)$
6.  **Integrate:** Sum up the forces on all the strips from the top of the plate ($y=a$) to the bottom of the plate ($y=b$).

$$ F = \int_{a}^{b} \rho g \cdot y \cdot L(y) \, dy $$

## 4. Example: A Triangular Dam

Imagine a V-shaped dam (an isosceles triangle pointing down). The water surface is at the top of the dam. The height of the dam is $H$, and the width at the top is $W$.

1.  Set $y=0$ at the surface (top of the dam).
2.  The width $L(y)$ changes. At $y=0$, $L = W$. At $y=H$, $L = 0$.
    Using similar triangles: $\frac{L(y)}{H-y} = \frac{W}{H}$, so $L(y) = \frac{W}{H}(H-y)$.
3.  The pressure is $P = \rho g y$.
4.  The force integral is:
    $$ F = \int_{0}^{H} \rho g y \cdot \left[ \frac{W}{H}(H-y) \right] \, dy $$
    $$ F = \frac{\rho g W}{H} \int_{0}^{H} (H y - y^2) \, dy $$
    $$ F = \frac{\rho g W}{H} \left[ \frac{H y^2}{2} - \frac{y^3}{3} \right]_0^H = \frac{\rho g W}{H} \left( \frac{H^3}{2} - \frac{H^3}{3} \right) = \frac{1}{6} \rho g W H^2 $$

This result tells the engineer exactly how strong the concrete must be to prevent the dam from failing under the hydrostatic load.
