---
title: "Normal Stress under Axial Loading"
---

# Normal Stress under Axial Loading

The simplest and most fundamental application of stress analysis is the two-force member subjected exclusively to an axial load along its centroidal axis. Examples include truss members, hanger cables, and vertical columns.

## 1. Uniform Distribution of Average Stress

Consider a straight bar of constant cross-sectional area $A$ subjected to equal and opposite axial forces $P$ at its ends.

If we make a cut perpendicular to the longitudinal axis of the bar far away from the points of load application, the internal normal force $N$ must equal the external load $P$ ($\sum F = 0$).

Because the bar is uniform and homogeneous, and the load is applied exactly through the centroid of the cross-section, the material deforms uniformly. Consequently, the internal force is distributed equally across the entire cross-section.

Under these conditions, the **average normal stress** $\sigma$ is constant at every point on the cross-section:
$$ \sigma = \frac{P}{A} $$
where:
- $\sigma$ = average normal stress at any point on the cross-sectional area.
- $P$ = internal resultant normal force, which acts through the centroid of the cross-sectional area.
- $A$ = total cross-sectional area of the bar.

## 2. Conditions for Uniform Stress

The equation $\sigma = P/A$ is only rigorously valid if the stress distribution is perfectly uniform. This requires three conditions:

1. **Prismatic Bar:** The cross-section must be constant throughout the length of the bar. If there are sudden changes in cross-section (holes, notches, fillets), localized stress concentrations will occur, and the maximum stress will be significantly higher than the average $P/A$.
2. **Homogeneous Material:** The material must be uniform throughout.
3. **Centroidal Loading:** The line of action of the applied load $P$ must pass exactly through the geometric centroid of the cross-section. If it is offset (eccentric loading), it will induce a bending moment, causing the stress distribution to become non-uniform (higher on one side, lower on the other).

## 3. Saint-Venant's Principle

What happens to the stress distribution immediately adjacent to the point where the load $P$ is applied?

If a load is applied via a rigid plate or a pin connection, the stress directly underneath that localized point of application is highly complex and non-uniform.

**Saint-Venant's Principle** states that the localized effects of the method of load application dissipate rapidly as you move away from the point of application. 
Practically, at a distance equal to the widest dimension of the cross-section away from the load point, the stress distribution "smooths out" and becomes the uniform average stress $\sigma = P/A$. 

Therefore, the $\sigma = P/A$ formula is accurate for the vast majority of the length of the member, excluding only the immediate vicinity of the supports or load points.
