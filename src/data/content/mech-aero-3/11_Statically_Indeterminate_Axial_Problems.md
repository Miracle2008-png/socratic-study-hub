---
title: "Statically Indeterminate Axially Loaded Members"
---

# Statically Indeterminate Axially Loaded Members

In statics, we encountered problems where the number of unknown support reactions exceeded the number of available equilibrium equations. We called these structures **statically indeterminate**. Statics alone is useless for solving them.

Mechanics of Materials provides the missing equations required to solve statically indeterminate systems. The secret lies in considering the *deformations* of the structure.

## 1. The Concept of Compatibility

When a solid structure is constrained by redundant supports, its physical deformation is restricted by its environment. 

A **compatibility equation** is a mathematical statement that describes these geometric restrictions on the deformation. 
For example, if a steel rod is securely clamped between two massive, rigid concrete walls, and then a force is applied to the middle of the rod, the total change in length of the entire rod from wall to wall *must* be exactly zero. The walls do not move.

$$ \delta_{total} = 0 $$

This simple geometric observation is the key to solving the problem.

## 2. Procedure for Analysis

1. **Free-Body Diagram:** Draw an FBD of the member and write out the equation(s) of equilibrium. You will have more unknown forces than equations.
2. **Compatibility Equation:** Write down the geometric compatibility equation that describes how the deformations of the various segments relate to each other based on the physical constraints.
3. **Load-Displacement Relations:** Express the deformations in the compatibility equation in terms of the unknown internal forces using the elastic deformation formula ($\delta = \frac{PL}{AE}$).
4. **Solve:** Substitute the load-displacement relations into the compatibility equation. You now have an additional equation written in terms of the unknown forces. Combine this with your original equilibrium equation(s) to solve the system for all unknown forces.

## 3. Example: Bar Between Fixed Supports

A bar is clamped tightly between two rigid walls at $A$ and $B$. A force $F$ is applied to a collar exactly in the middle of the bar (point C). What are the support reactions $R_A$ and $R_B$?

1. **Equilibrium:** $\sum F = 0 \implies R_A + R_B - F = 0$. (One equation, two unknowns. Indeterminate).
2. **Compatibility:** The total length of the bar cannot change because the walls are rigid. Therefore, the elongation of segment AC plus the elongation of segment CB must equal zero.
   $$ \delta_{AC} + \delta_{CB} = 0 $$
3. **Load-Displacement:** 
   The internal force in AC is $R_A$ (tension). $\delta_{AC} = \frac{R_A (L/2)}{AE}$
   The internal force in CB is $-R_B$ (compression). $\delta_{CB} = \frac{-R_B (L/2)}{AE}$
4. **Solve:** 
   $$ \frac{R_A L}{2AE} - \frac{R_B L}{2AE} = 0 \implies R_A = R_B $$
   Substitute back into the equilibrium equation: $2R_A - F = 0 \implies R_A = F/2$, $R_B = F/2$.

This powerful methodology—combining equilibrium with geometric compatibility and material behavior—is the universal paradigm for solving all statically indeterminate structures in engineering.
