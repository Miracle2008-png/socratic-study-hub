# Ultrafiltration and Microfiltration

Unlike Reverse Osmosis (which uses solution-diffusion), Ultrafiltration (UF) and Microfiltration (MF) are purely physical sieving processes. The membranes have distinct, measurable pores. If a particle is larger than the pore, it is blocked; if it is smaller, it passes through.

Because they are separating large macro-molecules and particles rather than dissolved salts, osmotic pressure ($\pi$) is virtually zero. Therefore, these processes operate at very low pressures ($\Delta P$).

## 1. Ultrafiltration (UF)

UF membranes have pore sizes ranging from $1$ to $100$ nanometers. 

**What it blocks:**
UF is designed to reject **macromolecules**. This includes proteins, polymers, starches, viruses, and colloidal silica. It allows water and small dissolved salts to pass freely.

**The MWCO Metric:**
Instead of stating a pore diameter (because polymer pores are irregularly shaped), UF membranes are rated by their **Molecular Weight Cut-Off (MWCO)**. 
A membrane with a 10,000 Dalton MWCO will reject 90% of all globular proteins that have a molecular mass of 10,000 g/mol or greater.

**Applications:**
*   **Dairy Industry:** Concentrating whey protein from milk. (The water and lactose pass through the membrane, leaving a highly concentrated protein syrup).
*   **Pharmaceuticals:** Harvesting and purifying enzymes and antibodies from fermentation broths.
*   **Water Treatment:** Used as a pre-treatment before Reverse Osmosis to physically block viruses and colloidal dirt that would otherwise permanently foul the expensive RO membranes.

## 2. Microfiltration (MF)

MF membranes have the largest pores of the pressure-driven membrane class, ranging from $0.1$ to $10$ micrometers ($\mu m$).

**What it blocks:**
MF is designed to reject **suspended particles**. This includes bacteria, yeast cells, red blood cells, flour, and fine sand. It allows water, salts, and even large dissolved proteins to pass.

**Applications:**
*   **Cold Pasteurization:** Draft beer and wine are pumped through 0.2 $\mu m$ MF membranes. The membrane physically strains out all the yeast and spoilage bacteria. This sterilizes the beverage without using heat, preserving the delicate flavors that would be destroyed by thermal pasteurization.
*   **Biotechnology:** Separating whole cells (like *E. coli*) from the liquid broth after a bioreactor run.

## 3. The Fouling Problem

The biggest engineering challenge in UF and MF is **Membrane Fouling**. 
As the membrane filters out proteins or bacteria, this sticky sludge builds up on the surface and eventually completely plugs the pores. The flux (flow rate) drops to zero.

**Mitigation Strategies:**
1.  **Cross-Flow Filtration:** Instead of pumping the feed dead-on into the membrane (like a coffee filter), the feed is pumped violently *parallel* to the membrane surface. The shear force of the rushing liquid continuously scours the membrane surface, sweeping the sludge away.
2.  **Backwashing:** Every 30 minutes, the pumps are reversed. Clean permeate is forced backward through the membrane, physically blowing the clogged dirt out of the pores.
3.  **Chemical Cleaning:** Once a day, the unit is shut down and washed with hot caustic soda ($NaOH$) and bleach to chemically dissolve organic foulants, followed by an acid wash to dissolve mineral scale.

## 4. Filtration Hierarchy

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "mf", "data": { "label": "Microfiltration", "icon": "Grid", "description": "Blocks suspended particles." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "uf", "data": { "label": "Ultrafiltration", "icon": "Filter", "description": "Blocks macromolecules (MWCO)." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "foul", "data": { "label": "Fouling", "icon": "AlertTriangle", "description": "Flux drops due to sludge." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "clean", "data": { "label": "Mitigation", "icon": "RefreshCcw", "description": "Cross-flow & Backwash." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "mf", "target": "uf", "animated": true },
    { "source": "uf", "target": "foul", "animated": true },
    { "source": "foul", "target": "clean", "animated": true }
  ]
}
```
