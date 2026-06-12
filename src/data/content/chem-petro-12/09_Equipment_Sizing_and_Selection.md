# Equipment Sizing and Selection

Once the mass and energy balances are finalized on the PFD, the design engineer must turn those theoretical numbers into physical dimensions. This is **Equipment Sizing**. You must determine the height, diameter, thickness, and internal structure of every vessel in the plant so the mechanical engineers can order the steel.

## 1. Sizing Distillation Columns

A distillation column is fundamentally a massive steel cylinder. Determining its size requires two independent calculations: Height and Diameter.

### Determining Column Height
The height of a column is determined by thermodynamics (mass transfer). 
1.  Using a process simulator (or McCabe-Thiele), you determine the number of theoretical equilibrium stages required to achieve the desired separation (e.g., $N = 20$ stages).
2.  Physical trays are not 100% efficient. If the tray efficiency is 70%, you actually need $20 / 0.70 = 29$ physical trays.
3.  Trays are typically spaced about 0.6 meters (2 feet) apart to allow vapor to disengage from the liquid and to allow space for humans to crawl inside during maintenance.
4.  Height $\approx$ (Number of Trays $\times$ Tray Spacing) $+$ 3 meters for the bottom sump $+$ 2 meters for the top vapor space.

### Determining Column Diameter
The diameter of a column is determined by fluid mechanics (hydraulics). 
Vapor is roaring up the column while liquid is raining down. If the vapor is moving too fast, it will physically blow the liquid back up the column. This is called **Flooding**, and it completely destroys the separation process.
1.  Calculate the maximum volumetric flow rate of vapor inside the column.
2.  Use empirical correlations (like the Souders-Brown equation) to calculate the maximum allowable vapor velocity before flooding occurs.
3.  Divide the volumetric flow rate by the maximum velocity to find the required cross-sectional Area of the column.
4.  Calculate the Diameter from the Area ($A = \pi D^2 / 4$).

## 2. Sizing Pressure Vessels and Reactors

Any tank holding fluid above 15 psi (1 atm) is legally classified as a Pressure Vessel. The sizing and thickness of these vessels are strictly governed by the **ASME Boiler and Pressure Vessel Code**, a legal document written in blood after hundreds of horrific boiler explosions in the 1800s.

### Wall Thickness Calculation
The most critical dimension of a pressure vessel is its wall thickness. If it is too thin, the internal pressure will rip the steel apart (causing a catastrophic BLEVE—Boiling Liquid Expanding Vapor Explosion).
For a simple cylindrical vessel, the required thickness ($t$) is driven by "Hoop Stress":

$$ t = \frac{P \cdot r}{S \cdot E - 0.6 P} + CA $$

*   $P$ is the Design Pressure. (Usually set 10% higher than the maximum operating pressure).
*   $r$ is the internal radius of the tank.
*   $S$ is the Maximum Allowable Stress of the specific steel alloy at the operating temperature. (Steel gets drastically weaker at high temperatures).
*   $E$ is the Weld Joint Efficiency. (If the welds are 100% X-rayed and perfect, $E=1.0$. If they are not X-rayed, the code forces you to assume they are flawed ($E=0.7$), forcing you to buy thicker, more expensive steel).
*   $CA$ is the Corrosion Allowance. You intentionally buy the steel an extra 1/8th of an inch thicker than required because you know the acid inside will slowly eat away at the metal over the next 20 years.

## 3. Pump and Compressor Selection

Pumps move incompressible liquids; Compressors move compressible gases.
Selecting the right type is driven by flow rate and required pressure.

### Pumps
*   **Centrifugal Pumps:** The absolute default choice for 90% of the industry. A spinning impeller throws the fluid outward. They are cheap, reliable, and provide a smooth, continuous flow. However, they cannot handle highly viscous fluids (like molasses or heavy crude).
*   **Positive Displacement Pumps (Gear, Piston, Diaphragm):** Used for highly viscous fluids or when you need to dose a perfectly exact, measured amount of chemical (metering pumps). They physically trap a volume of fluid and push it out. They pulse, and if a valve downstream is closed, they will blow the pipe apart.

### Compressors
Compressors are massively expensive and consume terrifying amounts of electricity. 
*   **Centrifugal Compressors:** Used for massive, continuous flow rates of gas (like the air intake for an entire refinery), but they can only achieve moderate pressure boosts per stage.
*   **Reciprocating Compressors:** Basically a car engine running in reverse. A massive piston physically crushes the gas. Used for extremely high pressures, but they are noisy, require massive concrete foundations, and the gas pulses violently.

## 4. The Sizing Workflow

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "pfd", "data": { "label": "PFD Data", "icon": "Activity", "description": "Start with theoretical mass flow and temperatures." }, "style": { "background": "#451a03", "color": "#fef3c7" } },
    { "id": "height", "data": { "label": "Column Height", "icon": "Layers", "description": "Driven by thermodynamics and number of trays." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "diam", "data": { "label": "Column Diameter", "icon": "Maximize", "description": "Driven by fluid velocity to prevent flooding." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "thick", "data": { "label": "Wall Thickness", "icon": "Shield", "description": "Driven by ASME code, pressure, and metal stress limits." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } }
  ],
  "edges": [
    { "source": "pfd", "target": "height", "animated": true },
    { "source": "pfd", "target": "diam", "animated": true },
    { "source": "pfd", "target": "thick", "animated": true, "style": { "stroke": "#10b981", "strokeWidth": 2 } }
  ]
}
```
