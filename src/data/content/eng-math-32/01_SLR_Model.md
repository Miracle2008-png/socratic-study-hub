# 1. Simple Linear Regression Model

**Linear Regression** is the most widely used statistical modelling technique in engineering. It quantifies the relationship between a **predictor variable** $x$ (controllable input) and a **response variable** $Y$ (measured output), and uses that relationship for prediction and system understanding.

### The Model
**Simple Linear Regression (SLR)** relates a single predictor $x$ to the response $Y$:
$$Y_i = \beta_0 + \beta_1 x_i + \varepsilon_i, \quad i = 1, 2, \dots, n$$

*   $\beta_0$ = **Intercept** — the expected value of $Y$ when $x = 0$.
*   $\beta_1$ = **Slope** — the expected change in $Y$ per unit increase in $x$.
*   $\varepsilon_i$ = **Error term** — captures all variability not explained by the linear relationship.

### Gauss-Markov Assumptions
The validity of all inference in SLR depends on four assumptions about $\varepsilon_i$:
1.  **Linearity:** $E[\varepsilon_i] = 0$. The true mean relationship is linear.
2.  **Homoscedasticity:** $\text{Var}(\varepsilon_i) = \sigma^2$ (constant for all $i$). Equal variance across all $x$ values.
3.  **Independence:** $\text{Cov}(\varepsilon_i, \varepsilon_j) = 0$ for $i \neq j$. Errors do not correlate across observations.
4.  **Normality (for inference):** $\varepsilon_i \sim N(0, \sigma^2)$.

Under assumptions 1–3 only, the Gauss-Markov Theorem guarantees that the Ordinary Least Squares (OLS) estimators are the **Best Linear Unbiased Estimators (BLUE)** — they have the minimum variance among all linear unbiased estimators.

Normality (assumption 4) is needed only to derive exact distributions for test statistics and confidence intervals.

### Interpretation of the Slope
$\beta_1$ is the central engineering quantity. It answers: "If I increase $x$ by 1 unit, how much does $Y$ change on average?"

*   $\beta_1 > 0$: positive relationship — increasing $x$ increases $Y$.
*   $\beta_1 < 0$: negative relationship — increasing $x$ decreases $Y$.
*   $\beta_1 = 0$: no linear relationship — $x$ provides no linear predictive value.

**Important:** Correlation between $x$ and $Y$ does not imply causation. A statistically significant slope only establishes a linear association, not a cause-and-effect mechanism.
