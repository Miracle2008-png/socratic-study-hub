# Chemical Reaction Equilibrium

In the Material Balances module, we used the concept of "Fractional Conversion" to determine how far a reaction proceeded. But what physically limits that conversion? Why don't all reactions go to 100% completion? The answer is Chemical Reaction Equilibrium.

## 1. The Equilibrium Criterion

Just as phase equilibrium is reached when chemical potentials equalize between phases, reaction equilibrium is reached when the total Gibbs Free Energy ($G^t$) of the reacting mixture reaches an absolute minimum.

At this minimum point, the driving force for the reaction drops to zero. Any further forward reaction would actually *increase* the Gibbs energy, which violates the Second Law of Thermodynamics.

Mathematically, for the generic reaction $aA + bB \rightleftharpoons cC + dD$, the equilibrium criterion is:
$$ \sum \nu_i \mu_i = 0 $$
$$ c\mu_C + d\mu_D - a\mu_A - b\mu_B = 0 $$

Where:
- **$\nu_i$**: Stoichiometric coefficient of species $i$ (positive for products, negative for reactants).
- **$\mu_i$**: Chemical potential of species $i$.

## 2. The Equilibrium Constant ($K$)

By replacing chemical potential ($\mu_i$) with fugacity, we can derive the standard **Equilibrium Constant ($K$)**.

The value of $K$ is related *exclusively* to the Standard Gibbs Free Energy of Reaction ($\Delta G^\circ_r$):
$$ \Delta G^\circ_r = -RT \ln K $$

Where:
- **$\Delta G^\circ_r$**: Standard Gibbs free energy of reaction.
- **$R$**: Universal gas constant.
- **$T$**: Absolute temperature.
- **$K$**: Equilibrium constant.

Where $\Delta G^\circ_r = \sum (\nu_i \Delta G^\circ_{f,i})$.
- If $\Delta G^\circ_r$ is highly negative, $K$ is massive, and the reaction proceeds almost to 100% completion (e.g., combustion).
- If $\Delta G^\circ_r$ is highly positive, $K$ is tiny, and the reaction barely happens at all without extreme conditions.

**Crucial Fact**: The true thermodynamic equilibrium constant $K$ is a function of **Temperature ONLY**. It does not change if you alter the pressure, the volume, or add inert gases.

## 3. Relating $K$ to Composition

While $K$ itself only depends on temperature, it dictates the final equilibrium composition (the extent of reaction, $\xi$) of the mixture. 

For gas-phase reactions, the thermodynamic $K$ is related to the mole fractions ($y_i$) and the total system pressure ($P$) via fugacity coefficients:

$$ K = \left( \prod y_i^{\nu_i} \right) \left( \frac{P}{P^\circ} \right)^{\nu} \left( \prod \hat{\phi}_i^{\nu_i} \right) $$

Where:
- **$y_i$**: Mole fraction of species $i$ in the gas phase.
- **$P$**: Total system pressure.
- **$P^\circ$**: Standard state pressure (typically 1 bar or 1 atm).
- **$\nu$**: Total change in the number of moles ($\sum \nu_i$).
- **$\hat{\phi}_i$**: Partial fugacity coefficient of species $i$.

Let's break this down for a low-pressure ideal gas system (where $\hat{\phi}_i = 1$):
$$ K = \left( \frac{y_C^c y_D^d}{y_A^a y_B^b} \right) \left( \frac{P}{P^\circ} \right)^{(c+d-a-b)} $$

## 4. Le Chatelier's Principle in Action

The equation above mathematically proves Le Chatelier's Principle:

1. **Effect of Pressure**: Look at the exponent $\nu = (c+d) - (a+b)$, which is the change in the number of moles.
   - If a reaction produces fewer moles ($\nu < 0$, like $N_2 + 3H_2 \rightleftharpoons 2NH_3$), increasing the pressure $P$ forces the mole fraction term to increase to keep $K$ constant. Therefore, **high pressure drives the reaction forward**.
   - If a reaction produces more moles ($\nu > 0$), high pressure drives it backward.

2. **Effect of Temperature**: Temperature changes the value of $K$ itself. The direction depends on the Heat of Reaction ($\Delta H^\circ_r$), described by the van 't Hoff equation:
   $$ \frac{d \ln K}{dT} = \frac{\Delta H^\circ_r}{RT^2} $$

   Where:
   - **$\Delta H^\circ_r$**: Standard heat of reaction.

   - For an **exothermic reaction** ($\Delta H^\circ_r < 0$), as $T$ increases, $K$ *decreases*. Therefore, high temperatures ruin the conversion of exothermic reactions.
   - For an **endothermic reaction** ($\Delta H^\circ_r > 0$), as $T$ increases, $K$ *increases*. High temperatures drive the reaction forward.

## 5. Reaction Equilibrium Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "crit", "data": { "label": "Eq Criterion", "icon": "Target", "description": "Min Gibbs Energy." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "k", "data": { "label": "Eq Constant K", "icon": "Activity", "description": "T-dependent only." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "comp", "data": { "label": "Composition", "icon": "PieChart", "description": "y and P relations." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "chat", "data": { "label": "Le Chatelier", "icon": "Move", "description": "Shift equilibrium." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "crit", "target": "k", "animated": true },
    { "source": "k", "target": "comp", "animated": true },
    { "source": "k", "target": "chat", "animated": true }
  ]
}
```
