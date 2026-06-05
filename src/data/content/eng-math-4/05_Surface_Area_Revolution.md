# Surface Area of Revolution

Just as we revolved a 2D region to find a 3D volume, we can revolve a 1D curve to find a 3D **surface area**. Think of this as finding the area of the "skin" or the paint required to coat a solid of revolution.

## 1. The Concept of a Frustum

To approximate the surface area, we break the curve into small straight-line segments (just like in arc length) and revolve each segment.

When a straight line segment of length $L$ is revolved around an axis parallel to it, it forms a cylinder. However, our line segments are usually tilted. When a tilted line segment is revolved around an axis, it sweeps out the surface of a truncated cone, known as a **frustum**.

The lateral surface area of a frustum is:
$$ A = 2\pi \cdot r_{avg} \cdot L $$
Where $r_{avg}$ is the average radius of the two ends of the frustum, and $L$ is the slant length.

## 2. The Surface Area Formula

If we make the segment infinitesimally small (length $ds$), the average radius is simply the distance from the curve to the axis of revolution at that point.

The infinitesimal surface area $dS$ swept out by the segment $ds$ is:
$$ dS = 2\pi \cdot (\text{radius}) \cdot ds $$

To find the total surface area $S$, we integrate this over the entire curve:
$$ S = \int 2\pi \cdot (\text{radius}) \cdot ds $$

Recall from the previous module that the infinitesimal arc length $ds$ can be written as either:
*   $ds = \sqrt{1 + [f'(x)]^2} \, dx$
*   $ds = \sqrt{1 + [g'(y)]^2} \, dy$

## 3. Revolution around the x-axis

If the curve $y = f(x)$ is revolved around the x-axis, the radius of revolution from the x-axis up to the curve is simply the y-value of the curve, which is $f(x)$.

**Integrating with respect to x:**
$$ S = \int_{a}^{b} 2\pi f(x) \sqrt{1 + [f'(x)]^2} \, dx $$

**Integrating with respect to y:**
If the curve is $x = g(y)$, the radius is still $y$.
$$ S = \int_{c}^{d} 2\pi y \sqrt{1 + [g'(y)]^2} \, dy $$

## 4. Revolution around the y-axis

If the curve is revolved around the y-axis, the radius of revolution from the y-axis to the curve is the x-value.

**Integrating with respect to x:**
If the curve is $y = f(x)$, the radius is $x$.
$$ S = \int_{a}^{b} 2\pi x \sqrt{1 + [f'(x)]^2} \, dx $$

**Integrating with respect to y:**
If the curve is $x = g(y)$, the radius is $g(y)$.
$$ S = \int_{c}^{d} 2\pi g(y) \sqrt{1 + [g'(y)]^2} \, dy $$

## 5. Summary Strategy

Do not try to memorize all four formulas. Instead, remember the core concept:
$$ S = \int 2\pi \cdot r \cdot ds $$

1.  **Identify $ds$**: Choose whether you are integrating with respect to $x$ or $y$, and write down the corresponding $ds$ formula.
2.  **Identify $r$**: Determine the distance from the axis of revolution to the curve.
    *   Revolving around x-axis: $r = y$
    *   Revolving around y-axis: $r = x$
3.  **Substitute**: Substitute your chosen variables so everything matches the variable of integration.
