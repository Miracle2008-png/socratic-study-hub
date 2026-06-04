# 11. Survival Analysis

**Survival Analysis** deals with time-to-event data — specifically, the time until a component fails, a patient recovers, or a system transitions states. It is the statistical foundation of reliability engineering, clinical trials, and actuarial science.

### Censoring: The Core Challenge
In standard regression, all response values are fully observed. In survival analysis, many observations are **censored** — you only know the event had NOT occurred by the end of the study period.

*   **Right censoring (most common):** A component is still running when the test ends. You know its lifetime exceeds the test duration, but not by how much.
*   **Left censoring:** The event occurred before observation began.
*   **Interval censoring:** You know the event occurred between two inspection times.

Ignoring censored observations or treating them as failures both bias the analysis. Survival analysis properly incorporates censored data through the likelihood.

### The Kaplan-Meier Estimator
The **Kaplan-Meier (KM)** estimator constructs the survival function $\hat{R}(t)$ non-parametrically from censored data.

At each observed failure time $t_j$, with $d_j$ deaths and $n_j$ units still at risk:
$$\hat{R}(t) = \prod_{t_j \le t} \left(1 - \frac{d_j}{n_j}\right)$$

The KM estimate steps down only at actual failure times and ignores censored observations in the denominator only after they are censored — correctly using all available information.

### The Nelson-Aalen Estimator
An alternative estimator for the **cumulative hazard function** $H(t) = -\ln R(t)$:
$$\hat{H}(t) = \sum_{t_j \le t} \frac{d_j}{n_j}$$

### The Log-Rank Test
Compares survival curves from two or more groups (e.g., two manufacturing processes) without assuming any parametric form.

$$\chi^2 = \frac{\left(\sum_j (O_{1j} - E_{1j})\right)^2}{\sum_j E_{1j}\left(1 - \frac{n_{1j}}{n_j}\right)\frac{n_{2j}}{n_j}} \sim \chi^2_1 \quad \text{under } H_0$$

### The Cox Proportional Hazards Model
A semi-parametric regression model relating survival time to covariates (temperature, load, voltage):
$$h(t \mid \mathbf{x}) = h_0(t) \cdot \exp(\beta_1 x_1 + \beta_2 x_2 + \dots)$$

$h_0(t)$ is the unspecified baseline hazard. The $\beta$ coefficients represent the log hazard ratio per unit increase in each covariate. A coefficient $\beta_1 = 0.5$ means each unit increase in $x_1$ multiplies the failure rate by $e^{0.5} = 1.65$ — a 65% increase in hazard.
