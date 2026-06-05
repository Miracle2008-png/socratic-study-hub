---
title: "Vibration Isolation and Absorbers"
---

# Vibration Isolation and Absorbers

When resonance or excessive vibration cannot be avoided by detuning alone, engineers employ two distinct strategies: **vibration isolation** (preventing transmission of vibration) and **vibration absorbers** (adding a secondary system to cancel the primary resonance).

## 1. Vibration Isolation

The goal is to decouple a sensitive payload from a vibrating environment (or to prevent a vibrating machine from disturbing its surroundings).

From the transmissibility ratio: $TR = \frac{X}{Y} < 1$ requires $r = \Omega/\omega_n > \sqrt{2}$.

This means the isolator spring stiffness $k$ must be chosen so that the system's natural frequency $\omega_n = \sqrt{k/m}$ is much lower than the disturbing frequency $\Omega$.

**Isolation mounts are deliberately soft.** Materials used:
*   **Natural rubber**: $\zeta \approx 0.05$, excellent for medium-frequency isolation.
*   **Metal coil springs**: Very low stiffness, low damping ($\zeta \approx 0.005$). Used for precision instruments. Require additional damping elements.
*   **Air springs (pneumatic)**: Adjustable stiffness by changing air pressure. Used in trucks, trains, and semiconductor fab equipment.

**Warning:** Adding more damping actually worsens isolation at high $r$ values (flattens the transmissibility curve). An ideal isolator at high frequency ratios has *less* damping.

## 2. The Tuned Vibration Absorber (TVA)

When a machine operates at a constant speed and cannot be detuned away from its natural frequency, a **Tuned Vibration Absorber** can eliminate the resonance entirely.

The TVA is a secondary spring-mass system ($m_a, k_a$) attached to the primary vibrating mass $M$. It is tuned so that its own natural frequency $\omega_a = \sqrt{k_a/m_a}$ exactly matches the primary system's disturbing frequency $\Omega$.

**How it works:** At resonance, the TVA vibrates violently and exerts a reaction force on the primary mass that is exactly equal and opposite to the external exciting force. The primary mass becomes perfectly motionless — its amplitude falls to zero — while all the vibration energy is concentrated in the TVA.

**Tuning condition:** $\omega_a = \Omega$ — the absorber natural frequency must equal the forcing frequency.

**Limitation:** The TVA only kills vibration at one specific frequency. It creates two new resonance peaks on either side of the original resonance. It is only effective for machines at constant operating speed.

## 3. Tuned Mass Dampers (TMDs) in Tall Buildings

Skyscrapers sway in the wind. The dominant wind turbulence frequencies often coincide with the building's fundamental frequency, creating large amplitudes.

Tuned Mass Dampers — enormous pendulums or sliding masses ($100$ to $1000$ tonnes) mounted at the top of the building — are tuned to the building's natural frequency and equipped with viscous dampers. When the building sways, the TMD swings opposite, reducing peak deflection by up to 40%.

Famous examples: Taipei 101 (660-tonne pendulum), Shanghai Tower (1000-tonne pendulum), the Burj Khalifa uses aerodynamic shaping instead.
