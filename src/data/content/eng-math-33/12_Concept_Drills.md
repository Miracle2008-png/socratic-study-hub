# 12. Concept Drills

Test your mastery of Reliability Engineering. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: A system has 4 components in series. Each component independently has a reliability of 0.98 at 1000 hours. What is the system reliability at 1000 hours, and which strategy would most effectively improve it?
Options:
A) $R_s = 4 \times 0.98 = 3.92$ — series systems multiply reliabilities by $n$.
B) $R_s = (0.98)^4 = 0.922$. Adding a parallel redundant unit on the least reliable component would most effectively improve system reliability.
C) $R_s = 0.98$ — series systems use the minimum component reliability.
D) $R_s = 1 - 4(1-0.98) = 0.92$. Replacing one component with a $0.99$ unit would be the best improvement.
Answer: B
Explanation: For a series system, $R_s = \prod R_i = (0.98)^4 = 0.9224$. The most effective improvement depends on component criticality, but active redundancy on the least reliable component replaces its $0.98$ with $1-(1-0.98)^2 = 1-0.0004 = 0.9996$, raising system reliability to $(0.9996)(0.98)^3 = 0.9408$ — a significant gain. Note: in a series system with identical components, all are equally critical, so redundancy on any one component gives the same benefit.
```

```drill
Question: A component has Weibull parameters $\beta = 2.8$ and $\eta = 5000$ hours. After 1000 hours of operation, an engineer reads a maintenance report showing no failures yet. Should they be concerned about increasing failure risk?
Options:
A) No. The memoryless property ensures the next 1000 hours of risk is the same as the first.
B) Yes. Since $\beta = 2.8 > 1$, the hazard rate is increasing with time. The component is in the wear-out regime and its instantaneous failure rate is rising.
C) No. Because the component survived 1000 hours, it has passed the infant mortality phase and is now in the safe region.
D) Yes, but only if the operating temperature exceeds the Arrhenius threshold.
Answer: B
Explanation: The Weibull hazard rate is $h(t) = (\beta/\eta)(t/\eta)^{\beta-1}$. At $\beta=2.8>1$, this function is strictly increasing — every additional hour of operation makes the component more likely to fail per unit time. The memoryless property applies ONLY to the Exponential ($\beta=1$). At 1000 hours: $h(1000) = (2.8/5000)(1000/5000)^{1.8} = 0.00056 \times 0.0603 = 3.37\times10^{-5}$ failures/hour. At 3000 hours, this will be much higher.
```

```drill
Question: An FMEA assigns Severity=9 (catastrophic), Occurrence=2 (very unlikely), and Detectability=1 (detection certain) to a failure mode. The RPN is 18. A second failure mode has $S=5, O=5, D=5$, RPN=125. Which failure mode should be prioritized for corrective action?
Options:
A) The second failure mode, because RPN=125 > RPN=18.
B) The first failure mode, despite lower RPN, because its catastrophic severity of 9 makes it a mandatory priority regardless of RPN.
C) Both equally, because RPN is the only metric.
D) Neither — both RPNs are within acceptable limits.
Answer: B
Explanation: RPN is a composite metric that can obscure critical risk. A Severity=9 (catastrophic, safety-critical) failure mode must be addressed regardless of its RPN score. Industry standards (AIAG FMEA-4, IATF 16949) require that any failure mode with $S \ge 9$ receive immediate attention through design changes to either eliminate the failure mode or reduce severity, even if occurrence and detectability scores are excellent. RPN alone is insufficient for prioritization when catastrophic outcomes are possible.
```

```drill
Question: A repairable system has MTBF = 500 hours and MTTR = 4 hours. What is its steady-state availability, and how many hours of downtime should be expected per year (8760 hours)?
Options:
A) $A = 500/(500+4) = 0.9921$. Downtime $= 8760 \times 0.0079 = 69$ hours/year.
B) $A = 500/504 = 0.9921$. Downtime $= 8760/500 \times 4 = 70$ hours/year.
C) $A = 500/4 = 125$, which exceeds 1 — the formula is inapplicable.
D) $A = 4/504 = 0.00794$. The system is down 99.2% of the time.
Answer: A
Explanation: Steady-state availability: $A = \text{MTBF}/(\text{MTBF}+\text{MTTR}) = 500/504 = 0.9921$. Annual downtime: $(1-A) \times 8760 = 0.00794 \times 8760 \approx 69.5$ hours. Both methods (A and B) give the same numerical answer; Option A states it correctly as the fraction of time unavailable times total hours. To achieve five-nines availability (99.999%), with this MTTR=4h, MTBF would need to be $4/(1-0.99999) = 400{,}000$ hours — roughly 45.7 years between failures.
```
