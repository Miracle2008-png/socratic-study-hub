---
title: "The Gas Turbine Engine Core"
---

# The Gas Turbine Engine Core

Every turbojet, turbofan, turboprop, and turboshaft engine relies on a central "gas generator" or **core**. The purpose of the core is to supply high-temperature, high-pressure gas to either a propelling nozzle (for jet thrust) or a power turbine (for shaft power). The core consists of three primary components: the compressor, the combustor, and the turbine.

## 1. The Compressor

The compressor's job is to increase the pressure of the incoming air before it enters the combustor. Higher pressure ratios lead to higher cycle efficiency (analogous to compression ratio in a piston engine).

There are two main types of dynamic compressors:

**1. Centrifugal Compressor:**
Air enters the center (eye) of a spinning impeller and is flung outward radially by centrifugal force. The high-velocity air then enters a stationary diffuser, which slows the air down, converting kinetic energy into static pressure.
- **Advantages:** Simple, robust, relatively cheap, good pressure ratio per stage (up to ~4:1).
- **Disadvantages:** Large frontal area (increases aerodynamic drag), limited total pressure ratio. Used primarily in small engines (auxiliary power units, small helicopters).

**2. Axial Compressor:**
Air flows parallel to the axis of rotation through a series of stages. Each stage consists of a row of rotating blades (rotor) followed by a row of stationary blades (stator). The rotor accelerates the air, and the stator diffuses it, increasing pressure.
- **Advantages:** High total pressure ratio can be achieved by adding more stages (modern commercial engines exceed 40:1), small frontal area.
- **Disadvantages:** Complex, heavy, expensive, susceptible to "compressor stall" if airflow is disrupted. Used in almost all large modern jet engines.

## 2. The Combustor (Combustion Chamber)

The high-pressure air from the compressor enters the combustor, where fuel (kerosene/Jet-A) is continuously injected, atomized, mixed with the air, and burned.

**Key Challenges:**
1.  **Stable Combustion:** The flame must be maintained in a hurricane-force airflow (like keeping a candle lit in a windstorm). This is achieved using a "flame holder" or swirl vanes that create a localized region of low-velocity, recirculating flow where the primary combustion occurs.
2.  **Temperature Limits:** The stoichiometric flame temperature of jet fuel is over 2000°C. This is far above the melting point of the turbine blades immediately downstream. Therefore, only a portion (approx. 25-30%) of the compressed air is used for primary combustion. The remaining "secondary" air is bypassed around the flame zone and mixed in later to cool the exhaust gases down to a temperature the turbine can survive (the Turbine Inlet Temperature, or TIT).

## 3. The Turbine

The hot, high-pressure gas from the combustor expands through the turbine. The turbine's primary job is to extract enough mechanical work from the gas flow to drive the compressor (and the fan/propeller, if present).

Like axial compressors, turbines consist of stages of stationary guide vanes (stators) and rotating blades (rotors). However, because the gas is expanding (favorable pressure gradient), turbines can extract a massive amount of work in just a few stages, whereas compressors need many stages to avoid boundary layer separation.

**The Thermal Bottleneck:**
The turbine is the most thermally stressed component in the engine. It operates in an environment where the gas temperature is often hundreds of degrees *hotter* than the melting point of the blade material.

**Survival Strategies:**
1.  **Superalloys:** Blades are cast from advanced nickel-based or cobalt-based superalloys.
2.  **Single-Crystal Casting:** Modern blades are cast as a single continuous crystal, eliminating grain boundaries (which are points of weakness at high temperatures), vastly increasing creep resistance.
3.  **Active Cooling:** Intricate serpentine passages are cast inside the blades. Relatively cool air is bled from the compressor and routed through these passages, exiting through tiny holes on the blade surface to form a protective film of cool air between the blade metal and the hot exhaust gas.
