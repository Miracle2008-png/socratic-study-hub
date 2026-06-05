---
title: "Liquid Rocket Propellant Feed Systems"
---

# Liquid Rocket Propellant Feed Systems

Getting hundreds or thousands of gallons of liquid fuel and oxidizer into the combustion chamber every second against immense internal pressure (often thousands of PSI) is one of the hardest engineering challenges in rocketry. There are two primary methods for delivering propellants: Pressure-fed and Pump-fed systems.

## 1. Pressure-Fed Systems

The simplest way to force liquid into the combustion chamber is to pressurize the propellant tanks.

**How it works:**
- A high-pressure tank of inert gas (usually Helium) is connected via a regulator to the top of the fuel and oxidizer tanks.
- The Helium pressurizes the ullage space (empty space) above the liquids.
- This pressure forces the propellants down through the pipes, past the valves, and into the combustion chamber.

**Advantages:**
- Incredibly simple and reliable. No moving parts other than valves.
- Essential for zero-gravity restarts in space, as the pressure ensures the liquid stays settled at the bottom of the tank over the intake.

**Disadvantages:**
- **The Pressure Penalty:** The propellant tanks must be pressurized to a higher pressure than the combustion chamber (to ensure flow). If you want a high-performance 1000 PSI combustion chamber, the massive, thin-walled propellant tanks must hold 1200 PSI. This makes the tanks unacceptably thick and heavy.
- Therefore, pressure-fed systems are limited to relatively low chamber pressures (e.g., 100-250 PSI), resulting in lower efficiency and thrust.
- Used almost exclusively for small spacecraft maneuvering thrusters (RCS) or upper stages (like the Apollo Service Propulsion System or SpaceX Falcon 9 second stage RCS).

## 2. Pump-Fed Systems (Turbopumps)

To achieve high chamber pressures (and thus high efficiency and thrust) while keeping the main propellant tanks light and low-pressure, rockets use **Turbopumps**.

A turbopump is an incredibly powerful, compact machine consisting of a turbine connected by a shaft to centrifugal pumps for the fuel and oxidizer. The primary engineering difference between rocket engines is how they generate the hot gas to drive this turbine.

## 3. Power Cycles

**1. Gas Generator Cycle (Open Cycle):**
The simplest pump-fed cycle. Used on the Saturn V F-1 engine and SpaceX Merlin (Falcon 9).
- A small amount of fuel and oxidizer is tapped off from the main pumps and sent to a small "pre-burner" or gas generator.
- It is burned non-stoichiometrically (usually very fuel-rich) to keep the temperature low enough so it doesn't melt the turbine blades.
- This hot gas drives the turbine, powering the pumps.
- **The Catch:** After driving the turbine, this exhaust gas is dumped overboard through a small separate exhaust pipe. It contributes very little thrust, resulting in a slight efficiency loss (lower $I_{sp}$).

**2. Staged Combustion Cycle (Closed Cycle):**
A highly efficient, complex cycle. Used on the Space Shuttle Main Engine (RS-25) and SpaceX Raptor.
- A portion (or all) of one propellant and a small amount of the other are burned in a pre-burner to drive the turbine.
- **The Advantage:** Instead of being dumped overboard, the exhaust from the turbine is routed *into the main combustion chamber* to finish burning. No propellant is wasted; all of it expands through the main nozzle, yielding the highest possible specific impulse.
- **The Challenge:** The turbine exhaust must be injected into the main chamber, meaning the pre-burner must operate at a pressure *higher* than the main chamber (which is already very high). This requires incredibly advanced metallurgy and seals.

**3. Expander Cycle:**
An elegant, highly efficient cycle used for cryogenic upper stage engines (like the RL10).
- The cryogenic liquid fuel (usually liquid hydrogen) is pumped through cooling channels in the walls of the main combustion chamber and nozzle.
- The heat from the chamber boils the hydrogen into a high-pressure gas.
- This expanding gas is routed back up to drive the turbine before finally being injected into the main combustion chamber to burn.
- **Advantages:** No pre-burner is needed; very high $I_{sp}$.
- **Disadvantages:** Thrust is limited by the amount of heat that can be transferred through the chamber walls. Generally limited to smaller upper-stage engines.
