---
title: "Graphical Method for Shear and Moment"
---

# Graphical Method for Shear and Moment

By applying equilibrium to a differential element of a beam $dx$, we uncover profound differential relationships between the distributed load $w(x)$, the shear force $V(x)$, and the bending moment $M(x)$. These relationships allow us to construct shear and moment diagrams rapidly without writing piecewise algebraic equations.

## 1. Load and Shear Relationship

$$ \frac{dV}{dx} = w(x) $$
*The slope of the shear diagram at any point is equal to the intensity of the distributed load at that point.* (Note: we assume upward distributed loads are positive).

Integrating this equation between two points $A$ and $B$ gives:
$$ \Delta V = V_B - V_A = \int_A^B w(x) dx $$
*The change in shear between two points is exactly equal to the area under the distributed load curve between those two points.*

## 2. Shear and Moment Relationship

$$ \frac{dM}{dx} = V(x) $$
*The slope of the bending moment diagram at any point is exactly equal to the value of the shear force at that point.*

Integrating this equation between two points $A$ and $B$ gives:
$$ \Delta M = M_B - M_A = \int_A^B V(x) dx $$
*The change in moment between two points is exactly equal to the area under the shear diagram between those two points.*

## 3. Rules for Rapid Construction

Using these principles, we can sketch the diagrams purely graphically:

**For the Shear Diagram ($V$):**
1.  A concentrated upward force causes the shear diagram to instantly jump *up* by that magnitude. A downward force causes it to drop.
2.  In a region with no distributed load ($w = 0$), the slope $dV/dx = 0$. The shear diagram is a horizontal flat line.
3.  Under a uniform distributed load ($w = \text{constant}$), the slope $dV/dx$ is constant. The shear diagram is a sloped straight line.

**For the Moment Diagram ($M$):**
1.  A concentrated clockwise couple moment causes the moment diagram to instantly jump *up*. A counter-clockwise moment causes it to drop.
2.  Where the shear diagram is a flat horizontal rectangle ($V = \text{constant}$), the slope $dM/dx$ is constant. The moment diagram is a sloped straight line.
3.  Where the shear diagram is a sloped triangle, the slope $dM/dx$ is changing linearly. The moment diagram is a parabolic curve. (If $V$ is positive and decreasing, the parabola is concave down).
4.  **Crucial Rule:** Because $dM/dx = V(x)$, the absolute maximum (or minimum) bending moment $M_{max}$ occurs precisely where the shear diagram crosses the zero axis ($V=0$). You must find these zero-crossing points on the shear diagram to locate the peak moments.
