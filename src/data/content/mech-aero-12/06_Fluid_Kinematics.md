---
title: "Fluid Kinematics: Describing Flow"
---

# Fluid Kinematics: Describing Flow

We now transition from fluid statics (fluids at rest) to **fluid dynamics** — the study of fluids in motion. Before solving for forces, we must first develop a mathematical vocabulary for describing and visualizing how fluid actually moves.

## 1. Two Approaches to Describing Flow

### The Lagrangian Approach
Track individual fluid particles as they move through space. Like GPS tracking on individual cars in traffic. 
This is mathematically natural but computationally staggering for large volumes of fluid, since every particle needs its own set of equations.

### The Eulerian Approach
Instead of tracking particles, we attach a fixed grid of observation points in space and record what velocity and pressure are present at each fixed point at every instant of time.
This is the standard approach in engineering. It leads to the **Velocity Field**: $\vec{V}(x, y, z, t)$ — the velocity vector at every point in space, at every moment in time.

## 2. Flow Visualization

### Streamlines
A streamline is a curve that is, at every instant, tangent to the local velocity vector. Streamlines show the instantaneous direction of flow and cannot cross each other (if they did, a fluid particle at the crossing point would have two directions simultaneously, which is impossible).

### Pathlines
The actual trajectory that a single fluid particle traces out over time. For **steady flow** (velocity field does not change with time), streamlines and pathlines are identical.

### Streaklines
The locus of particles that have passed through a specific fixed point in space. This is what you see when dye is continuously injected into a flow from a needle. In steady flow, streaklines, pathlines, and streamlines are all the same curve.

## 3. Classification of Flow Types

*   **Steady vs. Unsteady:** If velocity at every point is constant in time ($\partial V/\partial t = 0$), the flow is steady. A river flowing at constant discharge is approximately steady.
*   **Uniform vs. Non-uniform:** If velocity is constant in space along the flow direction, the flow is uniform. Flow in a straight pipe of constant diameter is uniform; flow around a bend is non-uniform.
*   **1D, 2D, 3D:** The number of spatial dimensions required to adequately describe the velocity field. Most engineering analyses simplify complex 3D flow down to effective 1D flow using cross-sectional averages.
*   **Laminar vs. Turbulent:** This is the most critical classification and will be explored in detail when we study the Reynolds Number.
