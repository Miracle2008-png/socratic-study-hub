# Solution Thermodynamics Theory

Until now, we have discussed pure fluids. However, chemical engineering almost exclusively deals with mixtures—blends of different chemicals in reactors, distillation columns, and pipelines. Solution thermodynamics provides the mathematical framework to understand how chemicals interact when mixed.

## 1. Partial Molar Properties ($\bar{M}_i$)

When you mix 1 liter of water and 1 liter of ethanol, the total volume is *not* 2 liters. It is roughly 1.9 liters. The molecules interact, pack differently, and change the overall properties of the mixture. 

Because of these interactions, we cannot use pure species properties to describe mixtures. We must use **Partial Molar Properties**.

The partial molar property $\bar{M}_i$ of species $i$ in a mixture is defined as the change in the total mixture property ($nM$) when a differential amount of species $i$ is added, keeping temperature, pressure, and the amounts of all other species constant.

$$ \bar{M}_i = \left[ \frac{\partial (nM)}{\partial n_i} \right]_{T, P, n_{j \neq i}} $$

Where $M$ can be Volume ($V$), Enthalpy ($H$), Entropy ($S$), or Gibbs Energy ($G$).

*Conceptually, $\bar{M}_i$ is the actual contribution of 1 mole of species $i$ to the total property of the mixture.*

## 2. The Summability Relation

The total molar property of any mixture ($M$) is simply the mole-fraction weighted sum of the partial molar properties of its components.

For a binary mixture of species 1 and 2:
$$ M = x_1 \bar{M}_1 + x_2 \bar{M}_2 $$

*Note: It is **wrong** to write $M = x_1 M_1 + x_2 M_2$ (where $M_1$ is the pure species property), unless the mixture is perfectly ideal.*

## 3. The Gibbs-Duhem Equation

The partial molar properties of the components in a mixture are not independent. If the partial molar volume of ethanol goes down as you add water, the partial molar volume of the water must shift accordingly to compensate.

This physical restriction is mathematically defined by the **Gibbs-Duhem Equation**:
$$ x_1 d\bar{M}_1 + x_2 d\bar{M}_2 = 0 \quad (\text{at constant } T, P) $$

This equation is a powerful consistency check for experimental data. If an experiment claims that both $\bar{M}_1$ and $\bar{M}_2$ are increasing simultaneously in a binary mixture at constant T and P, the data violates the Gibbs-Duhem equation and is mathematically impossible.

## 4. Property Changes of Mixing ($\Delta M_{mix}$)

The property change of mixing is the difference between the property of the mixture and the properties of the pure species before they were mixed.

$$ \Delta M_{mix} = M_{\text{mixture}} - \sum x_i M_{i,\text{pure}} $$

- **Volume of Mixing ($\Delta V_{mix}$)**: Can be positive (mixture expands) or negative (mixture shrinks, like water/ethanol).
- **Heat of Mixing ($\Delta H_{mix}$)**: If $\Delta H_{mix} < 0$, the mixing is exothermic (the beaker gets hot). If $\Delta H_{mix} > 0$, it is endothermic (the beaker gets cold).

For an **ideal solution**, $\Delta V_{mix} = 0$ and $\Delta H_{mix} = 0$, meaning the molecules ignore each other completely. However, even for an ideal solution, the Entropy of Mixing ($\Delta S_{mix}$) is always highly positive, because creating a mixture always increases molecular disorder.
