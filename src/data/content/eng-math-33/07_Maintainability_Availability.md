# 7. Maintainability and Availability

Reliability measures how long a system works before failing. **Maintainability** measures how quickly the system can be restored to operation after a failure. **Availability** combines both: the fraction of time the system is operational in the long run.

### Maintainability
**Maintainability $M(t)$** is the probability that a failed system is restored to operational status within time $t$:
$$M(t) = 1 - e^{-\mu t}$$

The restoration (repair) time is modelled as an Exponential random variable with rate $\mu$.

**Mean Time To Repair (MTTR):** $\text{MTTR} = 1/\mu$

Factors affecting MTTR: diagnostic time (finding the root cause), access time (reaching the failed component), parts availability (having spares on hand), and skill level of maintenance personnel.

### Availability Definitions

**Inherent Availability $A_i$** (considers only active repair time):
$$A_i = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}$$

**Operational Availability $A_o$** (includes all downtime — logistics delay, administrative delay, preventive maintenance):
$$A_o = \frac{\text{MTBM}}{\text{MTBM} + \text{MDT}}$$

Where MTBM = Mean Time Between Maintenance (all types) and MDT = Mean Downtime.

**Steady-State Availability from Markov Analysis:**
For a single component alternating between states UP ($\lambda$) and DOWN ($\mu$):
$$A = \frac{\mu}{\lambda + \mu} = \frac{1/\lambda}{1/\lambda + 1/\mu} = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}$$

### Availability Targets in Industry
| Application | Target Availability | Downtime/year |
|---|---|---|
| General industrial | 99.0% | 87.6 hours |
| Power generation | 99.9% | 8.76 hours |
| Telecom switching | 99.999% (5 Nines) | 5.26 minutes |
| Aircraft (flight-critical) | 99.9999% | 31.5 seconds |

### Preventive Maintenance Optimization
A preventive maintenance interval $T_p$ can be optimized to minimize total expected cost per unit time:

$$C(T_p) = \frac{C_p + C_f R_f(T_p) / [1 - R_f(T_p)]}{T_p + \text{MTTR}_p \cdot (1 - R_f(T_p)) + \text{MTTR}_f \cdot R_f(T_p) \cdot (T_p/\text{MTTF})}$$

Where $C_p$ = planned replacement cost, $C_f$ = failure replacement cost, $R_f$ = probability of failure during the interval. Optimal $T_p$ balances the cost of frequent planned maintenance against the higher cost of infrequent but random failures.
