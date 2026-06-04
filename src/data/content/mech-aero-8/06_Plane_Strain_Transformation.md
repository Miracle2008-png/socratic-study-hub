---
title: "Plane Strain Transformation"
---

# Plane Strain Transformation

Just as we transformed stress components ($\sigma, \tau$) to different coordinate orientations, we must also transform strain components ($\epsilon, \gamma$). 

We often encounter states of **Plane Strain**. This occurs in structures that are incredibly thick or completely constrained in one direction, preventing any deformation in that specific axis.
For example, a long retaining wall or a thick cylindrical pressure vessel: the material is squeezed in the x and y directions, but because it is so long in the z direction, the material cannot expand outward.
*   $\epsilon_z = 0$
*   $\gamma_{xz} = 0$
*   $\gamma_{yz} = 0$

## 1. Strain Transformation Equations

The mathematical transformation of strain relies heavily on geometry. By examining how a small square element deforms into a skewed rhombus, we can derive transformation equations that relate the normal strains ($\epsilon_x, \epsilon_y$) and shear strain ($\gamma_{xy}$) to a new set of axes rotated by an angle $\theta$.

The resulting equations are mathematically identical in structure to the plane stress equations, with a minor substitution:
*   Replace normal stress ($\sigma$) with normal strain ($\epsilon$).
*   Replace shear stress ($\tau$) with **half** the engineering shear strain ($\gamma / 2$).

The normal strain acting along the new $x'$ axis is:
$$ \epsilon_{x'} = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2}\cos(2\theta) + \frac{\gamma_{xy}}{2}\sin(2\theta) $$

The shear strain associated with the new $x'-y'$ axes is:
$$ \frac{\gamma_{x'y'}}{2} = -\frac{\epsilon_x - \epsilon_y}{2}\sin(2\theta) + \frac{\gamma_{xy}}{2}\cos(2\theta) $$

## 2. Principal Strains and Maximum Shear Strain

Exactly as with stress, we can find the specific angles where the normal strain reaches its absolute maximum and minimum values (the **Principal Strains**, $\epsilon_1, \epsilon_2$).
At these specific principal angles, the shear strain $\gamma$ is perfectly zero. The square element stretches into a perfect rectangle without any skewed warping.

$$ \epsilon_{1,2} = \frac{\epsilon_x + \epsilon_y}{2} \pm \sqrt{\left(\frac{\epsilon_x - \epsilon_y}{2}\right)^2 + \left(\frac{\gamma_{xy}}{2}\right)^2} $$

The Maximum In-Plane Shear Strain occurs on planes rotated $45^\circ$ from the principal strain planes.
$$ \frac{\gamma_{max, in-plane}}{2} = \sqrt{\left(\frac{\epsilon_x - \epsilon_y}{2}\right)^2 + \left(\frac{\gamma_{xy}}{2}\right)^2} $$

## 3. Why Transform Strain?

You might wonder why we bother transforming strain when we already have stress transformations.
The answer lies in experimental testing. 
We cannot physically measure "stress" inside a solid piece of metal. We can only glue electrical sensors to the surface of the metal that physically stretch. We measure *strain*.
To determine the critical stresses causing failure, we must first measure the strains in various directions, mathematically transform them to find the principal strains, and then use Hooke's law to convert those into principal stresses.
