# Waterflooding Design and Sweep Efficiency

Buckley-Leverett Theory tells us how water pushes oil in a perfectly straight line through a perfectly uniform tube of rock. 

However, a real oil reservoir is a massive, 3D, chaotic geological formation. When you pump millions of barrels of water into a real field, the water rarely does what you want it to do. It seeks the path of least resistance.

The ultimate measure of a waterflood's success is its **Overall Recovery Efficiency ($E$)**:
$$ E = E_D \times E_A \times E_V $$

This equation breaks the massive physical problem down into three distinct efficiencies: Microscopic, Areal, and Vertical.

## 1. Microscopic Displacement Efficiency ($E_D$)

This is the Buckley-Leverett efficiency. It asks: *In the exact microscopic pores where the water actually touched the oil, what percentage of the oil was swept away?*

$$ E_D = \frac{S_{oi} - S_{or}}{S_{oi}} $$
*   $S_{oi}$: Initial Oil Saturation.
*   $S_{or}$: Residual Oil Saturation.

You cannot improve $E_D$ by pumping more water or drilling more wells. The Residual Oil is permanently trapped by chemical capillary forces and interfacial tension. To improve $E_D$, you must fundamentally alter the chemistry of the fluids (using Enhanced Oil Recovery like surfactants).
*Typical $E_D$: 60% to 75%.*

## 2. Areal Sweep Efficiency ($E_A$)

If you look down at the oil field from an airplane, you see dozens of wells scattered across the map. Areal Sweep Efficiency asks: *What percentage of the map area was actually contacted by the advancing wall of water?*

To maximize $E_A$, engineers do not just place injection wells randomly. They design highly structured geometric patterns.
*   **5-Spot Pattern:** A square. Four injection wells on the corners, with one producing well exactly in the center. The water pushes inward from all four corners, sweeping the oil toward the center.
*   **Line Drive:** A solid wall of injection wells on the east side of the field pushing oil toward a solid wall of producing wells on the west side.

### The Threat of Viscous Fingering
The greatest enemy of Areal Sweep is the **Mobility Ratio ($M$)**. 
$$ M = \frac{\text{Mobility of Water}}{\text{Mobility of Oil}} = \frac{k_{rw} / \mu_w}{k_{ro} / \mu_o} $$

*   **Good ($M < 1$):** The oil is light, and the water is slow. The water builds up a massive, solid, flat wall that acts like a snowplow, perfectly sweeping 90% of the area.
*   **Disaster ($M > 1$):** The oil is thick and heavy (like molasses), and the water is fast. The water refuses to push the heavy oil. Instead, it violently stabs through the oil in long, chaotic spikes called **"Viscous Fingers."** The fingers of water race ahead, hitting the producing well instantly, leaving massive "islands" of untouched oil permanently stranded between the fingers.
*Typical $E_A$: 50% to 80%.*

## 3. Vertical Sweep Efficiency ($E_V$)

A reservoir is not a flat pancake. It might be 500 feet thick, composed of 20 different geological layers stacked on top of each other like a massive cake.
Vertical Sweep asks: *What percentage of the vertical thickness was contacted by the water?*

### The Threat of Heterogeneity and Gravity Override
1.  **Heterogeneity (The Thief Zone):** Out of the 20 layers, layer #4 might be an ancient, highly permeable river channel. If you inject water into the entire 500-foot wellbore, the water will entirely ignore the 19 tight rock layers and blast exclusively through the high-permeability "Thief Zone." It will instantly flood the producing well, leaving the other 19 layers of oil completely untouched.
2.  **Gravity Override:** Water is significantly heavier than oil. If you inject water evenly across a 500-foot thick reservoir, the water will physically sink to the bottom. It will aggressively sweep the bottom 50 feet of the rock, while the oil sitting in the top 450 feet is completely ignored. 

To combat poor Vertical Sweep, engineers use "Zonal Isolation" (mechanical packers in the wellbore) to physically block the Thief Zones and force the water into the tighter rocks.
*Typical $E_V$: 40% to 70%.*

## The Final Reality
Because you must multiply the fractions together, the Overall Recovery Efficiency ($E$) is shockingly low. 
Even in a world-class waterflood:
$$ E = 0.65 \times 0.70 \times 0.60 = 0.27 \text{ (or 27\%)} $$

Meaning even after decades of pumping oceans of water into the ground, 73% of the oil is left permanently trapped in the earth.

## 4. The Sweep Efficiency Equation

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "overall", "data": { "label": "Overall Recovery (E)", "icon": "PieChart", "description": "The final percentage of oil successfully extracted." }, "style": { "background": "#451a03", "color": "#fef3c7" } },
    { "id": "micro", "data": { "label": "Microscopic (Ed)", "icon": "ZoomIn", "description": "Trapped by capillary forces. Solved by chemicals." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "areal", "data": { "label": "Areal Sweep (Ea)", "icon": "Map", "description": "Bypassed on the map. Ruined by Viscous Fingering." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } },
    { "id": "vert", "data": { "label": "Vertical Sweep (Ev)", "icon": "Layers", "description": "Bypassed vertically. Ruined by Gravity & Thief Zones." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "overall", "target": "micro", "animated": true },
    { "source": "overall", "target": "areal", "animated": true },
    { "source": "overall", "target": "vert", "animated": true }
  ]
}
```
