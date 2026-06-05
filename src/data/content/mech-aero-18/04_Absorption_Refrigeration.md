---
title: "Absorption Refrigeration"
---

# Absorption Refrigeration

Vapor-compression refrigeration is driven by high-grade energy (mechanical work to run a compressor). **Absorption refrigeration** replaces the mechanical compressor with a "thermal compressor," allowing the system to be driven primarily by low-grade thermal energy (heat). 

This is highly advantageous when waste heat, solar thermal energy, or cheap natural gas is available, making cooling possible with very little electricity.

## 1. The Principle of Operation

An absorption chiller relies on the fact that certain fluids have a strong chemical affinity for each other. The most common pairs are:
- **Ammonia ($NH_3$) and Water:** Ammonia is the refrigerant, water is the absorbent. Can achieve sub-zero temperatures (used in industrial refrigeration and gas-powered RV fridges).
- **Water and Lithium Bromide ($LiBr$):** Water is the refrigerant, LiBr salt is the absorbent. Cannot freeze (water is the refrigerant), so limited to air conditioning ($\sim 5^\circ C$). Operates under a deep vacuum.

## 2. Replacing the Compressor

In a standard cycle, a compressor draws in low-pressure vapor and squeezes it into high-pressure vapor. In an absorption cycle, this is achieved in four steps:

1. **Absorber:** Low-pressure refrigerant vapor from the evaporator enters the absorber. Here, it is exposed to a liquid absorbent. The absorbent "absorbs" the vapor, turning it into a low-pressure liquid solution. This process is exothermic, so cooling water must remove heat to maintain absorption.
2. **Pump:** Pumping a liquid requires orders of magnitude less work than compressing a gas. A small liquid pump raises the pressure of the rich solution to the system's high pressure.
3. **Generator (The Heat Source):** The high-pressure rich solution enters the generator, where external heat is applied (e.g., steam, solar hot water, gas burner). The heat boils the volatile refrigerant out of the solution.
4. **Separator:** The high-pressure refrigerant vapor heads to the condenser. The remaining hot, concentrated (poor) absorbent liquid is routed back to the absorber via a pressure-reducing valve to absorb more vapor.

The condenser, expansion valve, and evaporator operate exactly as they do in a vapor-compression cycle.

## 3. Coefficient of Performance (COP)

Because the primary energy input is heat, the COP definition changes. It is the ratio of cooling provided to the heat input at the generator (ignoring the tiny electrical work of the pump):

$$\text{COP}_{absorption} = \frac{\dot{Q}_{evaporator}}{\dot{Q}_{generator}}$$

Typical COP values are low compared to vapor-compression:
- **Single-effect LiBr/Water:** COP $\approx 0.7$
- **Double-effect LiBr/Water:** Uses heat from the first generator to drive a second generator at lower pressure. COP $\approx 1.2$.

While a COP of 0.7 seems terrible compared to a compressor COP of 3.0, it is crucial to remember that absorption COP represents *thermal* energy input, whereas compressor COP represents *electrical/mechanical* energy input. If the heat is "free" (e.g., turbine exhaust waste heat), an absorption chiller is economically superior.

## 4. The Maximum Theoretical COP

Treating the absorption chiller as a combination of a Carnot heat engine (driving the pump) and a Carnot refrigerator, the maximum possible COP is:

$$\text{COP}_{max} = \left(1 - \frac{T_0}{T_s}\right) \left(\frac{T_L}{T_0 - T_L}\right)$$

Where $T_s$ is the heat source temperature, $T_0$ is the ambient rejection temperature, and $T_L$ is the refrigerated space temperature.
