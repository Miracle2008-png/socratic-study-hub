# Adiabatic Flame Temperature

The **Adiabatic Flame Temperature (AFT)** is the theoretical maximum temperature that combustion products can reach when a fuel-oxidizer mixture burns completely with no heat loss to the surroundings. It is the most important single parameter in combustion thermodynamics — it governs thermal NOₓ formation, material limits for combustion chambers, and the driving force for heat transfer in furnaces.

## 1. The First Law for an Adiabatic Combustor

Consider a combustion chamber that is perfectly insulated (adiabatic — no heat escapes to the environment). No shaft work is done either.

Applying the First Law of Thermodynamics for a steady-flow open system:
$$ H_{reactants} = H_{products} $$

The total enthalpy of the incoming fuel + air mixture equals the total enthalpy of the hot products.

Since the reactants enter at room temperature ($T_0 = 25°C$) and the products exit at the adiabatic flame temperature $T_{AFT}$, we can write:

$$ \sum_{reactants} n_i h_i(T_0) = \sum_{products} n_j h_j(T_{AFT}) $$

The left side (reactant enthalpy at $T_0$) includes the chemical energy stored in the bonds of the fuel (the enthalpy of formation, $\bar{h}_f^\circ$). This chemical energy is released during combustion and shows up as thermal (sensible) energy in the products.

## 2. The Calculation Procedure

**Step 1:** Write the balanced stoichiometric combustion equation.
**Step 2:** Establish the energy equation: the heat of combustion released at $T_0$ must equal the sensible enthalpy rise of the products from $T_0$ to $T_{AFT}$.

$$ |\Delta H_{rxn}| = \sum_{products} n_j \int_{T_0}^{T_{AFT}} c_{p,j}(T) \, dT $$

**Step 3:** Solve for $T_{AFT}$. Since $c_p$ depends on temperature (and $T_{AFT}$ is what we are solving for), this is an iterative calculation.

## 3. Typical Adiabatic Flame Temperatures

| Fuel + Oxidizer | $T_{AFT}$ (approx.) |
|---|---|
| Methane + Air (stoichiometric) | ~2,230 K (1,957°C) |
| Hydrogen + Air (stoichiometric) | ~2,480 K (2,207°C) |
| Methane + Pure Oxygen | ~3,030 K (2,757°C) |
| Acetylene + Pure Oxygen | ~3,480 K (3,207°C) — Oxyacetylene torch |

## 4. Factors That Lower the AFT

**1. Excess Air (Lean Mixture, $\phi < 1$):**
The most powerful lever. Extra nitrogen and oxygen absorb the combustion energy without contributing any. A 50% excess air supply ($\phi \approx 0.67$) lowers the methane/air AFT by ~400–500 K.

This is deliberately used in gas turbines: lean combustion ($\phi \approx 0.3$–0.5) keeps the turbine inlet temperature below the materials limit while dramatically reducing thermal NOₓ formation.

**2. Flue Gas Recirculation (EGR):**
Recycling some cooled exhaust gas back into the combustion air dilutes the fresh charge, lowering the peak flame temperature. Widely used in diesel engines and industrial burners to suppress NOₓ.

**3. Products Dissociation:**
At very high temperatures (> ~2,000 K), the combustion products (CO₂, H₂O) begin to dissociate back into CO, O₂, H₂, OH, and other radicals. This dissociation absorbs energy, capping the actual flame temperature below the theoretical AFT (which assumed complete combustion to CO₂ and H₂O only).

For precise AFT calculations at high temperatures, dissociation equilibrium must be solved simultaneously with the energy balance using the method of Lagrange multipliers and equilibrium constants.

## 5. Significance for Engineering Design

*   **Gas Turbine Combustors:** Limited to turbine inlet temperatures of ~1,400–1,700 K by blade material limits. Extensive dilution air and film cooling manage the flame-to-blade temperature gap.
*   **NOₓ Formation:** Thermal NOₓ (the Zeldovich mechanism) rises exponentially with flame temperature above ~1,800 K. Reducing AFT is the primary lever for low-NOₓ burner design.
*   **Furnace Design:** The AFT dictates the radiative heat flux from the flame to the furnace load. Higher AFT → more radiation.
