---
title: "Poisson's Ratio"
---

# Poisson's Ratio

When a deformable body is subjected to an axial tensile force, it not only elongates in the direction of the force, but it also invariably contracts laterally (it gets thinner). 

Conversely, if subjected to an axial compressive force, the body shortens in the direction of the force and expands laterally (it bulges).

## 1. The Phenomenon of Lateral Strain

Consider a rectangular bar pulled by a tensile force along the $x$-axis. 
The bar will experience a positive longitudinal normal strain:
$$ \epsilon_{long} = \epsilon_x = \frac{\sigma_x}{E} $$

Simultaneously, the bar will experience a negative lateral normal strain in both the $y$ and $z$ directions, even though there are no forces applied in those directions.
$$ \epsilon_{lat} = \epsilon_y = \epsilon_z $$

## 2. Poisson's Ratio ($\nu$)

In the early 19th century, the French mathematician S.D. Poisson demonstrated that within the elastic range, the ratio of the lateral strain to the longitudinal strain is a constant for any given homogeneous and isotropic material.

This fundamental material property is known as **Poisson's ratio**, denoted by the Greek letter nu ($\nu$):

$$ \nu = - \frac{\epsilon_{lat}}{\epsilon_{long}} $$

The negative sign is included in the definition so that $\nu$ is a positive numerical value. If longitudinal strain is positive (tension), lateral strain is negative (contraction), and the two negatives cancel to make $\nu$ positive.

## 3. Physical Limits of Poisson's Ratio

Poisson's ratio is a dimensionless constant. 

- The theoretical maximum value for an isotropic material is **0.5**. A material with $\nu = 0.5$ is perfectly incompressible (its volume remains absolutely constant when deformed). Rubber closely approaches this limit ($\nu \approx 0.499$).
- For most structural metals (steel, aluminum, titanium), Poisson's ratio typically falls in the range of **0.25 to 0.35**.
- Cork has a Poisson's ratio close to **0**. When compressed longitudinally, it barely expands laterally at all. This is exactly why corks can be easily forced into the narrow neck of a wine bottle without jamming.

## 4. Relationship Between $E$, $G$, and $\nu$

For a homogeneous, isotropic material, the three fundamental elastic constants—the Modulus of Elasticity ($E$), the Shear Modulus ($G$), and Poisson's ratio ($\nu$)—are not independent. 

They are mathematically locked together by the following relationship:
$$ G = \frac{E}{2(1 + \nu)} $$

Because of this relationship, if any two of these constants are determined experimentally, the third can be calculated instantly. This proves that an isotropic material fundamentally has only two independent elastic constants.
