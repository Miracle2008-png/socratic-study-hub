# 6. Applications of Double Integrals

Double integrals are not just geometric volume calculators; they are the fundamental tool used in physics and engineering to compute the physical properties of thin 2D objects (called **laminae**).

Let $D$ be a 2D lamina, and let $\rho(x,y)$ be its area density function (mass per unit area, e.g., $\text{kg}/\text{m}^2$). If the material is completely uniform, $\rho$ is a constant. If the material is a composite or has a temperature gradient, $\rho$ is a variable function.

### 1. Total Mass ($m$)
To find the total mass of the object, we integrate the density over the entire region:
$$ m = \iint_D \rho(x,y) dA $$

### 2. Moments ($M_x, M_y$)
A moment measures the tendency of the mass to rotate around an axis. 
*   **Moment about the x-axis ($M_x$):** Distance to the x-axis is $y$.
    $$ M_x = \iint_D y \cdot \rho(x,y) dA $$
*   **Moment about the y-axis ($M_y$):** Distance to the y-axis is $x$.
    $$ M_y = \iint_D x \cdot \rho(x,y) dA $$

### 3. Center of Mass $(\bar{x}, \bar{y})$
The center of mass (or centroid, if density is constant) is the balancing point of the lamina. It is found by dividing the moments by the total mass.
$$ \bar{x} = \frac{M_y}{m} = \frac{\iint_D x \rho(x,y) dA}{\iint_D \rho(x,y) dA} $$
$$ \bar{y} = \frac{M_x}{m} = \frac{\iint_D y \rho(x,y) dA}{\iint_D \rho(x,y) dA} $$

### Worked Example: Center of Mass
**Problem:** Find the center of mass of a triangular lamina with vertices $(0,0)$, $(1,0)$, and $(0,2)$ if its density function is $\rho(x,y) = 1 + 3x + y$.

**Step 1: Determine the Region**
The triangle is bounded by $x=0$, $y=0$, and the hypotenuse line connecting $(1,0)$ and $(0,2)$. The equation of this line is $y = -2x + 2$.
Our limits (Type I) are:
*   $0 \le x \le 1$
*   $0 \le y \le -2x + 2$

**Step 2: Calculate Mass ($m$)**
$$ m = \int_{0}^{1} \int_{0}^{-2x+2} (1 + 3x + y) dy \, dx $$
Inner ($dy$):
$$ \left[ y + 3xy + \frac{1}{2}y^2 \right]_{0}^{-2x+2} $$
Plug in upper limit $(-2x+2)$:
$$ (-2x+2) + 3x(-2x+2) + \frac{1}{2}(-2x+2)^2 $$
$$ = -2x + 2 - 6x^2 + 6x + \frac{1}{2}(4x^2 - 8x + 4) $$
$$ = -6x^2 + 4x + 2 + 2x^2 - 4x + 2 = -4x^2 + 4 $$
Outer ($dx$):
$$ m = \int_{0}^{1} (-4x^2 + 4) dx = \left[ -\frac{4}{3}x^3 + 4x \right]_{0}^{1} = -\frac{4}{3} + 4 = \frac{8}{3} $$

*(You would then repeat this exact integration process twice more: once multiplying the integrand by $x$ to find $M_y$, and once multiplying by $y$ to find $M_x$. Finally, you divide by $8/3$ to get the coordinates).*
