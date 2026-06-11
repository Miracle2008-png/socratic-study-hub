# Hydrotreating and Desulfurization

The distillation towers, the FCC, and the Cokers all produce massive volumes of raw gasoline and raw diesel. 

Historically, refineries simply blended these raw liquids together and sold them. Today, this is totally illegal. 
Raw crude oil is heavily contaminated with toxic **Sulfur** and **Nitrogen**. When the oil is cracked in the FCC, these toxic atoms remain trapped inside the new gasoline and diesel molecules.

*   If you burn sulfur-rich diesel in a truck, the sulfur oxidizes into Sulfur Dioxide ($SO_2$), which mixes with rain to form Sulfuric Acid, destroying forests and eroding concrete cities. 
*   Modern environmental regulations (like Ultra-Low Sulfur Diesel, ULSD) legally demand that diesel fuel contain less than **15 parts-per-million (ppm)** of Sulfur. 

To achieve this near-perfect purity, the refinery must route almost every single drop of liquid it produces through a massive **Hydrotreater**.

## 1. The Chemistry of Hydrodesulfurization (HDS)

Sulfur is not just floating in the oil like dirt. The sulfur atoms are physically, covalently bonded directly inside the carbon chains of the oil molecules (forming compounds like Mercaptans and Thiophenes). 
You cannot filter it out. You must perform a violent chemical surgery to rip the sulfur atom out of the molecule without destroying the rest of the carbon chain.

This is **Hydrodesulfurization (HDS)**.

1.  The sour, sulfur-rich diesel is mixed with a massive volume of pure, high-pressure **Hydrogen Gas ($H_2$)**.
2.  The mixture is heated to $600^\circ\text{F} - 700^\circ\text{F}$ in a furnace.
3.  The hot vapor is pumped into a massive steel reactor packed with a specialized, solid **Cobalt-Molybdenum (CoMo)** catalyst.

As the oil flows over the catalyst, the metal violently pulls the molecule apart. The Hydrogen gas attacks the exposed Sulfur atom, chemically ripping it away from the carbon chain.

$$ R-SH \text{ (sour oil)} + H_2 \rightarrow R-H \text{ (sweet oil)} + H_2S \text{ (toxic gas)} $$

The Sulfur is transformed into Hydrogen Sulfide ($H_2S$) gas, which bubbles out of the liquid and is routed to the Amine Plant and the Claus Unit to be turned into solid yellow fertilizer. 
The liquid oil exits the reactor perfectly clean, with a sulfur content of $< 10$ ppm.

## 2. Hydrodenitrogenation (HDN)

Sulfur isn't the only poison. Crude oil also contains complex Nitrogen rings. 
If Nitrogen is burned in an engine, it forms $NO_x$ (Nitrous Oxides), the primary cause of brown, toxic city smog.
Furthermore, Nitrogen is a lethal poison to the Platinum catalysts used in the Catalytic Reformer. If raw naphtha touches the Reformer catalyst, the Nitrogen will instantly kill the multi-million dollar Platinum.

The Hydrotreater solves this simultaneously. Using a slightly more aggressive **Nickel-Molybdenum (NiMo)** catalyst, the high-pressure Hydrogen attacks the Nitrogen ring, ripping the Nitrogen atom out and combining with it to form pure Ammonia gas ($NH_3$).

## 3. The Severity of the Operation

Hydrotreating is not a one-size-fits-all operation. The "severity" (the pressure and temperature) depends entirely on how heavy the oil is.

1.  **Naphtha (Gasoline):** Very light molecules. The sulfur is easily accessible. The Hydrotreater only requires 300 to 500 psi of pressure to rip the sulfur out.
2.  **Diesel Fuel:** The molecules are long and complex. The sulfur atoms are often hidden deep inside massive, shielded aromatic rings (Sterically Hindered Thiophenes). To blast the Hydrogen deep enough into the molecule to rip the sulfur out, the Hydrotreater must operate at an aggressive 1,000 to 1,500 psi.
3.  **Heavy Residue:** To hydrotreat the solid black tar from the bottom of the vacuum tower, the engineer must use an astronomical 2,500 psi of Hydrogen pressure.

Because a modern refinery is forced by law to hydrotreat every single drop of fuel, the Hydrogen grid is the most critical utility in the plant. If the Steam Methane Reformer (SMR) breaks and the Hydrogen supply stops, the entire $5 Billion refinery must instantly shut down.

## 4. Hydrotreating Process Flow

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "sour", "data": { "label": "Sour Feedstock", "icon": "Biohazard", "description": "Raw diesel or naphtha packed with toxic sulfur and nitrogen molecules." }, "style": { "background": "#451a03", "color": "#fef3c7" } },
    { "id": "h2", "data": { "label": "Hydrogen Gas (H2)", "icon": "CloudFog", "description": "High-pressure, pure hydrogen pumped from the SMR plant." }, "style": { "background": "#0c4a6e", "color": "#e0f2fe" } },
    { "id": "furnace", "data": { "label": "Pre-Heat Furnace", "icon": "Flame", "description": "Heats the oil and gas mixture to exactly 650°F to initiate the reaction." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } },
    { "id": "reactor", "data": { "label": "HDS / HDN Reactor", "icon": "Database", "description": "Solid CoMo/NiMo catalyst violently rips the Sulfur and Nitrogen atoms out of the oil." }, "style": { "background": "#1e1b4b", "color": "#e0e7ff" } },
    { "id": "separator", "data": { "label": "Gas/Liquid Separator", "icon": "Filter", "description": "Physically separates the newly formed toxic gases from the clean liquid fuel." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "sweet", "data": { "label": "Sweet Product", "icon": "ShieldCheck", "description": "Ultra-Low Sulfur Diesel (ULSD) or clean Naphtha ready for sale or reforming." }, "style": { "background": "#14532d", "color": "#dcfce7" } },
    { "id": "h2s", "data": { "label": "H2S & NH3 Gas", "icon": "Skull", "description": "Highly toxic Hydrogen Sulfide and Ammonia gases routed to the Claus unit to be destroyed." }, "style": { "background": "#b45309", "color": "#fef3c7" } }
  ],
  "edges": [
    { "source": "sour", "target": "furnace", "animated": true },
    { "source": "h2", "target": "furnace", "animated": true },
    { "source": "furnace", "target": "reactor", "animated": true },
    { "source": "reactor", "target": "separator", "animated": true },
    { "source": "separator", "target": "sweet", "animated": true },
    { "source": "separator", "target": "h2s", "animated": true, "style": { "stroke": "#f59e0b", "strokeDasharray": "5,5" } }
  ]
}
```
