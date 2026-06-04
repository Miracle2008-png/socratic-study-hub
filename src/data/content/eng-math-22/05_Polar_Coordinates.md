# 5. Double Integrals in Polar Coordinates

Trying to integrate over a circular region using standard $xy$ Cartesian coordinates is miserable.

If your integration region $R$ on the floor is a perfect circle $x^2 + y^2 = 9$, the bounds for a Type I integral would be:
*   Outer: $-3 \le x \le 3$
*   Inner: $-\sqrt{9-x^2} \le y \le \sqrt{9-x^2}$

Plugging square roots into integration formulas creates massive algebraic headaches. However, if we change our perspective from a rectangular grid $(x,y)$ to a circular radar grid $(r, \theta)$, that exact same circle becomes trivially easy to describe!

### The Polar Conversion
To switch to polar coordinates, we use the standard trigonometric conversions:
$$
x = r\cos\theta
$$
$$
y = r\sin\theta
$$
$$
x^2 + y^2 = r^2
$$

Instead of finding bounds for $x$ and $y$, we now find limits for the radius $r$ (distance from origin) and the angle $\theta$ (rotation from the positive x-axis).
For a full circle of radius 3, the new bounds are incredibly simple constants:
*   Outer: $0 \le \theta \le 2\pi$
*   Inner: $0 \le r \le 3$

### The Infinitesimal Area Trap (The Extra 'r')
When we switch coordinates, we must also switch the area differential $dA$.
In Cartesian, $dA$ is a tiny perfect rectangle: $dA = dx \, dy$.
In Polar, $dA$ is a tiny pie-shaped wedge cut out of a circle. 

If you look closely at the geometry of that tiny pie wedge, its area is NOT just $dr \, d\theta$. 
As you move further away from the origin (as $r$ increases), the pie wedges physically get wider and larger! To mathematically account for this stretching space, we must multiply the differential by $r$.

**The Golden Rule of Polar Integration:**
$$
dA = r \, dr \, d\theta
$$

You must NEVER forget to add the extra $r$ when converting a double integral!

### The Polar Integral Formula
$$
\iint_R f(x,y) \, dA = \int_{\alpha}^{\beta} \int_{a}^{b} f(r\cos\theta, r\sin\theta) \mathbf{r} \, dr \, d\theta
$$

### Example Setup
Find the volume under the paraboloid $z = x^2 + y^2$ over the circle $x^2 + y^2 \le 4$.

1.  **Convert the function:** $x^2 + y^2$ simply becomes $r^2$.
2.  **Convert the bounds:** The region is a full circle of radius 2. So, $0 \le r \le 2$ and $0 \le \theta \le 2\pi$.
3.  **Convert $dA$:** Becomes $r \, dr \, d\theta$.

$$
V = \int_{0}^{2\pi} \int_{0}^{2} (r^2) \, \mathbf{r} \, dr \, d\theta
$$
$$
V = \int_{0}^{2\pi} \int_{0}^{2} r^3 \, dr \, d\theta
$$

This is now a trivially simple polynomial integral that takes seconds to solve!
