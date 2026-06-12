# Concept Drills & Examination Problems

Test your understanding of Equilibrium Separations (Distillation & Absorption) with these conceptual questions and engineering calculations.

## Drill 1: The Azeotrope Problem
A chemical engineer is tasked with designing a distillation column to separate a 50/50 molar mixture of Chemical X and Chemical Y to achieve 99% pure X in the distillate. 
Lab data shows that at 1 atm, X and Y form a positive azeotrope at a composition of 85% X.
1. Will a standard continuous fractional distillation column be able to achieve the 99% purity specification? Why or why not?
2. If the engineer looks at the $x-y$ equilibrium diagram for this mixture, what specific physical feature of the graph proves your answer to question 1?

## Drill 2: McCabe-Thiele Operating Lines
A binary distillation column is separating methanol and water. The feed enters as a saturated liquid ($q=1$). The column is operating at a reflux ratio ($R$) of 2.0. The target distillate purity is 96 mol% methanol ($x_D = 0.96$).
1. Calculate the y-intercept of the Rectifying Operating Line (ROL).
2. What is the slope of the $q$-line? How would you draw it on the $x-y$ diagram?
3. If the operator increases the steam to the reboiler without changing the feed or distillate rates, what happens to the slope of the Stripping Operating Line (SOL)? (Does it get steeper or flatter?)

## Drill 3: Absorption Column Limits
An environmental engineering firm is designing a packed absorption tower to scrub a highly toxic gas (solute A) out of an exhaust stack using water as the solvent. The equilibrium relationship is given by Henry's Law: $Y = 0.5 X$.
The dirty gas enters at $Y_{N+1} = 0.08$. The firm must achieve a clean gas exit concentration of $Y_1 = 0.005$. They are using pure, fresh water ($X_0 = 0$).
1. Calculate the minimum liquid-to-gas ratio ($L'_{min}/V'$). (Assume the operating line is straight and a pinch occurs at the bottom of the column).
2. If the firm actually designs the column to run exactly at $L'_{min}$, how infinitely tall must the packed column be? Why?

## Drill 4: Equipment Selection
You are designing a separation process for a heat-sensitive pharmaceutical intermediate dissolved in a heavy organic solvent. The intermediate degrades violently if heated above $120^\circ\text{C}$. The normal boiling point of the mixture is $250^\circ\text{C}$.
1. What thermodynamic operating condition must you change (temperature or pressure) to separate this mixture via distillation without destroying the product?
2. Based on your answer to question 1, would you choose a tray column or a packed column with structured packing for this separation? Justify your choice based on pressure drop.

---

### Solutions

**Drill 1:**
1. **No.** It is thermodynamically impossible to cross an azeotrope using standard fractional distillation at constant pressure. The absolute maximum purity the column could ever achieve, even with infinite stages and infinite reflux, is 85% X.
2. The equilibrium curve physically crosses the $45^\circ$ diagonal line ($y=x$) at the point $x=0.85, y=0.85$. At this point, the vapour produced by boiling the liquid has the exact same composition as the liquid, meaning no further separation is occurring.

**Drill 2:**
1. The y-intercept of the ROL is $\frac{x_D}{R+1}$. 
   $\text{y-intercept} = \frac{0.96}{2.0 + 1} = \frac{0.96}{3} = \mathbf{0.32}$
2. A saturated liquid feed means $q=1$. The slope of the $q$-line is $\frac{q}{q-1} = \frac{1}{0} = \mathbf{\infty}$. This is drawn as a perfectly **vertical line** starting from the feed composition $(z_F, z_F)$ on the diagonal.
3. Increasing reboiler steam increases the boilup rate ($\bar{V}$). The slope of the SOL is $\frac{\bar{L}}{\bar{V}}$. If $\bar{V}$ increases (and $\bar{L}$ remains relatively constant), the ratio $\bar{L}/\bar{V}$ decreases. The SOL becomes **flatter**.

**Drill 3:**
1. At minimum liquid flow, the operating line pinches the equilibrium line at the bottom of the column. Therefore, the liquid leaving the bottom is in perfect equilibrium with the dirty gas entering the bottom.
   $Y_{N+1} = m \cdot X_N^* \Rightarrow 0.08 = 0.5 \cdot X_N^* \Rightarrow X_N^* = 0.16$
   The operating line mass balance is: $\frac{L'_{min}}{V'} = \frac{Y_{N+1} - Y_1}{X_N^* - X_0}$
   $\frac{L'_{min}}{V'} = \frac{0.08 - 0.005}{0.16 - 0} = \frac{0.075}{0.16} = \mathbf{0.46875}$
2. The column must be infinitely tall ($Z = \infty$ or $N = \infty$). At a pinch point, the driving force for mass transfer ($Y - Y^*$) becomes exactly zero. Without a driving force, the rate of mass transfer is zero, so it takes infinite time (and thus infinite physical height) to achieve the separation.

**Drill 4:**
1. You must perform **Vacuum Distillation**. By drastically lowering the operating pressure of the column, you lower the boiling points of the components (per the Antoine equation) so that they boil below the $120^\circ\text{C}$ degradation limit.
2. You must choose a **Packed Column** (specifically with structured packing). Tray columns have a high pressure drop per stage. If you pull a hard vacuum at the top of a tray column, the pressure drop across 30 trays might cause the pressure at the bottom (the reboiler) to rise high enough that the boiling temperature exceeds $120^\circ\text{C}$. Structured packing has an exceptionally low pressure drop, ensuring the entire column remains under deep vacuum and the temperatures stay safe.

## Equilibrium Separations Summary

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "dist", "data": { "label": "Distillation Limits", "icon": "StopCircle", "description": "Azeotropes block purity." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "mt", "data": { "label": "McCabe-Thiele", "icon": "TrendingUp", "description": "Visual stage analysis." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "abs", "data": { "label": "Absorption Limits", "icon": "Minimize2", "description": "L'min dictates height." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "equip", "data": { "label": "Equipment Choice", "icon": "Settings", "description": "Packing for vacuum/heat-sensitive." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": []
}
```
