---
title: "Forced Harmonic Vibration and Resonance"
---

# Forced Harmonic Vibration and Resonance

Free vibration tells us what a structure does after being disturbed. **Forced vibration** tells us what happens when a structure is continuously driven by an external time-varying force. This is the critical analysis for rotating machinery, engines, pumps, and any structure subjected to periodic loads.

## 1. Equation of Motion

For a damped SDOF system driven by a harmonic force $F(t) = F_0 \sin(\Omega t)$:
$$m\ddot{x} + c\dot{x} + kx = F_0\sin(\Omega t)$$

Where:
- $F_0$ = force amplitude
- $\Omega$ = forcing frequency (the speed of the machine, in rad/s)
- $\omega_n$ = natural frequency of the structure

The complete solution is the sum of:
1. **Transient response**: The free-vibration solution that decays exponentially with damping. Disappears after the system has run for a few cycles.
2. **Steady-state response**: The persistent oscillation at the forcing frequency $\Omega$, which remains as long as the excitation continues.

## 2. The Steady-State Response

The steady-state amplitude $X$ and phase $\phi$ of the response are:
$$X = \frac{F_0/k}{\sqrt{(1-r^2)^2 + (2\zeta r)^2}}$$
$$\tan\phi = \frac{2\zeta r}{1 - r^2}$$

Where $r = \Omega/\omega_n$ is the **Frequency Ratio** — the ratio of forcing frequency to natural frequency.

The **Dynamic Magnification Factor (DMF)** is the ratio of the dynamic amplitude to the static deflection ($F_0/k$):
$$\text{DMF} = \frac{1}{\sqrt{(1-r^2)^2 + (2\zeta r)^2}}$$

## 3. Resonance

The most dangerous operating condition occurs when the forcing frequency equals the natural frequency: $r = \Omega/\omega_n = 1$.

At resonance, for undamped systems ($\zeta = 0$):
$$\text{DMF} \to \infty$$

The amplitude grows without bound. In reality, the structure will fracture.

For damped systems at resonance ($r = 1$):
$$\text{DMF} = \frac{1}{2\zeta}$$

For a steel structure with $\zeta = 0.02$: $\text{DMF} = 1/(2\times0.02) = 25$. A force that normally deflects the structure 1 mm now deflects it **25 mm**. This is precisely how the Tacoma Narrows Bridge collapsed — wind-induced resonance with a DMF that grew until structural failure.

## 4. Design Strategies

Engineers avoid resonance by:
1. **Detuning**: Designing $\omega_n$ to be far from any expected $\Omega$ (usually $r < 0.5$ or $r > 1.5$).
2. **Adding Damping**: Increasing $\zeta$ flattens the resonance peak and reduces $\text{DMF}$.
3. **Adding Mass**: Lowers $\omega_n$, shifting it away from $\Omega$.
4. **Vibration Absorbers**: Attaching a secondary spring-mass system tuned to counteract resonance (used in skyscraper tuned mass dampers).
