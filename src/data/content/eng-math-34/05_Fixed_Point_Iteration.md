# 5. Fixed-Point Iteration

**Fixed-Point Iteration** is a broad class of root-finding method based on reformulating $f(x) = 0$ as $x = g(x)$, then iterating the map $x_{k+1} = g(x_k)$ until convergence to a **fixed point** $x^* = g(x^*)$.

### Reformulation
Any root-finding problem can be rewritten as a fixed-point problem:
$$f(x) = 0 \iff x = x - \lambda f(x) = g(x)$$

for any nonzero $\lambda$. Newton's method is the special case $\lambda = 1/f'(x)$, chosen to maximize convergence.

Many other reformulations exist. For $f(x) = x^2 - 4 = 0$, we could write:
*   $g_1(x) = 4/x$ (from $x = 4/x$)
*   $g_2(x) = x - (x^2-4)/(2x) = (x+4/x)/2$ (Newton's method — arithmetic mean)

### The Contraction Mapping Theorem
Fixed-point iteration converges if and only if $g$ is a **contraction** on the interval of interest:
$$|g'(x)| < 1 \quad \text{for all } x \text{ near } x^*$$

**Rate of convergence:**
$$|e_{k+1}| \approx |g'(x^*)| \cdot |e_k|$$

*   $|g'(x^*)| < 1$: convergence. Smaller values give faster convergence.
*   $|g'(x^*)| = 0$: **quadratic convergence** (this is Newton's method — $g'(x^*) = 0$ precisely).
*   $|g'(x^*)| > 1$: divergence — the iteration spirals away from the fixed point.

### Worked Example: Square Root via Newton
Compute $\sqrt{2}$ (solve $x^2 - 2 = 0$).

Newton's iteration: $g(x) = (x + 2/x)/2$

$g'(x) = (1 - 2/x^2)/2$, so $g'(\sqrt{2}) = 0$ → quadratic convergence confirmed.

| $k$ | $x_k$ | Error $|x_k - \sqrt{2}|$ |
|---|---|---|
| 0 | 1.000000 | 0.41421 |
| 1 | 1.500000 | 0.08579 |
| 2 | 1.416667 | 0.00245 |
| 3 | 1.414216 | $2.1\times10^{-6}$ |
| 4 | 1.414214 | $<10^{-12}$ |

### Aitken's $\Delta^2$ Acceleration
For a linearly converging fixed-point iteration, **Aitken's acceleration** extrapolates three successive iterates to produce a much better approximation:
$$\hat{x}_k = x_k - \frac{(x_{k+1} - x_k)^2}{x_{k+2} - 2x_{k+1} + x_k}$$

Combined with fixed-point iteration, this produces **Steffensen's Method** — which achieves quadratic convergence without computing derivatives at all.
