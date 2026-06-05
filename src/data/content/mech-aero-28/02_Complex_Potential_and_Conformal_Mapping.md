---
title: "Complex Potential and Conformal Mapping"
---

# Complex Potential and Conformal Mapping

One of the most powerful mathematical tools in 2D inviscid aerodynamics is **Complex Potential Theory**, which uses complex variable mathematics to solve flow problems analytically.

## 1. The Complex Potential $w(z)$

For 2D incompressible, irrotational flow, both the velocity potential $\phi$ and the stream function $\psi$ satisfy Laplace's equation. Furthermore, they satisfy the **Cauchy-Riemann equations**:
$$\frac{\partial \phi}{\partial x} = \frac{\partial \psi}{\partial y} = u \qquad \frac{\partial \phi}{\partial y} = -\frac{\partial \psi}{\partial x} = -v$$

This means $\phi$ and $\psi$ are **conjugate harmonic functions**, and we can combine them into a single **complex potential**:
$$w(z) = \phi(x,y) + i\psi(x,y)$$

where $z = x + iy$ is the complex coordinate.

The complex velocity is the derivative:
$$\frac{dw}{dz} = \frac{\partial \phi}{\partial x} + i\frac{\partial \psi}{\partial x} = u - iv$$

This single complex function $w(z)$ completely describes the 2D flow field.

## 2. Elementary Flows as Complex Potentials

The elementary potential flows have elegant complex representations:

| Flow | Complex Potential $w(z)$ |
|------|--------------------------|
| Uniform flow (velocity $U$ at angle $\alpha$) | $U e^{-i\alpha} z$ |
| Source/Sink (strength $q$) | $\frac{q}{2\pi}\ln z$ |
| Free vortex (circulation $\Gamma$) | $\frac{-i\Gamma}{2\pi}\ln z$ |
| Doublet (strength $\kappa$) | $\frac{\kappa}{2\pi z}$ |
| Flow over a cylinder | $U\left(z + \frac{a^2}{z}\right)$ |

The superposition of complex potentials is simply addition—an enormous computational advantage.

## 3. Conformal Mapping

**Conformal mapping** transforms one complex plane (the $z$-plane with a complicated geometry) into another plane (the $\zeta$-plane with a simpler geometry) via an analytic function $\zeta = f(z)$.

Key property: conformal maps preserve angles. If streamlines and equipotential lines are orthogonal in the $z$-plane, they remain orthogonal in the $\zeta$-plane.

**Strategy:** Solve the flow in the simple $\zeta$-plane (e.g., flow over a circle), then transform the solution back to the complicated $z$-plane (e.g., flow over an airfoil).

## 4. The Joukowski Transformation

The most celebrated conformal mapping in aerodynamics is the **Joukowski transformation**:
$$\zeta = z + \frac{c^2}{z}$$

where $c$ is a constant.

Starting with a circle in the $z$-plane of radius $a > c$ centered at origin:
- If the circle is centered at the origin: maps to a **flat plate** of length $4c$.
- If the circle is shifted along the real axis: maps to a **symmetric airfoil** (no camber, finite thickness).
- If the circle is shifted off-center: maps to a **cambered airfoil** with a characteristic cusped trailing edge.

The Joukowski family of airfoils was extensively studied in the early 20th century. While no longer used for practical aircraft design (they have overly thin, cusped trailing edges), they remain invaluable for:
1. Analytically validating CFD codes.
2. Teaching the principles of airfoil design.
3. Providing exact benchmark solutions for numerical methods.

The lift coefficient for a Joukowski airfoil is:
$$C_L = 2\pi(1 + t/c)\sin\alpha$$

where $t/c$ is the thickness-to-chord ratio, showing how thickness slightly increases lift slope above the flat-plate value.
