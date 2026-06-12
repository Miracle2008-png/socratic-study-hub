# Microscopic and Macroscopic Displacement Efficiency

The ultimate success of any Enhanced Oil Recovery (EOR) project is measured by a single metric: The **Overall Recovery Factor ($E_R$)**.

The Overall Recovery Factor is the exact percentage of the Original Oil in Place (OOIP) that actually reaches the sales pipeline. 

It is not a single number; it is the product of two completely different, compounding physical efficiencies:
$$ E_R = E_D \times E_{vol} $$
Where $E_{vol}$ (Volumetric Sweep) is further broken down into Areal ($E_A$) and Vertical ($E_V$).

To design an EOR project, the engineer must know exactly which of these efficiencies is failing, because Thermal, Chemical, and Gas EOR all target different parts of the equation.

## 1. Microscopic Displacement Efficiency ($E_D$)

This is a measure of physics at the nanometer scale. 
If we look *only* at the exact pores where the injected fluid (water, chemical, or gas) physically touched the oil, what percentage of the oil was successfully forced out?

$$ E_D = \frac{S_{oi} - S_{or}}{S_{oi}} $$
*   $S_{oi}$: Initial Oil Saturation.
*   $S_{or}$: Residual Oil Saturation (The oil permanently trapped by capillary forces).

**The EOR Target:**
A standard waterflood has an $E_D$ of roughly 60%. The remaining 40% is trapped as $S_{or}$.
You cannot improve $E_D$ by pumping water faster. The *only* way to improve $E_D$ is to destroy the capillary forces holding the oil droplet. 
*   **Surfactant Flooding** lowers interfacial tension, improving $E_D$ to 90%.
*   **Miscible Gas ($CO_2$)** perfectly dissolves into the oil, eliminating interfacial tension completely, improving $E_D$ to nearly 100%.

## 2. Macroscopic (Volumetric) Sweep Efficiency ($E_{vol}$)

This is a measure of physics at the mile scale. 
If we look at the entire 10-square-mile oil field, what percentage of the total rock volume was actually touched by the injected fluid?

It is the product of **Areal Sweep** (the horizontal map view) and **Vertical Sweep** (the side-profile view).

### Areal Sweep Efficiency ($E_A$)
This asks: Did the fluid spread evenly across the map, or did it stab directly from the injector to the producer in a single thin line?
*   **The Enemy:** Viscous Fingering. If the injected fluid is highly mobile (thin and fast) and the oil is viscous (thick and slow), the injected fluid will finger through the oil, ruining $E_A$.
*   **The EOR Target:** To improve $E_A$, you must improve the Mobility Ratio ($M$). **Polymer Flooding** artificially thickens the injected water, slowing it down and forcing it to build a solid, flat wall that sweeps 100% of the area. **Thermal EOR (Steam)** melts the thick oil, drastically lowering its viscosity and stopping the fingering.

### Vertical Sweep Efficiency ($E_V$)
This asks: Did the fluid sweep through the entire 100-foot thickness of the reservoir, or did it only sweep the top 5 feet?
*   **The Enemy (Heterogeneity):** If the rock has a "Thief Zone" (a 2-foot layer of incredibly permeable rock), 100% of the injected fluid will blast through that tiny layer, completely ignoring the other 98 feet of oil.
*   **The Enemy (Gravity Override):** If you inject a light gas (like $CO_2$ or Steam), it will instantly float to the top of the reservoir, race across the ceiling, and hit the producing well, ignoring the bottom 80 feet of oil.
*   **The EOR Target:** To improve $E_V$, engineers use mechanical packers to block thief zones, or use complex foaming agents (Surfactant Foams) to artificially block the high-permeability pathways, forcing the gas down into the tighter, oil-rich rock.

## 3. The Compounding Failure of EOR

Because the Overall Recovery Factor is a multiplication of these fractions, a failure in any single category destroys the entire multi-million dollar project.

Imagine a highly engineered **Miscible $CO_2$ Flood**:
1.  Because it is miscible, it completely destroys capillary forces. $E_D = 0.95$ (Amazing!).
2.  However, $CO_2$ is a very thin gas. It severely fingers through the oil. $E_A = 0.50$ (Terrible).
3.  Furthermore, $CO_2$ is extremely light. It floats to the ceiling and overrides the oil. $E_V = 0.40$ (Catastrophic).

Overall Recovery = $0.95 \times 0.50 \times 0.40 = 0.19$ (19%).
Even though the $CO_2$ works perfectly on a microscopic scale, its terrible macroscopic sweep physics result in a complete economic failure of the project unless the engineer intervenes with WAG (Water-Alternating-Gas) to fix the sweep.

## 4. Compounding Efficiencies of EOR

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "micro", "data": { "label": "Microscopic Displacement (Ed)", "icon": "Microscope", "description": "Destroying capillary forces and Interfacial Tension (e.g. Surfactants, CO2)." }, "style": { "background": "#451a03", "color": "#fef3c7" } },
    { "id": "areal", "data": { "label": "Areal Sweep (Ea)", "icon": "Map", "description": "Fixing viscous fingering across the map (e.g. Polymer Flooding)." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "vertical", "data": { "label": "Vertical Sweep (Ev)", "icon": "ArrowDownToLine", "description": "Fighting gravity override and thief zones (e.g. Surfactant Foams, Packers)." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } },
    { "id": "overall", "data": { "label": "Overall Recovery (Er)", "icon": "BarChart2", "description": "The final compounding product: Ed × Ea × Ev." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "micro", "target": "areal", "animated": true },
    { "source": "areal", "target": "vertical", "animated": true },
    { "source": "vertical", "target": "overall", "animated": true, "style": { "stroke": "#10b981", "strokeWidth": 2 } }
  ]
}
```
