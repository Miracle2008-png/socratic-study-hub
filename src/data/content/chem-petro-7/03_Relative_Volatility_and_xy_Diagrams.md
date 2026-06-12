# Relative Volatility & x-y Diagrams

While Raoult's Law allows us to calculate Vapour-Liquid Equilibrium (VLE) rigorously, it is mathematically cumbersome because the vapour pressures are highly temperature-dependent. To design a multi-stage distillation column quickly, engineers prefer a simpler algebraic relationship between the liquid mole fraction ($x$) and the vapour mole fraction ($y$). 
This is achieved by defining the **Relative Volatility ($\alpha$)**.

## 1. Defining Relative Volatility ($\alpha$)

The volatility ($K$) of a specific component is defined as the ratio of its mole fraction in the vapour to its mole fraction in the liquid:
$$ K_A = \frac{y_A}{x_A} \quad \text{and} \quad K_B = \frac{y_B}{x_B} $$

The **Relative Volatility ($\alpha_{AB}$)** is simply the ratio of the volatility of the light key (A) to the volatility of the heavy key (B):
$$ \alpha_{AB} = \frac{K_A}{K_B} = \frac{y_A / x_A}{y_B / x_B} $$

Using ideal VLE (Raoult's Law) where $y_A = x_A \cdot P_A^{sat}/P$ and $y_B = x_B \cdot P_B^{sat}/P$, we can substitute these into the definition of $\alpha$:
$$ \alpha_{AB} = \frac{(x_A \cdot P_A^{sat}/P) / x_A}{(x_B \cdot P_B^{sat}/P) / x_B} = \frac{P_A^{sat}}{P_B^{sat}} $$

For ideal mixtures, **the relative volatility is simply the ratio of their pure-component vapour pressures**.
While $P_A^{sat}$ and $P_B^{sat}$ change drastically with temperature, they tend to change at similar rates. Therefore, their ratio ($\alpha$) remains remarkably constant over the entire temperature range of the distillation column. This is a massive mathematical simplification. 

We can assume $\alpha$ is a constant for the entire separation process.

## 2. The Constant-Alpha VLE Equation

Since we know $x_B = 1 - x_A$ and $y_B = 1 - y_A$, we can rewrite the definition of $\alpha$ entirely in terms of the light key, A:
$$ \alpha = \frac{y_A (1 - x_A)}{x_A (1 - y_A)} $$

Rearranging this equation to solve for $y_A$ gives the **Constant-Alpha VLE Equation**:

$$ y_A = \frac{\alpha \cdot x_A}{1 + x_A(\alpha - 1)} $$

This beautiful equation instantly predicts the equilibrium vapour composition $y$ for any given liquid composition $x$, solely based on one constant parameter, $\alpha$. (From here on, we will drop the subscript A. $x$ and $y$ always refer to the light, more volatile component).

## 3. The x-y Equilibrium Diagram

The constant-alpha equation allows us to plot the thermodynamic equilibrium curve. This graph, plotting $y$ versus $x$ (from 0 to 1.0), is the most important visual tool in distillation design.

1.  **The Axes:** Both axes range from $0.0$ to $1.0$ (mole fraction of the light key).
2.  **The $45^\circ$ Diagonal Line ($y = x$):** This straight line is drawn purely as a visual reference. If a point lies on this line, the liquid and vapour have the exact same composition (no separation is occurring).
3.  **The Equilibrium Curve:** By plugging $x$ values (from 0 to 1) into $y = \frac{\alpha x}{1 + x(\alpha - 1)}$, we plot the curve.
    *   Because $\alpha > 1$, the curve always bows **upwards**, sitting above the $y=x$ line.
    *   The larger the $\alpha$, the further the curve bows away from the diagonal, meaning separation is easier.
    *   At $x=0$, $y=0$ (pure heavy component).
    *   At $x=1$, $y=1$ (pure light component).

## 4. Azeotropes on the x-y Diagram

Not all mixtures are ideal. If a mixture exhibits severe non-ideality (extreme positive or negative deviations from Raoult's Law), the relative volatility $\alpha$ will change drastically with concentration.

In severe cases, the equilibrium curve will actually cross the $y=x$ diagonal line. 
The point where the curve crosses the diagonal is an **Azeotrope**.
At the azeotrope, $y = x$. When you boil the liquid, the vapour produced has the exact same composition as the liquid. Therefore, **no further separation is possible by ordinary distillation past an azeotrope**. 

*   Ethanol and water form a famous positive-deviation azeotrope at 95.6 wt% ethanol. You cannot distil vodka to 100% pure ethanol; it stops permanently at 95.6%.
*   To break an azeotrope, chemical engineers must use advanced techniques like Pressure-Swing Distillation or Extractive Distillation (adding a third chemical to alter the activity coefficients).

## 5. Relative Volatility Concepts

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "alpha", "data": { "label": "Relative Volatility", "icon": "Hash", "description": "Ratio of vapour pressures." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "curve", "data": { "label": "x-y Diagram", "icon": "TrendingUp", "description": "Equilibrium curve above diagonal." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "diag", "data": { "label": "45-Degree Line", "icon": "Maximize2", "description": "y = x reference." }, "style": { "background": "#14532d", "color": "#dcfce7" } },
    { "id": "azeo", "data": { "label": "Azeotrope", "icon": "StopCircle", "description": "Curve crosses diagonal." }, "style": { "background": "#9f1239", "color": "#ffe4e6" } }
  ],
  "edges": [
    { "source": "alpha", "target": "curve", "animated": true },
    { "source": "curve", "target": "diag", "animated": true },
    { "source": "curve", "target": "azeo", "animated": true }
  ]
}
```
