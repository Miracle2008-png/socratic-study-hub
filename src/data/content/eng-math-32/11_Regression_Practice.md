# 11. Regression in Engineering Practice

This page synthesizes the regression toolkit and describes how it is applied end-to-end in real engineering modelling problems.

### The Full Regression Workflow

**Step 1 — Exploratory Data Analysis (EDA):**
Before fitting any model, plot the data. Scatter plots of $Y$ vs. each $x_j$ reveal obvious nonlinearities, outliers, and the need for transformations. Correlation matrices identify potential multicollinearity.

**Step 2 — Model Specification:**
Choose predictors based on physical understanding of the system, not just statistical correlation. Including irrelevant predictors inflates variance; excluding relevant predictors biases all remaining coefficients (omitted variable bias).

**Step 3 — OLS Fitting and Initial Check:**
Fit the model, examine the ANOVA table (overall F-test), $R^2$, and coefficient p-values. A significant F but all non-significant individual t-tests is a classic symptom of multicollinearity.

**Step 4 — Residual Diagnostics:**
Examine residual plots systematically. Fix violations before interpreting coefficients: transform variables for nonlinearity or heteroscedasticity, add interaction terms for missing structure, remove or robustly treat outliers.

**Step 5 — Variable Selection:**
Using AIC/BIC or cross-validation, reduce the model to a parsimonious set of significant, non-redundant predictors.

**Step 6 — Final Model Interpretation and Prediction:**
Construct confidence intervals on coefficients for understanding. Construct prediction intervals for individual future observations. Document all limitations and the range of $x$ values where the model was validated (extrapolation is dangerous).

### Response Surface Methodology
In designed experiments with $k$ factors, Response Surface Methodology (RSM) fits a second-order polynomial to find the settings that optimize the response:
$$Y = \beta_0 + \sum_j \beta_j x_j + \sum_j \beta_{jj} x_j^2 + \sum_{j<k} \beta_{jk} x_j x_k + \varepsilon$$

The **Central Composite Design (CCD)** and **Box-Behnken Design** are the standard experimental plans for RSM — they efficiently estimate all 15+ coefficients in a 3-factor second-order model with far fewer than $3^3=27$ full factorial runs.

The optimal factor settings are found by solving $\nabla Y = 0$ (setting the gradient of the fitted surface to zero), revealing the maximum, minimum, or saddle point of the response surface.
