# Introduction to Chemical Reactors

If Chemical Kinetics (Module 9) tells us *how fast* a reaction occurs, **Reactor Design Engineering** is the discipline of building the physical machine to actually make it happen on an industrial scale.

The reactor is the beating heart of any chemical plant. Every other piece of equipment—the pumps, the distillation columns, the heat exchangers—exists solely to prepare the feed for the reactor, or to clean up the mess that comes out of it. 

If the reactor is designed poorly, the entire plant will fail.

## 1. The Core Equation of Reactor Design

Every single reactor in the world, from a 10-milliliter lab beaker to a 50,000-gallon oil refinery cracker, is governed by one fundamental macroscopic mass balance:

$$ \text{IN} - \text{OUT} + \text{GENERATION} = \text{ACCUMULATION} $$

Let's break this down for a specific chemical species $j$:
*   **IN ($F_{j0}$):** The molar flow rate of species $j$ entering the reactor (mol/s).
*   **OUT ($F_j$):** The molar flow rate of species $j$ leaving the reactor (mol/s).
*   **GENERATION ($G_j$):** The rate at which species $j$ is physically created (or destroyed) *inside* the reactor volume.
*   **ACCUMULATION ($\frac{dN_j}{dt}$):** The rate at which the total number of moles of $j$ is building up inside the reactor over time.

## 2. Defining Generation ($G_j$)

The "Generation" term links our macroscopic mass balance to the microscopic Chemical Kinetics we studied previously.

Remember that the reaction rate ($r_j$) is defined as moles generated per unit time *per unit volume*. 
Therefore, to find the total moles generated in the entire reactor per unit time ($G_j$), we must integrate the reaction rate over the physical volume ($V$) of the reactor:

$$ G_j = \int_{0}^{V} r_j \, dV $$

If the reactor is perfectly mixed (meaning the concentration and temperature are identical in every single drop of fluid everywhere inside the tank), then the reaction rate $r_j$ is perfectly uniform everywhere. This allows us to pull $r_j$ out of the integral:

$$ G_j = r_j \cdot V $$

This simplifies the math tremendously.

## 3. The Three Ideal Reactor Types

Real-world reactors are incredibly complex fluid dynamics nightmares. To make the math solvable for undergraduate engineers, we define three "Ideal" reactor models. Almost all real reactors behave closely enough to one of these three ideals that we can use them for initial design.

1.  **The Batch Reactor:** A closed pot. You put chemicals in, seal it, wait, and then empty it. There is no continuous flow in or out.
2.  **The Continuous Stirred-Tank Reactor (CSTR):** A continuously flowing tank with a massive agitator. We assume it is *perfectly* mixed, so the composition is uniform everywhere inside.
3.  **The Plug Flow Reactor (PFR):** A long, continuously flowing pipe. We assume the fluid flows like a solid plug, with no mixing backwards or forwards, but perfect mixing radially across the pipe.

In the next few modules, we will derive the specific design equations for each of these three ideal reactors.

## 4. The Universal Mass Balance

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "in", "data": { "label": "IN (Fj0)", "icon": "ArrowRight", "description": "Flow into reactor." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "gen", "data": { "label": "GENERATION (Gj)", "icon": "Activity", "description": "Moles created inside." }, "style": { "background": "#14532d", "color": "#dcfce7" } },
    { "id": "acc", "data": { "label": "ACCUMULATION", "icon": "Database", "description": "Total moles building up." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } },
    { "id": "out", "data": { "label": "OUT (Fj)", "icon": "ArrowRight", "description": "Flow out of reactor." }, "style": { "background": "#451a03", "color": "#fef3c7" } }
  ],
  "edges": [
    { "source": "in", "target": "acc", "animated": true },
    { "source": "gen", "target": "acc", "animated": true },
    { "source": "acc", "target": "out", "animated": true, "style": { "stroke": "#10b981", "strokeWidth": 2 } }
  ]
}
```
