# 01. Fluid Properties

## 1. Introduction to Fluid Mechanics in Civil Engineering

Fluid mechanics is the branch of science that deals with the behavior of fluids (liquids and gases) at rest and in motion. In civil engineering, understanding fluid mechanics is fundamental for the design and analysis of water distribution networks, wastewater collection systems, dams, spillways, flood control structures, and groundwater flow. Unlike solids, which resist shear forces by static deformation, a fluid continuously deforms under the application of a shear stress, no matter how small that stress might be. This continuous deformation represents flow.

For civil engineering applications, water is the primary fluid of interest, though air is also significant in applications such as ventilation and wind loading on structures. To analyze fluid behavior, we first must quantify its fundamental physical properties. 

## 2. Density, Specific Weight, and Specific Gravity

The mass and weight characteristics of a fluid are paramount in analyzing its behavior under gravitational forces.

### Density ($\rho$)
Density is defined as the mass per unit volume of a fluid. It represents the concentration of matter within the fluid.
$$ \rho = \frac{m}{V} $$
For water at standard conditions ($4^\circ\text{C}$ and 1 atm), the density is approximately $1000 \text{ kg/m}^3$.

### Specific Weight ($\gamma$)
Specific weight (or unit weight) is the weight of the fluid per unit volume. It is highly relevant in civil engineering since gravitational forces drive open channel flows and hydrostatic pressures.
$$ \gamma = \rho g $$
For water, $\gamma \approx 9810 \text{ N/m}^3$ (or $9.81 \text{ kN/m}^3$).

### Specific Gravity ($SG$)
Specific gravity is a dimensionless ratio of the density of a fluid to the density of a standard reference fluid (typically water for liquids at $4^\circ\text{C}$).
$$ SG = \frac{\rho_{\text{fluid}}}{\rho_{\text{water}}} = \frac{\gamma_{\text{fluid}}}{\gamma_{\text{water}}} $$

---

### Example 1: Volumetric Properties of a Fluid
**Problem:** A reservoir contains an unknown liquid. A sample volume of $0.5 \text{ m}^3$ is extracted and found to weigh $4.2 \text{ kN}$. Calculate the specific weight, density, and specific gravity of the liquid. Assume standard gravity $g = 9.81 \text{ m/s}^2$.

**Solution:**
First, we find the specific weight:
$$ \gamma = \frac{W}{V} = \frac{4200 \text{ N}}{0.5 \text{ m}^3} = 8400 \text{ N/m}^3 $$

Next, we calculate the density using $\gamma = \rho g$:
$$ \rho = \frac{\gamma}{g} = \frac{8400 \text{ N/m}^3}{9.81 \text{ m/s}^2} = 856.27 \text{ kg/m}^3 $$

Finally, we determine the specific gravity:
$$ SG = \frac{\rho}{\rho_{\text{water}}} = \frac{856.27}{1000} = 0.856 $$

The liquid is lighter than water, consistent with properties similar to crude oil.

---

## 3. Viscosity

Viscosity is a measure of a fluid's resistance to flow and continuous deformation due to internal friction between fluid layers. It is the fluid analogue of shear modulus in solid mechanics. 

### Dynamic Viscosity ($\mu$)
According to Newton's Law of Viscosity, the shear stress $\tau$ between adjacent fluid layers is proportional to the velocity gradient (or rate of shear strain) $\frac{du}{dy}$.
$$ \tau = \mu \frac{du}{dy} $$
Fluids that obey this linear relationship are known as **Newtonian fluids** (e.g., water, air). The proportionality constant $\mu$ is the dynamic (or absolute) viscosity, measured in $\text{Pa}\cdot\text{s}$ or $\text{N}\cdot\text{s/m}^2$.

### Kinematic Viscosity ($\nu$)
Kinematic viscosity is the ratio of dynamic viscosity to density, representing the momentum diffusivity of the fluid.
$$ \nu = \frac{\mu}{\rho} $$
It is typically measured in $\text{m}^2\text{/s}$. For water at $20^\circ\text{C}$, $\nu \approx 1.0 \times 10^{-6} \text{ m}^2\text{/s}$.

---

### Example 2: Shear Force on a Plate
**Problem:** A flat plate of area $0.8 \text{ m}^2$ is pulled over a stationary surface at a constant velocity of $1.5 \text{ m/s}$. The gap between the plate and the surface is $2 \text{ mm}$ and is filled with an oil of dynamic viscosity $\mu = 0.4 \text{ Pa}\cdot\text{s}$. Assuming a linear velocity profile, calculate the force required to maintain this motion.

**Solution:**
A linear velocity profile implies a constant velocity gradient:
$$ \frac{du}{dy} = \frac{V - 0}{y} = \frac{1.5 \text{ m/s}}{0.002 \text{ m}} = 750 \text{ s}^{-1} $$

The shear stress acting on the plate is:
$$ \tau = \mu \frac{du}{dy} = 0.4 \times 750 = 300 \text{ N/m}^2 $$

The total force $F$ required is the shear stress multiplied by the area of the plate:
$$ F = \tau A = 300 \text{ N/m}^2 \times 0.8 \text{ m}^2 = 240 \text{ N} $$

---

## 4. Surface Tension and Capillarity

### Surface Tension ($\sigma$)
At the interface between a liquid and a gas, or between two immiscible liquids, attractive cohesive forces between liquid molecules create a "membrane-like" effect known as surface tension. This is measured in force per unit length ($\text{N/m}$). It plays a significant role in modeling small-scale environmental flows, such as soil moisture movement in geotechnical engineering.

### Capillarity
Capillary action is the phenomenon where liquid rises or falls in a narrow tube due to the combined effects of cohesive forces (within the liquid) and adhesive forces (between the liquid and the tube wall). 

The height of the capillary rise $h$ in a circular tube of radius $R$ is derived from balancing the vertical component of the surface tension force and the weight of the liquid column:
$$ h = \frac{2 \sigma \cos \theta}{\gamma R} $$
where $\theta$ is the contact angle.

---

### Example 3: Capillary Rise in Soil Pores
**Problem:** In geotechnical engineering, soil pores can act like capillary tubes, drawing water above the water table. Estimate the capillary rise of water at $20^\circ\text{C}$ in a clean glass tube simulating a soil pore with a diameter of $0.05 \text{ mm}$. The surface tension of water is $\sigma = 0.0728 \text{ N/m}$, specific weight $\gamma = 9810 \text{ N/m}^3$, and the contact angle $\theta = 0^\circ$.

**Solution:**
First, determine the radius of the tube:
$$ R = \frac{d}{2} = \frac{0.05 \text{ mm}}{2} = 0.025 \text{ mm} = 2.5 \times 10^{-5} \text{ m} $$

Using the capillary rise equation:
$$ h = \frac{2 \sigma \cos \theta}{\gamma R} = \frac{2 (0.0728) \cos(0^\circ)}{(9810)(2.5 \times 10^{-5})} $$
$$ h = \frac{0.1456}{0.24525} = 0.593 \text{ m} $$

The water will rise nearly $60 \text{ cm}$ above the water table due to capillary action.

## 5. Compressibility and Bulk Modulus

While liquids are often treated as incompressible in standard civil engineering problems, their slight compressibility is critical in transient phenomena like "water hammer" in pipe networks. Compressibility is quantified by the Bulk Modulus of Elasticity ($K$), which relates the change in pressure to the relative change in volume:
$$ K = - \frac{dp}{dV/V} = \rho \frac{dp}{d\rho} $$
A higher bulk modulus indicates a less compressible fluid. For water, $K \approx 2.2 \text{ GPa}$, rendering it virtually incompressible under typical pressure variations.

## Conclusion

A solid grasp of fluid properties—such as density, specific weight, viscosity, surface tension, and bulk modulus—is imperative. These properties act as the input parameters for all governing fluid mechanics equations, dictating the behavior of water as it interfaces with civil infrastructure.

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "Properties", "label": "Fluid Properties"},
    {"id": "MassWeight", "label": "Mass & Weight\\n(Density, Specific Weight)"},
    {"id": "Viscosity", "label": "Viscosity\\n(Dynamic, Kinematic)"},
    {"id": "Surface", "label": "Interfacial Effects\\n(Surface Tension, Capillarity)"},
    {"id": "Compressibility", "label": "Compressibility\\n(Bulk Modulus)"}
  ],
  "edges": [
    {"from": "Properties", "to": "MassWeight"},
    {"from": "Properties", "to": "Viscosity"},
    {"from": "Properties", "to": "Surface"},
    {"from": "Properties", "to": "Compressibility"}
  ]
}
```
