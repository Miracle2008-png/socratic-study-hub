# Residual Properties

Calculating thermodynamic properties like enthalpy ($H$) and entropy ($S$) for real gases at high pressures is mathematically intensive. The integration of equations of state (like SRK or PR) is messy. To streamline these calculations, engineers use the concept of **Residual Properties**.

## 1. The Concept of the Residual

A residual property ($M^R$) is defined as the difference between the actual value of an extensive thermodynamic property ($M$) for a real gas at a given $T$ and $P$, and the value that property would have if the gas behaved as an ideal gas ($M^{ig}$) at that exact same $T$ and $P$.

$$ M^R = M - M^{ig} $$
$$ M = M^{ig} + M^R $$

Where:
- **$M$**: Extensive thermodynamic property for a real gas.
- **$M^{ig}$**: Extensive thermodynamic property for an ideal gas.
- **$M^R$**: Residual property.

Where $M$ can be Molar Volume ($V$), Enthalpy ($H$), Entropy ($S$), or Gibbs Energy ($G$).

## 2. Why Use Residual Properties?

The formula $M = M^{ig} + M^R$ is brilliant because it splits a difficult real-gas calculation into two easy parts:

1. **The Ideal Gas Part ($M^{ig}$)**: This is calculated simply by integrating ideal gas heat capacities ($C_p^{ig}$) from a reference state. Ideal gas properties depend *only* on temperature, making the math trivial.
2. **The Residual Part ($M^R$)**: This accounts for the real-gas non-idealities caused by pressure and intermolecular forces. It is calculated entirely from $P-V-T$ data and an Equation of State (EOS). 

## 3. Calculating Residual Properties

To find equations for $H^R$ and $S^R$, engineers utilize the Compressibility Factor ($Z = PV/RT$) and thermodynamic calculus.

For example, the residual enthalpy is given by:
$$ \frac{H^R}{RT} = -T \int_0^P \left(\frac{\partial Z}{\partial T}\right)_P \frac{dP}{P} $$

And residual entropy is:
$$ \frac{S^R}{R} = -T \int_0^P \left(\frac{\partial Z}{\partial T}\right)_P \frac{dP}{P} - \int_0^P (Z - 1) \frac{dP}{P} $$

Where:
- **$H^R$**: Residual enthalpy.
- **$S^R$**: Residual entropy.
- **$Z$**: Compressibility factor.
- **$P$**: Pressure.
- **$T$**: Temperature.
- **$R$**: Universal gas constant.

If you have a reliable Equation of State, you can take its derivative with respect to temperature, plug it into the equations above, and integrate to find $H^R$ and $S^R$.

## 4. Solving Real Process Problems

Imagine a compressor taking real methane gas from $T_1, P_1$ to $T_2, P_2$. You need to find the enthalpy change $\Delta H$ to determine the compressor work. 

You cannot simply use $\Delta H = C_p \Delta T$, because the gas is not ideal. Instead, you use the residual property pathway:

1. Calculate the ideal gas enthalpy change: $\Delta H^{ig} = \int_{T_1}^{T_2} C_p^{ig} \, dT$
2. Calculate the residual enthalpy at the initial state: $H^R_1$
3. Calculate the residual enthalpy at the final state: $H^R_2$
4. The total real enthalpy change is: $\Delta H = \Delta H^{ig} + H^R_2 - H^R_1$

This is the exact algorithm running under the hood of process simulators like Aspen Plus whenever you place a compressor or heater on a flowsheet.

## 5. Residual Properties Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "split", "data": { "label": "Real vs Ideal", "icon": "Layers", "description": "M = Mig + Mr." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "ideal", "data": { "label": "Ideal Part", "icon": "ArrowDown", "description": "Heat capacities." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "res", "data": { "label": "Residual Part", "icon": "Activity", "description": "EOS integration." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "real", "data": { "label": "Real Process", "icon": "Target", "description": "Total change." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "split", "target": "ideal", "animated": true },
    { "source": "split", "target": "res", "animated": true },
    { "source": "ideal", "target": "real", "animated": true },
    { "source": "res", "target": "real", "animated": true }
  ]
}
```
