---
title: "Statically Indeterminate Beams: Introduction"
---

# Statically Indeterminate Beams: Introduction

Everything we have learned so far—shear and moment diagrams, the flexure formula, and deflection equations—requires us to first solve for the external support reactions using the equations of statics ($\sum F_y = 0$, $\sum M = 0$).

What happens when a structure is "overbuilt"? What happens when an engineer adds a third column to support a continuous beam, or rigidly bolts a beam to the wall at both ends?

## 1. The Definition of Indeterminacy

A structure is **statically indeterminate** when it has more unknown external support reactions than there are available equations of static equilibrium.

*   A 2D beam subjected to transverse loading has only two useful statics equations: $\sum F_y = 0$ and $\sum M = 0$.
*   If a beam rests on three roller supports, there are three unknown upward reaction forces. (3 unknowns > 2 equations).
*   If a beam is fixed to a wall at both ends (a fixed-fixed beam), there are two vertical reactions and two moment reactions. (4 unknowns > 2 equations).

The degree of indeterminacy is the number of "extra" or **redundant** supports. 
A beam with 4 unknowns and 2 equations is indeterminate to the second degree. It has two redundant supports.

## 2. Why Build Indeterminate Structures?

If they are mathematically harder to solve, why do engineers intentionally design them?

1.  **Massive Strength Increase:** Clamping the ends of a beam (fixed-fixed) instead of simply resting them on pins (simply supported) drastically reduces the maximum bending moment in the center of the span. The beam can carry significantly more weight.
2.  **Massive Stiffness Increase:** Adding redundant supports drastically reduces the deflection (sag) of the beam.
3.  **Redundancy (Safety):** If a truck hits one of the three columns supporting a bridge, the continuous beam will redistributute the load to the remaining two columns. A simply-supported two-column bridge would instantly collapse.

## 3. The Concept of Compatibility

Because statics cannot solve the problem, we must find additional mathematical equations. We find these equations by looking at the geometry of the deformation—the kinematics of the elastic curve.

We must enforce **Compatibility Conditions**. These are physical restrictions placed on the deflection of the beam by the supports.
*   "The deflection at the middle roller must be exactly zero."
*   "The slope of the beam entering the concrete wall must be exactly zero."

By writing out the equations for deflection $v(x)$ and forcing them to obey these geometric rules, we generate the exact number of extra equations needed to solve for the redundant support forces.
