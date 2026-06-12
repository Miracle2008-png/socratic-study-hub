# Flash Distillation

The simplest possible equilibrium separation process is Flash Distillation (also called Equilibrium Flash Vaporisation). It consists of exactly one equilibrium stage. 

Because it only has one stage, it cannot produce high-purity chemicals. However, it is extensively used in the petrochemical industry to roughly separate crude oil into a light vapour fraction and a heavy liquid fraction before sending them to complex fractionators, or to drop the pressure of a process stream to recover dissolved gases.

## 1. The Physical Process

A liquid feed mixture (at composition $z_F$) is pumped through a heater under high pressure to prevent it from boiling. 
This hot, high-pressure liquid is then forced through a throttling valve into a large flash drum maintained at a significantly lower pressure.

Because the pressure drops suddenly across the valve, the liquid finds itself far above its boiling point at the new pressure (it is superheated). It instantaneously and explosively boils (flashes). 
*   A fraction of the feed turns into vapour ($V$), carrying away the most volatile components.
*   The remaining fraction stays as a liquid ($L$), retaining the heavy components.
*   The vaporisation draws latent heat from the liquid itself, causing the temperature to drop until the vapour and liquid are in perfect thermodynamic equilibrium at the drum's pressure.
*   The vapour exits the top of the drum, and the liquid exits the bottom.

## 2. The Material Balances

To solve a flash drum problem, we perform overall and species material balances around the drum.

Let:
*   **$F$** = Molar flow rate of the Feed stream (mol/h).
*   **$V$** = Molar flow rate of the Vapour product stream (mol/h).
*   **$L$** = Molar flow rate of the Liquid product stream (mol/h).
*   **$z$** = Mole fraction of the light key in the Feed.
*   **$y$** = Mole fraction of the light key in the Vapour product.
*   **$x$** = Mole fraction of the light key in the Liquid product.

**Overall Mass Balance:**
$$ F = V + L $$

**Species Mass Balance (for the light key):**
$$ F \cdot z = V \cdot y + L \cdot x $$

We define the **Vaporisation Fraction ($f$)** as the fraction of the feed that turns into vapour:
$$ f = \frac{V}{F} $$
Consequently, the liquid fraction is $1 - f = \frac{L}{F}$.

By dividing the species mass balance by $F$ and substituting $f$, we get:
$$ z = f \cdot y + (1 - f) \cdot x $$

## 3. The Operating Line Equation

We can rearrange the mass balance equation to solve for $y$ as a function of $x$. This yields the **Operating Line** for a flash drum:

$$ y = -\frac{1 - f}{f} x + \frac{z}{f} $$

Notice that this is the equation of a straight line ($y = mx + c$).
*   The slope of the line is $-\frac{1-f}{f}$, or mathematically, $-L/V$. Because both $L$ and $V$ are positive, **the slope is always negative**.
*   The y-intercept is $\frac{z}{f}$.

## 4. Solving Flash Problems Graphically

Flash calculations can be solved algebraically using the constant-alpha equation ($y = \frac{\alpha x}{1+x(\alpha-1)}$), but it results in a messy quadratic equation. The graphical solution on an x-y diagram is incredibly elegant and fast.

1.  Plot the VLE Equilibrium Curve and the $y=x$ diagonal line.
2.  Locate the feed composition $z$ on the x-axis. Draw a vertical line up to the $y=x$ diagonal. This point is $(z, z)$.
3.  **Crucial Insight:** If you plug $x = z$ into the operating line equation, you will find that $y = z$. This proves that the operating line *always* passes through the point $(z, z)$ on the diagonal line.
4.  Draw the operating line passing through $(z, z)$ with a slope of $-\frac{1-f}{f}$.
    *   If $f = 0$ (no vaporisation, all liquid), the slope is $-\infty$ (a vertical line).
    *   If $f = 1$ (100% vaporisation), the slope is $0$ (a horizontal line).
    *   For a typical flash (e.g., $f = 0.4$), the line slopes downwards to the left.
5.  **The Solution:** The intersection of the straight Operating Line and the curved Equilibrium Line represents the exact solution. The x-coordinate of the intersection is the liquid product composition ($x$), and the y-coordinate is the vapour product composition ($y$).

Because it is only a single stage, the distance between $x$ and $y$ on the graph is the absolute maximum separation that can be achieved at that specific temperature and pressure.

## 5. Flash Workflow

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "feed", "data": { "label": "Hot Feed", "icon": "ArrowRight", "description": "High pressure liquid." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "valve", "data": { "label": "Throttling Valve", "icon": "Minimize2", "description": "Instant pressure drop." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "drum", "data": { "label": "Flash Drum", "icon": "Filter", "description": "One equilibrium stage." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "out", "data": { "label": "Products", "icon": "Layers", "description": "Vapour top, Liquid bottom." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "feed", "target": "valve", "animated": true },
    { "source": "valve", "target": "drum", "animated": true },
    { "source": "drum", "target": "out", "animated": true }
  ]
}
```
