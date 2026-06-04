---
title: "Elastic Strain Energy for Axial Loading"
---

# Elastic Strain Energy for Axial Loading

To make energy methods practical, we must evaluate the master volume integral ($U_i = \int \frac{\sigma^2}{2E} dV$) for the specific types of loading we encounter in engineering.

Let's begin with the simplest case: a rod subjected to an internal axial force $N$.

## 1. The Derivation

For a straight bar under axial load, we know the stress is uniform across the cross-section: 
$$ \sigma = \frac{N}{A} $$

We substitute this into the master strain energy equation. We also change the volume differential $dV$ into a slice of the beam: $dV = A dx$.

$$ U_i = \int_0^L \frac{\left(\frac{N}{A}\right)^2}{2E} (A dx) $$

Simplifying the algebra:
$$ U_i = \int_0^L \frac{N^2}{2EA} dx $$

## 2. Prismatic Bars with Constant Load

If the bar is prismatic (the cross-sectional area $A$ is constant) and the internal normal force ($N$) is constant throughout the entire length $L$, the integration becomes trivial. The constants pull out of the integral, leaving $\int dx = L$.

The resulting standard formula for axial strain energy is:
$$ U_i = \frac{N^2 L}{2EA} $$

## 3. Application to Trusses

This simple formula is incredibly powerful for analyzing trusses. 
A truss is simply a collection of $n$ individual bars, all experiencing constant axial loads. 
To find the total strain energy stored in an entire truss structure, you do not need to perform complex 3D integration. You simply calculate the energy of each individual bar using $N^2 L / 2EA$, and add them all together:

$$ U_{i, total} = \sum_{j=1}^{n} \frac{N_j^2 L_j}{2 A_j E_j} $$

Because the internal force $N$ is squared, a member in compression (negative $N$) stores the exact same amount of positive strain energy as a member in tension. 
If a load hits the truss, the energy distributes itself rapidly through the entire network of members, stretching some and compressing others, all storing energy to stop the load.
