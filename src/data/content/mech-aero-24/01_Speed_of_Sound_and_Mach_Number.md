---
title: "Speed of Sound and Mach Number"
---

# Speed of Sound and Mach Number

In traditional fluid mechanics (hydraulics, low-speed aerodynamics), fluids are treated as incompressible—their density $\rho$ remains constant.
However, when gas speeds become very high, the pressure variations in the flow become so severe that they compress the gas, dramatically changing its density and temperature. This is the domain of **Compressible Flow and Gas Dynamics**.

## 1. The Speed of Sound ($c$ or $a$)

When an object moves through a fluid, it pushes fluid molecules out of the way, creating a tiny pressure pulse. This pressure pulse (a sound wave) propagates outward through the fluid via molecular collisions.

The speed at which this infinitesimal pressure wave travels is the **speed of sound**. 

Using a 1D control volume analysis of a weak pressure wave moving through a stationary gas, conservation of mass and momentum yield the fundamental thermodynamic definition of the speed of sound:
$$c = \sqrt{\left(\frac{\partial P}{\partial \rho}\right)_s}$$
(The derivative is evaluated at constant entropy, $s$, because sound waves are so weak and rapid that heat transfer is negligible—an isentropic process).

## 2. Speed of Sound in an Ideal Gas

For an ideal gas, the isentropic relation is $P = \text{constant} \cdot \rho^k$, where $k$ (or $\gamma$) is the ratio of specific heats ($c_p/c_v$).
Taking the derivative yields:
$$c = \sqrt{k R T}$$

Where:
- $k$: Ratio of specific heats (1.4 for air at room temp).
- $R$: Specific gas constant (287 J/kg·K for air).
- $T$: Absolute temperature in **Kelvin**.

**Crucial Insight:** For an ideal gas, the speed of sound depends *only* on its absolute temperature. It does not depend on pressure or density. At sea level (15°C), the speed of sound in air is about 340 m/s. At 35,000 feet (-50°C), it drops to about 295 m/s.

## 3. The Mach Number ($M$)

The behavior of a compressible flow is dictated entirely by the ratio of the fluid's local velocity ($V$) to the local speed of sound ($c$). This is the dimensionless **Mach Number ($M$)**:
$$M = \frac{V}{c}$$

The Mach number fundamentally defines the "communication" within the flow field.
Imagine a jet flying through the air. As it pushes air forward, it emits pressure waves (sound) traveling outward at speed $c$.
- **Subsonic Flow ($M < 1$):** The jet flies slower than its own sound waves. The pressure waves race out *ahead* of the jet, "warning" the air ahead to move out of the way. The air smoothly diverges around the plane.
- **Supersonic Flow ($M > 1$):** The jet flies faster than sound. It outruns its own pressure waves. The air ahead receives absolutely zero warning that the jet is coming. The jet violently slams into the undisturbed air, forcing it to instantly compress in a discontinuous shock wave.

## 4. Flow Regimes

1. **Incompressible Flow ($M < 0.3$):** Density changes are less than 5%. We can safely assume $\rho = \text{constant}$ and use standard Bernoulli equations. (Cars, drones, small planes, wind tunnels).
2. **Subsonic Compressible ($0.3 < M < 1.0$):** Density changes are significant, but no shock waves exist. (Commercial airliners cruise around $M=0.85$).
3. **Transonic ($0.8 < M < 1.2$):** The most complex regime. Flow over the wings accelerates past Mach 1, creating localized shock waves even while the airplane itself is subsonic.
4. **Supersonic ($1.2 < M < 5.0$):** Flow is entirely above Mach 1. Shock waves are present everywhere.
5. **Hypersonic ($M > 5.0$):** Speeds are so extreme that the shock waves physically heat the air to plasma temperatures, causing chemical dissociation. (Spacecraft reentry, ICBMs).
