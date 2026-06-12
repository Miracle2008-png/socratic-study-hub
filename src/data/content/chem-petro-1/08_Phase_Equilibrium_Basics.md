# Phase Equilibrium Basics

Many chemical engineering processes, such as distillation, extraction, and flash vaporization, rely on separating mixtures by moving chemical species between different physical phases (e.g., from liquid to gas). To perform material balances on these units, we must understand Phase Equilibrium.

## 1. Vapor Pressure ($P^*$)

The vapor pressure of a pure liquid is the pressure exerted by its vapor when the liquid and vapor are in equilibrium at a specific temperature. 
- It is a strong function of temperature: as temperature increases, vapor pressure increases exponentially.
- When the vapor pressure equals the surrounding ambient pressure, the liquid boils.

The **Antoine Equation** is an empirical formula used to calculate the vapor pressure of pure substances at a given temperature $T$:
$$ \log_{10} P^* = A - \frac{B}{T + C} $$

Where:
- **$P^*$**: The pure vapor pressure of the substance.
- **$T$**: The temperature of the system.
- **$A, B, C$**: Empirical, substance-specific constants found in thermodynamics tables.

## 2. Raoult's Law

For an ideal mixture of liquids (like a mixture of similar hydrocarbons, e.g., benzene and toluene), the relationship between the liquid composition and the vapor composition at equilibrium is described by Raoult's Law.

For any component $i$ in the mixture:
$$ y_i P_{\text{total}} = x_i P^*_i(T) $$

Where:
- **$y_i$**: Mole fraction of component $i$ in the **vapor phase**.
- **$x_i$**: Mole fraction of component $i$ in the **liquid phase**.
- **$P_{\text{total}}$**: The total system pressure.
- **$P^*_i(T)$**: The pure vapor pressure of component $i$ at the system temperature.

### Bubble Point and Dew Point
- **Bubble Point**: The temperature (at a given pressure) at which the first bubble of vapor forms in a liquid mixture. $\sum y_i = 1$.
- **Dew Point**: The temperature (at a given pressure) at which the first drop of liquid condenses from a vapor mixture. $\sum x_i = 1$.

## 3. Henry's Law

Raoult's law applies primarily to species that are highly concentrated in the liquid phase. For species that are very dilute (like a small amount of oxygen dissolved in water, or trace gas absorption), **Henry's Law** is more accurate:

$$ y_i P_{\text{total}} = x_i H_i(T) $$

Where:
- **$y_i$**: Mole fraction of component $i$ in the vapor phase.
- **$x_i$**: Mole fraction of component $i$ in the liquid phase.
- **$P_{\text{total}}$**: Total system pressure.
- **$H_i(T)$**: The Henry's Law constant for species $i$ in a specific solvent at a given temperature.

## 4. Gas-Liquid Separation (Flash Drums)

A flash drum is a vessel where a pressurized liquid feed is suddenly dropped to a lower pressure, causing a fraction of it to instantly vaporize ("flash").
The liquid product and vapor product leave the drum in equilibrium.

To solve a flash drum material balance, you must simultaneously solve:
1. The overall mass balance ($F = V + L$)
2. The component mass balances ($F z_i = V y_i + L x_i$)
3. The equilibrium relationships for every component ($y_i P = x_i P^*_i$)

This creates a system of non-linear equations that often requires iterative calculation or computer solvers to find the exact amounts of Vapor ($V$) and Liquid ($L$) produced.

## 5. Phase Equilibrium Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "vp", "data": { "label": "Vapor Pressure", "icon": "Activity", "description": "Antoine Eq." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "raoult", "data": { "label": "Raoult's Law", "icon": "Circle", "description": "Ideal mixtures." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "henry", "data": { "label": "Henry's Law", "icon": "Box", "description": "Dilute species." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "flash", "data": { "label": "Flash Drums", "icon": "Layers", "description": "Separation." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "vp", "target": "raoult", "animated": true },
    { "source": "raoult", "target": "henry", "animated": true },
    { "source": "vp", "target": "flash", "animated": true }
  ]
}
```
