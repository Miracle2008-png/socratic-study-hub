# Exergy of Fuels and Chemical Exergy

The exergy of a fuel is not simply its LHV (lower heating value). It is the maximum work extractable as the fuel reacts with oxygen from the environment, with all products returning to the dead state — the **chemical exergy**.

## 1. Chemical Exergy

**Chemical exergy** accounts for the composition difference between a substance and the environment. A fuel molecule (high chemical exergy) can react with atmospheric oxygen to reach the dead state (CO₂, H₂O, N₂ at $T_0$, $P_0$) — the maximum work from this transition is the chemical exergy.

For a fuel reacting with air, the chemical exergy $\bar{\varepsilon}_{ch}$ is approximately:

$$\bar{\varepsilon}_{ch} \approx -\Delta G_{rxn}° = -(\Delta H_{rxn}° - T_0 \Delta S_{rxn}°)$$

For most hydrocarbon fuels:
$$\frac{\bar{\varepsilon}_{ch}}{HHV} \approx 1.04 \text{ to } 1.08$$

The **exergy of a fuel slightly exceeds its HHV** because the fuel's low entropy relative to its combustion products provides additional work potential beyond the heating value.

Selected specific chemical exergies:
| Fuel | $\varepsilon_{ch}$ (MJ/kg) | LHV (MJ/kg) | Ratio |
|---|---|---|---|
| Hydrogen | 117.1 | 120.0 | 0.976 |
| Methane | 51.9 | 50.0 | 1.038 |
| Gasoline | 46.7 | 44.0 | 1.062 |
| Coal (bituminous) | 31.5 | 29.3 | 1.075 |

## 2. Exergetic Fuel-Product Framework

For any thermal system, define:
- **Fuel ($\dot{F}$):** Exergy consumed to drive the process (fuel exergy, shaft work input, exergy of incoming streams).
- **Product ($\dot{P}$):** Desired exergy output (useful work, exergy increase of process stream).
- **Destruction ($\dot{D}$):** Exergy destroyed by irreversibilities.

$$\dot{F} = \dot{P} + \dot{D} \implies \eta_{II} = \frac{\dot{P}}{\dot{F}} = 1 - \frac{\dot{D}}{\dot{F}}$$

## 3. The SPECO Method

The **Specific Exergy Costing (SPECO) Method** assigns monetary costs to exergy streams, enabling **thermoeconomics** — the optimization of thermal systems considering both thermodynamic performance and economic cost.

Each exergy stream is assigned a cost rate $\dot{C} = c \cdot \dot{X}$ [$/hr], where $c$ is the specific exergy cost [$/GJ].

For each component: $\dot{C}_{fuel} + \dot{Z} = \dot{C}_{product}$

Where $\dot{Z}$ is the capital and maintenance cost rate of the component. Solving the system of cost balance equations for the entire plant allocates costs to each stream and reveals which components have the highest cost of exergy destruction — pinpointing the most economically impactful irreversibilities for engineers to target.
