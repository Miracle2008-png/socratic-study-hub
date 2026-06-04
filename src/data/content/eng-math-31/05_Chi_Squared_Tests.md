# 5. Chi-Squared Tests: Goodness-of-Fit and Independence

### Goodness-of-Fit Test
The goodness-of-fit test answers: **Does the observed distribution of data match a hypothesized theoretical distribution?**

You have $k$ categories. You observe counts $O_1, O_2, \dots, O_k$ (the observed frequencies). Under the null hypothesis, you compute expected counts $E_i = n \cdot p_i$ where $p_i$ is the hypothesized probability of category $i$.

**Test statistic:**
$$\chi^2 = \sum_{i=1}^k \frac{(O_i - E_i)^2}{E_i} \sim \chi^2_{k-1} \quad \text{under } H_0$$

Reject $H_0$ at significance $\alpha$ if $\chi^2 > \chi^2_{\alpha, k-1}$.

**Rule:** Each expected count $E_i$ must be $\ge 5$. Combine adjacent categories if any $E_i < 5$.

**Degrees of freedom adjustment:** If $m$ parameters of the distribution are estimated from the data (e.g., you fit a Poisson with $\hat{\lambda} = \bar{x}$), the df reduces to $k - 1 - m$.

### Worked Example: Testing Poisson Fit
A server logs the number of crashes per day for 200 days. Observed counts:

| Crashes/day | 0 | 1 | 2 | 3 | $\ge 4$ |
|---|---|---|---|---|---|
| Observed $O_i$ | 110 | 65 | 18 | 6 | 1 |

The sample mean is $\bar{x} = (0 \times 110 + 1\times65 + 2\times18 + 3\times6 + 4\times1)/200 = 0.56$.
Fit a $\text{Pois}(0.56)$ distribution (1 parameter estimated, so df $= 5 - 1 - 1 = 3$).

Expected counts from $\text{Pois}(0.56)$: $E_0=113.6$, $E_1=63.6$, $E_2=17.8$, $E_3=3.3$, $E_{\ge4}=1.7$.
Combine last two cells: $O=7$, $E=5.0$.

$$\chi^2 = \frac{(110-113.6)^2}{113.6} + \frac{(65-63.6)^2}{63.6} + \frac{(18-17.8)^2}{17.8} + \frac{(7-5.0)^2}{5.0} = 0.11 + 0.03 + 0.002 + 0.80 = 0.94$$

Critical value $\chi^2_{0.05, 3} = 7.815$. Since $0.94 < 7.815$, we **do not reject** the Poisson model. The data is consistent with a Poisson distribution.

### Test of Independence (Contingency Tables)
Tests whether two categorical variables are statistically independent.

Arrange observed counts in an $r \times c$ table. Expected count for cell $(i,j)$:
$$E_{ij} = \frac{(\text{row } i \text{ total}) \times (\text{col } j \text{ total})}{n}$$

$$\chi^2 = \sum_{i,j} \frac{(O_{ij} - E_{ij})^2}{E_{ij}} \sim \chi^2_{(r-1)(c-1)}$$

Used in engineering to test whether defect type is independent of machine, whether failure mode is independent of material batch, or whether customer complaint category is independent of product line.
