# Conservation of Mass

The principle of Conservation of Mass is the bedrock of chemical engineering and process design. It dictates that mass can neither be created nor destroyed in a physical or chemical process (ignoring nuclear reactions). This fundamental truth allows engineers to track the flow of materials through complex industrial plants.

## 1. The General Balance Equation

The movement and transformation of mass in any defined region (a "system" or "control volume") is governed by the General Balance Equation:

$$ \text{Accumulation} = \text{Input} - \text{Output} + \text{Generation} - \text{Consumption} $$

Where:
- **Accumulation**: The rate of change of mass within the system boundary ($dm/dt$).
- **Input**: The rate at which mass enters the system.
- **Output**: The rate at which mass leaves the system.
- **Generation**: The rate at which mass is produced within the system (only applicable to specific chemical species in a reaction, not total mass).
- **Consumption**: The rate at which mass is consumed within the system (only applicable to reacting species).

When performing a total mass balance (tracking all matter regardless of chemical identity), Generation and Consumption are strictly zero, reducing the equation to:

$$ \text{Accumulation} = \text{Input} - \text{Output} $$

## 2. Steady-State vs. Unsteady-State

The behavior of the Accumulation term defines the operating state of the process:

### Steady-State Processes
A process is at steady-state when none of the process variables (temperatures, pressures, flow rates, concentrations) change with time. Because nothing is changing, there is no accumulation ($dm/dt = 0$). The total mass entering the system perfectly equals the total mass leaving it:

$$ \text{Input} = \text{Output} $$

*Example: A distillation column that has been running continuously for days with constant feed and constant heating.*

### Unsteady-State (Transient) Processes
A process is unsteady (or transient) when process variables change over time, resulting in a non-zero accumulation term. This means mass is either building up or depleting inside the system boundary. 

*Example: Filling a chemical storage tank with liquid, or the initial startup phase of a continuous reactor.*

## 3. Types of Processes

Chemical processes are generally categorized by how they handle mass flow over time:

1. **Batch Process**: Materials are fed into a vessel at the start. The process occurs over time, and the products are removed all at once at the end. No mass crosses the system boundaries during the process itself. (Unsteady-state by nature).
2. **Continuous Process**: Inputs and outputs flow continuously throughout the duration of the process. (Can be steady or unsteady).
3. **Semi-Batch Process**: Any process that is neither purely batch nor purely continuous. For example, slowly adding a reactant to a batch vessel over time, or allowing a gas to slowly escape a pressurized tank.

## 4. Total Mass vs. Component Balances

You can write balance equations for the total mass of the system, or for individual chemical species (components):

- **Total Mass Balance**: As mentioned, generation and consumption are zero. $\text{In} - \text{Out} = \text{Acc}$.
- **Component Balance**: For a specific chemical $A$, if a reaction occurs, generation or consumption must be included. If no reaction occurs, it simplifies to $\text{In}_A - \text{Out}_A = \text{Acc}_A$.

*Note on Moles: While total mass is always conserved, the total number of MOLES is not necessarily conserved during a chemical reaction (e.g., $N_2 + 3H_2 \rightarrow 2NH_3$ converts 4 moles of reactants into 2 moles of product).*

## 5. Mass Conservation Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "gen", "data": { "label": "General Balance", "icon": "Activity", "description": "Accum = In - Out." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "steady", "data": { "label": "Steady-State", "icon": "TrendingFlat", "description": "In = Out." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "unsteady", "data": { "label": "Unsteady-State", "icon": "TrendingUp", "description": "Accumulation." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "total", "data": { "label": "Mass vs Component", "icon": "Box", "description": "Total vs Species." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "gen", "target": "steady", "animated": true },
    { "source": "gen", "target": "unsteady", "animated": true },
    { "source": "gen", "target": "total", "animated": true }
  ]
}
```
