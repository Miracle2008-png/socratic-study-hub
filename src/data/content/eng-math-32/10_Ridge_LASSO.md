# 10. Ridge Regression and LASSO

Standard OLS fails when predictors are strongly correlated (multicollinearity) or when the number of predictors $p$ is large relative to observations $n$. **Regularized regression** methods add a penalty term to the objective function to shrink coefficients and improve prediction.

### Ridge Regression ($L_2$ Regularization)
Ridge regression adds a squared-coefficient penalty to RSS:
$$\hat{\boldsymbol{\beta}}_\text{ridge} = \arg\min_{\boldsymbol{\beta}} \left[\sum_{i=1}^n (Y_i - \mathbf{x}_i^T\boldsymbol{\beta})^2 + \lambda\sum_{j=1}^p \beta_j^2\right]$$

The closed-form solution is:
$$\hat{\boldsymbol{\beta}}_\text{ridge} = (\mathbf{X}^T\mathbf{X} + \lambda\mathbf{I})^{-1}\mathbf{X}^T\mathbf{Y}$$

The $\lambda\mathbf{I}$ term makes the matrix invertible even when $\mathbf{X}^T\mathbf{X}$ is singular or near-singular — it literally stabilizes the solution.

*   $\lambda = 0$: reduces to OLS.
*   $\lambda \to \infty$: all coefficients shrink toward zero.
*   Ridge shrinks all coefficients toward zero proportionally but **never sets any exactly to zero**.

### The LASSO ($L_1$ Regularization)
LASSO (Least Absolute Shrinkage and Selection Operator) uses an absolute-value penalty:
$$\hat{\boldsymbol{\beta}}_\text{LASSO} = \arg\min_{\boldsymbol{\beta}} \left[\sum_{i=1}^n (Y_i - \mathbf{x}_i^T\boldsymbol{\beta})^2 + \lambda\sum_{j=1}^p |\beta_j|\right]$$

No closed form. Solved with coordinate descent or LARS algorithms.

**Key difference from Ridge:** The $L_1$ penalty's corners at the axes force some coefficients to exactly zero — LASSO performs automatic **variable selection** while estimating. This makes the model sparse and interpretable.

### Choosing $\lambda$: Cross-Validation
The regularization strength $\lambda$ controls the bias-variance tradeoff:
*   Too small: near-OLS, high variance, possible instability.
*   Too large: high bias, underfitting.

**$k$-Fold Cross-Validation** selects $\lambda$ by:
1. Splitting data into $k$ folds.
2. For each candidate $\lambda$, train on $k-1$ folds and test on the held-out fold.
3. Average the prediction error across all $k$ folds.
4. Choose $\lambda$ that minimizes the average cross-validation error.

### Elastic Net
Combines Ridge and LASSO penalties:
$$\hat{\boldsymbol{\beta}}_\text{EN} = \arg\min_{\boldsymbol{\beta}} \left[\text{RSS} + \lambda_1\sum|\beta_j| + \lambda_2\sum\beta_j^2\right]$$

Elastic Net performs selection like LASSO but handles correlated predictors more gracefully by grouping them (Ridge's behavior), making it preferred in high-dimensional problems with correlated features — such as sensor arrays and genomic data analysis.
