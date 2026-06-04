# 4. The Normal Distribution In Depth

The Normal (Gaussian) distribution is the most important probability distribution in engineering and science. Its dominance stems not just from mathematical convenience but from a deep theorem — the Central Limit Theorem — which guarantees that the sum of many independent random variables converges to a Normal, regardless of their individual distributions.

### PDF and Symmetry Properties
$$X \sim N(\mu, \sigma^2)$$
$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right), \quad -\infty < x < \infty$$

Key properties:
*   Perfectly symmetric about the mean $\mu$.
*   Mean = Median = Mode = $\mu$.
*   The inflection points of the bell curve occur at $x = \mu \pm \sigma$.
*   Total area under the curve is exactly 1 (verified via the Gaussian integral $\int_{-\infty}^\infty e^{-x^2} dx = \sqrt{\pi}$).

### Standardization
No closed-form antiderivative exists for $f(x)$. All probabilities are computed via the **Standard Normal CDF** $\Phi(z)$ after standardizing:
$$Z = \frac{X - \mu}{\sigma} \sim N(0, 1)$$

$$P(a \le X \le b) = \Phi\!\left(\frac{b - \mu}{\sigma}\right) - \Phi\!\left(\frac{a - \mu}{\sigma}\right)$$

The Standard Normal table gives $\Phi(z) = P(Z \le z)$. The symmetry property allows:
$$\Phi(-z) = 1 - \Phi(z)$$

### Critical Values for Engineering
These $z$-values appear constantly in confidence intervals and hypothesis testing:
| Confidence Level | $z_{\alpha/2}$ |
|---|---|
| 90% | 1.645 |
| 95% | 1.960 |
| 99% | 2.576 |

### Worked Example: Tolerance Analysis
A machined shaft has diameter $X \sim N(50.0\text{ mm}, 0.04)$ (mean 50 mm, variance $0.04$, so $\sigma = 0.2$ mm).
The specification requires diameter between 49.5 mm and 50.5 mm. What fraction of shafts pass?

$$P(49.5 \le X \le 50.5) = \Phi\!\left(\frac{50.5 - 50.0}{0.2}\right) - \Phi\!\left(\frac{49.5 - 50.0}{0.2}\right)$$

$$= \Phi(2.50) - \Phi(-2.50) = 0.9938 - 0.0062 = \mathbf{0.9876}$$

98.76% of shafts pass. In Six Sigma terms, the tolerance of ±0.5 mm represents ±2.5σ — a 2.5-sigma process. To achieve Six Sigma quality (±6σ), the standard deviation would need to be reduced to $\sigma = 0.5/6 = 0.0833$ mm.
