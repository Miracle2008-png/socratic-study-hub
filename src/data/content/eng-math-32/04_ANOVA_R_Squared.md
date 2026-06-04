# 4. ANOVA for Regression and $R^2$

### Partitioning Total Variability
Just as in ANOVA, the total variability in $Y$ is decomposed into explained (regression) and unexplained (error) parts:

$$\underbrace{\sum(Y_i - \bar{Y})^2}_{\text{SS}_\text{Total}} = \underbrace{\sum(\hat{Y}_i - \bar{Y})^2}_{\text{SS}_\text{Regression}} + \underbrace{\sum(Y_i - \hat{Y}_i)^2}_{\text{SS}_\text{Residual}}$$

$\text{SS}_\text{Total}$ measures total variance in $Y$ with no model. $\text{SS}_\text{Regression}$ is what the model explains. $\text{SS}_\text{Residual}$ (= RSS) is what remains unexplained.

### The Regression ANOVA Table
| Source | SS | df | MS | F |
|---|---|---|---|---|
| Regression | $\text{SS}_R$ | 1 | $\text{SS}_R/1$ | $\text{MS}_R/\text{MSE}$ |
| Residual | $\text{RSS}$ | $n-2$ | RSS$/$(n-2)$ | — |
| Total | $\text{SS}_T$ | $n-1$ | — | — |

The F-statistic tests $H_0: \beta_1 = 0$ globally. For SLR, $F = T^2$ (the square of the t-statistic for the slope).

### The Coefficient of Determination $R^2$
$$R^2 = \frac{\text{SS}_R}{\text{SS}_T} = 1 - \frac{\text{RSS}}{\text{SS}_T}$$

$R^2$ measures the **proportion of total variability in $Y$ explained by the linear regression on $x$**.

*   $R^2 = 1$: perfect fit — all points lie exactly on the fitted line.
*   $R^2 = 0$: the regression explains nothing — the line is no better than $\hat{Y} = \bar{Y}$.

### $R^2$ and the Correlation Coefficient
In SLR, $R^2$ is exactly the square of the Pearson correlation coefficient $r$:
$$r = \frac{S_{xy}}{\sqrt{S_{xx} \cdot S_{yy}}}, \quad R^2 = r^2$$

$r$ measures the strength and direction of the linear association ($-1 \le r \le 1$). $R^2$ measures only the fraction of explained variance (always between 0 and 1, no directional information).

### Limitations of $R^2$
*   **Adding more predictors always increases $R^2$** — even adding pure noise. The Adjusted $R^2$ corrects for this:
$$R^2_{\text{adj}} = 1 - \frac{(1-R^2)(n-1)}{n-p-1}$$
Where $p$ is the number of predictors.

*   A high $R^2$ does NOT mean the model is correct. A nonlinear relationship can yield high $R^2$ when fit with a line — but the residual pattern will reveal the misspecification.

*   A low $R^2$ does NOT mean the slope is zero. Even a slope significantly different from zero can produce a low $R^2$ if the process variability $\sigma^2$ is large.
