---
title: "Electric and Ion Propulsion"
---

# Electric and Ion Propulsion

Chemical rockets are limited by the chemical bonds of their propellants, restricting their maximum possible Specific Impulse ($I_{sp}$) to around 450-500 seconds. For deep space missions requiring massive velocity changes ($\Delta v$) over long durations, chemical rockets require prohibitively heavy propellant loads. Electric propulsion systems overcome this by separating the energy source (solar panels or a nuclear reactor) from the propellant, allowing for exhaust velocities far beyond chemical limits.

## 1. The Principle of Electric Propulsion

Instead of relying on the thermal expansion of a hot gas, electric propulsion uses electromagnetic or electrostatic forces to accelerate a propellant (usually a noble gas like Xenon or Argon) to extreme velocities.

**The Trade-off:**
- **High $I_{sp}$:** Ion thrusters can achieve $I_{sp}$ values between 1,500 and 10,000+ seconds. They use propellant incredibly efficiently.
- **Low Thrust:** The thrust is typically measured in millinewtons (mN)—equivalent to the weight of a sheet of paper.
- **Application:** They cannot lift a spacecraft off the ground against Earth's gravity. They are only useful in the vacuum of space. Because they can run continuously for months or years, that tiny acceleration eventually builds up to a massive final velocity, allowing missions (like the Dawn mission to Ceres) that would be impossible with chemical rockets.

## 2. Electrostatic Thrusters (Gridded Ion Thrusters)

The most mature and commonly used electric propulsion technology (e.g., NASA's NEXT thruster, used on deep space probes and commercial communication satellites for station-keeping).

**How it works:**
1.  **Ionization:** Neutral Xenon gas enters a chamber where it is bombarded by electrons emitted from a cathode. These collisions knock electrons off the Xenon atoms, turning them into positively charged ions.
2.  **Acceleration:** The positive ions drift toward a pair of closely spaced grids at the back of the thruster. A massive electrical voltage difference (e.g., 1000+ Volts) is maintained between the inner screen grid (positive) and outer accelerator grid (negative). The positive ions are violently pulled toward the negative grid, shooting through the holes at velocities exceeding 30,000 meters per second.
3.  **Neutralization:** If the spacecraft kept ejecting positive ions, it would quickly build up a massive negative charge, which would attract the ions back and stop the thrust. To prevent this, an external neutralizer sprays a stream of electrons into the exhaust plume, balancing the charge.

## 3. Hall Effect Thrusters (HET)

Widely used on Starlink satellites and many commercial platforms. They offer a higher thrust-to-power ratio than gridded ion thrusters, though slightly lower $I_{sp}$.

**How it works:**
- Instead of physical grids, an HET uses a powerful magnetic field to trap electrons in a ring-shaped (annular) channel.
- These trapped, spinning electrons act as a "virtual cathode."
- Neutral gas is injected into the channel, collides with the trapped electrons, and ionizes.
- An electric field across the channel then accelerates the newly formed positive ions out the back to produce thrust.
- They are simpler than gridded thrusters because the magnetic field simultaneously accelerates the ions and neutralizes the beam (by dragging some electrons out with the ions).

## 4. Future Concepts

- **VASIMR (Variable Specific Impulse Magnetoplasma Rocket):** Uses radio waves to heat a plasma to temperatures hotter than the sun, then accelerates it using magnetic nozzles. It theoretically allows the spacecraft to shift "gears"—trading high thrust (for escaping orbit) for high $I_{sp}$ (for deep space cruise) dynamically.
- **Nuclear Thermal Propulsion (NTP):** A hybrid concept. A nuclear fission reactor heats a fluid (like liquid hydrogen) directly, which expands out a nozzle. It doubles the $I_{sp}$ of the best chemical rockets while maintaining high thrust, making it a leading candidate for crewed missions to Mars.
