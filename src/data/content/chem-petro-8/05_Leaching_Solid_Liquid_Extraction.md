# Leaching (Solid-Liquid Extraction)

**Leaching** is the process of removing a soluble solute from a solid matrix using a liquid solvent. 

If you have ever brewed a cup of coffee or tea, you have performed leaching. Hot water (the solvent) extracts caffeine and flavor compounds (the solute) from the solid coffee grounds (the inert carrier matrix). In industry, leaching is widely used in metallurgy (extracting gold from ore using cyanide), agriculture (extracting vegetable oil from crushed soybeans using hexane), and pharmaceuticals.

## 1. The Physics of Leaching

Unlike liquid-liquid extraction where two liquids mix rapidly, leaching involves a liquid penetrating a solid. The process is governed by diffusion and is inherently slower:
1.  **Solvent Transfer:** The solvent must diffuse from the bulk liquid into the pores of the solid.
2.  **Dissolution:** The solvent dissolves the solute located inside the solid matrix.
3.  **Solute Transfer:** The dissolved solute must diffuse back out through the pores of the solid into the bulk liquid.

Because diffusion through solid pores is the rate-limiting step, industrial leaching operations almost always involve **crushing or grinding the solid** first. Grinding exponentially increases the surface area exposed to the solvent and drastically shortens the diffusion path length.

## 2. Equilibrium in Leaching

In liquid-liquid extraction, equilibrium is dictated by thermodynamics (the binodal curve and tie lines). 
In leaching, the thermodynamic "equilibrium" is simply that the solute will dissolve until the solvent is completely saturated. However, we almost never reach saturation in practice.

Instead, the limiting factor in leaching is **Solid-Liquid Separation**. 
When you drain the solvent away from the solid, the solid is never perfectly dry. It retains a certain amount of the solution (Extract) clinging to its surface and trapped inside its pores.

The "equilibrium" assumption in leaching calculations is that **the solution retained by the solid has the exact same concentration as the bulk clear solution** leaving the stage.

## 3. The Triangular Diagram for Leaching

We can design leaching cascades using right-angle triangles.
Let:
*   **A = Inert Solid** (The coffee grounds).
*   **B = Pure Solvent** (The hot water).
*   **C = Solute** (The caffeine).

The graph plots the mass fraction of Solute in the liquid phase ($x_C$) on the x-axis, against the mass of Inert Solid per mass of solution ($N$) on the y-axis.

**The Underflow Curve (Retained Liquid):**
The most critical data for leaching design is the retention curve. It plots how much liquid the solid retains as the liquid becomes thicker and more concentrated with solute. 
*   The **Overflow** (the clean extract product) contains no solid, so it always plots on the x-axis ($N=0$).
*   The **Underflow** (the wet, muddy solid waste) plots on the upper retention curve.
*   "Tie Lines" in leaching are perfectly vertical lines connecting the Overflow (clean liquid) to the Underflow (muddy solid) at the same $x_C$ concentration.

## 4. Equipment for Leaching

Leaching equipment must be designed to handle heavy, abrasive solids.
*   **Shanks System:** A series of massive batch tanks. Solvent is pumped from one tank to the next in a counter-current sequence. When a tank's solids are fully leached, it is emptied and refilled with fresh ore.
*   **Rotocel Extractor:** A continuous carousel. Wedge-shaped baskets filled with solid rotate slowly in a circle. Fresh solvent is sprayed from above, percolates through the solid bed, drains through a false bottom, and is pumped to the preceding basket.
*   **Kennedy Extractor:** A series of horizontal paddle wheels that physically scoop the heavy solids up and move them against a counter-current flow of solvent.

## 5. Leaching Mass Transfer

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "grind", "data": { "label": "Solid Grinding", "icon": "Scissors", "description": "Reduce diffusion path." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "in", "data": { "label": "Solvent Penetration", "icon": "ArrowDown", "description": "Solvent diffuses in." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "diss", "data": { "label": "Dissolution", "icon": "Droplet", "description": "Solute dissolves." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "out", "data": { "label": "Outward Diffusion", "icon": "ArrowUp", "description": "Solute to bulk liquid." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "grind", "target": "in", "animated": true },
    { "source": "in", "target": "diss", "animated": true },
    { "source": "diss", "target": "out", "animated": true }
  ]
}
```
