# Combustion: Stoichiometry and Heating Value

Combustion is the rapid chemical oxidation of a fuel, releasing the chemical bond energy as heat. It is the energy source for virtually all transportation (cars, aircraft, ships) and much of the world's electricity generation. Understanding the chemistry and thermochemistry of combustion is essential for engine design, emissions control, and efficiency optimization.

## 1. Stoichiometric Combustion

**Stoichiometric** (or theoretical) combustion uses exactly the minimum amount of air required to completely oxidize all the fuel — no oxygen is left over, and no unburnt fuel remains.

For a hydrocarbon fuel $\text{C}_x\text{H}_y$:
$$\text{C}_x\text{H}_y + a_{th}\text{O}_2 \rightarrow x\text{CO}_2 + \frac{y}{2}\text{H}_2\text{O}$$

Theoretical moles of O₂: $a_{th} = x + y/4$

Since air is approximately 21% O₂ and 79% N₂ (by mole), for each mole of O₂ there are $79/21 = 3.76$ moles of N₂ in air.

**Complete combustion of octane** $\text{C}_8\text{H}_{18}$ (gasoline):
$$\text{C}_8\text{H}_{18} + 12.5\text{O}_2 + 47\text{N}_2 \rightarrow 8\text{CO}_2 + 9\text{H}_2\text{O} + 47\text{N}_2$$

## 2. Air-Fuel Ratio (AFR) and Equivalence Ratio ($\phi$)

**Air-Fuel Ratio (AFR):** Mass of air supplied per mass of fuel.
$$AFR = \frac{m_{air}}{m_{fuel}}$$

Stoichiometric AFR for gasoline: $\approx 14.7$ (kg air per kg fuel).

**Equivalence ratio $\phi$:** Ratio of actual fuel-air ratio to stoichiometric fuel-air ratio:
$$\phi = \frac{(FA)_{actual}}{(FA)_{stoich}} = \frac{AFR_{stoich}}{AFR_{actual}}$$

*   $\phi = 1$: Stoichiometric (perfect combustion theoretically).
*   $\phi < 1$: Lean mixture (excess air). Lower temperatures, low CO and HC emissions, but higher NOₓ. Good fuel economy.
*   $\phi > 1$: Rich mixture (excess fuel). Higher temperatures, incomplete combustion, CO and HC in exhaust. Used for maximum power (racing engines).

## 3. Heating Value

The **Heating Value** is the heat released when a unit mass of fuel is completely burned.

**Higher Heating Value (HHV):** Water in products is liquid. Includes latent heat of condensation of H₂O.

**Lower Heating Value (LHV):** Water in products remains as vapor. The latent heat of water is not recovered. Used in engineering efficiency calculations because exhaust gases leave hot and water stays as vapor.
$$LHV = HHV - m_{H_2O} \cdot h_{fg}$$

Common LHV values:
*   Gasoline: 44,000 kJ/kg
*   Diesel: 42,500 kJ/kg
*   Natural gas (methane): 50,000 kJ/kg
*   Hydrogen: 120,000 kJ/kg (highest of any fuel)

**Adiabatic Flame Temperature ($T_{ad}$):** The maximum temperature reached if combustion is adiabatic (no heat loss) and products reach equilibrium. Calculated by energy balance: enthalpy of reactants at inlet = enthalpy of products at $T_{ad}$. For gasoline at stoichiometric: $T_{ad} \approx 2500 \text{ K}$.
