# Multiple Integrals

Welcome to the comprehensive guide on **Multiple Integrals**. In single-variable calculus, a definite integral $\int_a^b f(x) dx$ represents the *area* under a curve. In multivariable calculus, we expand this concept into higher dimensions. 

- A **Double Integral** $\iint f(x,y) dA$ represents the *volume* under a 3D surface.
- A **Triple Integral** $\iiint f(x,y,z) dV$ represents the accumulation of a quantity (like mass or charge) throughout a 3D solid volume.

Multiple integrals are essential in engineering for finding centers of mass, moments of inertia, total electrical charge over a surface, and fluid flow rates.

---

## 1. Double Integrals over Rectangular Regions

The easiest multiple integral is a double integral over a rectangular region $R$, defined by $a \le x \le b$ and $c \le y \le d$. By Fubini's Theorem, you can evaluate the integral iteratively in either order:

$$ \iint_R f(x,y) dA = \int_c^d \left( \int_a^b f(x,y) dx \right) dy = \int_a^b \left( \int_c^d f(x,y) dy \right) dx $$

The inner integral is evaluated first, treating the outer variable as a constant.

### Example 1: Integrating over a Rectangle
**Problem:** Evaluate $\iint_R (x^2y + 3y^2) dA$ where $R$ is the rectangle $0 \le x \le 2$ and $1 \le y \le 3$.

**Step-by-Step Solution:**
**1. Set up the iterated integral:**
Let's integrate with respect to $x$ first (inner integral) and $y$ second (outer integral).
$$ I = \int_1^3 \left[ \int_0^2 (x^2y + 3y^2) dx \right] dy $$

**2. Evaluate the inner integral (with respect to $x$):**
Treat $y$ as a constant.
$$ \int_0^2 (x^2y + 3y^2) dx = \left[ \frac{x^3}{3}y + 3y^2x \right]_0^2 $$
Substitute the bounds $x = 2$ and $x = 0$:
$$ = \left( \frac{8}{3}y + 6y^2 \right) - (0 + 0) = \frac{8}{3}y + 6y^2 $$

**3. Evaluate the outer integral (with respect to $y$):**
Now integrate the result with respect to $y$ from $1$ to $3$.
$$ I = \int_1^3 \left( \frac{8}{3}y + 6y^2 \right) dy $$
$$ = \left[ \frac{8}{3} \cdot \frac{y^2}{2} + 6 \cdot \frac{y^3}{3} \right]_1^3 $$
$$ = \left[ \frac{4}{3}y^2 + 2y^3 \right]_1^3 $$
Substitute the bounds $y = 3$ and $y = 1$:
$$ = \left( \frac{4}{3}(9) + 2(27) \right) - \left( \frac{4}{3}(1) + 2(1) \right) $$
$$ = (12 + 54) - \left( \frac{4}{3} + 2 \right) = 66 - \frac{10}{3} = \frac{198}{3} - \frac{10}{3} = \frac{188}{3} $$

**Final Answer:**
$$ \iint_R (x^2y + 3y^2) dA = \frac{188}{3} $$

---

## 2. Double Integrals over General Regions

Real engineering problems rarely involve perfect rectangles. Often, the region $D$ is bounded by functions, such as $g_1(x) \le y \le g_2(x)$.

When setting up the bounds, the **outermost integral must always have constant bounds**, while the inner integrals can have bounds that are functions of the outer variables.

### Example 2: Integrating over a Triangle
**Problem:** Find the volume under the surface $z = xy$ above the triangle $D$ bounded by the lines $y=x$, $y=0$, and $x=1$.

**Step-by-Step Solution:**
**1. Sketch and define the region $D$:**
The region is bounded by $x=0$ to $x=1$ on the x-axis. For any specific $x$ value in that range, $y$ goes from the bottom line $y=0$ up to the top line $y=x$.
So the bounds are:
- Inner integral (y): from $0$ to $x$
- Outer integral (x): from $0$ to $1$

**2. Set up the iterated integral:**
$$ V = \int_0^1 \int_0^x (xy) dy dx $$

**3. Evaluate the inner integral (with respect to $y$):**
Treat $x$ as constant.
$$ \int_0^x (xy) dy = \left[ x \frac{y^2}{2} \right]_{y=0}^{y=x} $$
Substitute the bounds $y=x$ and $y=0$:
$$ = \left( x \frac{x^2}{2} \right) - 0 = \frac{x^3}{2} $$

**4. Evaluate the outer integral (with respect to $x$):**
$$ V = \int_0^1 \frac{x^3}{2} dx $$
$$ = \left[ \frac{x^4}{8} \right]_0^1 = \frac{1}{8} - 0 = \frac{1}{8} $$

**Final Answer:**
The volume is $1/8$.

---

## 3. Double Integrals in Polar Coordinates

When a region is circular or involves $x^2 + y^2$, integrating in Cartesian coordinates ($x,y$) can be extremely painful. Converting to polar coordinates ($r, \theta$) simplifies the math beautifully.

The conversion rules are:
- $x = r \cos(\theta)$
- $y = r \sin(\theta)$
- $x^2 + y^2 = r^2$
- **CRITICAL:** The area differential $dA = dx dy$ becomes $dA = r \, dr \, d\theta$. Do not forget the extra $r$!

### Example 3: Finding Area using Polar Coordinates
**Problem:** Find the volume of the solid bounded above by the paraboloid $z = 9 - x^2 - y^2$ and below by the $xy$-plane ($z=0$).

**Step-by-Step Solution:**
**1. Determine the region of integration $D$:**
The solid intersects the $xy$-plane when $z=0$. 
$0 = 9 - x^2 - y^2 \implies x^2 + y^2 = 9$
This is a circle of radius $3$. In polar coordinates, this region is $0 \le r \le 3$ and $0 \le \theta \le 2\pi$.

**2. Convert the integrand to polar coordinates:**
The function is $f(x,y) = 9 - (x^2 + y^2)$. In polar, this is simply $f(r,\theta) = 9 - r^2$.

**3. Set up the polar double integral:**
Don't forget the extra $r$ from $dA = r \, dr \, d\theta$.
$$ V = \int_0^{2\pi} \int_0^3 (9 - r^2) r \, dr \, d\theta $$

**4. Evaluate the inner integral (with respect to $r$):**
Distribute the $r$ first: $(9r - r^3)$
$$ \int_0^3 (9r - r^3) dr = \left[ \frac{9r^2}{2} - \frac{r^4}{4} \right]_0^3 $$
Substitute $r=3$:
$$ = \frac{9(9)}{2} - \frac{81}{4} = \frac{81}{2} - \frac{81}{4} = \frac{162}{4} - \frac{81}{4} = \frac{81}{4} $$

**5. Evaluate the outer integral (with respect to $\theta$):**
$$ V = \int_0^{2\pi} \frac{81}{4} d\theta $$
Since there is no $\theta$ in the integrand, we simply multiply by $2\pi$:
$$ V = \frac{81}{4} \times 2\pi = \frac{81\pi}{2} $$

**Final Answer:**
The volume of the paraboloid is $\frac{81\pi}{2}$.
