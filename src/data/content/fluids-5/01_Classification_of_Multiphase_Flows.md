# Classification of Multiphase Flows

Most introductory fluid mechanics deals with single-phase flow: just water, or just air.
In reality, many engineering systems involve multiple phases flowing simultaneously.
*   **Power Plants:** Steam and liquid water flowing together in boiler tubes.
*   **Oil & Gas:** Oil, natural gas, and sand being pumped up a single wellbore.
*   **Chemical Reactors:** Bubbles of reactant gas injected into a liquid catalyst.
*   **Environmental:** Snow blowing in the wind, or sediment carried by a river.

Multiphase flow is characterized by the presence of one or more **interfaces** between the different phases, creating extremely complex physics.

## 1. Defining "Phases"

In multiphase flow, "phase" does not just mean Solid, Liquid, or Gas. It refers to any distinct macroscopic boundary.
Oil and water are both liquids, but they do not mix. Therefore, an oil-water mixture is considered a **two-phase liquid-liquid flow**.

## 2. The Four Primary Categories

Multiphase flows are typically grouped by the combinations of phases involved:

### 1. Gas-Liquid Flow
This is the most common and widely studied category in engineering, heavily driven by the nuclear and power generation industries (boiling water reactors).
*   *Examples:* Boiling, condensation, cavitation, carbonated beverages, air-lift pumps.
*   *Challenges:* The density of the liquid is roughly 1000 times greater than the gas. This massive density difference causes severe instability at the interface.

### 2. Gas-Solid Flow
A continuous gas phase carrying discrete solid particles.
*   *Examples:* Dust storms, pneumatic transport (blowing grain or cement through pipes), fluidized bed reactors, soot exhaust from jet engines.
*   *Challenges:* Particle-particle collisions and erosion of the pipe walls. The solids do not deform like a fluid.

### 3. Liquid-Solid Flow
A continuous liquid phase carrying solid particles. Also known as slurry flow.
*   *Examples:* Mudslides, sediment transport in rivers, pumping concrete, blood flow (plasma carrying red blood cells).
*   *Challenges:* Depending on particle concentration, the mixture can behave like a highly non-Newtonian fluid.

### 4. Liquid-Liquid Flow
Two immiscible liquids flowing together.
*   *Examples:* Oil and water extraction, emulsion manufacturing (mayonnaise, cosmetics).
*   *Challenges:* Droplet coalescence (merging) and breakup depending on the shear rate.

## 3. Dispersed vs. Separated Flows

Another way to classify multiphase flow is by the topology of the interface.

*   **Dispersed Flow:** One phase consists of discrete elements (particles, drops, or bubbles) distributed throughout a continuous secondary phase.
    *   *Example:* Raindrops falling through the air. The air is continuous; the water is dispersed.
*   **Separated Flow:** The phases are separated by a continuous, well-defined interface. Neither phase is distributed as discrete particles in the other.
    *   *Example:* An oil slick floating on top of a river. Or a pipe flowing half-full of water, with air in the top half (Stratified flow).

Many systems transition back and forth. A waterfall is a separated flow at the top, breaks apart into a dispersed flow (droplets in air) as it falls, and plunges into the river creating another dispersed flow (air bubbles in water).
