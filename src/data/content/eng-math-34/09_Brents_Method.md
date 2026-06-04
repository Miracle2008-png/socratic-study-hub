# 9. Brent's Method

**Brent's Method** (often called `fzero` in numerical libraries like MATLAB and SciPy) is the gold standard for robust 1D root-finding. It combines the guaranteed convergence of Bisection with the superlinear speed of the Secant method and Inverse Quadratic Interpolation.

### The Core Idea: Hybridization
A pure Bisection algorithm is perfectly safe but agonizingly slow. A pure Secant or Newton method is fast but can diverge or cycle endlessly if the function is poorly behaved.

Brent's method uses a fast method whenever it is "safe" to do so, but falls back to Bisection whenever the fast method produces a bad estimate or shows signs of stagnation. It requires an initial bracket $[a, b]$ where $f(a)$ and $f(b)$ have opposite signs.

### Inverse Quadratic Interpolation (IQI)
The Secant method uses two points to fit a straight line. IQI uses **three points** $(a, f(a)), (b, f(b)), (c, f(c))$ to fit a parabola.

Instead of fitting $y(x)$ (which could have zero or two roots), IQI fits $x$ as a quadratic function of $y$: $x(y) = Ay^2 + By + C$.
The new root estimate is simply the value of this parabola at $y = 0$:
$$x_{k+1} = \frac{f_b f_c}{(f_a - f_b)(f_a - f_c)} a + \frac{f_a f_c}{(f_b - f_a)(f_b - f_c)} b + \frac{f_a f_b}{(f_c - f_a)(f_c - f_b)} c$$

### The Algorithm Logic
At each step, the algorithm maintains three points:
*   $a$: previous best estimate
*   $b$: current best estimate (closest to 0)
*   $c$: older point such that $f(b)$ and $f(c)$ bracket the root.

1.  Compute a tentative step using IQI (if $f(a), f(b), f(c)$ are distinct) or the Secant method (if $f(a) = f(c)$).
2.  **The Bisection Fallback Check:** Evaluate the tentative step $x_\text{tent}$. Is $x_\text{tent}$ inside the current bracket $[b, c]$? Is the step size shrinking fast enough compared to previous steps?
    *   If **yes**, accept $x_\text{tent}$.
    *   If **no**, reject the fast step and take a **Bisection step** instead: $x_\text{tent} = (b+c)/2$.
3.  Update the bracket points to maintain the sign change.

### Performance
Because it defaults to Bisection when things go wrong, Brent's method is guaranteed to converge in at most $O(\log(1/\varepsilon))$ steps. Because it aggressively takes IQI/Secant steps when the function is smooth, it achieves superlinear convergence (often approaching quadratic speed) near the root. It is almost always the default choice for scalar root-finding without derivatives.
