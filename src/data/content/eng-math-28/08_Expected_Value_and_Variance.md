# 8. Expected Value and Variance

A random variable produces a distribution of possible outputs. To summarize that distribution with single numbers an engineer can act on, we compute two fundamental descriptors: the **Expected Value** (the center) and the **Variance** (the spread).

### Expected Value (Mean)
The **Expected Value** $E[X]$ (also written $\mu$ or $\overline{X}$) is the probability-weighted average of all possible outcomes.

For a **discrete** RV:
$$E[X] = \mu = \sum_x x \cdot p(x)$$

For a **continuous** RV:
$$E[X] = \mu = \int_{-\infty}^{\infty} x \cdot f(x) \, dx$$

The Expected Value is NOT the most likely outcome, and it may not even be a possible outcome (e.g., the expected number of children per family is 2.1, which is not achievable). It is the long-run average if the experiment were repeated infinitely many times.

### Expected Value of a Function: $E[g(X)]$
If you transform $X$ by a function $g$, the expected value of the result is:
$$E[g(X)] = \sum_x g(x) \cdot p(x) \quad \text{(discrete)}$$
$$E[g(X)] = \int_{-\infty}^{\infty} g(x) \cdot f(x) \, dx \quad \text{(continuous)}$$

### Linearity of Expectation
The most powerful property of $E[X]$:
$$E[aX + b] = aE[X] + b$$
$$E[X + Y] = E[X] + E[Y] \quad \text{(always, regardless of dependence)}$$

### Variance
The **Variance** $\text{Var}(X) = \sigma^2$ measures how spread out the distribution is around the mean. A large variance means outputs are wildly scattered; a small variance means outputs cluster tightly near $\mu$.

$$\text{Var}(X) = E[(X - \mu)^2] = E[X^2] - (E[X])^2$$

The second form ($E[X^2] - \mu^2$) is the computing formula — it avoids having to center the variable first.

The **Standard Deviation** $\sigma = \sqrt{\text{Var}(X)}$ brings the spread back to the same physical units as $X$.

**Variance scaling rules:**
$$\text{Var}(aX + b) = a^2 \text{Var}(X)$$

Adding a constant shifts the distribution but does not change its spread. Multiplying by $a$ stretches the spread by $|a|$, which is why variance scales by $a^2$ while standard deviation scales by $|a|$.

### Worked Example
A power supply outputs voltage $X$ with PMF: $P(X=4) = 0.2$, $P(X=5) = 0.5$, $P(X=6) = 0.3$.
$$E[X] = 4(0.2) + 5(0.5) + 6(0.3) = 0.8 + 2.5 + 1.8 = \mathbf{5.1 \text{ V}}$$
$$E[X^2] = 16(0.2) + 25(0.5) + 36(0.3) = 3.2 + 12.5 + 10.8 = 26.5$$
$$\text{Var}(X) = 26.5 - (5.1)^2 = 26.5 - 26.01 = \mathbf{0.49}$$
$$\sigma = \sqrt{0.49} = \mathbf{0.7 \text{ V}}$$
