# 5. CLT for Sums vs. Means

Engineers apply the CLT in two equivalent but distinct ways: to the **sum** of random variables, or to the **mean** of random variables. Knowing which form to use instantly determines which formula applies.

### Two Equivalent Formulations

**Form 1 — The Sample Mean:**
$$\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i \xrightarrow{\text{approx}} N\!\left(\mu, \frac{\sigma^2}{n}\right)$$

Standardized: $Z = \dfrac{\bar{X}_n - \mu}{\sigma/\sqrt{n}}$

**Form 2 — The Sum:**
$$S_n = \sum_{i=1}^n X_i = n\bar{X}_n \xrightarrow{\text{approx}} N\!\left(n\mu, n\sigma^2\right)$$

Standardized: $Z = \dfrac{S_n - n\mu}{\sigma\sqrt{n}}$

Both are the SAME CLT result — one is just $n$ times the other. The variance of the sum is $n$ times the variance of each term; the variance of the mean is $1/n$ times the variance of each term.

### When to Use Each Form

**Use the Mean form when:** You are given a sample average and want to make inferences about the population mean (confidence intervals, hypothesis tests).

**Use the Sum form when:** You are computing a total accumulation — total load on a structure, total network traffic, total manufacturing cost — and asking whether the aggregate exceeds a threshold.

### Worked Example: Structural Load Analysis
A floor must support $n = 40$ people. Each person's weight $X_i$ has mean $\mu = 75$ kg and standard deviation $\sigma = 12$ kg (arbitrary distribution — could be anything).

The total floor load is $S_{40} = \sum X_i$.

By the CLT (Sum form):
$$S_{40} \approx N(40 \times 75, \; 40 \times 144) = N(3000, \; 5760)$$
$$\sigma_{S} = \sqrt{5760} \approx 75.9 \text{ kg}$$

What is the probability the floor exceeds its 3200 kg load rating?
$$P(S_{40} > 3200) = P\!\left(Z > \frac{3200 - 3000}{75.9}\right) = P(Z > 2.64) = 1 - \Phi(2.64) \approx \mathbf{0.004}$$

Only a 0.4% probability of overloading. If the engineer required 99.9% safety, they would check at $z = 3.09$:
$$3000 + 3.09 \times 75.9 = 3234 \text{ kg}$$

The design load rating must be set at 3234 kg to guarantee $\ge 99.9\%$ safety.
