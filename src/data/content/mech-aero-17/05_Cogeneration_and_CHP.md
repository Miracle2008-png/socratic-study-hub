# Cogeneration and Combined Heat and Power (CHP)

In a conventional power plant, the primary objective is to maximize the generation of work (electricity). However, thermodynamics dictates that a large portion of the input heat must be rejected to a cold reservoir (condenser or atmosphere). This rejected heat is usually at too low a temperature (e.g., 30-40°C) to be practically useful for industrial processes.

**Cogeneration**, or **Combined Heat and Power (CHP)**, alters this objective: it is the simultaneous production of electricity and useful thermal energy (heat) from a single fuel source.

## 1. The Principle of Cogeneration

Many industries (chemical plants, paper mills, refineries, food processing, district heating networks) require massive amounts of process heat, typically in the form of steam at moderate pressures and temperatures (e.g., 5 to 20 atm, 150°C to 250°C).

Instead of operating a dedicated boiler just to produce process steam (which wastes the high-temperature exergy of the fuel) and buying electricity from the grid (which was generated at ~40% efficiency while wasting heat), a facility can use a CHP plant.

In a CHP system, fuel is burned at high temperature to generate electricity (e.g., in a gas turbine or high-pressure steam turbine). The heat rejected from this power cycle is then extracted at a high enough temperature to serve the facility's process heating needs.

## 2. Types of CHP Plants

**Steam-Turbine (Rankine) CHP:**
- **Back-Pressure Turbine:** Steam expands in the turbine not down to condenser pressure, but only down to the pressure required by the industrial process. The turbine exhausts directly into the process steam header. No condenser is used, so no heat is wasted to the environment.
- **Extraction Turbine:** Steam is extracted from an intermediate stage of the turbine for process heat. The remaining steam continues expanding to a condenser. This offers flexibility to vary the ratio of electricity to heat production.

**Gas-Turbine (Brayton) CHP:**
- The hot exhaust from a gas turbine is passed through a Heat Recovery Steam Generator (HRSG) to produce steam for the industrial process, rather than for a secondary steam turbine. This is extremely common in chemical and refining industries.

## 3. Utilization Factor ($\epsilon_u$)

Because CHP produces two different useful outputs, thermal efficiency ($\eta_{th} = W_{net}/Q_{in}$) is an inadequate measure of performance. We define the **Utilization Factor**:

$$\epsilon_u = \frac{\text{Net Work Output} + \text{Useful Heat Output}}{\text{Total Heat Input}} = \frac{\dot{W}_{net} + \dot{Q}_{process}}{\dot{Q}_{in}}$$

While a modern power plant might have a thermal efficiency of 45%, a well-designed CHP plant can have a utilization factor of **80% to 90%**, meaning almost all the energy in the fuel is put to productive use.

## 4. Exergy Perspective on CHP

From a First Law perspective, CHP simply stops throwing heat away. From a Second Law (exergy) perspective, CHP is elegant because it matches the quality of the energy to the need. Burning natural gas (flame temperature ~2000°C) just to boil water at 150°C destroys massive amounts of exergy. CHP extracts high-quality work from the high-temperature drop, and uses the remaining lower-quality heat for processes that only require low-quality heat, minimizing total exergy destruction.
