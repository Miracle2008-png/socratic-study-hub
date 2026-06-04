# 9. Logistic Regression

Standard linear regression predicts a continuous response. **Logistic Regression** handles a **binary response** $Y \in \{0, 1\}$ — pass/fail, defective/nondefective, on/off — while modelling the probability of success as a function of predictors.

### The Problem with Linear Probability Models
If we directly regress $Y$ (0 or 1) on $x$ using OLS, the fitted values $\hat{Y}$ are unbounded and can exceed 1 or fall below 0 — physically meaningless for a probability.

We need a model that:
1. Outputs values strictly between 0 and 1.
2. Has an interpretable relationship with $x$.

### The Logistic Function
The **Logistic (Sigmoid) Function** maps any real number to $(0, 1)$:
$$\sigma(z) = \frac{e^z}{1 + e^z} = \frac{1}{1 + e^{-z}}$$

We model $P(Y=1 \mid x) = \sigma(\beta_0 + \beta_1 x)$:
$$P(Y=1 \mid x) = \frac{e^{\beta_0 + \beta_1 x}}{1 + e^{\beta_0 + \beta_1 x}}$$

### The Log-Odds (Logit) Transformation
Taking the log of the odds ratio gives a linear function of $x$:
$$\ln\frac{P(Y=1)}{P(Y=0)} = \beta_0 + \beta_1 x$$

The left side — the **logit** or log-odds — ranges over all real numbers. The right side is a linear predictor. This is why logistic regression is a **Generalized Linear Model (GLM)** — it linearizes the response through a link function (the logit).

### Interpretation of Coefficients
$\beta_1$ represents the change in log-odds per unit increase in $x$.

The **Odds Ratio** $e^{\beta_1}$ is more interpretable:
*   $e^{\beta_1} > 1$: increasing $x$ increases the odds of success.
*   $e^{\beta_1} < 1$: increasing $x$ decreases the odds of success.
*   $e^{\beta_1} = 1$ ($\beta_1 = 0$): $x$ has no effect on the probability.

### Estimation: Maximum Likelihood
OLS cannot be used for logistic regression because residuals are not Normal. Parameters are estimated by **Maximum Likelihood**: maximize the log-likelihood:
$$\ell(\boldsymbol{\beta}) = \sum_{i: Y_i=1} \ln P(Y_i=1 \mid x_i) + \sum_{i: Y_i=0} \ln P(Y_i=0 \mid x_i)$$

No closed form exists; numerical optimization (Newton-Raphson, IRLS) is used iteratively.

### Inference: Wald Tests and Likelihood Ratio Tests
Test $H_0: \beta_j = 0$ using the **Wald Statistic** $Z = \hat{\beta}_j / \text{SE}(\hat{\beta}_j) \sim N(0,1)$ asymptotically, or the more reliable **Likelihood Ratio Test**: $\chi^2 = 2(\ell_\text{full} - \ell_\text{reduced}) \sim \chi^2_1$.
