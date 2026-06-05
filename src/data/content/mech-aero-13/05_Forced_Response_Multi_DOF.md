---
title: "Forced Response of Multi-DOF Systems"
---

# Forced Response of Multi-DOF Systems

Once the modal properties (frequencies $\omega_i$, mode shapes $\{X\}^{(i)}$, damping ratios $\zeta_i$) are established, computing the forced response to any load vector $\{F(t)\}$ is straightforward using modal superposition.

## 1. Harmonic Forcing

For a harmonic force vector $\{F(t)\} = \{F_0\}\sin(\Omega t)$, the steady-state physical response is:

$$\{x\} = \sum_{i=1}^n \{X\}^{(i)} \frac{F_{ri}/k_{ri}}{\sqrt{(1-r_i^2)^2 + (2\zeta_i r_i)^2}} \sin(\Omega t - \phi_i)$$

Where $r_i = \Omega/\omega_i$ is the frequency ratio for the $i$-th mode and $F_{ri} = \{X\}^{(i)T}\{F_0\}$ is the modal force amplitude.

The physical response is thus a sum of mode-shape patterns, each magnified by its own DMF based on how close $\Omega$ is to that mode's natural frequency.

**Modal participation:** If the forcing vector $\{F_0\}$ is orthogonal to a particular mode shape (i.e., $F_{ri} = 0$), that mode is never excited regardless of frequency. A distributed load that is antisymmetric about the center of a symmetric structure will never excite symmetric modes.

## 2. Frequency Response Functions (FRFs)

The **Frequency Response Function** $H_{jk}(\Omega)$ gives the complex amplitude of response at DOF $j$ due to a unit harmonic force at DOF $k$:

$$H_{jk}(\Omega) = \sum_{i=1}^n \frac{X_j^{(i)} X_k^{(i)} / m_{ri}}{\omega_i^2 - \Omega^2 + 2i\zeta_i\omega_i\Omega}$$

This is the **modal summation formula for FRFs** — the core equation of experimental modal analysis.

The complete FRF matrix $[H(\Omega)]$ (size $n \times n$) gives the response at every DOF to forces at every DOF. In practice, measuring a single **row** or **column** of $[H]$ is sufficient to extract all natural frequencies and mode shapes.

## 3. Transient Response via Modal Convolution

For arbitrary forcing $\{F(t)\}$, apply Duhamel's integral independently to each modal equation:
$$q_i(t) = \frac{1}{m_{ri}\omega_{di}} \int_0^t F_{ri}(\tau) e^{-\zeta_i\omega_i(t-\tau)}\sin[\omega_{di}(t-\tau)]d\tau$$

Then superimpose: $\{x(t)\} = \sum_i \{X\}^{(i)} q_i(t)$.

This approach is far more efficient than **direct time integration** (solving all $n$ coupled ODEs simultaneously by stepping through time). For a 500,000-DOF model with 50 retained modes, modal superposition requires solving 50 scalar integrals vs. time-stepping a 500,000-equation system at every time step.

**When direct integration is preferred:** Problems with highly nonlinear behavior (large deformations, contact, plasticity) where modal superposition assumes linearity. Methods include explicit integration (Newmark-$\beta$, HHT-$\alpha$), where the time step must satisfy the Courant stability condition.
