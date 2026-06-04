---
title: "The Shear Formula"
---

# The Shear Formula

The derivation in the previous section yields the fundamental equation for calculating the average shear stress at any specific point within a beam's cross-section.

## 1. The Equation

The **Shear Formula** (often called the VQ/It formula) is defined as:

$$ \tau = \frac{V Q}{I t} $$

Where:
*   $\tau$ = The shear stress in the material at a specific depth $y^\prime$ from the Neutral Axis. (This represents both the transverse vertical shear stress and the complementary longitudinal shear stress).
*   $V$ = The total internal transverse shear force at the cross-section (found using a shear diagram or method of sections).
*   $I$ = The total Moment of Inertia of the *entire* cross-sectional area computed about the Neutral Axis.
*   $t$ = The width (thickness) of the cross-section at the specific depth $y^\prime$ where the stress is being calculated.
*   $Q$ = The first moment of area of the portion of the cross-section located *above* (or *below*) the depth $y^\prime$, computed about the Neutral Axis.

## 2. Calculating Q

Understanding how to calculate $Q$ is the most common stumbling block in applying the shear formula.

$$ Q = \bar{y}^\prime A^\prime $$

1.  Identify the specific point (depth $y^\prime$) where you want to find the shear stress.
2.  Draw a horizontal line across the cross-section exactly at that depth.
3.  $A^\prime$ is the physical area of the cross-section located *above* your line (or below it, whichever is easier to calculate).
4.  $\bar{y}^\prime$ is the vertical distance from the Neutral Axis of the entire beam to the geometric centroid of the shaded area $A^\prime$.

**Important Characteristics of Q:**
*   At the very top and bottom edges of the beam, the area $A^\prime$ above the line is zero. Therefore, $Q = 0$. Consequently, **the shear stress is strictly zero at the top and bottom surfaces of any beam.**
*   $Q$ is absolutely maximized at the Neutral Axis. Therefore, for a cross-section with a constant width $t$, the maximum shear stress $\tau_{max}$ always occurs exactly at the Neutral Axis.

## 3. Assumptions and Limitations

The Shear Formula is highly accurate, but it relies on a few critical assumptions:
1.  **Linear Elasticity:** The material must obey Hooke's Law.
2.  **Uniform Shear Stress:** The formula calculates the *average* shear stress across the width $t$. It assumes the stress is uniform from the left edge of the width to the right edge. This is a very good approximation for thin cross-sections (like the web of an I-beam) or narrow rectangular beams.
3.  **Boundary Distortion:** If the cross-section is extremely wide and flat (like a flat plate), the shear stress actually varies significantly across the width, and the $\tau = VQ/It$ formula becomes wildly inaccurate near the outer edges. It also loses accuracy near sudden geometric changes, like the intersection of a web and a flange in an I-beam.
