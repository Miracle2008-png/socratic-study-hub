# 10. Moment Generating Functions

The **Moment Generating Function (MGF)** is a powerful algebraic tool that encodes every possible moment (mean, variance, skewness, kurtosis) of a distribution into a single compact function.

### Definition
The MGF of a random variable $X$ is:
$$M_X(t) = E[e^{tX}]$$

For discrete $X$: $M_X(t) = \sum_x e^{tx} p(x)$

For continuous $X$: $M_X(t) = \int_{-\infty}^{\infty} e^{tx} f(x) \, dx$

The MGF exists in a neighborhood around $t = 0$ for most engineering distributions.

### Extracting Moments
The name "moment generating" comes from the fact that successive derivatives at $t = 0$ give you the raw moments directly:
$$E[X^n] = M_X^{(n)}(0) = \left.\frac{d^n}{dt^n} M_X(t)\right|_{t=0}$$

*   $E[X] = M_X'(0)$ — first derivative at zero gives the mean.
*   $E[X^2] = M_X''(0)$ — second derivative at zero gives the second moment.
*   $\text{Var}(X) = M_X''(0) - [M_X'(0)]^2$

### MGFs of Key Distributions

| Distribution | MGF $M_X(t)$ |
|---|---|
| $\text{Bernoulli}(p)$ | $1 - p + pe^t$ |
| $\text{Binomial}(n,p)$ | $(1 - p + pe^t)^n$ |
| $\text{Poisson}(\lambda)$ | $\exp[\lambda(e^t - 1)]$ |
| $\text{Exponential}(\lambda)$ | $\dfrac{\lambda}{\lambda - t}$, $t < \lambda$ |
| $N(\mu, \sigma^2)$ | $\exp\!\left(\mu t + \dfrac{\sigma^2 t^2}{2}\right)$ |

### The Uniqueness Theorem
If two random variables have the same MGF in a neighborhood of $t = 0$, they have **exactly the same distribution**. 

This gives a powerful proof strategy: instead of comparing PDFs or CDFs (which can be complex), simply show that the MGFs match.

### Proving the Sum of Normals is Normal
Let $X \sim N(\mu_1, \sigma_1^2)$ and $Y \sim N(\mu_2, \sigma_2^2)$ be independent. Then:
$$M_{X+Y}(t) = M_X(t) \cdot M_Y(t) = e^{\mu_1 t + \sigma_1^2 t^2/2} \cdot e^{\mu_2 t + \sigma_2^2 t^2/2}$$

$$= \exp\!\left[(\mu_1 + \mu_2)t + \frac{(\sigma_1^2 + \sigma_2^2)t^2}{2}\right]$$

This is exactly the MGF of $N(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)$. By the uniqueness theorem, $X + Y$ is Normal with the means and variances summed — proven in three lines of algebra without any integration!
