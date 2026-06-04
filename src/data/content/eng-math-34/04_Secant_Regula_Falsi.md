# 4. Secant Method and Regula Falsi

### The Secant Method
Newton's method requires computing $f'(x_k)$ analytically at each step — sometimes expensive or impossible. The **Secant Method** approximates the derivative using a finite difference between two previous iterates:
$$f'(x_k) \approx \frac{f(x_k) - f(x_{k-1})}{x_k - x_{k-1}}$$

Substituting into the Newton formula:
$$\boxed{x_{k+1} = x_k - f(x_k) \cdot \frac{x_k - x_{k-1}}{f(x_k) - f(x_{k-1})}}$$

**Requires two starting points** $x_0$ and $x_1$ (not necessarily a bracket).

**Convergence rate:** Superlinear, with order $p = \phi = (1 + \sqrt{5})/2 \approx 1.618$ (the golden ratio). Better than linear, not quite as fast as quadratic — but requires only one new function evaluation per step (Newton needs one $f$ evaluation and one $f'$ evaluation).

### Secant Method: Worked Example
$f(x) = x^3 - x - 2$, starting with $x_0 = 1$, $x_1 = 2$.

| $k$ | $x_k$ | $f(x_k)$ |
|---|---|---|
| 0 | 1.0000 | $-2.0000$ |
| 1 | 2.0000 | $+4.0000$ |
| 2 | $1 - (-2) \times (1-2)/(-2-4) = 1.3333$ | $-0.9630$ |
| 3 | 1.3333 - (-0.9630)(1.3333-2)/(-0.9630-4) = 1.5000 | $-0.1250$ |
| 4 | 1.5000 - (-0.125)(1.5-1.3333)/(-0.125+0.963) = 1.5205 | $-0.0095$ |
| 5 | 1.5213 | $0.000020$ |

### The Regula Falsi (False Position) Method
Regula Falsi hybridizes Bisection and the Secant method: it maintains a bracket $[a, b]$ (guaranteeing convergence) but uses the secant line rather than the midpoint to pick the next iterate:

$$c = b - f(b) \cdot \frac{b - a}{f(b) - f(a)}$$

This is the $x$-intercept of the line connecting $(a, f(a))$ and $(b, f(b))$.

**Convergence:** Like Bisection it is guaranteed, but it can converge slowly if one end of the bracket barely moves (the "Illinois stagnation" problem). The **Illinois variant** fixes this by halving $f$ at the stuck endpoint.

### Comparison Summary
| Method | Convergence order | Derivative needed | Bracket required |
|---|---|---|---|
| Bisection | 1 (linear) | No | Yes |
| Newton-Raphson | 2 (quadratic) | Yes | No |
| Secant | 1.618 (superlinear) | No | No |
| Regula Falsi | 1 (linear, usually) | No | Yes |
| Brent's method | Superlinear | No | Yes |
