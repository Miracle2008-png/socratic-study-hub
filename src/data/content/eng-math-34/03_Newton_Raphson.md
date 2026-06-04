# 3. Newton-Raphson Method

The **Newton-Raphson Method** is the standard root-finding algorithm when the derivative is available. It has quadratic convergence — the fastest possible for a scalar method using first-order derivative information.

### Derivation
Starting from an initial guess $x_0$, approximate $f$ by its first-order Taylor expansion about $x_k$:
$$f(x) \approx f(x_k) + f'(x_k)(x - x_k)$$

Set this linear approximation to zero and solve for the next iterate $x_{k+1}$:
$$f(x_k) + f'(x_k)(x_{k+1} - x_k) = 0$$

$$\boxed{x_{k+1} = x_k - \frac{f(x_k)}{f'(x_k)}}$$

Geometrically: draw the tangent line to $y = f(x)$ at $(x_k, f(x_k))$ and let $x_{k+1}$ be where this tangent crosses the $x$-axis.

### Convergence Analysis
Near a simple root $x^*$, expanding $f(x^*) = 0$ in Taylor series about $x_k$:
$$0 = f(x_k) + f'(x_k)(x^* - x_k) + \frac{f''(\xi)}{2}(x^* - x_k)^2$$

Substituting and simplifying shows:
$$e_{k+1} \approx -\frac{f''(x^*)}{2f'(x^*)} e_k^2$$

This is **quadratic convergence**: $|e_{k+1}| \approx C |e_k|^2$ with $C = |f''(x^*)/2f'(x^*)|$. Each iteration approximately doubles the number of correct decimal digits.

### Worked Example
Solve $f(x) = x^3 - x - 2 = 0$, starting from $x_0 = 2$.

$f'(x) = 3x^2 - 1$

| $k$ | $x_k$ | $f(x_k)$ | $f'(x_k)$ | $x_{k+1}$ | $|e_k|$ |
|---|---|---|---|---|---|
| 0 | 2.000000 | 4.000000 | 11.000 | 1.636364 | 0.4786 |
| 1 | 1.636364 | 0.891684 | 7.031 | 1.509434 | 0.1150 |
| 2 | 1.509434 | 0.038251 | 5.832 | 1.522882 | 0.0016 |
| 3 | 1.522882 | 0.000069 | 5.952 | 1.521380 | $2.6\times10^{-6}$ |

After just 3 iterations from a mediocre starting guess, we have 5 correct decimal places. Bisection needed 20+ iterations for the same precision.

### Failure Modes
*   **$f'(x_k) = 0$**: Division by zero — method breaks down at inflection points or horizontal tangents.
*   **Poor starting guess**: Newton can cycle, diverge, or converge to a different root than intended.
*   **Multiple roots**: Near a root of multiplicity $m$, convergence degrades to linear. Fix: use the modified Newton step $x_{k+1} = x_k - m f(x_k)/f'(x_k)$.
*   **Oscillation**: For some functions (e.g., $f(x) = x^{1/3}$), Newton diverges with any non-zero starting guess.
