# 7. Confidence Intervals

The CLT doesn't just tell us that $\bar{X} \approx N(\mu, \sigma^2/n)$. It gives us a tool to construct **Confidence Intervals** — ranges that capture the unknown population mean $\mu$ with a specified probability.

### The Core Idea
We observe a sample, compute $\bar{X}$, and want to say "the true mean $\mu$ is somewhere between $L$ and $U$." But $\bar{X}$ varies from sample to sample, so any such interval carries uncertainty.

A **95% Confidence Interval** means: if we repeated this sampling procedure 100 times and constructed an interval each time, approximately 95 of the 100 intervals would contain the true $\mu$.

It does NOT mean there is a 95% probability that $\mu$ is in THIS particular interval — $\mu$ is a fixed constant, either in the interval or not.

### Confidence Interval When $\sigma$ is Known (Z-Interval)
By the CLT, $\bar{X}$ is approximately $N(\mu, \sigma^2/n)$, so:
$$Z = \frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \approx N(0, 1)$$

Solving for the region where $Z$ falls with probability $1 - \alpha$:
$$P\!\left(-z_{\alpha/2} \le \frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \le z_{\alpha/2}\right) = 1 - \alpha$$

Rearranging to isolate $\mu$:

$$\boxed{\bar{X} - z_{\alpha/2} \frac{\sigma}{\sqrt{n}} \le \mu \le \bar{X} + z_{\alpha/2} \frac{\sigma}{\sqrt{n}}}$$

The **Margin of Error** $E = z_{\alpha/2} \cdot \sigma/\sqrt{n}$ captures all the uncertainty.

Common critical values: $z_{0.025} = 1.960$ (95%), $z_{0.005} = 2.576$ (99%).

### Confidence Interval When $\sigma$ is Unknown (t-Interval)
In practice, $\sigma$ is almost always unknown. Substituting the sample standard deviation $S$ introduces extra uncertainty, and the resulting statistic follows a **$t$-distribution** with $n-1$ degrees of freedom:

$$\bar{X} \pm t_{\alpha/2, \, n-1} \cdot \frac{S}{\sqrt{n}}$$

For $n \ge 30$, $t_{n-1}$ is so close to $N(0,1)$ that it rarely matters which you use.

### Worked Example: Tensile Strength
$n = 25$ steel specimens are tested. Sample mean $\bar{X} = 485$ MPa, sample std $S = 30$ MPa.
Construct a 95% confidence interval for the true mean tensile strength.

Using $t_{0.025, 24} = 2.064$:
$$485 \pm 2.064 \times \frac{30}{\sqrt{25}} = 485 \pm 2.064 \times 6 = 485 \pm 12.4$$

$$\mathbf{[472.6 \text{ MPa},\; 497.4 \text{ MPa}]}$$

We are 95% confident the true population mean tensile strength lies between 472.6 and 497.4 MPa.
