# 9. Sample Size Determination

One of the most practical outputs of the CLT framework is answering the question every engineer asks before conducting an experiment: **How many measurements do I need?**

The margin of error $E$ in a confidence interval is:
$$E = z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}$$

Solving for $n$:
$$n = \left(\frac{z_{\alpha/2} \cdot \sigma}{E}\right)^2$$

This formula links three engineering decisions:
1.  **Confidence Level** ($1 - \alpha$): How certain must you be? Higher confidence demands larger $n$.
2.  **Margin of Error** ($E$): How precise must the estimate be? Tighter tolerance demands larger $n$.
3.  **Population Variability** ($\sigma$): How noisy is the process? More variability demands larger $n$.

### The $\sigma$ Unknown Problem
If $\sigma$ is unknown before the experiment, you have three options:
*   Use a **pilot study** (small initial sample of $n=10$–20) to estimate $\sigma$ with $S$.
*   Use a **conservative estimate** from historical data, published literature, or physical reasoning.
*   Use the **range estimate**: if the population is approximately Normal and you know the min/max possible values, then $\sigma \approx (\text{max} - \text{min})/4$.

### Worked Examples

**Example 1 — Voltage Measurement:**
Estimate mean voltage to within $E = 0.1$ V with 99% confidence. Historical data shows $\sigma = 0.5$ V.
$$n = \left(\frac{2.576 \times 0.5}{0.1}\right)^2 = (12.88)^2 = 165.9 \implies \mathbf{n = 166}$$

**Example 2 — Halving the margin of error:**
If the engineer wants $E = 0.05$ V instead of 0.1 V (twice as precise) at the same confidence level:
$$n = \left(\frac{2.576 \times 0.5}{0.05}\right)^2 = (25.76)^2 = 663.6 \implies \mathbf{n = 664}$$

Halving the margin of error requires **four times** as many measurements. Precision is expensive.

### Sample Size for Hypothesis Tests
For a one-sample test at significance $\alpha$ with power $1-\beta$ (probability of correctly detecting a true shift of size $\delta = \mu_1 - \mu_0$):
$$n = \frac{(z_{\alpha/2} + z_\beta)^2 \sigma^2}{\delta^2}$$

For a 5% significance level ($z_{0.025} = 1.96$) and 80% power ($z_{0.20} = 0.84$) detecting a shift of $\delta = \sigma$ (one standard deviation):
$$n = \frac{(1.96 + 0.84)^2 \times 1}{1} = (2.80)^2 = \mathbf{7.84 \implies n = 8}$$

To detect a smaller shift of $\delta = 0.5\sigma$: $n = (2.80)^2 / (0.25) = 31.4 \implies n = 32$. Detecting smaller signals is exponentially more expensive in sample size.
