# Energy Balances and Enthalpy

Chemical processes almost always involve the transfer of heat. Reactors require heating to trigger reactions, or cooling to prevent them from running away. Distillation columns require massive heat input at the bottom and massive cooling at the top. Tracking this energy is just as important as tracking mass.

## 1. The First Law of Thermodynamics

The First Law states that energy cannot be created or destroyed. For a continuous, steady-state open system (where mass is flowing in and out), the energy balance is:

$$ \Delta \dot{H} + \Delta \dot{E}_k + \Delta \dot{E}_p = \dot{Q} - \dot{W}_s $$

Where:
- $\Delta \dot{H}$: The difference in Enthalpy between the output streams and the input streams.
- $\Delta \dot{E}_k$: The change in kinetic energy (often negligible).
- $\Delta \dot{E}_p$: The change in potential energy (often negligible).
- $\dot{Q}$: The rate of heat transferred *into* the system from the surroundings.
- $\dot{W}_s$: The rate of shaft work done *by* the system on the surroundings (e.g., a turbine spinning).

In most chemical equipment (like heat exchangers, reactors, and flash drums), there are no moving parts for shaft work, and kinetic/potential energy changes are practically zero. The equation drastically simplifies to:

$$ \Delta \dot{H} = \dot{Q} $$

This means the heat added to the system perfectly equals the change in the flowing fluid's enthalpy.

## 2. Specific Enthalpy ($\hat{H}$)

Enthalpy ($H$) is an absolute property, but we can only ever measure *changes* in enthalpy ($\Delta H$). To make calculations consistent, specific enthalpy ($\hat{H}$, energy per unit mass) is tabulated relative to an arbitrary reference state. 

For a flowing stream, its total enthalpy rate is:
$$ \dot{H}_{\text{stream}} = \dot{m} \hat{H} $$

The total change in enthalpy for the process is the sum of the outgoing streams minus the sum of the incoming streams:
$$ \Delta \dot{H} = \sum_{\text{out}} \dot{m}_i \hat{H}_i - \sum_{\text{in}} \dot{m}_i \hat{H}_i $$

Let's break down exactly what these variables mean:
- **$\dot{H}$ (Total Enthalpy Rate)**: The total amount of energy flowing per second (measured in Watts or kJ/s). The "dot" on top indicates it is a *rate* over time.
- **$\dot{m}$ (Mass Flow Rate)**: The amount of mass flowing through the pipe per second (e.g., kg/s).
- **$\hat{H}$ (Specific Enthalpy)**: The amount of energy contained in exactly one unit of mass (e.g., kJ/kg). The "hat" on top indicates it is "per unit mass".
- **$\Sigma$ (Sigma)**: The mathematical symbol for "sum".
- **$i$ (Subscript)**: Represents each individual stream. If there are 3 pipes entering a tank, you calculate $\dot{m} \hat{H}$ for stream 1, stream 2, and stream 3, and add them all together.

## 3. Sensible Heat and Heat Capacity

**Sensible heat** is the heat transferred to or from a substance that changes its temperature without changing its phase.

The change in specific enthalpy due to a temperature change from $T_1$ to $T_2$ is calculated using the specific heat capacity ($C_p$):

$$ \Delta \hat{H} = \int_{T_1}^{T_2} C_p(T) \, dT $$

For liquids and solids, $C_p$ is often roughly constant over small temperature ranges, allowing the approximation $\Delta \hat{H} \approx C_p \Delta T$. For gases, $C_p$ is highly temperature-dependent and is typically modeled as a polynomial.

## 4. Latent Heat and Phase Changes

**Latent heat** is the heat transferred that causes a phase change (like boiling or melting) at a constant temperature.

During a phase change, the temperature does not rise, but the specific enthalpy increases significantly. The specific enthalpy of vaporization ($\Delta \hat{H}_v$) is the energy required to convert 1 kg of a saturated liquid into 1 kg of saturated vapor.

When a fluid undergoes both temperature changes and phase changes, you must construct a hypothetical pathway to calculate the total change in specific enthalpy:
$$ \Delta \hat{H}_{\text{total}} = \text{Sensible Heat (Liquid)} + \text{Latent Heat} + \text{Sensible Heat (Vapor)} $$

## 5. Coupled Mass and Energy Balances

In many real-world problems, mass and energy balances are inextricably linked. 
For example, if you are using steam to heat a chemical stream in a heat exchanger, the amount of steam you need (a mass flow variable) depends entirely on the required enthalpy change of the chemical stream (an energy variable). You must solve the material balances and energy balances simultaneously to find the answer.

## 6. Energy Balances Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "first", "data": { "label": "First Law", "icon": "Activity", "description": "Delta H = Q." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "enth", "data": { "label": "Enthalpy", "icon": "TrendingUp", "description": "Specific H." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "sens", "data": { "label": "Sensible Heat", "icon": "Thermometer", "description": "Temp change." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "lat", "data": { "label": "Latent Heat", "icon": "Cloud", "description": "Phase change." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "first", "target": "enth", "animated": true },
    { "source": "enth", "target": "sens", "animated": true },
    { "source": "enth", "target": "lat", "animated": true }
  ]
}
```
