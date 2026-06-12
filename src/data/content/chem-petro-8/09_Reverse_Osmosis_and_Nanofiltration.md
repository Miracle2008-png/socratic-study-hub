# Reverse Osmosis and Nanofiltration

To purify liquid water, we use pressure-driven membrane processes. The defining characteristic of these processes is how tightly they reject dissolved solids.

## 1. Osmosis vs. Reverse Osmosis

**Osmosis (Nature's Way):**
If you place a semi-permeable membrane (which allows water to pass but blocks salt) between a tank of pure water and a tank of seawater, nature seeks to balance the concentrations. Pure water will spontaneously flow across the membrane *into* the seawater, diluting it.
As the water level rises on the seawater side, the physical weight of that water creates a hydrostatic pressure pushing back. When this hydrostatic pressure exactly balances the chemical driving force, the flow stops. This equilibrium pressure is the **Osmotic Pressure ($\pi$)**.
*   Seawater has an osmotic pressure of roughly $400 \text{ psi}$ ($27 \text{ atm}$).

**Reverse Osmosis (RO):**
To desalinate seawater, we must fight nature. We apply a mechanical pump to the seawater side. 
If we pump the seawater to a pressure *higher* than the osmotic pressure (e.g., $800 \text{ psi}$), we overcome the thermodynamic equilibrium and force water molecules to flow backward, from the salty side to the pure side, leaving the salt behind.
*   **Driving Force:** $\Delta P - \Delta \pi$
*   Water flux equation: $J_w = A_w (\Delta P - \Delta \pi)$ 
    (Where $A_w$ is the membrane permeability constant).

## 2. Reverse Osmosis Membranes

RO membranes do not have physical pores. They are dense polymer films (usually cross-linked aromatic polyamides) operating via the solution-diffusion mechanism.
*   Water molecules temporarily hydrogen-bond with the polymer chain and "swing" their way across the membrane.
*   Hydrated salt ions ($Na^+$, $Cl^-$) are physically too large and chemically incompatible with the polymer, so they are rejected (typically >99.5% rejection).
*   **Concentration Polarization:** As pure water is forced through the membrane, the rejected salt piles up on the membrane surface, creating a boundary layer of ultra-salty water. This locally increases the osmotic pressure ($\pi$), severely reducing the water flux ($J_w$) and increasing the chance of mineral scaling. Engineers must design modules with high cross-flow velocity to continuously sweep this salty boundary layer away.

## 3. Nanofiltration (NF)

Nanofiltration sits exactly halfway between Reverse Osmosis and Ultrafiltration. It is often called a "loose RO" membrane.

While RO membranes are dense, NF membranes have incredibly tiny pores (around 1 nanometer). The separation mechanism is a combination of size-exclusion (sieving) and electrostatic repulsion.

**Key Characteristic of NF:**
*   NF strongly rejects **multivalent ions** (like $Ca^{2+}$, $Mg^{2+}$, $SO_4^{2-}$).
*   NF mostly allows **monovalent ions** (like $Na^+$, $Cl^-$) to pass through.

**Applications of NF:**
*   **Water Softening:** Because it perfectly rejects Calcium and Magnesium (the minerals that cause "hard" water) but lets Sodium and Chloride pass, it is the ultimate water softener. It requires far less pumping pressure than full RO (operating at $\sim 100 \text{ psi}$ instead of $800 \text{ psi}$).
*   **Dye Removal:** In the textile industry, NF is used to recover toxic dyes from wastewater while allowing the harmless salt water to pass through.

## 4. Osmotic Principles

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "osm", "data": { "label": "Osmosis", "icon": "Droplet", "description": "Natural dilution." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "press", "data": { "label": "Osmotic Pressure", "icon": "Activity", "description": "Equilibrium limit." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "ro", "data": { "label": "Reverse Osmosis", "icon": "RotateCcw", "description": "Overcome pi with Pump." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "nf", "data": { "label": "Nanofiltration", "icon": "Filter", "description": "Softening, blocks Ca2+." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "osm", "target": "press", "animated": true },
    { "source": "press", "target": "ro", "animated": true },
    { "source": "ro", "target": "nf", "animated": true }
  ]
}
```
