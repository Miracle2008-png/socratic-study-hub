---
title: "Elastic Strain Energy for Bending"
---

# Elastic Strain Energy for Bending

Bending stores significantly more energy in a structure than simple axial stretching, because it involves tension on one side of the neutral axis and compression on the other.

We must derive the specific strain energy equation for a beam subjected to an internal bending moment $M$.

## 1. The Derivation

We start with the master strain energy equation: $U_i = \int_V \frac{\sigma^2}{2E} dV$.

For bending, we know the stress is defined by the flexure formula: $\sigma = \frac{-My}{I}$.
Substitute this into the integral:
$$ U_i = \int_V \frac{\left(\frac{-My}{I}\right)^2}{2E} dV $$
$$ U_i = \int_V \frac{M^2 y^2}{2EI^2} dV $$

We separate the volume integral ($dV$) into an area integral over the cross section ($dA$) and a length integral along the beam ($dx$):
$$ U_i = \int_0^L \left[ \int_A \frac{M^2 y^2}{2EI^2} dA \right] dx $$

Since the internal moment $M$, the stiffness $E$, and the moment of inertia $I$ are constant for a specific cross-sectional slice, we can pull them out of the inner area integral:
$$ U_i = \int_0^L \frac{M^2}{2EI^2} \left[ \int_A y^2 dA \right] dx $$

Look closely at the term in the brackets: $\int_A y^2 dA$. 
This is the fundamental geometric definition of the Moment of Inertia ($I$)!
Substitute $I$ for the bracketed term, and it cancels one of the $I$'s in the denominator.

## 2. The Bending Energy Formula

The final, elegant formula for the total strain energy stored in a bending beam is:

$$ U_i = \int_0^L \frac{M(x)^2}{2EI} dx $$

Where:
*   $M(x)$ is the algebraic equation for the internal bending moment along the beam.
*   $EI$ is the flexural rigidity.

## 3. Practical Usage

To find the energy stored in a beam:
1.  Draw the Free Body Diagram and solve for reactions.
2.  Make cuts to find the algebraic equation $M(x)$ for the internal moment. (If there are multiple loads, you must write a different $M(x)$ for each segment of the beam).
3.  Square the equation $M(x)$.
4.  Integrate over the length of the segment. 
5.  If there are multiple segments, integrate them separately and sum the total energy.

This integral is the workhorse of advanced structural analysis. It forms the foundation of Castigliano's Theorem, allowing us to find deflections of complex frames without ever drawing an elastic curve.
