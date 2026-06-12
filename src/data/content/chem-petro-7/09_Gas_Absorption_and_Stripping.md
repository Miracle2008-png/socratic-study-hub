# Gas Absorption and Stripping

While distillation relies on the creation of a second phase through boiling, **Absorption** relies on the introduction of a completely foreign liquid solvent to selectively scrub a specific component out of a gas mixture. 
**Stripping** (or Desorption) is the exact reverse process: using a clean gas to strip a dissolved solute out of a liquid mixture.

These operations are crucial for environmental control (scrubbing $SO_2$ from flue gas), petrochemical refining (removing $H_2S$ from natural gas using amines), and product recovery.

## 1. The Physical Process

An absorption column is typically a vertical tower filled with random packing (like Raschig rings or Pall rings) or structured packing, rather than trays.
1.  A "dirty" gas mixture (the carrier gas + the solute to be removed) enters the bottom of the column and flows upwards.
2.  A clean, carefully selected liquid solvent enters the top of the column and flows downwards over the packing.
3.  The packing provides a massive surface area for the gas and liquid to interact. The soluble component transfers from the gas phase into the liquid phase.
4.  The "clean" gas exits the top. The "dirty" liquid (the solvent + the absorbed solute) exits the bottom.

## 2. Dilute Mixtures and Mass Ratios

In many industrial absorption applications, the solute makes up only a tiny fraction of the gas stream (e.g., 2% $CO_2$ in air). 
Because the solute is transferring from the gas to the liquid, the total molar flow rate of the gas ($V$) decreases as it travels up the column, and the total molar flow rate of the liquid ($L$) increases as it travels down.

Unlike distillation (where CMO allows us to assume $L$ and $V$ are constant), we cannot use mole fractions ($y$ and $x$) easily because $L$ and $V$ are changing.

To solve this, engineers define variables based on the **solute-free carrier streams**.
Let:
*   $V'$ = Molar flow rate of the inert, insoluble carrier gas (constant throughout the column).
*   $L'$ = Molar flow rate of the pure, non-volatile solvent (constant throughout the column).

Instead of mole fractions, we use **Mole Ratios** ($Y$ and $X$):
*   $Y = \frac{\text{moles of solute}}{\text{moles of carrier gas}}$
*   $X = \frac{\text{moles of solute}}{\text{moles of pure solvent}}$

*(Note: $Y = \frac{y}{1-y}$ and $X = \frac{x}{1-x}$. For very dilute mixtures, $Y \approx y$ and $X \approx x$).*

## 3. The Equilibrium Line (Henry's Law)

Just as distillation requires VLE, absorption requires gas-liquid solubility data. For dilute mixtures, the equilibrium relationship is almost always linear, governed by **Henry's Law**:

$$ p_A = H \cdot x_A $$
Where $p_A$ is the partial pressure of the solute, $H$ is the Henry's Law constant, and $x_A$ is the liquid mole fraction.

We can convert this into mole ratios for plotting. For dilute mixtures at constant total pressure $P$:
$$ y_A = \frac{H}{P} x_A $$
$$ Y = m \cdot X $$
*(Where $m \approx H/P$ for dilute systems).*

On a graph of $Y$ vs. $X$, the equilibrium curve for absorption is typically a **straight line passing through the origin**, with slope $m$.
*   A **highly soluble gas** has a very small $m$, meaning the equilibrium line is very flat. This is ideal for absorption.
*   A **highly insoluble gas** has a very large $m$, meaning the equilibrium line is steep.

## 4. Stripping Operations

Stripping uses the exact same thermodynamics, just in reverse.
*   A dirty liquid enters the top of the column.
*   A clean, inert stripping gas (like steam or nitrogen) enters the bottom.
*   The solute transfers from the liquid into the gas.
*   For stripping to be effective, we want the solute to be relatively *insoluble* in the liquid at the operating conditions. Therefore, stripping columns are usually operated at **high temperatures** and **low pressures** (the exact opposite of absorption columns, which prefer low temperatures and high pressures).

## 5. Absorption Mechanics

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "gasin", "data": { "label": "Dirty Gas In", "icon": "CloudRain", "description": "Bottom entry." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "liqin", "data": { "label": "Solvent In", "icon": "Droplet", "description": "Top entry." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "pack", "data": { "label": "Packed Bed", "icon": "Grid", "description": "Continuous mass transfer." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "out", "data": { "label": "Products Out", "icon": "Layers", "description": "Clean gas top, Dirty liquid bottom." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "gasin", "target": "pack", "animated": true },
    { "source": "liqin", "target": "pack", "animated": true },
    { "source": "pack", "target": "out", "animated": true }
  ]
}
```
