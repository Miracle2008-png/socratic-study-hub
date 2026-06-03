# Op-Amp Non-Ideal Characteristics

## Finite Open-Loop Gain

Real op-amp: $A_{OL} = 10^5$–$10^6$ (100–120 dB).

Closed-loop gain with finite $A_{OL}$:
$$A_{CL} = \frac{A_{OL}}{1 + A_{OL}\beta} \approx \frac{1}{\beta}\quad\text{for }A_{OL}\beta \gg 1$$

## Gain-Bandwidth Product

$A_{OL}$ rolls off at $-20$ dB/decade above dominant pole $f_p$:
$$A_{OL}(f) = \frac{A_0}{1 + j f/f_p}$$

**GBW = $A_0 \cdot f_p$ = constant** (e.g., 1 MHz for LM741, 10 MHz for TL071).

Closed-loop bandwidth: $f_{3dB} = \text{GBW} / |A_{CL}|$

## Slew Rate

Maximum rate of output voltage change:
$$SR = \frac{dV_{out}}{dt}\bigg|_{max}$$

Typical: 0.5 V/μs (LM741) to 1000 V/μs (high-speed).

Full-power bandwidth: $f_{FP} = SR/(2\pi V_{om})$

## DC Errors

| Parameter | Typical value | Effect |
|-----------|--------------|--------|
| Input offset voltage $V_{OS}$ | 1–10 mV | DC error: $V_{error} = V_{OS}(1+R_f/R_1)$ |
| Input bias current $I_B$ | 1 nA–1 μA | Offset via source resistance |
| Input offset current $I_{OS}$ | $I_{B+} - I_{B-}$ | Use matched resistors to cancel $I_B$ |

## CMRR

$$CMRR = 20\log_{10}\frac{A_{diff}}{A_{cm}}\quad\text{(dB)}$$

Typical: 80–120 dB. High CMRR essential in differential sensing.

## Stability and Phase Margin

Loop gain $T = A_{OL}\beta$. System is stable if $|T| < 1$ when $\angle T = -180°$.

**Phase margin** = 180° + $\angle T$ at unity gain crossover. Need PM > 45° for stability.

Compensation: dominant-pole compensation (adds capacitor to reduce bandwidth and avoid oscillation).