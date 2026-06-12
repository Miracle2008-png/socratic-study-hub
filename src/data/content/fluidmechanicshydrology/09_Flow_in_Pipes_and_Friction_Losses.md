# 09. Flow in Pipes and Friction Losses

## 1. The Energy Equation for Real Fluids

While the Bernoulli equation assumes an ideal, frictionless fluid, real civil engineering pipe networks must account for energy dissipation. As water flows through a pipe, viscosity creates shear stresses against the pipe wall, converting mechanical energy into heat.

To account for this, we use the extended Energy Equation between two points:
$$ \frac{p_1}{\gamma} + \frac{V_1^2}{2g} + z_1 + h_p = \frac{p_2}{\gamma} + \frac{V_2^2}{2g} + z_2 + h_t + h_L $$
where:
- $h_p$ = Head added by a pump
- $h_t$ = Head extracted by a turbine
- $h_L$ = Total head loss

Total head loss is the sum of **Major Losses** (friction in straight pipe sections) and **Minor Losses** (turbulence caused by valves, bends, and fittings).

## 2. Major Losses and the Darcy-Weisbach Equation

The most scientifically robust method for calculating friction loss in pipes is the Darcy-Weisbach equation:
$$ h_f = f \frac{L}{D} \frac{V^2}{2g} $$
where:
- $f$ = Darcy friction factor (dimensionless)
- $L$ = Length of the pipe
- $D$ = Internal diameter of the pipe
- $V$ = Average flow velocity

### Determining the Friction Factor ($f$)
For **laminar flow** ($Re < 2000$), the friction factor depends only on the Reynolds number:
$$ f = \frac{64}{Re} $$

For **turbulent flow** ($Re > 4000$), $f$ depends on both the Reynolds number and the relative roughness of the pipe ($\frac{\epsilon}{D}$). It is determined empirically using the **Moody Chart** or explicitly via the Colebrook-White equation (or Swamee-Jain approximation).

---

### Example 1: Pumping Power and Major Losses
**Problem:** A pump delivers water at a rate of $0.05 \text{ m}^3\text{/s}$ through a cast iron pipe ($D = 200 \text{ mm}$, $L = 1500 \text{ m}$, $\epsilon = 0.26 \text{ mm}$). The water is pumped from a lower reservoir to an upper reservoir, with an elevation difference of $30 \text{ m}$. Assume minor losses are negligible. Kinematic viscosity $\nu = 1.0 \times 10^{-6} \text{ m}^2\text{/s}$. Find the required pump head ($h_p$).

**Solution:**
1. Determine the velocity:
$$ A = \frac{\pi (0.2)^2}{4} = 0.0314 \text{ m}^2 $$
$$ V = \frac{Q}{A} = \frac{0.05}{0.0314} = 1.59 \text{ m/s} $$

2. Calculate Reynolds Number:
$$ Re = \frac{VD}{\nu} = \frac{1.59 \times 0.2}{1.0 \times 10^{-6}} = 318,000 $$
The flow is highly turbulent.

3. Calculate relative roughness:
$$ \frac{\epsilon}{D} = \frac{0.26 \text{ mm}}{200 \text{ mm}} = 0.0013 $$

4. Determine $f$ (using Swamee-Jain approximation for Moody Chart):
$$ f \approx \frac{0.25}{\left[ \log_{10} \left( \frac{\epsilon/D}{3.7} + \frac{5.74}{Re^{0.9}} \right) \right]^2} $$
$$ f \approx \frac{0.25}{\left[ \log_{10} \left( \frac{0.0013}{3.7} + \frac{5.74}{318000^{0.9}} \right) \right]^2} \approx 0.0216 $$

5. Calculate major head loss ($h_f$):
$$ h_f = f \frac{L}{D} \frac{V^2}{2g} = 0.0216 \times \frac{1500}{0.2} \times \frac{1.59^2}{19.62} = 162 \times 0.129 = 20.87 \text{ m} $$

6. Apply Energy Equation between the two reservoir surfaces ($V_1 \approx 0$, $V_2 \approx 0$, $p_1 = p_2 = 0$):
$$ z_1 + h_p = z_2 + h_f \implies h_p = (z_2 - z_1) + h_f $$
$$ h_p = 30 + 20.87 = 50.87 \text{ m} $$
The pump must supply approximately $51 \text{ m}$ of head.

---

## 3. Minor Losses

Minor losses occur wherever the flow is disrupted by pipe fittings, changes in cross-section, or valves. Despite the name "minor", in highly complex pipe networks with many bends (like water treatment plants), these losses can exceed the major friction losses.

Minor losses are calculated using a loss coefficient ($K_L$):
$$ h_m = K_L \frac{V^2}{2g} $$
Common $K_L$ values:
- $90^\circ$ standard elbow: $K_L \approx 0.9$
- Fully open globe valve: $K_L \approx 10.0$
- Sharp-edged entrance: $K_L \approx 0.5$

---

### Example 2: Pipe System with Minor Losses
**Problem:** A $100 \text{ mm}$ diameter pipe connects two tanks. The pipe is $50 \text{ m}$ long, has a friction factor $f = 0.025$, a sharp entrance ($K_L = 0.5$), a sharp exit ($K_L = 1.0$), and a half-closed gate valve ($K_L = 2.1$). If the flow rate is $0.02 \text{ m}^3\text{/s}$, what is the elevation difference ($\Delta z$) between the two tanks?

**Solution:**
1. Calculate velocity:
$$ A = \frac{\pi (0.1)^2}{4} = 0.00785 \text{ m}^2 $$
$$ V = \frac{0.02}{0.00785} = 2.55 \text{ m/s} $$
$$ \frac{V^2}{2g} = \frac{2.55^2}{19.62} = 0.331 \text{ m} $$

2. Calculate Major Head Loss:
$$ h_f = f \frac{L}{D} \frac{V^2}{2g} = 0.025 \times \frac{50}{0.1} \times 0.331 = 12.5 \times 0.331 = 4.14 \text{ m} $$

3. Calculate Total Minor Loss:
$$ \sum K_L = 0.5 \text{ (entrance)} + 2.1 \text{ (valve)} + 1.0 \text{ (exit)} = 3.6 $$
$$ \sum h_m = (\sum K_L) \frac{V^2}{2g} = 3.6 \times 0.331 = 1.19 \text{ m} $$

4. Apply Energy Equation between tank surfaces:
$$ z_1 = z_2 + h_f + \sum h_m $$
$$ \Delta z = z_1 - z_2 = 4.14 + 1.19 = 5.33 \text{ m} $$

---

## 4. Multiple Pipe Systems

Municipal water distribution requires analyzing pipes connected in various configurations.

### Pipes in Series
When pipes of different diameters or roughnesses are connected end-to-end:
1. The discharge is constant throughout: $Q = Q_1 = Q_2 = Q_3$
2. The total head loss is the sum of the individual head losses: $h_L = h_{L1} + h_{L2} + h_{L3}$

### Pipes in Parallel
When a pipe branches out into multiple paths that later rejoin:
1. The total discharge is the sum of the individual branch discharges: $Q = Q_1 + Q_2 + Q_3$
2. The head loss across each parallel branch must be **identical**: $h_L = h_{L1} = h_{L2} = h_{L3}$

---

### Example 3: Parallel Pipe Flow Division
**Problem:** A discharge of $0.4 \text{ m}^3\text{/s}$ enters a junction and splits into two parallel pipes (A and B) that rejoin downstream. Pipe A has length $L_A = 1000 \text{ m}$, diameter $D_A = 300 \text{ mm}$, and friction factor $f_A = 0.02$. Pipe B has length $L_B = 800 \text{ m}$, diameter $D_B = 250 \text{ mm}$, and friction factor $f_B = 0.022$. Find the discharge in each pipe. Neglect minor losses.

**Solution:**
1. Head loss condition for parallel pipes:
$$ h_{f,A} = h_{f,B} $$
$$ f_A \frac{L_A}{D_A} \frac{V_A^2}{2g} = f_B \frac{L_B}{D_B} \frac{V_B^2}{2g} $$
Expressing velocity in terms of discharge ($V = \frac{4Q}{\pi D^2}$):
$$ h_f = \frac{8 f L Q^2}{\pi^2 g D^5} $$

2. Equate the head losses:
$$ \frac{8 f_A L_A Q_A^2}{\pi^2 g D_A^5} = \frac{8 f_B L_B Q_B^2}{\pi^2 g D_B^5} $$
$$ \frac{f_A L_A}{D_A^5} Q_A^2 = \frac{f_B L_B}{D_B^5} Q_B^2 $$
$$ \frac{0.02 \times 1000}{0.3^5} Q_A^2 = \frac{0.022 \times 800}{0.25^5} Q_B^2 $$
$$ \frac{20}{0.00243} Q_A^2 = \frac{17.6}{0.000976} Q_B^2 $$
$$ 8230.45 Q_A^2 = 18032.78 Q_B^2 $$
$$ Q_A = \sqrt{\frac{18032.78}{8230.45}} Q_B = 1.48 Q_B $$

3. Apply continuity at the junction:
$$ Q_A + Q_B = 0.4 $$
$$ 1.48 Q_B + Q_B = 0.4 \implies 2.48 Q_B = 0.4 $$
$$ Q_B = \frac{0.4}{2.48} = 0.161 \text{ m}^3\text{/s} $$
$$ Q_A = 1.48 \times 0.161 = 0.239 \text{ m}^3\text{/s} $$
Check: $0.239 + 0.161 = 0.400$.

## Conclusion
Accounting for friction through the Darcy-Weisbach equation and minor loss coefficients is critical. Failing to properly calculate $h_L$ leads to under-sizing municipal pumps, resulting in a loss of water pressure for consumers at the end of the network.

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "Energy", "label": "Energy Equation with Losses"},
    {"id": "Major", "label": "Major Losses (Straight Pipe)"},
    {"id": "Minor", "label": "Minor Losses (Fittings/Valves)"},
    {"id": "Darcy", "label": "Darcy-Weisbach Equation"},
    {"id": "Moody", "label": "Moody Chart\\n(f vs. Re, e/D)"},
    {"id": "Networks", "label": "Pipe Networks"},
    {"id": "Series", "label": "Series: Q const, hL adds"},
    {"id": "Parallel", "label": "Parallel: Q adds, hL const"}
  ],
  "edges": [
    {"from": "Energy", "to": "Major"},
    {"from": "Energy", "to": "Minor"},
    {"from": "Major", "to": "Darcy"},
    {"from": "Darcy", "to": "Moody"},
    {"from": "Energy", "to": "Networks"},
    {"from": "Networks", "to": "Series"},
    {"from": "Networks", "to": "Parallel"}
  ]
}
```
