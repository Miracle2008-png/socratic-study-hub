# 3. Simpson's Rules

While the Trapezoidal Rule connects points with straight lines (degree 1 interpolation), **Simpson's Rules** connect points with parabolas (degree 2) or cubics (degree 3), capturing the curvature of the function and drastically reducing error.

### Simpson's 1/3 Rule (Using Parabolas)
To fit a parabola, we need three points: the two endpoints and the midpoint. 
Let the panel width be $2h$ (from $x_0$ to $x_2$), with midpoint $x_1 = x_0 + h$.

Integrating the Lagrange quadratic polynomial through these three points yields:
$$\int_{x_0}^{x_2} f(x) \, dx \approx \frac{h}{3} \left[ f(x_0) + 4f(x_1) + f(x_2) \right]$$

*(The factor of 1/3 gives the rule its name).*

**Single Panel Error:**
$$E_S = -\frac{h^5}{90} f^{(4)}(\xi)$$

**Surprising Fact:** Even though it is derived using a parabola (degree 2), Simpson's 1/3 Rule exactly integrates cubic polynomials (degree 3) because the 4th derivative of a cubic is zero.

### Composite Simpson's 1/3 Rule
To apply this over a large interval $[a, b]$, we must divide the interval into an **even number** of sub-intervals $n$. 
$h = (b-a)/n$.

Applying the rule to pairs of adjacent panels:
$$\int_a^b f(x) \, dx \approx \frac{h}{3} \left[ f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + 2f(x_4) + \dots + 4f(x_{n-1}) + f(x_n) \right]$$

The weights follow the pattern: $1, 4, 2, 4, 2, \dots, 2, 4, 1$.

**Composite Error:**
$$E_n = -\frac{b-a}{180} h^4 f^{(4)}(\mu)$$

Simpson's 1/3 rule is a **fourth-order** method. Doubling the number of panels ($h \to h/2$) reduces the error by a massive factor of $1/16$. It is overwhelmingly superior to the Trapezoidal Rule for smooth functions.

### Simpson's 3/8 Rule (Using Cubics)
What if you have an **odd number** of panels? You cannot use the 1/3 rule for the whole interval. 
Simpson's 3/8 Rule fits a cubic polynomial across 4 points (3 panels). Let the width be $3h$.

$$\int_{x_0}^{x_3} f(x) \, dx \approx \frac{3h}{8} \left[ f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3) \right]$$

The error is also $O(h^5)$, just like the 1/3 rule (though the constant term is slightly larger).

**Engineering Practice:**
If $n$ is even, use Composite Simpson's 1/3 Rule.
If $n$ is odd, use Composite Simpson's 1/3 Rule for the first $n-3$ panels, and apply Simpson's 3/8 Rule to the last 3 panels. This maintains 4th-order accuracy globally.
