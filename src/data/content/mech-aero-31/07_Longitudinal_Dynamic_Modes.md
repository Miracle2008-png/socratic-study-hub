---
title: "Longitudinal Dynamic Modes"
---

# Longitudinal Dynamic Modes

Solving the linearized longitudinal equations of motion reveals that the aircraft's pitch and speed response to a disturbance is characterized by two distinct oscillatory modes: the Phugoid mode and the Short Period mode.

## 1. The Short Period Mode

The short period mode is a relatively fast oscillation involving primarily angle of attack ($\alpha$) and pitch attitude ($\theta$), with almost no change in forward airspeed.

**Characteristics:**
- **Period:** Typically short, ranging from 1 to 5 seconds depending on aircraft size and speed.
- **Damping:** Usually heavily damped. The oscillation naturally dies out within a few cycles.
- **Physical Mechanism:** If a gust pitches the nose up, the stable aircraft ($C_{m_\alpha} < 0$) generates a restoring moment pushing the nose down. The pitch rate damping ($M_q$, primarily from the horizontal tail) acts like a shock absorber, quickly dissipating the energy of the pitching motion.

**Pilot Interaction:**
Because it is heavily damped, the pilot rarely notices the short period mode during normal flight. However, the *frequency* and *damping ratio* of this mode are critical for handling qualities.
- If it is under-damped (bouncy), the pilot may get into Pilot-Induced Oscillations (PIO) when trying to precisely control pitch during tracking tasks or landing flare.
- If the frequency is too high, the aircraft feels "twitchy" and overly sensitive.

## 2. The Phugoid Mode

The phugoid mode (from a Greek word meaning "flight" or "escape," coined by F.W. Lanchester) is a slow, long-period oscillation characterized by significant changes in airspeed and altitude, with angle of attack remaining nearly constant.

**Characteristics:**
- **Period:** Long, typically taking 30 seconds to several minutes to complete one cycle. The period increases directly with true airspeed.
- **Damping:** Very lightly damped. Left alone, a phugoid oscillation may take a long time to decay, or in some aircraft, it may be mildly unstable and grow very slowly.
- **Physical Mechanism:** It is essentially an exchange between kinetic and potential energy.
    1. A disturbance causes a slight dive, increasing airspeed.
    2. The higher airspeed increases lift, causing the aircraft to climb.
    3. As it climbs, airspeed decays (trading kinetic for potential energy).
    4. The lower airspeed reduces lift, causing the nose to drop and the aircraft to dive again, repeating the cycle.

**Pilot Interaction:**
Because the period is so long, a human pilot can easily control and suppress the phugoid mode through minor, unconscious throttle and elevator adjustments. Therefore, aviation authorities (like the FAA) are relatively lenient regarding phugoid damping requirements, even allowing slight instability as long as the divergence is very slow.

## 3. Factors Affecting the Modes

The characteristics (frequency $\omega_n$ and damping ratio $\zeta$) of these modes depend on the aircraft's stability derivatives:

**Short Period depends mainly on:**
- Pitch stiffness ($M_w$ or $C_{m_\alpha}$): Determines the frequency. A larger static margin yields a higher frequency (stiffer).
- Pitch damping ($M_q$ or $C_{m_q}$): Determines the damping. A larger horizontal tail yields higher damping.

**Phugoid depends mainly on:**
- Drag characteristics: The primary source of damping for the phugoid mode is aerodynamic drag. Higher drag provides better damping. Clean, aerodynamically efficient aircraft (like gliders or modern jetliners) tend to have very lightly damped phugoid modes.
- Forward speed ($u$ derivatives): The exchange of kinetic and potential energy is dictated by the aircraft's trim speed and drag polar.

Flight control systems (autopilots and stability augmentation systems) use pitch rate sensors and elevator inputs to artificially improve the damping and frequency of these modes to optimize passenger comfort and pilot handling.
