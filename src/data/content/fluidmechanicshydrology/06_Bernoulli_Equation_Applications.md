# 06. Bernoulli Equation and Applications

## 1. Introduction

The Bernoulli Equation is arguably the most famous equation in fluid mechanics. In civil engineering, it is the primary analytical tool for evaluating flow in pipe systems, determining pressures in Venturi meters, predicting discharge through orifices, and understanding the operation of siphons. 

At its core, the Bernoulli Equation is a statement of the **Conservation of Mechanical Energy** for a flowing fluid. It reveals the trade-off between pressure energy, kinetic energy, and potential energy.

## 2. Derivation and Assumptions

The Bernoulli equation is derived from Euler's equations of motion by integrating along a streamline. For the equation to be strictly valid, four critical assumptions must be satisfied:
1. **Inviscid Flow:** The fluid is assumed to have zero viscosity ($\mu = 0$), meaning there is no energy lost to internal friction.
2. **Incompressible Flow:** The fluid density ($\rho$) is constant (valid for water and other liquids).
3. **Steady Flow:** The flow characteristics do not change with time ($\frac{\partial V}{\partial t} = 0$).
4. **Flow Along a Streamline:** The equation relates properties between two points on the exact same streamline.

Under these assumptions, the sum of pressure energy, kinetic energy, and potential energy per unit weight of fluid remains constant.
$$ \frac{p}{\gamma} + \frac{V^2}{2g} + z = \text{Constant} $$

Applying it between any two points (1 and 2) along a streamline gives:
$$ \frac{p_1}{\gamma} + \frac{V_1^2}{2g} + z_1 = \frac{p_2}{\gamma} + \frac{V_2^2}{2g} + z_2 $$

### Understanding the Head Terms
In civil engineering, it is standard practice to express energy in terms of "head" (meters of fluid column):
- **Pressure Head ($\frac{p}{\gamma}$):** Represents the pressure energy.
- **Velocity Head ($\frac{V^2}{2g}$):** Represents the kinetic energy.
- **Elevation Head ($z$):** Represents the potential energy due to gravity.
- **Total Head ($H$):** The sum of the three terms.

---

### Example 1: Siphon Operation
**Problem:** A siphon is used to drain water from a large tank. The peak of the siphon is $2 \text{ m}$ above the water surface in the tank, and the discharge end is $5 \text{ m}$ below the water surface. Assuming ideal flow (no friction losses) and atmospheric pressure at both the tank surface and the discharge end, calculate the discharge velocity and the pressure at the peak of the siphon. 

**Solution:**
Let Point 1 be the surface of the large tank, Point 2 be the peak of the siphon, and Point 3 be the discharge end. Let the elevation of the tank surface be $z_1 = 0$. Therefore, $z_2 = 2 \text{ m}$ and $z_3 = -5 \text{ m}$.
Since the tank is large, the surface velocity $V_1 \approx 0$. 
Gauge pressure at the open tank surface $p_1 = 0$, and at the free jet discharge $p_3 = 0$.

1. Apply Bernoulli from 1 to 3 to find $V_3$:
$$ \frac{p_1}{\gamma} + \frac{V_1^2}{2g} + z_1 = \frac{p_3}{\gamma} + \frac{V_3^2}{2g} + z_3 $$
$$ 0 + 0 + 0 = 0 + \frac{V_3^2}{2g} - 5 $$
$$ \frac{V_3^2}{2g} = 5 \implies V_3 = \sqrt{2 \times 9.81 \times 5} = 9.90 \text{ m/s} $$
Due to continuity in a constant-diameter siphon tube, $V_2 = V_3 = 9.90 \text{ m/s}$.

2. Apply Bernoulli from 1 to 2 to find $p_2$:
$$ \frac{p_1}{\gamma} + \frac{V_1^2}{2g} + z_1 = \frac{p_2}{\gamma} + \frac{V_2^2}{2g} + z_2 $$
$$ 0 = \frac{p_2}{9810} + \frac{9.90^2}{2 \times 9.81} + 2 $$
$$ 0 = \frac{p_2}{9810} + 5 + 2 = \frac{p_2}{9810} + 7 $$
$$ p_2 = -7 \times 9810 = -68,670 \text{ Pa} = -68.67 \text{ kPa} \text{ (gauge)} $$
The negative gauge pressure (vacuum) at the peak is what "pulls" the water up. Note that if the absolute pressure drops below the vapor pressure of water, cavitation will occur, breaking the siphon.

---

## 3. Flow Measurement Devices

The Bernoulli equation is extensively used in conjunction with the continuity equation to design devices that measure flow rate.

### Pitot Tube
A Pitot tube measures the local velocity at a point by comparing the static pressure and the stagnation pressure. When fluid strikes the mouth of the tube, it is brought to rest (stagnation point), converting kinetic energy entirely into pressure energy.
$$ V = \sqrt{\frac{2(p_{\text{stagnation}} - p_{\text{static}})}{\rho}} $$

### Venturi Meter
A Venturi meter consists of a converging section, a narrow throat, and a diverging section. It is inserted inline into a pipe. As the area decreases at the throat, velocity must increase (Continuity). Consequently, the pressure must decrease (Bernoulli). 

---

### Example 2: Venturi Meter
**Problem:** A horizontal Venturi meter is installed in a pipe of diameter $D_1 = 300 \text{ mm}$. The throat diameter is $D_2 = 150 \text{ mm}$. A differential manometer connected between the inlet and the throat indicates a pressure difference $p_1 - p_2 = 25 \text{ kPa}$. Assuming ideal fluid flow, what is the discharge $Q$? ($\rho = 1000 \text{ kg/m}^3$)

**Solution:**
1. Since the meter is horizontal, $z_1 = z_2$. The Bernoulli equation simplifies to:
$$ \frac{p_1}{\gamma} + \frac{V_1^2}{2g} = \frac{p_2}{\gamma} + \frac{V_2^2}{2g} $$
$$ \frac{p_1 - p_2}{\gamma} = \frac{V_2^2 - V_1^2}{2g} $$
Multiply by $\gamma = \rho g$:
$$ p_1 - p_2 = \frac{\rho}{2}(V_2^2 - V_1^2) $$

2. Use the Continuity Equation to express $V_1$ in terms of $V_2$:
$$ A_1 V_1 = A_2 V_2 \implies V_1 = V_2 \left(\frac{D_2}{D_1}\right)^2 = V_2 \left(\frac{150}{300}\right)^2 = \frac{V_2}{4} $$

3. Substitute $V_1$ into the modified Bernoulli equation:
$$ 25,000 = \frac{1000}{2} \left[ V_2^2 - \left(\frac{V_2}{4}\right)^2 \right] $$
$$ 25,000 = 500 \left[ V_2^2 - \frac{V_2^2}{16} \right] = 500 \left[ \frac{15 V_2^2}{16} \right] $$
$$ 25,000 = \frac{7500}{16} V_2^2 $$
$$ V_2^2 = \frac{25,000 \times 16}{7500} = 53.33 $$
$$ V_2 = 7.30 \text{ m/s} $$

4. Calculate Discharge:
$$ A_2 = \frac{\pi (0.15)^2}{4} = 0.0177 \text{ m}^2 $$
$$ Q = A_2 V_2 = 0.0177 \times 7.30 = 0.129 \text{ m}^3\text{/s} = 129 \text{ L/s} $$

---

### Example 3: Torricelli’s Theorem (Orifice Discharge)
**Problem:** A large open water tank has a small circular orifice of diameter $50 \text{ mm}$ located $4 \text{ m}$ below the water surface. Assuming a coefficient of discharge $C_d = 0.62$ to account for real fluid effects (friction and contraction), calculate the actual discharge.

**Solution:**
1. Apply Bernoulli from the tank surface (Point 1) to the free jet exiting the orifice (Point 2).
$p_1 = p_2 = 0$ (atmospheric). $V_1 \approx 0$ (large tank). Let $z_2 = 0$, so $z_1 = 4 \text{ m}$.
$$ z_1 = \frac{V_2^2}{2g} $$
$$ V_{\text{ideal}} = \sqrt{2g z_1} = \sqrt{2 \times 9.81 \times 4} = 8.86 \text{ m/s} $$
This theoretical velocity result is known as Torricelli’s Theorem.

2. Calculate ideal discharge:
$$ A_{\text{orifice}} = \frac{\pi (0.05)^2}{4} = 0.00196 \text{ m}^2 $$
$$ Q_{\text{ideal}} = A_{\text{orifice}} V_{\text{ideal}} = 0.00196 \times 8.86 = 0.0174 \text{ m}^3\text{/s} $$

3. Calculate actual discharge:
$$ Q_{\text{actual}} = C_d \times Q_{\text{ideal}} = 0.62 \times 0.0174 = 0.0108 \text{ m}^3\text{/s} = 10.8 \text{ L/s} $$

## Conclusion
While the Bernoulli equation represents an idealized, frictionless scenario, it remains the most powerful starting point for hydraulic analysis. By supplementing it with empirical coefficients (like $C_d$) or head loss terms (expanded in the Energy Equation), civil engineers adapt it to solve complex real-world fluid transport systems.

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "Bernoulli", "label": "Bernoulli Equation"},
    {"id": "Energy", "label": "Conservation of Mechanical Energy"},
    {"id": "Assumptions", "label": "Assumptions:\\nInviscid, Incompressible, Steady"},
    {"id": "Terms", "label": "Head Terms"},
    {"id": "Pressure", "label": "Pressure Head\\n(p/γ)"},
    {"id": "Velocity", "label": "Velocity Head\\n(V^2/2g)"},
    {"id": "Elevation", "label": "Elevation Head\\n(z)"},
    {"id": "Apps", "label": "Applications"},
    {"id": "Venturi", "label": "Venturi Meter"},
    {"id": "Siphon", "label": "Siphons"}
  ],
  "edges": [
    {"from": "Bernoulli", "to": "Energy"},
    {"from": "Bernoulli", "to": "Assumptions"},
    {"from": "Bernoulli", "to": "Terms"},
    {"from": "Terms", "to": "Pressure"},
    {"from": "Terms", "to": "Velocity"},
    {"from": "Terms", "to": "Elevation"},
    {"from": "Bernoulli", "to": "Apps"},
    {"from": "Apps", "to": "Venturi"},
    {"from": "Apps", "to": "Siphon"}
  ]
}
```
