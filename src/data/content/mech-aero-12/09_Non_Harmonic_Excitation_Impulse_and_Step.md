---
title: "Non-Harmonic Excitation: Impulse and Step Loads"
---

# Non-Harmonic Excitation: Impulse and Step Loads

Real-world forces are rarely perfectly sinusoidal. A car hits a pothole, a rocket fires suddenly, a door slams. These **transient** or **arbitrary** forcing functions require different analytical tools than the harmonic forcing analysis.

## 1. The Unit Impulse and Impulse Response

The **Unit Impulse** $\delta(t)$ (Dirac delta function) is a mathematical idealization of an instantaneous force of infinite magnitude but infinitesimally short duration, with a total impulse (integral) of exactly 1.0 N·s.

When a SDOF system is subjected to a unit impulse at $t=0$ from rest, the resulting motion is the **Impulse Response Function (IRF)**, denoted $h(t)$:

$$h(t) = \frac{1}{m\omega_d}e^{-\zeta\omega_n t}\sin(\omega_d t) \quad (t \geq 0)$$

This function is physically the "fingerprint" of the system's dynamic personality. Every SDOF system has a unique $h(t)$.

## 2. The Convolution Integral (Duhamel's Integral)

Any arbitrary force $F(\tau)$ can be thought of as a continuous series of infinitesimal impulses, each of magnitude $F(\tau)d\tau$.

The response to each tiny impulse is $F(\tau)d\tau \cdot h(t - \tau)$ — the impulse response delayed by $\tau$.

Summing (integrating) the response to all these infinitesimal impulses from $\tau=0$ to $\tau=t$ gives the **Convolution Integral** (also called Duhamel's Integral):

$$x(t) = \int_0^t F(\tau) h(t-\tau) d\tau = \frac{1}{m\omega_d}\int_0^t F(\tau)e^{-\zeta\omega_n(t-\tau)}\sin[\omega_d(t-\tau)]d\tau$$

This is the exact solution for the response of a linear SDOF system to any arbitrary forcing function.

## 3. Step Load Response

A step load is a force suddenly applied at $t=0$ and held constant ($F = F_0$ for all $t > 0$). This models a crane suddenly picking up a load, or a pressure suddenly applied in a hydraulic cylinder.

Evaluating the convolution integral for $F(\tau) = F_0$:
$$x(t) = \frac{F_0}{k}\left[1 - e^{-\zeta\omega_n t}\left(\cos(\omega_d t) + \frac{\zeta}{\sqrt{1-\zeta^2}}\sin(\omega_d t)\right)\right]$$

For undamped case ($\zeta = 0$):
$$x(t) = \frac{F_0}{k}(1 - \cos\omega_n t)$$

The maximum displacement is $2F_0/k$ — exactly **twice** the static deflection. This confirms the "suddenly applied load = 2× static" result we derived earlier from energy methods.

## 4. Shock Spectrum

In shock and earthquake engineering, a key design tool is the **Shock Response Spectrum (SRS)**: the maximum response of all possible SDOF systems (varied natural frequency) to a given transient pulse. The SRS allows engineers to assess how severely a shock pulse will affect equipment with different natural frequencies — critical for designing electronics, aircraft components, and nuclear plant equipment to survive blast, drop, or seismic events.
