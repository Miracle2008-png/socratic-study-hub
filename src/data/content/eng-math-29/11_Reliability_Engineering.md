# 11. Reliability Engineering Applications

All the distributions studied in this topic converge in **Reliability Engineering** — the discipline of designing systems that fail as rarely as possible. Here we apply the full distribution toolkit to the bathtub curve, series/parallel systems, and the MTBF-availability relationship.

### The Bathtub Curve
Component failure rate $h(t)$ over a product's lifecycle follows a characteristic shape:

**Phase 1 — Infant Mortality ($\beta < 1$, Weibull):**
High initial failure rate due to manufacturing defects, assembly errors, and material flaws. Failures decrease over time as weak units die off. Mitigated by burn-in testing (running components under stress before deployment).

**Phase 2 — Useful Life ($\beta = 1$, Exponential):**
Constant, low failure rate due to purely random shocks (voltage spikes, vibration impacts, cosmic ray bit flips). MTBF is the key metric. This is the phase where most deployed systems operate.

**Phase 3 — Wear-Out ($\beta > 1$, Weibull):**
Failure rate increases monotonically due to fatigue, corrosion, and material degradation. Preventive maintenance schedules (replacing bearings before B10 life) target this phase.

### System Reliability: Series Configuration
$n$ components in series — the system works only if ALL components work:
$$R_{\text{system}}(t) = \prod_{i=1}^n R_i(t)$$

If each component is Exponential with rate $\lambda_i$:
$$R_{\text{system}}(t) = e^{-(\lambda_1 + \lambda_2 + \dots + \lambda_n)t}$$

The system is also Exponential with combined failure rate $\Lambda = \sum \lambda_i$. Series systems are fragile — adding more components always reduces reliability.

### System Reliability: Parallel (Redundant) Configuration
$n$ components in parallel — the system works if AT LEAST ONE component works:
$$R_{\text{system}}(t) = 1 - \prod_{i=1}^n [1 - R_i(t)]$$

For 2 identical components each with $R(t) = e^{-\lambda t}$:
$$R_{\text{system}}(t) = 1 - (1 - e^{-\lambda t})^2 = 2e^{-\lambda t} - e^{-2\lambda t}$$

The MTBF of this 2-unit parallel system is $3/(2\lambda)$ — 50% longer than a single component.

### Availability
For repairable systems, **Availability** $A$ is the long-run fraction of time the system is operational:
$$A = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}$$

Where MTTR = Mean Time To Repair (modeled by Exponential or Log-Normal).

**Example:** A server with MTBF = 2000 hours and MTTR = 4 hours:
$$A = \frac{2000}{2000 + 4} = \mathbf{0.998} = 99.8\%$$

A 99.8% availability system experiences approximately 17.5 hours of downtime per year.
