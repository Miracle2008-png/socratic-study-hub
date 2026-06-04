# 5. Residual Analysis and Model Diagnostics

Fitting a regression line is not the end. The Gauss-Markov assumptions must be verified through **residual analysis** — systematic examination of the residuals $e_i = Y_i - \hat{Y}_i$ to detect violations that would invalidate inference.

### Standardized Residuals
Raw residuals have different variances (observations near the extremes of $x$ have more influence). **Standardized residuals** normalize each residual:
$$r_i = \frac{e_i}{\hat{\sigma}\sqrt{1 - h_{ii}}}$$

Where $h_{ii}$ is the **leverage** of observation $i$ (how far $x_i$ is from $\bar{x}$). Standardized residuals should look like draws from $N(0,1)$ if the model is correct. Values $|r_i| > 3$ are potential outliers.

### Residual Plots and What They Reveal

**Plot 1 — Residuals vs. Fitted Values $\hat{Y}$:**
*   Random scatter around zero → Linearity and homoscedasticity satisfied.
*   Curved pattern (U-shape, arch) → Nonlinearity: a quadratic or transformed predictor is needed.
*   Funnel shape (variance increasing with $\hat{Y}$) → Heteroscedasticity: transform $Y$ (e.g., $\ln Y$) or use Weighted Least Squares.

**Plot 2 — Residuals vs. Predictor $x$:**
Same information as Plot 1 in SLR. In multiple regression, plot against each predictor separately to isolate which variable causes the pattern.

**Plot 3 — Normal Q-Q Plot of Residuals:**
Plot the sorted residuals against the quantiles of $N(0,1)$. Points should lie along a straight diagonal line. Curved tails → non-Normal errors. Outliers appear as isolated extreme points far from the line.

**Plot 4 — Residuals vs. Order (Index Plot):**
Detects autocorrelation — when consecutive residuals are positively correlated (a residual that is positive is likely followed by another positive residual). This violates the independence assumption and often occurs in time-series data or sequential experiments.

### The Durbin-Watson Statistic
Formally tests for first-order autocorrelation in residuals:
$$DW = \frac{\sum_{i=2}^n (e_i - e_{i-1})^2}{\sum_{i=1}^n e_i^2}$$

$DW \approx 2$: no autocorrelation. $DW < 2$: positive autocorrelation. $DW > 2$: negative autocorrelation.

### Leverage and Influential Points
**High leverage:** $h_{ii} > 2p/n$ (where $p$ is number of parameters) — observation is far from the center of $x$-space and has the potential to strongly influence the fitted line.

**Cook's Distance $D_i$:** Measures how much all fitted values change if observation $i$ is deleted. $D_i > 1$ indicates a highly influential observation that may be distorting the entire fitted model.
