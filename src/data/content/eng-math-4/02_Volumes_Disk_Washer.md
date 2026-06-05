# Volumes by Disk and Washer Method

When a 2D region is rotated around an axis, it sweeps out a 3D solid known as a **solid of revolution**. We can find the volume of this solid by slicing it perpendicular to the axis of revolution.

## 1. The Disk Method

Use the disk method when the axis of revolution forms one of the boundaries of the 2D region. When you slice the resulting solid perpendicular to the axis of revolution, the cross-section is a solid circle (a "disk").

The volume of a very thin cylinder (a disk) is $V = \pi r^2 h$.
*   If revolving around a horizontal axis (like the x-axis), the radius $r$ is the y-value of the curve, $f(x)$. The thickness $h$ is $dx$.
*   Therefore, $dV = \pi [f(x)]^2 dx$.

**Revolution around the x-axis:**
If the region bounded by $y = f(x)$, the x-axis, $x=a$, and $x=b$ is revolved around the x-axis:
$$ V = \pi \int_{a}^{b} [f(x)]^2 \, dx $$

**Revolution around the y-axis:**
If the region bounded by $x = g(y)$, the y-axis, $y=c$, and $y=d$ is revolved around the y-axis, you must integrate with respect to $y$:
$$ V = \pi \int_{c}^{d} [g(y)]^2 \, dy $$

## 2. The Washer Method

Use the washer method when the region being revolved does *not* sit completely flush against the axis of revolution. When the solid is formed, there will be a hollow cavity running through the middle. A cross-section sliced perpendicular to the axis of revolution will look like a circle with a hole in it—a "washer" or "donut."

The area of a washer is the area of the outer circle minus the area of the inner hole: $A = \pi R_{outer}^2 - \pi r_{inner}^2 = \pi (R_{outer}^2 - r_{inner}^2)$.

**Revolution around the x-axis:**
Let $R(x)$ be the outer radius (the curve further from the axis of revolution) and $r(x)$ be the inner radius (the curve closer to the axis).
$$ V = \pi \int_{a}^{b} \left( [R(x)]^2 - [r(x)]^2 \right) \, dx $$
*Warning: It is $(R^2 - r^2)$, NOT $(R - r)^2$. This is a very common mistake.*

**Revolution around lines other than the x or y axis:**
If revolving around a line like $y = -2$:
1.  Draw a radius from the axis of revolution ($y = -2$) to the outer curve. This length is $R(x) = f(x) - (-2) = f(x) + 2$.
2.  Draw a radius from the axis to the inner curve. This length is $r(x) = g(x) - (-2) = g(x) + 2$.
3.  Set up the integral: $V = \pi \int_{a}^{b} \left( [f(x)+2]^2 - [g(x)+2]^2 \right) \, dx$

## 3. General Cross Sections

The disk and washer methods are specific cases of a more general principle. If you know the formula for the area of a cross-section $A(x)$ perpendicular to the x-axis, the volume of the solid is simply:
$$ V = \int_{a}^{b} A(x) \, dx $$

For example, if a solid has a circular base, and every cross-section perpendicular to the x-axis is a square, then $A(x) = [s(x)]^2$, where $s(x)$ is the side length of the square determined by the curves forming the base.
