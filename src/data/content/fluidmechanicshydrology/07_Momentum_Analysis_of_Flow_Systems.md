# 07. Momentum Analysis of Flow Systems

## 1. Introduction

While the Bernoulli equation handles the conservation of energy, many civil engineering problems require analyzing the macroscopic forces exerted by moving fluids. The design of pipe thrust blocks, bridge piers subject to river flow, jet propulsion systems, and deflector plates on spillways relies on the **Conservation of Linear Momentum**.

To apply Newton's Second Law ($\vec{F} = m\vec{a}$) to a fluid continuum, we utilize the Reynolds Transport Theorem (RTT), transitioning from a closed system (tracking specific mass) to an open Control Volume (fixed in space).

## 2. The Linear Momentum Equation

For a fixed, non-deforming control volume under steady flow conditions, the sum of all external forces acting on the control volume equals the net rate of momentum efflux (momentum leaving minus momentum entering).
$$ \sum \vec{F} = \int_{CS} \vec{V} \rho (\vec{V} \cdot \hat{n}) dA $$

For one-dimensional inlets and outlets with uniform velocity distributions, this integral simplifies to an algebraic summation:
$$ \sum \vec{F} = \sum (\dot{m} \vec{V})_{\text{out}} - \sum (\dot{m} \vec{V})_{\text{in}} $$
where $\dot{m} = \rho A V = \rho Q$ is the mass flow rate.

The forces ($\sum \vec{F}$) include:
- **Pressure forces** acting on the control surfaces.
- **Body forces** like gravity (weight of the fluid in the CV).
- **Reaction forces** from structural boundaries (e.g., the force a pipe bend exerts on the fluid).

By Newton's Third Law, the force exerted *by the fluid on the structure* is equal and opposite to the reaction force exerted *by the structure on the fluid*.

---

### Example 1: Force Exerted by a Free Jet on a Stationary Vane
**Problem:** A high-speed water jet from a fire hose strikes a stationary vertical plate. The jet has a diameter of $50 \text{ mm}$ and a velocity of $20 \text{ m/s}$. After striking the plate, the water splatters radially outwards parallel to the plate. Find the horizontal force required to hold the plate stationary. ($\rho = 1000 \text{ kg/m}^3$)

**Solution:**
Select a control volume encompassing the jet stream as it strikes the plate. 
1. Determine mass flow rate ($\dot{m}$):
$$ A = \frac{\pi (0.05)^2}{4} = 0.00196 \text{ m}^2 $$
$$ \dot{m} = \rho A V = 1000 \times 0.00196 \times 20 = 39.2 \text{ kg/s} $$

2. Apply the Momentum Equation in the x-direction (horizontal):
$$ \sum F_x = \dot{m} V_{x,\text{out}} - \dot{m} V_{x,\text{in}} $$
The only horizontal external force acting on the fluid is the reaction force $R_x$ from the plate. The pressures at the inlet and outlet of the free jet are atmospheric ($0$ gauge), so no pressure forces.
The incoming velocity is $V_{x,\text{in}} = 20 \text{ m/s}$.
Because the fluid deflects radially along the vertical plate, the outgoing horizontal velocity is $V_{x,\text{out}} = 0$.
$$ -R_x = 39.2 \times (0) - 39.2 \times (20) = -784 \text{ N} $$
$$ R_x = 784 \text{ N} $$

The plate must exert a force of $784 \text{ N}$ to the left to stop the fluid. Therefore, the force the fluid exerts on the plate is **$784 \text{ N}$ to the right**.

---

### Example 2: Thrust on a Pipe Reducer
**Problem:** A horizontal pipe reducer connects a $300 \text{ mm}$ diameter pipe to a $150 \text{ mm}$ diameter pipe. Water flows through it at a rate of $0.25 \text{ m}^3\text{/s}$. The pressure at the inlet (large end) is $150 \text{ kPa}$. Determine the magnitude and direction of the resultant axial force exerted by the water on the reducer. Assume no friction losses ($\rho = 1000 \text{ kg/m}^3$).

**Solution:**
1. Calculate areas and velocities:
$$ A_1 = 0.0707 \text{ m}^2 \implies V_1 = \frac{0.25}{0.0707} = 3.54 \text{ m/s} $$
$$ A_2 = 0.0177 \text{ m}^2 \implies V_2 = \frac{0.25}{0.0177} = 14.12 \text{ m/s} $$

2. Determine pressure $p_2$ at the outlet using Bernoulli:
$$ \frac{p_1}{\gamma} + \frac{V_1^2}{2g} = \frac{p_2}{\gamma} + \frac{V_2^2}{2g} $$
$$ p_2 = p_1 + \frac{\rho}{2}(V_1^2 - V_2^2) $$
$$ p_2 = 150,000 + 500(3.54^2 - 14.12^2) = 150,000 + 500(12.53 - 199.37) $$
$$ p_2 = 150,000 - 93,420 = 56,580 \text{ Pa} = 56.58 \text{ kPa} $$

3. Apply Momentum Equation in x-direction:
Let $R_x$ be the reaction force of the reducer on the fluid.
$$ \sum F_x = p_1 A_1 - p_2 A_2 + R_x = \dot{m} V_2 - \dot{m} V_1 $$
$$ \dot{m} = \rho Q = 1000 \times 0.25 = 250 \text{ kg/s} $$
$$ (150,000 \times 0.0707) - (56,580 \times 0.0177) + R_x = 250(14.12 - 3.54) $$
$$ 10,605 - 1001.5 + R_x = 250(10.58) = 2645 $$
$$ 9603.5 + R_x = 2645 $$
$$ R_x = 2645 - 9603.5 = -6958.5 \text{ N} \approx -6.96 \text{ kN} $$
The reducer pushes the fluid to the left ($R_x$ is negative). Thus, the water exerts a thrust force of **$6.96 \text{ kN}$ to the right** on the reducer. A concrete thrust block or tie rods may be required to resist this force and prevent the pipe joints from separating.

---

### Example 3: Forces on a 90-Degree Pipe Bend
**Problem:** A horizontal $90^\circ$ pipe bend changes the direction of flow. The pipe diameter is constant at $200 \text{ mm}$. Flow rate is $0.1 \text{ m}^3\text{/s}$, and the pressure throughout the bend is uniform at $100 \text{ kPa}$. Calculate the magnitude of the total resultant force exerted by the fluid on the bend.

**Solution:**
1. Calculate Area and Velocity:
$$ A = \frac{\pi(0.2)^2}{4} = 0.0314 \text{ m}^2 $$
$$ V = \frac{0.1}{0.0314} = 3.18 \text{ m/s} $$
$$ \dot{m} = \rho Q = 1000 \times 0.1 = 100 \text{ kg/s} $$

2. Momentum in x-direction (inlet flow is +x):
$V_{1x} = 3.18$, $V_{2x} = 0$.
$$ p_1 A_1 + R_x = \dot{m}(V_{2x} - V_{1x}) $$
$$ (100,000 \times 0.0314) + R_x = 100(0 - 3.18) $$
$$ 3140 + R_x = -318 \implies R_x = -3458 \text{ N} $$
Force on bend is $+3458 \text{ N}$ (to the right).

3. Momentum in y-direction (outlet flow is +y):
$V_{1y} = 0$, $V_{2y} = 3.18$. At the outlet, pressure acts against the control volume (-y direction).
$$ -p_2 A_2 + R_y = \dot{m}(V_{2y} - V_{1y}) $$
$$ -(100,000 \times 0.0314) + R_y = 100(3.18 - 0) $$
$$ -3140 + R_y = 318 \implies R_y = 3458 \text{ N} $$
Force on bend is $-3458 \text{ N}$ (downwards).

4. Total resultant force:
$$ F = \sqrt{(3458)^2 + (-3458)^2} = \sqrt{2 \times (3458)^2} = 4890 \text{ N} = 4.89 \text{ kN} $$

## Conclusion
The momentum equation rigorously quantifies the dynamic forces exerted by moving fluids. Without this analysis, unsupported elbows, valves, and reducers in pressurized water mains would catastrophically fail under hydraulic thrust.

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "Momentum", "label": "Momentum Analysis"},
    {"id": "Newton", "label": "Newton's 2nd Law & RTT"},
    {"id": "Equation", "label": "ΣF = Δ(mv)\\nLinear Momentum Equation"},
    {"id": "Forces", "label": "Control Volume Forces"},
    {"id": "Pressure", "label": "Pressure Forces"},
    {"id": "Body", "label": "Body Forces (Gravity)"},
    {"id": "Reaction", "label": "Reaction Forces (Thrust)"},
    {"id": "Applications", "label": "Civil Engineering Applications"},
    {"id": "Blocks", "label": "Thrust Blocks on Bends"},
    {"id": "Jets", "label": "Jet Deflection"}
  ],
  "edges": [
    {"from": "Momentum", "to": "Newton"},
    {"from": "Newton", "to": "Equation"},
    {"from": "Equation", "to": "Forces"},
    {"from": "Forces", "to": "Pressure"},
    {"from": "Forces", "to": "Body"},
    {"from": "Forces", "to": "Reaction"},
    {"from": "Momentum", "to": "Applications"},
    {"from": "Applications", "to": "Blocks"},
    {"from": "Applications", "to": "Jets"}
  ]
}
```
