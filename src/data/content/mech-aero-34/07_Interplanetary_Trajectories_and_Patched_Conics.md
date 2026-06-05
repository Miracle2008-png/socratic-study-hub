---
title: "Interplanetary Trajectories and Patched Conics"
---

# Interplanetary Trajectories and Patched Conics

Traveling to other planets is vastly more complicated than orbiting Earth. The spacecraft is influenced by the gravity of the Earth, the Sun, and the target planet. Solving the full N-Body problem for this trip is impossible analytically. Engineers simplify the problem using a technique called the **Patched Conic Approximation**.

## 1. Spheres of Influence (SOI)

The fundamental concept of the patched conic method is dividing space into distinct regions dominated by a single gravitational body.

-   Every planet has a **Sphere of Influence (SOI)**. Inside this invisible boundary, the planet's gravity is the dominant force. The Sun's gravity is treated as a minor disturbance.
-   Outside the SOI, the Sun's gravity is dominant, and the planet's gravity is ignored.
-   For Earth, the SOI extends out to roughly 900,000 km (well past the Moon).

## 2. The Three Phases of an Interplanetary Trip

Instead of calculating one continuous complex path, the trip is broken into three separate, simple two-body problems (conic sections) that are "patched" together at the SOI boundaries.

**Phase 1: Departure (Geocentric Hyperbola)**
-   The spacecraft starts in LEO. It fires its engines to achieve escape velocity plus some extra energy (hyperbolic excess velocity, $v_{\infty}$).
-   Inside Earth's SOI, the trajectory is analyzed as a simple hyperbola with Earth at the focus.
-   As it crosses the SOI boundary, it "leaves" Earth.

**Phase 2: The Cruise (Heliocentric Ellipse)**
-   Once outside Earth's SOI, we switch references. The spacecraft is now orbiting the Sun.
-   Its initial velocity relative to the Sun is the Earth's orbital velocity *plus* the $v_{\infty}$ it had when it left the SOI.
-   The trajectory is analyzed as a massive Hohmann transfer ellipse around the Sun, connecting Earth's orbit to Mars's orbit.

**Phase 3: Arrival (Planetocentric Hyperbola)**
-   Months later, the spacecraft intercepts the target planet's SOI.
-   We switch references again. The spacecraft's arrival velocity relative to the Sun is subtracted from the planet's velocity, giving the arrival hyperbolic excess velocity relative to the planet.
-   Inside the target's SOI, the trajectory is a hyperbola pulled in by the planet's gravity.
-   To avoid flying right past and out the other side, the spacecraft must fire its engines retrograde at periapsis to shed energy and "capture" into a closed elliptical orbit around the new planet.

## 3. Planetary Alignment and Launch Windows

Because planets orbit the sun at different speeds (Earth takes 1 year, Mars takes 1.88 years), they are constantly moving relative to each other.

You cannot launch a Hohmann transfer to Mars whenever you want. You must launch when the Earth and Mars are in the correct angular alignment (phase angle).
-   The spacecraft will take roughly 8 months to reach Mars's orbit.
-   Therefore, you must launch when Mars is *ahead* of Earth, such that Mars will arrive at the intercept point at the exact same time the spacecraft does 8 months later.
-   Like a quarterback throwing a football to a running receiver, you must "lead" the target.
-   For Earth-Mars, this alignment only occurs every 26 months. This brief period is the **Launch Window**. If you miss it, you must wait over two years to try again.

## 4. The Porkchop Plot

To find optimal launch dates, engineers use contour graphs called "Porkchop Plots."
-   The X-axis is the Departure Date.
-   The Y-axis is the Arrival Date.
-   The contour lines represent the total $\Delta v$ (fuel energy) required for that specific trip.
-   The plot reveals distinct "basins" of low energy—these are the optimal launch windows. Trips that require less time (faster transits) lie higher up on the energy contours.
