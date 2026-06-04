# 7. Variable Selection and Multicollinearity

In MLR with many candidate predictors, two critical problems arise: **which variables to include** (variable selection) and **what happens when predictors are correlated with each other** (multicollinearity).

### Multicollinearity
**Multicollinearity** occurs when two or more predictors are strongly correlated with each other. This does not bias OLS estimates, but it dramatically inflates their variance — making individual coefficients unstable and statistically unreliable.

**Symptoms:**
*   Large standard errors for individual coefficients despite a significant overall F-test.
*   Coefficients change drastically when a predictor is added or removed.
*   Unexpected sign on a coefficient (a predictor that should increase $Y$ appears to decrease it).

**Detection — Variance Inflation Factor (VIF):**
$$\text{VIF}_j = \frac{1}{1 - R_j^2}$$

Where $R_j^2$ is the $R^2$ from regressing $x_j$ on all other predictors.

*   $\text{VIF}_j = 1$: no collinearity.
*   $\text{VIF}_j > 5$: moderate multicollinearity — proceed with caution.
*   $\text{VIF}_j > 10$: severe multicollinearity — action required.

**Remedies:** Collect more data, remove redundant predictors, use Ridge Regression (which deliberately adds a small bias to reduce variance).

### Variable Selection Methods

**All Subsets Selection:** Fit every possible subset of $p$ predictors ($2^p$ models) and compare using $R^2_\text{adj}$, AIC, or BIC. Computationally expensive for large $p$.

**Forward Stepwise:** Start with no predictors. Add the predictor that most improves the model (by F-test or AIC), one at a time, until no significant improvement remains.

**Backward Elimination:** Start with all $p$ predictors. Remove the least significant predictor (highest p-value > threshold) one at a time until all remaining predictors are significant.

### Model Selection Criteria
**AIC (Akaike Information Criterion):** Balances model fit against complexity:
$$\text{AIC} = n\ln\!\left(\frac{\text{RSS}}{n}\right) + 2(p+1)$$

**BIC (Bayesian Information Criterion):** Penalizes complexity more heavily for large $n$:
$$\text{BIC} = n\ln\!\left(\frac{\text{RSS}}{n}\right) + (p+1)\ln(n)$$

Lower AIC/BIC is better. BIC tends to select more parsimonious (simpler) models than AIC when $n$ is large.
