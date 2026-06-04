# 5. Gaussian Quadrature

Newton-Cotes formulas fix the nodes at equally spaced locations and calculate the optimal weights. If we use $n$ points, we have $n$ free parameters (the weights), allowing us to integrate polynomials of degree $n-1$ exactly.

**Gaussian Quadrature** asks: What if we treat the *node locations* $x_i$ as free parameters too? 

With $n$ nodes, we have $2n$ free parameters ($n$ weights and $n$ node locations). Therefore, we should be able to integrate a polynomial of degree **$2n - 1$** exactly. This is a massive leap in efficiency.

### Gauss-Legendre Quadrature
The standard form integrates over the canonical domain $[-1, 1]$:
$$\int_{-1}^1 f(x) \, dx \approx \sum_{i=1}^n w_i f(x_i)$$

The optimal nodes $x_i$ are mathematically proven to be the **roots of the Legendre polynomial** of degree $n$. The corresponding weights $w_i$ are derived to ensure exact integration of $1, x, x^2, \dots, x^{2n-1}$.

**For $n=2$ (2-point rule):**
Evaluates polynomials up to degree $2(2)-1 = 3$ exactly.
*   Nodes: $x_1 = -1/\sqrt{3} \approx -0.57735$, $x_2 = 1/\sqrt{3} \approx 0.57735$
*   Weights: $w_1 = 1$, $w_2 = 1$
*   Formula: $\int_{-1}^1 f(x) dx \approx f(-0.57735) + f(0.57735)$

Two points yield the exact same accuracy (cubic) as Simpson's 1/3 rule which uses three points. 

**For $n=3$ (3-point rule):**
Evaluates polynomials up to degree $2(3)-1 = 5$ exactly.
*   Nodes: $x_1 = -\sqrt{3/5}$, $x_2 = 0$, $x_3 = \sqrt{3/5}$
*   Weights: $w_1 = 5/9$, $w_2 = 8/9$, $w_3 = 5/9$

Notice the nodes are denser near the boundaries of the interval, which naturally suppresses Runge's phenomenon. All weights are positive, ensuring numerical stability regardless of $n$.

### Change of Interval
To integrate over an arbitrary interval $[a, b]$, you must linearly map it to $[-1, 1]$.
Let $x = \frac{b-a}{2}t + \frac{b+a}{2}$. Then $dx = \frac{b-a}{2} dt$.

The integral becomes:
$$\int_a^b f(x) \, dx = \frac{b-a}{2} \int_{-1}^1 f\left(\frac{b-a}{2}t + \frac{b+a}{2}\right) dt \approx \frac{b-a}{2} \sum_{i=1}^n w_i f(x_i)$$
Where $x_i$ are the transformed nodes.

### When to use Gaussian Quadrature
*   **Use it when:** You have an explicit formula for $f(x)$ or a black-box simulation that can be evaluated at *any* arbitrary coordinate. It is drastically more efficient than Composite Simpson's. It is the default integration engine inside Finite Element Analysis (FEA) software for integrating stiffness matrices.
*   **Do not use it when:** You are integrating empirical data from a table or experiment. You cannot force a sensor to have taken a measurement exactly at $x = -0.57735$. For tabular data, use Composite Simpson's or Trapezoidal.
