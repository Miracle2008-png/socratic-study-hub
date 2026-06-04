---
title: "Axial and Bending Loading"
---

# Axial and Bending Loading

When a member is subjected to both an axial force (tension or compression) and a bending moment, both loads produce the exact same type of stress: **normal stress ($\sigma$)** acting perpendicular to the cross-section. 

Because both stresses are vectors pointing in the exact same direction (the longitudinal x-axis), they can be algebraically added or subtracted directly.

## 1. Superposition of Stresses

Consider a beam subjected to a tensile axial force $N$ and a bending moment $M$ about the z-axis.

1.  **Axial Stress:** Causes a uniform tensile stress across the entire face.
    $$ \sigma_{axial} = +\frac{N}{A} $$
2.  **Bending Stress:** Causes tension on one side of the Neutral Axis and compression on the other.
    $$ \sigma_{bending} = -\frac{M y}{I} $$

The total normal stress at any depth $y$ is simply the sum:
$$ \sigma_{total} = \frac{N}{A} - \frac{M y}{I} $$

## 2. Shift of the Neutral Axis

In pure bending, the stress is zero exactly at the geometric centroid (the Neutral Axis). 
However, when a uniform axial stress is superimposed on top of the bending stress triangle, the entire stress profile shifts up or down.

Consequently, the line where the total stress is zero **shifts away from the geometric centroid**.
We can find the location of this new, shifted Neutral Axis by setting the total stress equation to zero:
$$ 0 = \frac{N}{A} - \frac{M y}{I} \implies y = \frac{N \cdot I}{M \cdot A} $$

Depending on the relative magnitudes of $N$ and $M$, the Neutral Axis might shift slightly within the cross-section, or it might shift completely *outside* the physical boundaries of the beam. 
If it shifts completely outside, it means the entire cross-section is entirely in tension (or entirely in compression), and the stress never crosses zero.

## 3. The Critical Points

Because normal stress from bending is maximized at the extreme top and bottom fibers of the beam, the absolute maximum and minimum stresses will always occur at these outer boundaries.

Let $c_{top}$ and $c_{bottom}$ be the distances to the outer fibers.

*   If $M$ causes tension at the top, and $N$ is tensile, the stresses add together constructively at the top fiber to create an enormous maximum tensile stress.
*   At the bottom fiber, $M$ causes compression, while $N$ causes tension. They fight each other. The stress is the difference between the two.

This combination is incredibly important in Civil Engineering for analyzing **prestressed concrete**. Because concrete fails in tension, engineers intentionally apply massive axial compression ($N$) to the beam using steel cables. When the heavy bending moment ($M$) from traffic loads tries to cause tension at the bottom of the beam, the pre-existing axial compression perfectly cancels it out, keeping the concrete safely clamped together.
