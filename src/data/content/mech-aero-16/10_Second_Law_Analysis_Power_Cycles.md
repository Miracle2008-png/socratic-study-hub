---
title: "Second Law Analysis of Power Cycles"
---

# Second Law Analysis of Power Cycles

First-law analysis of power cycles gives thermal efficiency. Second-law (exergy) analysis reveals where efficiency is lost and by how much — enabling engineers to target improvements most effectively.

## 1. Rankine Cycle Second-Law Analysis

For each component of the ideal Rankine cycle, we compute the exergy destruction $\dot{X}_{dest} = T_0 \dot{S}_{gen}$.

**Pump (isentropic):** $\dot{S}_{gen} = 0$ → $\dot{X}_{dest} = 0$ (reversible, no loss).

**Boiler:** The largest exergy destruction. Hot combustion gases at $T_{gas} \approx 1500$–$1800°C$ transfer heat to steam at $T_{steam} \approx 300$–$600°C$. The $\Delta T$ is enormous:
$$\dot{X}_{dest,boiler} = T_0\left[\dot{m}(s_3 - s_2) - \frac{\dot{Q}_{boiler}}{T_{source}}\right]$$

**Turbine (real, isentropic efficiency $\eta_T$):**
$$\dot{S}_{gen,turbine} = \dot{m}(s_4 - s_{4s}) > 0$$
$$\dot{X}_{dest,turbine} = T_0 \dot{m}(s_4 - s_{4s})$$

**Condenser:** Rejects heat to cooling water at $T_L \approx 15$–$30°C$. Less exergy destruction than the boiler because $\Delta T$ is smaller, but still significant.

**Exergy Efficiency of the Overall Rankine Cycle:**
$$\eta_{II,Rankine} = \frac{\dot{W}_{net}}{\dot{X}_{fuel}} = \frac{\dot{W}_{net}}{\dot{m}_{fuel} \cdot \text{LHV} \cdot \left(1 - T_0/T_{flame}\right)}$$

## 2. Brayton Cycle Second-Law Analysis

**Compressor (real):** $\dot{X}_{dest} = T_0 \dot{m} c_p (s_2 - s_{2s}) > 0$

**Combustion Chamber:** The primary exergy loss in a gas turbine. Fuel's chemical exergy is partially destroyed in the irreversible combustion reaction (chemical reaction is intrinsically irreversible). Additionally, $\Delta T$ between flame and working gas adds more destruction.

**Turbine:** Similar to Rankine turbine — isentropic inefficiency.

**Exhaust:** Hot exhaust gas ($\sim$500°C in simple cycle) carries significant exergy directly wasted to atmosphere. This is captured in combined cycle plants, recovering ~15–20 percentage points of efficiency.

## 3. Enhancement Strategy: Minimizing Exergy Destruction

Ranked by impact for a typical power plant:

1. **Reduce combustion irreversibility:** Use chemical looping combustion, pressurized fluidized beds, or fuel cells for less-irreversible chemical energy conversion.
2. **Reduce boiler $\Delta T$:** Supercritical and ultra-supercritical cycles raise steam temperature closer to combustion temperature.
3. **Recover exhaust exergy:** Combined cycle, bottoming cycles, cogeneration (CHP).
4. **Improve turbine/compressor isentropic efficiency:** Advanced blade aerodynamics, better tip clearance control.
5. **Reduce condenser temperature:** Use colder cooling medium (seawater > river water > cooling towers).
