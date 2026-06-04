---
title: "General Three-Dimensional Loading"
---

# General Three-Dimensional Loading

The absolute pinnacle of combined loading analysis is the fully general 3D scenario. A structural member (like an L-shaped pipe or a crane boom) is subjected to an arbitrary assortment of forces in X, Y, and Z directions.

## 1. The Six Internal Resultants

When you make an imaginary cut at the specific cross-section of interest, the 3D equilibrium equations ($\sum F_x=0, \sum M_x=0$, etc.) will expose up to six internal resultants acting precisely at the centroid:
1.  **$N$ (Axial Force):** Acts along the x-axis.
2.  **$V_y$ (Shear Force y):** Acts along the y-axis.
3.  **$V_z$ (Shear Force z):** Acts along the z-axis.
4.  **$T$ (Torsion):** Moment about the x-axis.
5.  **$M_y$ (Bending y):** Moment about the y-axis.
6.  **$M_z$ (Bending z):** Moment about the z-axis.

## 2. Choosing the Critical Points

You cannot calculate the stress everywhere simultaneously. You must use engineering judgment to select a specific, discrete coordinate point $(y, z)$ on the cross-section that you suspect will experience the absolute maximum stress.

*   **Corners:** Points far from the neutral axis usually have maximum bending stresses.
*   **The Neutral Axis:** Points on the neutral axis usually have maximum transverse shear stresses.
*   **Outer perimeters:** Points on the outer surface have maximum torsional shear stresses.

We typically select four points (top, bottom, left, right) on the perimeter and calculate the full stress state for all four to definitively find the worst case.

## 3. The Superposition Matrix

For a chosen point $(y, z)$, we calculate and superimpose the individual stresses. 
Let the cross-section lie in the y-z plane, with the x-axis normal to the cut.

**Normal Stress ($\sigma_x$):**
$$ \sigma_x = \left[ \frac{N}{A} \right] - \left[ \frac{M_z y}{I_z} \right] + \left[ \frac{M_y z}{I_y} \right] $$

**Shear Stress in the y-direction ($\tau_{xy}$):**
$$ \tau_{xy} = \left[ \frac{V_y Q_z}{I_z t_z} \right] + \left[ \frac{T \cdot \text{radius}_y}{J} \right] $$
*(The sign of the torsion term depends on whether the twist at that specific point points in the +y or -y direction).*

**Shear Stress in the z-direction ($\tau_{xz}$):**
$$ \tau_{xz} = \left[ \frac{V_z Q_y}{I_y t_y} \right] + \left[ \frac{T \cdot \text{radius}_z}{J} \right] $$

## 4. The 3D Stress Element

The culmination of this massive calculation is a single infinitesimally small cube of material extracted from the chosen point. 

We can now draw arrows on the faces of this cube representing the precisely calculated $\sigma_x$, $\tau_{xy}$, and $\tau_{xz}$. This fully defines the 3D state of stress for that specific particle, readying it for failure analysis.
