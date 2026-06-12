# Reactive Systems

When chemical reactions occur within a system, the fundamental mass balance equation must account for the generation and consumption of specific chemical species. Total mass is still conserved, but the total number of moles may change.

## 1. Stoichiometry and the Chemical Equation

A balanced chemical equation provides the stoichiometric ratios in which reactants are consumed and products are generated.

For the generic reaction:
$$ aA + bB \rightarrow cC + dD $$

The stoichiometric coefficients ($\nu_i$) are:
- Negative for reactants: $\nu_A = -a, \nu_B = -b$
- Positive for products: $\nu_C = +c, \nu_D = +d$
- Zero for inerts

## 2. Limiting and Excess Reactants

In industrial processes, reactants are rarely fed in exact stoichiometric proportions. One reactant is usually supplied in excess to drive the reaction forward or to control temperature.

- **Limiting Reactant**: The reactant that would run out first if the reaction proceeded to 100% completion. It dictates the maximum possible amount of product that can be formed.
- **Excess Reactant**: Any reactant that is left over after the limiting reactant is completely consumed.

**Fractional Excess**:
$$ \text{Fractional Excess} = \frac{\text{Moles fed} - \text{Stoichiometric moles required}}{\text{Stoichiometric moles required}} $$

## 3. Fractional Conversion

Reactions almost never go to 100% completion. The fractional conversion ($f_A$) measures how much of the limiting reactant $A$ actually reacted:

$$ f_A = \frac{\text{Moles of A reacted}}{\text{Moles of A fed}} $$

## 4. Extent of Reaction ($\xi$)

The extent of reaction ($\xi$, pronounced "xi") is a powerful mathematical tool that quantifies how far a reaction has progressed. It has units of moles.

For any species $i$ involved in a single reaction:
$$ n_i = n_{i0} + \nu_i \xi $$

Where:
- $n_i$: Moles of species $i$ exiting the reactor.
- $n_{i0}$: Moles of species $i$ fed to the reactor.
- $\nu_i$: Stoichiometric coefficient of species $i$.
- $\xi$: The extent of reaction.

If you know the inlet and outlet flow of *just one* species, you can calculate $\xi$. Once you have $\xi$, you instantly know the generation or consumption of *every other species* in the reactor.

## 5. Multiple Reactions

When multiple reactions occur simultaneously, you assign a separate extent of reaction to each one ($\xi_1, \xi_2, \text{etc.}$):

$$ n_i = n_{i0} + \sum_{j} \nu_{ij} \xi_j $$

Where $\nu_{ij}$ is the stoichiometric coefficient of species $i$ in reaction $j$. 

### Yield and Selectivity
In multiple reaction networks, you typically have a desired product and an undesired by-product.
- **Yield**: (Moles of desired product formed) / (Moles that would have formed if there were no side reactions and the limiting reactant converted completely).
- **Selectivity**: (Moles of desired product formed) / (Moles of undesired product formed). Higher selectivity means a more efficient and cleaner process.

## 6. Reactive Systems Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "stoic", "data": { "label": "Stoichiometry", "icon": "Box", "description": "Mole ratios." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "react", "data": { "label": "Reactants", "icon": "Activity", "description": "Limiting vs Excess." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "xi", "data": { "label": "Extent of Reaction", "icon": "TrendingUp", "description": "Xi." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "yield", "data": { "label": "Yield/Selectivity", "icon": "Target", "description": "Efficiency." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "stoic", "target": "react", "animated": true },
    { "source": "react", "target": "xi", "animated": true },
    { "source": "xi", "target": "yield", "animated": true }
  ]
}
```
