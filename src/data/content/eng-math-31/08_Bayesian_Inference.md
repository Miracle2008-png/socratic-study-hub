# 8. Bayesian Inference

Classical (frequentist) statistics treats the parameter $\theta$ as a fixed unknown constant. **Bayesian inference** treats $\theta$ as a **random variable** with its own probability distribution, updated as data arrives.

### The Bayesian Framework
**Prior distribution $\pi(\theta)$:** Your belief about $\theta$ before seeing any data. Can encode expert knowledge, physical constraints, or be deliberately uninformative.

**Likelihood $L(\theta \mid \mathbf{x}) = f(\mathbf{x} \mid \theta)$:** How probable the observed data is for a given value of $\theta$.

**Posterior distribution $\pi(\theta \mid \mathbf{x})$:** Your updated belief about $\theta$ after incorporating the data.

**Bayes' theorem for distributions:**
$$\pi(\theta \mid \mathbf{x}) = \frac{L(\theta \mid \mathbf{x}) \cdot \pi(\theta)}{\int L(\theta \mid \mathbf{x}) \pi(\theta) \, d\theta} \propto L(\theta \mid \mathbf{x}) \cdot \pi(\theta)$$

The denominator is a normalizing constant — it ensures the posterior integrates to 1.

### Conjugate Priors
A prior is **conjugate** to a likelihood if the posterior is in the same distributional family as the prior. Conjugate pairs make Bayesian updating an algebraic operation.

| Likelihood | Conjugate Prior | Posterior |
|---|---|---|
| Binomial$(n, p)$ | Beta$(\alpha, \beta)$ | Beta$(\alpha + k, \beta + n - k)$ |
| Poisson$(\lambda)$ | Gamma$(a, b)$ | Gamma$(a + \sum x_i, \; b + n)$ |
| Normal$(\mu, \sigma^2)$ | Normal$(\mu_0, \sigma_0^2)$ | Normal (updated) |

### Worked Example: Updating Defect Rate
A supplier historically produces defects at an unknown rate $p$. Prior belief: $p \sim \text{Beta}(2, 18)$, meaning we expect roughly $2/(2+18)=10\%$ defects with moderate uncertainty.

We inspect $n = 50$ items and find $k = 8$ defective.

**Posterior:** $p \mid \text{data} \sim \text{Beta}(2+8, \; 18+42) = \text{Beta}(10, 60)$.

Prior mean: $2/20 = 0.10$. Posterior mean: $10/70 = \mathbf{0.143}$.

The posterior is pulled toward the data (8/50 = 16%) but moderated by the prior. The 95% **Credible Interval** (the Bayesian equivalent of a confidence interval, with a direct probability interpretation) is approximately $[0.07, 0.22]$.

### Bayesian vs. Frequentist Interpretation
*   **Frequentist 95% CI:** If the procedure were repeated infinitely, 95% of the constructed intervals would contain the true $\theta$.
*   **Bayesian 95% Credible Interval:** Given the observed data, there is a 95% probability that $\theta$ lies in this interval.

The Bayesian interval has the natural probability interpretation that engineers intuitively expect from a confidence interval.
