# 3. Interval Estimation and Pivots

A **Confidence Interval** (CI) is the interval-estimation answer to point estimation's single number. Rather than just stating $\hat{\theta}$, we construct a random interval $[L, U]$ (where $L$ and $U$ are themselves computed from the sample) such that:
$$P(L \le \theta \le U) = 1 - \alpha$$

The probability is over the randomness in the sample, not over $\theta$ (which is a fixed constant).

### The Pivot Method
The most systematic approach to constructing CIs uses a **Pivot** — a function of both the data and the parameter whose distribution is completely known and does not depend on any unknown parameters.

**Step 1:** Find a Pivot $Q(X_1, \dots, X_n; \theta)$ with a known distribution.
**Step 2:** Find the symmetric bounds $a, b$ such that $P(a \le Q \le b) = 1 - \alpha$.
**Step 3:** Algebraically isolate $\theta$ in the inequality $a \le Q \le b$ to produce the CI.

### CI for the Population Mean $\mu$ (known $\sigma$)
**Pivot:** $Q = \dfrac{\bar{X} - \mu}{\sigma/\sqrt{n}} \sim N(0,1)$ exactly (if population is Normal) or approximately (by CLT).

$$P\!\left(-z_{\alpha/2} \le \frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \le z_{\alpha/2}\right) = 1 - \alpha$$

Isolating $\mu$:
$$\bar{X} - z_{\alpha/2}\frac{\sigma}{\sqrt{n}} \le \mu \le \bar{X} + z_{\alpha/2}\frac{\sigma}{\sqrt{n}}$$

### CI for the Population Mean $\mu$ (unknown $\sigma$)
**Pivot:** $Q = \dfrac{\bar{X} - \mu}{S/\sqrt{n}} \sim t_{n-1}$ exactly (Normal population).

$$\bar{X} \pm t_{\alpha/2,\, n-1} \cdot \frac{S}{\sqrt{n}}$$

### CI for the Population Variance $\sigma^2$
**Pivot:** $Q = \dfrac{(n-1)S^2}{\sigma^2} \sim \chi^2_{n-1}$.

Because the Chi-Squared distribution is asymmetric, the two-sided CI is:
$$\frac{(n-1)S^2}{\chi^2_{\alpha/2,\, n-1}} \le \sigma^2 \le \frac{(n-1)S^2}{\chi^2_{1-\alpha/2,\, n-1}}$$

### CI for a Proportion $p$
When $X \sim B(n, p)$ and $np \ge 5, n(1-p) \ge 5$:
**Pivot:** $Q = \dfrac{\hat{p} - p}{\sqrt{\hat{p}(1-\hat{p})/n}} \approx N(0,1)$, where $\hat{p} = X/n$.

$$\hat{p} \pm z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

**Example:** In 200 produced chips, 14 are defective. Construct a 95% CI for the true defect rate $p$.
$\hat{p} = 14/200 = 0.07$. Margin $= 1.96\sqrt{0.07 \times 0.93/200} = 1.96 \times 0.0180 = 0.0353$.
$$\mathbf{CI: [0.035,\; 0.105]}$$
