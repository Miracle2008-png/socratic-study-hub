---
title: "Introduction to Mechanical Vibrations"
---

# Introduction to Mechanical Vibrations

Every structure and machine in existence vibrates to some degree. When a car engine runs, when a bridge is crossed by traffic, when a washing machine spins — every mechanical system oscillates. The study of these oscillations is **Mechanical Vibrations**.

Understanding vibrations is critical because they are a primary cause of engineering failures:
*   A turbine blade that resonates at its natural frequency will snap within seconds.
*   The Tacoma Narrows Bridge (1940) collapsed not from the wind load directly, but from wind-induced resonant vibration.
*   Fatigue failure — the leading cause of metallic component fracture — is entirely driven by repeated oscillatory stress cycles.

## 1. Key Definitions

**Vibration:** The oscillatory motion of a body about a reference position (usually the static equilibrium position).

**Cycle:** One complete oscillation — from equilibrium, to maximum displacement in one direction, back through equilibrium, to maximum displacement in the other direction, and back to equilibrium.

**Period ($T$):** The time required to complete one full cycle. Units: seconds [s].

**Frequency ($f$):** The number of cycles completed per second. Units: Hertz [Hz].
$$f = \frac{1}{T}$$

**Angular Frequency ($\omega$):** Frequency expressed in radians per second.
$$\omega = 2\pi f = \frac{2\pi}{T} \quad \text{[rad/s]}$$

**Amplitude:** The maximum displacement from the equilibrium position during a cycle.

## 2. Types of Vibration

*   **Free Vibration:** The system is disturbed from equilibrium and then allowed to vibrate freely with no external force applied. The system vibrates at its own natural frequency.
*   **Forced Vibration:** An external time-varying force continuously drives the oscillation. The system vibrates at the frequency of the forcing function, not necessarily its natural frequency.
*   **Undamped Vibration:** Energy is perfectly conserved; the oscillation continues forever with constant amplitude. A theoretical idealization.
*   **Damped Vibration:** Energy is dissipated by friction, air resistance, or internal material damping. Amplitude decays over time until the system returns to rest.

## 3. The Spring-Mass-Damper Model

Every vibration problem, regardless of its physical complexity, is ultimately modelled as a combination of three fundamental elements:
*   **Mass ($m$):** Stores kinetic energy ($\frac{1}{2}m\dot{x}^2$). Provides inertia.
*   **Spring ($k$):** Stores potential energy ($\frac{1}{2}kx^2$). Provides restoring force.
*   **Damper ($c$):** Dissipates energy. Provides a velocity-dependent resistive force ($F_d = c\dot{x}$).

The entire field of vibrations is the systematic mathematical analysis of how these three elements interact under various conditions of initial disturbance and external forcing.
