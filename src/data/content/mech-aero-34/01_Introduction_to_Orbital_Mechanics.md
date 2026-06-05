---
title: "Introduction to Orbital Mechanics"
---

# Introduction to Orbital Mechanics

Orbital mechanics (or astrodynamics) is the application of celestial mechanics to the practical problems concerning the motion of rockets and spacecraft. It governs everything from keeping a communications satellite over the same spot on Earth to plotting a trajectory to Mars.

## 1. The Historical Foundation

Our understanding of orbital mechanics is built upon the observational work of Tycho Brahe, the empirical laws formulated by Johannes Kepler, and the theoretical physics developed by Isaac Newton.

**Kepler's Laws of Planetary Motion (Early 1600s):**
1.  **The Law of Ellipses:** All planets move in elliptical orbits, with the sun at one focus.
2.  **The Law of Equal Areas:** A line that connects a planet to the sun sweeps out equal areas in equal times. (This means a planet moves fastest when it is closest to the sun).
3.  **The Law of Harmonies:** The square of the orbital period of a planet is directly proportional to the cube of the semi-major axis of its orbit ($T^2 \propto a^3$).

**Newton's Laws (Late 1600s):**
Newton provided the physical explanation for *why* Kepler's laws worked. He introduced:
-   **Newton's Laws of Motion:** Specifically $F=ma$ (Force equals mass times acceleration).
-   **Newton's Law of Universal Gravitation:** Every particle attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between them.

$$F_g = G \frac{m_1 m_2}{r^2}$$

Where $G$ is the universal gravitational constant.

## 2. The Two-Body Problem

The fundamental problem in orbital mechanics is the **Two-Body Problem**: predicting the motion of two massive objects mutually attracted by gravity.

To make the math tractable for spacecraft, we usually make several simplifying assumptions (the Restricted Two-Body Problem):
1.  **Spherically Symmetrical Bodies:** The celestial body (e.g., Earth) is perfectly spherical and its mass is evenly distributed, so we can treat it as a point mass.
2.  **Negligible Spacecraft Mass:** The mass of the spacecraft ($m_2$) is so infinitesimally small compared to the planet ($m_1$) that it does not affect the planet's motion. The center of mass of the system remains at the center of the planet.
3.  **No Other Forces:** We ignore atmospheric drag, solar radiation pressure, and the gravitational pull of other bodies (like the Moon or Sun).

With these assumptions, Newton's laws can be combined to form the basic equation of motion for a spacecraft in orbit:

$$\ddot{\mathbf{r}} = -\frac{\mu}{r^3} \mathbf{r}$$

Where:
-   $\ddot{\mathbf{r}}$ is the acceleration vector of the spacecraft.
-   $\mathbf{r}$ is the position vector from the center of the planet to the spacecraft.
-   $r$ is the magnitude of the position vector (distance).
-   $\mu$ is the standard gravitational parameter ($\mu = G \cdot M_{planet}$). For Earth, $\mu \approx 3.986 \times 10^5 \text{ km}^3/\text{s}^2$.

## 3. The Concept of Free Fall

A spacecraft in orbit is not "beyond the reach of gravity." In Low Earth Orbit (LEO), gravity is roughly 90% as strong as it is on the surface.

An orbit is simply a state of continuous free-fall.
-   Imagine firing a cannonball perfectly horizontally from a very high mountain.
-   Gravity pulls it downward, causing its path to curve toward the ground.
-   If you fire it fast enough, the curve of its downward path exactly matches the curvature of the Earth beneath it.
-   The cannonball is constantly falling, but the ground is curving away at the same rate. It never hits the ground. It is in orbit.

Therefore, achieving orbit is primarily about achieving extreme *horizontal* velocity (approx. 7.8 km/s or 17,500 mph for LEO), not just extreme altitude.
