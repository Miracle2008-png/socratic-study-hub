# Energy Analysis of Reacting Systems

When a chemical reaction occurs inside a thermodynamic system (as in a combustion chamber, fuel cell, or reactor), the energy balance must account for the chemical energy stored in molecular bonds — not just thermal energy. The key tool is the **enthalpy of combustion** and the **adiabatic flame temperature** calculation.

## 1. The Steady-Flow Energy Equation for Reacting Systems

For a steady-flow combustion chamber (adiabatic, no work, no KE/PE):

$$H_{reactants} = H_{products}$$

$$\sum_{reactants} N_i \left[\bar{h}_{f,i}° + \Delta\bar{h}_i(T_{in})\right] = \sum_{products} N_j \left[\bar{h}_{f,j}° + \Delta\bar{h}_j(T_{out})\right]$$

Where:
- $N_i$, $N_j$ = moles of each reactant/product
- $\bar{h}_{f}°$ = standard enthalpy of formation [kJ/kmol] at 25°C, 1 atm
- $\Delta\bar{h}(T) = \bar{h}(T) - \bar{h}(298\text{K})$ = sensible enthalpy change from tables

## 2. Adiabatic Flame Temperature

The **adiabatic flame temperature** $T_{ad}$ is the maximum temperature achieved if the combustion chamber were perfectly insulated (no heat loss). It represents an upper bound on flame temperature.

**Procedure:**
1. Write the balanced combustion equation for fuel + air at given AFR.
2. Establish the enthalpy balance $H_{react} = H_{prod}$.
3. Assume a value of $T_{ad}$.
4. Look up $\Delta\bar{h}(T_{ad})$ for each product (CO₂, H₂O, N₂, O₂) from ideal gas tables.
5. Check if $H_{prod}(T_{ad}) = H_{react}$.
6. Iterate until balance is achieved (linear interpolation between tabulated temperatures).

**Example results:**
- Stoichiometric methane/air: $T_{ad} \approx 2230 \text{ K}$
- Stoichiometric octane/air: $T_{ad} \approx 2300 \text{ K}$
- Hydrogen/air: $T_{ad} \approx 2480 \text{ K}$

## 3. Fuel Cell Energy Analysis

A **fuel cell** converts chemical energy directly to electricity without combustion — bypassing the Carnot efficiency limit. The maximum electrical work extractable from a fuel cell equals the **decrease in Gibbs free energy** $\Delta G$:

$$W_{elec,max} = -\Delta G = -(\Delta H - T\Delta S)$$

For hydrogen: $\Delta G = -237 \text{ kJ/mol}$ vs. $\Delta H = -286 \text{ kJ/mol}$ (LHV basis).
Ideal fuel cell efficiency: $\Delta G / \Delta H = 83\%$ — far exceeding Carnot for typical operating temperatures.

Real PEM fuel cells achieve 40–60% electrical efficiency. Combined with heat recovery (CHP), total system efficiency reaches 80–90%, making fuel cells the highest-efficiency stationary power generation technology for small-to-medium scale applications.
