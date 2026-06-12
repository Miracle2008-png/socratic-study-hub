# Migration of Hydrocarbons

Once crude oil and natural gas are generated deep inside the microscopic, ultra-tight pores of a black shale source rock, they must escape and travel to a reservoir rock to form a commercial accumulation. 

This journey is called **Hydrocarbon Migration**. It is one of the least understood and most complex processes in petroleum geology, as it happens over millions of years and distances ranging from a few meters to hundreds of kilometers.

Migration is generally divided into two distinct phases: Primary and Secondary.

## 1. Primary Migration (Expulsion)

Primary migration is the process of the oil and gas physically squeezing out of the impermeable source rock (shale) and entering a permeable carrier bed (like a sandstone).

This is a physical paradox. Shale has virtually zero permeability (fluid cannot flow through it). The pores are microscopic, and the water inside them is held tightly by capillary forces. Oil droplets are too large and lack the pressure to simply "swim" out.

### How does Expulsion happen?
The prevailing theory relies on **micro-fracturing caused by extreme pressure**.
1.  Solid kerogen occupies a specific volume inside the shale.
2.  When the kerogen hits the "Oil Window" and is cooked, it undergoes a phase change, converting from a dense solid into a liquid (oil) and a gas (methane).
3.  Liquids and gases take up significantly more volume than the solid kerogen they came from (volume expansion).
4.  Because the fluids are trapped inside a rigid, microscopic rock pore with nowhere to go, this volume expansion causes the internal pressure in the pore to skyrocket.
5.  Eventually, the internal fluid pressure exceeds the actual tensile strength of the surrounding rock. The shale literally cracks on a microscopic level.
6.  The oil and gas aggressively violently spurt out through these micro-fractures, escaping the source rock. Once the pressure is relieved, the massive weight of the overlying earth instantly squashes the micro-fractures shut again, until more oil is generated and the cycle repeats.

## 2. Secondary Migration

Once the oil has successfully escaped the source rock, it enters a highly porous and permeable rock layer (like a vast underground sheet of sandstone). This permeable layer is called a **Carrier Bed**.

**Secondary Migration** is the long-distance travel of the oil through the carrier bed, moving toward the surface until it is caught in a trap.

### The Driving Forces
Secondary migration is driven almost entirely by **Buoyancy**.
The pores of all deep underground rocks are completely saturated with highly saline water (brine). 
*   Water has a density of roughly $1.0 \text{ g/cm}^3$.
*   Crude oil has a density of roughly $0.8 \text{ g/cm}^3$.
*   Natural gas has a density of $< 0.1 \text{ g/cm}^3$.

Because oil and gas are lighter than the water filling the rocks, gravity forces the heavier water down, physically pushing the lighter oil and gas upwards. The oil floats through the microscopic maze of sand grains, moving generally upward and up-dip along the angled rock layers.

### Capillary Resistance
The migration is not easy. The oil must squeeze through microscopic "pore throats" (the tiny bottlenecks between grains of sand). 
Because oil and water do not mix, the surface tension creates a **Capillary Pressure** that actively fights the oil, trying to block it from squeezing through the narrow throat. 

For the oil to move forward, the upward buoyant force (driven by the height of the oil column pushing from below) must mathematically exceed the capillary resistance of the rock. If the pores become too tight, the oil stops moving.

## 3. Migration Distances and Losses

Secondary migration can happen over vast distances. In the massive oil fields of the Middle East, the oil sometimes migrated laterally for more than 100 kilometers from the deep source rock basin to the shallow traps.

However, migration is a highly inefficient process. 
As the oil travels through the carrier bed, a small amount of oil gets permanently left behind, trapped in dead-end pores or smeared against the sand grains by capillary forces. This is called **Residual Oil Saturation**.
If the migration pathway is 200 kilometers long, the entire volume of generated oil might be entirely consumed just wetting the pathway, leaving zero oil to actually reach the trap at the end!

## 4. Tertiary Migration and Dysmigration

Sometimes, oil finds a trap, accumulates, and forms a massive oil field. 
Then, a million years later, an earthquake strikes. A massive fault tears perfectly through the middle of the seal rock above the trap.

The seal is broken. The buoyant oil instantly escapes the trap and begins migrating upward again. This is called **Tertiary Migration** or **Dysmigration**. The oil will either find a new, shallower trap, or it will leak all the way to the ocean floor or surface, resulting in a destroyed oil field and a natural surface oil seep.

## 5. The Migration Journey

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "expulsion", "data": { "label": "Primary Migration", "icon": "Maximize2", "description": "Overpressure causes shale micro-fracturing. Oil violently escapes." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } },
    { "id": "buoyancy", "data": { "label": "Buoyancy Drive", "icon": "ArrowUpCircle", "description": "Oil is lighter than brine. It floats upward through carrier beds." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "capillary", "data": { "label": "Capillary Resistance", "icon": "AlertTriangle", "description": "Tight pore throats fight the buoyant force, smearing residual oil." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "trap", "data": { "label": "Accumulation", "icon": "CheckCircle", "description": "Oil safely reaches the geometric trap and pools." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "expulsion", "target": "buoyancy", "animated": true },
    { "source": "buoyancy", "target": "capillary", "animated": true },
    { "source": "capillary", "target": "trap", "animated": true, "style": { "stroke": "#10b981", "strokeWidth": 2 } }
  ]
}
```
