# 2. Ordinary Least Squares Estimation

### The Least Squares Criterion
Given $n$ data pairs $(x_1, Y_1), (x_2, Y_2), \dots, (x_n, Y_n)$, we want to find the line $\hat{Y} = b_0 + b_1 x$ that fits the data best.

The **residual** for observation $i$ is the vertical distance between the observed $Y_i$ and the fitted value $\hat{Y}_i = b_0 + b_1 x_i$:
$$e_i = Y_i - \hat{Y}_i = Y_i - (b_0 + b_1 x_i)$$

The **Residual Sum of Squares (RSS)** is the total squared vertical deviation:
$$\text{RSS}(b_0, b_1) = \sum_{i=1}^n e_i^2 = \sum_{i=1}^n (Y_i - b_0 - b_1 x_i)^2$$

OLS minimizes RSS — it finds the slope and intercept that make the squared residuals as small as possible.

### The OLS Normal Equations
Setting $\partial\text{RSS}/\partial b_0 = 0$ and $\partial\text{RSS}/\partial b_1 = 0$ and solving:

$$\hat{\beta}_1 = \frac{S_{xy}}{S_{xx}} = \frac{\sum_{i=1}^n (x_i - \bar{x})(Y_i - \bar{Y})}{\sum_{i=1}^n (x_i - \bar{x})^2}$$

$$\hat{\beta}_0 = \bar{Y} - \hat{\beta}_1 \bar{x}$$

Where $S_{xy} = \sum(x_i - \bar{x})(Y_i - \bar{Y})$ and $S_{xx} = \sum(x_i - \bar{x})^2$.

### Computational Forms
For numerical calculations with raw data, the equivalent computing formulas are:
$$S_{xx} = \sum x_i^2 - n\bar{x}^2 \qquad S_{xy} = \sum x_i Y_i - n\bar{x}\bar{Y}$$

### Key Properties of OLS Estimates
*   The regression line always passes through the **centroid** $(\bar{x}, \bar{Y})$.
*   The sum of residuals is always zero: $\sum e_i = 0$.
*   The residuals are uncorrelated with $x$: $\sum x_i e_i = 0$.

### Worked Example: Resistance vs. Temperature
| Temp $x$ (°C) | Resistance $Y$ (Ω) |
|---|---|
| 20 | 102.5 |
| 40 | 108.3 |
| 60 | 114.1 |
| 80 | 119.7 |
| 100 | 125.3 |

$\bar{x} = 60$, $\bar{Y} = 113.98$

$S_{xx} = (20-60)^2+(40-60)^2+(60-60)^2+(80-60)^2+(100-60)^2 = 1600+400+0+400+1600 = 4000$

$S_{xy} = (20-60)(102.5-113.98)+\dots = (-40)(-11.48)+(-20)(-5.68)+0+(20)(5.72)+(40)(11.32) = 459.2+113.6+0+114.4+452.8 = 1140$

$$\hat{\beta}_1 = 1140/4000 = \mathbf{0.285 \; \Omega/°C} \qquad \hat{\beta}_0 = 113.98 - 0.285(60) = \mathbf{96.88 \; \Omega}$$

Fitted model: $\hat{Y} = 96.88 + 0.285x$. For $x=50°C$: predicted resistance $= 96.88 + 0.285(50) = 111.1\;\Omega$.
