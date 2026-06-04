# 7. The Log-Normal and Beta Distributions

### The Log-Normal Distribution
A random variable $X$ is **Log-Normal** if its natural logarithm $Y = \ln X$ is normally distributed:
$$Y = \ln X \sim N(\mu, \sigma^2) \implies X \sim \text{LogNormal}(\mu, \sigma^2)$$

$$f(x) = \frac{1}{x \sigma \sqrt{2\pi}} \exp\!\left(-\frac{(\ln x - \mu)^2}{2\sigma^2}\right), \quad x > 0$$

$$E[X] = e^{\mu + \sigma^2/2} \qquad \text{Var}(X) = \left(e^{\sigma^2} - 1\right)e^{2\mu + \sigma^2}$$

Key characteristic: $X$ is always **positive** and is **right-skewed** — there is a hard floor at zero, but the right tail extends far. This makes it the natural model for:
*   Component lifetimes under fatigue (multiplicative damage accumulates over cycles).
*   Income and wealth distributions.
*   Particle size in powders and aerosols.
*   Electrical noise amplitude in communication systems.
*   Repair times and maintenance durations.

**Connection to the Central Limit Theorem:** Just as additive random shocks produce a Normal distribution by the CLT, multiplicative random shocks produce a Log-Normal — because multiplying positive quantities is equivalent to adding their logarithms.

### Log-Normal Probability Calculations
All calculations reduce to the Normal after a log transformation:
$$P(a \le X \le b) = P\!\left(\frac{\ln a - \mu}{\sigma} \le Z \le \frac{\ln b - \mu}{\sigma}\right) = \Phi\!\left(\frac{\ln b - \mu}{\sigma}\right) - \Phi\!\left(\frac{\ln a - \mu}{\sigma}\right)$$

### The Beta Distribution
The Beta distribution models random variables that are naturally **bounded between 0 and 1** — proportions, efficiencies, yield rates, probability estimates.

$$X \sim \text{Beta}(\alpha, \beta), \quad 0 \le x \le 1$$

$$f(x) = \frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha, \beta)}, \quad B(\alpha, \beta) = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha + \beta)}$$

$$E[X] = \frac{\alpha}{\alpha + \beta} \qquad \text{Var}(X) = \frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}$$

The shape is entirely controlled by the two parameters $\alpha$ and $\beta$:
*   $\alpha = \beta = 1$: Uniform distribution (no preference for any value between 0 and 1).
*   $\alpha > 1, \beta > 1$: Bell-shaped, centered around $\alpha/(\alpha + \beta)$.
*   $\alpha < 1$ or $\beta < 1$: U-shaped, with probability mass pushed to the extremes 0 and 1.

**Bayesian Engineering:** If a component's unknown failure probability $p$ is itself treated as a random variable (Bayesian approach), the Beta distribution is the natural choice for the prior distribution. After observing $s$ successes and $f$ failures, the posterior is also Beta (a "conjugate prior"): $\text{Beta}(\alpha + s, \beta + f)$.
