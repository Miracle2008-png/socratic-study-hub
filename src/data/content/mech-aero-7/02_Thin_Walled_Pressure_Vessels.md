---
title: "Thin-Walled Pressure Vessels"
---

# Thin-Walled Pressure Vessels

Before diving into general 3D combined loadings, we examine a highly specific and extremely common case of combined stress: the **thin-walled pressure vessel**. 

Cylindrical or spherical vessels are ubiquitous in engineering, used for storing pressurized gases or liquids (boilers, scuba tanks, spacecraft cabins, aerosol cans, and pipes).

## 1. The "Thin-Walled" Assumption

A vessel is considered "thin-walled" if the ratio of its inner radius $r$ to its wall thickness $t$ is greater than or equal to 10:
$$ \frac{r}{t} \ge 10 $$

When this is true, we make a massive simplifying assumption: the stress is perfectly uniform across the entire thickness $t$ of the wall. We do not have to calculate complex radial stress gradients.

## 2. Cylindrical Vessels

When a cylinder is pressurized with an internal pressure $p$, the wall material is subjected to tension in two perpendicular directions simultaneously. This is a state of **biaxial stress**.

### Hoop Stress ($\sigma_1$ or $\sigma_\theta$)
This is the stress attempting to rip the cylinder open lengthwise (like a bursting hot dog). We analyze this by making a longitudinal cut slicing the cylinder in half. 
The internal pressure pushing against the fluid area ($p \cdot 2r \cdot \Delta x$) must be balanced by the stress acting on the two severed walls ($2 \cdot \sigma_1 \cdot t \cdot \Delta x$).
$$ \sigma_1 = \frac{p r}{t} $$
*(Note: Hoop stress is the absolute maximum stress in a cylinder).*

### Longitudinal Stress ($\sigma_2$ or $\sigma_L$)
This is the stress attempting to blow the end caps off the cylinder. We analyze this by making a transverse cut across the cylinder.
The internal pressure pushing against the circular end cap ($p \cdot \pi r^2$) must be balanced by the stress acting on the thin annular ring of the wall material ($\sigma_2 \cdot 2\pi r \cdot t$).
$$ \sigma_2 = \frac{p r}{2t} $$

Notice that **the hoop stress is exactly twice as large as the longitudinal stress.** When a cylindrical pipe bursts due to overpressure, it almost always splits along a longitudinal line, because $\sigma_1$ hits the ultimate tensile strength first.

## 3. Spherical Vessels

A sphere is the most perfectly optimized shape for containing pressure. Due to total geometric symmetry, if we cut a sphere in half along *any* diametral plane, the resulting free-body diagram is identical to the transverse cut of a cylinder.

Therefore, for a spherical pressure vessel, the stress is the same in every direction along the surface:
$$ \sigma_1 = \sigma_2 = \frac{p r}{2t} $$

For the same radius, pressure, and wall thickness, a spherical vessel experiences only half the maximum stress of a cylindrical vessel. This is why high-pressure gas storage tanks and deep-sea submersibles are perfectly spherical.
