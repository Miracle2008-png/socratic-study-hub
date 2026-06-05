# Heating Values and Thermochemistry

The energy content of a fuel — how much heat it releases per unit mass when burned — is expressed as its **Heating Value**. This is the most fundamental fuel property and forms the basis of all combustion energy calculations.

## 1. Enthalpy of Combustion

When a fuel burns at constant pressure, the heat released is the **enthalpy of combustion** ($\Delta H_c$):

$$ \Delta H_c = H_{products} - H_{reactants} $$

By convention, $\Delta H_c$ is **negative** for exothermic reactions (heat is released, so the products have lower enthalpy than the reactants). However, in engineering, we almost always refer to the **Heating Value**, which is the magnitude of $\Delta H_c$ — a positive number representing energy released per unit mass or volume.

## 2. Higher Heating Value (HHV) vs. Lower Heating Value (LHV)

This is a critical distinction in fuel engineering.

**Higher Heating Value (HHV) — also called "Gross Calorific Value":**
The total heat released when 1 kg of fuel burns completely, AND the water in the products condenses back into liquid at 25°C. The latent heat of vaporization of the water is fully recovered.
*   This represents the maximum theoretical energy extractable from the fuel.
*   Measured by a bomb calorimeter (constant-volume), or calculated by bringing products back to 25°C.

**Lower Heating Value (LHV) — also called "Net Calorific Value":**
The heat released when 1 kg of fuel burns completely, but the water in the products exits as steam (vapor) and the latent heat of vaporization is NOT recovered.
*   This is the practically relevant value for most real engines and furnaces because the exhaust exits hot — there is no mechanism to condense the water vapor and recover its latent heat.

**Relationship:**
$$ HHV = LHV + m_{H_2O} \times h_{fg} $$

where $m_{H_2O}$ is the mass of water produced per kg of fuel and $h_{fg}$ is the latent heat of vaporization (~2,443 kJ/kg at 25°C).

**Typical Values (LHV):**

| Fuel | LHV (MJ/kg) |
|---|---|
| Hydrogen (H₂) | 120.0 |
| Methane (CH₄) | 50.1 |
| Gasoline (C₈H₁₈) | 44.4 |
| Diesel | 43.4 |
| Ethanol (C₂H₅OH) | 26.8 |
| Coal (bituminous) | 28–33 |
| Wood (dry) | 18.6 |

## 3. Enthalpy of Formation ($\Delta \bar{h}_f^\circ$)

To calculate the heating value from first principles (rather than measuring it in a calorimeter), we use **standard enthalpies of formation**.

The standard enthalpy of formation of a compound is the enthalpy change when one mole of that compound is formed from its elements in their standard states (pure elements at 25°C and 1 atm).

By convention:
*   All stable elemental forms have $\Delta \bar{h}_f^\circ = 0$ (e.g., O₂(g), N₂(g), C(graphite), H₂(g)).
*   Compounds formed from elements release or absorb energy during formation.
*   Key values: $H_2O(l)$: $-285.8$ kJ/mol; $H_2O(g)$: $-241.8$ kJ/mol; $CO_2(g)$: $-393.5$ kJ/mol.

**Applying Hess's Law:**
$$ \Delta H_{rxn} = \sum_{products} n_j \Delta \bar{h}_{f,j}^\circ - \sum_{reactants} n_i \Delta \bar{h}_{f,i}^\circ $$

**Example: Methane LHV**
$CH_4 + 2O_2 → CO_2 + 2H_2O(g)$

$\Delta H_{rxn} = [(-393.5) + 2(-241.8)] - [(-74.8) + 2(0)]$
$\Delta H_{rxn} = -877.1 - (-74.8) = -802.3$ kJ/mol

$LHV = 802.3 \text{ kJ/mol} \div 16.04 \text{ g/mol} = 50.0 \text{ MJ/kg}$ ✓

## 4. Combustion Efficiency

In real burners and furnaces, combustion efficiency measures how well the fuel energy is released:
$$ \eta_{comb} = 1 - \frac{\text{Unburned fuel energy in exhaust}}{\text{Fuel energy input}} $$

Losses include unburned CO, unburned hydrocarbons (UHC), and carbon in ash. Modern well-maintained gas burners achieve 99.9%+ combustion efficiency.
