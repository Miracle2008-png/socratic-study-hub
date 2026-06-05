# Elastic Strain Energy for Torsion and Shear

To complete our energy toolkit, we must account for the strain energy stored when a material is warped by shear stresses ($\tau$), either from twisting (torsion) or from transverse shear forces.

The master equation for shear strain energy mirrors the normal strain equation, substituting shear stress ($\tau$) and the Shear Modulus ($G$):
$$ U_i = \int_V \frac{\tau^2}{2G} dV $$

## 1. Strain Energy for Torsion

For a circular shaft subjected to an internal torque $T$, the shear stress is governed by the torsion formula: $\tau = \frac{T\rho}{J}$.

Substituting this into the master equation and performing the same mathematical isolation of the polar moment of inertia ($J = \int \rho^2 dA$) yields the formula for torsional strain energy:

$$ U_i = \int_0^L \frac{T(x)^2}{2GJ} dx $$

If the internal torque $T$ is constant and the shaft is a uniform cylinder, this simplifies to the standard formula:
$$ U_i = \frac{T^2 L}{2GJ} $$

This formula is heavily used in the design of automotive driveshafts and coil springs (which are essentially coiled torsion bars).

## 2. Strain Energy for Transverse Shear

When a beam bends, it also experiences a transverse internal shear force $V$. This force causes the cross-section to warp, storing shear strain energy.

The shear stress formula is $\tau = \frac{VQ}{It}$. Because this stress varies parabolically across the cross-section, the integration is quite complex.

To simplify the result for engineering practice, we introduce a Form Factor ($f_s$) that depends on the cross-sectional shape (e.g., $f_s = 1.2$ for a solid rectangle).

The resulting formula for transverse shear strain energy is:
$$ U_i = \int_0^L f_s \frac{V(x)^2}{2GA} dx $$

## 3. When is Shear Energy Important?

For standard, slender beams, the energy stored by transverse shear is astronomically small—often less than 1% of the energy stored by bending.
Therefore, in almost all practical structural analyses, the **transverse shear energy is completely ignored**. 

We calculate the total energy of a standard beam by summing only the axial, bending, and torsional energy:
$$ U_{total} = \int \frac{N^2}{2EA} dx + \int \frac{M^2}{2EI} dx + \int \frac{T^2}{2GJ} dx $$

The only time transverse shear energy must be included is when analyzing very short, deep, stubby beams, where the shear deformation dominates the bending deformation.
