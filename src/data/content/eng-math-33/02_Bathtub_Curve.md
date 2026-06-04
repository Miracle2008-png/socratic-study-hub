# 2. The Bathtub Curve and Failure Phases

The **Bathtub Curve** is the universal model of how component failure rate evolves over a product's lifecycle. The shape — high early, low in the middle, high late — arises from the superposition of three distinct failure mechanisms, each described by a separate Weibull distribution.

### Phase 1: Infant Mortality (Burn-In Region)
**Characteristics:** Decreasing failure rate ($h(t)$ falling with time). Duration: hours to weeks depending on the technology.

**Cause:** Manufacturing defects — voids in solder joints, impure material inclusions, assembly misalignments, weak bonds. These defects cause early failures. After the defective units fail, the surviving population consists disproportionately of robust units, so the failure rate in the population decreases.

**Weibull parameter:** $\beta < 1$.

**Mitigation:** **Burn-in testing** — operating components under elevated stress (temperature, voltage, vibration) before deployment to force infant-mortality failures to occur in the factory rather than in the field. Screening tests, acceptance testing, and HALT (Highly Accelerated Life Testing) are used for this purpose.

### Phase 2: Useful Life (Constant Failure Rate Region)
**Characteristics:** Approximately constant failure rate ($h(t) = \lambda$). Duration: months to years — the primary operational period of the system.

**Cause:** Random, unpredictable external shocks — electrostatic discharge, cosmic-ray induced bit flips, vibration impacts, random electrical surges. No amount of burn-in or maintenance can prevent these; they are inherently stochastic.

**Weibull parameter:** $\beta = 1$ (the Exponential distribution is exact in this phase).

**Modelling:** Exponential lifetime with rate $\lambda$. MTBF = $1/\lambda$. Reliability at time $t$: $R(t) = e^{-\lambda t}$.

### Phase 3: Wear-Out (End-of-Life Region)
**Characteristics:** Increasing failure rate ($h(t)$ rising with time). Failure rate grows without bound.

**Cause:** Physical material degradation — metal fatigue, corrosion, dielectric breakdown, lubricant degradation, bearing wear, insulation cracking, electromigration in ICs. These are accumulated damage mechanisms; every operating hour increases failure probability.

**Weibull parameter:** $\beta > 1$, typically $\beta = 2$–4 for mechanical wear, $\beta > 5$ for sharp end-of-life distributions.

**Mitigation:** **Preventive maintenance** — scheduled replacement of components before the wear-out phase is reached. The optimal maintenance interval is set before the B10 or B20 life (the time by which 10% or 20% of units have failed).
