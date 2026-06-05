---
title: "Specialized Earth Orbits"
---

# Specialized Earth Orbits

Satellite missions dictate the specific orbit required. Different altitudes and inclinations offer unique advantages for communications, navigation, and observation.

## 1. Low Earth Orbit (LEO)

**Characteristics:** Altitudes from ~200 km to 2,000 km. Orbital periods are roughly 90 to 120 minutes.
-   **Advantages:** Proximity to Earth provides the highest resolution for spy satellites and Earth-observation cameras. It also requires the least energy (fuel) to reach, and communication latency (ping) is very low.
-   **Disadvantages:** Subject to atmospheric drag (requiring reboosts). Because they orbit so quickly and are so close to the surface, a satellite in LEO is only visible to a specific ground station for about 10-15 minutes at a time.
-   **Applications:** International Space Station, Hubble Telescope, Starlink internet constellation, remote sensing.

## 2. Geostationary Orbit (GEO)

**Characteristics:** A circular orbit positioned exactly over the equator (0° inclination) at an altitude of 35,786 km.
-   **The Magic of GEO:** At this specific altitude, the orbital period is exactly one sidereal day (23 hours, 56 minutes, 4 seconds). The satellite orbits the Earth at the exact same rotational speed that the Earth spins on its axis.
-   **Advantages:** From the ground, the satellite appears completely motionless in the sky. You can bolt a satellite dish to your roof, point it once, and never have to move it to track the satellite. A single GEO satellite can cover a massive footprint (nearly a third of the Earth's surface).
-   **Disadvantages:** Requires a massive rocket to reach. The 35,000 km distance introduces a noticeable speed-of-light delay (about a 500 ms round trip) in communications, which is poor for interactive voice or gaming.
-   **Applications:** Satellite TV (DirecTV), weather observation (GOES), high-capacity military communications.

## 3. Medium Earth Orbit (MEO)

**Characteristics:** The vast region between LEO and GEO (2,000 km to 35,000 km). Most common around 20,000 km, with an orbital period of about 12 hours.
-   **Advantages:** A compromise between LEO and GEO. Fewer satellites are needed to provide global coverage than LEO, but the signal delay is less than GEO.
-   **Disadvantages:** This region coincides with the Van Allen Radiation Belts—zones of highly energized particles trapped by Earth's magnetic field. Satellites here require heavily shielded, radiation-hardened electronics to survive.
-   **Applications:** This is the domain of Global Navigation Satellite Systems (GNSS) like GPS, Galileo, and GLONASS. The 12-hour period means satellites pass over the same ground tracks repeatedly, ensuring predictable coverage for receivers.

## 4. Highly Elliptical Orbits (HEO) / Molniya Orbits

**Characteristics:** Highly eccentric orbits with a low perigee (~500 km) in the Southern Hemisphere and a massive apogee (~40,000 km) in the Northern Hemisphere.
-   **The Problem:** GEO satellites (over the equator) cannot be "seen" by receivers located at very high latitudes (near the North or South Pole)—the curvature of the Earth blocks the line of sight. Russia, having much of its landmass in the far north, could not rely solely on GEO for domestic communications.
-   **The Solution:** The Molniya orbit. Based on Kepler's Second Law, a satellite moves very slowly at apogee and very fast at perigee.
-   A satellite in a 12-hour Molniya orbit spends roughly 10-11 hours "hanging" near its high northern apogee, providing excellent, continuous coverage to the high northern latitudes. It then rapidly swoops down through the southern perigee and back up. Using three satellites spaced in these orbits provides uninterrupted 24/7 coverage.
