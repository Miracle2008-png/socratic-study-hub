# 5. Failure Mode and Effects Analysis (FMEA)

**FMEA** is a bottom-up inductive reliability method — the methodological opposite of FTA. Rather than starting from a top-level failure and deducing causes, FMEA starts from every possible component failure mode and asks: "What are the effects of this failure on the system?"

### The FMEA Process
**Step 1 — Define the system boundary and function.** Document what the system is supposed to do and the interfaces between subsystems.

**Step 2 — List all failure modes for each component.** A failure mode is the specific way a component can fail to perform its function: open-circuit, short-circuit, stuck-closed, stuck-open, leaks, cracks, excessive wear.

**Step 3 — Determine the effect of each failure mode** at the component, subsystem, and system level. Classify the effect severity.

**Step 4 — Assess detectability.** Can the failure be detected before it causes harm? Is there a warning sign, a sensor, a protective device?

**Step 5 — Calculate the Risk Priority Number (RPN).**

### The Risk Priority Number
The RPN combines three ratings on a 1–10 scale:

$$\text{RPN} = S \times O \times D$$

*   $S$ = **Severity** (1=negligible, 10=catastrophic, causes injury or death).
*   $O$ = **Occurrence** (1=extremely unlikely, 10=almost certain).
*   $D$ = **Detectability** (1=detection is certain, 10=failure is undetectable before harm).

**Maximum RPN = 10 × 10 × 10 = 1000.**

Failure modes with the highest RPNs receive corrective actions first. Corrective actions reduce $S$ (redesign to eliminate hazard), $O$ (add redundancy, use higher-reliability parts), or $D$ (add sensors, monitoring, protective devices, periodic inspection).

### FMECA: Adding Criticality
**FMECA** (Failure Mode, Effects, and Criticality Analysis) extends FMEA by computing a **Criticality Number** $C_m$ for each failure mode:
$$C_m = \beta \cdot \alpha \cdot \lambda_p \cdot t$$

Where:
*   $\beta$ = conditional probability the failure mode causes the critical effect.
*   $\alpha$ = fraction of component failure rate attributable to this mode.
*   $\lambda_p$ = component failure rate (from reliability data, e.g., MIL-HDBK-217).
*   $t$ = mission duration.

FMECA produces a **criticality matrix** (severity vs. frequency) to prioritize design changes systematically — the standard methodology for aerospace, automotive (AIAG standard), and medical device industries.
