# 8. Polynomial and Nonlinear Regression

Many real engineering relationships are not linear. Polynomial regression extends the linear framework to curved relationships while keeping all the linear algebra machinery intact. For truly nonlinear relationships, nonlinear least squares or transformations are required.

### Polynomial Regression
A polynomial regression of degree $d$ adds powers of $x$ as new predictors:
$$Y = \beta_0 + \beta_1 x + \beta_2 x^2 + \dots + \beta_d x^d + \varepsilon$$

Despite the curved relationship with $x$, this is still a **linear model** — linear in the parameters $\beta_0, \beta_1, \dots, \beta_d$. All OLS theory applies unchanged. The design matrix simply includes columns $1, x, x^2, \dots, x^d$.

**Choosing the degree:** Fit models of increasing degree and stop when the highest-order term becomes non-significant (t-test), or when AIC/BIC stops improving. Avoid overfitting — a degree-$(n-1)$ polynomial passes through every data point but predicts nothing.

### Linearizable Nonlinear Models
Many nonlinear engineering models can be transformed into linear models:

| Nonlinear Model | Transformation | Linearized Form |
|---|---|---|
| $Y = \beta_0 e^{\beta_1 x}$ | $\ln Y = \ln\beta_0 + \beta_1 x$ | Log-linear |
| $Y = \beta_0 x^{\beta_1}$ | $\ln Y = \ln\beta_0 + \beta_1 \ln x$ | Log-log (power law) |
| $Y = \frac{1}{\beta_0 + \beta_1 x}$ | $1/Y = \beta_0 + \beta_1 x$ | Reciprocal (Michaelis-Menten) |

After fitting the linearized model, transform the coefficients back. Caution: OLS minimizes residuals on the transformed scale, not the original scale, so the error structure must be checked.

### Truly Nonlinear Regression
For models like the Arrhenius equation $k = A e^{-E_a/RT}$ or logistic growth $Y = L/(1+e^{-(x-x_0)/s})$, the parameters appear nonlinearly and cannot be linearized.

**Nonlinear Least Squares** minimizes RSS numerically using iterative algorithms (Gauss-Newton, Levenberg-Marquardt):
$$\hat{\boldsymbol{\theta}} = \arg\min_{\boldsymbol{\theta}} \sum_{i=1}^n [Y_i - f(x_i; \boldsymbol{\theta})]^2$$

Starting values for the parameters are critical — poor starting values can cause the algorithm to converge to a local minimum rather than the global minimum.
