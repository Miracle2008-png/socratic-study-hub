# Membrane Separation Processes

Membrane separations have revolutionized chemical processing, water treatment, and medical technology in the last fifty years. Unlike distillation (which requires massive thermal energy) or extraction (which requires chemical solvents), membranes use a physical barrier and a pressure or concentration gradient to achieve separation without phase changes.

## 1. Mechanisms of Membrane Separation

A membrane is a semi-permeable barrier. It allows some species to pass through (the **permeate**) while retaining others (the **retentate**). Separation occurs via three distinct mechanisms depending on the pore size:

**1. Size Exclusion (Sieving):**
Used in microfiltration (MF) and ultrafiltration (UF). The membrane has physical pores. Particles larger than the pore size are blocked; smaller molecules and water pass through. Separates bacteria, proteins, and suspended solids.

**2. Solution-Diffusion (Non-porous membranes):**
Used in Reverse Osmosis (RO) and gas separation. The membrane has *no permanent pores*. Transport occurs in three steps:
1.  The species dissolves into the upstream face of the solid polymer membrane.
2.  The species diffuses across the thickness of the membrane under a concentration or pressure gradient.
3.  The species desorbs from the downstream face.
Separation happens because different molecules have different solubilities in the polymer and diffuse at different rates.

**3. Knudsen Diffusion:**
Used in nanoporous gas separation. The pores are smaller than the mean free path of the gas molecules. Molecules collide with the pore walls far more often than with each other. Lighter molecules bounce through faster. (Used famously to enrich Uranium-235 for the Manhattan Project).

## 2. Reverse Osmosis (RO)

Reverse osmosis is the global standard for seawater desalination.

**Osmosis:** If fresh water and salt water are separated by a semi-permeable membrane (which passes water but blocks salt), water will spontaneously diffuse into the salty side to dilute it. This creates an **osmotic pressure ($\pi$)**. For seawater, $\pi \approx 25$ to 30 bar.

**Reverse Osmosis:** To extract fresh water from seawater, we apply a hydrostatic pressure ($\Delta P$) to the salty side that is *greater* than the osmotic pressure. This reverses the natural flow, forcing pure water through the membrane and leaving a concentrated brine behind.
$$ J_w = A_w (\Delta P - \Delta \pi) $$
Where $J_w$ is the water flux and $A_w$ is the membrane permeability. Typical operating pressures for seawater RO are 60–80 bar.

## 3. Gas Separation Membranes

Polymeric membranes can separate gas mixtures based on the Solution-Diffusion mechanism.

**Permeability ($P_i$):** A measure of how easily gas $i$ passes through the membrane. $P_i = S_i \times D_i$ (Solubility $\times$ Diffusivity).
**Selectivity ($\alpha_{ij}$):** The ratio of permeabilities of two gases: $\alpha_{ij} = P_i / P_j$.

*   **Air Separation:** Nitrogen enriched air (for fuel tank inerting) or oxygen enriched air (for medical use or combustion).
*   **Natural Gas Processing:** Removing $CO_2$ and $H_2S$ from methane. $CO_2$ permeates much faster through glassy polymers than $CH_4$, mostly because it is smaller and highly soluble in the polymer matrix.
*   **Hydrogen Recovery:** Recovering $H_2$ from ammonia purge gas or refinery streams.

## 4. Concentration Polarization and Fouling

The two greatest enemies of membrane processes:

**Concentration Polarization (CP):**
As water (or a fast-permeating gas) is pushed through the membrane, the rejected species (salt, proteins) pile up against the membrane surface. The concentration at the membrane wall ($C_m$) becomes much higher than the bulk concentration ($C_b$).
*   In RO, higher salt concentration at the wall means higher local osmotic pressure, which reduces the driving force ($\Delta P - \Delta \pi$) and lowers water flux.
*   CP is mitigated by increasing the cross-flow velocity of the feed fluid, which promotes turbulent mixing and sweeps the rejected species away.

**Fouling:**
The physical accumulation of solids, biological growth, or chemical scaling on the membrane surface or within the pores.
*   Irreversibly reduces membrane permeability over time.
*   Requires rigorous pre-treatment of the feed (filtering out particulates, adding anti-scalants) and periodic chemical cleaning (CIP - Clean In Place) of the membrane modules.
