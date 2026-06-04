# 1. Reliability Fundamentals

**Reliability** is formally defined as the probability that a system or component performs its required function, under stated conditions, for a specified period of time. It is the quantitative discipline that bridges probabilistic mathematics and engineering design.

### Core Reliability Functions
For a random lifetime variable $T \ge 0$, four functions characterize reliability completely. Each is derivable from the others.

**1. The Reliability Function (Survival Function) $R(t)$:**
$$R(t) = P(T > t) = 1 - F(t)$$
The probability a component is still operational at time $t$. Always starts at $R(0)=1$ and decreases monotonically to 0.

**2. The Failure Distribution Function (CDF) $F(t)$:**
$$F(t) = P(T \le t) = 1 - R(t)$$
The probability of failure by time $t$. Called the **Unreliability function**.

**3. The Failure Density Function (PDF) $f(t)$:**
$$f(t) = \frac{dF}{dt} = -\frac{dR}{dt}$$
The rate of failure per unit time at time $t$, unconditionally.

**4. The Hazard Rate Function (Failure Rate) $h(t)$:**
$$h(t) = \frac{f(t)}{R(t)}$$
The instantaneous failure rate at time $t$, **conditional** on survival to time $t$. Also called the force of mortality or instantaneous failure intensity.

### The Fundamental Link
Given any one of the four functions, the others follow:
$$R(t) = \exp\!\left(-\int_0^t h(u)\, du\right) = \exp[-H(t)]$$

Where $H(t) = \int_0^t h(u)\, du$ is the **Cumulative Hazard Function**.

This exponential relationship is the cornerstone identity of reliability mathematics. It connects the micro-level hazard rate (instantaneous failure intensity) to the macro-level survival probability.

### The Mean Time To Failure (MTTF)
For a non-repairable component:
$$\text{MTTF} = E[T] = \int_0^\infty R(t)\, dt$$

This integral form is often more convenient than directly computing $\int_0^\infty t f(t)\, dt$ when $R(t)$ has a simpler form.
