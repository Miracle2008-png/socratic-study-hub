# 10. Weibull Analysis: Parameter Estimation

### Why Weibull?
The Weibull distribution is the standard model for component lifetimes across all three failure phases (via the shape parameter $\beta$). Parameter estimation from life-test data is therefore the most common task in reliability data analysis.

### Maximum Likelihood Estimation for Weibull
Given $n$ failure times $t_1, t_2, \dots, t_n$ (possibly with some censored), the log-likelihood is:

$$\ell(\beta, \eta) = r\ln\beta - r\beta\ln\eta + (\beta-1)\sum_{i=1}^r \ln t_i - \sum_{i=1}^n \left(\frac{t_i}{\eta}\right)^\beta$$

Where $r$ = number of failures (the remaining $n-r$ are censored).

The MLE equations must be solved numerically (Newton-Raphson). Software packages (Minitab, JMP, R's `fitdistrplus`) do this automatically.

### Weibull Probability Plot (Linearization)
For graphical estimation, transform the Weibull CDF using a double logarithm:

$$F(t) = 1 - e^{-(t/\eta)^\beta}$$

$$\ln[-\ln(1-F(t))] = \beta\ln t - \beta\ln\eta$$

Let $Y = \ln[-\ln(1-F)]$ and $X = \ln t$. Then $Y = \beta X - \beta\ln\eta$ — a straight line with slope $\beta$ and $x$-intercept $\ln\eta$.

**Plotting procedure:**
1. Sort the $n$ failure times in ascending order: $t_{(1)} \le t_{(2)} \le \dots \le t_{(n)}$.
2. Assign a **median rank** (plotting position) to each failure: $F_i \approx (i - 0.3)/(n + 0.4)$.
3. Plot $\ln[-\ln(1-F_i)]$ vs. $\ln(t_{(i)})$ on Weibull probability paper.
4. Fit a straight line. The slope = $\hat{\beta}$; the $x$-intercept gives $\hat{\eta}$.

### Reading the Weibull Plot
A straight-line fit confirms the Weibull model is appropriate. Non-linearity indicates a different distribution is needed or that there are mixed failure modes (two populations with different $\beta$ values).

**The B10 life** (10th percentile) is read directly from the plot at $F = 0.10$:
$$t_{B10} = \hat{\eta}(-\ln 0.90)^{1/\hat{\beta}} = \hat{\eta}(0.10536)^{1/\hat{\beta}}$$

### Confidence Bounds
MLE-based confidence bounds on $R(t)$ require either the Fisher information matrix (parametric bounds) or bootstrap resampling (non-parametric bounds). Likelihood ratio confidence bounds are more accurate for small samples and are preferred by reliability standards (MIL-HDBK-189C).
