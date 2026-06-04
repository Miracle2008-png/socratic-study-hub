# 9. Common Discrete Distributions

Certain probability patterns appear so frequently in engineering that they have been named, studied exhaustively, and given closed-form formulas. Recognizing which distribution fits your problem eliminates the need to derive PMFs from scratch.

### 1. Bernoulli Distribution
The simplest possible random variable: one trial, two outcomes.
*   Success (1) with probability $p$.
*   Failure (0) with probability $1-p = q$.

$$E[X] = p, \qquad \text{Var}(X) = p(1-p)$$

Every binary sensor reading, pass/fail inspection, and bit transmission is a Bernoulli trial.

### 2. Binomial Distribution $B(n, p)$
$n$ independent Bernoulli trials. $X$ counts the total number of successes.

$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad k = 0, 1, \dots, n$$

$$E[X] = np, \qquad \text{Var}(X) = np(1-p)$$

The $\binom{n}{k}$ term counts the number of distinct orderings of $k$ successes in $n$ trials. It is called the **Binomial Coefficient**:
$$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$

**Example:** A production line has a 3% defect rate. In a batch of 100, what is the probability of exactly 2 defects?
$$P(X=2) = \binom{100}{2}(0.03)^2(0.97)^{98} = 4950 \times 0.0009 \times 0.0517 \approx \mathbf{0.225}$$

### 3. Geometric Distribution
$X$ counts the number of trials needed to get the FIRST success.

$$P(X = k) = (1-p)^{k-1} p, \quad k = 1, 2, 3, \dots$$

$$E[X] = \frac{1}{p}, \qquad \text{Var}(X) = \frac{1-p}{p^2}$$

**Memoryless property:** $P(X > m + n \mid X > m) = P(X > n)$. If you have already failed $m$ times, the remaining waiting time has the exact same distribution as starting fresh. Past failures provide no information about future attempts.

### 4. Poisson Distribution $\text{Pois}(\lambda)$
$X$ counts the number of events occurring in a fixed interval when events arrive at an average rate of $\lambda$.

$$P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}, \quad k = 0, 1, 2, \dots$$

$$E[X] = \lambda, \qquad \text{Var}(X) = \lambda$$

The mean equals the variance — a unique and useful fingerprint of the Poisson.

Applications: network packet arrivals per millisecond, radioactive decay counts per second, customer service requests per minute.

**Poisson Approximation to Binomial:** When $n$ is large and $p$ is small, $B(n,p) \approx \text{Pois}(np)$. Use this when $n \ge 30$ and $p \le 0.05$.
