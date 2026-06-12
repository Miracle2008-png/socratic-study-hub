# Gas Permeation and Pervaporation

While liquid filtration separates based on physical size, separating gases or evaporating liquids through a membrane relies on complex molecular interactions within the polymer itself.

## 1. Gas Permeation

Gas permeation is used to separate mixtures of gases. Common applications include:
*   Separating nitrogen from air (for inerting tanks or food packaging).
*   Removing $CO_2$ from natural gas (sweetening).
*   Recovering hydrogen from refinery purge gases.

**The Solution-Diffusion Model:**
In most gas separation membranes, there are no physical "pores" or holes. The membrane is a dense, solid film of polymer. Gases pass through via the **Solution-Diffusion mechanism**:
1.  **Sorption (Solution):** The gas molecule dissolves into the solid polymer at the high-pressure feed face. This depends on the chemical affinity between the gas and the polymer (Solubility, $S$).
2.  **Diffusion:** The dissolved gas molecule physically wriggles its way through the microscopic free-volume gaps between the polymer chains, driven by the pressure gradient. Smaller molecules wriggle faster (Diffusivity, $D$).
3.  **Desorption:** The gas molecule reaches the low-pressure permeate face and evaporates out of the polymer.

The total Permeability ($P$) of a gas is the product of its Solubility and Diffusivity:
$$ P = S \times D $$

**Selectivity in Gas Permeation:**
To separate $CO_2$ from $CH_4$ (natural gas), you choose a polymer where $CO_2$ is either much more soluble than methane, or diffuses much faster because it is physically smaller.
$$ \alpha_{A/B} = \frac{P_A}{P_B} = \left(\frac{S_A}{S_B}\right) \times \left(\frac{D_A}{D_B}\right) $$
*   *Mobility selectivity* ($D_A/D_B$) favors small molecules (like $H_2$ or $He$).
*   *Solubility selectivity* ($S_A/S_B$) favors condensable, polar molecules (like $CO_2$ or $H_2S$).

## 2. Pervaporation

**Pervaporation** is a unique hybrid process: the feed is a liquid, but the permeate is a vapor.
It is primarily used to separate azeotropic mixtures (like 95% ethanol and 5% water) that cannot be separated by standard distillation.

**The Process:**
1.  A liquid mixture (e.g., 95% ethanol, 5% water) at atmospheric pressure is heated and pumped across a specialized hydrophilic (water-loving) membrane.
2.  A hard vacuum is pulled on the permeate side of the membrane.
3.  The water molecules selectively dissolve into the membrane, diffuse across, and instantly flash into vapor on the vacuum side.
4.  The retentate (which stays liquid) becomes 99.5% pure anhydrous ethanol.

**Why it works:**
The separation is not driven by boiling point (volatility). It is driven entirely by the polymer's chemical affinity. A hydrophilic polymer "loves" water and "hates" ethanol, so only the water is allowed to dissolve and pass through.

Pervaporation is incredibly energy-efficient compared to azeotropic distillation (which requires adding a toxic third component like benzene to break the azeotrope and massive amounts of steam). In pervaporation, you only supply the latent heat of vaporization for the 5% water that crosses the membrane, not the 95% ethanol that stays behind.

## 3. Solution-Diffusion Model

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "sorp", "data": { "label": "Sorption (Solubility)", "icon": "Droplet", "description": "Molecule dissolves into polymer." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "diff", "data": { "label": "Diffusion (Mobility)", "icon": "Activity", "description": "Wriggling through chains." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "desorp", "data": { "label": "Desorption", "icon": "Wind", "description": "Molecule leaves membrane." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "perv", "data": { "label": "Pervaporation", "icon": "Filter", "description": "Liquid feed -> Vapor permeate." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "sorp", "target": "diff", "animated": true },
    { "source": "diff", "target": "desorp", "animated": true },
    { "source": "desorp", "target": "perv", "animated": true }
  ]
}
```
