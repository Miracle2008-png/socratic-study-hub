# Refrigeration and Heat Pump Cycles

A **refrigeration cycle** is a Rankine power cycle operating in reverse: instead of producing work from heat, it uses work to pump heat from a cold space to a hot space. This is the thermodynamic basis for every household refrigerator, air conditioner, and industrial chiller.

## 1. The Vapor-Compression Refrigeration Cycle

The standard refrigeration cycle uses a refrigerant (R-134a, R-32, R-290, etc.) that alternates between liquid and vapor phases.

**Process 1→2: Isentropic Compression (Compressor)**
Low-pressure, low-temperature saturated (or slightly superheated) vapor enters the compressor and is compressed to high pressure. Temperature rises significantly.

**Process 2→3: Isobaric Condensation (Condenser)**
Hot, high-pressure vapor rejects heat to the warm environment (outdoor air/cooling water) and condenses to saturated liquid. The condenser is the "hot side" of the system — it's why air conditioners blow hot air outside.

**Process 3→4: Isenthalpic Throttling (Expansion Valve)**
High-pressure liquid passes through a throttle valve. Pressure drops abruptly, causing partial flash evaporation. Temperature drops to the saturation temperature at low pressure (which is well below the desired cold space temperature).

**Process 4→1: Isobaric Evaporation (Evaporator)**
Cold, low-pressure wet refrigerant absorbs heat from the refrigerated space ($Q_L$) and evaporates to saturated vapor. This is the "cooling effect" — the evaporator is the "cold side."

## 2. Coefficient of Performance (COP)

Unlike heat engines (where we want efficiency $< 1$), refrigeration cycles can have COP $> 1$ because the useful output ($Q_L$ removed) can exceed the work input ($W_{net}$):

$$\text{COP}_{refrigerator} = \frac{Q_L}{W_{net}} = \frac{h_1 - h_4}{h_2 - h_1}$$

Typical domestic refrigerator COP: **2.5–4** (removes 2.5–4 kJ of heat per kJ of electrical energy consumed).

**Heat Pump** — the same cycle, but now the useful effect is the heat delivered to the warm space ($Q_H$):
$$\text{COP}_{heat pump} = \frac{Q_H}{W_{net}} = \frac{h_2 - h_3}{h_2 - h_1}$$

Note: $\text{COP}_{HP} = \text{COP}_{ref} + 1$ always. Typical heat pump COP: **3–5** (delivers 3–5 kJ of heat per kJ of electricity).

## 3. Analysis Using the P-h Diagram

On the refrigerant $P$-$h$ diagram:
- Compression (1→2): near-vertical line rising from low to high pressure.
- Condensation (2→3): horizontal line at high pressure inside and through the dome.
- Throttling (3→4): vertical line (constant $h$) dropping from high to low pressure.
- Evaporation (4→1): horizontal line at low pressure through the two-phase region.

All four enthalpies $h_1, h_2, h_3, h_4$ are read directly from the diagram or tables, making analysis rapid.
