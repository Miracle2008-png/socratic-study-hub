---
title: "Damping in Multi-DOF Systems"
---

# Damping in Multi-DOF Systems

Damping is the most physically complex aspect of structural dynamics. In a SDOF system, a single scalar $c$ (or $\zeta$) fully characterizes damping. In a multi-DOF system, damping should theoretically be represented by a full $[C]$ matrix — but the physical identification of $[C]$ is nearly impossible from first principles.

## 1. The Proportional Damping Assumption

For modal superposition to work cleanly, $[\Phi]^T[C][\Phi]$ must be diagonal. This is guaranteed by **Rayleigh Damping** (also called proportional damping):

$$[C] = \alpha[M] + \beta[K]$$

Where $\alpha$ and $\beta$ are scalar constants. The resulting modal damping ratio for the $i$-th mode is:
$$\zeta_i = \frac{1}{2}\left(\frac{\alpha}{\omega_i} + \beta\omega_i\right)$$

**Calibrating $\alpha$ and $\beta$:** If damping ratios $\zeta_1$ and $\zeta_2$ are known for two specific frequencies $\omega_1$ and $\omega_2$ (measured experimentally), solve:
$$\begin{bmatrix} 1/\omega_1 & \omega_1 \\ 1/\omega_2 & \omega_2 \end{bmatrix} \begin{bmatrix} \alpha \\ \beta \end{bmatrix} = 2\begin{bmatrix} \zeta_1 \\ \zeta_2 \end{bmatrix}$$

**Important limitation:** Rayleigh damping correctly represents $\zeta$ only at two specified frequencies. At other frequencies, $\zeta_i$ varies — increasing with $\omega$ (due to $\beta[K]$ term) and decreasing at low $\omega$ (due to $\alpha[M]$ term). Structural engineers typically choose $\omega_1$ and $\omega_2$ as the lowest and highest frequencies of interest.

## 2. Non-Proportional Damping

For systems with localized damping elements (e.g., a single dashpot at one location, or a damped substructure bolted to an undamped structure), proportional damping is physically inappropriate. The $[\Phi]^T[C][\Phi]$ matrix is no longer diagonal, and modal decoupling fails.

Solutions for non-proportional damping:
- **Complex modal analysis**: Solve a $2n \times 2n$ eigenvalue problem in state space. Eigenvalues and eigenvectors are complex-valued. Computationally expensive but exact.
- **Modal strain energy method**: Approximate damping ratios based on the fraction of modal strain energy stored in the damped elements. A practical engineering approximation.

## 3. Material vs. Viscous Damping

Real structural damping is not truly viscous. **Hysteretic (structural) damping** is more physically accurate — the energy dissipated per cycle is proportional to displacement amplitude (not velocity). The effective damping force is:

$$F_d = i \cdot h \cdot k \cdot x$$

Where $h$ is the **hysteretic damping factor** (loss factor). The frequency-domain equation of motion uses a complex stiffness $k(1 + ih)$.

**Equivalence:** For harmonic loading at frequency $\Omega$, viscous damping $c = hk/\Omega$ is equivalent to hysteretic damping $h$. Hence for harmonic analysis, hysteretic damping can be treated as a frequency-dependent viscous coefficient — but this equivalence breaks down for transient analysis.
