# 7. Non-Parametric Tests

All the tests studied so far assume the data follows a specific distribution — usually Normal. **Non-parametric tests** (also called distribution-free tests) make no such assumptions. They are designed for:

*   Data from unknown or clearly non-Normal distributions.
*   Ordinal data (ranks, ratings) where numerical distances are meaningless.
*   Small samples where the CLT hasn't kicked in and Normality cannot be verified.
*   Robust analysis when outliers may corrupt parametric tests.

### The Sign Test
The simplest non-parametric test for a population median $M$.

**Hypotheses:** $H_0: M = M_0$ vs $H_1: M \neq M_0$.

**Procedure:** For each observation $X_i$, record a "+" if $X_i > M_0$ and a "−" if $X_i < M_0$ (discard ties). Under $H_0$, the number of "+" signs $B \sim B(n, 0.5)$.

Reject $H_0$ if $B$ is too large or too small relative to $B(n, 0.5)$.

**Example:** 15 temperature readings. $M_0 = 20°C$. 12 readings exceed 20°C (B=12). $P(B \ge 12 \mid n=15, p=0.5) = 0.018$. Reject $H_0$ at $\alpha=0.05$.

### The Wilcoxon Signed-Rank Test
More powerful than the Sign Test because it uses the magnitude of deviations, not just the sign.

**Procedure:**
1. Compute $d_i = X_i - M_0$ for each observation.
2. Rank the $|d_i|$ from smallest to largest (average ranks for ties).
3. Assign each rank the sign of $d_i$.
4. Test statistic: $W^+ =$ sum of positive ranks.

Under $H_0$, the distribution of $W^+$ is tabulated. For large $n$, $W^+$ is approximately Normal.

### The Wilcoxon Rank-Sum Test (Mann-Whitney)
The non-parametric analogue of the two-sample t-test. Tests whether two independent samples come from distributions with the same median (or equivalently, whether one tends to produce larger values).

**Procedure:** Pool and rank all $n_1 + n_2$ observations. Test statistic $W$ = sum of ranks from sample 1. Under $H_0$: $E[W] = n_1(n_1+n_2+1)/2$.

### The Kruskal-Wallis Test
The non-parametric analogue of one-way ANOVA. Extends the Wilcoxon Rank-Sum test to $k > 2$ groups by comparing rank sums across groups.

$$H = \frac{12}{N(N+1)} \sum_{i=1}^k \frac{R_i^2}{n_i} - 3(N+1) \sim \chi^2_{k-1} \quad \text{(approximately)}$$

Where $R_i$ is the sum of ranks in group $i$ and $N = \sum n_i$.

The efficiency of non-parametric tests relative to their parametric counterparts is typically 95%+ when the Normal assumption is met, and dramatically higher when it is violated.
