# 12. Concept Drills: Fluid Mechanics & Hydraulics

## 1. Introduction to Concept Drills

This document serves as a high-intensity review covering the core principles of Fluid Mechanics, Pipe Hydraulics, and Open Channel Flow. By working through these composite problems, you will solidify your understanding of how statics, kinematics, energy conservation, and momentum principles interlock in real-world civil engineering scenarios.

## 2. Drill 1: Fluid Statics & Buoyancy

**The Scenario:** A cylindrical steel buoy is used to mark a navigation channel. The buoy has a diameter of $1.5 \text{ m}$ and a height of $2.5 \text{ m}$. It has a mass of $1200 \text{ kg}$. It floats in an estuary where the water density is $\rho = 1015 \text{ kg/m}^3$. A mooring chain attaches to the center of the base and anchors it to the seabed. During high tide, the water level rises such that the buoy is completely submerged, pulling the chain taut.

**Mathematical Example 1:**
*Find the tension in the mooring chain when the buoy is completely submerged.*

**Solution:**
1. Calculate the total volume of the buoy:
$$ V = \frac{\pi D^2}{4} \times h = \frac{\pi (1.5)^2}{4} \times 2.5 = 1.767 \times 2.5 = 4.418 \text{ m}^3 $$

2. Calculate the total Buoyant Force ($F_B$) when fully submerged:
$$ F_B = \rho g V = 1015 \times 9.81 \times 4.418 = 43,991 \text{ N} $$

3. Calculate the weight of the buoy ($W$):
$$ W = mg = 1200 \times 9.81 = 11,772 \text{ N} $$

4. Apply vertical equilibrium ($\sum F_y = 0$):
The buoyant force pushes up, while gravity and the chain tension ($T$) pull down.
$$ F_B - W - T = 0 $$
$$ T = F_B - W = 43,991 - 11,772 = 32,219 \text{ N} \approx 32.2 \text{ kN} $$
The chain must be designed to withstand at least $32.2 \text{ kN}$ of tension to hold the buoy underwater.

---

## 3. Drill 2: Pipe Hydraulics & Energy

**The Scenario:** A hydroelectric power plant draws water from a reservoir through a large penstock pipe to drive a turbine. The water surface of the reservoir is at elevation $500 \text{ m}$. The turbine is located at elevation $300 \text{ m}$, and discharges freely into a tailrace channel at atmospheric pressure. The penstock has a length of $800 \text{ m}$, a diameter of $1.2 \text{ m}$, and a friction factor $f = 0.015$. The flow rate is $8 \text{ m}^3\text{/s}$. Neglect minor losses.

**Mathematical Example 2:**
*Calculate the net head available to the turbine and the power extracted by the turbine (assuming 100% efficiency).*

**Solution:**
1. Calculate the velocity in the penstock:
$$ A = \frac{\pi (1.2)^2}{4} = 1.131 \text{ m}^2 $$
$$ V = \frac{Q}{A} = \frac{8}{1.131} = 7.07 \text{ m/s} $$

2. Calculate Major Head Loss ($h_f$) in the penstock:
$$ h_f = f \frac{L}{D} \frac{V^2}{2g} = 0.015 \times \frac{800}{1.2} \times \frac{7.07^2}{19.62} = 10 \times 2.548 = 25.48 \text{ m} $$

3. Apply the Energy Equation from the reservoir surface (1) to the turbine discharge (2):
$p_1 = p_2 = 0$, $V_1 \approx 0$.
$$ z_1 = z_2 + \frac{V_2^2}{2g} + h_f + h_t $$
$$ 500 = 300 + 2.548 + 25.48 + h_t $$
$$ h_t = 500 - 300 - 28.028 = 171.97 \text{ m} $$
The net head extracted by the turbine is $171.97 \text{ m}$. (Note that the gross head was $200 \text{ m}$).

4. Calculate Power ($P$):
$$ P = \gamma Q h_t = 9810 \times 8 \times 171.97 = 13,496,205 \text{ W} \approx 13.5 \text{ MW} $$
The turbine generates $13.5 \text{ Megawatts}$ of fluid power.

---

## 4. Drill 3: Open Channel Flow & Specific Energy

**The Scenario:** A rectangular concrete flood channel is $6 \text{ m}$ wide. It is designed to carry a peak design discharge of $30 \text{ m}^3\text{/s}$ smoothly. A bridge pier is to be constructed in the center of the channel, which will act as a constriction (reducing the effective width). 

**Mathematical Example 3:**
*Before the bridge pier is installed, determine the critical depth and minimum specific energy of the flow. If the flow is currently subcritical at a depth of $2.5 \text{ m}$, what is its Froude number?*

**Solution:**
1. Calculate unit discharge ($q$):
$$ q = \frac{Q}{b} = \frac{30}{6} = 5 \text{ m}^2\text{/s} $$

2. Calculate Critical Depth ($y_c$):
$$ y_c = \left( \frac{q^2}{g} \right)^{1/3} = \left( \frac{5^2}{9.81} \right)^{1/3} = \left( \frac{25}{9.81} \right)^{1/3} = (2.548)^{1/3} = 1.366 \text{ m} $$

3. Calculate Minimum Specific Energy ($E_{\min}$):
For a rectangular channel:
$$ E_{\min} = 1.5 y_c = 1.5 \times 1.366 = 2.049 \text{ m} $$

4. Analyze the $2.5 \text{ m}$ depth condition:
Since $y = 2.5 \text{ m} > y_c = 1.366 \text{ m}$, the flow is indeed subcritical.
Velocity $V = \frac{q}{y} = \frac{5}{2.5} = 2.0 \text{ m/s}$.
$$ Fr = \frac{V}{\sqrt{g y}} = \frac{2.0}{\sqrt{9.81 \times 2.5}} = \frac{2.0}{\sqrt{24.525}} = \frac{2.0}{4.952} = 0.404 $$
The Froude number is $0.404$ ($< 1$, confirming subcritical flow). 

*Concept Note: If the bridge pier constricts the channel width too much, it will force the flow through critical depth, creating a hydraulic "choke" and causing the water level upstream to rise, potentially flooding the area.*

## 5. Review Summary

These drills bridge the gap between abstract equations and physical infrastructure. Always approach a problem by defining your control volume, assessing the fluid's state (static vs. dynamic), identifying the driving forces (pressure vs. gravity), and tracking the energy losses.

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "Review", "label": "Hydraulic System Analysis"},
    {"id": "Statics", "label": "1. Fluid Statics\\n(Buoyancy, Forces)"},
    {"id": "Energy", "label": "2. Energy Equation\\n(Head Loss, Pumps/Turbines)"},
    {"id": "OCF", "label": "3. Open Channel\\n(Critical Flow, Froude)"},
    {"id": "Synthesis", "label": "Civil Engineering Design"}
  ],
  "edges": [
    {"from": "Review", "to": "Statics"},
    {"from": "Review", "to": "Energy"},
    {"from": "Review", "to": "OCF"},
    {"from": "Statics", "to": "Synthesis"},
    {"from": "Energy", "to": "Synthesis"},
    {"from": "OCF", "to": "Synthesis"}
  ]
}
```
