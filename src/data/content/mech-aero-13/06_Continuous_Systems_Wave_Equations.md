# Continuous Systems: Wave Equations

Lumped-parameter multi-DOF models discretize a structure into finite masses connected by springs. But real structures — rods, beams, plates, shells — are **continuous**: they have infinite DOF (mass and stiffness distributed at every point). The exact governing equation for vibration is a **partial differential equation** (PDE).

## 1. Longitudinal Vibration of a Rod

Consider a uniform rod (cross-section $A$, modulus $E$, density $\rho$, length $L$) vibrating longitudinally (stretching/compressing axially).

Applying Newton's Second Law to an infinitesimal slice $dx$:
$$\rho A \, dx \cdot \frac{\partial^2 u}{\partial t^2} = EA \frac{\partial^2 u}{\partial x^2} dx$$

$$\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}, \quad c = \sqrt{\frac{E}{\rho}}$$

This is the **1D Wave Equation**. $c$ is the **longitudinal wave speed** — the speed at which a compression pulse travels along the rod (typically 5,000–6,000 m/s in steel).

## 2. Separation of Variables

Assume $u(x,t) = U(x) \cdot T(t)$ (product of a space function and a time function). Substituting:
$$\frac{T''}{c^2 T} = \frac{U''}{U} = -\omega^2 \quad \text{(constant)}$$

This separates into:
- **Time equation:** $T'' + \omega^2 T = 0$ → $T(t) = A\sin(\omega t) + B\cos(\omega t)$
- **Space equation:** $U'' + (\omega/c)^2 U = 0$ → $U(x) = C\sin(\omega x/c) + D\cos(\omega x/c)$

## 3. Applying Boundary Conditions

The boundary conditions at the ends of the rod select which values of $\omega$ are physically allowed:

**Fixed-Free Rod (one end clamped, one end free):**
- At $x=0$ (fixed): $U(0) = 0$ → $D = 0$
- At $x=L$ (free): $U'(L) = 0$ → $\cos(\omega L/c) = 0$

This requires $\omega_n L/c = (2n-1)\pi/2$ for $n = 1, 2, 3, \ldots$

The infinite set of natural frequencies is:
$$\omega_n = \frac{(2n-1)\pi c}{2L} = \frac{(2n-1)\pi}{2L}\sqrt{\frac{E}{\rho}}$$

The corresponding mode shapes are half-sine waves: $U_n(x) = \sin\left(\frac{(2n-1)\pi x}{2L}\right)$

**Fixed-Fixed Rod:** Natural frequencies $\omega_n = n\pi c/L$ — full sine waves.

These exact analytical results validate FEA mesh refinement: as an FEA model's mesh is refined (more elements), its natural frequencies converge toward these exact continuous-system values.
