# 03. Hydrostatic Forces on Surfaces

## 1. Introduction

In civil engineering, structures such as dams, floodgates, storage tanks, and retaining walls are continuously subjected to immense forces exerted by stationary fluids. Calculating the magnitude and location of these hydrostatic forces is arguably the most critical structural design requirement in hydraulic engineering. 

Because pressure in a static fluid varies linearly with depth ($p = \gamma h$), the pressure distribution over any submerged surface takes the shape of a prism. The net resultant force acts through a specific point known as the **center of pressure**, which is typically lower than the geometric centroid of the area.

## 2. Forces on Submerged Plane Surfaces

When an arbitrary planar surface is submerged in a fluid, the fluid exerts a distributed pressure across its area. The resultant hydrostatic force ($F_R$) can be determined by integrating the pressure over the surface area.

### Magnitude of the Resultant Force
The magnitude of the resultant force on a completely submerged plane surface is equal to the pressure at the geometric centroid of the surface multiplied by the total area of the surface:
$$ F_R = p_c A = \gamma h_c A $$
where:
- $\gamma$ = specific weight of the fluid
- $h_c$ = vertical depth from the free surface to the centroid of the area
- $A$ = total area of the plane surface

### Location of the Center of Pressure ($y_p$)
The resultant force does not pass through the centroid ($y_c$). Because pressure increases with depth, the resultant force acts below the centroid at the center of pressure ($y_p$). By taking the moment of the pressure distribution about the free surface, we derive:
$$ y_p = y_c + \frac{I_{xc}}{y_c A} $$
where:
- $y_p$ = distance from the free surface to the center of pressure along the incline
- $y_c$ = distance from the free surface to the centroid along the incline
- $I_{xc}$ = second moment of area (moment of inertia) of the surface about its horizontal centroidal axis

---

### Example 1: Vertical Rectangular Gate
**Problem:** A vertical rectangular sluice gate at the base of a dam is $2 \text{ m}$ wide and $3 \text{ m}$ high. The top edge of the gate is $5 \text{ m}$ below the free surface of water. Determine the magnitude of the resultant hydrostatic force and the location of the center of pressure. $\gamma_w = 9810 \text{ N/m}^3$.

**Solution:**
1. Determine the area ($A$) and the depth to the centroid ($h_c$):
$$ A = \text{width} \times \text{height} = 2 \times 3 = 6 \text{ m}^2 $$
The centroid of a rectangle is at half its height. Since it is vertical, $y_c = h_c$.
$$ h_c = 5 + \frac{3}{2} = 6.5 \text{ m} $$

2. Calculate the resultant force ($F_R$):
$$ F_R = \gamma h_c A = 9810 \times 6.5 \times 6 = 382,590 \text{ N} = 382.6 \text{ kN} $$

3. Calculate the moment of inertia about the centroidal axis ($I_{xc}$):
$$ I_{xc} = \frac{b h^3}{12} = \frac{2 \times 3^3}{12} = 4.5 \text{ m}^4 $$

4. Determine the center of pressure ($y_p$):
$$ y_p = y_c + \frac{I_{xc}}{y_c A} = 6.5 + \frac{4.5}{6.5 \times 6} = 6.5 + 0.115 = 6.615 \text{ m} $$
The force of $382.6 \text{ kN}$ acts at a depth of $6.615 \text{ m}$ from the water surface.

---

### Example 2: Inclined Circular Plate
**Problem:** A circular butterfly valve of diameter $D = 1.2 \text{ m}$ is installed in an inclined pipe. The pipe makes an angle of $60^\circ$ with the horizontal. The center of the valve is submerged $4 \text{ m}$ vertically below the free water surface. Find the resultant force and its point of application along the pipe.

**Solution:**
1. Determine Area and Depth:
$$ A = \frac{\pi D^2}{4} = \frac{\pi (1.2)^2}{4} = 1.131 \text{ m}^2 $$
$$ h_c = 4 \text{ m} $$

2. Resultant Force:
$$ F_R = \gamma h_c A = 9810 \times 4 \times 1.131 = 44,380 \text{ N} = 44.38 \text{ kN} $$

3. Determine the coordinate $y_c$ measured along the $60^\circ$ incline:
$$ \sin(60^\circ) = \frac{h_c}{y_c} \implies y_c = \frac{4}{\sin(60^\circ)} = 4.619 \text{ m} $$

4. Moment of inertia for a circle:
$$ I_{xc} = \frac{\pi D^4}{64} = \frac{\pi (1.2)^4}{64} = 0.1018 \text{ m}^4 $$

5. Center of pressure ($y_p$):
$$ y_p = y_c + \frac{I_{xc}}{y_c A} = 4.619 + \frac{0.1018}{4.619 \times 1.131} = 4.619 + 0.019 = 4.638 \text{ m} $$
The force acts $4.638 \text{ m}$ down the incline from the free surface.

---

## 3. Forces on Submerged Curved Surfaces

Curved surfaces, such as the face of a concrete gravity dam or a radial Tainter gate, pose a different challenge. The pressure acts everywhere normal to the surface, meaning the direction of the force vector changes continuously. Instead of integrating complex vector fields, we analyze the force by separating it into horizontal and vertical components.

### Horizontal Component ($F_H$)
The horizontal component of the hydrostatic force on a curved surface is equal to the hydrostatic force acting on the vertical projection of that curved surface.
$$ F_H = p_c A_{\text{proj}} = \gamma h_c A_{\text{proj}} $$
The line of action of $F_H$ passes through the center of pressure of the projected vertical area.

### Vertical Component ($F_V$)
The vertical component of the hydrostatic force is equal to the total weight of the fluid column directly above the curved surface extending up to the free surface.
$$ F_V = \gamma \times V $$
where $V$ is the volume of the fluid block. The line of action of $F_V$ passes through the center of gravity of this fluid block.

The resultant force is then found using vector addition:
$$ F_R = \sqrt{F_H^2 + F_V^2} $$
$$ \tan \alpha = \frac{F_V}{F_H} $$

---

### Example 3: Radial Tainter Gate
**Problem:** A radial gate (curved surface forming a quarter of a cylinder) has a radius $R = 3 \text{ m}$ and a width of $4 \text{ m}$ into the page. Water rests against its convex side up to the top of the gate (depth of $3 \text{ m}$). Determine the horizontal and vertical forces acting on the gate.

**Solution:**
1. Horizontal Component:
The vertical projection of the quarter-cylinder is a rectangle $3 \text{ m}$ high and $4 \text{ m}$ wide.
$$ A_{\text{proj}} = 3 \times 4 = 12 \text{ m}^2 $$
$$ h_c = \frac{3}{2} = 1.5 \text{ m} $$
$$ F_H = \gamma h_c A_{\text{proj}} = 9810 \times 1.5 \times 12 = 176,580 \text{ N} = 176.58 \text{ kN} $$

2. Vertical Component:
The volume of water "above" the curve is an imaginary volume extending to the surface. For a quarter circle holding back water horizontally, the displaced volume is a quarter-cylinder.
$$ V = \frac{\pi R^2}{4} \times \text{width} = \frac{\pi \times 3^2}{4} \times 4 = 9\pi \text{ m}^3 = 28.27 \text{ m}^3 $$
$$ F_V = \gamma V = 9810 \times 28.27 = 277,374 \text{ N} = 277.37 \text{ kN} $$

The resultant force is:
$$ F_R = \sqrt{176.58^2 + 277.37^2} = 328.7 \text{ kN} $$

## Conclusion
The design of any hydraulic retaining structure necessitates precision in locating the center of pressure and resolving forces into orthogonal components. Overturning moments must be accurately quantified to ensure structural stability against these immense fluid loads.

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "Forces", "label": "Hydrostatic Forces"},
    {"id": "Plane", "label": "Plane Surfaces"},
    {"id": "Curved", "label": "Curved Surfaces"},
    {"id": "Magnitude", "label": "Magnitude\\n(F = γ * hc * A)"},
    {"id": "Location", "label": "Center of Pressure\\n(yp = yc + I/(yc*A))"},
    {"id": "Horizontal", "label": "Horizontal Component\\n(Force on vertical projection)"},
    {"id": "Vertical", "label": "Vertical Component\\n(Weight of fluid column)"}
  ],
  "edges": [
    {"from": "Forces", "to": "Plane"},
    {"from": "Forces", "to": "Curved"},
    {"from": "Plane", "to": "Magnitude"},
    {"from": "Plane", "to": "Location"},
    {"from": "Curved", "to": "Horizontal"},
    {"from": "Curved", "to": "Vertical"}
  ]
}
```
