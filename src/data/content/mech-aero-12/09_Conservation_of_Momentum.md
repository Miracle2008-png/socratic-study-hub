---
title: "Conservation of Momentum: Fluid Forces"
---

# Conservation of Momentum: Fluid Forces

Bernoulli's Equation tells us about energy and pressure changes along a streamline. But it cannot tell us the **force** that flowing fluid exerts on a structure (like the thrust on a rocket nozzle, the force on a pipe elbow, or the drag on a ship hull). For this we apply Newton's Second Law in control volume form: the **Linear Momentum Equation**.

## 1. The Linear Momentum Equation

Applying Newton's 2nd Law ($\sum F = ma = m \, dV/dt$) to a control volume for steady flow, with one inlet and one outlet:

$$ \sum \vec{F} = \dot{m}(\vec{V}_{out} - \vec{V}_{in}) $$

The sum of all external forces ($\sum \vec{F}$) acting on the fluid inside the control volume equals the net rate of momentum leaving the control volume.

The external forces include:
*   Pressure forces at the inlets and outlets
*   Body forces (gravity) on the fluid mass
*   **Reaction forces from walls, nozzles, pipes, or structures** (this is what we want to find)

## 2. Application: Force on a Pipe Bend

A horizontal pipe bends from the x-direction to the y-direction. Water flows through at flow rate $Q$.

1.  **Draw Control Volume** around the entire bend, cutting across the inlet (1) and outlet (2).
2.  **Apply momentum in x-direction:**
    $F_{Rx} + P_1 A_1 - P_2 A_2 \cos\theta = \dot{m}(V_{2x} - V_{1x})$
3.  **Apply momentum in y-direction:**
    $F_{Ry} - P_2 A_2 \sin\theta = \dot{m}(V_{2y} - V_{1y})$

Solving yields the x and y components of the reaction force the pipe must exert on the fluid. By Newton's Third Law, the fluid exerts an equal and opposite force on the pipe. This is precisely the force that the pipe support bolts must restrain.

## 3. Application: Rocket Thrust

A rocket engine ejects hot gas rearward at velocity $V_e$ relative to the rocket.

Taking a control volume around the rocket nozzle:
*   No inlet momentum (fuel is consumed chemically inside).
*   Outlet momentum: $-\dot{m} V_e$ (rearward).

The momentum equation gives the thrust force propelling the rocket forward:
$$ \boxed{F_{thrust} = \dot{m} V_e} $$

The faster the exhaust velocity and the higher the mass flow rate, the greater the thrust. This single elegant equation governs all rockets from a firework to the Saturn V.
