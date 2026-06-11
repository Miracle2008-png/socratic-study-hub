# Natural Gas Dehydration

When the raw natural gas finally arrives at the Central Gas Processing Plant via the gathering trunklines, it is thoroughly "wet." 
It is entirely saturated with invisible water vapor.

If this wet gas is routed directly into the massive, high-pressure, cross-country transmission pipelines, two catastrophic failures will occur:
1.  **Corrosion:** The water vapor will mix with trace amounts of $CO_2$ or $H_2S$ to form lethal acids, which will violently rust the steel pipe from the inside out, causing a massive explosion.
2.  **Hydrates:** In the cold winter months, the water vapor will combine with the high-pressure Methane to form Gas Hydrates—solid, rock-hard blocks of ice that will instantly plug the 36-inch transmission pipeline solid, shutting off power to entire cities.

Therefore, the absolute first step in gas processing is **Dehydration**: the total, aggressive removal of all water vapor. 
Pipeline regulations strictly demand that gas contain less than 7 pounds of water per million standard cubic feet (7 lb/MMscf). 

## 1. Absorption vs. Adsorption

Engineers use two fundamentally different physical processes to dehydrate gas:

*   **Absorption (Liquid Desiccants):** The gas is bubbled through a specialized liquid chemical (like Glycol). The liquid chemically "drinks" and absorbs the water vapor into its own volume. This is used for 95% of all natural gas processing.
*   **Adsorption (Solid Desiccants):** The gas is forced through a massive bed of solid, porous beads (like Silica Gel or Molecular Sieves). The water vapor molecules get physically trapped and glued to the microscopic surface of the solid beads. This is incredibly expensive and is only used when the gas must be perfectly, bone-dry (e.g., before super-cooling it into LNG).

## 2. Triethylene Glycol (TEG) Dehydration

The undisputed king of the natural gas industry is the **TEG Dehydration Unit**. 
Triethylene Glycol is a heavy, syrupy liquid. It is intensely hygroscopic (it naturally loves water).

### The Contactor Tower (The Scrubber)
The wet gas is piped into the absolute bottom of a massive, tall, high-pressure steel tower called the Contactor.
*   The gas naturally wants to float upward.
*   At the exact same time, perfectly pure, dry liquid TEG is pumped into the very top of the tower. Gravity pulls the liquid TEG downward.
*   The inside of the tower is packed with dozens of complex metal trays (bubble-cap trays).
*   As the wet gas bubbles violently upward through the downward-raining liquid TEG, a massive mass-transfer occurs. The TEG acts like a chemical sponge, aggressively ripping the invisible water vapor molecules directly out of the gas stream.
*   Perfectly dry, pipeline-ready natural gas exits the top valve of the tower.

## 3. The Regeneration System (The Boiler)

The TEG liquid that reaches the bottom of the Contactor Tower is now "Rich." It is heavily saturated with water and useless. 

Because TEG is astronomically expensive, you cannot throw it away. You must extract the water and reuse the chemical in a continuous, closed loop. This is the **Regeneration System**.

This system relies on a massive difference in boiling points:
*   Water boils at $212^\circ\text{F}$ ($100^\circ\text{C}$).
*   TEG boils at a massive $545^\circ\text{F}$ ($285^\circ\text{C}$).

**The Reboiler:**
The wet, rich TEG is pumped into a massive steel kettle (the Reboiler). A roaring natural gas flame inside a fire-tube heats the liquid TEG to exactly $400^\circ\text{F}$.
*   At $400^\circ\text{F}$, the water is instantly vaporized into steam. The steam is vented to the atmosphere (or captured).
*   Because $400^\circ\text{F}$ is far below the boiling point of TEG, the TEG remains perfectly liquid.
*   The heat essentially "boils the water out of the glycol," leaving behind pure, $99.0\%$ "Lean" TEG. 

This hot, Lean TEG is then pumped through heat exchangers to cool it down, and injected right back into the top of the Contactor Tower to absorb more water.

## 4. The Stripping Gas Flaw

To reach the strict 7 lb/MMscf pipeline spec, the TEG entering the top of the tower must be extraordinarily pure (at least 99.0% pure TEG).

However, a standard $400^\circ\text{F}$ reboiler can only physically boil the TEG to about 98.5% purity. A tiny fraction of water stubbornly refuses to boil out. 

To achieve ultra-purity (99.9% TEG), engineers inject a small stream of pure, perfectly dry Methane gas (Stripping Gas) directly into the bottom of the Reboiler kettle. As the dry gas bubbles up through the hot, boiling Glycol, it violently strips the last stubborn, microscopic molecules of water out of the liquid, producing the ultra-pure TEG required to perfectly dehydrate the massive gas stream.

## 5. TEG Dehydration Process Flow

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "wet", "data": { "label": "Wet Gas", "icon": "CloudRain", "description": "Raw gas fully saturated with invisible water vapor." }, "style": { "background": "#0f172a", "color": "#e2e8f0" } },
    { "id": "contactor", "data": { "label": "Contactor Tower", "icon": "SplitSquareVertical", "description": "Wet gas bubbles up through downward-raining pure liquid TEG. TEG chemically absorbs the water." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "dry", "data": { "label": "Dry Pipeline Gas", "icon": "CloudFog", "description": "Bone-dry Methane exits the top, ready for cross-country transmission." }, "style": { "background": "#14532d", "color": "#dcfce7" } },
    { "id": "reboiler", "data": { "label": "Reboiler (400°F)", "icon": "Flame", "description": "Rich TEG is heated to boil the water out into steam, leaving pure liquid TEG behind." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } },
    { "id": "steam", "data": { "label": "Water Vapor (Steam)", "icon": "Droplets", "description": "Boiled water is safely vented to atmosphere." }, "style": { "background": "#475569", "color": "#f8fafc" } },
    { "id": "recycle", "data": { "label": "Lean TEG Recycle", "icon": "RefreshCw", "description": "Hot, pure TEG is cooled and pumped continuously back to the top of the Contactor." }, "style": { "background": "#0c4a6e", "color": "#e0f2fe" } }
  ],
  "edges": [
    { "source": "wet", "target": "contactor", "animated": true },
    { "source": "contactor", "target": "dry", "animated": true },
    { "source": "contactor", "target": "reboiler", "animated": true, "style": { "stroke": "#3b82f6" }, "label": "Rich TEG" },
    { "source": "reboiler", "target": "steam", "animated": true },
    { "source": "reboiler", "target": "recycle", "animated": true, "style": { "stroke": "#0ea5e9" } },
    { "source": "recycle", "target": "contactor", "animated": true, "style": { "stroke": "#0ea5e9" }, "label": "Lean TEG" }
  ]
}
```
