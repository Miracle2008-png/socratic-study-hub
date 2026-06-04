# 4. Rate of Convergence: The Berry-Esseen Theorem

The CLT proves that the distribution of $\bar{X}_n$ converges to Normal as $n \to \infty$. But for finite $n$, how close is the approximation? Is $n=30$ always sufficient? Is $n=5$ ever enough?

The **Berry-Esseen Theorem** gives a rigorous bound on the approximation error for any finite $n$.

### The Theorem
Let $X_1, \dots, X_n$ be i.i.d. with mean $\mu$, variance $\sigma^2$, and **finite third absolute central moment** $\rho = E[|X - \mu|^3] < \infty$.

Let $F_n(z)$ be the actual CDF of the standardized sample mean, and $\Phi(z)$ be the Standard Normal CDF.

Then for all $z$ and all $n$:
$$\sup_z |F_n(z) - \Phi(z)| \le \frac{C \cdot \rho}{\sigma^3 \sqrt{n}}$$

Where $C$ is a universal constant ($C \le 0.4748$ by the sharpest known bound, due to Shevtsova, 2011).

### What this Means Practically
The maximum error between the true CDF and the Normal approximation shrinks proportionally to $1/\sqrt{n}$.

*   To halve the approximation error, you need to **quadruple** the sample size.
*   The error also depends on $\rho/\sigma^3$ — the **standardized third moment** (skewness) of the population. Highly skewed distributions (like Exponential) need larger $n$ to achieve the same quality Normal approximation as symmetric distributions.

### When $n = 30$ Is Not Enough
The rule of thumb "$n \ge 30$ gives adequate Normal approximation" assumes the population has moderate skewness. For heavily skewed populations:

| Population Distribution | Approximate $n$ needed for good Normal fit |
|---|---|
| Symmetric (Uniform, Normal) | $n \ge 5$–10 |
| Moderate skew (Binomial, symmetric-ish) | $n \ge 20$–30 |
| High skew (Exponential, $\lambda=1$) | $n \ge 50$–80 |
| Extreme skew (Pareto, Lognormal with large $\sigma$) | $n \ge 100$–200 |

### The Practical Implication for Engineers
When you use the CLT to approximate probabilities for a small sample from a skewed population (like component lifetimes modeled by Exponential), the Normal approximation may be poor, leading to dangerously optimistic reliability estimates. 

Always check the Berry-Esseen bound or use exact distribution calculations when:
1. $n$ is small ($< 30$),
2. The population distribution is known to be highly skewed,
3. The probability being estimated is in the far tail (below 1% or above 99%).
