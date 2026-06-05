---
title: "Viscous Damping and the Damping Ratio"
---

# Viscous Damping and the Damping Ratio

In a real physical system, energy is always dissipated — through air resistance, internal material hysteresis, joint friction, or fluid dashpots. Without damping, a disturbed structure would oscillate forever. The most mathematically tractable model for energy dissipation is **viscous damping**, where the damping force is directly proportional to velocity.

## 1. Equation of Motion with Damping

For a spring-mass-damper system with viscous damper constant $c$:
$$m\ddot{x} + c\dot{x} + kx = 0$$

Dividing through by $m$ and introducing standard parameters:
$$\ddot{x} + 2\zeta\omega_n\dot{x} + \omega_n^2 x = 0$$

Where:
- $\omega_n = \sqrt{k/m}$ — the undamped natural frequency.
- $\zeta$ (zeta) — the **Damping Ratio**: $\zeta = \frac{c}{2\sqrt{km}} = \frac{c}{c_c}$

The **Critical Damping Coefficient** $c_c = 2\sqrt{km} = 2m\omega_n$ is the minimum damping that completely suppresses oscillation.

## 2. The Three Damping Cases

The value of $\zeta$ determines the entire character of the response:

**Case 1: Underdamped ($\zeta < 1$, i.e., $c < c_c$)**
The most common case in real structures. The system oscillates with exponentially decaying amplitude:
$$x(t) = e^{-\zeta\omega_n t}\left(A\sin(\omega_d t) + B\cos(\omega_d t)\right)$$

The **Damped Natural Frequency** $\omega_d = \omega_n\sqrt{1-\zeta^2}$ is slightly lower than the undamped frequency. The exponential envelope $e^{-\zeta\omega_n t}$ governs how quickly oscillations die out.

**Case 2: Critically Damped ($\zeta = 1$)**
The system returns to equilibrium as fast as possible without oscillating at all:
$$x(t) = (A + Bt)e^{-\omega_n t}$$
Used in door closers, shock absorber valves, and instrument needle damping where overshoot is unacceptable.

**Case 3: Overdamped ($\zeta > 1$)**
The system returns slowly to equilibrium without oscillating, but more slowly than critical damping. Two real exponential decay rates. Used in some hydraulic systems and large heavy doors.

## 3. Measuring Damping: Logarithmic Decrement

In practice, $\zeta$ is rarely known analytically. It is measured experimentally from a **free vibration decay record** (e.g., from an accelerometer).

Two successive peak amplitudes $x_1$ and $x_2$ (separated by one full period) give the **Logarithmic Decrement** $\delta$:
$$\delta = \ln\left(\frac{x_1}{x_2}\right) = \frac{2\pi\zeta}{\sqrt{1-\zeta^2}}$$

For small damping ($\zeta \ll 1$):
$$\zeta \approx \frac{\delta}{2\pi}$$

Typical values of $\zeta$ for engineering structures:
- Steel structures: $\zeta \approx 0.01$ to $0.02$
- Concrete buildings: $\zeta \approx 0.05$
- Rubber mounts: $\zeta \approx 0.05$ to $0.15$
