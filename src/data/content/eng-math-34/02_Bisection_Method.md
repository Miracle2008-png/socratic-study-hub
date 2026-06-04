# 2. The Bisection Method

The **Bisection Method** is the most robust root-finding algorithm. It is guaranteed to converge to a root whenever one exists in the initial bracket — no other algorithm can match this reliability.

### Algorithm
Given initial bracket $[a, b]$ with $f(a) \cdot f(b) < 0$:

**Repeat:**
1. Compute the midpoint: $c = (a + b)/2$.
2. Evaluate $f(c)$.
3. If $f(a) \cdot f(c) < 0$: the root is in $[a, c]$. Set $b = c$.
4. If $f(c) \cdot f(b) < 0$: the root is in $[c, b]$. Set $a = c$.
5. If $f(c) = 0$: exact root found. Stop.

**Until** $|b - a| < \varepsilon$ (desired tolerance).

### Convergence Analysis
After $n$ iterations, the bracket width is $(b-a)/2^n$. The error is bounded by:
$$|e_n| = |x_n - x^*| \le \frac{b - a}{2^n}$$

The number of iterations required to achieve tolerance $\varepsilon$ from initial bracket $[a, b]$:
$$n \ge \frac{\ln[(b-a)/\varepsilon]}{\ln 2} = \log_2\!\left(\frac{b-a}{\varepsilon}\right)$$

The convergence rate is **linear** ($p = 1$) with constant factor $C = 1/2$.

### Worked Example
Find the root of $f(x) = x^3 - x - 2$ in $[1, 2]$.

$f(1) = 1 - 1 - 2 = -2 < 0$ and $f(2) = 8 - 2 - 2 = 4 > 0$. Initial bracket confirmed.

| Iteration | $a$ | $b$ | $c$ | $f(c)$ |
|---|---|---|---|---|
| 1 | 1.0 | 2.0 | 1.5 | $-0.125$ |
| 2 | 1.5 | 2.0 | 1.75 | $+1.359$ |
| 3 | 1.5 | 1.75 | 1.625 | $+0.561$ |
| 4 | 1.5 | 1.625 | 1.5625 | $+0.205$ |
| 5 | 1.5 | 1.5625 | 1.5313 | $+0.038$ |
| 6 | 1.5 | 1.5313 | 1.5156 | $-0.044$ |

After 6 iterations: root $\approx 1.52$. True root is $x^* \approx 1.5214$.

For $\varepsilon = 10^{-6}$ starting from $[1, 2]$: $n \ge \log_2(1/10^{-6}) = 19.9$ — about 20 iterations guaranteed.

### Advantages and Disadvantages
**Advantages:** Guaranteed convergence (no divergence possible), simple implementation, robust for any continuous function.

**Disadvantages:** Requires a good initial bracket. Converges slowly (linear). Cannot find complex roots or roots where $f$ doesn't change sign (tangent roots). Inefficient compared to Newton's method once near the root.
