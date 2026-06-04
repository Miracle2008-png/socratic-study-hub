---
title: "Slope and Displacement by Integration"
---

# Slope and Displacement by Integration

The most direct and rigorous way to determine the deflection $v(x)$ and the slope $\theta(x)$ of a beam is by integrating the differential equation of the elastic curve.

## 1. The Integration Process

We begin with the governing equation:
$$ EI \frac{d^2v}{dx^2} = M(x) $$

**First Integration (Finding Slope):**
Integrating both sides with respect to $x$ yields the equation for the slope (angle $\theta$) of the beam. Since $dv/dx \approx \tan\theta \approx \theta$ for small angles:
$$ EI \frac{dv}{dx} = EI \, \theta(x) = \int M(x) dx + C_1 $$
Where $C_1$ is a constant of integration.

**Second Integration (Finding Deflection):**
Integrating a second time yields the equation for the actual vertical deflection (sag) $v$:
$$ EI \, v(x) = \iint M(x) dx dx + C_1 x + C_2 $$
Where $C_2$ is a second constant of integration.

## 2. Boundary Conditions

To solve for the unknown constants of integration ($C_1$ and $C_2$), we must use **Boundary Conditions**. These are physical geometric facts about how the beam is supported.

*   **Pin or Roller Support:** The beam cannot move vertically at the support. 
    *   Condition: $v = 0$ at $x = L_{support}$.
    *   *Note: The beam is free to pivot, so the slope $\theta$ is NOT zero.*
*   **Fixed Wall (Cantilever):** The wall firmly grips the beam. It cannot move vertically, and it cannot rotate.
    *   Condition 1: $v = 0$ at $x = L_{wall}$.
    *   Condition 2: $\theta = 0$ at $x = L_{wall}$.
*   **Free End:** There are no geometric constraints. Deflection and slope are completely unknown.

By plugging these known $(x, v)$ or $(x, \theta)$ coordinates into our integrated equations, we can solve algebraically for $C_1$ and $C_2$, finalizing our exact mathematical functions for the elastic curve.

## 3. The Problem with Multiple Loads

The integration method works beautifully if a single mathematical function $M(x)$ describes the bending moment for the entire length of the beam (e.g., a simple cantilever with a uniform distributed load).

However, if a beam has multiple point loads or differing distributed loads, the moment diagram is composed of several different geometric shapes. You must write a different $M(x)$ equation for every single region between the loads.

If a beam has 3 different load regions, you must integrate 3 separate times, generating 6 distinct constants of integration ($C_1$ through $C_6$). 

To solve this, you must apply **Continuity Conditions**: ensuring that where Region 1 meets Region 2, they share the exact same slope and the exact same deflection. The algebra becomes a massive, highly error-prone matrix of simultaneous equations. 
To solve complex beams efficiently, engineers required a better mathematical tool: Macaulay's Method.
