---
title: "Prandtl Lifting Line Theory"
---

# Prandtl Lifting Line Theory

Ludwig Prandtl's **Lifting Line Theory** (1918–1919) is the foundational analytical model for 3D finite wing aerodynamics. It bridges 2D thin airfoil results with 3D wing performance by accounting for the inevitable induced effects of the finite span.

## 1. The Horseshoe Vortex Model

Each spanwise section of the wing generates a local lift force, which by the Kutta-Joukowski theorem requires local bound circulation $\Gamma(y)$ that varies along the span.

By Helmholtz's vortex theorems, a vortex filament of strength $\Gamma$ cannot end abruptly — it must either close on itself or extend to infinity. As the bound circulation changes by $d\Gamma$ across a spanwise increment $dy$, a free trailing vortex of strength $d\Gamma$ must peel off the wing trailing edge.

The complete vortex system models the wing as:
1. A **bound vortex** of varying strength $\Gamma(y)$ along the lifting line (the quarter-chord of the wing).
2. A **semi-infinite trailing vortex sheet** extending downstream to infinity, composed of infinitely many infinitesimally thin vortex filaments, each of strength $d\Gamma/dy \cdot dy$.

## 2. Induced Velocity from the Trailing Vortex Sheet

Using the **Biot-Savart law** (the fluid dynamics analog of the magnetostatics formula relating current to magnetic field), the downwash velocity $w(y_0)$ induced at spanwise station $y_0$ by the entire trailing vortex sheet is:

$$w(y_0) = \frac{-1}{4\pi} \int_{-b/2}^{b/2} \frac{d\Gamma/dy}{y_0 - y} dy$$

This downwash is negative (pointing downward, opposing the lift-generating flow direction).

## 3. The Fundamental Equation

The **induced angle of attack** at station $y_0$ is:
$$\alpha_i(y_0) = \frac{-w(y_0)}{V_\infty} = \frac{1}{4\pi V_\infty} \int_{-b/2}^{b/2} \frac{d\Gamma/dy}{y_0 - y} dy$$

The local section lift coefficient at $y_0$ depends on the effective angle of attack:
$$C_l(y_0) = a_0 \left[\alpha_{geometric}(y_0) - \alpha_{L=0}(y_0) - \alpha_i(y_0)\right]$$

where $a_0 \approx 2\pi$ is the 2D section lift slope.

By the Kutta-Joukowski theorem, local circulation and section lift coefficient are related:
$$\Gamma(y_0) = \frac{1}{2} V_\infty c(y_0) C_l(y_0)$$

Substituting and combining gives the **Prandtl lifting line equation** — a singular integro-differential equation for the unknown circulation distribution $\Gamma(y)$:

$$\Gamma(y_0) = \frac{a_0 c(y_0)}{2}\left[V_\infty\left(\alpha - \alpha_{L=0}\right) - \frac{1}{4\pi} \int_{-b/2}^{b/2} \frac{d\Gamma/dy}{y_0 - y}dy\right]$$

## 4. The Fourier Series Solution

Substituting the trigonometric change of variable $y = -b/2 \cos\theta$ and expanding $\Gamma$ as a Fourier sine series:

$$\Gamma(\theta) = 4bV_\infty \sum_{n=1}^{\infty} A_n \sin(n\theta)$$

The lifting line equation becomes a system of linear algebraic equations for the coefficients $A_n$, solvable by standard methods.

**Key results:**
$$C_L = \pi AR \cdot A_1$$

$$C_{D_i} = \pi AR \sum_{n=1}^{\infty} n A_n^2 = \frac{C_L^2}{\pi AR}(1 + \delta)$$

where $\delta = \sum_{n=2}^{\infty} n(A_n/A_1)^2 \geq 0$ is the **span efficiency correction** — zero for an elliptical distribution, positive for all other distributions.

This establishes that the **elliptical lift distribution** ($A_n = 0$ for all $n \geq 2$) is uniquely optimal: it minimizes induced drag for a given lift and wingspan.
