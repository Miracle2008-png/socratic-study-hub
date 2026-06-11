# Alkylation and Polymerization

The Fluid Catalytic Cracker (FCC) is incredibly violent. When it smashes massive gas oil molecules in half, it doesn't just create liquid gasoline. It also shatters a large percentage of the oil into tiny, microscopic gas molecules (Propane, $C_3$, and Butane, $C_4$). 

Even worse, because the FCC rips hydrogen atoms away, these light gases are heavily unsaturated **Olefins** (Propylene and Butylene). They contain highly reactive double bonds.

You cannot put $C_3$ or $C_4$ gas into a liquid gasoline tank. It will instantly boil off into the atmosphere. The refinery is losing a massive amount of potential gasoline volume to these waste gases.

To solve this, the refinery engineers use a brilliant chemical trick. If "Cracking" is the act of breaking a big molecule into small pieces, **Alkylation** and **Polymerization** are the exact opposite. They take the tiny, worthless gas pieces and chemically stitch them together to build massive, premium liquid gasoline molecules from scratch.

## 1. Alkylation (The Ultimate Gasoline)

Alkylation is the chemical combination of a light Olefin (like Butylene, $C_4^=$) and a light Isoparaffin (like Isobutane, $iC_4$) to forge a massive, highly branched liquid Isoparaffin (Iso-octane, $C_8$).

$$ C_4H_8 \text{ (gas)} + C_4H_{10} \text{ (gas)} \rightarrow C_8H_{18} \text{ (liquid)} $$

### The Acid Catalyst
You cannot stitch molecules together with just heat. You need an incredibly powerful, highly concentrated liquid acid. 
Refineries use one of two terrifyingly dangerous acids:
1.  **Hydrofluoric Acid (HF):** An incredibly lethal, bone-eating acid. If an HF tank leaks, the acid forms a toxic, ground-hugging vapor cloud that can kill an entire city block. 
2.  **Sulfuric Acid ($H_2SO_4$):** Highly corrosive, but much safer because it remains a liquid if spilled.

### The Reactor
The Olefin and Isobutane gases are pumped into a massive reactor and violently mixed with the liquid acid. The mixture is refrigerated (chilled to $40^\circ\text{F}$ for $H_2SO_4$, or $90^\circ\text{F}$ for HF). 
The acid acts as a massive chemical hammer, forcing the double-bond of the Olefin to snap open and aggressively grab the Isobutane molecule.

### The Output (Alkylate)
The resulting liquid, called **Alkylate**, is the absolute crown jewel of the refinery. 
*   It has an astronomical Octane rating (95+).
*   It burns perfectly clean.
*   It contains absolutely zero Sulfur and zero toxic Aromatics.
It is the ultimate "perfect" blending stock used to make premium gasoline and aviation fuel.

## 2. Polymerization (The Cheaper Alternative)

Alkylation requires Isobutane. If a refinery produces massive amounts of Olefin gas from the FCC, but they do not have enough Isobutane to react it with, they cannot use Alkylation.

Instead, they use **Polymerization**.
Polymerization simply takes two light Olefin gas molecules (like two Propylenes) and stitches them directly to each other to make one liquid Olefin.

$$ C_3H_6 \text{ (gas)} + C_3H_6 \text{ (gas)} \rightarrow C_6H_{12} \text{ (liquid)} $$

### The Process
The Olefin gases are pumped at high pressure over a solid catalyst made of Phosphoric Acid on quartz chips. 
The acid forces the double bonds to link together, forming a longer chain.

### The Output (Poly-Gasoline)
The resulting liquid is called "Poly-Gasoline."
*   **The Advantage:** It is a very cheap way to turn waste gas into liquid fuel.
*   **The Disadvantage:** Because you stitched two Olefins together, the resulting liquid is *still* an Olefin. It contains a double bond. Olefins are chemically unstable. If you put poly-gasoline in a car's gas tank and let it sit for 6 months, the double bonds will react with oxygen and form a thick, sticky, brown plastic gum that will permanently destroy the fuel injectors. To prevent this, refineries must heavily dose the poly-gasoline with expensive chemical antioxidants before selling it.

## 3. Gas Upgrading Flow

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "olefin", "data": { "label": "FCC Waste Olefin Gas", "icon": "CloudFog", "description": "Highly reactive, double-bonded C3 and C4 gas that would otherwise be wasted." }, "style": { "background": "#451a03", "color": "#fef3c7" } },
    { "id": "iso", "data": { "label": "Isobutane Gas", "icon": "Cloud", "description": "A specific isoparaffin gas required for Alkylation." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "alky_rx", "data": { "label": "Alkylation Reactor", "icon": "FlaskConical", "description": "Lethal liquid acid (HF or H2SO4) violently forces the Olefin and Isobutane to fuse." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } },
    { "id": "poly_rx", "data": { "label": "Polymerization Reactor", "icon": "Layers", "description": "Solid Phosphoric acid forces two Olefin gases to fuse together." }, "style": { "background": "#0f172a", "color": "#e2e8f0" } },
    { "id": "alkylate", "data": { "label": "Alkylate (Perfect Fuel)", "icon": "ShieldCheck", "description": "Astronomical octane, 100% saturated, zero sulfur, liquid gasoline. The crown jewel." }, "style": { "background": "#14532d", "color": "#dcfce7" } },
    { "id": "poly", "data": { "label": "Poly-Gasoline", "icon": "AlertTriangle", "description": "Cheap liquid gasoline, but highly unstable. Will turn into sticky plastic gum if not treated with antioxidants." }, "style": { "background": "#b45309", "color": "#fef3c7" } }
  ],
  "edges": [
    { "source": "olefin", "target": "alky_rx", "animated": true },
    { "source": "iso", "target": "alky_rx", "animated": true },
    { "source": "olefin", "target": "poly_rx", "animated": true },
    { "source": "alky_rx", "target": "alkylate", "animated": true },
    { "source": "poly_rx", "target": "poly", "animated": true, "style": { "stroke": "#f59e0b" } }
  ]
}
```
