# 5. The Exponential and Gamma Distributions

### The Exponential Distribution In Depth
$$X \sim \text{Exp}(\lambda), \quad \lambda > 0$$
$$f(x) = \lambda e^{-\lambda x}, \quad x \ge 0 \qquad F(x) = 1 - e^{-\lambda x}$$
$$E[X] = \frac{1}{\lambda} \qquad \text{Var}(X) = \frac{1}{\lambda^2}$$

$\lambda$ is the **failure rate** (failures per unit time). $1/\lambda$ is the **Mean Time Between Failures (MTBF)** — the cornerstone metric in reliability engineering.

**Survival Function (Reliability Function):**
$$R(t) = P(X > t) = e^{-\lambda t}$$

$R(t)$ gives the probability a component is still operating at time $t$.

**Hazard Rate (Failure Rate Function):**
The hazard rate $h(t)$ is the instantaneous rate of failure at time $t$, given the component has survived to $t$:
$$h(t) = \frac{f(t)}{R(t)} = \frac{\lambda e^{-\lambda t}}{e^{-\lambda t}} = \lambda$$

For the Exponential, the hazard rate is **constant** — the component is equally likely to fail at any instant, regardless of age. This is the "random failure" zone of the bathtub curve.

### The Gamma Distribution
The Gamma distribution generalizes the Exponential by counting the **waiting time until the $r$-th event** in a Poisson process.

$$X \sim \text{Gamma}(r, \lambda)$$

$$f(x) = \frac{\lambda^r x^{r-1} e^{-\lambda x}}{\Gamma(r)}, \quad x \ge 0$$

$$E[X] = \frac{r}{\lambda} \qquad \text{Var}(X) = \frac{r}{\lambda^2}$$

The **Gamma Function** $\Gamma(r) = \int_0^\infty t^{r-1} e^{-t} dt$ generalizes the factorial: $\Gamma(n) = (n-1)!$ for positive integers.

Special cases:
*   $r = 1$: Gamma reduces to Exponential (waiting for 1st event).
*   $r$ = positive integer: called the **Erlang distribution**, used extensively in queuing theory.

**Sum property:** If $X_1, \dots, X_r$ are independent $\text{Exp}(\lambda)$ variables, then $X_1 + X_2 + \dots + X_r \sim \text{Gamma}(r, \lambda)$.

### Worked Example: Backup Power
A generator has a mean time to failure of 200 hours ($\lambda = 1/200$).
A critical facility needs backup power to last at least 500 hours, so 3 backup generators are deployed in sequence.

Total runtime $T = X_1 + X_2 + X_3 \sim \text{Gamma}(3, 1/200)$. Mean total runtime = $3 \times 200 = 600$ hours.

$$P(T > 500) = 1 - F_{\text{Gamma}}(500) \approx \mathbf{0.736}$$

There is a 73.6% chance the three sequential generators provide more than 500 hours of backup — a result impossible to obtain without the Gamma distribution.
