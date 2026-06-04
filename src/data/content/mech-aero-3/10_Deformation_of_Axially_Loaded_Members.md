---
title: "Deformation of Axially Loaded Members"
---

# Deformation of Axially Loaded Members

Using the definitions of stress, strain, and Hooke's Law, we can formulate a direct mathematical relationship between the external applied load on a member and its resulting physical deformation. This is the cornerstone of structural stiffness analysis.

## 1. The Elastic Deformation Formula

Consider a straight, prismatic bar of length $L$, uniform cross-sectional area $A$, made of a homogeneous material with modulus of elasticity $E$. It is subjected to an axial load $P$.

1. The internal stress is: $\sigma = \frac{P}{A}$
2. The internal strain is governed by Hooke's Law: $\epsilon = \frac{\sigma}{E}$
3. The total deformation (change in length) is: $\delta = \epsilon L$

By substituting the equations into one another, we derive the fundamental formula for elastic axial deformation:
$$ \delta = \frac{PL}{AE} $$

Where:
- $\delta$ = deformation (elongation is positive, contraction is negative).
- $P$ = internal axial force at the section.
- $L$ = original length of the member.
- $A$ = cross-sectional area.
- $E$ = Modulus of Elasticity of the material.

*Note:* The product $AE$ is often referred to as the **axial rigidity** of the member.

## 2. Members with Multiple Segments

If a member consists of several different segments (each with a different cross-sectional area $A$, different material $E$, or subjected to different internal forces $P$), the total deformation of the entire member is simply the algebraic sum of the deformations of each individual segment.

$$ \delta = \sum \frac{P_i L_i}{A_i E_i} $$

**Crucial Step:** You must use the method of sections (from statics) to determine the correct internal force $P_i$ acting *inside* each specific segment $i$. The internal force is not necessarily equal to the external forces applied at the joints. Pay strict attention to sign convention (Tension = $+$, Compression = $-$).

## 3. Continuously Varying Members

If the cross-sectional area $A(x)$ varies continuously along the length of the bar (like a tapered cone), or if the internal force $P(x)$ varies continuously (such as when the heavy self-weight of the hanging member cannot be neglected), the summation becomes an integral over the length $L$.

We take an infinitesimally small element $dx$. Its deformation is $d\delta = \frac{P(x) dx}{A(x) E}$.
Integrating this over the length of the bar yields:
$$ \delta = \int_0^L \frac{P(x)}{A(x) E} dx $$

This calculus-based formulation allows engineers to precisely determine the stiffness of complex, non-uniform aerospace and mechanical components.
