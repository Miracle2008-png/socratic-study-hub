# Energy Balances on Reactive Systems

When chemical reactions occur, chemical bonds are broken and formed. Breaking bonds requires energy, and forming bonds releases energy. This internal energy change manifests as heat, meaning reactive systems have drastically different energy balances than non-reactive systems.

## 1. Heat of Reaction ($\Delta \hat{H}_r$)

The standard heat of reaction ($\Delta \hat{H}_r^\circ$) is the enthalpy change associated with a specific chemical reaction when stoichiometric quantities of reactants at a reference state (usually 25°C and 1 atm) react completely to form products at the exact same reference state.

- **Exothermic Reactions ($\Delta \hat{H}_r < 0$)**: The products have less enthalpy than the reactants. The excess energy is released to the surroundings as heat. The reactor will heat up unless cooling is provided.
- **Endothermic Reactions ($\Delta \hat{H}_r > 0$)**: The products have more enthalpy than the reactants. Energy must be continuously supplied from the surroundings as heat. The reactor will cool down and the reaction will stop unless heating is provided.

## 2. Heat of Formation Method

Since we cannot measure absolute enthalpies, we define a baseline: The enthalpy of formation of pure elemental species (like $O_2(g), C(s), N_2(g)$) in their standard states at 25°C and 1 atm is defined as **zero**.

The **Standard Heat of Formation ($\Delta \hat{H}_f^\circ$)** of a compound is the enthalpy change when 1 mole of that compound is formed directly from its elemental constituents.

You can calculate the standard heat of any reaction using tabulated heats of formation:
$$ \Delta \hat{H}_r^\circ = \sum (\nu_i \Delta \hat{H}_f^\circ)_{\text{products}} - \sum (|\nu_i| \Delta \hat{H}_f^\circ)_{\text{reactants}} $$

Where:
- **$\Delta \hat{H}_r^\circ$**: The standard heat of the overall reaction.
- **$\nu_i$**: The stoichiometric coefficient of chemical $i$ from the balanced equation.
- **$\Delta \hat{H}_f^\circ$**: The standard heat of formation for chemical $i$.

## 3. The Energy Balance Equation

For a continuous, steady-state reactor, the energy balance is modified to account for the reaction heat. There are two primary ways to set up the balance: The Heat of Reaction method and the Heat of Formation method.

### The Heat of Reaction Method
This method is best when there is a single, known reaction. You must construct a hypothetical pathway:
1. Cool all incoming reactants from the feed temperature $T_{\text{in}}$ to the reference temperature (25°C) using sensible heat capacities.
2. React the chemicals at 25°C (this is the $\xi \Delta \hat{H}_r^\circ$ term).
3. Heat the resulting products and unreacted species from 25°C to the final outlet temperature $T_{\text{out}}$ using sensible heat capacities.

The overall energy balance becomes:
$$ \dot{Q} = \Delta \dot{H}_{\text{sensible, reactants}} + (\xi \Delta \hat{H}_r^\circ) + \Delta \dot{H}_{\text{sensible, products}} $$

Where:
- **$\dot{Q}$**: Rate of heat added to the reactor.
- **$\xi$ (xi)**: The extent of the reaction (how many moles reacted).
- **$\Delta \dot{H}_{\text{sensible}}$**: The heat required just to change the temperatures of the fluids.

### The Heat of Formation Method
This method is best for multiple complex reactions. Instead of using a reaction pathway, you define the reference state for *every single chemical species* as its constituent elements at 25°C.
The specific enthalpy of any flowing stream is simply its heat of formation plus its sensible heat from 25°C:
$$ \hat{H}_i = \Delta \hat{H}_{fi}^\circ + \int_{25^\circ\text{C}}^{T} C_{pi} \, dT $$

The total energy balance is then exactly the same as a non-reactive system:
$$ \dot{Q} = \sum_{\text{out}} \dot{n}_i \hat{H}_i - \sum_{\text{in}} \dot{n}_i \hat{H}_i $$

Where:
- **$\dot{Q}$**: Total heat transfer rate.
- **$\dot{n}_i$**: Molar flow rate of species $i$.
- **$\hat{H}_i$**: Specific molar enthalpy of species $i$.

## 4. Adiabatic Flame Temperature

If a combustion reaction is heavily exothermic, and the reactor is perfectly insulated ($\dot{Q} = 0$), all the heat released by the reaction goes entirely into raising the temperature of the product gases. The theoretical maximum temperature reached by the gases under these conditions is called the **Adiabatic Flame Temperature**.

It is calculated by setting the total enthalpy of the input streams equal to the total enthalpy of the output streams, and iteratively solving for the unknown $T_{\text{out}}$ inside the specific heat integrals.

## 5. Reactive Energy Balances Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "hr", "data": { "label": "Heat of Reaction", "icon": "Flame", "description": "Delta Hr." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "exo", "data": { "label": "Exo/Endo", "icon": "Activity", "description": "Releases/Requires." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "hf", "data": { "label": "Heat of Formation", "icon": "TrendingUp", "description": "Elements = 0." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "aft", "data": { "label": "Adiabatic Temp", "icon": "Thermometer", "description": "Max temp (Q=0)." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "hr", "target": "exo", "animated": true },
    { "source": "hr", "target": "hf", "animated": true },
    { "source": "hf", "target": "aft", "animated": true }
  ]
}
```
