# 02. Fluid Statics and Manometry

## 1. Introduction to Fluid Statics

Fluid statics involves the study of fluids at rest. Since the fluid is stationary, there are no relative movements between fluid layers, meaning velocity gradients are zero. According to Newton's Law of Viscosity ($\tau = \mu \frac{du}{dy}$), the absence of velocity gradients implies that there are **no shear stresses** present in a static fluid. The only forces acting on the fluid particles are normal forces due to pressure, and body forces such as gravity.

In civil engineering, fluid statics is critical for calculating hydrostatic forces on retaining walls, submerged gates, and dams, as well as predicting the stability of floating structures like pontoons.

## 2. Pressure at a Point and Pascal's Law

Pressure ($p$) is the normal force per unit area exerted by a fluid. 
$$ p = \frac{F}{A} $$

### Pascal's Law
Pascal's Law states that the pressure at a point in a stationary fluid is the same in all directions. A small wedge of fluid in static equilibrium can be analyzed to prove that $p_x = p_y = p_z$. This principle implies that pressure acts isotropically at any specific depth, regardless of the orientation of the surface it acts upon.

Furthermore, any change in pressure applied to an enclosed incompressible fluid is transmitted undiminished to every portion of the fluid and the walls of its container. This forms the operational basis for hydraulic jacks and heavy earth-moving machinery used in construction.

## 3. The Basic Equation of Fluid Statics

To determine how pressure varies within a fluid body under gravity, we consider the equilibrium of a vertical fluid element. Balancing the pressure forces on the top and bottom of the element with its weight yields the fundamental equation of fluid statics:
$$ \frac{dp}{dz} = -\gamma $$
where $z$ is the vertical elevation (positive upwards), and $\gamma$ is the specific weight of the fluid.

For an incompressible fluid ($\gamma = \text{constant}$), integrating this equation between two elevations $z_1$ and $z_2$ yields:
$$ p_2 - p_1 = -\gamma (z_2 - z_1) $$
or expressed in terms of depth $h$ below a free surface ($h = z_1 - z_2$):
$$ p = p_0 + \gamma h $$
where $p_0$ is the pressure at the surface. If the surface is open to the atmosphere, $p_0 = p_{\text{atm}}$, and the gauge pressure at depth $h$ simplifies to:
$$ p_{\text{gauge}} = \gamma h $$

---

### Example 1: Pressure at the Base of a Dam
**Problem:** A concrete gravity dam retains a reservoir of water with a maximum depth of $45 \text{ m}$. Calculate the absolute and gauge pressures at the base of the dam. Assume atmospheric pressure $p_{\text{atm}} = 101.3 \text{ kPa}$ and water specific weight $\gamma = 9.81 \text{ kN/m}^3$.

**Solution:**
The gauge pressure at the bottom is solely due to the hydrostatic column of water:
$$ p_{\text{gauge}} = \gamma h = 9.81 \text{ kN/m}^3 \times 45 \text{ m} = 441.45 \text{ kPa} $$

To find the absolute pressure, we add the atmospheric pressure acting on the free surface of the reservoir:
$$ p_{\text{absolute}} = p_{\text{atm}} + p_{\text{gauge}} $$
$$ p_{\text{absolute}} = 101.3 \text{ kPa} + 441.45 \text{ kPa} = 542.75 \text{ kPa} $$

---

## 4. Manometry

Manometry is the technique of measuring fluid pressures using columns of liquid. Manometers are widely used in pipe networks and flow measurement devices (such as Venturi meters) to determine pressure differentials.

### The Piezometer Tube
A piezometer is the simplest form of manometer, consisting of a vertical tube tapped into the side of a container or pipe. The fluid rises in the tube until the hydrostatic pressure balances the internal pressure.
$$ p = \gamma h $$
Piezometers are simple but cannot measure negative pressures (suction) or very high pressures (as the tube would need to be impractically tall).

### U-Tube Manometer
A U-tube manometer uses a heavy "gauge fluid" (like mercury) to balance the pressure of a lighter fluid. This allows for the measurement of higher pressures.

The general rule for solving manometry problems is to start at one end of the manometer and work your way to the other end. 
1. Moving down a fluid column **adds** pressure ($+\gamma h$).
2. Moving up a fluid column **subtracts** pressure ($-\gamma h$).

---

### Example 2: Simple U-Tube Manometer
**Problem:** A U-tube manometer containing mercury (Specific Gravity $SG_{\text{Hg}} = 13.6$) is connected to a pipe carrying water under pressure. The center of the pipe is $0.15 \text{ m}$ below the level of mercury in the open end. The interface between water and mercury is $0.4 \text{ m}$ below the center of the water pipe. Determine the gauge pressure in the pipe. Specific weight of water $\gamma_w = 9810 \text{ N/m}^3$.

**Solution:**
Let $A$ be the center of the water pipe. We traverse the manometer from $A$ to the open atmosphere.
1. Start at $p_A$.
2. Move down through the water to the water-mercury interface. Depth change is $h_1 = 0.4 \text{ m}$. Pressure change: $+ \gamma_w h_1$.
3. We cross over horizontally to the other leg of the U-tube at the same elevation. Pressure remains constant.
4. Move up through the mercury to the open surface. The total height of the mercury column is $h_2 = h_1 + 0.15 \text{ m} = 0.55 \text{ m}$. Pressure change: $- \gamma_{\text{Hg}} h_2$.
5. We reach the open end, where gauge pressure is $0$.

The manometer equation is:
$$ p_A + \gamma_w h_1 - \gamma_{\text{Hg}} h_2 = 0 $$
$$ p_A = \gamma_{\text{Hg}} h_2 - \gamma_w h_1 $$
$$ p_A = (13.6 \times 9810)(0.55) - (9810)(0.4) $$
$$ p_A = 73378.8 - 3924 = 69454.8 \text{ Pa} = 69.45 \text{ kPa} $$

---

### Differential Manometers
A differential manometer measures the pressure difference between two points rather than the absolute or gauge pressure at a single point. It connects two points in a pipe network, with the manometer fluid forming a loop between them.

---

### Example 3: Differential Manometer
**Problem:** A differential manometer containing an oil gauge fluid ($SG_{\text{oil}} = 0.9$) connects two water pipes, A and B. Pipe A is $0.5 \text{ m}$ above pipe B. The manometer shows the oil level in the leg connected to B is $0.3 \text{ m}$ higher than the level in the leg connected to A. The water level in leg A drops $0.2 \text{ m}$ before meeting the oil. Find the pressure difference $p_B - p_A$. 

**Solution:**
Start at $p_A$ and write the manometer equation to $p_B$. Let $\gamma_w$ be the specific weight of water and $\gamma_o$ be the specific weight of oil.
From A to the oil interface: move down $0.2 \text{ m}$ in water.
From the left oil interface to the right oil interface: move down $0.3 \text{ m}$ in oil.
From the right oil interface to B: move up through water. The vertical distance to B is $0.2 \text{ m} + 0.3 \text{ m} - 0.5 \text{ m} = 0 \text{ m}$. Wait, let's verify geometry.
Elevation A is $z_A$. Elevation B is $z_A - 0.5$.
Left interface is at $z_A - 0.2$.
Right interface is at $z_A - 0.2 - 0.3 = z_A - 0.5$.
Since B is at $z_A - 0.5$, the right interface is exactly at the elevation of pipe B. So we move horizontally to B (no elevation change).

Equation:
$$ p_A + \gamma_w (0.2) + \gamma_o (0.3) = p_B $$
$$ p_B - p_A = 9810(0.2) + (0.9 \times 9810)(0.3) $$
$$ p_B - p_A = 1962 + 2648.7 = 4610.7 \text{ Pa} \approx 4.61 \text{ kPa} $$

## Conclusion
Fluid statics simplifies analysis by eliminating shear stresses, allowing pressure to be evaluated purely as a function of depth and specific weight. This foundational knowledge makes the deployment of manometers for accurate pressure testing in hydraulic systems highly effective.

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "Statics", "label": "Fluid Statics"},
    {"id": "Pascal", "label": "Pascal's Law\\n(Isotropic Pressure)"},
    {"id": "Equation", "label": "Statics Equation\\n(dp/dz = -γ)"},
    {"id": "Manometry", "label": "Manometry"},
    {"id": "Piezometer", "label": "Piezometer"},
    {"id": "UTube", "label": "U-Tube Manometer"},
    {"id": "Differential", "label": "Differential Manometer"}
  ],
  "edges": [
    {"from": "Statics", "to": "Pascal"},
    {"from": "Statics", "to": "Equation"},
    {"from": "Statics", "to": "Manometry"},
    {"from": "Manometry", "to": "Piezometer"},
    {"from": "Manometry", "to": "UTube"},
    {"from": "Manometry", "to": "Differential"}
  ]
}
```
