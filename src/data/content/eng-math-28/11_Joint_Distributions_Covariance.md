# 11. Joint Distributions and Covariance

Real engineering systems involve multiple random variables simultaneously. A circuit has voltage AND current. A structure experiences load AND temperature. To analyze interactions between random variables, we need **Joint Distributions**.

### Joint PMF / PDF
For two random variables $X$ and $Y$:

**Discrete:** The joint PMF $p(x, y) = P(X = x, Y = y)$.

**Continuous:** The joint PDF $f(x, y)$ satisfies:
$$P((X, Y) \in A) = \iint_A f(x, y) \, dx \, dy$$

The total volume under the joint PDF surface equals 1.

### Marginal Distributions
To recover the individual distribution of $X$ alone (ignoring $Y$), we integrate (or sum) out the unwanted variable:

**Continuous:**
$$f_X(x) = \int_{-\infty}^{\infty} f(x, y) \, dy$$

This is the "marginal PDF" of $X$ — you collapse the 2D surface onto the x-axis by integrating across all $y$.

### Independence of Two Random Variables
$X$ and $Y$ are independent if and only if their joint distribution factors:
$$f(x, y) = f_X(x) \cdot f_Y(y) \quad \text{for all } x, y$$

### Covariance
**Covariance** measures the degree to which $X$ and $Y$ vary together (linearly):
$$\text{Cov}(X, Y) = E[(X - \mu_X)(Y - \mu_Y)] = E[XY] - E[X]E[Y]$$

*   $\text{Cov}(X,Y) > 0$: $X$ and $Y$ tend to be simultaneously large or simultaneously small.
*   $\text{Cov}(X,Y) < 0$: When $X$ is large, $Y$ tends to be small, and vice versa.
*   $\text{Cov}(X,Y) = 0$: No linear relationship (but they may still be non-linearly dependent!).

If $X$ and $Y$ are independent, then $\text{Cov}(X,Y) = 0$. The converse is NOT always true.

### Correlation Coefficient
Covariance depends on units and scale. The dimensionless **Correlation Coefficient** normalizes it:
$$\rho_{XY} = \frac{\text{Cov}(X, Y)}{\sigma_X \sigma_Y}, \quad -1 \le \rho \le 1$$

*   $\rho = +1$: perfect positive linear relationship.
*   $\rho = -1$: perfect negative linear relationship.
*   $\rho = 0$: no linear relationship.

### Variance of a Sum
The variance formula for a sum of random variables requires covariance:
$$\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y) + 2\text{Cov}(X, Y)$$

If $X$ and $Y$ are independent: $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$.

This is why uncorrelated noise sources add in power (variances add), not in amplitude — a fundamental principle in signal processing and antenna design.
