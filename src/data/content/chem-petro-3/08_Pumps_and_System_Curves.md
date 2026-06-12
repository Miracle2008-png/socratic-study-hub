# Pumps and System Curves

Once a chemical engineer has calculated the head loss for a piping network, they must select a pump capable of delivering that energy. 

## 1. Types of Pumps

Pumps are generally divided into two main categories:
1. **Positive Displacement Pumps**: (e.g., gear pumps, piston pumps). They trap a fixed volume of fluid and physically push it out. They deliver a constant flow rate regardless of the system pressure. They are used for highly viscous fluids (like honey or heavy oil) or when precise dosing is required.
2. **Centrifugal Pumps**: The absolute workhorses of the chemical industry. A spinning impeller accelerates the fluid outward, converting rotational kinetic energy into fluid pressure. The flow rate they deliver changes drastically depending on the resistance of the piping system.

## 2. The Pump Curve

Because the performance of a centrifugal pump varies, manufacturers test their pumps in a lab and provide a **Pump Curve**. 
The pump curve plots the Head supplied by the pump ($H_p$) on the y-axis against the Volumetric Flow Rate ($Q$) on the x-axis.

As the flow rate increases, the amount of head the pump can supply steadily drops. If you try to push too much fluid through it, the pressure drops to zero.

The curve also displays:
- **Efficiency ($\eta$)**: The mechanical efficiency of the pump. There is usually a distinct "Best Efficiency Point" (BEP) where the pump operates most smoothly.
- **Power Requirement (BHP)**: The brake horsepower required from the electrical motor to drive the pump.

## 3. The System Curve

While the Pump Curve is provided by the manufacturer, the **System Curve** is calculated by the chemical engineer using the Mechanical Energy Balance. 

By rearranging the Mechanical Energy Balance to solve for $h_p$, we get:
$$ h_{\text{required}} = (z_2 - z_1) + \frac{P_2 - P_1}{\rho g} + h_L $$
Since head loss ($h_L$) is proportional to $V^2$, and $V$ is proportional to $Q$, the system equation is essentially a parabola:
$$ h_{\text{required}} = \text{Static Head} + C \cdot Q^2 $$

The Static Head (elevation and pressure differences) is the energy required just to get the fluid to the destination at zero flow. The $C \cdot Q^2$ term represents the dynamic friction losses that grow exponentially as you pump faster.

## 4. The Operating Point

If you plot the manufacturer's **Pump Curve** and the engineer's **System Curve** on the same graph, they will intersect at exactly one point. 

**This intersection is the Operating Point.** It dictates the exact flow rate ($Q$) the pump will deliver when hooked up to that specific piping network, and the exact pressure head ($H$) it will operate at. 

If the operating point does not align closely with the pump's Best Efficiency Point (BEP), the engineer must either choose a different pump, trim the pump's impeller, or alter the piping system.

## 5. Cavitation and NPSH

If the pressure of a liquid drops below its vapor pressure at that specific temperature, the liquid boils instantly. 
In a pump, the lowest pressure point is at the "eye" (the inlet) of the spinning impeller. If the fluid boils here, it forms vapor bubbles. As these bubbles are swept outward into the high-pressure regions of the pump, they collapse violently with the force of tiny explosives. 

This is called **Cavitation**. It sounds like gravel passing through the pump and will rapidly destroy the metal impeller.

To prevent cavitation, the pressure at the pump inlet must always be kept safely above the fluid's vapor pressure. The manufacturer defines the minimum required pressure margin as the **Net Positive Suction Head Required (NPSH_R)**. 
The engineer must design the piping system so that the actual available pressure, the **NPSH_Available (NPSH_A)**, is strictly greater than the NPSH_R.

## 6. Pumps Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "types", "data": { "label": "Pump Types", "icon": "Settings", "description": "PD & Centrifugal." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "pump", "data": { "label": "Pump Curve", "icon": "Activity", "description": "Supplied Head." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "sys", "data": { "label": "System Curve", "icon": "TrendingUp", "description": "Required Head." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "op", "data": { "label": "Operating Point", "icon": "Target", "description": "Intersection." }, "style": { "background": "#14532d", "color": "#dcfce7" } },
    { "id": "cav", "data": { "label": "Cavitation", "icon": "AlertTriangle", "description": "NPSHA > NPSHR." }, "style": { "background": "#9f1239", "color": "#ffe4e6" } }
  ],
  "edges": [
    { "source": "types", "target": "pump", "animated": true },
    { "source": "pump", "target": "op", "animated": true },
    { "source": "sys", "target": "op", "animated": true },
    { "source": "op", "target": "cav", "animated": true }
  ]
}
```
