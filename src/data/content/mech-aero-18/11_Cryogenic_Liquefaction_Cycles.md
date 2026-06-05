---
title: "Cryogenic Liquefaction Cycles"
---

# Cryogenic Liquefaction Cycles

Standard refrigeration aims to maintain a cold space. **Cryogenic liquefaction** aims to cool a gas so severely that it condenses into a liquid at cryogenic temperatures (below -150°C or 123 K). This is essential for the production of liquid oxygen (LOX) and liquid hydrogen (LH2) for rockets, liquid nitrogen (LN2) for medical and industrial use, and Liquefied Natural Gas (LNG) for global transport.

These cycles rely fundamentally on the **Joule-Thomson effect**.

## 1. The Joule-Thomson Effect

When a real gas is throttled (expanded through a valve) isenthalpically, its temperature changes. The **Joule-Thomson coefficient** ($\mu_{JT}$) determines this change:

$$\mu_{JT} = \left(\frac{\partial T}{\partial P}\right)_h$$

- If $\mu_{JT} > 0$, the gas **cools** as pressure drops.
- If $\mu_{JT} < 0$, the gas **warms** as pressure drops.

Most gases cool upon expansion at room temperature. However, hydrogen and helium warm upon expansion at room temp. To cool them via throttling, they must first be pre-cooled below their **maximum inversion temperature** (202 K for Hydrogen, 40 K for Helium) using another refrigeration method (like liquid nitrogen).

## 2. The Linde-Hampson Cycle

The simplest gas liquefaction process.

1. **Compression:** Makeup gas is mixed with unliquefied return gas and compressed to a very high pressure (e.g., 200 atm). Heat of compression is rejected to ambient cooling water.
2. **Regenerative Cooling:** The high-pressure gas passes through a counter-flow heat exchanger, where it is pre-cooled by the cold, unliquefied gas returning from the flash chamber.
3. **Isenthalpic Expansion (J-T Valve):** The pre-cooled, high-pressure gas is throttled through an expansion valve. The pressure drops dramatically. Due to the J-T effect, the temperature drops so low that a portion of the gas condenses into a liquid.
4. **Separation:** The mixture enters a separator tank. The liquid is drawn off as the final product.
5. **Return:** The remaining cold, unliquefied vapor is routed back through the regenerative heat exchanger to pre-cool the incoming high-pressure stream, closing the loop.

## 3. The Claude Cycle

The Linde-Hampson cycle relies entirely on isenthalpic throttling for cooling, which is highly irreversible and inefficient. The **Claude cycle** improves efficiency by introducing **isentropic expansion** (doing work).

1. The gas is compressed and cooled.
2. Before reaching the expansion valve, the stream is split.
3. A large portion (60-80%) of the gas is routed through an **expansion turbine**. As it does work on the turbine blades, its temperature drops dramatically (much more than a throttle valve). This work is also recovered to help drive the compressor.
4. This ultra-cold turbine exhaust is routed into the regenerative heat exchanger to aggressively pre-cool the remaining portion of the high-pressure gas.
5. The remaining high-pressure gas, now thoroughly pre-cooled, passes through the J-T throttle valve and partially liquefies. (The turbine exhaust itself is kept gaseous to avoid liquid droplet damage to the high-speed turbine blades).

The Claude cycle requires significantly less compression work per kilogram of liquid produced compared to the Linde-Hampson cycle and is the foundation for large-scale industrial air separation plants.
