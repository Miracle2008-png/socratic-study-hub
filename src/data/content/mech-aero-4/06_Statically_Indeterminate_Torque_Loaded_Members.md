---
title: "Statically Indeterminate Torque-Loaded Members"
---

# Statically Indeterminate Torque-Loaded Members

Just as with axially loaded members, a shaft can be constrained in such a way that the equations of static equilibrium alone are insufficient to determine the internal torques.

The most classic example is a single shaft securely embedded into rigid walls at *both* ends, with a torque $T$ applied somewhere in the middle. 

## 1. Equilibrium Fails

If we draw a free-body diagram of the entire shaft, we have an unknown reaction torque at the left wall ($T_A$) and an unknown reaction torque at the right wall ($T_B$).

The single available equilibrium equation for rotation about the longitudinal x-axis is:
$$ \sum M_x = 0 \implies T_A + T_B - T = 0 $$

We have one equation and two unknowns. The system is statically indeterminate.

## 2. Applying Compatibility

To solve the problem, we must analyze the physical deformations. 
Because both ends of the shaft are securely fixed to perfectly rigid walls, the ends absolutely cannot rotate. Therefore, the total angle of twist of end B with respect to end A must be exactly zero.

This gives us our **compatibility equation**:
$$ \phi_{A/B} = 0 $$

## 3. Load-Displacement Relations

Let the applied torque $T$ be located at point C, dividing the shaft into two segments: AC and CB.
The total twist is the sum of the twist in segment AC and the twist in segment CB.

$$ \phi_{AC} + \phi_{CB} = 0 $$

Express the twist in each segment using the elastic twist formula ($\phi = \frac{TL}{JG}$).
You must use the method of sections to find the internal torque in each segment in terms of the unknown wall reactions.
- Internal torque in AC: $T_{AC} = T_A$
- Internal torque in CB: $T_{CB} = -T_B$

Substitute these into the compatibility equation:
$$ \frac{T_A L_{AC}}{J_{AC} G} - \frac{T_B L_{CB}}{J_{CB} G} = 0 $$

## 4. The Solution

This load-displacement equation gives us a mathematical relationship between the two unknown wall reactions based entirely on the geometry and stiffness of the shaft segments.

You now have a system of two linear equations:
1. Equilibrium: $T_A + T_B = T$
2. Compatibility: $T_A \left(\frac{L_{AC}}{J_{AC} G}\right) = T_B \left(\frac{L_{CB}}{J_{CB} G}\right)$

Solving these simultaneously yields the exact values for the reaction torques $T_A$ and $T_B$. Once these are known, you can calculate the maximum shear stress in any part of the shaft.
