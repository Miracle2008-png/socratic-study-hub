# Materials of Construction

A perfectly sized reactor and a flawless control system mean nothing if the chemicals inside eat through the steel walls in three weeks. Selecting the correct Material of Construction (MOC) is one of the most consequential decisions in process design, dictating both the safety of the plant and its capital cost.

## 1. The Default: Carbon Steel

If a fluid is benign (water, air, neutral hydrocarbons) and the temperature is moderate, the absolute default choice for all piping, tanks, and structural supports is **Carbon Steel**.

Carbon steel is cheap, incredibly strong, and easy to weld. However, it has two fatal flaws:
1.  **Corrosion:** It rusts aggressively when exposed to oxygen and moisture, and it dissolves rapidly in even mild acids.
2.  **Temperature Limits:** Below $-45^\circ\text{C}$, carbon steel suffers a "ductile-to-brittle transition." It shatters like glass when struck. (This is why the Liberty Ships in WWII snapped in half in the freezing Atlantic). Above $400^\circ\text{C}$, it loses its structural strength and begins to creep (stretch) under pressure.

## 2. Dealing with Corrosion: Stainless Steels

When handling corrosive chemicals (acids, bases, chlorides) or operating at high temperatures, engineers must upgrade from carbon steel to **Stainless Steel**.

Stainless steel works by "Passivation." It contains a high percentage of Chromium (usually >10.5%). When exposed to oxygen, the chromium instantly reacts to form a microscopically thin, invisible, self-healing layer of Chromium Oxide on the surface of the metal. This barrier completely protects the iron beneath it from rusting.

*   **Type 304 Stainless:** The standard workhorse. Used extensively in the food, beverage, and dairy industries because it doesn't rust and can be easily sanitized.
*   **Type 316 Stainless:** Contains added Molybdenum. This is the absolute standard for the chemical and pharmaceutical industries. It provides massive resistance to "Pitting Corrosion" caused by chlorides (salts).
*   *The Catch:* Stainless steel is significantly more expensive than carbon steel, and it is notoriously difficult to machine and weld correctly.

## 3. Exotic Alloys and High-End Materials

Sometimes, the environment is so brutal that even 316 Stainless Steel will disintegrate. Engineers must turn to incredibly expensive exotic materials.

*   **Nickel Alloys (Monel, Inconel, Hastelloy):** These superalloys can survive boiling concentrated sulfuric and hydrochloric acids, and they maintain massive physical strength even at $1000^\circ\text{C}$ (red hot). They are used in jet engine turbine blades and extreme chemical reactors. They are staggeringly expensive.
*   **Titanium:** Extremely strong, incredibly lightweight, and virtually immune to corrosion in seawater and wet chlorine gas. Used heavily in offshore oil rigs and aerospace. 
*   **Tantalum:** The ultimate anti-corrosion metal. It is essentially immune to almost every acid known to humanity. However, it is one of the rarest elements on Earth and costs a fortune. It is usually only used as a microscopic inner lining inside a cheaper steel vessel.

## 4. Non-Metals: Polymers and Ceramics

Metals are not the only option. 
*   **Plastics/Polymers (PVC, PTFE/Teflon, FRP):** Excellent resistance to acids and bases, and they are incredibly cheap. Teflon (PTFE) is legendary for being chemically inert to almost everything. 
    *   *The Catch:* Plastics have terrible mechanical strength. They cannot handle high pressures, and they melt or degrade at relatively low temperatures (usually failing above $150^\circ\text{C}$).
*   **Ceramics and Glass:** Borosilicate glass and ceramics are totally immune to most chemical attacks (except hydrofluoric acid) and can survive astronomical temperatures. 
    *   *The Catch:* They are incredibly brittle. A slight physical shock or a sudden change in temperature (thermal shock) will cause them to shatter catastrophically. They are primarily used as internal linings for steel reactors (Glass-Lined Reactors) in the pharmaceutical industry to prevent metal ions from contaminating the drugs.

## 5. The Economic Decision

Choosing a material is a pure economic optimization problem. 
If you are building a pipeline to carry a mildly corrosive fluid, you have two choices:
1.  Build it out of cheap Carbon Steel, but include a massive "Corrosion Allowance" (make the pipe very thick) and plan to shut the plant down and replace the entire pipeline every 5 years.
2.  Build it out of expensive 316 Stainless Steel, and it will last for 30 years without needing replacement.

The design engineer must calculate the Net Present Value of both options, factoring in the cost of the replacement pipe, the labor to replace it, and the millions of dollars in lost production during the 5-year shutdown, to decide which material is truly the cheapest over the lifespan of the plant.

## 6. Material Selection Hierarchy

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "carbon", "data": { "label": "Carbon Steel", "icon": "Box", "description": "Default. Cheap and strong, but corrodes easily." }, "style": { "background": "#451a03", "color": "#fef3c7" } },
    { "id": "stain", "data": { "label": "Stainless Steel", "icon": "Shield", "description": "Chromium passivation prevents rusting. Handles salts." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "exot", "data": { "label": "Exotic Alloys", "icon": "Zap", "description": "Inconel/Titanium. Costs a fortune, survives boiling acid." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } },
    { "id": "poly", "data": { "label": "Polymers/Plastics", "icon": "Droplet", "description": "Teflon. Chemically inert but melts at high temps." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "carbon", "target": "stain", "animated": true },
    { "source": "stain", "target": "exot", "animated": true },
    { "source": "stain", "target": "poly", "animated": true, "style": { "stroke": "#10b981", "strokeWidth": 2 } }
  ]
}
```
