# 12. Concept Drills

Test your mastery of Linear Regression. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: In a SLR model, the OLS estimate of the slope is $\hat{\beta}_1 = 2.5$ with standard error $\text{SE}(\hat{\beta}_1) = 1.1$ and $n = 22$ observations. Test $H_0: \beta_1 = 0$ at $\alpha = 0.05$. The critical value is $t_{0.025, 20} = 2.086$.
Options:
A) $T = 2.5/1.1 = 2.27 > 2.086$. Reject $H_0$. The slope is statistically significant.
B) $T = 2.5/1.1 = 2.27 < 2.5$. Fail to reject $H_0$.
C) $T = 1.1/2.5 = 0.44$. Fail to reject $H_0$.
D) Cannot test because the distribution of $\hat{\beta}_1$ is unknown.
Answer: A
Explanation: The t-statistic is $T = \hat{\beta}_1 / \text{SE}(\hat{\beta}_1) = 2.5/1.1 = 2.27$. The degrees of freedom for SLR are $n - 2 = 22 - 2 = 20$. Since $|T| = 2.27 > t_{0.025, 20} = 2.086$, we reject $H_0: \beta_1 = 0$ at $\alpha = 0.05$. There is statistically significant evidence of a linear relationship between $x$ and $Y$.
```

```drill
Question: A regression model with $n=50$ observations and $p=8$ predictors gives $R^2 = 0.78$. A new predictor is added (now $p=9$) and $R^2$ rises to 0.79. Has the model improved?
Options:
A) Yes, because $R^2$ increased.
B) Not necessarily. $R^2$ always increases when predictors are added. Compare the Adjusted $R^2$ or AIC to determine if the new predictor provides genuine improvement.
C) Yes, because any increase in $R^2$ represents real additional explanatory power.
D) No, because $R^2 = 0.79$ is still below 1.
Answer: B
Explanation: $R^2$ increases mechanically when any predictor is added, even a random noise variable. The increase from 0.78 to 0.79 could be purely due to chance. The Adjusted $R^2$ penalizes for the extra parameter: $R^2_\text{adj} = 1 - (1-R^2)(n-1)/(n-p-1)$. If this decreases, the new predictor provides no genuine benefit. AIC and BIC provide similar penalized comparisons.
```

```drill
Question: A residual plot of $e_i$ vs. $\hat{Y}_i$ shows a clear funnel shape: residuals are small when $\hat{Y}$ is small and large when $\hat{Y}$ is large. Which assumption is violated and what is the remedy?
Options:
A) Normality is violated. Apply a Box-Cox transformation to the residuals.
B) Linearity is violated. Add a quadratic term to the model.
C) Homoscedasticity is violated (variance increases with the fitted value). Apply a logarithmic or square-root transformation to $Y$, or use Weighted Least Squares.
D) Independence is violated. Use the Durbin-Watson test and add lagged terms.
Answer: C
Explanation: A funnel shape in residuals vs. fitted values is the classic diagnostic signature of heteroscedasticity — the variance of the errors grows with the expected response. This violates the Gauss-Markov equal-variance assumption, making OLS standard errors incorrect (usually too small). The remedy is to transform $Y$ using $\ln(Y)$ (for multiplicative errors) or $\sqrt{Y}$, which stabilizes variance, or to use Weighted Least Squares with weights $w_i \propto 1/\hat{\sigma}_i^2$.
```

```drill
Question: Two predictors in a MLR model have a VIF of 14 and 16 respectively. What is the most direct consequence and the recommended action?
Options:
A) The model has low predictive power. Collect more data to increase $R^2$.
B) The overall F-test is invalid. Refit using non-parametric methods.
C) Severe multicollinearity inflates the standard errors of these coefficients dramatically. Consider removing one correlated predictor, combining them into a composite, or using Ridge Regression.
D) The model is overfitting. Apply LASSO to shrink all coefficients.
Answer: C
Explanation: VIF values above 10 indicate severe multicollinearity. A VIF of 14 means the standard error of that coefficient is $\sqrt{14} \approx 3.7$ times larger than it would be without collinearity — making it nearly impossible to detect its individual significance even if it truly matters. The model's overall predictions may still be accurate, but individual coefficient interpretation is unreliable. Remedies: remove one of the collinear predictors, create a composite (e.g., average them), center and scale predictors, or use Ridge Regression which handles collinearity explicitly.
```
