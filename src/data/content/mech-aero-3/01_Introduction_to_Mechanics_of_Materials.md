# Introduction to Mechanics of Materials

Statics deals primarily with the external forces acting on a rigid body in equilibrium. However, no physical body is truly perfectly rigid. All structures deform under load.

**Mechanics of Materials** (also known as Strength of Materials or Mechanics of Deformable Bodies) is the branch of applied mechanics that deals with the internal behavior of solid bodies under the action of external loadings.

## 1. The Core Objective

The primary objective of Mechanics of Materials is to provide the engineer with the analytical tools to predict three critical phenomena in any loaded structure:

1. **Stress (Strength):** Will the material break, fracture, or permanently yield under the applied load? The internal forces must not exceed the physical strength of the material.
2. **Strain (Stiffness):** Will the structure deform excessively? Even if a beam doesn't break, if it sags too much, it fails its serviceability requirement. We must quantify deformations.
3. **Stability:** Will the structure buckle or collapse geometrically before the material itself actually fails? (This is a primary concern for long, slender compressive members like columns).

## 2. From External to Internal

To analyze internal behavior, we must transition from the macroscopic external forces found in statics to the microscopic internal intensity of forces.

Consider a solid metal rod suspended from a ceiling and supporting a heavy weight $P$ at its bottom. 
Using statics, we can pass an imaginary cutting plane through the rod. To maintain equilibrium of the lower portion, the cut face must exert an upward internal resultant force equal to $P$.

Statics tells us the *total* internal force is $P$. However, statics cannot tell us how that force is distributed across the circular cross-section of the rod. Is it concentrated entirely in the center? Is it uniformly distributed? 

Mechanics of Materials steps in to answer how this total internal resultant force is distributed continuously across the material's cross-sectional area.

## 3. The Concept of a Continuum

To mathematically describe internal forces, we make a fundamental assumption: we model the material as a **continuum**. 

We ignore the discrete atomic or molecular structure of the material. Instead, we assume the matter is continuously and uniformly distributed throughout the volume of the body. This assumption allows us to use continuous mathematical functions (calculus) to describe the variation of internal forces and deformations at infinitesimally small points within the body.

This assumption is highly accurate for engineering metals, polymers, and concrete, provided the physical dimensions of the structural member are vastly larger than the microscopic grain structures of the material.
