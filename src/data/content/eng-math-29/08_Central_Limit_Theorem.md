# 8. The Central Limit Theorem

The Central Limit Theorem (CLT) is arguably the most important theorem in all of applied mathematics. It is the mathematical reason why the Normal distribution appears everywhere in nature, measurements, and engineering — even when the underlying phenomenon has nothing to do with a bell curve.

### The Theorem
Let $X_1, X_2, \dots, X_n$ be a sequence of **independent and identically distributed (i.i.d.)** random variables, each with mean $\mu$ and finite variance $\sigma^2$.

Define the sample mean:
$$\bar{X}_n = \frac{1}{n}(X_1 + X_2 + \dots + X_n)$$

Then as $n \to \infty$:
$$\bar{X}_n \xrightarrow{\text{dist}} N\!\left(\mu, \frac{\sigma^2}{n}\right)$$

Equivalently, the standardized sum converges to a Standard Normal:
$$Z_n = \frac{\bar{X}_n - \mu}{\sigma / \sqrt{n}} \xrightarrow{\text{dist}} N(0, 1)$$

**The individual distribution of each $X_i$ does not matter.** The $X_i$ can be Binomial, Exponential, Uniform, or any other distribution. The sum always converges to Normal.

### What the CLT Actually Says
The CLT makes three precise statements:
1.  The mean of the sample mean equals the population mean: $E[\bar{X}] = \mu$.
2.  The variance of the sample mean is $\sigma^2/n$ — it shrinks as sample size grows.
3.  The **shape** of the distribution of $\bar{X}$ converges to a perfect Gaussian bell curve.

Practical rule of thumb: convergence is usually adequate for $n \ge 30$.

### Why Normal Distributions Dominate in Nature
A real-world measurement is almost always the **sum of many small, independent random effects** — manufacturing tolerances, thermal fluctuations, measurement instrument imprecision, environmental perturbations. By the CLT, their sum is Normal — regardless of what each individual perturbation looks like.

### Worked Example: Capacitor Tolerance
A circuit requires a total capacitance of $n = 50$ capacitors in series. Each capacitor has a nominal value of 100 μF with a standard deviation of 5 μF (arbitrary distribution — could be Uniform or any other shape).

The total capacitance is $T = X_1 + X_2 + \dots + X_{50}$.

By the CLT:
$$E[T] = 50 \times 100 = 5000 \text{ μF}$$
$$\text{Var}(T) = 50 \times 25 = 1250 \implies \sigma_T = \sqrt{1250} \approx 35.4 \text{ μF}$$
$$T \approx N(5000, 1250)$$

What is the probability total capacitance exceeds 5070 μF?
$$P(T > 5070) = P\!\left(Z > \frac{5070 - 5000}{35.4}\right) = P(Z > 1.98) = 1 - \Phi(1.98) \approx \mathbf{0.024}$$

Only a 2.4% chance of exceeding specification — entirely calculated from population statistics without simulating individual capacitors.
