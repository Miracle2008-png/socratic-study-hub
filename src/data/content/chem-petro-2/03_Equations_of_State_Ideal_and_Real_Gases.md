# Equations of State: Ideal and Real Gases

An Equation of State (EOS) is a mathematical formula relating the pressure, molar volume, and temperature ($P-V-T$) of a fluid. Because experimental data cannot be collected for every conceivable condition, an EOS allows engineers to calculate fluid properties computationally.

## 1. The Ideal Gas Law

The simplest equation of state is the Ideal Gas Law:
$$ PV = nRT \quad \text{or} \quad P = \rho R T $$

Where:
- **$P$**: Pressure.
- **$V$**: Volume.
- **$n$**: Number of moles.
- **$R$**: Universal gas constant.
- **$T$**: Absolute temperature.
- **$\rho$**: Molar density ($n/V$).

This model makes two major assumptions:
1. Gas molecules have zero physical volume (point masses).
2. Gas molecules exert zero intermolecular attractive or repulsive forces on each other.

The ideal gas law is highly accurate at **low pressures** (where molecules are far apart) and **high temperatures** (where molecules move too fast for weak attractions to matter). It breaks down catastrophically at high pressures or near the condensation point.

## 2. Real Gases and the Compressibility Factor ($Z$)

To account for the non-ideal behavior of real gases, engineers introduce the **Compressibility Factor ($Z$)**:

$$ Z = \frac{PV}{RT} $$

Where:
- **$Z$**: Compressibility factor.
- **$P$**: Pressure.
- **$V$**: Molar volume.
- **$R$**: Universal gas constant.
- **$T$**: Absolute temperature.

For an ideal gas, $Z = 1$ under all conditions. For real gases, $Z$ deviates from 1.
- **$Z < 1$**: Intermolecular *attractive* forces dominate. The gas compresses more easily than an ideal gas.
- **$Z > 1$**: Molecular *size* (repulsive forces) dominates. The gas is harder to compress than an ideal gas (typical at very high pressures).

## 3. The Theorem of Corresponding States

Finding $Z$ for every chemical species would be tedious. In 1920, Pitzer proposed the Theorem of Corresponding States, which argues that if you scale $P, V,$ and $T$ by their values at the critical point, all fluids behave similarly.

These scaled variables are called **Reduced Properties**:
- Reduced Pressure: $P_r = P / P_c$
- Reduced Temperature: $T_r = T / T_c$

The theory states that any two fluids with the same $P_r$ and $T_r$ will have roughly the same compressibility factor $Z$.

## 4. The Acentric Factor ($\omega$)

While the simple corresponding states theorem works well for spherical molecules (like Argon or Methane), it fails for large, polar, or non-spherical molecules (like water or long hydrocarbons). 

To correct this, Pitzer introduced the **Acentric Factor ($\omega$)**, a parameter that quantifies the non-sphericity of a molecule's force field. 

$$ \omega = -1.0 - \log_{10}(P_r^{\text{sat}})_{T_r = 0.7} $$

Where:
- **$\omega$**: Acentric factor.
- **$P_r^{\text{sat}}$**: Reduced vapor pressure at a reduced temperature of $T_r = 0.7$.

Using $P_r, T_r,$ and $\omega$, engineers can read highly accurate values of $Z$ from generalized compressibility charts, allowing them to solve the real gas law ($PV = ZRT$) for virtually any chemical compound without needing specific experimental data.

## 5. Gas Models Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "ideal", "data": { "label": "Ideal Gas", "icon": "Circle", "description": "No interactions." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "real", "data": { "label": "Real Gases", "icon": "Activity", "description": "Z-factor." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "corr", "data": { "label": "Corresponding States", "icon": "Maximize2", "description": "Reduced vars." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "acentric", "data": { "label": "Acentric Factor", "icon": "Aperture", "description": "Non-sphericity." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "ideal", "target": "real", "animated": true },
    { "source": "real", "target": "corr", "animated": true },
    { "source": "corr", "target": "acentric", "animated": true }
  ]
}
```
