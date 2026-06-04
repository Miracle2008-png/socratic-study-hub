# 9. Structural Reliability: Stress-Strength Interference

Classical reliability uses empirical failure rate data. **Structural Reliability** derives failure probability from first principles, by modelling both the applied stress $S$ and the component strength $R$ as random variables and computing the probability that stress exceeds strength.

### The Interference Model
A component fails when the applied load (stress) $S$ exceeds the component's capacity (strength or resistance) $R$:
$$P_f = P(S > R) = P(S - R > 0) = P(g(\mathbf{X}) < 0)$$

Where $g(\mathbf{X}) = R - S$ is the **Limit State Function** (also called the performance function or safety margin). Failure occurs when $g < 0$.

### Case 1: Both Normal
If $R \sim N(\mu_R, \sigma_R^2)$ and $S \sim N(\mu_S, \sigma_S^2)$ are independent:
$$g = R - S \sim N(\mu_R - \mu_S, \; \sigma_R^2 + \sigma_S^2)$$

$$P_f = P(g < 0) = \Phi\!\left(-\frac{\mu_R - \mu_S}{\sqrt{\sigma_R^2 + \sigma_S^2}}\right) = \Phi(-\beta)$$

Where $\beta = (\mu_R - \mu_S)/\sqrt{\sigma_R^2 + \sigma_S^2}$ is the **Reliability Index** (also called the Hasofer-Lind index).

The **Central Safety Factor** is $\mu_R / \mu_S$. But $P_f$ depends on BOTH the safety factor AND the coefficient of variation — a high safety factor with highly variable loads and strength can be less reliable than a moderate safety factor with tight tolerances.

### The Reliability Index $\beta$
$\beta$ is the number of standard deviations separating the mean safety margin from zero:
*   $\beta = 1$: $P_f = \Phi(-1) = 0.159$ (15.9% failure probability — unacceptable for almost any application).
*   $\beta = 3$: $P_f = \Phi(-3) = 0.00135$ (0.135%).
*   $\beta = 4$: $P_f = \Phi(-4) = 0.0000317$ (~3 per 100,000).
*   $\beta = 6$ (Six Sigma): $P_f = \Phi(-6) = 9.87 \times 10^{-10}$.

### First-Order Second-Moment Method (FOSM)
For nonlinear limit state functions $g(\mathbf{X})$ with non-Normal inputs, linearize using a first-order Taylor expansion about the mean:
$$g \approx g(\boldsymbol{\mu}) + \sum_i \frac{\partial g}{\partial X_i}\bigg|_{\boldsymbol{\mu}} (X_i - \mu_i)$$

$$\mu_g \approx g(\boldsymbol{\mu}) \qquad \sigma_g^2 \approx \sum_i \left(\frac{\partial g}{\partial X_i}\right)^2 \sigma_i^2$$

$$\beta \approx \frac{\mu_g}{\sigma_g}$$

FOSM is the basis of Load and Resistance Factor Design (LRFD) codes used in civil and structural engineering (Eurocode, ASCE 7, ACI 318).
