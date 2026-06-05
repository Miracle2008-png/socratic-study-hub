---
title: "Rotating Imbalance and Base Excitation"
---

# Rotating Imbalance and Base Excitation

The harmonic force $F_0\sin(\Omega t)$ rarely appears as a pure external force in reality. The two most common physical sources of forced vibration in mechanical systems are **rotating imbalance** (in machines) and **base excitation** (in vehicles and earthquake engineering).

## 1. Rotating Imbalance

Any rotating machine — electric motors, fans, turbines, wheels — contains a small residual mass $m_e$ (the eccentric mass) that is not perfectly centered on the axis of rotation. As the rotor spins at angular speed $\Omega$, this off-center mass generates a centrifugal force that rotates with the shaft.

The vertical component of this centrifugal force is $F(t) = m_e e \Omega^2 \sin(\Omega t)$, where $e$ is the eccentricity (distance of $m_e$ from the center).

The total mass of the machine is $M$ (including $m_e$). The equation of motion for the machine body bouncing on its mounts:
$$M\ddot{x} + c\dot{x} + kx = m_e e \Omega^2 \sin(\Omega t)$$

The steady-state amplitude of vibration is:
$$X = \frac{(m_e e / M) r^2}{\sqrt{(1-r^2)^2 + (2\zeta r)^2}}$$

Note the $r^2$ in the numerator — at low speeds ($r \ll 1$), imbalance barely vibrates the machine. At resonance ($r = 1$) amplitude peaks. At very high speeds ($r \gg 1$), amplitude approaches $m_e e / M$.

**Balancing** is the engineering process of adding or removing small masses from a rotor to drive $m_e e$ toward zero, eliminating the forcing function at its source.

## 2. Base Excitation

When the support (ground, vehicle floor, aircraft fuselage) itself vibrates, the mounted equipment experiences forced vibration — even if no direct force acts on the equipment.

Let the base move with $y(t) = Y\sin(\Omega t)$. The relative displacement $z = x - y$ (equipment minus base) governs the internal forces.

The **Transmissibility Ratio (TR)** quantifies how much of the base vibration amplitude $Y$ is transmitted to the equipment amplitude $X$:
$$TR = \frac{X}{Y} = \sqrt{\frac{1 + (2\zeta r)^2}{(1-r^2)^2 + (2\zeta r)^2}}$$

*   If $TR < 1$: The mount **isolates** the equipment from the vibration (desirable for sensitive instruments).
*   If $TR > 1$: The mount **amplifies** the vibration (dangerous).

**For isolation ($TR < 1$):** The frequency ratio must satisfy $r > \sqrt{2}$, regardless of damping level. This means the natural frequency $\omega_n$ must be much lower than the disturbance frequency $\Omega$.

Achieving a low $\omega_n$ requires a very **soft** mount (small $k$). Rubber vibration isolators in industrial machinery and camera gimbal mounts work precisely on this principle.
