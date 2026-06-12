# Single Unit Balances

Applying the conservation of mass to a single piece of process equipment (like a mixer, splitter, separator, or reactor) is the first step in solving complex chemical engineering problems. 

## 1. Flowcharts and System Boundaries

Before writing any equations, you must draw a clear flowchart. The flowchart is a visual map of the process that organizes all known and unknown information.

1. **Draw the Unit**: Represent the process unit with a simple box.
2. **Draw the Streams**: Draw arrows for all input streams entering the box and output streams leaving it.
3. **Label the Streams**: Assign variables and values to the flow rates (mass or molar) and compositions (mass fractions or mole fractions) of every stream.
4. **Draw the System Boundary**: Draw a dashed line around the unit. The balance equations will only track the streams that cross this specific boundary.

## 2. Degrees of Freedom Analysis (NDF)

A Degrees of Freedom (DOF) analysis tells you whether a problem is solvable with the information given. 

$$ NDF = N_{\text{unknowns}} - N_{\text{independent equations}} - N_{\text{other relations}} $$

- **$N_{\text{unknowns}}$**: The number of unknown variables on your flowchart.
- **$N_{\text{independent equations}}$**: The maximum number of independent material balances you can write. For a non-reacting system, this is equal to the number of distinct chemical species involved.
- **$N_{\text{other relations}}$**: Extra information given in the problem statement, such as split ratios, recovery percentages, or physical constraints (e.g., all mass fractions in a stream must sum to 1.0).

### Interpreting the NDF
- **If NDF = 0**: The problem is perfectly specified. You have exactly as many equations as unknowns. You can solve it.
- **If NDF > 0**: The problem is underspecified. You are missing information. You cannot solve it without making assumptions or finding more data.
- **If NDF < 0**: The problem is overspecified. You have more equations than unknowns, meaning there is redundant information (which might be contradictory). 

## 3. Basis of Calculation

When a problem specifies compositions but no actual flow rates, or asks for ratios (like "what fraction of the feed is recovered?"), you should choose a **Basis of Calculation**.

A basis is an assumed amount or flow rate of one stream (usually the feed) that makes the math easier. 
- *Example: Assume 100 kg/hr of total feed.*
- *Example: Assume 100 moles of an input gas mixture.*

Once the problem is solved based on this assumption, you can scale all other flows linearly to match any real-world flow rate.

## 4. Solving Non-Reacting Systems

For single units like mixers, splitters, distillation columns, and filters where no chemical reactions occur:

1. Perform a DOF analysis to ensure NDF = 0.
2. Choose a basis of calculation if needed.
3. Write the total mass balance.
4. Write the component mass balances. (Remember, if there are $N$ components, you can only write $N$ independent equations. The total mass balance counts as one of them, leaving $N-1$ component balances).
5. Use algebra or linear matrices to solve the system of equations.

## 5. Single Unit Balance Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "flow", "data": { "label": "Flowchart", "icon": "Map", "description": "Map process." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "dof", "data": { "label": "Degrees of Freedom", "icon": "Target", "description": "NDF." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "basis", "data": { "label": "Basis of Calculation", "icon": "PieChart", "description": "Assume feed." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "solve", "data": { "label": "Solve", "icon": "Activity", "description": "Mass balances." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "flow", "target": "dof", "animated": true },
    { "source": "dof", "target": "basis", "animated": true },
    { "source": "basis", "target": "solve", "animated": true }
  ]
}
```
