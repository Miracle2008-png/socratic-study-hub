# 10. Common Continuous Distributions

### 1. Uniform Distribution $U(a, b)$
Every value in the interval $[a, b]$ is equally likely.

$$f(x) = \frac{1}{b - a}, \quad a \le x \le b$$

$$E[X] = \frac{a+b}{2}, \qquad \text{Var}(X) = \frac{(b-a)^2}{12}$$

Use when you have no reason to prefer any value over any other within a range (initial sensor uncertainty, round-off errors, random number generation).

### 2. Exponential Distribution $\text{Exp}(\lambda)$
Models the time between independent random events — the continuous analogue of the Geometric distribution.

$$f(x) = \lambda e^{-\lambda x}, \quad x \ge 0$$

$$E[X] = \frac{1}{\lambda}, \qquad \text{Var}(X) = \frac{1}{\lambda^2}$$

*   $\lambda$ is the **rate parameter** (events per unit time).
*   $1/\lambda$ is the **mean time between events**.

**Memoryless property (critical for reliability engineering):**
$$P(X > s + t \mid X > s) = P(X > t)$$

A component that has survived $s$ hours has the same remaining lifetime distribution as a brand-new component. This makes the exponential the foundation of Markov reliability models.

**CDF:** $F(x) = 1 - e^{-\lambda x}$. The probability of failure by time $x$ grows exponentially toward 1.

### 3. Normal (Gaussian) Distribution $N(\mu, \sigma^2)$
The most important distribution in all of engineering and science.

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}, \quad -\infty < x < \infty$$

*   $\mu$ = mean (center of the bell curve).
*   $\sigma^2$ = variance (controls the width of the bell).
*   $\sigma$ = standard deviation (same units as $X$).

**The 68-95-99.7 Rule (the empirical rule):**
*   68% of values fall within $\pm 1\sigma$ of the mean.
*   95% fall within $\pm 2\sigma$.
*   99.7% fall within $\pm 3\sigma$.

This rule is the cornerstone of manufacturing tolerances, Six Sigma quality control, and confidence intervals.

**Standardization:** Any normal variable $X \sim N(\mu, \sigma^2)$ can be converted to a **Standard Normal** $Z \sim N(0,1)$ by:
$$Z = \frac{X - \mu}{\sigma}$$

All probabilities can then be read from the **Standard Normal Table** (Z-table). For example, $P(Z \le 1.96) = 0.975$, which gives the critical value used ubiquitously in 95% confidence intervals.
