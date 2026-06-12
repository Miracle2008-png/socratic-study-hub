# Chemical Potential and Fugacity

To determine if two phases (like liquid and vapor in a distillation column) are in equilibrium, we need a mathematical criterion. The concept of **Chemical Potential ($\mu_i$)** and its derivative, **Fugacity ($f_i$)**, provide this criterion.

## 1. Chemical Potential ($\mu_i$)

The chemical potential of species $i$ in a mixture is defined as its partial molar Gibbs Free Energy:
$$ \mu_i = \bar{G}_i = \left[ \frac{\partial (nG)}{\partial n_i} \right]_{T, P, n_{j \neq i}} $$

Where:
- **$\mu_i$**: Chemical potential of species $i$.
- **$\bar{G}_i$**: Partial molar Gibbs free energy of species $i$.
- **$G$**: Molar Gibbs free energy of the mixture.
- **$n$**: Total moles.
- **$n_i$**: Moles of species $i$.

Physically, chemical potential is the driving force for mass transfer. Just as heat flows from high temperature to low temperature, and fluid flows from high pressure to low pressure, **chemical species will spontaneously diffuse from a region of high chemical potential to a region of low chemical potential.**

When two phases ($\alpha$ and $\beta$) are in thermal and mechanical equilibrium ($T^\alpha = T^\beta$ and $P^\alpha = P^\beta$), they reach phase equilibrium ONLY when the chemical potential of every species is equal in both phases:
$$ \mu_i^\alpha = \mu_i^\beta \quad (\text{for all species } i) $$

Where:
- **$\mu_i^\alpha$**: Chemical potential of species $i$ in phase $\alpha$.
- **$\mu_i^\beta$**: Chemical potential of species $i$ in phase $\beta$.

## 2. Fugacity ($f_i$)

While chemical potential is mathematically elegant, it approaches negative infinity as pressure approaches zero, making it impossible to use in numerical calculations.

In 1901, G.N. Lewis invented **Fugacity ($f$)** to replace chemical potential. Fugacity has units of pressure and behaves like an "effective pressure" or an "escaping tendency."

The mathematical definition of fugacity relates it directly to chemical potential:
$$ d\mu_i = RT \, d\ln(f_i) \quad (\text{at constant } T) $$

Where:
- **$R$**: Universal gas constant.
- **$T$**: Absolute temperature.
- **$f_i$**: Fugacity of species $i$.

Because fugacity is directly related to chemical potential, the criterion for phase equilibrium can be rewritten in terms of fugacity:
$$ \hat{f}_i^\alpha = \hat{f}_i^\beta \quad (\text{for all species } i) $$

Where:
- **$\hat{f}_i^\alpha$**: Fugacity of species $i$ in the mixture in phase $\alpha$.
- **$\hat{f}_i^\beta$**: Fugacity of species $i$ in the mixture in phase $\beta$.

*(Where $\hat{f}_i$ is the fugacity of species $i$ in a mixture).*

This is the most important equation in Phase Equilibrium. If you want to know how much ethanol is in the vapor and how much is in the liquid, you set the vapor fugacity equal to the liquid fugacity and solve.

## 3. The Fugacity Coefficient ($\phi_i$)

For an ideal gas, the fugacity of a pure species is exactly equal to its pressure ($f^{ig} = P$).
For a real gas, the fugacity deviates from pressure. We define the **Fugacity Coefficient ($\phi$)** to measure this deviation:
$$ \phi = \frac{f}{P} $$

Where:
- **$\phi$**: Fugacity coefficient.
- **$f$**: Fugacity of the pure species.
- **$P$**: Pressure.

*(For an ideal gas, $\phi = 1$.)*

For a species $i$ in a gas mixture, the partial fugacity coefficient is:
$$ \hat{\phi}_i = \frac{\hat{f}_i}{y_i P} $$

Where:
- **$\hat{\phi}_i$**: Partial fugacity coefficient of species $i$.
- **$\hat{f}_i$**: Partial fugacity of species $i$ in the mixture.
- **$y_i$**: Mole fraction of species $i$ in the gas phase.
- **$P$**: Total pressure.

The fugacity coefficient is calculated entirely from an Equation of State (like SRK or PR) using calculus, specifically by integrating the compressibility factor $Z$ over pressure. This allows us to calculate the vapor-phase fugacity required for equilibrium calculations.

## 4. Equilibrium Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "chem", "data": { "label": "Chemical Potential", "icon": "Activity", "description": "Driving force." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "eq", "data": { "label": "Phase Equilibrium", "icon": "Shuffle", "description": "Equal potentials." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "fug", "data": { "label": "Fugacity", "icon": "Box", "description": "Effective pressure." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "coef", "data": { "label": "Fugacity Coef", "icon": "Percent", "description": "Non-ideality." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "chem", "target": "eq", "animated": true },
    { "source": "chem", "target": "fug", "animated": true },
    { "source": "fug", "target": "coef", "animated": true }
  ]
}
```
