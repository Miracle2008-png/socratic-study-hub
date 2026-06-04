# 11. Applications: Area and Volume

In engineering, integration extends far beyond the 2D area under a curve. It allows us to calculate the exact volume of complex 3D shapes, the center of mass of irregular objects, and the work required to empty a fluid tank.

### Area Between Two Curves
To find the area trapped between an upper curve $y = f(x)$ and a lower curve $y = g(x)$ from $x=a$ to $x=b$, you integrate the difference between them:
$$ \text{Area} = \int_{a}^{b} [f(x) - g(x)] dx $$

### Volumes of Solids of Revolution
If you take a 2D curve and spin it rapidly around an axis (like a piece of metal on a lathe), it sweeps out a 3D volume. There are two primary methods for calculating this volume:

#### 1. The Disk / Washer Method
Used when you slice the solid perpendicular to the axis of rotation. The slices look like flat circular disks (or washers with holes in them).
*   **Disk (No hole):** $V = \pi \int_{a}^{b} [R(x)]^2 dx$
*   **Washer (Hole):** $V = \pi \int_{a}^{b} \left( [R_{outer}(x)]^2 - [R_{inner}(x)]^2 \right) dx$

#### 2. The Cylindrical Shells Method
Used when you slice the solid parallel to the axis of rotation. The slices look like concentric tin cans.
$$ V = 2\pi \int_{a}^{b} x \cdot f(x) dx $$
(Where $x$ is the radius of the shell, and $f(x)$ is the height).

### Worked Example: The Disk Method
**Problem:** Find the volume of the solid formed by revolving the curve $y = \sqrt{x}$ from $x=0$ to $x=4$ around the x-axis.

**Solution:**
Because we are revolving around the x-axis, slicing perpendicular to it creates solid disks without holes.
Radius $R(x) = \sqrt{x}$.
$$ V = \pi \int_{0}^{4} [\sqrt{x}]^2 dx $$
$$ V = \pi \int_{0}^{4} x \, dx $$
Integrate using the reverse power rule:
$$ V = \pi \left[ \frac{x^2}{2} \right]_{0}^{4} $$
Evaluate from 0 to 4:
$$ V = \pi \left( \frac{(4)^2}{2} - \frac{(0)^2}{2} \right) $$
$$ V = \pi \left( \frac{16}{2} - 0 \right) = 8\pi $$
The exact volume is $8\pi$ cubic units.
