---
title: "Transonic Aerodynamics and Wave Drag"
---

# Transonic Aerodynamics and Wave Drag

The **transonic regime** (roughly Mach 0.7–1.2) is the most aerodynamically complex speed range. Mixed subsonic and supersonic regions coexist on the vehicle, shock waves appear and move dramatically with small changes in flight condition, and both lift and drag behave in highly non-linear ways.

## 1. Onset of Transonic Flow

As a commercial airliner cruises near Mach 0.85, the airflow must accelerate to go around the curved top surface of the wing. At the suction peak (near 15–20% chord on a typical wing), the local velocity exceeds Mach 1.0 even though the aircraft itself is sub-sonic.

A supersonic pocket forms on the upper surface, terminated by a **normal shock wave** that abruptly decelerates the flow back to subsonic. This is the beginning of the **transonic drag rise**.

## 2. Wave Drag

When a shock wave forms on the wing:
1. The shock converts kinetic energy of the supersonic pocket into heat — an irreversible thermodynamic loss.
2. The strong adverse pressure gradient behind the shock may cause boundary layer separation, creating a turbulent wake.
3. The net result is a dramatic, sudden increase in drag: **wave drag** (also called compressibility drag).

The **drag divergence Mach number** $M_{DD}$ is defined as the Mach number at which $\frac{\partial C_D}{\partial M} = 0.1$ (a conventional threshold). This is the design cruise speed for commercial aircraft — slightly below $M_{DD}$ to avoid excessive wave drag penalties.

## 3. Area Rule (Whitcomb's Area Rule)

Richard Whitcomb discovered in 1952 that total wave drag of a body is determined primarily by the **longitudinal distribution of its total cross-sectional area** — the combined cross-section of fuselage + wings + everything.

**The insight:** A body of revolution with the smoothest possible area distribution (a Sears-Haack body shape) has the minimum possible wave drag.

**Consequence:** To minimize wave drag of the complete airplane, the fuselage must be "waisted" (pinched inward) at the wing junction to compensate for the sudden increase in cross-sectional area added by the wings. The total area distribution should vary as smoothly as a Sears-Haack body.

This is why many early supersonic fighters (F-102 Delta Dagger) had a distinctive "coke bottle" fuselage shape — it was literally pinched at the wing station to follow the area rule.

## 4. Swept Wings for Transonic Delay

Wing sweep is the primary engineering technique for delaying the onset of compressibility effects:

For a wing swept back by angle $\Lambda$, the effective Mach number "seen" by the airfoil section is:
$$M_{effective} = M_\infty \cos\Lambda$$

The flow component perpendicular to the wing leading edge is $V_\infty \cos\Lambda$ — reduced from the free-stream velocity. Since aerodynamic forces depend on this component, sweeping the wing back effectively reduces the impact of compressibility.

A 35° swept wing moves $M_{cr}$ from approximately 0.72 (for an unswept wing) to approximately 0.82 — allowing commercial jets to cruise at Mach 0.85 with manageable wave drag.

**Penalty:** Swept wings suffer from reduced lift slope, tip stall tendencies, and complex structural loads. The design always involves a trade-off between sweep angle for compressibility delay and the resulting aerodynamic and structural compromises.
