---
title: "Combined Cycle Power Plants"
---

# Combined Cycle Power Plants (CCGT)

To achieve the highest possible efficiencies in power generation, engineers combine two distinct thermodynamic cycles: a high-temperature "topping" cycle and a lower-temperature "bottoming" cycle. The most spectacularly successful combination is the **Combined Cycle Gas Turbine (CCGT)** plant, which couples a Brayton gas turbine cycle with a Rankine steam cycle.

## 1. The Thermodynamic Rationale

- **Gas Turbines (Brayton):** Operate at extremely high temperatures (Turbine Inlet Temperatures can exceed 1500°C), resulting in high efficiency. However, they reject heat at a very high temperature (exhaust gases are typically 500°C to 600°C). Discarding 600°C gas to the atmosphere is a massive waste of exergy.
- **Steam Turbines (Rankine):** Are limited in maximum temperature by metallurgical constraints of the boiler tubes (typically ~600°C). However, they are exceptionally good at rejecting heat at very low temperatures (ambient temperature in the condenser).

**The Solution:** Use the hot exhaust gas from the gas turbine as the heat source for the steam cycle. The topping cycle utilizes the high-temperature exergy, and the bottoming cycle scavenges the remaining low-temperature exergy.

## 2. The Heat Recovery Steam Generator (HRSG)

The critical link between the two cycles is the **Heat Recovery Steam Generator (HRSG)**. It acts as the boiler for the Rankine cycle, but instead of burning fuel, it extracts sensible heat from the gas turbine exhaust.

- The HRSG contains banks of tubes (economizer, evaporator, superheater) through which water/steam flows while the hot exhaust gases pass over the outside.
- Because the exhaust gas temperature drops as it transfers heat to the boiling water, a "pinch point" occurs where the temperature difference between the gas and the water is minimal. This limits how much steam can be generated.
- To maximize energy recovery, modern HRSGs are often **multi-pressure** (generating steam at high, intermediate, and low pressures simultaneously to better match the cooling curve of the exhaust gas).

## 3. Performance and Efficiency

CCGT plants represent the pinnacle of fossil-fuel power generation technology.
- While a standalone heavy-duty gas turbine might achieve 40% efficiency, and a standalone coal steam plant might achieve 40%, the combined cycle routinely exceeds **60% thermal efficiency** (LHV basis), with state-of-the-art plants reaching 63-64%.
- **Rapid Startup:** The gas turbine portion can start up and provide power very quickly (minutes), while the steam cycle takes longer to warm up. This makes CCGT plants excellent for grid balancing.
- **Low Emissions:** Typically fueled by natural gas, CCGT plants produce roughly half the $CO_2$ per MWh compared to coal plants, and emit negligible sulfur or particulate matter.

## 4. Other Combined Cycles

While Gas-Steam is the dominant paradigm, other combinations exist:
- **IGCC (Integrated Gasification Combined Cycle):** Coal is gasified into syngas, cleaned, and burned in a gas turbine, with a steam bottoming cycle. Allows coal to be used with near-natural-gas emissions profiles.
- **MHD-Steam:** Magnetohydrodynamic topping cycles (directly extracting electricity from a high-velocity, high-temperature ionized plasma) have been researched as topping cycles for steam plants, though commercial viability remains challenging.
