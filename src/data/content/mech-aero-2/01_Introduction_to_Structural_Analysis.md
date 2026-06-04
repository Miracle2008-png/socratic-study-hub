---
title: "Introduction to Structural Analysis"
---

# Introduction to Structural Analysis

With the fundamentals of rigid body equilibrium firmly established, we now shift our focus from a single rigid body to structures composed of multiple interconnected parts.

**Structural Analysis** in statics involves determining the forces acting not only on the exterior of a structure but, more importantly, the forces acting between the individual members that make up the structure.

## 1. Types of Engineering Structures

For the purposes of statics, structures are classified into three primary categories based on how their members are connected and the types of forces those members carry:

1. **Trusses:** Structures constructed entirely of slender members joined together at their endpoints. Trusses are designed to support loads only at their joints, meaning every member is a *two-force member* (carrying only axial tension or compression).
2. **Frames:** Structures designed to support significant applied loads, characterized by containing at least one *multi-force member* (a member acted upon by three or more forces, typically causing bending). Frames are generally stationary.
3. **Machines:** Structures designed to transmit and alter forces or power. Like frames, they contain multi-force members, but unlike frames, machines contain moving parts.

## 2. The Principle of Action and Reaction

The cornerstone of analyzing interconnected structures is Newton's Third Law: *For every action, there is an equal and opposite reaction.*

When a structure is disassembled for analysis, the joint where two members connect is broken. The force that member A exerts on member B must be modeled as exactly equal in magnitude and opposite in direction to the force member B exerts on member A.
$$ \mathbf{F}_{AB} = -\mathbf{F}_{BA} $$

Failure to strictly adhere to this sign convention when transitioning between the free-body diagrams of adjacent members is the most common source of error in structural analysis.

## 3. General Approach to Structural Analysis

Regardless of whether you are analyzing a truss, a frame, or a machine, the overall analytical strategy is similar:
1. **Global Equilibrium:** Treat the entire structure as a single rigid body. Draw an FBD of the whole structure and apply the equations of equilibrium ($\sum F=0$, $\sum M=0$) to determine the external support reactions.
2. **Disassembly:** Conceptually break the structure apart into its individual members or manageable sub-assemblies.
3. **Local Equilibrium:** Draw FBDs for the individual components, exposing the internal connection forces. Apply equilibrium equations to each component to solve for these internal forces.

*Note:* In some highly interconnected structures, it is impossible to find the global reactions first (the external boundaries are statically indeterminate). In such cases, the structure must be disassembled first, and the equilibrium equations of the parts must be solved simultaneously with the global equations.
