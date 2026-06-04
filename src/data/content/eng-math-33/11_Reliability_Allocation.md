# 11. Reliability Allocation and Prediction

### Reliability Allocation
Once a system reliability requirement $R_s$ is established, **reliability allocation** distributes that requirement down to the subsystem and component level as individual reliability targets.

**Equal Allocation:** The simplest method. For a series system with $n$ subsystems, each subsystem gets the same target:
$$R_i^\text{target} = R_s^{1/n}$$

**Disadvantage:** Ignores the fact that some subsystems are inherently more complex, harder to improve, or more exposed to stress than others.

**ARINC Allocation Method:** Allocates proportionally to the number of components in each subsystem — more complex subsystems are permitted higher failure rates.
$$\lambda_i^\text{target} = \frac{n_i}{\sum_j n_j} \cdot \lambda_s^\text{target}$$

**Minimum Effort Allocation (AGREE Method):** Based on the engineering difficulty of achieving improvements, weighted by the criticality of each subsystem.

### Reliability Prediction
Before hardware exists, reliability is predicted from part-count models and stress analysis.

**MIL-HDBK-217 (Parts Count Method):**
$$\lambda_s = \pi_L \sum_{i=1}^n N_i \lambda_{G_i} \pi_{Q_i}$$

Where:
*   $N_i$ = number of parts of type $i$.
*   $\lambda_{G_i}$ = generic failure rate for part type $i$ (tabulated in MIL-HDBK-217).
*   $\pi_{Q_i}$ = quality factor (MIL-SPEC parts have lower failure rates than commercial parts).
*   $\pi_L$ = environment factor (space, airborne, ground mobile, etc.).

**Stress Analysis Method (more accurate):** Derate every component — operate capacitors at 50% of rated voltage, resistors at 60% of rated power. Compute the failure rate adjustment factor $\pi_S$ for actual vs. rated stress.

### Design for Reliability (DfR) Process
1. Establish reliability requirements from customer/regulatory specifications.
2. Perform reliability prediction to benchmark the design.
3. Identify critical failure modes via FMEA and FTA.
4. Apply reliability improvements: redundancy, derating, burn-in, material changes.
5. Validate with Accelerated Life Testing.
6. Monitor field returns and update the reliability model.
