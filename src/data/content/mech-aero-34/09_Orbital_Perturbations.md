---
title: "Orbital Perturbations"
---

# Orbital Perturbations

In basic orbital mechanics, we assume the central planet is a perfect point mass and there are no other forces acting on the spacecraft. Under these ideal conditions, an orbit remains fixed in space forever.

In reality, several disturbing forces (perturbations) act on the spacecraft, causing its orbital elements to slowly drift over time. Managing these perturbations is a major part of satellite operations.

## 1. Earth's Oblateness ($J_2$ Perturbation)

The Earth is not a perfect sphere; it is an oblate spheroid. Its rotation causes it to bulge at the equator and flatten at the poles. The gravitational pull of this extra "ring" of mass at the equator pulls unevenly on satellites.

This non-spherical gravity is modeled using spherical harmonics, the most dominant term being $J_2$. The $J_2$ effect causes two major changes to an orbit:

1.  **Nodal Regression:** The equatorial bulge exerts a torque on the orbital plane, causing the entire plane to precess (wobble) like a spinning top. The Right Ascension of the Ascending Node ($\Omega$) slowly drifts westward (for prograde orbits).
2.  **Apsidal Rotation:** The elliptical shape of the orbit slowly rotates within its plane. The Argument of Perigee ($\omega$) slowly changes.

**Exploiting $J_2$ - Sun-Synchronous Orbits:**
Engineers turn the $J_2$ nodal regression from a nuisance into a feature. By carefully selecting a specific altitude and inclination (usually slightly retrograde, ~98°), the node regression rate can be perfectly matched to the Earth's orbit around the sun (about 1 degree per day). This creates a **Sun-Synchronous Orbit (SSO)**, where the satellite crosses the equator at the exact same local solar time every day, ensuring consistent lighting conditions for Earth-observation cameras.

## 2. Atmospheric Drag

Low Earth Orbit (LEO) is not a perfect vacuum. Traces of the atmosphere extend hundreds of kilometers up.

-   Satellites collide with these air molecules, creating aerodynamic drag.
-   Drag acts exactly like a continuous, tiny retrograde engine burn occurring primarily at perigee (where the air is thickest).
-   This removes energy from the orbit, causing the apogee to slowly lower (the orbit "circularizes" and shrinks).
-   Eventually, the satellite sinks deep enough into the atmosphere that drag becomes catastrophic, and it burns up on reentry.
-   The ISS (at ~400 km) loses altitude constantly and requires periodic engine burns (reboosts) to stay in orbit. The drag force varies wildly with the 11-year solar cycle (solar maximum heats and expands the atmosphere, dramatically increasing drag).

## 3. Solar Radiation Pressure (SRP)

Light has momentum. When photons from the Sun strike a spacecraft, they exert a tiny physical force.

-   For dense, heavy satellites in LEO, SRP is negligible compared to drag.
-   For large, lightweight satellites (with massive solar panels) in high orbits (like GEO or deep space probes), SRP becomes a significant perturbation.
-   Over months and years, SRP pushes on the orbit, altering its eccentricity (making it more elliptical). It also exerts torques on asymmetrical spacecraft, attempting to spin them.

## 4. Third-Body Gravitational Effects

A satellite orbiting Earth is also pulled by the gravity of the Moon and the Sun.

-   These forces are relatively small in LEO because Earth's gravity dominates overwhelmingly.
-   However, for satellites in High Earth Orbit (HEO) or Geostationary Orbit (GEO), the pull of the Moon and Sun becomes significant.
-   These "third-body" forces slowly pull the inclination of GEO satellites away from the equator. To maintain a perfect 0° inclination (and keep satellite dishes on the ground pointed at a fixed spot), GEO satellites must perform regular "North-South Station Keeping" engine burns to fight this lunar/solar drift.
