---
title: "The Rankine Cycle: Steam Power Plants"
---

# The Rankine Cycle: Steam Power Plants

The **Rankine cycle** is the standard thermodynamic cycle for steam power plants — the technology that generates most of the world's electricity (coal, nuclear, natural gas combined cycle, concentrated solar). Understanding it is fundamental to power engineering.

## 1. The Ideal Rankine Cycle (Four Processes)

The cycle operates between a high-pressure boiler and a low-pressure condenser:

**Process 1→2: Isentropic Compression (Pump)**
Saturated liquid from the condenser ($x=0$) is pumped to boiler pressure. Pump work is small because liquid is nearly incompressible:
$$\dot{W}_P = \dot{m}(h_2 - h_1) \approx \dot{m} v_1(P_2 - P_1)$$

**Process 2→3: Isobaric Heat Addition (Boiler)**
Compressed liquid is heated at constant pressure: first warming to saturation, then evaporating completely, then superheating.
$$\dot{Q}_{in} = \dot{m}(h_3 - h_2)$$

**Process 3→4: Isentropic Expansion (Turbine)**
Superheated steam expands through the turbine, doing work. Steam exits as wet mixture or superheated vapor.
$$\dot{W}_T = \dot{m}(h_3 - h_4)$$

**Process 4→1: Isobaric Heat Rejection (Condenser)**
Wet steam condenses to saturated liquid at constant low pressure by rejecting heat to cooling water.
$$\dot{Q}_{out} = \dot{m}(h_4 - h_1)$$

## 2. Thermal Efficiency

Net work output = turbine work − pump work:
$$\dot{W}_{net} = \dot{W}_T - \dot{W}_P = \dot{m}[(h_3 - h_4) - (h_2 - h_1)]$$

Thermal efficiency:
$$\eta_{th} = \frac{\dot{W}_{net}}{\dot{Q}_{in}} = 1 - \frac{h_4 - h_1}{h_3 - h_2} = 1 - \frac{\dot{Q}_{out}}{\dot{Q}_{in}}$$

Typical values: 30–40% for simple cycles; up to 48% for modern supercritical plants.

## 3. Improving Rankine Efficiency

**Increase boiler pressure/temperature:** Higher $T_{max}$ raises efficiency (approaches Carnot). Modern supercritical plants operate at $P > 22 \text{ MPa}$, $T > 600°C$.

**Decrease condenser pressure:** Lower cold reservoir temperature. Condensers operate at $P \approx 0.01$ MPa ($\approx 45°C$) using river/ocean cooling.

**Superheating:** Increases average heat addition temperature and prevents wet steam erosion in turbine.

**Reheat cycle:** Steam partially expands in high-pressure turbine, returns to boiler for reheating, then completes expansion in low-pressure turbine. Increases work output and reduces turbine exhaust wetness.

**Regeneration (Feedwater Heating):** Bleed steam from intermediate turbine stages to preheat feedwater, reducing heat rejected in condenser. Dramatically improves efficiency — the Rankine cycle with regeneration approaches Carnot efficiency.

Combined cycle plants (gas turbine + Rankine bottoming cycle) achieve efficiencies up to **62%**.
