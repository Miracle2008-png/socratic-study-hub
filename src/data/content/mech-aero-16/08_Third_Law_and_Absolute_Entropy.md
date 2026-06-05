---
title: "The Third Law and Absolute Entropy"
---

# The Third Law and Absolute Entropy

The First and Second Laws define changes in internal energy and entropy. But can absolute values of entropy be assigned? The **Third Law of Thermodynamics** answers this question and provides the foundation for calculating absolute entropies — essential for chemical equilibrium and reaction thermodynamics.

## 1. The Third Law Statement

> "The entropy of a perfect crystalline substance is zero at absolute zero temperature ($T = 0$ K)."

At absolute zero, a perfect crystal has exactly one accessible quantum state (all atoms in their lowest energy configuration, perfectly ordered). By Boltzmann's formula: $S = k_B \ln W = k_B \ln 1 = 0$.

This establishes an absolute reference point for entropy — unlike internal energy or enthalpy (where only changes are measurable).

## 2. Standard Molar Entropy ($\bar{s}°$)

The **standard molar entropy** $\bar{s}°$ [kJ/(kmol·K)] is the absolute entropy of a substance at 25°C (298 K) and 1 atm, computed by integrating $c_p/T$ from 0 K to 298 K using calorimetric data, including contributions from phase changes:

$$\bar{s}°(298\text{ K}) = \int_0^{298} \frac{c_p(T)}{T} dT + \sum_{transitions} \frac{\Delta H_{trans}}{T_{trans}}$$

Selected standard molar entropies [kJ/(kmol·K)]:
| Substance | $\bar{s}°$ |
|---|---|
| H₂(g) | 130.6 |
| O₂(g) | 205.0 |
| N₂(g) | 191.6 |
| H₂O(g) | 188.7 |
| CO₂(g) | 213.7 |
| C (graphite) | 5.74 |

Note: The standard entropy of elements is NOT zero at 25°C (only at 0 K for a perfect crystal). This contrasts with the standard enthalpy of formation convention (elements at 25°C have $\bar{h}_f° = 0$).

## 3. Entropy Change of Chemical Reactions

The standard entropy change of a chemical reaction:
$$\Delta \bar{s}°_{rxn} = \sum_{products} N_j \bar{s}_j° - \sum_{reactants} N_i \bar{s}_i°$$

For combustion of methane: $\text{CH}_4 + 2\text{O}_2 \rightarrow \text{CO}_2 + 2\text{H}_2\text{O(g)}$

$$\Delta \bar{s}°_{rxn} = [213.7 + 2(188.7)] - [-(-74.8\text{'s } \bar{s}°) + 2(205.0)]$$

Wait — entropy is not the enthalpy of formation. Use the tabulated $\bar{s}°$ values directly:
$$\Delta \bar{s}°_{rxn} = [213.7 + 2(188.7)] - [186.3 + 2(205.0)] = 591.1 - 596.3 = -5.2 \text{ kJ/(kmol·K)}$$

The Gibbs function change: $\Delta \bar{g}° = \Delta \bar{h}° - T\Delta \bar{s}° = -802.3 - 298(-5.2/1000) = -800.8 \text{ kJ/mol}$

This negative $\Delta g$ confirms combustion proceeds spontaneously — the thermodynamic driver of every fuel oxidation reaction.
