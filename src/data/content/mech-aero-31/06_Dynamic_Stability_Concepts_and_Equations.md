---
title: "Dynamic Stability Concepts and Equations"
---

# Dynamic Stability Concepts and Equations

While static stability examines the initial tendency to return to equilibrium, **dynamic stability** analyzes the time history of the aircraft's motion following a disturbance. It answers the question: *How* does the aircraft return to equilibrium? Does it oscillate? Do the oscillations damp out quickly or slowly?

## 1. The Equations of Motion

To analyze dynamic stability, we must use the full rigid-body equations of motion based on Newton's Second Law ($F = ma$) and Euler's equations for rigid body rotation ($M = I\alpha$).

An aircraft has six degrees of freedom (6-DOF), requiring 6 coupled, non-linear differential equations:
- 3 Translation equations (Force = mass $\times$ acceleration in X, Y, Z axes)
- 3 Rotation equations (Moment = rate of change of angular momentum about Roll, Pitch, Yaw axes)

Because aerodynamic forces are functions of velocity, orientation, and angular rates, these equations are highly complex and non-linear.

## 2. Linearization and Small Perturbations

To make the mathematics tractable for stability analysis, engineers use **small perturbation theory**.
1. We assume the aircraft is initially in steady, level, trimmed flight (equilibrium).
2. We assume the disturbance is small.
3. We separate all variables into a trim value plus a small perturbation value (e.g., Velocity $V = V_{trim} + v$).
4. We substitute these into the 6-DOF equations and ignore products of small perturbations (since a small number squared is very small).

This process **linearizes** the equations of motion, transforming them into a system of linear differential equations.

## 3. Decoupling Longitudinal and Lateral-Directional Motion

A massive simplification occurs when analyzing symmetric, level flight. The linearized equations naturally decouple into two separate, independent sets:

**1. Longitudinal Equations (4 equations):**
Describe motion in the plane of symmetry.
- Variables: Forward velocity ($u$), vertical velocity ($w$, related to angle of attack $\alpha$), pitch rate ($q$), and pitch angle ($\theta$).
- Forces/Moments: Lift, Drag, Pitching Moment.

**2. Lateral-Directional Equations (4 equations):**
Describe asymmetric motion out of the plane of symmetry.
- Variables: Sideslip velocity ($v$, related to sideslip angle $\beta$), roll rate ($p$), yaw rate ($r$), and roll angle ($\phi$).
- Forces/Moments: Side force, Rolling Moment, Yawing Moment.

This decoupling allows engineers to analyze pitch dynamics completely separately from roll and yaw dynamics (for small disturbances).

## 4. Stability Derivatives

In the linearized equations, aerodynamic forces and moments are represented using **stability derivatives**. These represent how much a force or moment changes due to a small change in a flight variable.

For example, in the pitching moment equation:
$\Delta M = M_u u + M_w w + M_q q + M_{\dot{w}} \dot{w}$

- $M_u$: Change in pitching moment due to a change in forward speed.
- $M_w$: Change in pitching moment due to a change in vertical speed (angle of attack). This is related to static stability ($C_{m_\alpha}$).
- $M_q$: Change in pitching moment due to pitch rate. This provides **pitch damping** (the horizontal tail swinging through the air creates a force resisting the rotation).

## 5. Eigenvalues and System Response

The linearized systems can be expressed in state-space matrix form: $\dot{x} = Ax$
Solving this linear system involves finding the **eigenvalues** of matrix $A$. The roots (eigenvalues) of the characteristic equation dictate the dynamic response of the system.

- **Real, negative roots:** Exponential decay (subsidence). The disturbance dies out smoothly.
- **Complex conjugate roots:** Oscillatory motion.
    - If the real part is negative: Damped oscillation (positive dynamic stability).
    - If the real part is positive: Divergent oscillation (negative dynamic stability).

The specific roots of the longitudinal and lateral-directional matrices define the classic dynamic modes of an aircraft.
