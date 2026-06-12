# Activity Models and Excess Properties

In the previous module, we used the Fugacity Coefficient ($\hat{\phi}_i$) to describe non-ideal behavior in the **vapor phase**, which is calculated using an Equation of State. 
However, liquid mixtures are incredibly dense and have highly complex intermolecular forces (like hydrogen bonding). Equations of state generally do a poor job of predicting liquid properties. Therefore, we use a different approach for the **liquid phase**: Activity Models and Excess Properties.

## 1. The Ideal Solution Model

Just as the Ideal Gas is the baseline for vapors, the **Ideal Solution** is the baseline for liquids.
In an ideal solution, the molecules of species 1 and species 2 are similar in size and shape, and the 1-1, 2-2, and 1-2 intermolecular forces are all identical. 
*(Example: a mixture of n-hexane and n-heptane).*

For an ideal solution, the fugacity of species $i$ in the liquid mixture is given by the Lewis-Randall Rule:
$$ \hat{f}_i^{id} = x_i f_i $$

Where:
- **$\hat{f}_i^{id}$**: Fugacity of species $i$ in an ideal solution.
- **$x_i$**: Mole fraction of species $i$ in the liquid phase.
- **$f_i$**: Fugacity of pure liquid $i$ at the same $T$ and $P$.

## 2. Activity and the Activity Coefficient ($\gamma_i$)

Real liquids (like water and ethanol) deviate strongly from ideal solution behavior. To correct for this, we introduce the **Activity Coefficient ($\gamma_i$)**.

The true fugacity of species $i$ in a real liquid mixture is:
$$ \hat{f}_i = x_i \gamma_i f_i $$

Where:
- **$\hat{f}_i$**: Fugacity of species $i$ in the real liquid mixture.
- **$x_i$**: Mole fraction of species $i$ in the liquid phase.
- **$\gamma_i$**: Activity coefficient of species $i$.
- **$f_i$**: Fugacity of pure liquid $i$ at the same $T$ and $P$.

- If $\gamma_i = 1$, the mixture is an ideal solution.
- If $\gamma_i > 1$, there are **positive deviations** from ideality. The molecules "dislike" each other compared to their pure states. The A-B repulsion increases the escaping tendency (fugacity).
- If $\gamma_i < 1$, there are **negative deviations** from ideality. The molecules "like" each other (e.g., forming hydrogen bonds). The A-B attraction pulls them into the liquid, decreasing the escaping tendency.

## 3. Excess Properties ($M^E$)

Just as we used *Residual Properties* to measure deviations from Ideal Gas behavior, we use **Excess Properties** to measure deviations from Ideal Solution behavior in liquids.

An excess property is the actual mixture property minus the ideal solution property:
$$ M^E = M - M^{id} $$

Where:
- **$M^E$**: Excess property.
- **$M$**: Actual mixture property.
- **$M^{id}$**: Ideal solution property.

The most critical excess property is the **Excess Gibbs Energy ($G^E$)**, because it is directly related to the activity coefficient via calculus:
$$ \ln \gamma_i = \left[ \frac{\partial (nG^E/RT)}{\partial n_i} \right]_{T,P,n_j} $$

Where:
- **$\gamma_i$**: Activity coefficient of species $i$.
- **$n$**: Total moles of the mixture.
- **$G^E$**: Excess Gibbs energy.
- **$R$**: Universal gas constant.
- **$T$**: Absolute temperature.
- **$n_i$**: Moles of species $i$.

## 4. Activity Coefficient Models

To calculate $\gamma_i$ for a distillation column, you need a mathematical model for $G^E$. Over the decades, researchers have developed several empirical and semi-empirical models:

1. **Margules / van Laar**: Early empirical models. Good for simple binary mixtures but poor for multi-component systems.
2. **Wilson Equation (1964)**: Introduced the concept of "local composition" (the idea that the concentration around a molecule is different from the bulk concentration due to attractive forces). Excellent for strongly non-ideal mixtures like alcohols and water.
3. **NRTL (Non-Random Two-Liquid)**: Applicable to partially miscible systems (where the liquid splits into two distinct layers, like oil and water).
4. **UNIQUAC / UNIFAC**: Advanced models that calculate interactions based on the specific functional groups of the molecules (e.g., -OH, -CH3) rather than the whole molecule. UNIFAC is predictive—it can estimate activity coefficients for mixtures that have never been experimentally tested!

## 5. Liquid Models Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "ideal", "data": { "label": "Ideal Solution", "icon": "Box", "description": "Baseline." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "gamma", "data": { "label": "Activity Coef", "icon": "Activity", "description": "Liquid non-ideality." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "ex", "data": { "label": "Excess Gibbs", "icon": "TrendingUp", "description": "Calculates gamma." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "mod", "data": { "label": "Activity Models", "icon": "Layers", "description": "Wilson, NRTL." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "ideal", "target": "gamma", "animated": true },
    { "source": "gamma", "target": "ex", "animated": true },
    { "source": "ex", "target": "mod", "animated": true }
  ]
}
```
