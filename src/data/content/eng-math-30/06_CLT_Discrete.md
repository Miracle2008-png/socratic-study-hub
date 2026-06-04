# 6. CLT Applied to Discrete Distributions

The CLT applies even when the individual random variables are discrete. The most important cases in engineering are the **Normal approximation to the Binomial** and the **Normal approximation to the Poisson**.

### Normal Approximation to the Binomial
If $X \sim B(n, p)$, then $X$ is the sum of $n$ i.i.d. Bernoulli$(p)$ random variables:
$$X = X_1 + X_2 + \dots + X_n, \quad X_i \sim \text{Bernoulli}(p)$$

Each $X_i$ has mean $p$ and variance $p(1-p) = pq$.

By the CLT:
$$X \approx N(np, npq)$$

**Conditions for validity:** $np \ge 5$ AND $nq \ge 5$.

**The Continuity Correction (mandatory for accuracy):**
Because $X$ is a discrete integer but the Normal is continuous, each integer $k$ is approximated by the interval $[k - 0.5, k + 0.5]$:
*   $P(X = k) \approx P(k - 0.5 \le X_{\text{normal}} \le k + 0.5)$
*   $P(X \le k) \approx P(X_{\text{normal}} \le k + 0.5)$
*   $P(X \ge k) \approx P(X_{\text{normal}} \ge k - 0.5)$

### Worked Example: Binary Channel
A data channel transmits 1000 bits. Each bit has an independent 5% error probability ($p = 0.05$).
$X \sim B(1000, 0.05)$: mean $= 50$, variance $= 47.5$, $\sigma \approx 6.89$.

Check: $np = 50 \ge 5$ and $nq = 950 \ge 5$. Approximation is valid.

What is the probability of more than 60 bit errors?
$$P(X > 60) \approx P\!\left(Z > \frac{60.5 - 50}{6.89}\right) = P(Z > 1.524) = 1 - \Phi(1.524) \approx \mathbf{0.064}$$

### Normal Approximation to the Poisson
If $X \sim \text{Pois}(\lambda)$ with large $\lambda$ (rule of thumb: $\lambda \ge 10$):
$$X \approx N(\lambda, \lambda)$$

This follows directly from the Superposition Property of the Poisson: $X$ is the sum of $\lambda$ unit-rate Poisson variables, so the CLT applies.

**Example:** A call center receives $\lambda = 100$ calls per hour. Probability of more than 115 calls?
$$P(X > 115) \approx P\!\left(Z > \frac{115.5 - 100}{\sqrt{100}}\right) = P(Z > 1.55) \approx \mathbf{0.061}$$
