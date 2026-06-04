---
title: "Thin-Walled Tubes Having Closed Cross Sections"
---

# Thin-Walled Tubes Having Closed Cross Sections

While solid non-circular shafts are highly inefficient under torsion, **hollow thin-walled tubes** of non-circular cross section (like a hollow rectangular box beam used in an aircraft wing) are incredibly efficient.

To analyze these complex structures, we cannot use the standard torsion formula. We must employ a specialized fluid mechanics analogy known as **shear flow**.

## 1. The Concept of Shear Flow ($q$)

Imagine the thin wall of the closed tube as a channel, and the shear stress as a fluid flowing through it. 
Because the wall thickness $t$ is very small, we assume the shear stress $\tau$ is uniform across the thickness of the wall.

We define a quantity called **shear flow**, $q$, which is the shear force per unit length along the perimeter of the tube.
$$ q = \tau t $$

Equilibrium analysis of a small cut element of the tube reveals a profound physical law: **For any closed thin-walled tube under pure torsion, the shear flow $q$ is absolutely constant throughout the entire perimeter of the cross-section.**

Even if the thickness $t$ of the wall varies wildly around the perimeter, the product $\tau t$ remains perfectly constant.
$$ q = \tau_1 t_1 = \tau_2 t_2 = \text{constant} $$

*Implication:* The maximum shear stress $\tau$ will always occur precisely at the point where the wall thickness $t$ is the thinnest.

## 2. Bredt's Formula

To relate this constant shear flow to the applied external torque $T$, we calculate the moment produced by the shear flow around the center of the tube.

$$ T = \oint q \, p \, ds $$
where $p$ is the perpendicular moment arm from an arbitrary point $O$ to the differential perimeter segment $ds$.

Geometrically, the integral $\oint p \, ds$ is exactly equal to twice the enclosed area of the tube. This yields **Bredt's Formula**:
$$ T = 2 A_m q = 2 A_m (\tau t) $$

Where:
- $T$ = applied torque.
- $t$ = thickness of the tube wall at the point of interest.
- $\tau$ = average shear stress at that point.
- $A_m$ = the **mean area** enclosed entirely within the centerline of the tube wall. (This is *not* the cross-sectional area of the solid material).

Rearranging for shear stress:
$$ \tau = \frac{T}{2 t A_m} $$

## 3. Angle of Twist

The angle of twist for a thin-walled closed tube of length $L$ and shear modulus $G$ is determined by equating the internal strain energy to the external work done by the torque:

$$ \phi = \frac{TL}{4 A_m^2 G} \oint \frac{ds}{t} $$

The line integral $\oint \frac{ds}{t}$ is evaluated completely around the centerline perimeter of the tube. If the thickness $t$ is constant, this integral is simply the total perimeter length divided by $t$.

These formulas form the absolute backbone of aerospace structural design, allowing engineers to calculate the torsional stiffness and strength of complex monocoque fuselages and wing boxes.
