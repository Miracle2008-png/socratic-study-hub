---
title: "Orbital Rendezvous and Proximity Operations"
---

# Orbital Rendezvous and Proximity Operations

Rendezvous is the process of bringing two spacecraft together in the same orbit so they can dock (e.g., a Dragon capsule docking with the ISS). It is one of the most counter-intuitive processes in physics, famously frustrating early Gemini astronauts until the orbital mechanics were fully understood.

## 1. The Paradox of Catching Up

Imagine you are in the same circular orbit as the ISS, trailing 100 km behind it. Your intuition, based on driving a car, tells you to point your nose at the ISS and fire your engines to speed up and catch it.

In orbital mechanics, this is a disaster.
-   If you point forward and accelerate (a prograde burn), you add energy to your orbit.
-   Adding energy raises your altitude (your orbit becomes elliptical, with a higher apogee).
-   Because higher orbits have slower orbital velocities and longer periods (Kepler's Third Law), **speeding up actually makes you take longer to go around the Earth**. The ISS, in its lower, faster orbit, will pull further away from you.

## 2. The Phasing Orbit Maneuver

To catch a target ahead of you in the same orbit, you must temporarily transition to a different orbit to change your "phase" (your angular position relative to the target).

**To Catch Up (Target is Ahead):**
1.  Fire your engines *backwards* (retrograde). This feels wrong, but it removes energy.
2.  Your altitude drops, placing you in a lower elliptical orbit (a "phasing orbit").
3.  Because you are now in a lower orbit, your orbital period is shorter. You go around the Earth faster than the target.
4.  After one (or several) orbits, you will have "lapped" the target and closed the angular gap.
5.  When you return to the apogee of your phasing orbit (which still intersects the target's orbit), you fire prograde to circularize, matching speeds right next to the target.

**To Fall Back (Target is Behind):**
1.  Fire *prograde*. Your altitude increases.
2.  Your orbital period becomes longer than the target's.
3.  The target catches up to you from below.
4.  Fire retrograde to circularize once the target is nearby.

## 3. Clohessy-Wiltshire (CW) Equations

Once the spacecraft are very close (within a few kilometers), plotting massive elliptical orbits is no longer practical. We transition to "proximity operations."

Engineers use the **Clohessy-Wiltshire equations** (also called Hill's equations). These are linearized equations of motion that describe the movement of a "chaser" spacecraft relative to a "target" spacecraft in a local, rotating coordinate frame attached to the target.

These equations reveal bizarre local physics:
-   **V-Bar (Velocity Vector) Approach:** Approaching the target directly from in front or behind. It requires constant thrusting to fight orbital mechanics, which constantly tries to pull the chaser into a different altitude.
-   **R-Bar (Radius Vector) Approach:** Approaching from directly above or below. Because the chaser is at a different altitude than the target, natural orbital mechanics will cause it to drift forward or backward.
-   **The "Hop":** If you thrust straight *up* (away from Earth), you don't go straight up. Coriolis effects in the rotating frame cause you to loop up and then drift backward relative to the target.

Modern automated docking systems continuously solve these complex relative motion equations to fire RCS thrusters in precise bursts, guiding the spacecraft in for a soft docking.
