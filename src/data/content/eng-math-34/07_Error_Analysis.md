# 7. Error Analysis and Stopping Criteria

### Sources of Error in Numerical Root Finding
Every numerical computation accumulates errors from multiple sources that must be understood and controlled.

**1. Rounding Error:**
Floating-point arithmetic represents real numbers in finite precision (IEEE 754 double: ~15 significant decimal digits). Every arithmetic operation introduces a relative error of approximately $\varepsilon_\text{machine} = 2^{-52} \approx 2.2 \times 10^{-16}$.

Near a root, $f(x_k) \approx 0$ and $f'(x_k)$ may be near zero (for multiple roots) — catastrophic cancellation can prevent achieving more than a few digits of accuracy regardless of how many iterations are taken.

**2. Truncation Error:**
The Newton step is derived from a first-order Taylor expansion. The truncated higher-order terms introduce error proportional to $(x - x^*)^2$ — this is what limits Newton to quadratic (not cubic) convergence.

### Practical Stopping Criteria
**Never** stop based on a single criterion alone:

**Criterion 1 — Residual tolerance:**
$$|f(x_k)| < \varepsilon_f$$

The function value is small. Good when $f$ is well-scaled. Problem: near flat regions, small $|f|$ may correspond to large $|x - x^*|$ (a nearly-zero derivative can make the function flat).

**Criterion 2 — Step size tolerance:**
$$|x_{k+1} - x_k| < \varepsilon_x$$

The iterates have stopped changing. Good when $f$ is steeply sloped. Problem: a large step in $x$ can still produce a small step if the function is steep (the iterate jumps over the root).

**Criterion 3 — Relative step size:**
$$\frac{|x_{k+1} - x_k|}{|x_{k+1}|} < \varepsilon_\text{rel}$$

Scale-invariant. Handles roots near zero and roots with large magnitude equally well.

**Recommended practice:** Stop when BOTH $|f(x_k)| < \varepsilon_f$ AND $|x_{k+1} - x_k| < \varepsilon_x$ are satisfied. Additionally, always impose a **maximum iteration count** (e.g., 100) to prevent infinite loops if the method fails to converge.

### The Effect of Multiple Roots on Accuracy
For a root of multiplicity $m$, the condition number of the root-finding problem is roughly $1/|f^{(m)}(x^*)|^{1/m}$. Near a double root, Newton converges at rate $|e_{k+1}| \approx \frac{1}{2}|e_k|$ — linear, not quadratic. The standard fix is **deflation**: once a root $x^*$ is found, divide out the factor $(x - x^*)$ from $f(x)$ before searching for the next root.
