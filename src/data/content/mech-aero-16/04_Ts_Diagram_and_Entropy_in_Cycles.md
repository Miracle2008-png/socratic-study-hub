---
title: "The T-s Diagram and Entropy in Cycles"
---

# The T-s Diagram and Entropy in Cycles

The **Temperature-Entropy ($T$-$s$) diagram** is as important to thermodynamics as the $P$-$v$ diagram. It provides an immediate visual interpretation of heat transfer and work in thermodynamic cycles, and reveals the irreversibilities present in real systems.

## 1. Area on the T-s Diagram = Heat Transfer

For a reversible process:
$$\delta Q_{rev} = T \, dS$$

Therefore: **The area under a reversible process on a $T$-$s$ diagram equals the heat transfer for that process.**

- Area under the process curve = $Q_{in}$ (if $T > 0$ and process moves right: $dS > 0$, heat absorbed)
- Area below the curve = $Q_{out}$ (if process moves left: $dS < 0$, heat rejected)

For a **cycle**, the net area enclosed by the cycle on the $T$-$s$ diagram = $Q_{net} = W_{net}$ (by First Law for a cycle).

## 2. Ideal Cycle Representations on T-s

**Carnot Cycle:** A perfect rectangle on the $T$-$s$ diagram.
- Two horizontal lines (isothermal processes): $T = T_H$ (top) and $T = T_L$ (bottom).
- Two vertical lines (isentropic processes): $s = s_1$ and $s = s_2$.
- Net work = rectangular area = $(T_H - T_L)(s_2 - s_1)$.

**Rankine Cycle:**
- Pump: Near-vertical line at low $s$ (liquid compression).
- Boiler: Horizontal line at high pressure (isobaric) following the saturation dome shape.
- Turbine: Near-vertical line at high $s$ (isentropic expansion).
- Condenser: Horizontal line at $T_L$ (isothermal condensation).

**Otto Cycle:** On $T$-$s$: Two isentropic (vertical) lines and two curved isochoric lines. Heat added along the upper isochoric, heat rejected along lower. Not a rectangle — efficiency less than Carnot at same $T_H$, $T_L$.

## 3. Effect of Irreversibility on the T-s Diagram

A **real turbine** does not expand isentropically. The real expansion line tilts to the **right** of the isentropic line (entropy increases due to friction and heat leakage).

A **real compressor** tilts to the right of the isentropic (entropy increases despite compression).

The area between the real process line and the isentropic line represents **entropy generation** — the irreversibility of the process. This entropy generation is directly associated with lost work potential.

## 4. The T-s Diagram for Phase Change

For two-phase processes, the saturation dome on the $T$-$s$ diagram is distinctive:
- Left boundary: saturated liquid line ($x = 0$) — specific entropy $s_f$.
- Right boundary: saturated vapor line ($x = 1$) — specific entropy $s_g$.
- Inside the dome: isobaric lines are also isothermal (straight horizontal lines at $T_{sat}$).
- Width of the dome: $s_{fg} = h_{fg}/T_{sat}$ — the latent heat of vaporization divided by saturation temperature.

This relation ($s_{fg} = h_{fg}/T_{sat}$) is the thermodynamic definition of latent heat — the entropy change of vaporization — directly connecting the two tables' data.
