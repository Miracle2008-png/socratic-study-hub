# 1. Point Estimation

Statistical Inference is the discipline of drawing rigorous, quantified conclusions about a population from a sample. It has two branches: **Point Estimation** (a single best-guess value) and **Interval Estimation** (a range that contains the true value with known probability).

### What Makes a Good Estimator?
Given a population parameter $\theta$ (like the true mean $\mu$ or true proportion $p$), an **Estimator** $\hat{\theta}$ is a function of the sample data that serves as a guess for $\theta$. Multiple estimators can exist for the same parameter — we need criteria to choose among them.

**1. Unbiasedness**
An estimator is **unbiased** if its expected value equals the true parameter:
$$E[\hat{\theta}] = \theta$$

The **Bias** is $\text{Bias}(\hat{\theta}) = E[\hat{\theta}] - \theta$.

*   The sample mean $\bar{X}$ is an unbiased estimator of $\mu$: $E[\bar{X}] = \mu$.
*   The sample variance $S^2 = \frac{1}{n-1}\sum(X_i - \bar{X})^2$ is unbiased for $\sigma^2$ (that is why we divide by $n-1$, not $n$). Dividing by $n$ gives a biased estimator that systematically underestimates.

**2. Efficiency**
Among all unbiased estimators, the one with the smallest variance is called **efficient**. The variance measures how wildly the estimator fluctuates from sample to sample.

The **Cramér-Rao Lower Bound** sets an absolute floor on the variance any unbiased estimator can achieve:
$$\text{Var}(\hat{\theta}) \ge \frac{1}{n \cdot \mathcal{I}(\theta)}$$

Where $\mathcal{I}(\theta) = E\!\left[\left(\frac{\partial \ln f(X;\theta)}{\partial \theta}\right)^2\right]$ is the **Fisher Information** — how much information the data carries about $\theta$.

**3. Consistency**
An estimator is **consistent** if it converges in probability to the true value as the sample size grows:
$$\hat{\theta}_n \xrightarrow{P} \theta \quad \text{as } n \to \infty$$

The sample mean is consistent by the Law of Large Numbers. An unbiased estimator with variance $\to 0$ as $n \to \infty$ is automatically consistent.

**4. Mean Squared Error (MSE)**
In practice, we often trade a small bias for a large reduction in variance. The combined criterion is:
$$\text{MSE}(\hat{\theta}) = \text{Var}(\hat{\theta}) + [\text{Bias}(\hat{\theta})]^2$$

An unbiased estimator has $\text{MSE} = \text{Var}$, but a slightly biased estimator with much smaller variance can have lower MSE overall — and therefore be a better practical choice.
