# Feedback and Oscillators

## Negative Feedback Topologies

| Topology | Samples | Feedback | Effect |
|----------|---------|----------|--------|
| Series-shunt | $V_{out}$ | $V$ | ↑ $R_{in}$, ↓ $R_{out}$, stabilises $A_v$ |
| Shunt-shunt | $V_{out}$ | $I$ | ↓ $R_{in}$, ↓ $R_{out}$, stabilises $Z_{in}$ |
| Series-series | $I_{out}$ | $V$ | ↑ $R_{in}$, ↑ $R_{out}$, stabilises $g_m$ |
| Shunt-series | $I_{out}$ | $I$ | ↓ $R_{in}$, ↑ $R_{out}$, stabilises $A_i$ |

**Closed-loop gain**: $A_f = \dfrac{A}{1 + A\beta}$

**Benefits**: gain stabilised by $\beta$ (not $A$), bandwidth extended by $(1+A\beta)$, distortion reduced.

## Barkhausen Criterion for Oscillation

For sustained oscillation, the loop gain must satisfy:
$$|A(j\omega_0)\beta(j\omega_0)| = 1,\quad \angle A(j\omega_0)\beta(j\omega_0) = 0°$$

## RC Phase-Shift Oscillator

Three cascaded RC networks each contribute 60° phase shift at oscillation frequency:
$$f_0 = \frac{1}{2\pi RC\sqrt{6}},\quad A_{min} = 29$$

## Wien Bridge Oscillator

Uses frequency-selective RC bridge network:
$$f_0 = \frac{1}{2\pi RC},\quad A_v = 3$$

Amplitude stabilised by AGC (non-linear element — lamp or diode).

## LC Oscillators

**Colpitts**: capacitive voltage divider provides feedback.
$$f_0 = \frac{1}{2\pi\sqrt{L C_{eq}}},\quad C_{eq} = \frac{C_1 C_2}{C_1+C_2}$$

**Hartley**: inductive voltage divider.
$$f_0 = \frac{1}{2\pi\sqrt{(L_1+L_2)C}}$$

**Crystal oscillator**: quartz crystal equivalent circuit — extremely high Q ($10^4$–$10^6$), very stable frequency.

## 555 Timer

**Monostable** (one-shot): output pulse width $t = 1.1RC$

**Astable** (free-running):
$$f = \frac{1.44}{(R_A + 2R_B)C},\quad D = \frac{R_A + R_B}{R_A + 2R_B}$$