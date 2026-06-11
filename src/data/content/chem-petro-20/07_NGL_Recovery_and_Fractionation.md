# NGL Recovery and Fractionation

Once the raw natural gas has been perfectly dehydrated and sweetened, it is technically clean enough to burn in a stove. However, if the gas comes from a "Wet Gas" reservoir, it contains massive amounts of Ethane ($C_2$), Propane ($C_3$), and Butane ($C_4$). 

These heavy molecules are called **Natural Gas Liquids (NGLs)**. 
If you leave them in the gas stream, they will violently condense into liquid pools inside the cold transmission pipelines, causing massive mechanical damage to the pipeline compressors.

Furthermore, NGLs are incredibly valuable. Propane is sold as heating fuel. Ethane is the fundamental chemical building block for the entire global plastics industry. An oil company can make a fortune by stripping these liquids out of the gas and selling them separately.

## 1. The Cryogenic Turboexpander Plant

To strip the heavy NGL molecules out of the light Methane gas, engineers use extreme thermodynamics. They build a **Cryogenic Plant** to literally freeze the liquids out of the gas.

To get the temperature cold enough (often $-120^\circ\text{F}$), they do not use massive electrical refrigerators. They use the energy of the gas itself via a **Turboexpander**.

### The Physics of the Turboexpander
The gas arrives at the plant at massive pressure (e.g., 1,000 psi). 
1.  The gas is routed through an intense, high-speed turbine (the Expander).
2.  As the high-pressure gas blasts through the turbine blades, it violently spins the turbine at 30,000 RPM.
3.  Because the gas is doing massive amounts of physical work (spinning the heavy steel turbine), it rapidly loses thermodynamic energy. 
4.  According to the laws of thermodynamics (Isentropic Expansion), this massive loss of energy causes the temperature of the gas to instantly plummet. The gas violently drops from $80^\circ\text{F}$ down to $-120^\circ\text{F}$ in a fraction of a second, while the pressure drops to 300 psi.

### The Demethanizer Tower
At $-120^\circ\text{F}$, the Methane ($C_1$) is still a gas. But the Ethane, Propane, and Butane instantly freeze into a super-cold liquid. 
The chaotic, freezing mixture is dumped into a massive distillation tower called the **Demethanizer**.
*   The pure, dry, invisible Methane gas floats out the top of the tower. This is the final "Residue Gas." It is routed to a compressor, re-pressurized, and sent to the city pipeline to be burned for electricity.
*   The freezing liquid NGL mixture (the "Y-Grade" liquid) drains out the bottom of the tower.

## 2. The NGL Fractionation Train

The Y-Grade liquid draining out of the cryogenic plant is a complex mixture of all the heavy hydrocarbons combined. You cannot sell it in this state. You must split it into pure, individual chemical products.

This is done using a sequential train of massive distillation columns called a **Fractionation Train**.

Each column in the train relies on precise boiling points to boil off one specific chemical while leaving the heavier ones as a liquid.

1.  **Deethanizer:** The first massive tower. The liquid is heated precisely to the boiling point of Ethane. The pure Ethane ($C_2$) boils off the top as a gas and is piped to a plastics factory. The remaining liquid drains out the bottom.
2.  **Depropanizer:** The remaining liquid flows to the second tower. It is heated slightly hotter to the boiling point of Propane. Pure Propane ($C_3$) boils off the top, is compressed into a liquid, and pumped into the white LPG tanks used for backyard grills. The remaining liquid drains out the bottom.
3.  **Debutanizer:** The remaining liquid flows to the third tower. It is heated to the boiling point of Butane. Pure Butane ($C_4$) boils off the top.
4.  **Natural Gasoline:** Whatever heavy liquid remains at the bottom of the Debutanizer (Pentanes, $C_5+$) is called Natural Gasoline or Condensate. It is piped to an oil refinery to be blended into automobile fuel.

By using extreme cold to drop the liquids out, and then extreme heat to boil them apart, the natural gas engineer transforms a chaotic, explosive vapor into five distinct, highly profitable, ultra-pure chemical commodities.

## 3. Cryogenic NGL Fractionation Flow

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "wet", "data": { "label": "Wet Gas", "icon": "Cloud", "description": "High-pressure gas containing Methane, Ethane, Propane, and Butane." }, "style": { "background": "#451a03", "color": "#fef3c7" } },
    { "id": "turbo", "data": { "label": "Turboexpander", "icon": "Wind", "description": "Violently drops pressure, instantly crashing the temperature to -120°F." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "demeth", "data": { "label": "Demethanizer", "icon": "SplitSquareVertical", "description": "Separates the dry Methane gas from the freezing Y-Grade liquid." }, "style": { "background": "#0f172a", "color": "#e2e8f0" } },
    { "id": "methane", "data": { "label": "Residue Gas (Methane)", "icon": "CloudFog", "description": "Pure C1 gas sent to the city pipeline." }, "style": { "background": "#14532d", "color": "#dcfce7" } },
    { "id": "deeth", "data": { "label": "Deethanizer", "icon": "SplitSquareVertical", "description": "Boils off the pure Ethane (C2)." }, "style": { "background": "#1e293b", "color": "#cbd5e1" } },
    { "id": "ethane", "data": { "label": "Ethane (C2)", "icon": "Zap", "description": "Sold to petrochemical plants to make plastics." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } },
    { "id": "deprop", "data": { "label": "Depropanizer", "icon": "SplitSquareVertical", "description": "Boils off the pure Propane (C3)." }, "style": { "background": "#0f172a", "color": "#e2e8f0" } },
    { "id": "propane", "data": { "label": "Propane (C3)", "icon": "Flame", "description": "Liquid LPG sold for heating and cooking." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "debut", "data": { "label": "Debutanizer", "icon": "SplitSquareVertical", "description": "Separates the Butane (C4) from the Natural Gasoline (C5+)." }, "style": { "background": "#1e293b", "color": "#cbd5e1" } },
    { "id": "gasoline", "data": { "label": "Natural Gasoline (C5+)", "icon": "Fuel", "description": "Heavy liquid condensate sold to oil refineries." }, "style": { "background": "#1c1917", "color": "#a8a29e" } }
  ],
  "edges": [
    { "source": "wet", "target": "turbo", "animated": true },
    { "source": "turbo", "target": "demeth", "animated": true },
    { "source": "demeth", "target": "methane", "animated": true },
    { "source": "demeth", "target": "deeth", "animated": true, "style": { "stroke": "#3b82f6" }, "label": "Y-Grade Liquid" },
    { "source": "deeth", "target": "ethane", "animated": true },
    { "source": "deeth", "target": "deprop", "animated": true, "style": { "stroke": "#3b82f6" } },
    { "source": "deprop", "target": "propane", "animated": true },
    { "source": "deprop", "target": "debut", "animated": true, "style": { "stroke": "#3b82f6" } },
    { "source": "debut", "target": "gasoline", "animated": true }
  ]
}
```
