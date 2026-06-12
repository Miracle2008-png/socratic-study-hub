# Heat Transfer Equipment Design: Introduction

Heat transfer is one of the foundational operations in chemical and process engineering. From cooling hot reactor effluents to generating high-pressure steam, the efficient transfer of thermal energy between fluid streams is essential for plant operation and economics. 

## 1. The Core Objective

The fundamental equation governing heat transfer equipment design is:

$$Q = U A \Delta T_{lm}$$

Where:
- $Q$ = Total heat transfer rate (W)
- $U$ = Overall heat transfer coefficient (W/m²·K)
- $A$ = Heat transfer area (m²)
- $\Delta T_{lm}$ = Log-mean temperature difference (K)

The goal of the engineer is to achieve the required duty ($Q$) by designing an exchanger with sufficient area ($A$) while optimizing fluid velocities to maximise $U$ without exceeding allowable pressure drops.

## 2. Classification of Heat Exchangers

Heat exchangers can be classified by their flow arrangement and construction type:

### By Flow Arrangement
- **Parallel flow**: Hot and cold fluids enter at the same end and flow in the same direction. Least efficient, but limits the maximum temperature of the cold fluid.
- **Counter-flow**: Fluids flow in opposite directions. Most efficient; the cold fluid exit temperature can exceed the hot fluid exit temperature.
- **Cross-flow**: Fluids flow perpendicular to each other (common in air-cooled exchangers).
- **Multi-pass**: A combination of flow patterns to increase velocity and fit a large area into a compact shell.

### By Construction Type
- **Double-pipe (hairpin)**: One pipe concentric within another. Simple, used for small duties (< 50 m²).
- **Shell-and-tube**: The industry workhorse. A bundle of tubes enclosed in a cylindrical shell. Used for high pressures, high temperatures, and large duties.
- **Plate-and-frame**: Corrugated plates compressed together. Very high $U$, compact, easily expanded, but limited to moderate pressures and temperatures.
- **Air-cooled (fin-fan)**: Banks of finned tubes cooled by ambient air forced by large fans. Used when cooling water is scarce.
- **Compact heat exchangers**: Very high surface-area-to-volume ratios (> 700 m²/m³), often used in aerospace and cryogenics.

## 3. The Energy Balance

Before sizing the exchanger, the heat duty $Q$ must be determined from macroscopic energy balances on both fluid streams. Assuming no heat loss to the surroundings:

$$Q = \dot{m}_h c_{p,h} (T_{h,in} - T_{h,out}) = \dot{m}_c c_{p,c} (T_{c,out} - T_{c,in})$$

Where:
- $\dot{m}$ = mass flow rate (kg/s)
- $c_p$ = specific heat capacity (J/kg·K)
- $T$ = temperature (K or °C)
- Subscripts $h$ and $c$ denote hot and cold streams.

This equation assumes no phase change. If a stream condenses or boils, the latent heat ($\Delta H_{vap}$) must be included:
$$Q = \dot{m} \Delta H_{vap}$$

## 4. Heat Capacity Rates

It is convenient to define the **heat capacity rate** $C$ (W/K) for each stream:
$$C_h = \dot{m}_h c_{p,h} \quad \text{and} \quad C_c = \dot{m}_c c_{p,c}$$

The stream with the smaller heat capacity rate ($C_{\min}$) will experience the largest temperature change.

## 5. Overview of Design Methods

There are two primary methods for heat exchanger analysis and design:

1. **The LMTD (Log-Mean Temperature Difference) Method**: Used when all four inlet and outlet temperatures are known (or can be easily found from the energy balance). It directly calculates the required area $A$. This is a **sizing** problem.
2. **The Effectiveness-NTU Method**: Used when only the inlet temperatures and the exchanger area are known, and the outlet temperatures must be determined. This is a **rating** or **performance** problem.

We will explore both methods in detail in the following sections.

## 6. Exchanger Configurations

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "para", "data": { "label": "Parallel Flow", "icon": "ArrowRight", "description": "Least efficient." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "count", "data": { "label": "Counter Flow", "icon": "Repeat", "description": "Most efficient." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "st", "data": { "label": "Shell & Tube", "icon": "Box", "description": "High pressure/duty." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "pf", "data": { "label": "Plate & Frame", "icon": "Layers", "description": "High U, compact." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": []
}
```
