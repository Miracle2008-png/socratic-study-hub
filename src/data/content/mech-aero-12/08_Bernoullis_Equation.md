---
title: "Bernoulli's Equation"
---

# Bernoulli's Equation

The Continuity Equation tracks *how much* fluid is moving. Now we must track the *energy* of that moving fluid. This leads to one of the most celebrated equations in all of physics: **Bernoulli's Equation**.

## 1. Derivation from Energy Conservation

Consider a small fluid particle moving along a streamline. Three forms of energy act on it:
1.  **Pressure Energy:** The pressure force $P$ pushes the fluid element, doing work on it.
2.  **Kinetic Energy:** The fluid is moving at velocity $V$, so it carries kinetic energy $\frac{1}{2}\rho V^2$ per unit volume.
3.  **Potential Energy:** The fluid element at elevation $z$ carries gravitational potential energy $\rho g z$ per unit volume.

Applying the Work-Energy Theorem (or applying Newton's 2nd Law along a streamline) to the fluid particle, and assuming no friction losses, we derive Bernoulli's Equation:

$$ \boxed{P + \frac{1}{2}\rho V^2 + \rho g z = \text{constant along a streamline}} $$

This holds between **any two points (1) and (2) on the same streamline**:
$$ P_1 + \frac{1}{2}\rho V_1^2 + \rho g z_1 = P_2 + \frac{1}{2}\rho V_2^2 + \rho g z_2 $$

## 2. The Physical Interpretation

Bernoulli's Equation is a statement of **energy conservation per unit volume**. The sum of pressure energy + kinetic energy + potential energy is constant.

Its most profound physical consequence is the **inverse relationship between velocity and pressure:**

**If a fluid speeds up ($V$ increases), its pressure ($P$) must decrease, and vice versa.**

This is a counterintuitive but absolutely fundamental result that explains: 
*   How airplane wings generate lift (faster flow over the curved top → lower pressure above the wing → net upward force).
*   Why a spray nozzle can draw paint into an airstream (high velocity air over a nozzle exit creates low pressure that sucks paint upward from a reservoir).
*   How a Venturi tube measures flow rate (measuring the pressure drop across a constriction reveals the flow velocity).

## 3. Assumptions and Validity

Bernoulli's Equation is derived under strict assumptions:
1.  **Inviscid flow:** Viscosity is zero (no friction losses). This is a good approximation for streamlined flows far from walls.
2.  **Incompressible flow:** Density is constant ($\rho = const$). Valid for $Ma < 0.3$.
3.  **Steady flow:** Velocity field does not change with time.
4.  **Along a streamline:** Both points must be on the same streamline.

Real engineering flows always have friction losses. In such cases, Bernoulli's equation is modified to include a **head loss** term ($h_L$) to account for energy dissipated by viscous friction.
