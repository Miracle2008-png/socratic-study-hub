---
title: "Exergy Analysis of Engineering Systems"
---

# Exergy Analysis of Engineering Systems

**Exergy analysis** (also called **second-law analysis** or **thermodynamic availability analysis**) identifies where, how much, and why exergy is destroyed in a real engineering system. It pinpoints which components contribute most to system inefficiency — information that the First Law energy balance completely obscures.

## 1. Exergy Destruction (Irreversibility)

For any process or device, the **exergy destroyed** is directly linked to entropy generation (Gouy-Stodola):
$$\dot{X}_{dest} = T_0 \dot{S}_{gen}$$

Exergy can be destroyed, but never created. Total exergy is conserved only in reversible processes.

## 2. Exergy Balance for a Steady-Flow Device

$$\underbrace{\dot{X}_{in}}_{\text{Exergy in}} - \underbrace{\dot{X}_{out}}_{\text{Exergy out}} - \underbrace{\dot{X}_{dest}}_{\text{Destroyed}} = 0$$

Expanding:
$$(\dot{m}_1\psi_1 + \dot{X}_{Q,in}) - (\dot{m}_2\psi_2 + \dot{W}_{useful} + \dot{X}_{Q,out}) - T_0\dot{S}_{gen} = 0$$

## 3. Second-Law (Exergy) Efficiency

The **exergy efficiency** (also called second-law efficiency) compares actual performance to the ideal reversible performance:

$$\eta_{II} = \frac{\text{Exergy recovered}}{\text{Exergy expended}}$$

This is always $\leq 1$ and equals 1 only for fully reversible processes.

**Turbine:**
$$\eta_{II,turbine} = \frac{\dot{W}_{actual}}{\dot{m}(\psi_1 - \psi_2)} = \frac{\dot{W}_{actual}}{\dot{W}_{reversible}}$$

Note that $\eta_{II,turbine} = \eta_{isentropic}$ for adiabatic turbines — they happen to be the same for this device.

**Heat Exchanger:**
$$\eta_{II,HX} = \frac{\dot{m}_{cold}(\psi_{cold,out} - \psi_{cold,in})}{\dot{m}_{hot}(\psi_{hot,in} - \psi_{hot,out})}$$

First-law efficiency of a heat exchanger is always 100% (if no heat loss to surroundings). But exergy efficiency is far less than 100% due to entropy generation from heat transfer across finite $\Delta T$.

## 4. Exergy Accounting in a Power Plant

A complete exergy analysis of a coal-fired power plant reveals the hierarchy of exergy destruction:

| Component | Exergy Destruction (% of fuel exergy) |
|---|---|
| Boiler/Combustion | **50–60%** (largest by far) |
| Turbine | 5–8% |
| Condenser | 3–5% |
| Pump | < 1% |
| **Net electrical output** | **30–40%** |

The boiler dominates because combustion at $\sim$2000 K transferring heat to steam at $\sim$550 K involves enormous $\Delta T$ and massive $S_{gen}$. Improving boiler exergy efficiency (supercritical steam, chemical looping combustion) yields far more benefit than optimizing the already-efficient turbine.
