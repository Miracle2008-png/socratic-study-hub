# Catalytic Reforming and Isomerization

The Atmospheric Distillation Tower gives the refinery a massive slice of Straight-Run Naphtha (raw gasoline). The FCC and the Hydrocracker produce massive volumes of cracked Naphtha. 

You might think you can pump this massive volume of liquid directly into the gas tank of a car. You cannot. 

The raw Naphtha produced by distillation consists almost entirely of straight-chain Paraffins (like normal-heptane and normal-octane). These molecules are highly volatile and possess terrible, single-digit **Octane Ratings**.
If you put straight-chain paraffins into a modern, high-compression car engine, the fuel will detonate prematurely before the spark plug fires. This is called "Engine Knock." It will violently shatter the engine's pistons in seconds.

To legally sell gasoline at the pump, it must have an Octane Rating of 87 to 93. 
To achieve this, the refinery engineers must physically bend the microscopic shapes of the molecules. This is the job of the **Catalytic Reformer** and the **Isomerization Unit**.

## 1. The Secret of Octane

Octane is not a chemical. It is a measurement of a fuel's resistance to premature detonation. 
The Octane rating is dictated entirely by the physical, 3D geometric shape of the hydrocarbon molecule.

*   **Straight Chains (n-Paraffins):** Terrible Octane (e.g., n-Heptane has an Octane of 0). They detonate too easily.
*   **Branched Chains (Isoparaffins):** Excellent Octane (e.g., Iso-Octane has an Octane of 100). The branches slow the combustion reaction down.
*   **Rings (Aromatics):** Astronomical Octane (e.g., Toluene has an Octane of 120). The 6-carbon Benzene ring is chemically bulletproof.

The goal of the refinery is to take the terrible Straight Chains and violently force them to bend into Branches and Rings.

## 2. Catalytic Reforming (Making Rings)

The Catalytic Reformer is the primary octane-generating machine in the world. It takes heavy naphtha (molecules with 7 to 10 carbon atoms) and turns them into high-octane Aromatics.

### The Chemistry
The raw naphtha is heated to $950^\circ\text{F}$ and pumped over a highly specialized, incredibly expensive **Platinum-Rhenium Catalyst** fixed onto an alumina base.

Under this extreme heat and the influence of the Platinum, three massive chemical reactions occur:
1.  **Dehydrogenation of Naphthenes:** The Platinum violently rips Hydrogen atoms directly off the molecules. A weak cyclohexane ring is stripped of its hydrogen and instantly transforms into a bulletproof, high-octane Benzene/Aromatic ring.
2.  **Dehydrocyclization of Paraffins:** A terrible, straight-chain paraffin molecule is violently bent into a circle, the ends are stitched together, and the hydrogen is ripped off, forging a brand new Aromatic ring from scratch.
3.  **Isomerization:** Straight chains are bent into highly branched Isoparaffins.

**The Output (Reformate):** The liquid that exits the unit is called "Reformate." It is incredibly rich in Aromatics (Benzene, Toluene, Xylene) and boasts an astronomical Octane rating of 100+. It is the primary blending stock used to make Premium 93-Octane gasoline.

**The By-Product (A Hydrogen Goldmine):** Because the Reformer is constantly ripping Hydrogen atoms off the molecules to make rings, the unit vents a massive, continuous stream of pure Hydrogen Gas ($H_2$). This free Hydrogen is instantly routed across the refinery to feed the massive, hydrogen-hungry Hydrocrackers and Hydrotreaters. 

## 3. Isomerization (Making Branches)

The Catalytic Reformer is perfect for heavy naphtha ($C_7+$). But if you put light naphtha (Pentane $C_5$, and Hexane $C_6$) into the massive heat of a Reformer, the small molecules will simply shatter into useless methane gas.

To upgrade the Octane of the light naphtha, engineers use an **Isomerization Unit**.

The light, straight-chain Pentanes and Hexanes (terrible octane) are pumped over a specialized Platinum-Chloride or Zeolite catalyst at a relatively cool $300^\circ\text{F}$.
*   The catalyst does not rip hydrogen off. 
*   It simply breaks the carbon bonds, shuffles the atoms around, and stitches them back together in a highly branched, complex geometric shape.
*   A terrible straight-chain normal-Pentane (Octane 61) is magically rearranged into a highly branched iso-Pentane (Octane 92).

The liquid exiting the unit is called "Isomerate." It is an incredibly clean, high-octane, zero-sulfur, zero-aromatic blending component crucial for meeting strict modern environmental gasoline regulations.

## 4. Naphtha Upgrading Flow

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "naphtha", "data": { "label": "Raw Straight-Run Naphtha", "icon": "Droplet", "description": "Low octane straight-chain paraffins straight from the distillation tower." }, "style": { "background": "#451a03", "color": "#fef3c7" } },
    { "id": "split", "data": { "label": "Naphtha Splitter", "icon": "SplitSquareVertical", "description": "Separates the naphtha by weight. Heavy goes to reforming, light goes to isomerization." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "reformer", "data": { "label": "Catalytic Reformer", "icon": "Flame", "description": "Platinum catalyst at 950°F bends heavy straight chains into high-octane Aromatic rings." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } },
    { "id": "isomerizer", "data": { "label": "Isomerization Unit", "icon": "Shuffle", "description": "Chloride/Zeolite catalyst shuffles light straight chains into highly branched isoparaffins." }, "style": { "background": "#0f172a", "color": "#e2e8f0" } },
    { "id": "reformate", "data": { "label": "Reformate (Aromatics)", "icon": "Hexagon", "description": "100+ Octane blending stock packed with Benzene rings." }, "style": { "background": "#3b0764", "color": "#f3e8ff" } },
    { "id": "hydrogen", "data": { "label": "Hydrogen Gas (Byproduct)", "icon": "CloudFog", "description": "Massive volumes of H2 stripped off the rings, sent to the Hydrocracker." }, "style": { "background": "#0c4a6e", "color": "#e0f2fe" } },
    { "id": "isomerate", "data": { "label": "Isomerate (Branches)", "icon": "GitBranch", "description": "92 Octane, zero-sulfur, highly branched blending stock." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "naphtha", "target": "split", "animated": true },
    { "source": "split", "target": "reformer", "animated": true, "label": "Heavy (C7-C10)" },
    { "source": "split", "target": "isomerizer", "animated": true, "label": "Light (C5-C6)" },
    { "source": "reformer", "target": "reformate", "animated": true },
    { "source": "reformer", "target": "hydrogen", "animated": true, "style": { "stroke": "#38bdf8", "strokeDasharray": "5,5" } },
    { "source": "isomerizer", "target": "isomerate", "animated": true }
  ]
}
```
