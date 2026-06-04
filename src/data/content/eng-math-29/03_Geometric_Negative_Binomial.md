# 3. Geometric and Negative Binomial Distributions

### The Geometric Distribution
The Geometric distribution answers a fundamental engineering question: **How many attempts are needed before the first success?**

$$X \sim \text{Geom}(p)$$
$$P(X = k) = (1-p)^{k-1} p, \qquad k = 1, 2, 3, \dots$$
$$E[X] = \frac{1}{p} \qquad \text{Var}(X) = \frac{1-p}{p^2}$$

If $p = 0.2$, then on average it takes $1/0.2 = 5$ attempts to achieve one success.

### The Memoryless Property (Formal Proof)
The Geometric is the ONLY discrete distribution with the memoryless property.

$$P(X > m + n \mid X > m) = \frac{P(X > m + n)}{P(X > m)}$$

$$= \frac{(1-p)^{m+n}}{(1-p)^m} = (1-p)^n = P(X > n)$$

The fact that $m$ failures have already occurred provides ZERO information about the remaining waiting time. Applications: retransmission protocol design (how many retransmissions before a packet is received?), machine restart cycles, waiting time before the first defect.

### Two Formulations (Warning!)
Some textbooks define the Geometric as "number of failures before first success," shifting $X$ by 1. Always check which convention a source uses:
*   **Formulation 1:** $X$ = number of TRIALS (including the success). Range: $1, 2, 3, \dots$ Mean = $1/p$.
*   **Formulation 2:** $X$ = number of FAILURES before success. Range: $0, 1, 2, \dots$ Mean = $(1-p)/p$.

### The Negative Binomial Distribution
The Geometric counts trials until the **1st** success. The **Negative Binomial** counts trials until the **$r$-th** success.

$$X \sim \text{NB}(r, p)$$

$$P(X = k) = \binom{k-1}{r-1} p^r (1-p)^{k-r}, \qquad k = r, r+1, r+2, \dots$$

$$E[X] = \frac{r}{p} \qquad \text{Var}(X) = \frac{r(1-p)}{p^2}$$

The Geometric is simply $\text{NB}(1, p)$.

### Worked Example: Quality Control Sampling
An inspector samples items from a production line. Each item has a 15% chance of being defective ($p = 0.15$). Sampling stops when the 3rd defective item is found.

What is the probability that exactly 10 items must be inspected?

Here $r=3$, $k=10$: This means exactly 2 defects in the first 9, then a defect on the 10th.

$$P(X=10) = \binom{9}{2}(0.15)^3(0.85)^7 = 36 \times 0.003375 \times 0.3206 = \mathbf{0.0390}$$

Expected number inspected before finding 3rd defect: $E[X] = 3/0.15 = \mathbf{20}$ items.
