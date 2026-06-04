---
title: "Curved Beams"
---

# Curved Beams

The standard flexure formula ($\sigma = -My/I$) was derived explicitly for beams that have a straight longitudinal axis before any load is applied. 

Many machine components, such as crane hooks, C-clamps, chain links, and punch press frames, are intentionally manufactured with a highly curved axis. Applying the straight-beam flexure formula to a tightly curved beam results in massive errors and catastrophic failures.

## 1. Kinematics of Curved Bending

When a bending moment is applied to a curved beam, the assumption that "plane sections remain plane" still holds true. 

However, because the inner fibers of the curve are physically shorter than the outer fibers, the same angular rotation of the cross-section forces the short inner fibers to endure a much higher strain than the long outer fibers.

## 2. Hyperbolic Stress Distribution

Because the strain increases non-linearly toward the inside of the curve, the resulting normal stress distribution is no longer a straight line crossing the zero axis.

Instead, the stress follows a **hyperbolic distribution**. 
The stress spikes drastically on the inner concave surface of the beam, and is relatively low on the outer convex surface.

## 3. The Shifted Neutral Axis

In a straight beam, the Neutral Axis (where stress is zero) passes exactly through the geometric centroid of the cross-section.

In a curved beam, the massive hyperbolic spike in stress on the inner surface pulls the Neutral Axis *away* from the centroid, shifting it significantly toward the center of curvature.
Therefore, in a curved beam, the Neutral Axis and the centroidal axis are two completely different locations.

## 4. Winkler's Formula

The mathematical derivation for curved beam stress (Winkler's theory) yields the following formula for the normal stress at a radial distance $r$ from the center of curvature:

$$ \sigma = \frac{M(r - R)}{A r (\bar{r} - R)} $$

Where:
*   $M$ = applied internal bending moment (positive if it tends to straighten the beam).
*   $A$ = cross-sectional area.
*   $\bar{r}$ = radius to the geometric centroid of the cross-section.
*   $R$ = radius to the Neutral Axis.
*   $r$ = radius to the point where stress is being calculated.

**The primary challenge:** The radius of the Neutral Axis ($R$) must be calculated by performing a complex geometric integral over the cross-section: $R = \frac{A}{\int (dA/r)}$. 
For standard shapes (rectangles, circles, T-sections), formulas for this integral are provided in engineering handbooks.

## 5. When is a Beam "Curved"?

If the radius of curvature $\bar{r}$ is extremely large compared to the depth $h$ of the beam, the beam is essentially straight, and the error in using the simple straight-beam formula is negligible.

*Rule of Thumb:* If the ratio $\bar{r}/h > 10$, the simple flexure formula ($\sigma = My/I$) is accurate within 5%, which is perfectly acceptable for engineering design. 
If $\bar{r}/h < 5$, the beam is highly curved, and Winkler's curved-beam formula is absolutely mandatory.
