# 11. Hydrology and Runoff Routing

## 1. Introduction to Hydrology

While fluid mechanics deals with the physics of water in pipes and channels, **Hydrology** evaluates how much water is actually available to enter those systems. It is the study of the occurrence, distribution, and movement of water on Earth. In civil engineering, hydrology is the fundamental first step in designing storm sewers, culverts, spillways, and flood defenses. You cannot design a channel until you know the peak discharge ($Q_p$) it must carry.

## 2. The Hydrologic Cycle and Catchments

The hydrologic cycle comprises precipitation, evaporation, transpiration, infiltration, groundwater flow, and surface runoff. For engineers, the focus is typically on a specific geographic area known as a **Catchment** (or watershed/drainage basin). All precipitation falling within a catchment topographically drains to a single outlet point.

When rain falls, some water infiltrates the soil, some is trapped in depressions, and some evaporates. The remainder flows overland as **Direct Runoff**. 

### Time of Concentration ($t_c$)
The Time of Concentration is the time required for a drop of water to travel from the most hydraulically remote point in the catchment to the outlet. Peak flow occurs when rain has been falling continuously for a duration equal to $t_c$, meaning the entire catchment is simultaneously contributing to the outlet.

## 3. The Rational Method

The Rational Method is the simplest and most widely used technique for estimating peak surface runoff from small catchments (typically $< 1 \text{ km}^2$), such as urban subdivisions and parking lots.
$$ Q_p = C \cdot i \cdot A $$
where:
- $Q_p$ = Peak discharge
- $C$ = Runoff coefficient (dimensionless, representing the fraction of rainfall that becomes runoff. Concrete $\approx 0.90$, Forest $\approx 0.15$)
- $i$ = Rainfall intensity for a duration equal to $t_c$
- $A$ = Catchment Area

*(Note: Depending on the units used, a conversion factor is often required. If $i$ is in $\text{mm/hr}$ and $A$ in hectares (ha), $Q_p$ in $\text{m}^3\text{/s}$ requires dividing by $360$).*

---

### Example 1: Rational Method Peak Flow
**Problem:** An urban commercial development covers an area of $5 \text{ hectares}$ ($50,000 \text{ m}^2$). The composite runoff coefficient $C$ is estimated to be $0.85$. The time of concentration is $15 \text{ minutes}$. According to local Intensity-Duration-Frequency (IDF) curves, the 50-year return period rainfall intensity for a 15-minute duration is $120 \text{ mm/hr}$. Calculate the peak runoff to design the main storm sewer.

**Solution:**
Using the metric formulation of the Rational Equation:
$$ Q_p = \frac{C \cdot i \cdot A}{360} $$
where $i$ is in $\text{mm/hr}$ and $A$ is in hectares.

$$ Q_p = \frac{0.85 \times 120 \times 5}{360} = \frac{510}{360} = 1.417 \text{ m}^3\text{/s} $$
The storm sewer must be sized to handle approximately $1.42 \text{ m}^3\text{/s}$.

---

## 4. Hydrographs and Unit Hydrograph Theory

For larger catchments, peak flow alone is insufficient. Engineers need the entire **Runoff Hydrograph**, a graph showing Discharge ($Q$) vs. Time ($t$). This shows the rising limb, the peak, and the recession limb of the flood wave.

The **Unit Hydrograph** is a linear transfer function for a catchment. It represents the hydrograph resulting from exactly $1 \text{ cm}$ (or $1 \text{ inch}$) of effective rainfall (runoff) generated uniformly over the catchment at a constant rate for a specified duration.
By principles of superposition and proportionality, if $1 \text{ cm}$ of rain produces a peak of $10 \text{ m}^3\text{/s}$, $3 \text{ cm}$ of rain will produce a peak of $30 \text{ m}^3\text{/s}$ at the same time.

---

### Example 2: Unit Hydrograph Proportionality
**Problem:** A 2-hour unit hydrograph ($1 \text{ cm}$ of effective rainfall) for a small basin has the following ordinates at 2-hour intervals ($t = 0, 2, 4, 6, 8 \text{ hrs}$): $0, 25, 40, 15, 0 \text{ m}^3\text{/s}$. A storm produces $3 \text{ cm}$ of effective rainfall uniformly over the basin over a 2-hour period. Determine the resulting direct runoff hydrograph ordinates.

**Solution:**
Since the duration of the storm matches the duration of the unit hydrograph (2 hours), we simply multiply the unit hydrograph ordinates by the depth of effective rainfall ($3 \text{ cm}$).

- $t = 0$: $0 \times 3 = 0 \text{ m}^3\text{/s}$
- $t = 2$: $25 \times 3 = 75 \text{ m}^3\text{/s}$
- $t = 4$: $40 \times 3 = 120 \text{ m}^3\text{/s}$
- $t = 6$: $15 \times 3 = 45 \text{ m}^3\text{/s}$
- $t = 8$: $0 \times 3 = 0 \text{ m}^3\text{/s}$

The peak discharge for this storm is $120 \text{ m}^3\text{/s}$, occurring at $t = 4 \text{ hours}$.

---

## 5. Reservoir Routing

When a flood hydrograph enters a reservoir, the peak outflow is lower than the peak inflow, and it occurs later in time. This attenuation and delay is called **Routing**. It is the primary purpose of flood-control dams and urban stormwater detention ponds.

The fundamental continuity equation for routing is:
$$ I - O = \frac{dS}{dt} $$
where $I$ is Inflow rate, $O$ is Outflow rate, and $\frac{dS}{dt}$ is the rate of change of Storage.

For numerical calculation, this is written in discrete time steps ($\Delta t$):
$$ \left( \frac{I_1 + I_2}{2} \right) - \left( \frac{O_1 + O_2}{2} \right) = \frac{S_2 - S_1}{\Delta t} $$
By rearranging knowns (time 1) to the left side and unknowns (time 2) to the right side, engineers use the **Storage-Indication Method** to incrementally calculate the outflow hydrograph over time.

---

### Example 3: Reservoir Routing Step
**Problem:** At $t = 0$, a detention pond is empty ($S_1 = 0$, $O_1 = 0$). Over the first time step ($\Delta t = 600 \text{ s}$), the inflow hydrograph values are $I_1 = 0 \text{ m}^3\text{/s}$ and $I_2 = 4 \text{ m}^3\text{/s}$. Based on the pond's geometry and outlet weir, the Storage-Indication curve ($\frac{2S}{\Delta t} + O$) value at an outflow of $O_2 = 1.0 \text{ m}^3\text{/s}$ happens to be exactly $4.0 \text{ m}^3\text{/s}$. Find the outflow $O_2$ at the end of the time step.

**Solution:**
1. Write the rearranged routing equation:
$$ I_1 + I_2 + \left( \frac{2S_1}{\Delta t} - O_1 \right) = \left( \frac{2S_2}{\Delta t} + O_2 \right) $$

2. Determine the left side (all knowns at $t=1$):
Since the pond is initially empty, $S_1 = 0$ and $O_1 = 0$.
$$ Left = 0 + 4 + 0 = 4.0 \text{ m}^3\text{/s} $$

3. Determine the right side (unknowns at $t=2$):
We need to find an $O_2$ such that $\left( \frac{2S_2}{\Delta t} + O_2 \right) = 4.0$. 
The problem states that when $\left( \frac{2S}{\Delta t} + O \right) = 4.0$, the corresponding outflow is $O = 1.0 \text{ m}^3\text{/s}$.

Therefore, $O_2 = 1.0 \text{ m}^3\text{/s}$. 
Notice how the inflow was $4.0 \text{ m}^3\text{/s}$, but the pond absorbed the volume, releasing only $1.0 \text{ m}^3\text{/s}$.

## Conclusion
Hydrology forms the boundary conditions for hydraulic models. Mastering rainfall-runoff transformations and reservoir routing is crucial to protecting infrastructure and civilian populations from catastrophic flood events.

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "Hydro", "label": "Hydrology & Routing"},
    {"id": "Cycle", "label": "Hydrologic Cycle\\n(Precipitation, Runoff)"},
    {"id": "Rational", "label": "Rational Method\\n(Q = CiA)"},
    {"id": "Hydrograph", "label": "Hydrographs\\n(Q vs. Time)"},
    {"id": "Unit", "label": "Unit Hydrograph\\n(1 cm effective rain)"},
    {"id": "Routing", "label": "Reservoir Routing\\n(I - O = dS/dt)"}
  ],
  "edges": [
    {"from": "Hydro", "to": "Cycle"},
    {"from": "Cycle", "to": "Rational"},
    {"from": "Cycle", "to": "Hydrograph"},
    {"from": "Hydrograph", "to": "Unit"},
    {"from": "Hydrograph", "to": "Routing"}
  ]
}
```
