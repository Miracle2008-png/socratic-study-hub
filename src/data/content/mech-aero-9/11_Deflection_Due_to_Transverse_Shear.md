---
title: "Deflection Due to Transverse Shear"
---

# Deflection Due to Transverse Shear

In all our previous deflection calculations, we relied entirely on the equation $EI v'' = M$. This equation assumes that 100% of the beam's sag is caused by the bending moment stretching and compressing the longitudinal fibers.

We completely ignored the fact that the internal transverse shear force $V$ causes the cross-section to warp and slide downwards (shear strain, $\gamma = \tau/G$).

## 1. When is Shear Deflection Important?

For long, slender beams (where the length-to-depth ratio $L/h > 10$), the bending moment $M$ is massive compared to the shear force $V$. In these typical cases, the additional sag caused by shear strain is incredibly small (less than 1% of the total deflection) and is safely ignored by engineers to simplify the math.

However, if a beam is very **short and deep** (e.g., a massive concrete transfer girder supporting a skyscraper, where $L/h < 5$), the shear force is enormous, and the bending moment is relatively small.
In these specific cases, the deflection caused by shear slipping can actually exceed the deflection caused by bending. Ignoring it will result in a disastrously flexible structure.

## 2. Calculating Shear Deflection

The derivation of shear deflection is complex because the shear stress $\tau$ (and thus the shear strain $\gamma$) is not uniform across the depth of the beam; it is parabolic.

To account for this non-uniform warping, we use an energy method (Castigliano's Theorem) or introduce a "Form Factor" ($f_s$) that depends on the geometry of the cross-section.
*   For a solid rectangle, $f_s = 6/5 = 1.2$.
*   For a solid circle, $f_s = 10/9 = 1.11$.
*   For a wide-flange I-beam, $f_s \approx A / A_{web}$.

The equation for the additional slope caused by shear is:
$$ \frac{dv_s}{dx} = f_s \frac{V(x)}{A G} $$
Where:
*   $v_s$ is the additional vertical deflection due to shear.
*   $V(x)$ is the internal shear force equation.
*   $A$ is the total cross-sectional area.
*   $G$ is the Shear Modulus of the material.

## 3. Total Deflection

To find the true, absolute deflection of a short, deep beam, we must integrate the shear slope equation and simply superimpose it onto the standard bending deflection:

$$ v_{total} = v_{bending} + v_{shear} $$
$$ v_{total} = \iint \frac{M(x)}{EI} dx dx + \int f_s \frac{V(x)}{AG} dx $$

## 4. Timoshenko Beam Theory

The advanced mathematical framework that simultaneously accounts for both bending rotation and shear deformation is called **Timoshenko Beam Theory**. 
While standard "Euler-Bernoulli" beam theory (which ignores shear) is taught in undergraduate statics, Timoshenko theory is universally utilized by advanced finite element analysis (FEA) software to ensure accuracy regardless of the beam's geometric proportions.
