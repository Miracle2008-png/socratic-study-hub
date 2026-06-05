---
title: "Thermochemistry and Enthalpy of Formation"
---

# Thermochemistry and Enthalpy of Formation

To compute the heat released (or absorbed) in any chemical reaction — combustion, dissociation, or synthesis — we use **thermochemistry**: the application of the First Law to reacting systems. The key concept is the **enthalpy of formation**.

## 1. Standard Enthalpy of Formation ($\bar{h}_f°$)

The **standard enthalpy of formation** of a compound is the enthalpy change when **one mole** of that compound is formed from its elements in their **standard reference state** (pure elements at $T_0 = 25°\text{C}$, $P_0 = 1 \text{ atm}$).

By convention:
*   The standard enthalpy of formation of **every naturally occurring pure element** (N₂, O₂, H₂, C(graphite)) is exactly **zero**.

Selected values of $\bar{h}_f°$ [kJ/mol]:

| Compound | $\bar{h}_f°$ (kJ/mol) |
|---|---|
| CO₂(g) | −393.5 |
| H₂O(g) | −241.8 |
| H₂O(l) | −285.8 |
| CO(g) | −110.5 |
| CH₄(g) | −74.8 |
| C₈H₁₈(l) | −250.1 |
| NO(g) | +90.3 |

**Positive values** indicate **endothermic** formation (energy must be put in to form the molecule). **Negative values** indicate **exothermic** formation (energy is released when the molecule forms from elements).

## 2. Hess's Law and the Enthalpy of Reaction

The **enthalpy of reaction** $\Delta \bar{h}_R$ (or $\Delta \bar{H}_{rxn}$) for any reaction is:

$$\Delta \bar{H}_{rxn} = \sum_{products} n_i \bar{h}_{f,i}° - \sum_{reactants} n_j \bar{h}_{f,j}°$$

**Hess's Law:** Enthalpy change is independent of the path. If you can write a reaction as the sum of multiple sub-reactions, the total $\Delta H$ is the sum of the individual $\Delta H$ values.

**Example: Combustion of methane:**
$$\text{CH}_4 + 2\text{O}_2 \rightarrow \text{CO}_2 + 2\text{H}_2\text{O(g)}$$

$$\Delta \bar{H}_{rxn} = [(-393.5) + 2(-241.8)] - [(-74.8) + 2(0)]$$
$$= -877.1 - (-74.8) = -802.3 \text{ kJ/mol}$$

The negative sign confirms this is exothermic. Per kilogram of methane ($M = 16 \text{ kg/kmol}$): $LHV = 802.3/16 \times 1000 = 50{,}144 \text{ kJ/kg}$, consistent with published values.

## 3. Enthalpy Balance for Combustion Chambers

For an adiabatic combustion chamber (control volume), the First Law for steady flow states:

$$H_{reactants} = H_{products}$$
$$\sum_{reactants} n_i [\bar{h}_{f,i}° + \Delta\bar{h}_i(T)] = \sum_{products} n_j [\bar{h}_{f,j}° + \Delta\bar{h}_j(T_{ad})]$$

Where $\Delta\bar{h}(T) = \bar{h}(T) - \bar{h}(25°C)$ is the sensible enthalpy change from reference temperature, found in ideal gas tables.

This equation is solved iteratively for the unknown $T_{ad}$ — the adiabatic flame temperature — by assuming a value, computing the right-hand side from ideal gas tables, and converging on the balance point.

## 4. Chemical Equilibrium

At very high temperatures, combustion products partially dissociate: $\text{CO}_2 \rightleftharpoons \text{CO} + \frac{1}{2}\text{O}_2$. The equilibrium composition is governed by the **equilibrium constant** $K_p(T)$, derived from the **Gibbs function** ($\Delta \bar{G}° = -R_u T \ln K_p$). This dissociation reduces the actual flame temperature below the adiabatic value and generates NOₓ at the dissociation temperatures — the primary pollutant from high-temperature combustion.
