---
title: "Propellant Management and Tankage"
---

# Propellant Management and Tankage

In a launch vehicle, fuel and oxidizer tanks make up the vast majority of the volume and structural mass. Designing these tanks involves much more than simply building a large metal balloon; they must manage slosh, pressurization, extreme temperatures, and minimize dead weight.

## 1. Structural Tank Design

Tanks must be incredibly thin to save weight but strong enough to withstand both the internal pressure of the propellants and the structural loads of the entire rocket stacked above them.

- **Monocoque vs. Isogrid:** Early rockets used relatively thick skins. Modern rockets (like the SLS or Falcon 9) use an "isogrid" or "orthogrid" construction. The tank walls are machined from thick aluminum or composite panels. Most of the material is milled away, leaving a thin skin reinforced by an integral lattice of stiffening ribs. This provides maximum buckling strength with minimum weight.
- **Common Bulkhead:** In stages where the fuel and oxidizer tanks are stacked, they often share a single dividing wall called a common bulkhead (used on the Saturn V S-II stage). This saves the weight of a second dome and interstage structure. However, if one side holds cryogenic LOX (-183°C) and the other holds room-temperature RP-1, the bulkhead requires intense thermal insulation.

## 2. Managing Cryogenics

Many high-performance rockets use cryogenic propellants (Liquid Oxygen and Liquid Hydrogen) which boil rapidly at room temperature.
- **Insulation:** Tanks must be insulated (using spray-on foam or vacuum jackets) to prevent excessive boil-off before launch.
- **Venting:** As the liquid boils in the tank, the expanding gas increases pressure. Tanks must have vent valves to relieve this pressure on the pad, resulting in the iconic white plumes seen venting from rockets before liftoff.
- **Densification:** SpaceX pioneered the use of "sub-cooled" propellants. By chilling LOX and RP-1 below their normal boiling points, the liquids become denser. This allows significantly more propellant mass to be packed into the same tank volume, increasing performance without increasing rocket size.

## 3. Slosh Control

During ascent, the rocket maneuvers and vibrates. The massive column of liquid inside the tanks can begin to wave back and forth—a phenomenon known as slosh.
- If the sloshing frequency couples with the rocket's structural bending frequencies or the flight control system's response time, it can tear the rocket apart.
- **Baffles:** To dampen the motion of the fluid, engineers install ring-shaped or grid-like physical barriers (baffles) along the inner walls of the tanks.

## 4. Pressurization Systems

As propellant is drained rapidly from the bottom of the tank by the pumps, the empty space at the top (the ullage) must be filled with gas to maintain a positive pressure. If pressure drops, the tank will collapse (implode) under the structural loads, or the pumps will cavitate.

- **Helium System:** The most common method uses high-pressure Helium tanks to feed gas into the ullage space. Helium is used because it is light, inert (won't react with the propellants), and remains a gas even at the extremely low temperatures of LOX and LH2.
- **Autogenous Pressurization:** A more complex but lighter method. A small amount of liquid propellant is tapped off the high-pressure side of the turbopump, routed through a heat exchanger on the engine to boil it into a hot gas, and then fed back to the top of its respective tank to maintain pressure. This eliminates the need for heavy, separate Helium tanks. Used on the Space Shuttle External Tank and the SpaceX Starship.
