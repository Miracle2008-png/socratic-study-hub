# 9. The Chi-Squared, t, and F Distributions

These three distributions arise directly from the Normal and are the workhorses of statistical inference — every confidence interval and hypothesis test in engineering statistics uses at least one of them.

### The Chi-Squared Distribution $\chi^2(k)$
If $Z_1, Z_2, \dots, Z_k$ are independent standard normal variables, then:
$$Q = Z_1^2 + Z_2^2 + \dots + Z_k^2 \sim \chi^2(k)$$

The parameter $k$ is the **degrees of freedom**.

$$E[Q] = k \qquad \text{Var}(Q) = 2k$$

The Chi-Squared distribution is always non-negative and right-skewed. As $k$ grows large, it approaches Normal (by the CLT).

**Engineering uses:**
*   **Variance estimation:** If $S^2$ is the sample variance from $n$ observations of $N(\mu, \sigma^2)$, then $(n-1)S^2/\sigma^2 \sim \chi^2(n-1)$. This is how confidence intervals on variance are constructed.
*   **Goodness-of-fit testing:** Testing whether observed frequency counts fit a hypothesized distribution.
*   **Independence testing:** Contingency table analysis.

### The Student's t-Distribution $t(k)$
If $Z \sim N(0,1)$ and $Q \sim \chi^2(k)$ are independent, then:
$$T = \frac{Z}{\sqrt{Q/k}} \sim t(k)$$

The $t$-distribution looks like a Normal bell curve but with heavier tails (higher probability of extreme values). As $k \to \infty$, $t(k) \to N(0,1)$.

**Why it exists:** When estimating a population mean from a small sample, the population variance $\sigma^2$ is unknown and must be replaced by the sample variance $S^2$. This substitution introduces extra uncertainty, which the $t$-distribution captures via its heavier tails.

The one-sample $t$-statistic is:
$$T = \frac{\bar{X} - \mu}{S/\sqrt{n}} \sim t(n-1)$$

For $n \ge 30$, the $t$-distribution is close enough to Normal that the distinction rarely matters.

### The F-Distribution $F(d_1, d_2)$
If $Q_1 \sim \chi^2(d_1)$ and $Q_2 \sim \chi^2(d_2)$ are independent, then:
$$F = \frac{Q_1/d_1}{Q_2/d_2} \sim F(d_1, d_2)$$

The $F$-distribution is the ratio of two scaled Chi-Squared variables. It arises whenever comparing two variances or multiple group means (ANOVA).

$$E[F] = \frac{d_2}{d_2 - 2}, \quad d_2 > 2$$

**Engineering uses:** Comparing variance of two production processes, testing whether a new manufacturing method genuinely reduces process variability, multivariate regression significance testing.
