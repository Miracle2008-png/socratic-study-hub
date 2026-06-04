# 2. Maximum Likelihood Estimation

**Maximum Likelihood Estimation (MLE)** is the most powerful and widely-used method for constructing estimators. The idea is remarkably intuitive: choose the parameter value that makes the observed data as probable as possible.

### The Likelihood Function
Given a sample $x_1, x_2, \dots, x_n$ from a distribution with parameter $\theta$ and PDF $f(x; \theta)$, the **Likelihood Function** is:
$$L(\theta) = \prod_{i=1}^n f(x_i; \theta)$$

$L(\theta)$ treats the observed data as fixed and asks: for which value of $\theta$ was this particular dataset most likely to have occurred?

### The Log-Likelihood Trick
Because $L(\theta)$ is a product, it is mathematically easier to maximize the **Log-Likelihood**:
$$\ell(\theta) = \ln L(\theta) = \sum_{i=1}^n \ln f(x_i; \theta)$$

The logarithm is strictly increasing, so the maximizer of $\ell(\theta)$ is identical to the maximizer of $L(\theta)$.

**The MLE** $\hat{\theta}_{\text{MLE}}$ is found by solving the **Score Equation**:
$$\frac{d\ell}{d\theta} = 0$$

### Example 1: Estimating the Mean of a Normal
Given $n$ observations from $N(\mu, \sigma^2)$ with known $\sigma^2$, find the MLE of $\mu$.

$$\ell(\mu) = \sum_{i=1}^n \ln\!\left(\frac{1}{\sigma\sqrt{2\pi}} e^{-(x_i - \mu)^2/2\sigma^2}\right) = -n\ln(\sigma\sqrt{2\pi}) - \frac{1}{2\sigma^2}\sum(x_i - \mu)^2$$

Setting $d\ell/d\mu = 0$:
$$\frac{1}{\sigma^2}\sum(x_i - \mu) = 0 \implies \hat{\mu}_{\text{MLE}} = \bar{x}$$

The sample mean is the MLE of the population mean for a Normal distribution.

### Example 2: Estimating the Rate of an Exponential
Given $n$ lifetimes $x_1, \dots, x_n$ from $\text{Exp}(\lambda)$:
$$\ell(\lambda) = n\ln\lambda - \lambda\sum_{i=1}^n x_i$$

$$\frac{d\ell}{d\lambda} = \frac{n}{\lambda} - \sum x_i = 0 \implies \hat{\lambda}_{\text{MLE}} = \frac{n}{\sum x_i} = \frac{1}{\bar{x}}$$

The MLE of the failure rate is the reciprocal of the sample mean lifetime.

### Properties of MLE
*   **Consistency:** $\hat{\theta}_{\text{MLE}} \xrightarrow{P} \theta$ as $n \to \infty$.
*   **Asymptotic Normality:** For large $n$, $\hat{\theta}_{\text{MLE}} \approx N(\theta, 1/[n\mathcal{I}(\theta)])$ — it achieves the Cramér-Rao bound asymptotically.
*   **Invariance:** If $\hat{\theta}$ is the MLE of $\theta$, then $g(\hat{\theta})$ is the MLE of $g(\theta)$ for any function $g$.
