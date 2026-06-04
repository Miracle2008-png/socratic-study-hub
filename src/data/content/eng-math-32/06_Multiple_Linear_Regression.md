# 6. Multiple Linear Regression

**Multiple Linear Regression (MLR)** extends SLR to $p$ predictors $x_1, x_2, \dots, x_p$:
$$Y_i = \beta_0 + \beta_1 x_{i1} + \beta_2 x_{i2} + \dots + \beta_p x_{ip} + \varepsilon_i$$

### Matrix Formulation
MLR is elegantly expressed in matrix notation. Define:
$$\mathbf{Y} = \begin{pmatrix}Y_1 \\ \vdots \\ Y_n\end{pmatrix}, \quad \mathbf{X} = \begin{pmatrix}1 & x_{11} & \cdots & x_{1p} \\ \vdots & \vdots & & \vdots \\ 1 & x_{n1} & \cdots & x_{np}\end{pmatrix}, \quad \boldsymbol{\beta} = \begin{pmatrix}\beta_0 \\ \vdots \\ \beta_p\end{pmatrix}, \quad \boldsymbol{\varepsilon} = \begin{pmatrix}\varepsilon_1 \\ \vdots \\ \varepsilon_n\end{pmatrix}$$

The model becomes: $\mathbf{Y} = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\varepsilon}$, where $\boldsymbol{\varepsilon} \sim N(\mathbf{0}, \sigma^2\mathbf{I})$.

### The OLS Estimator
Minimizing RSS $= \|\mathbf{Y} - \mathbf{X}\boldsymbol{\beta}\|^2$ yields the **Normal Equations**:
$$\mathbf{X}^T\mathbf{X}\hat{\boldsymbol{\beta}} = \mathbf{X}^T\mathbf{Y}$$

Solution (when $\mathbf{X}^T\mathbf{X}$ is invertible):
$$\hat{\boldsymbol{\beta}} = (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{Y}$$

The fitted values are $\hat{\mathbf{Y}} = \mathbf{X}\hat{\boldsymbol{\beta}} = \mathbf{H}\mathbf{Y}$, where $\mathbf{H} = \mathbf{X}(\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T$ is the **Hat Matrix** (it "puts the hat on $\mathbf{Y}$"). The diagonal entries $h_{ii}$ of $\mathbf{H}$ are the leverage values.

### Inference in MLR
The covariance matrix of $\hat{\boldsymbol{\beta}}$:
$$\text{Cov}(\hat{\boldsymbol{\beta}}) = \sigma^2 (\mathbf{X}^T\mathbf{X})^{-1}$$

The standard error of $\hat{\beta}_j$ is $\text{SE}(\hat{\beta}_j) = \hat{\sigma}\sqrt{[(\mathbf{X}^T\mathbf{X})^{-1}]_{jj}}$.

Individual t-tests: $T_j = \hat{\beta}_j / \text{SE}(\hat{\beta}_j) \sim t_{n-p-1}$.

Overall F-test ($H_0$: all $\beta_j = 0$ except intercept):
$$F = \frac{\text{SS}_R/p}{\text{RSS}/(n-p-1)} \sim F(p, n-p-1)$$

### Partial Effects
In MLR, $\hat{\beta}_j$ is the **partial effect** of $x_j$ — the expected change in $Y$ per unit increase in $x_j$, holding all other predictors constant.

This is fundamentally different from SLR. Adding or removing other predictors changes the value of $\hat{\beta}_j$ — a phenomenon called **confounding**. Interpreting MLR coefficients requires understanding which variables are controlled for in the model.
