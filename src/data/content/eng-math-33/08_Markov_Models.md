# 8. Markov Reliability Models

For systems where components can transition between states (working, degraded, failed, under repair), **Markov models** provide a rigorous framework for computing time-dependent reliability and availability.

### The Markov Assumption
A process satisfies the Markov property if the future state depends only on the current state, not on the history of how the system reached that state:
$$P(X(t+\Delta t) = j \mid X(t) = i, X(s) \text{ for all } s < t) = P(X(t+\Delta t) = j \mid X(t) = i)$$

This requires Exponential holding times — consistent with the constant failure rate (Phase 2) assumption and Exponential repair times.

### State Transition Diagram
States are nodes; transitions between states are labelled with transition rates (failures rates $\lambda$ and repair rates $\mu$).

**Simple 2-state system (repairable):**
*   State 0: System UP (operating). Transitions to State 1 at rate $\lambda$.
*   State 1: System DOWN (failed, under repair). Transitions to State 0 at rate $\mu$.

### The Chapman-Kolmogorov Equations
Let $P_i(t) = P(\text{system in state } i \text{ at time } t)$. The differential equations governing the state probabilities are:

$$\frac{dP_0}{dt} = -\lambda P_0 + \mu P_1$$

$$\frac{dP_1}{dt} = \lambda P_0 - \mu P_1$$

**Steady-state solution** (set derivatives to zero):
$$P_0 = \frac{\mu}{\lambda + \mu} = A \qquad P_1 = \frac{\lambda}{\lambda + \mu} = 1 - A$$

### 3-State Degraded System
Many systems have intermediate degraded states (partial operation):
*   State 0: Fully operational ($\lambda_1$: transition to degraded; $\lambda_2$: catastrophic failure).
*   State 1: Degraded — partial function ($\mu_1$: repair to full; $\lambda_3$: fail completely).
*   State 2: Failed — no function ($\mu_2$: repair to degraded; $\mu_3$: repair to full).

The steady-state equations are a linear system $\mathbf{Q}^T\mathbf{P} = \mathbf{0}$ where $\mathbf{Q}$ is the generator (transition rate) matrix and $\mathbf{P}$ is the steady-state probability vector.

**Example application:** Nuclear reactor with "partially scrammed" and "fully scrammed" states. Turbine with "reduced power" and "shutdown" states. Aircraft with "engine degraded" and "engine lost" states.
