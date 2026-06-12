# Stratigraphy and Sedimentary Basins

Structural geology tells us how rocks bend and break. **Stratigraphy** is the study of the rock layers (strata) themselves: what they are made of, what environment they were deposited in, and their chronological age. 

Understanding stratigraphy allows petroleum geologists to predict exactly where a porous beach sandstone might be located 10,000 feet underground, even if they have only drilled one well.

## 1. The Principles of Stratigraphy

Stratigraphy is based on several simple, yet profound laws formulated in the 1600s by Nicolas Steno:
1.  **Superposition:** In an undisturbed sequence of rocks, the oldest layer is on the bottom, and the youngest layer is on the top. (Like a stack of pancakes).
2.  **Original Horizontality:** Sedimentary rocks are originally deposited as flat, horizontal sheets. If they are tilted, the tilting happened *after* the rocks were formed.
3.  **Lateral Continuity:** A layer of sedimentary rock extends outward continuously in all directions until it hits the edge of the basin or thins out to nothing. A sandstone found on one side of a canyon is the exact same rock as the sandstone on the other side.
4.  **Cross-Cutting Relationships:** If a fault cuts through a rock, or a volcanic dike injects through it, the fault is younger than the rock it cuts.

## 2. Depositional Environments

Sedimentary rocks are not random. They are the fossilized remains of ancient landscapes. The type of rock formed depends entirely on the physical energy of the **Depositional Environment**.

*   **High Energy (Fast Water):** Rivers, mountain streams, and crashing ocean surf. Fast-moving water carries away fine mud and clay, leaving only heavy, large grains of sand and gravel behind. **Result: Conglomerates and Sandstones (Excellent Reservoir Rocks).**
*   **Low Energy (Still Water):** Deep ocean basins, quiet lakes, and swamps. The water is perfectly still. The microscopic particles of mud, clay, and dead plankton slowly settle to the bottom like dust. **Result: Shales (Excellent Source and Seal Rocks).**
*   **Biological/Chemical:** Warm, shallow, clear tropical oceans. Corals and microscopic plankton build calcium carbonate shells. When they die, the shells pile up. **Result: Limestones (Excellent Reservoir Rocks).**

By examining a rock core pulled from a well, a geologist can look at the grain size and fossils and state: "150 million years ago, this exact spot in Texas was a shallow tropical beach."

## 3. Transgressions and Regressions (Sequence Stratigraphy)

Sea level is never constant. Over millions of years, ice ages cause the ocean to rise and fall by hundreds of feet. 

As the shoreline moves back and forth, the depositional environments move with it, creating predictable vertical sequences of rock.

1.  **Transgression (Sea Level Rises):** The ocean floods the land. 
    *   What was once a sandy beach becomes shallow ocean (limestone), which then becomes deep ocean (shale).
    *   If you drill a well here, you will find Sandstone at the bottom, covered by Limestone, covered by Shale at the top. This vertical sequence indicates a rising sea.
2.  **Regression (Sea Level Falls):** The ocean recedes. 
    *   The deep ocean becomes a shallow beach, which then becomes dry land.
    *   If you drill a well, you will find Shale at the bottom, covered by Sandstone at the top.

**Sequence Stratigraphy** tracks these massive, global sea-level changes. Because a Transgression drops a massive, thick layer of impermeable marine shale directly on top of a porous beach sandstone, sea-level rises are responsible for creating the vast majority of the world's stratigraphic oil traps.

## 4. Sedimentary Basins

Petroleum is not found randomly across the earth. You will never find oil drilling into the solid granite of the Rocky Mountains. Oil is exclusively found in **Sedimentary Basins**.

A basin is a massive, continent-scale depression in the Earth's crust (caused by tectonic sagging or rifting). 
Over millions of years, rivers act like conveyor belts, stripping sand and mud off the mountains and dumping it into the low-lying basin. The basin fills up with thousands of feet of sedimentary rock.

*   The immense weight of the sediment causes the basin to sink further (subsidence), allowing even more sediment to pile in.
*   The deep center of the basin buries the shales deep enough to reach the geothermal "Oil Window" (the Kitchen).
*   The oil generates, migrates up the sloping sides of the basin, and gets trapped in the shallower sandstone layers near the edges. 

Famous basins include the Permian Basin (Texas), the Williston Basin (North Dakota), and the Persian Gulf Basin (Middle East). If you are not drilling in a sedimentary basin, you have a 0% chance of finding oil.

## 5. Stratigraphic Sequence (Transgression)

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "trans", "data": { "label": "Transgression", "icon": "ArrowUpCircle", "description": "Global sea levels rise, flooding continents." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "sand", "data": { "label": "1. Beach Sand", "icon": "Box", "description": "Porous reservoir rock laid down first." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "shale", "data": { "label": "2. Marine Shale", "icon": "Lock", "description": "Deep water drops an impermeable mud layer on top of the sand." }, "style": { "background": "#451a03", "color": "#fef3c7" } },
    { "id": "trap", "data": { "label": "Stratigraphic Trap", "icon": "ShieldAlert", "description": "Perfect trap formed by the sequence of rock layers." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "trans", "target": "sand", "animated": true },
    { "source": "sand", "target": "shale", "animated": true },
    { "source": "shale", "target": "trap", "animated": true, "style": { "stroke": "#10b981", "strokeWidth": 2 } }
  ]
}
```
