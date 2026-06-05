# Torsional Deformation of a Circular Shaft

Before we can derive a formula for the stresses inside a twisted shaft, we must understand the geometric kinematics of how the material actually deforms.

We restrict our initial analysis to shafts that have a **circular cross-section** (either solid or hollow/tubular).

## 1. The Fundamental Observation

When a circular shaft is subjected to torsion, observational experiments (like drawing a straight grid on a rubber cylinder and twisting it) reveal a profound geometric fact:

**Every cross-section of a circular shaft remains perfectly flat and circular during twisting, and radial lines remain perfectly straight.**

The shaft behaves exactly like a stack of circular coins. When twisted, the coins do not warp or distort out of plane; they simply rotate relative to one another about the central axis.

*Note:* This observation is absolutely false for non-circular shafts (like square or rectangular bars). A square bar will warp severely out-of-plane when twisted.

## 2. Shear Strain in Torsion

Because the cross-sections simply rotate relative to each other, a straight longitudinal line drawn on the outside of the unstressed shaft will deform into a helix when the torque is applied.

Consider a small cylindrical element of length $\Delta x$ cut from the shaft. Let the relative angle of twist between the two ends of this element be $\Delta \phi$.
A straight line on the surface twists by an angle $\gamma$. This angle $\gamma$ is the **shear strain**.

Using small angle approximations (arc length = radius $\times$ angle):
The arc length of the twist at the outer radius $c$ is: $c \Delta \phi$
Looking at the side of the cylinder, this same arc length is: $\gamma \Delta x$

Equating the two:
$$ \gamma = \lim_{\Delta x \to 0} c \frac{\Delta \phi}{\Delta x} = c \frac{d\phi}{dx} $$

## 3. Linear Variation of Shear Strain

The formula above is for the outer surface (radius $c$). What about a point inside the solid shaft at an arbitrary radial distance $\rho$ from the center?

Since radial lines remain straight during twisting, the shear strain at any radius $\rho$ is proportional to its distance from the center:
$$ \gamma = \rho \frac{d\phi}{dx} $$

Because $d\phi/dx$ (the rate of twist) is constant for a given section, we reach a critical conclusion:
**The shear strain inside a circular shaft varies linearly with the radial distance $\rho$ from the center.**

- The shear strain is strictly zero at the exact center axis ($\rho = 0$).
- The shear strain reaches its absolute maximum at the outer surface ($\rho = c$).

$$ \gamma = \left(\frac{\rho}{c}\right) \gamma_{max} $$
