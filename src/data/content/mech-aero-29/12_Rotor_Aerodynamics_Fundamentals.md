---
title: "Rotor Aerodynamics Fundamentals"
---

# Rotor Aerodynamics Fundamentals

Helicopter rotors are rotating wings — each blade section is an airfoil experiencing a local velocity that depends on the blade's rotation speed, span position, and the helicopter's own forward flight speed. The aerodynamic analysis of rotors extends finite wing theory to this uniquely complex rotating environment.

## 1. Blade Element Theory

**Blade Element Theory (BET)** divides each blade into small spanwise strips (blade elements) and treats each strip as a 2D airfoil in local flow.

At radial station $r$, for a rotor rotating at angular velocity $\Omega$:
- **Tangential velocity:** $U_T = \Omega r$ (due to rotation)
- **Perpendicular velocity:** $U_P$ (due to induced inflow and climb/descent rate)
- **Resultant velocity:** $U = \sqrt{U_T^2 + U_P^2}$
- **Inflow angle:** $\phi = \arctan(U_P/U_T)$
- **Effective angle of attack:** $\alpha = \theta - \phi$ where $\theta$ is the blade pitch angle

Local lift and drag forces on the element (width $dr$):
$$dL = \frac{1}{2}\rho U^2 c(r) C_l(\alpha) \, dr$$
$$dD = \frac{1}{2}\rho U^2 c(r) C_d(\alpha) \, dr$$

Integrating over all blades and the full blade length gives total rotor thrust and power.

## 2. Blade Element Momentum Theory (BEMT)

BET alone doesn't determine the induced velocity $U_P$ — this requires momentum theory. **BEMT** combines both:

From actuator disk momentum theory (treating the rotor disk as an infinite number of infinitesimal pressure jumps):
$$v_i = \sqrt{\frac{T}{2\rho A_{disk}}}$$

This induced velocity is fed back into BET to refine the local inflow. The iteration converges to self-consistent values of both the induced inflow distribution and the blade aerodynamic loads.

## 3. Asymmetric Flow in Forward Flight

In hover, every blade section sees the same velocity at the same radial station. In forward flight, the advancing blade (moving in the same direction as the helicopter's forward velocity $V$) sees a much higher speed than the retreating blade.

- **Advancing blade** (azimuth $\psi = 90°$): $U_T = \Omega r + V\sin\psi = \Omega r + V$
- **Retreating blade** (azimuth $\psi = 270°$): $U_T = \Omega r - V$

Near the tip of the retreating blade, $U_T$ can become very small or even negative — the blade tip is actually moving backward through the air. This **retreating blade stall** is the fundamental speed limit of conventional helicopters. If flight speed increases too much, the retreating blade stalls, creating massive asymmetric lift that cannot be corrected.

## 4. Blade Articulation and Flapping

To cope with the asymmetric lift in forward flight, helicopter blades are **articulated** — hinged to allow:
- **Flapping:** Blades move up and down. The advancing blade (high lift) flaps upward, reducing its effective angle of attack; the retreating blade (low lift) flaps downward, increasing its angle of attack — equalizing lift across the rotor disk.
- **Lead-lag:** Blades move fore and aft to accommodate Coriolis forces from flapping.
- **Pitch:** Collective and cyclic pitch changes provide thrust and directional control.

This elegant mechanical system (invented by Juan de la Cierva for his Autogiro in the 1920s) transforms the helicopter from an aerodynamically impossible machine into a practical aircraft.
