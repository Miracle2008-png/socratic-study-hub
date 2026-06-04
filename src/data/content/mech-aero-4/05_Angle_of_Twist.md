---
title: "Angle of Twist"
---

# Angle of Twist

In addition to ensuring a shaft doesn't shear apart under torque ($\tau_{max} \le \tau_{allow}$), an engineer must often guarantee that the shaft is sufficiently stiff so that it does not twist excessively. 

For example, excessive twist in a camshaft will ruin the precise timing of engine valves. We must formulate an equation for the total angle of twist $\phi$.

## 1. The Elastic Twist Formula

Consider a cylindrical shaft of length $L$, polar moment of inertia $J$, and Shear Modulus $G$, subjected to an internal torque $T$.

From the kinematics of torsional deformation, the shear strain at the outer surface is: $\gamma_{max} = c \frac{d\phi}{dx}$
From Hooke's Law in shear: $\gamma_{max} = \frac{\tau_{max}}{G}$
From the Torsion Formula: $\tau_{max} = \frac{Tc}{J}$

Combining these three equations:
$$ c \frac{d\phi}{dx} = \frac{Tc}{JG} $$
$$ d\phi = \frac{T}{JG} dx $$

Integrating this expression over the entire length $L$ of the shaft yields the total angle of twist $\phi$:
$$ \phi = \int_0^L \frac{T(x)}{J(x) G} dx $$

If the shaft has a constant cross-section ($J$), is made of a single uniform material ($G$), and carries a constant internal torque ($T$) throughout its length, the integral simplifies to the fundamental algebraic formula:
$$ \phi = \frac{TL}{JG} $$

Where:
- $\phi$ = angle of twist in **radians**.
- $T$ = internal torque.
- $L$ = length of the shaft.
- $J$ = polar moment of inertia.
- $G$ = shear modulus.

*Note:* The product $JG$ is termed the **torsional rigidity** of the shaft.

## 2. Shafts with Multiple Segments

If a shaft consists of several discrete segments (different diameters, different materials, or subjected to multiple torque inputs along its length), the total angle of twist of one end relative to the other is the algebraic sum of the twists of the individual segments.

$$ \phi = \sum \frac{T_i L_i}{J_i G_i} $$

**Crucial Sign Convention:**
The internal torque $T_i$ in each segment must be found using the method of sections and a consistent right-hand rule sign convention. 
- If the internal torque vector points *outward* from the cut face, it is positive (causes a positive, counterclockwise twist).
- If it points *inward*, it is negative (causes a negative, clockwise twist).

Summing the positive and negative twists dictates the final rotational position of the end of the shaft.
