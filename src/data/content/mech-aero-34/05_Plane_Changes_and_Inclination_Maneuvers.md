---
title: "Plane Changes and Inclination Maneuvers"
---

# Plane Changes and Inclination Maneuvers

Hohmann transfers change the *size* of an orbit (altitude). However, if you need to change the *orientation* of the orbit—specifically its inclination or Right Ascension of the Ascending Node (RAAN)—you must perform a plane change maneuver.

These are the most expensive (fuel-intensive) maneuvers in orbital mechanics.

## 1. The Physics of a Plane Change

To change the plane of an orbit, a spacecraft must fire its engines perpendicular to its current direction of motion.
-   Firing in the "Normal" direction (perpendicular to the velocity vector and orbital radius) pushes the orbital plane in one direction.
-   Firing in the "Anti-Normal" direction pushes it the other way.

This maneuver does not change the spacecraft's speed or the size of its orbit (the semi-major axis remains constant); it only redirects the velocity vector.

## 2. Calculating the Cost ($\Delta v$)

Because the velocity vector is simply rotated, we can use vector math (the Law of Cosines) to calculate the required change in velocity ($\Delta v$) to achieve a change in angle ($\theta$):

$$\Delta v = 2 v \sin\left(\frac{\theta}{2}\right)$$

Where:
-   $v$ is the spacecraft's velocity at the exact moment of the burn.
-   $\theta$ is the angle of the plane change.

**The Crucial Implication:**
Look closely at the equation. The cost of a plane change ($\Delta v$) is directly proportional to the spacecraft's velocity ($v$).
-   If you perform a plane change when you are moving very fast, it costs a massive amount of fuel.
-   If you perform the plane change when you are moving very slowly, it costs much less.

## 3. When and Where to Change Planes

Because velocity dictates cost, the golden rule of plane changes is to perform them where the spacecraft is moving slowest.

1.  **Apogee is Best:** In an elliptical orbit, the spacecraft moves slowest at Apogee. Therefore, inclination changes should almost always be executed at Apogee.
2.  **The Node Requirement:** You can only change the plane of an orbit at the point where the current orbit intersects the desired orbit. For a simple inclination change (keeping the same RAAN), this intersection occurs at the Ascending Node and Descending Node. Therefore, you must perform the burn exactly as you cross the equator.
3.  **The "Dogleg" Launch:** The cheapest way to achieve a desired inclination is to launch directly into it. However, range safety (not dropping rocket stages on populated areas) often prevents launching on the optimal azimuth. Rockets must sometimes fly a "dogleg" trajectory—launching one way to clear land, then turning in mid-air to reach the proper plane. This wastes a significant amount of fuel.

## 4. The Geostationary Transfer Example

A classic example of combining maneuvers is placing a satellite into Geostationary Orbit (GEO—a circular orbit over the equator).
-   If launched from Cape Canaveral, the satellite is initially placed into a Low Earth Orbit (LEO) with a 28.5° inclination.
-   It must reach a 35,786 km altitude with a 0° inclination.
-   **Step 1:** The upper stage fires at the equator (node) to raise the apogee to 35,786 km, creating a Geostationary Transfer Orbit (GTO).
-   **Step 2:** The satellite coasts to apogee.
-   **Step 3:** At apogee (where velocity is lowest), the satellite fires its own engine. This single "apogee kick" burn does two things simultaneously: it circularizes the orbit (increases velocity) *and* removes the 28.5° inclination (changes the plane). Combining these into a single vector maneuver is more efficient than doing them separately.
