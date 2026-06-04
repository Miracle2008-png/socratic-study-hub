# 6. The Weibull Distribution

The Exponential distribution has a constant failure rate — a valid model only during the "useful life" phase of a component where failures are purely random. Real engineering components also experience infant mortality (high early failures) and wear-out (increasing failures with age).

The **Weibull distribution** is the universal reliability model that covers all three failure phases by introducing a **shape parameter** $\beta$ that controls how the failure rate changes over time.

$$X \sim \text{Weibull}(\beta, \eta)$$

$$f(x) = \frac{\beta}{\eta}\left(\frac{x}{\eta}\right)^{\beta-1} \exp\!\left[-\left(\frac{x}{\eta}\right)^\beta\right], \quad x \ge 0$$

Where:
*   $\beta$ = **Shape parameter** (dimensionless) — controls the failure mode.
*   $\eta$ = **Scale parameter** (same units as $x$, e.g., hours) — the characteristic life (the time by which 63.2% of components fail).

### The Shape Parameter: Three Failure Regimes

| $\beta$ value | Failure rate behavior | Engineering interpretation |
|---|---|---|
| $\beta < 1$ | Decreasing hazard | Infant mortality — defective parts fail early, survivors are robust |
| $\beta = 1$ | Constant hazard | Random failures — reduces exactly to Exponential($1/\eta$) |
| $\beta > 1$ | Increasing hazard | Wear-out — components degrade with age |
| $\beta \approx 3.5$ | Near-symmetric bell | Approximates Normal; classical fatigue wear-out |

### Key Formulas
$$E[X] = \eta \, \Gamma\!\left(1 + \frac{1}{\beta}\right) \qquad \text{Var}(X) = \eta^2\!\left[\Gamma\!\left(1 + \frac{2}{\beta}\right) - \Gamma\!\left(1 + \frac{1}{\beta}\right)^2\right]$$

**Reliability function:**
$$R(t) = \exp\!\left[-\left(\frac{t}{\eta}\right)^\beta\right]$$

**Hazard rate:**
$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

When $\beta > 1$, $h(t)$ increases with time — the core mathematical signature of physical wear, fatigue, and aging.

### Worked Example: Bearing Fatigue
A roller bearing has Weibull parameters $\beta = 2.5$ (wear-out mode) and $\eta = 10{,}000$ hours.

**Reliability at 5000 hours:**
$$R(5000) = \exp\!\left[-\left(\frac{5000}{10000}\right)^{2.5}\right] = \exp\!\left[-(0.5)^{2.5}\right] = \exp(-0.1768) \approx \mathbf{0.838}$$

83.8% of bearings survive to 5000 hours.

**B10 Life** (time by which 10% fail, i.e., $R = 0.90$):
$$0.90 = \exp\!\left[-\left(\frac{t}{\eta}\right)^\beta\right] \implies \left(\frac{t}{10000}\right)^{2.5} = -\ln(0.90) = 0.1054$$

$$t = 10000 \times (0.1054)^{1/2.5} = 10000 \times 0.335 = \mathbf{3350 \text{ hours}}$$

The B10 life is 3350 hours — the standard metric used by bearing manufacturers in their data sheets.
