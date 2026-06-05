---
title: "The Classical Orbital Elements"
---

# The Classical Orbital Elements (Keplerian Elements)

To completely define the size, shape, and orientation of an orbit in 3D space, and the position of a spacecraft within that orbit, we need exactly six parameters. These are known as the Classical Orbital Elements or Keplerian Elements.

They are analogous to the six coordinates needed to specify position ($x, y, z$) and velocity ($v_x, v_y, v_z$), but are far more intuitive for visualizing an orbit.

## 1. Size and Shape (The In-Plane Elements)

These two elements define the geometry of the ellipse itself.

**1. Semi-Major Axis ($a$):**
-   Defines the **size** of the orbit.
-   It is half of the major axis (the longest diameter of the ellipse).
-   It determines the total energy of the orbit and the orbital period (how long it takes to complete one revolution).

**2. Eccentricity ($e$):**
-   Defines the **shape** of the orbit.
-   It describes how "squashed" the ellipse is.
-   $e = 0$ is a perfect circle. $e$ approaching 1 is a very long, skinny ellipse.

## 2. Orientation in Space (The Euler Angles)

These three elements define how the orbital plane is tilted and rotated relative to a fixed reference frame (usually the Earth-Centered Inertial, ECI, frame).

The ECI frame has its origin at the center of the Earth, the X-Y plane is the Earth's equator, and the X-axis points toward the Vernal Equinox (a fixed direction in space).

**3. Inclination ($i$):**
-   Defines the **tilt** of the orbital plane relative to the equatorial plane.
-   $i = 0^\circ$: Equatorial orbit (flying west to east over the equator).
-   $i = 90^\circ$: Polar orbit (flying over the North and South poles).
-   $i = 180^\circ$: Retrograde equatorial orbit (flying east to west).
-   A launch from Cape Canaveral (latitude 28.5°) naturally results in a minimum inclination of 28.5°.

**4. Right Ascension of the Ascending Node ($\Omega$, RAAN):**
-   Defines the **swivel** of the orbital plane.
-   The Ascending Node is the point where the spacecraft crosses the equator moving from South to North.
-   RAAN is the angle (measured eastward along the equator) from the Vernal Equinox (X-axis) to the Ascending Node. It tells you where the orbital plane intersects the equator.

**5. Argument of Perigee ($\omega$):**
-   Defines the **orientation of the ellipse within the orbital plane**.
-   It is the angle measured from the Ascending Node to the Perigee (the closest point to Earth), measured in the direction of spacecraft motion.
-   If $\omega = 0^\circ$, perigee occurs exactly when crossing the equator. If $\omega = 90^\circ$, perigee is at the northernmost point of the orbit.

## 3. Position in the Orbit

The final element specifies where the spacecraft is right now.

**6. True Anomaly ($\nu$ or $\theta$):**
-   Defines the **position** of the spacecraft along the orbital path.
-   It is the angle measured from Perigee to the spacecraft's current location, measured in the direction of motion.
-   $\nu = 0^\circ$ at Perigee, $\nu = 180^\circ$ at Apogee.
-   Unlike the other five elements (which remain constant in an ideal, unperturbed orbit), True Anomaly constantly changes as the spacecraft moves.

## Summary

Given ($a, e, i, \Omega, \omega, \nu$) at a specific time, you uniquely define the exact state of a spacecraft. Converting these six elements into a Cartesian position and velocity vector ($r, v$) and back is a fundamental operation in orbital mechanics.
