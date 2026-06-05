# Solar Thermal Power Cycles

While photovoltaic (PV) panels convert sunlight directly into electricity, **Concentrated Solar Power (CSP)** uses mirrors to concentrate solar radiation to generate high-temperature heat. This heat is then used to drive a conventional thermodynamic power cycle.

CSP offers a critical advantage over PV: **thermal energy storage**. Heat can be stored in large vats of molten salt cheaply and efficiently, allowing CSP plants to generate dispatchable power long after the sun has set, solving the intermittency problem of solar energy.

## 1. Parabolic Trough Systems

The most mature and widely deployed CSP technology.

- **Collector:** Long, U-shaped parabolic mirrors track the sun on a single axis. They focus sunlight onto a receiver tube running along the focal line.
- **Heat Transfer Fluid (HTF):** Synthetic oil flows through the tube, heated to approximately 400°C.
- **Power Cycle:** The hot oil flows through a heat exchanger, boiling water to generate steam. This steam drives a standard **subcritical Rankine cycle** (typically around 35-38% thermal efficiency).
- **Limitation:** The synthetic oil degrades if heated above 400°C, limiting the maximum temperature and thus the thermodynamic efficiency of the Rankine cycle.

## 2. Solar Power Towers

A more advanced design achieving higher temperatures and efficiencies.

- **Collector:** Thousands of flat, independently tracking mirrors (heliostats) surround a central tower. They focus all their light onto a small receiver at the top of the tower.
- **Heat Transfer Fluid:** Capable of much higher concentration ratios, towers often use molten nitrate salt directly as the HTF. The salt is heated from 290°C to 565°C.
- **Power Cycle:** The 565°C molten salt flows down to a heat exchanger to generate steam. This higher temperature allows the use of modern **reheat Rankine cycles** or even supercritical steam cycles, pushing thermal efficiencies above 40%. The hot salt can be stored in massive insulated tanks for up to 15 hours of nighttime operation.

## 3. Parabolic Dish-Stirling Systems

The highest efficiency solar-to-electricity technology.

- **Collector:** A parabolic dish tracks the sun on two axes, focusing light to a single focal point with immense concentration ratios.
- **Power Cycle:** Instead of heating a fluid to run a remote steam plant, a small **Stirling engine** is mounted directly at the focal point.
- The intense heat expands hydrogen or helium gas inside the Stirling engine, driving pistons to generate electricity directly via an attached alternator.
- **Efficiency:** Because Stirling cycles can approach Carnot efficiency, and the focal temperatures are very high (~700-800°C), dish-Stirling systems hold records for solar-to-grid efficiency (~31%).
- **Drawback:** They lack a centralized thermal storage mechanism, generating power only while the sun shines, and require thousands of small moving engines across a field, increasing maintenance complexity.
