# 2. The Poisson Distribution In Depth

The Poisson distribution models the number of times a rare, random event occurs in a fixed interval of time or space, when events occur independently at a constant average rate.

### Parameters and PMF
$$X \sim \text{Pois}(\lambda)$$
$$P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}, \qquad k = 0, 1, 2, \dots$$
$$E[X] = \lambda \qquad \text{Var}(X) = \lambda$$

The single parameter $\lambda$ simultaneously controls BOTH the mean AND the variance. This is a unique fingerprint: if you measure a count-based phenomenon and find $\hat{\mu} \approx \hat{\sigma}^2$, a Poisson model is strongly indicated.

### Deriving the Poisson from the Binomial
The Poisson can be derived by taking the Binomial $B(n, p)$ to the limit where:
*   $n \to \infty$ (very many trials),
*   $p \to 0$ (very small individual probability),
*   $np = \lambda$ stays constant.

This gives the Poisson as the natural model for rare events in a large population — for instance, the number of machine failures per year in a factory of thousands of machines, where each individual machine has a tiny daily failure probability.

### The Superposition Property
If $X_1 \sim \text{Pois}(\lambda_1)$ and $X_2 \sim \text{Pois}(\lambda_2)$ are independent, then:
$$X_1 + X_2 \sim \text{Pois}(\lambda_1 + \lambda_2)$$

This is critically important in network engineering. If packets arrive on link A at 200 packets/sec (Poisson) and on link B at 150 packets/sec (Poisson), and both feeds are merged onto one router, the combined traffic is Poisson at 350 packets/sec.

### Worked Example: Network Traffic
A server receives requests at an average rate of $\lambda = 8$ requests per second.

**Probability of exactly 5 requests in a given second:**
$$P(X=5) = \frac{8^5 e^{-8}}{5!} = \frac{32768 \times 0.000335}{120} = \mathbf{0.0916}$$

**Probability of 10 or more requests (server overload):**
$$P(X \ge 10) = 1 - \sum_{k=0}^{9} \frac{8^k e^{-8}}{k!} = 1 - 0.7166 = \mathbf{0.2834}$$

There is a 28.3% chance of overload in any given second — far too high for a production system. The engineer must provision capacity for a higher $\lambda$ to push overload probability below 1%.

### Non-Homogeneous Poisson Process
If the arrival rate is not constant but changes with time — $\lambda(t)$ — the expected number of arrivals in an interval $[t_1, t_2]$ becomes:
$$E[N(t_1, t_2)] = \int_{t_1}^{t_2} \lambda(t) \, dt$$

This model is used for phenomena like traffic volume (which peaks during rush hour), power demand (which peaks in summer afternoons), and radiation dose (which varies with source proximity).
