# Generalized Hooke's Law

In simple uniaxial tension (pulling a rod), stress and strain are linked by Hooke's Law: $\sigma = E\epsilon$. 
In a 3D multiaxial state of stress, the relationship between stress and strain becomes significantly more complex due to the **Poisson Effect**.

If you pull a block of metal in the x-direction ($\sigma_x$), it stretches in the x-direction ($\epsilon_x = \sigma_x/E$). But simultaneously, it shrinks inward in the y and z directions.
This lateral shrinkage is quantified by Poisson's Ratio ($\nu$):
$\epsilon_y = -\nu \epsilon_x = -\nu (\sigma_x/E)$

## 1. The Generalized Equations

If a block is subjected to simultaneous stresses in all three directions ($\sigma_x, \sigma_y, \sigma_z$), the total strain in the x-direction is the sum of:
1.  The stretching caused directly by $\sigma_x$.
2.  The lateral shrinkage caused by $\sigma_y$.
3.  The lateral shrinkage caused by $\sigma_z$.

This superposition yields the **Generalized Hooke's Law** for normal strains:
$$ \epsilon_x = \frac{1}{E} \left[ \sigma_x - \nu(\sigma_y + \sigma_z) \right] $$
$$ \epsilon_y = \frac{1}{E} \left[ \sigma_y - \nu(\sigma_x + \sigma_z) \right] $$
$$ \epsilon_z = \frac{1}{E} \left[ \sigma_z - \nu(\sigma_x + \sigma_y) \right] $$

## 2. Connecting Shear Stress and Shear Strain

Normal stresses only cause normal strains (changes in volume). They do not cause the square element to warp into a rhombus.
Conversely, shear stresses only cause shear strains (warping). They do not cause the element to change volume.

The relationship between shear stress and shear strain is governed by the Shear Modulus ($G$):
$$ \gamma_{xy} = \frac{\tau_{xy}}{G} $$
$$ \gamma_{yz} = \frac{\tau_{yz}}{G} $$
$$ \gamma_{xz} = \frac{\tau_{xz}}{G} $$

## 3. The Relationship Between Material Constants

For isotropic materials (materials that behave the same in all directions, like steel or aluminum), the three material constants ($E, \nu, G$) are not independent. They are mathematically linked by the following fundamental equation:

$$ G = \frac{E}{2(1 + \nu)} $$

If you know Young's Modulus ($E$) and Poisson's ratio ($\nu$) from a simple tensile test, you can perfectly calculate the Shear Modulus ($G$) without having to perform a complex torsion test.

## 4. Application to Strain Rosettes

When an engineer calculates the Principal Strains ($\epsilon_1, \epsilon_2$) from a strain rosette glued to the surface of a plane-stress part ($\sigma_3 = 0$), they use a rearranged version of Generalized Hooke's Law to calculate the final Principal Stresses:

$$ \sigma_1 = \frac{E}{1 - \nu^2} (\epsilon_1 + \nu\epsilon_2) $$
$$ \sigma_2 = \frac{E}{1 - \nu^2} (\epsilon_2 + \nu\epsilon_1) $$

These two numbers ($\sigma_1, \sigma_2$) are the ultimate final result of the experimental testing phase. They are now fed into a Failure Theory to evaluate the safety of the design.
