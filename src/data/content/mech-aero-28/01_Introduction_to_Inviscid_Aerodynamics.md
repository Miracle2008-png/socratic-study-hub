---
title: "Introduction to Inviscid Aerodynamics"
---

# Introduction to Inviscid Aerodynamics

**Inviscid Aerodynamics** is the study of airflows where the effects of viscosity are entirely neglected. While all real fluids have viscosity, this simplification is remarkably accurate for modeling the flow far away from a body's surface, where viscous shear stresses are negligibly small compared to pressure forces.

The fundamental assumption: at sufficiently high Reynolds numbers, viscous effects are confined to a thin boundary layer adjacent to the surface. Outside this layer, the flow behaves as if it has zero viscosity. This permits the use of elegant mathematical tools unavailable in the full viscous equations.

## 1. Governing Equations for Inviscid Flow

Setting viscosity $\mu = 0$ in the Navier-Stokes equations eliminates all viscous terms, leaving the **Euler Equations**:

**Continuity:**
$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{V}) = 0$$

**Momentum (Euler):**
$$\rho \frac{D\vec{V}}{Dt} = -\nabla P + \rho \vec{g}$$

The Euler equations are significantly simpler than Navier-Stokes but remain non-linear due to the convective acceleration $(\vec{V} \cdot \nabla)\vec{V}$.

For **incompressible** inviscid flows (constant density), continuity reduces to $\nabla \cdot \vec{V} = 0$, and we can further assume the flow is **irrotational** if it starts that way. This brings us to the realm of Potential Flow Theory.

## 2. Kelvin's Circulation Theorem

A profound result for inviscid flows is **Kelvin's Circulation Theorem**: In an inviscid, barotropic fluid (pressure depends only on density) with no body forces or conservative body forces only, the **circulation** $\Gamma$ around any material contour (one that moves with the fluid) remains constant in time.

$$\frac{D\Gamma}{Dt} = 0$$

**Physical Meaning:** Vorticity cannot be created or destroyed in an inviscid flow. An irrotational flow started from rest will remain irrotational forever. The only source of vorticity in real flows is viscosity at solid surfaces—which we have deliberately excluded.

This theorem is the bedrock justification for Potential Flow Theory: since there is no viscosity to generate vorticity, any flow starting from rest (with zero vorticity) can be modeled as irrotational everywhere (except at any singularities we deliberately introduce).

## 3. The Velocity Potential and Laplace's Equation

Since the flow is irrotational, $\nabla \times \vec{V} = 0$, and we can define a velocity potential $\phi$ such that:
$$\vec{V} = \nabla \phi$$

Substituting into the incompressible continuity equation:
$$\nabla \cdot \nabla \phi = \nabla^2 \phi = 0$$

This is **Laplace's equation**—linear, elliptic, and extraordinarily well-studied in mathematics. Solutions are called **harmonic functions**.

Key properties that make this powerful:
- **Linearity:** If $\phi_1$ and $\phi_2$ are solutions, so is $c_1\phi_1 + c_2\phi_2$ (superposition principle).
- **Uniqueness:** Given boundary conditions, there is exactly one solution.
- **Analyticity:** Solutions are infinitely differentiable; no shocks or discontinuities (within the inviscid model).

## 4. Bernoulli's Equation for Inviscid Flow

For steady, inviscid, incompressible flow, integrating the Euler equation along a streamline yields Bernoulli's equation:
$$P + \frac{1}{2}\rho V^2 + \rho g z = \text{constant}$$

For **irrotational** inviscid flow, Bernoulli applies everywhere in the flow field (not just along a single streamline):
$$P + \frac{1}{2}\rho V^2 + \rho g z = P_\infty + \frac{1}{2}\rho V_\infty^2$$

The **pressure coefficient** $C_p$ is defined as:
$$C_p = \frac{P - P_\infty}{\frac{1}{2}\rho V_\infty^2} = 1 - \left(\frac{V}{V_\infty}\right)^2$$

This dimensionless quantity is the primary tool for comparing pressure distributions on aerodynamic bodies and is directly measurable via pressure taps in wind tunnel experiments.
