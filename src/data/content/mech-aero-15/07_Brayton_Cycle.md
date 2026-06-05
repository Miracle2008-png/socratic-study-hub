---
title: "The Brayton Cycle: Gas Turbines"
---

# The Brayton Cycle: Gas Turbines

The **Brayton cycle** is the thermodynamic model for **gas turbine engines** — the power plants in all commercial jet aircraft, military fighters, helicopters, and many industrial power plants. It operates as an open cycle (continuously drawing in fresh air and exhausting combustion products).

## 1. The Ideal Brayton Cycle (Three Devices)

All processes are steady-flow and the working fluid is treated as an ideal gas:

**Process 1→2: Isentropic Compression (Compressor)**
Ambient air is compressed to high pressure. Temperature rises from $T_1$ (ambient) to $T_2$:
$$\frac{T_2}{T_1} = \left(\frac{P_2}{P_1}\right)^{(\gamma-1)/\gamma} = r_p^{(\gamma-1)/\gamma}$$
Where $r_p = P_2/P_1$ is the **pressure ratio**.

Compressor work (per unit mass): $w_C = c_p(T_2 - T_1)$

**Process 2→3: Isobaric Heat Addition (Combustion Chamber)**
Fuel is burned at constant pressure. Temperature rises to maximum cycle temperature $T_3$ (turbine inlet temperature, TIT):
$$q_{in} = c_p(T_3 - T_2)$$

**Process 3→4: Isentropic Expansion (Turbine)**
Hot gases expand through the turbine to ambient pressure. Temperature drops to $T_4$:
$$\frac{T_4}{T_3} = \left(\frac{P_4}{P_3}\right)^{(\gamma-1)/\gamma} = \left(\frac{1}{r_p}\right)^{(\gamma-1)/\gamma}$$

Turbine work: $w_T = c_p(T_3 - T_4)$

## 2. Thermal Efficiency

Net work: $w_{net} = w_T - w_C = c_p[(T_3 - T_4) - (T_2 - T_1)]$

$$\boxed{\eta_{Brayton} = 1 - \frac{T_1}{T_2} = 1 - \frac{1}{r_p^{(\gamma-1)/\gamma}}}$$

Efficiency depends **only on pressure ratio** for the ideal cycle. Higher $r_p$ → higher $\eta$.

Typical values: $r_p = 30$–$50$ for modern jet engines → $\eta_{Brayton} \approx 55$–$60\%$.

## 3. The Back-Work Ratio

A critical characteristic of the Brayton cycle: the **compressor consumes a large fraction of the turbine output**. The back-work ratio (BWR) is:
$$BWR = \frac{w_C}{w_T}$$

For gas turbines, BWR is typically 40–80%. This contrasts with steam Rankine plants where the pump consumes < 1% of turbine output (because pumping liquid requires far less work than compressing gas).

## 4. Improvements

**Regeneration:** A heat exchanger preheats compressed air using turbine exhaust heat, reducing fuel required. Effective only when $T_4 > T_2$ (turbine exit hotter than compressor exit), i.e., at low pressure ratios.

**Intercooling:** Multi-stage compression with cooling between stages reduces total compression work (approaches isothermal compression).

**Reheating:** Multi-stage expansion with combustion between stages increases turbine work output and raises average heat addition temperature.

**Combined Cycle (CCGT):** Brayton turbine exhaust (still at ~550°C) drives a Rankine steam cycle. Overall efficiency up to 62% — the most efficient large-scale electricity generation technology in existence.
