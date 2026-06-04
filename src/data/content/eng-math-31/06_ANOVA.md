# 6. Analysis of Variance (ANOVA)

The two-sample t-test compares two population means. **ANOVA** (Analysis of Variance) extends this to comparing $k \ge 2$ population means simultaneously, while controlling the overall Type I error rate.

### Why Not Just Do Multiple t-Tests?
If you test all pairs among $k=5$ groups using two-sample t-tests at $\alpha=0.05$ each, there are $\binom{5}{2}=10$ comparisons. The probability of at least one false rejection is $1-(0.95)^{10} = 0.40$. The overall false positive rate explodes.

ANOVA controls the overall $\alpha$ for the omnibus null hypothesis:
$$H_0: \mu_1 = \mu_2 = \dots = \mu_k$$
$$H_1: \text{At least one mean differs}$$

### The Decomposition of Variance
ANOVA decomposes the total variability in the data into two components:

**Total Sum of Squares:**
$$\text{SS}_{\text{Total}} = \sum_{i=1}^k \sum_{j=1}^{n_i} (X_{ij} - \bar{X})^2$$

**Between-Group SS** (variability due to different group means — the signal):
$$\text{SS}_{\text{Between}} = \sum_{i=1}^k n_i (\bar{X}_i - \bar{X})^2$$

**Within-Group SS** (variability within each group — the noise):
$$\text{SS}_{\text{Within}} = \sum_{i=1}^k \sum_{j=1}^{n_i} (X_{ij} - \bar{X}_i)^2$$

The fundamental identity: $\text{SS}_{\text{Total}} = \text{SS}_{\text{Between}} + \text{SS}_{\text{Within}}$.

### The F-Statistic
$$F = \frac{\text{MS}_{\text{Between}}}{\text{MS}_{\text{Within}}} = \frac{\text{SS}_{\text{Between}}/(k-1)}{\text{SS}_{\text{Within}}/(N-k)} \sim F(k-1, N-k) \quad \text{under } H_0$$

Where $N = \sum n_i$ is the total sample size.

If $H_0$ is true, both MS terms estimate $\sigma^2$ and $F \approx 1$. If $H_1$ is true, $\text{MS}_{\text{Between}}$ inflates and $F \gg 1$.

### ANOVA Table
| Source | SS | df | MS | F |
|---|---|---|---|---|
| Between | $\text{SS}_B$ | $k-1$ | $\text{SS}_B/(k-1)$ | $\text{MS}_B/\text{MS}_W$ |
| Within | $\text{SS}_W$ | $N-k$ | $\text{SS}_W/(N-k)$ | — |
| Total | $\text{SS}_T$ | $N-1$ | — | — |

### Worked Example: Three Welding Processes
Three welding processes (A, B, C) are compared on weld tensile strength. $n=5$ welds per process. Group means: $\bar{X}_A=420$, $\bar{X}_B=440$, $\bar{X}_C=430$ MPa. Grand mean $\bar{X}=430$.

$\text{SS}_B = 5[(420-430)^2 + (440-430)^2 + (430-430)^2] = 5[100+100+0] = 1000$

Suppose $\text{SS}_W = 1800$ (computed from raw data).

$F = \frac{1000/2}{1800/12} = \frac{500}{150} = 3.33$

Critical value $F_{0.05, 2, 12} = 3.89$. Since $3.33 < 3.89$, **fail to reject $H_0$**. No statistically significant difference between processes at $\alpha=0.05$.
