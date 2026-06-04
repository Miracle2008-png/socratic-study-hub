# 10. Improper Integrals

Standard quadrature formulas assume the integration interval $[a, b]$ is finite and the function $f(x)$ is continuous and bounded everywhere in $[a, b]$. 

**Improper integrals** violate these rules in two ways:
1.  Infinite limits of integration (e.g., $\int_0^\infty e^{-x} dx$).
2.  Singularities within the interval (e.g., $\int_0^1 x^{-1/2} dx$, where $f(x) \to \infty$ as $x \to 0$).

Blindly throwing Simpson's rule at these problems will result in an `Infinity` or `NaN` crash, or completely incorrect answers.

### Dealing with Infinite Limits
You cannot create a grid from $0$ to $\infty$.

**Solution 1: Truncation.** 
If the function decays rapidly (like $e^{-x}$), integrate from $0$ to a large number $L$. Check the sensitivity by integrating to $2L$. If the difference is negligible, $L$ is large enough.

**Solution 2: Change of Variables.**
Map the infinite interval $[a, \infty)$ to a finite interval $(0, 1]$ using a substitution like $t = 1/x$. 
Then $x = 1/t$, $dx = -1/t^2 dt$.
$$\int_1^\infty f(x) \, dx = \int_1^0 f(1/t) \left(-\frac{1}{t^2}\right) dt = \int_0^1 \frac{f(1/t)}{t^2} dt$$
Now use standard Gaussian or Adaptive quadrature on the finite interval $[0, 1]$.

**Solution 3: Gauss-Laguerre / Gauss-Hermite Quadrature.**
Specific Gaussian quadrature rules are designed for infinite intervals with specific weight functions.
*   Gauss-Laguerre evaluates $\int_0^\infty e^{-x} f(x) dx \approx \sum w_i f(x_i)$.
*   Gauss-Hermite evaluates $\int_{-\infty}^\infty e^{-x^2} f(x) dx \approx \sum w_i f(x_i)$.

### Dealing with Singularities
If $f(x)$ goes to infinity at an endpoint $a$:

**Solution 1: Open Quadrature.**
Use an open Newton-Cotes formula or Gaussian quadrature. Because Gaussian quadrature roots are strictly inside $(-1, 1)$, they never evaluate the function exactly at the endpoints. If the integral converges analytically, an adaptive Gaussian routine will often integrate it perfectly without hitting the singularity.

**Solution 2: Subtraction of the Singularity.**
Identify the mathematical form of the singularity $g(x)$. Subtract it from $f(x)$ to leave a smooth, well-behaved function $h(x) = f(x) - g(x)$.
$$\int_a^b f(x) \, dx = \int_a^b [f(x) - g(x)] \, dx + \int_a^b g(x) \, dx$$
Integrate the smooth part numerically, and integrate the singular part $g(x)$ analytically.
