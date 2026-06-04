# 3. Inference on Regression Coefficients

Having estimated $\hat{\beta}_0$ and $\hat{\beta}_1$, we need to determine: are they statistically significant? How precise are they? The key is knowing their sampling distributions.

### Distributions of the OLS Estimators
Under the Normal error assumption $\varepsilon_i \sim N(0, \sigma^2)$:

$$\hat{\beta}_1 \sim N\!\left(\beta_1, \; \frac{\sigma^2}{S_{xx}}\right)$$

$$\hat{\beta}_0 \sim N\!\left(\beta_0, \; \sigma^2\!\left[\frac{1}{n} + \frac{\bar{x}^2}{S_{xx}}\right]\right)$$

Both estimators are unbiased (their means are the true parameter values) and Normally distributed.

### Estimating $\sigma^2$
The error variance $\sigma^2$ is unknown and estimated by the **Mean Squared Error (MSE)**:
$$\hat{\sigma}^2 = \text{MSE} = \frac{\text{RSS}}{n-2} = \frac{\sum(Y_i - \hat{Y}_i)^2}{n-2}$$

The divisor $n-2$ accounts for the two parameters estimated ($\hat{\beta}_0, \hat{\beta}_1$). Under the model assumptions, $(n-2)\text{MSE}/\sigma^2 \sim \chi^2_{n-2}$.

### t-Tests for Individual Coefficients
To test $H_0: \beta_1 = 0$ (no linear relationship):
$$T = \frac{\hat{\beta}_1 - 0}{\text{SE}(\hat{\beta}_1)} = \frac{\hat{\beta}_1}{\sqrt{\text{MSE}/S_{xx}}} \sim t_{n-2}$$

Reject $H_0$ if $|T| > t_{\alpha/2, n-2}$.

**A significant slope** means $x$ has a statistically detectable linear association with $Y$. **A non-significant slope** means we cannot rule out $\beta_1 = 0$ — $x$ provides no useful linear prediction.

### Confidence Intervals for Coefficients
$$\hat{\beta}_1 \pm t_{\alpha/2, n-2} \cdot \sqrt{\frac{\text{MSE}}{S_{xx}}}$$

$$\hat{\beta}_0 \pm t_{\alpha/2, n-2} \cdot \sqrt{\text{MSE}\left(\frac{1}{n} + \frac{\bar{x}^2}{S_{xx}}\right)}$$

### Confidence Interval for the Mean Response
The fitted value $\hat{Y}(x^*)$ at a new $x^*$ has uncertainty. The 95% CI for the **mean response** at $x^*$:
$$\hat{Y}(x^*) \pm t_{\alpha/2, n-2} \cdot \sqrt{\text{MSE}\left(\frac{1}{n} + \frac{(x^*-\bar{x})^2}{S_{xx}}\right)}$$

The interval is narrowest at $x^* = \bar{x}$ and widens as $x^*$ moves away from the center of the data.

### Prediction Interval for a New Observation
A **Prediction Interval** is wider than the confidence interval because it must account for both the uncertainty in the mean estimate AND the natural scatter of individual observations ($\sigma^2$):
$$\hat{Y}(x^*) \pm t_{\alpha/2, n-2} \cdot \sqrt{\text{MSE}\left(1 + \frac{1}{n} + \frac{(x^*-\bar{x})^2}{S_{xx}}\right)}$$

The extra $1$ inside the square root reflects the irreducible noise of a single new observation.
