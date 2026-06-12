# Operating Lines for Absorption

Just like in distillation, we determine the number of equilibrium stages required for an absorption column by performing a macroscopic mass balance to find an Operating Line, and then plotting it against the Equilibrium Line.

## 1. Deriving the Operating Line

Consider a total mass balance over the entire absorption column (from the top, stage 1, to the bottom, stage N).
Let:
*   $Y_1$ = Mole ratio of solute in the gas leaving the top (the target clean gas).
*   $Y_{N+1}$ = Mole ratio of solute in the gas entering the bottom (the dirty feed gas).
*   $X_0$ = Mole ratio of solute in the liquid solvent entering the top. (Often $X_0 = 0$ if using pure, fresh solvent).
*   $X_N$ = Mole ratio of solute in the liquid leaving the bottom.

Because we are using solute-free flows ($L'$ and $V'$), the total moles of carrier gas and total moles of pure solvent do not change anywhere in the column.

The overall solute mass balance is:
$$ L' \cdot X_0 + V' \cdot Y_{N+1} = L' \cdot X_N + V' \cdot Y_1 $$
(Solute in with liquid + Solute in with gas = Solute out with liquid + Solute out with gas).

If we perform this same balance over the top section of the column, down to any arbitrary stage $n$, we get the equation for the **Operating Line**:
$$ V' \cdot Y_{n+1} = L' \cdot X_n + (V' \cdot Y_1 - L' \cdot X_0) $$

Rearranging to solve for the passing gas stream ($Y_{n+1}$):
$$ Y_{n+1} = \frac{L'}{V'} X_n + \left( Y_1 - \frac{L'}{V'} X_0 \right) $$

This is the equation of a straight line on a $Y$ vs. $X$ diagram.
*   **Slope:** $\frac{L'}{V'}$ (The liquid-to-gas ratio).
*   **Top Point:** It passes through the coordinate $(X_0, Y_1)$, representing the conditions at the top of the column.
*   **Bottom Point:** It passes through the coordinate $(X_N, Y_{N+1})$, representing the conditions at the bottom of the column.

## 2. Graphical Solution for Absorption

1.  Plot the Equilibrium Line ($Y = mX$). It is a straight line through the origin.
2.  Plot the top point of the column $(X_0, Y_1)$.
3.  Plot the bottom point of the column $(X_N, Y_{N+1})$.
4.  Draw a straight line connecting these two points. This is the **Operating Line**.
    *   *Crucial Difference from Distillation:* In absorption, the Operating Line always sits **ABOVE** the equilibrium line. The gas concentration ($Y$) is higher than equilibrium, providing the driving force for mass transfer *into* the liquid.
    *   *In Stripping:* The Operating Line sits **BELOW** the equilibrium line, driving mass transfer from the liquid *into* the gas.
5.  Step off stages starting from the top point $(X_0, Y_1)$. Draw a horizontal line right to the Equilibrium curve, then a vertical line down to the Operating Line.
6.  The number of complete steps required to pass $X_N$ is the number of theoretical stages required.

## 3. The Minimum Liquid Flow Rate ($L'_{min}$)

Just as distillation has a minimum reflux ratio, absorption has a **Minimum Liquid Flow Rate**.

If a plant manager wants to save money on pumping costs, they might reduce the solvent flow rate ($L'$). 
As $L'$ decreases, the slope of the operating line ($\frac{L'}{V'}$) decreases. The top point $(X_0, Y_1)$ is fixed (because we must achieve the desired purity $Y_1$ using our fresh solvent $X_0$).
Therefore, as the slope decreases, the operating line pivots around the top point, moving closer and closer to the equilibrium line.

Eventually, the bottom of the operating line will **touch the equilibrium line**. 
At this pinch point, it requires an infinite number of stages to achieve the separation. The liquid flow rate that causes this pinch is $L'_{min}$.

Solving algebraically at the bottom of the column (where the pinch occurs for straight equilibrium lines):
$$ Y_{N+1} = m \cdot X_N^* $$
Where $X_N^*$ is the maximum possible theoretical concentration the liquid could achieve.
$$ \frac{L'_{min}}{V'} = \frac{Y_{N+1} - Y_1}{X_N^* - X_0} $$

**Design Rule of Thumb:** Real absorption columns are usually designed to operate at a liquid flow rate of:
$$ L'_{\text{actual}} = 1.1 \times L'_{min} \quad \text{to} \quad 1.5 \times L'_{min} $$

## 4. Absorption Lines

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "op", "data": { "label": "Operating Line", "icon": "TrendingUp", "description": "Mass balance, above equilibrium." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "eq", "data": { "label": "Equilibrium Line", "icon": "Activity", "description": "Henry's Law (Y=mX)." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "pinch", "data": { "label": "Pinch Point", "icon": "AlertCircle", "description": "Lines intersect." }, "style": { "background": "#9f1239", "color": "#ffe4e6" } },
    { "id": "minl", "data": { "label": "L'min", "icon": "Minimize2", "description": "Minimum solvent flow." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } }
  ],
  "edges": [
    { "source": "op", "target": "pinch", "animated": true },
    { "source": "eq", "target": "pinch", "animated": true },
    { "source": "pinch", "target": "minl", "animated": true }
  ]
}
```
