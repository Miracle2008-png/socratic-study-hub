# 2. The Law of Large Numbers

Before the Central Limit Theorem, there is a simpler but equally fundamental result: the **Law of Large Numbers (LLN)**. It guarantees that sample averages converge to the true population mean as the sample size grows.

### The Weak Law of Large Numbers
Let $X_1, X_2, \dots, X_n$ be i.i.d. random variables with mean $\mu$ and finite variance $\sigma^2$.

For any small tolerance $\epsilon > 0$, however tiny:
$$\lim_{n \to \infty} P\!\left(|\bar{X}_n - \mu| > \epsilon\right) = 0$$

This says the probability that the sample mean strays more than $\epsilon$ from $\mu$ shrinks to zero as $n \to \infty$. It does NOT say the sample mean equals $\mu$ exactly — it says the probability of being far from $\mu$ vanishes.

### The Strong Law of Large Numbers
The Weak LLN describes convergence in probability. The **Strong LLN** makes an even more powerful statement — convergence almost surely:
$$P\!\left(\lim_{n \to \infty} \bar{X}_n = \mu\right) = 1$$

The probability that the sample mean literally converges to $\mu$ (as a number sequence) is exactly 1.

### Proving the Weak LLN via Chebyshev's Inequality
Chebyshev's Inequality applies to any random variable with mean $\mu$ and variance $\sigma^2$:
$$P(|X - \mu| \ge k\sigma) \le \frac{1}{k^2}$$

Apply this to $\bar{X}_n$. We know $E[\bar{X}_n] = \mu$ and $\text{Var}(\bar{X}_n) = \sigma^2/n$.

$$P\!\left(|\bar{X}_n - \mu| \ge \epsilon\right) \le \frac{\text{Var}(\bar{X}_n)}{\epsilon^2} = \frac{\sigma^2}{n\epsilon^2}$$

As $n \to \infty$, the right side $\sigma^2/(n\epsilon^2) \to 0$. Therefore the probability on the left must also $\to 0$. The Weak LLN is proven.

### Physical Interpretation and Engineering Use
The LLN is the mathematical foundation of measurement:
*   Averaging repeated sensor measurements reduces noise. After $n$ readings, the uncertainty in the average is $\sigma/\sqrt{n}$ — it shrinks without bound.
*   Monte Carlo simulations produce converging estimates because each additional simulation run brings the empirical average closer to the true expected value.
*   Insurance premiums, financial models, and actuarial tables are all based on the LLN — individual outcomes are wildly unpredictable, but averages over large populations are stable and predictable.

The LLN tells us **where** the distribution of sample means converges to. The CLT (next page) tells us the **shape** of the distribution during that convergence.
