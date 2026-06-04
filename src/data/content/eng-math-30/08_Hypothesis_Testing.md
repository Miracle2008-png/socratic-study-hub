# 8. Hypothesis Testing via the CLT

A **Hypothesis Test** is a formal procedure for deciding whether sample data provides enough evidence to reject a specific claim about a population parameter.

### The Framework
**Null Hypothesis $H_0$:** The default claim. We assume it is true unless the data strongly contradicts it. Example: "The mean processing time is 30 seconds."

**Alternative Hypothesis $H_1$:** What we suspect is actually true. Example: "The mean processing time has changed."

**Test Statistic:** A quantity computed from the sample whose distribution is known under $H_0$. By the CLT, for a mean test:
$$Z = \frac{\bar{X} - \mu_0}{\sigma/\sqrt{n}} \sim N(0,1) \quad \text{under } H_0$$

**Significance Level $\alpha$:** The maximum probability of falsely rejecting $H_0$ when it is true (Type I Error). Typically $\alpha = 0.05$ or $0.01$.

**Rejection Region:** The set of $Z$ values so extreme they would rarely occur if $H_0$ were true.

### Two-Tailed vs. One-Tailed Tests
*   **Two-tailed ($H_1: \mu \neq \mu_0$):** Reject if $|Z| > z_{\alpha/2}$. (Detect change in either direction.)
*   **Right-tailed ($H_1: \mu > \mu_0$):** Reject if $Z > z_\alpha$.
*   **Left-tailed ($H_1: \mu < \mu_0$):** Reject if $Z < -z_\alpha$.

### The p-value
The **p-value** is the probability of observing a test statistic at least as extreme as the computed value, assuming $H_0$ is true.
*   Small p-value ($< \alpha$): strong evidence against $H_0$; reject.
*   Large p-value ($\ge \alpha$): insufficient evidence to reject $H_0$.

### Worked Example: Production Line Test
A factory claims its bolts have mean diameter $\mu_0 = 10.00$ mm. A quality inspector measures $n = 36$ bolts and finds $\bar{X} = 10.08$ mm, $S = 0.15$ mm. Test at $\alpha = 0.05$ (two-tailed).

**Step 1 — Hypotheses:**
$H_0: \mu = 10.00$ vs. $H_1: \mu \neq 10.00$

**Step 2 — Test statistic:**
$$Z = \frac{10.08 - 10.00}{0.15/\sqrt{36}} = \frac{0.08}{0.025} = 3.20$$

**Step 3 — Critical value:** $z_{0.025} = 1.960$.

**Step 4 — Decision:** $|Z| = 3.20 > 1.960$. **Reject $H_0$.**

**Step 5 — p-value:** $p = 2P(Z > 3.20) = 2(0.00069) = 0.00138$.

Conclusion: There is extremely strong evidence ($p = 0.14\%$) that the bolt diameter has shifted from the claimed 10.00 mm. The production process needs adjustment.
