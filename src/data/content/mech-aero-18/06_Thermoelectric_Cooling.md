---
title: "Thermoelectric Cooling"
---

# Thermoelectric Cooling

Unlike vapor-compression or absorption systems, thermoelectric coolers (TECs) are solid-state devices. They have no moving parts, no circulating fluids, and no bulk compressors or expansion valves. They utilize quantum mechanical effects within semiconductor materials to pump heat directly using electricity.

## 1. The Peltier Effect

Thermoelectric cooling is based on the **Peltier effect** (discovered by Jean Charles Athanase Peltier in 1834). 

When a direct electric current (DC) is passed through a circuit consisting of two different conductive materials, heat is absorbed at one junction (it gets cold) and released at the other junction (it gets hot). Reversing the polarity of the current instantly reverses the direction of heat transfer—the cold side becomes hot, and the hot side becomes cold.

## 2. Construction of a Peltier Module

Modern TECs do not use simple metals; they use highly doped semiconductor materials (typically Bismuth Telluride, $Bi_2Te_3$) to maximize the effect.

- A TEC consists of many alternating "pellets" of N-type and P-type semiconductors.
- These pellets are connected electrically in series but thermally in parallel between two ceramic plates.
- When voltage is applied, electrons flow continuously. In the N-type material, electrons carry heat from the cold plate to the hot plate. In the P-type material, "holes" (positive charge carriers) flow in the opposite electrical direction, which also carries heat from the cold plate to the hot plate.
- The net result is that one ceramic face becomes a dedicated heat sink (cold), and the other becomes a heat radiator (hot).

## 3. Advantages

- **Solid-State Reliability:** No moving parts to wear out, no refrigerant leaks. Mean time between failures (MTBF) can exceed 100,000 hours.
- **Precision Temperature Control:** Because the cooling capacity is directly proportional to the applied current, temperatures can be controlled to within fractions of a degree.
- **Compact and Scalable:** Can be made incredibly small (millimeter scale) to cool specific electronic components.
- **Instant Reversibility:** Heating or cooling can be toggled instantly by flipping the switch polarity, useful in DNA thermocyclers.
- **Orientation Independent:** Operates perfectly in zero gravity or upside down.

## 4. Disadvantages and COP

The fatal flaw of thermoelectric cooling is its **extremely poor thermodynamic efficiency**.

- **Internal Heat Generation:** Because the semiconductors have electrical resistance, driving current through them generates Joule heating ($I^2R$). This heat opposes the cooling effect.
- **Thermal Conduction:** Heat naturally conducts backward from the hot plate to the cold plate through the semiconductor material, fighting the Peltier pumping action.

The COP of a thermoelectric cooler is typically between **0.3 and 0.6** (meaning it consumes 2 to 3 watts of electricity for every 1 watt of cooling). By contrast, a standard vapor-compression system has a COP of 3.0 to 4.0.

Consequently, TECs are never used for large-scale cooling (room AC, refrigerators). They are restricted to niche applications where compactness, reliability, and precision trump energy efficiency:
- Cooling computer CPUs and laser diodes.
- Portable 12V car coolers/warmers.
- Scientific instrumentation and aerospace applications.
