# 10. Extensions: Multivariate CLT and Delta Method

### The Multivariate CLT
The CLT extends naturally to vectors of random variables. If $\mathbf{X}_1, \mathbf{X}_2, \dots, \mathbf{X}_n$ are i.i.d. random vectors in $\mathbb{R}^p$, each with mean vector $\boldsymbol{\mu}$ and covariance matrix $\boldsymbol{\Sigma}$, then:

$$\sqrt{n}(\bar{\mathbf{X}}_n - \boldsymbol{\mu}) \xrightarrow{\text{dist}} N_p(\mathbf{0}, \boldsymbol{\Sigma})$$

The standardized sample mean vector converges to a **Multivariate Normal distribution** $N_p(\mathbf{0}, \boldsymbol{\Sigma})$.

This result underpins multivariate statistical process control — simultaneously monitoring multiple quality metrics (diameter, weight, hardness) on a production line and constructing multivariate confidence ellipsoids around the process mean vector.

### The Delta Method
The CLT gives the distribution of the sample mean $\bar{X}$. But engineers often need the distribution of a **nonlinear function** of the sample mean — for example:
*   The mean failure rate $\hat{\lambda} = 1/\bar{X}$ (reciprocal of mean lifetime).
*   The sample variance of a ratio.
*   The coefficient of variation $\hat{CV} = S/\bar{X}$.

The **Delta Method** uses a first-order Taylor expansion to approximate the distribution of $g(\bar{X})$.

If $\sqrt{n}(\bar{X} - \mu) \xrightarrow{\text{dist}} N(0, \sigma^2)$ and $g$ is differentiable with $g'(\mu) \neq 0$, then:
$$\sqrt{n}(g(\bar{X}) - g(\mu)) \xrightarrow{\text{dist}} N(0, \; [g'(\mu)]^2 \sigma^2)$$

### Worked Example: Mean Time to Failure Estimation
$n = 50$ components are life-tested. The average failure time is $\bar{X} = 800$ hours with population standard deviation $\sigma = 200$ hours.

The failure rate is $\lambda = 1/\mu$. We want a confidence interval for $\hat{\lambda} = 1/\bar{X}$.

Let $g(x) = 1/x$. Then $g'(x) = -1/x^2$, so $g'(\mu) = -1/800^2$.

By the Delta Method:
$$\hat{\lambda} \approx N\!\left(\frac{1}{800}, \; \frac{[g'(\mu)]^2 \sigma^2}{n}\right) = N\!\left(0.00125, \; \frac{(1/640000)^2 \times 40000}{50}\right)$$

$$\text{Std error of }\hat{\lambda} \approx \frac{\sigma/\mu^2}{\sqrt{n}} = \frac{200/640000}{\sqrt{50}} = \frac{0.0003125}{7.07} \approx 0.0000442$$

A 95% CI for $\lambda$:
$$0.00125 \pm 1.96 \times 0.0000442 = [0.001163, \; 0.001337] \text{ failures/hour}$$

The Delta Method transforms a CLT result on one scale into a confidence interval on a completely different (nonlinear) scale without any additional distribution derivation.
