---
title: "Chemical Rocket Types"
---

# Chemical Rocket Types

Chemical rockets are the only propulsion systems currently capable of generating the massive thrust required to overcome Earth's gravity and reach orbit. They rely on the exothermic chemical reaction between a fuel and an oxidizer. They are categorized primarily by the physical state of their propellants.

## 1. Solid Propellant Rockets

In a solid rocket motor (SRM), the fuel and oxidizer are mixed together and cast into a solid, rubbery cylinder called a **grain**.

**How they work:**
- The grain is cast with a hollow core down the middle (the port).
- An igniter at the top lights the surface of the core.
- The propellant burns from the inside out, generating hot gas that escapes through the nozzle.
- The shape of the core (e.g., circular, star-shaped) determines the surface area exposed to burning, which dictates the thrust profile over time. A star shape burns with a relatively constant thrust, while a circular core's thrust increases as it burns outward (increasing surface area).

**Advantages:**
- **Simplicity:** No moving parts, no pumps, no valves. Highly reliable.
- **Storability:** Can sit fully loaded and ready to fire for years (ideal for military missiles like the Minuteman or Sidewinder).
- **High Thrust:** Capable of generating massive thrust quickly (e.g., the Space Shuttle Solid Rocket Boosters).

**Disadvantages:**
- **Lower $I_{sp}$:** Generally less efficient than liquid rockets.
- **Uncontrollable:** Once ignited, a solid rocket generally cannot be throttled, stopped, or restarted. It burns until the fuel is exhausted.
- **Heavy Casings:** The entire casing must withstand the high combustion pressures, making it heavy.

## 2. Liquid Propellant Rockets

Liquid rocket engines (LREs) pump liquid fuel and liquid oxidizer from separate tanks into a combustion chamber where they mix and burn.

**Common Propellants:**
- **Kerosene (RP-1) & Liquid Oxygen (LOX):** High density, good thrust, relatively easy to handle. Used in the Saturn V first stage, SpaceX Falcon 9.
- **Liquid Hydrogen (LH2) & LOX:** Highest specific impulse of practical chemical rockets. Difficult to handle (LH2 is cryogenic, $-253^\circ\text{C}$, and very low density, requiring massive tanks). Used in the Space Shuttle Main Engines, Delta IV.
- **Hypergolic:** Propellants (like Hydrazine and Nitrogen Tetroxide) that ignite spontaneously upon contact. Extremely toxic and corrosive, but highly reliable since they need no ignition system. Used for spacecraft maneuvering thrusters (Apollo Lunar Module, Dragon capsule Draco thrusters).

**Advantages:**
- **High Performance:** Higher $I_{sp}$ than solids.
- **Controllable:** Can be throttled up or down by adjusting propellant flow rates. Can be shut down and, in many designs, restarted in flight.
- **Lighter Tanks:** The massive propellant tanks only need to hold the liquids at low pressure; only the small combustion chamber experiences high pressure.

**Disadvantages:**
- **Complexity:** Requires intricate plumbing, valves, and massive, high-speed turbopumps to force the propellants into the high-pressure combustion chamber.
- **Handling:** Cryogenic propellants boil off and cannot be stored in the rocket long-term.

## 3. Hybrid Rockets

A hybrid rocket uses propellants in two different states—typically a solid fuel and a liquid or gaseous oxidizer.

**How they work:**
- A solid fuel grain (often a rubber like HTPB or even acrylic) sits in the combustion chamber.
- Liquid oxidizer (like nitrous oxide or LOX) is injected over the solid fuel, creating a combustion zone near the surface.

**Advantages:**
- **Safety:** The fuel and oxidizer are physically separated until ignition. They cannot inadvertently mix and explode.
- **Controllability:** Can be throttled, shut down, and restarted by controlling the flow of the liquid oxidizer (unlike solids).
- **Simpler than Liquids:** Only requires one fluid management system (the oxidizer), making them cheaper and simpler than bi-propellant liquid engines.

**Disadvantages:**
- **Lower Performance:** Generally lower $I_{sp}$ than high-performance liquid engines.
- **Regression Rate Issues:** The solid fuel tends to burn slowly and unevenly, requiring complex, multi-port grain designs to generate sufficient thrust.
- **Scale:** Difficult to scale up to the massive sizes required for primary orbital launch vehicles. Often used in suborbital vehicles (like SpaceShipOne/Two) or sounding rockets.
