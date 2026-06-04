# 4. Two-Sample Inference

Engineering problems frequently require comparing two groups: Does process A produce stronger welds than process B? Is the variance of machine 1 larger than machine 2? Did the new coating reduce corrosion rates?

### Two-Sample t-Test: Comparing Two Means
**Independent samples** from two Normal populations with possibly unequal variances.

**Hypotheses:** $H_0: \mu_1 = \mu_2$ vs $H_1: \mu_1 \neq \mu_2$ (or one-sided variants).

**Test statistic (Welch's t-test, does not assume equal variances):**
$$T = \frac{\bar{X}_1 - \bar{X}_2}{\sqrt{S_1^2/n_1 + S_2^2/n_2}} \sim t_\nu$$

The Welch-Satterthwaite degrees of freedom:
$$\nu = \frac{(S_1^2/n_1 + S_2^2/n_2)^2}{\dfrac{(S_1^2/n_1)^2}{n_1-1} + \dfrac{(S_2^2/n_2)^2}{n_2-1}}$$

**95% CI for $\mu_1 - \mu_2$:**
$$(\bar{X}_1 - \bar{X}_2) \pm t_{\alpha/2, \nu} \cdot \sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}}$$

### Paired t-Test
When observations are paired (measuring the same unit before and after a treatment), we analyze the **differences** $D_i = X_{1i} - X_{2i}$, which eliminates between-unit variability.

$$T = \frac{\bar{D}}{S_D/\sqrt{n}} \sim t_{n-1}$$

Pairing is always more powerful than two independent samples when the pairs share a common source of variation.

### F-Test: Comparing Two Variances
**Hypotheses:** $H_0: \sigma_1^2 = \sigma_2^2$ vs $H_1: \sigma_1^2 \neq \sigma_2^2$.

**Test statistic:**
$$F = \frac{S_1^2}{S_2^2} \sim F(n_1 - 1, n_2 - 1) \quad \text{under } H_0$$

Reject $H_0$ if $F > F_{\alpha/2, n_1-1, n_2-1}$ or $F < F_{1-\alpha/2, n_1-1, n_2-1}$.

### Worked Example: Material Strength Comparison
Two alloys are tested. Alloy A: $n_1 = 10$, $\bar{X}_1 = 480$ MPa, $S_1 = 25$ MPa. Alloy B: $n_2 = 12$, $\bar{X}_2 = 460$ MPa, $S_2 = 20$ MPa.

Test $H_0: \mu_1 = \mu_2$ at $\alpha = 0.05$ (two-tailed).

$$T = \frac{480 - 460}{\sqrt{625/10 + 400/12}} = \frac{20}{\sqrt{62.5 + 33.3}} = \frac{20}{\sqrt{95.8}} = \frac{20}{9.79} = 2.04$$

Degrees of freedom $\nu \approx 18$ (computed via Welch formula). Critical value $t_{0.025, 18} = 2.101$.

Since $|T| = 2.04 < 2.101$, we **fail to reject $H_0$** at $\alpha = 0.05$. The difference is not statistically significant at this level (though the p-value $\approx 0.056$ is borderline).
