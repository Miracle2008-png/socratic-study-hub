---
title: "The Flexure Formula"
---

# The Flexure Formula

Having established that the longitudinal strain $\epsilon$ varies linearly from the Neutral Axis ($\epsilon = -(y/c)\epsilon_{max}$), we can now determine the stress distribution and relate it to the internal bending moment $M$.

## 1. Linear Variation of Normal Stress

We assume the material behaves in a linear-elastic manner, obeying Hooke's Law ($\sigma = E\epsilon$). 

Since strain varies linearly with depth $y$, the normal stress $\sigma$ must also vary linearly:
$$ \sigma = - \left(\frac{y}{c}\right) \sigma_{max} $$

This means the stress is zero at the Neutral Axis and reaches its absolute maximum at the very top and bottom surfaces of the beam. 

## 2. Locating the Neutral Axis

Where exactly is the Neutral Axis located within the cross-section?
We know the sum of all the internal normal forces on the cross-section must be zero (because there is no applied axial load $P$).
$$ \sum F_x = \int_A \sigma dA = 0 $$

Substituting the linear stress distribution:
$$ \int_A \left( - \frac{\sigma_{max}}{c} y \right) dA = - \frac{\sigma_{max}}{c} \int_A y dA = 0 $$

The term $\int_A y dA$ is the **first moment of area**. For this integral to equal zero, the origin of the $y$-axis must be located exactly at the geometric centroid of the cross-sectional area.

**Conclusion:** For a linear-elastic material, the Neutral Axis always passes precisely through the centroid of the cross-section.

## 3. Deriving the Flexure Formula

The resultant internal bending moment $M$ must equal the moment created by all the microscopic stresses acting over the cross-section about the Neutral Axis.
$$ M = \int_A (-y) (\sigma dA) $$
*(The negative sign ensures a positive stress at a positive $y$ creates a negative resisting moment).*

Substituting the linear stress distribution $\sigma = -(y/c)\sigma_{max}$:
$$ M = \int_A (-y) \left( - \frac{\sigma_{max}}{c} y \right) dA = \frac{\sigma_{max}}{c} \int_A y^2 dA $$

The integral $\int_A y^2 dA$ is a purely geometric property known as the **Moment of Inertia**, denoted by **$I$**, computed about the centroidal Neutral Axis.

Substituting $I$ and rearranging for the maximum stress yields the **Flexure Formula**:
$$ \sigma_{max} = \frac{M c}{I} $$

To find the normal stress at any arbitrary vertical distance $y$ from the Neutral Axis:
$$ \sigma = - \frac{M y}{I} $$

Where:
*   $\sigma$ = normal bending stress.
*   $M$ = internal bending moment at the cross-section.
*   $y$ = vertical distance from the centroidal Neutral Axis.
*   $I$ = Moment of Inertia of the cross-sectional area about the Neutral Axis.
*   $c$ = distance from the NA to the outermost fiber.

## 4. The Section Modulus ($S$)

For design purposes, the geometric ratio $I/c$ is often combined into a single parameter called the **Section Modulus**, $S$.
$$ S = \frac{I}{c} $$
$$ \sigma_{max} = \frac{M}{S} $$
Beams are designed by selecting a cross-section (from standardized steel tables) that provides a Section Modulus $S$ large enough to keep $\sigma_{max}$ below the allowable yield stress.
