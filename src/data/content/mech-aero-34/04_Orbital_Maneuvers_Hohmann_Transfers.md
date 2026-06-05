---
title: "Orbital Maneuvers (Hohmann Transfers)"
---

# Orbital Maneuvers (Hohmann Transfers)

Spacecraft rarely stay in the exact orbit they were launched into. They need to maneuver to reach higher orbits, rendezvous with a space station, or travel to other planets. Because there is no friction in space, you cannot simply "steer" like an airplane. You must change your velocity (Delta-v, $\Delta v$) by firing engines, which changes the size and shape of your orbit.

## 1. The Physics of Changing Orbits

Remember that an orbit is defined by its energy. To move to a higher altitude orbit, you must add energy (increase velocity). To move to a lower altitude, you must remove energy (decrease velocity).

-   **Prograde Burn:** Firing engines in the direction of travel. This increases velocity, adds energy, and **raises the altitude of the orbit on the opposite side** of the planet.
-   **Retrograde Burn:** Firing engines against the direction of travel. This decreases velocity, removes energy, and **lowers the altitude of the orbit on the opposite side** of the planet.

## 2. The Hohmann Transfer Orbit

In 1925, Walter Hohmann proved that the most fuel-efficient (minimum $\Delta v$) way to transfer between two circular, coplanar orbits is a specific elliptical transfer orbit.

**The Geometry:**
-   The transfer orbit is an ellipse that is tangent to the initial (lower) circular orbit and tangent to the final (higher) circular orbit.
-   The perigee of the transfer ellipse equals the radius of the inner orbit ($r_1$).
-   The apogee of the transfer ellipse equals the radius of the outer orbit ($r_2$).

**The Two-Burn Sequence:**
A Hohmann transfer always requires exactly two impulsive engine burns.

**Burn 1 (At inner orbit, $r_1$):**
-   The spacecraft fires prograde to increase its velocity from the circular velocity of orbit 1 ($v_{c1}$) to the required perigee velocity of the transfer ellipse ($v_{pt}$).
-   $\Delta v_1 = v_{pt} - v_{c1}$
-   This "kicks" the apogee of the orbit out to the radius of the target orbit.

**The Coast Phase:**
-   The spacecraft cuts its engines and coasts along the transfer ellipse halfway around the planet, trading kinetic energy for potential energy as it climbs.

**Burn 2 (At outer orbit, $r_2$):**
-   When the spacecraft reaches apogee, it is at the correct altitude for orbit 2, but it is moving too slowly (it has the apogee velocity of the transfer ellipse, $v_{at}$). If it does nothing, it will fall back down to $r_1$.
-   The spacecraft fires prograde a second time to increase its velocity to match the circular velocity of orbit 2 ($v_{c2}$).
-   $\Delta v_2 = v_{c2} - v_{at}$
-   This "circularizes" the orbit.

**Total Cost:**
The total "cost" of the maneuver, determining how much fuel is required, is the sum of the absolute values of the two burns:
$$\Delta v_{total} = |\Delta v_1| + |\Delta v_2|$$

## 3. Limitations of the Hohmann Transfer

While the Hohmann transfer minimizes fuel usage, it comes with trade-offs:

1.  **Time of Flight:** It is the slowest possible transfer between two circular orbits. The transfer time is exactly half the period of the transfer ellipse. For an Earth-Mars Hohmann transfer, this coast phase takes about 9 months.
2.  **Coplanar Only:** The Hohmann transfer assumes both orbits are in the same plane. If the orbits have different inclinations, a very expensive plane-change maneuver is also required.
3.  **Fast Transfers:** If fuel is abundant and time is critical (e.g., a rescue mission, or reducing astronaut radiation exposure), "fast" or non-Hohmann transfers are used. These involve intersecting the target orbit at an angle (non-tangent), which gets there much faster but requires significantly more $\Delta v$ for both injection and circularization.
