---
title: "Free-Body Diagrams"
---

# Free-Body Diagrams (FBD)

The successful application of the equations of equilibrium is entirely dependent on a complete and accurate identification of all the known and unknown forces acting on the body. 

The best, and only acceptable, way to do this is to draw a **free-body diagram** (FBD).

## 1. What is a Free-Body Diagram?

A free-body diagram is a sketch of the isolated body, completely "free" from its surroundings, showing all the external forces and couple moments that act on it. 

The environment (ground, walls, cables, interacting bodies) is completely removed and replaced by the forces they exert on the isolated body.

## 2. Procedure for Drawing an FBD

Drawing a correct FBD is the most critical step in solving any mechanics problem.

1. **Draw the Outlined Shape:** Imagine the body is isolated or cut "free" from its constraints and connections. Sketch its outlined shape.
2. **Show All External Forces and Couple Moments:** Indicate all the forces and couple moments acting on the body. These generally fall into two categories:
   - *Applied forces*: Active forces such as loads or weights that tend to move the body.
   - *Reaction forces*: Reactive forces exerted by supports or constraints that tend to prevent motion.
3. **Identify Each Force:** Indicate the magnitude and direction of known forces. Establish $x, y$ (and $z$) coordinate axes. Use letters (e.g., $A_x, A_y, N, T$) to represent the magnitudes and directions of unknown forces.

## 3. Types of Support Reactions (2D)

To properly replace supports with their reaction forces, you must understand how different supports restrict motion. 
*Rule of thumb:* If a support prevents translation in a given direction, a reaction force acts in that direction. If it prevents rotation, a reaction couple moment exists.

- **Cable / Rope / Link:** Can only pull away from the body. (1 Unknown: Tension $T$).
- **Roller / Rocker / Smooth Surface:** Prevents motion perpendicular to the surface. (1 Unknown: Normal force $N$ perpendicular to the surface).
- **Pin / Hinge:** Prevents translation in any direction, but allows free rotation. (2 Unknowns: Force components $R_x, R_y$).
- **Fixed Support:** Prevents both translation and rotation. (3 Unknowns: Force components $R_x, R_y$ and a couple moment $M$).

## 4. Internal Forces

In an FBD of an entire structure, the forces between internal components are *internal forces* and **must not** be shown on the FBD, because they occur in equal and opposite collinear pairs (Newton's Third Law) and cancel each other out.

Internal forces are only shown if the body is explicitly "cut" at that specific section to expose them.
