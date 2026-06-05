# Adsorption and Chromatography

When separation requires targeting very low concentrations of a specific molecule, or when molecules are too similar for distillation or extraction, engineers use solid surfaces. **Adsorption** involves the selective binding of molecules from a fluid onto the surface of a porous solid.

## 1. Adsorption Fundamentals

Do not confuse *adsorption* (binding to a surface) with *absorption* (dissolving into the bulk of a liquid or solid).

**The Adsorbent:** A highly porous solid with a massive internal surface area.
*   *Activated Carbon:* Made by roasting organic material (coal, coconut shells). Tremendous surface area (1,000–3,000 m²/g). Highly non-polar; excellent at removing organic contaminants from water or air.
*   *Zeolites (Molecular Sieves):* Crystalline aluminosilicates with precisely uniform, atom-sized pores (e.g., 0.3 nm, 0.4 nm). They can separate molecules strictly by size—if a molecule is slightly larger than the pore, it cannot enter. Highly polar; excellent for drying gases (removing water).
*   *Silica Gel:* Highly polar; used as a desiccant.

**The Adsorbate:** The species being removed from the fluid.

**Mechanisms:**
*   **Physisorption:** Molecules are held to the surface by weak Van der Waals forces. Reversible by heating or lowering pressure. Heat of adsorption is low (similar to heat of vaporization).
*   **Chemisorption:** Molecules form actual covalent or ionic chemical bonds with the surface. Highly specific, often irreversible. High heat of adsorption.

## 2. Adsorption Isotherms

An isotherm relates the amount of adsorbate bound to the solid ($q$, mass of adsorbate per mass of solid) to the concentration of the adsorbate in the fluid ($C$ or $P$) at equilibrium, at a constant temperature.

**1. Linear Isotherm:** $q = K_H C$
Valid only at very low concentrations.

**2. Langmuir Isotherm:**
Assumes a finite number of active sites on the surface, and that adsorption stops when a monolayer covers the surface.
$$ q = \frac{q_{max} K C}{1 + K C} $$
At high concentrations, the surface saturates, and $q$ approaches $q_{max}$.

**3. Freundlich Isotherm:**
An empirical model that works well for highly heterogeneous surfaces like activated carbon, where some binding sites are much stronger than others.
$$ q = K_f C^{1/n} $$

## 3. Fixed-Bed Adsorption (Breakthrough Curve)

Industrial adsorption is typically run continuously in a **fixed bed**—a cylindrical column packed with adsorbent pellets.

1.  Contaminated fluid enters the top. The top layer of adsorbent quickly saturates.
2.  The active region where mass transfer is occurring—the **Mass Transfer Zone (MTZ)**—moves slowly down the column. Above the MTZ, the bed is exhausted. Below the MTZ, the bed is fresh.
3.  Eventually, the leading edge of the MTZ reaches the exit of the column. The concentration of contaminant in the exiting fluid suddenly spikes. This is called **breakthrough**.
4.  At breakthrough, the column must be taken offline and regenerated (usually by routing the feed to a parallel, fresh column).

## 4. Pressure Swing Adsorption (PSA)

How do we regenerate the exhausted bed? We could heat it (Temperature Swing Adsorption, TSA), but heating and cooling a massive steel column of solid pellets is slow and energy-intensive.

**Pressure Swing Adsorption (PSA)** exploits the fact that gas adsorption capacity is highly pressure-dependent.
1.  **Adsorption Step:** Run the feed gas through the bed at high pressure. The target gas strongly adsorbs. The product gas passes through.
2.  **Blowdown/Desorption Step:** Drop the pressure in the column to near-vacuum. The adsorbed gas immediately desorbs and is exhausted.
3.  **Repressurization:** Bring the column back to pressure and repeat.

PSA cycles are very fast (seconds to minutes). PSA is the primary technology for producing medical oxygen (concentrating O₂ from air using zeolites that preferentially adsorb N₂) and purifying hydrogen in oil refineries.

## 5. Chromatography

Chromatography is essentially continuous, differential adsorption used to separate multi-component mixtures.

A pulse of the mixture is injected into a flowing carrier fluid (mobile phase) passing through a column packed with adsorbent (stationary phase).
*   Molecules that have a strong affinity for the stationary phase spend most of their time bound to the solid, moving very slowly down the column.
*   Molecules with a weak affinity spend most of their time in the mobile phase, traveling quickly.
*   Because they travel at different speeds, the components separate into distinct bands and exit the column at different times.

Used predominantly for analytical chemistry (Gas Chromatography - GC, High-Performance Liquid Chromatography - HPLC), but also scaled up for high-value pharmaceutical purification (simulated moving bed chromatography).
