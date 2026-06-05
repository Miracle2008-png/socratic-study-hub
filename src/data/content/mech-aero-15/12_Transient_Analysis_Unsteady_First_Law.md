---
title: "Transient Analysis and the Unsteady First Law"
---

# Transient Analysis and the Unsteady First Law

The steady-state energy equation assumes all properties within the control volume are constant in time. Many practical engineering processes are inherently transient: a pressure vessel being filled, a tank being emptied, an accumulator charging and discharging, or a building's thermal mass responding to daily temperature cycles.

## 1. The Unsteady Energy Balance

The general energy balance for a control volume (CV) over a time interval $[0, t]$:

$$Q_{CV} - W_{CV} + \sum_{in} m_{in} h_{in} - \sum_{out} m_{out} h_{out} = m_2 u_2 - m_1 u_1$$

Combined with the mass balance:
$$m_2 - m_1 = \sum_{in} m_{in} - \sum_{out} m_{out}$$

Where subscripts 1 and 2 denote initial and final states inside the CV, and $m_{in}$, $m_{out}$ are total masses that crossed the boundary during the process.

## 2. Filling a Tank from a Supply Line

**Problem setup:** An initially evacuated ($m_1 = 0$) rigid tank is connected to a supply line at constant $T_{line}$, $P_{line}$. Valve opens until tank pressure equals line pressure. Assume adiabatic ($Q = 0$) and no work.

**Mass balance:** $m_2 = m_{in}$
**Energy balance:** $m_{in} h_{line} = m_2 u_2$

Therefore: $u_2 = h_{line}$

For an ideal gas: $c_v T_2 = c_p T_{line}$, so:
$$T_2 = \frac{c_p}{c_v} T_{line} = \gamma T_{line}$$

**Result:** The final temperature in the tank is $\gamma$ times the supply line temperature — a factor of 1.4 for air. If supply air is at 20°C (293 K), the tank reaches $1.4 \times 293 = 410 \text{ K} = 137°\text{C}$ — dangerously hot. This is why rapid inflation of compressed gas cylinders heats them significantly.

## 3. Emptying a Tank (Discharging)

**Problem:** A rigid, well-insulated tank initially at $(P_1, T_1)$ discharges through a valve until pressure drops to $P_2$. What is $T_2$?

For an ideal gas with adiabatic, reversible discharge (isentropic approximation):
$$\frac{T_2}{T_1} = \left(\frac{P_2}{P_1}\right)^{(\gamma-1)/\gamma}$$

This means the gas remaining in the tank cools as it expands to drive out the escaping gas. A CO₂ fire extinguisher discharged rapidly shows visible frost at the nozzle — this isentropic expansion drives temperature below the CO₂ sublimation point.

## 4. Thermal Mass and Building Energy Storage

Passive building thermal storage uses the transient energy balance on building envelopes. The building's thermal mass (concrete, brick) stores heat during the day and releases it at night, dampening temperature swings. The governing equation for a lumped thermal mass:

$$mc_p\frac{dT}{dt} = \dot{Q}_{solar}(t) - UA[T(t) - T_{ambient}(t)]$$

Where $UA$ is the building's overall heat loss coefficient. This first-order ODE drives sizing of thermal mass in passive solar buildings and phase-change material (PCM) thermal storage in HVAC systems.
