# 5. Double Integrals in Polar Coordinates

Some regions are incredibly difficult to describe using Cartesian $(x,y)$ coordinates. For example, a circle $x^2 + y^2 = R^2$ requires messy square root limits like $-\sqrt{R^2 - x^2} \le y \le \sqrt{R^2 - x^2}$.

Regions that have circular symmetry are much easier to evaluate using **Polar Coordinates** $(r, \theta)$.

### The Coordinate Transformation
Recall the relationships between Cartesian and Polar coordinates:
*   $x = r\cos(\theta)$
*   $y = r\sin(\theta)$
*   $r^2 = x^2 + y^2$

### The Area Element $dA$
In Cartesian coordinates, the differential area element is a tiny rectangle: $dA = dx\,dy$. 

In Polar coordinates, the area element is a tiny polar sector. Because the arc length of a sector grows as you move further from the origin, the area is NOT simply $dr\,d\theta$. 
You must include an extra factor of $r$, called the **Jacobian**:
$$ dA = r\,dr\,d\theta $$

**NEVER FORGET THE EXTRA '$r$'!**

### The Polar Integral Formula
If a region $R$ is bounded by angles $\alpha$ and $\beta$, and radii $h_1(\theta)$ and $h_2(\theta)$:
*   $\alpha \le \theta \le \beta$
*   $h_1(\theta) \le r \le h_2(\theta)$

Then the double integral is:
$$ \iint_R f(x,y) dA = \int_{\alpha}^{\beta} \int_{h_1(\theta)}^{h_2(\theta)} f(r\cos\theta, r\sin\theta) \, r \, dr \, d\theta $$

### Worked Example: The Bell Curve Volume
**Problem:** Find the volume under the paraboloid $z = 1 - x^2 - y^2$ situated above the xy-plane ($z \ge 0$).

**Step 1: Determine the Region $R$**
The surface intersects the xy-plane when $z=0$:
$$ 0 = 1 - x^2 - y^2 \implies x^2 + y^2 = 1 $$
This is a circle of radius 1 centered at the origin.
In Cartesian, the limits would be messy. In Polar, they are beautifully simple:
*   $0 \le r \le 1$
*   $0 \le \theta \le 2\pi$

**Step 2: Convert the Function $f(x,y)$**
$$ f(x,y) = 1 - x^2 - y^2 = 1 - (x^2 + y^2) $$
Since $x^2 + y^2 = r^2$, the function becomes $f(r,\theta) = 1 - r^2$.

**Step 3: Set up the Integral**
Don't forget $dA = r\,dr\,d\theta$!
$$ V = \int_{0}^{2\pi} \int_{0}^{1} (1 - r^2) \cdot r \, dr \, d\theta $$

**Step 4: Evaluate**
Distribute the $r$ in the inner integral:
$$ \int_{0}^{1} (r - r^3) dr = \left[ \frac{1}{2}r^2 - \frac{1}{4}r^4 \right]_{0}^{1} = \left( \frac{1}{2} - \frac{1}{4} \right) = \frac{1}{4} $$

Now perform the outer integral:
$$ V = \int_{0}^{2\pi} \frac{1}{4} d\theta = \left[ \frac{1}{4}\theta \right]_{0}^{2\pi} = \frac{1}{4}(2\pi) = \frac{\pi}{2} $$

The volume of this "dome" is exactly $\pi/2$.
