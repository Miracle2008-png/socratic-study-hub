# Concept Drills & Examination Problems

Test your understanding of Advanced Separations (Extraction & Membranes) with these conceptual questions and engineering scenarios.

## Drill 1: The Extraction Trade-off
A chemical plant currently uses distillation to separate a 50/50 mixture of Acetic Acid and Water. The energy costs for steam are bankrupting the plant. A junior engineer suggests switching to Liquid-Liquid Extraction using ethyl acetate as a solvent to extract the acetic acid out of the water. 
1. If the extraction is highly successful and 99% of the acetic acid transfers into the ethyl acetate, has the separation problem been fully solved? Why or why not?
2. What physical property of ethyl acetate makes it a much better choice than distillation for separating this mixture? (Hint: Think about boiling points vs. water).

## Drill 2: Ternary Phase Diagrams
You are looking at a ternary phase diagram for Water (A), Chloroform (B), and Acetone (C). You plot the overall mixture point $M$, and it falls exactly on the binodal curve.
1. What will physically happen to this mixture in a separation funnel? Will it form one layer or two layers?
2. If you add just a few more drops of Acetone (the solute) to this mixture, what will happen? (Assume the binodal dome is at the bottom of the triangle and Acetone is at the top).

## Drill 3: Reverse Osmosis Physics
A desalination plant uses Reverse Osmosis (RO) to purify seawater. The seawater has an osmotic pressure of $400 \text{ psi}$. The high-pressure pumps are set to deliver $800 \text{ psi}$ of pressure.
1. What is the effective driving force pushing water through the membrane?
2. Over time, the operators notice the pure water production rate (flux) is slowly decreasing, even though the pumps are still delivering exactly $800 \text{ psi}$. What phenomenon is causing this, and how does it physically reduce the flux?

## Drill 4: Choosing the Right Membrane
Match the following industrial separation problems with the most appropriate membrane technology: *(Reverse Osmosis, Ultrafiltration, Microfiltration, Pervaporation, Electrodialysis).*
1. A brewery wants to remove yeast cells from their beer without heating it.
2. An electronics manufacturer needs to produce Ultra-Pure Water (UPW) from city tap water, removing all dissolved salts.
3. A chemical plant needs to break a 95% ethanol / 5% water azeotrope to produce 99.9% pure absolute ethanol for fuel blending.
4. A cheese factory wants to concentrate the large whey proteins from their milk by removing the water and lactose.
5. A soy sauce manufacturer wants to reduce the salt ($NaCl$) content of their premium sauce without removing any of the uncharged flavor molecules.

---

### Solutions

**Drill 1:**
1. **No, the problem is not fully solved.** You have successfully separated the acetic acid from the water, but now you have a new mixture: acetic acid and ethyl acetate (the Extract). You still have to separate *this* mixture to get pure acetic acid to sell. This is always done via a downstream distillation column. 
2. The advantage is that ethyl acetate has a much lower boiling point ($77^\circ\text{C}$) and lower latent heat of vaporization than water ($100^\circ\text{C}$). It takes far less energy (steam) to boil away the ethyl acetate solvent than it does to boil away the massive volume of water in the original mixture.

**Drill 2:**
1. Because the point is exactly on the boundary of the curve, it is at the absolute limit of solubility. It will form **one single phase** (a saturated solution). It has not crossed *into* the dome to form two layers.
2. Adding Acetone moves the mixture point straight up towards the Acetone corner. Because it moves *away* from the dome and deeper into the single-phase region, the mixture will comfortably remain as **one single phase**. (Acetone is mutually miscible with both water and chloroform, so it acts to bind them together).

**Drill 3:**
1. The driving force is the applied pressure minus the osmotic back-pressure: $\Delta P - \Delta \pi = 800 - 400 = \mathbf{400 \text{ psi}}$.
2. This is caused by **Concentration Polarization** (and eventually scaling/fouling). As pure water is pushed through the membrane, the rejected salt is left behind at the membrane surface. This highly concentrated boundary layer of salt has a much higher local osmotic pressure (e.g., $\pi$ rises to $600 \text{ psi}$). The new driving force becomes $800 - 600 = 200 \text{ psi}$, which causes the water flux to drop significantly.

**Drill 4:**
1. Removing yeast cells: **Microfiltration (MF)**. Yeast are large, suspended cells (a few microns in size), easily blocked by MF pores.
2. Removing all dissolved salts: **Reverse Osmosis (RO)**. Only RO (using solution-diffusion) can block monovalent ions like $Na^+$ and $Cl^-$.
3. Breaking the ethanol/water azeotrope: **Pervaporation**. Uses a hydrophilic membrane to selectively evaporate the water across the barrier while the ethanol remains liquid.
4. Concentrating whey proteins: **Ultrafiltration (UF)**. Proteins are macromolecules (10k - 100k Daltons) which are perfectly blocked by UF, while small lactose molecules and water pass through.
5. De-salting soy sauce: **Electrodialysis (ED)**. Applies a voltage to selectively pull only charged ions ($Na^+$, $Cl^-$) through ion-exchange membranes, completely ignoring the uncharged organic flavor compounds.

## Advanced Separations Summary

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "lle", "data": { "label": "LLE Economics", "icon": "AlertCircle", "description": "Balance heat vs solvent." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "tern", "data": { "label": "Phase Eq", "icon": "Triangle", "description": "Dome controls separation." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "press", "data": { "label": "Pressure Filtration", "icon": "Filter", "description": "Size exclusion & solution-diffusion." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "grad", "data": { "label": "Gradient Separation", "icon": "Activity", "description": "Voltage or Concentration." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": []
}
```
