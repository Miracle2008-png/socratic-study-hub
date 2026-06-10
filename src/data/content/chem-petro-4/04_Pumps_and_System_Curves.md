# Pumps, Compressors and System Curves

Pressure drop calculations tell us how much energy is lost in a piping system. To deliver fluid against this resistance, we need pumps (for liquids) or compressors (for gases). Matching the pump to the system is one of the most critical tasks in process plant design.

## 1. The Modified Bernoulli Equation with a Pump

For a real fluid flowing from point 1 (suction) to point 2 (discharge), including a pump and accounting for friction:

$$\frac{P_1}{\rho g} + \frac{\langle v_1 \rangle^2}{2g} + z_1 + H_p = \frac{P_2}{\rho g} + \frac{\langle v_2 \rangle^2}{2g} + z_2 + h_f$$

Where:
- $H_p$ = **pump head** (metres of fluid) — energy added by the pump per unit weight of fluid
- $h_f$ = total friction head loss in the system

Rearranging, the **required pump head** is:
$$H_p = \frac{P_2 - P_1}{\rho g} + (z_2 - z_1) + \frac{\langle v_2 \rangle^2 - \langle v_1 \rangle^2}{2g} + h_f$$

## 2. Pump Performance Curves

A centrifugal pump's performance is characterised by its **H-Q curve** (head vs. flow rate), which is determined experimentally by the manufacturer:

$$H_p = H_{\text{shutoff}} - aQ^2$$

- At **zero flow** ($Q = 0$), the pump produces maximum **shutoff head** $H_{\text{shutoff}}$.
- As flow rate increases, the head decreases because the pump impeller cannot impart as much energy to faster-moving fluid.
- **Efficiency ($\eta$)**: The pump also has an efficiency curve, peaking at the **Best Efficiency Point (BEP)**. Always size pumps to operate near BEP.

The **pump power** required:
$$P_{\text{pump}} = \frac{\rho g Q H_p}{\eta}$$

## 3. System Curves

The **system curve** describes the head the pump must provide at any given flow rate to overcome all resistances in the piping system:

$$H_{\text{system}} = \Delta H_{\text{static}} + b Q^2$$

Where:
- $\Delta H_{\text{static}}$ = static head (pressure difference + elevation change) — constant, independent of flow rate
- $b Q^2$ = dynamic head losses (friction + minor losses) — increase with $Q^2$

## 4. The Operating Point

The pump's actual operating flow rate is determined by the **intersection of the pump curve and the system curve**:

$$H_p(Q) = H_{\text{system}}(Q)$$

This is the **operating point** — the only flow rate at which the pump head exactly matches the system demand. At any other point, the system is either starving the pump (too little flow) or overloading it (too much flow, pump runs off its curve).

**Graphical solution:** Plot both curves on the same $H$ vs. $Q$ axes. The operating point is the crossing.

## 5. Pumps in Series and Parallel

**Pumps in Series** (for high-pressure applications):
- The combined H-Q curve is constructed by **adding heads at the same flow rate**.
- Total head $= H_1(Q) + H_2(Q)$
- Used when a single pump cannot provide sufficient pressure (e.g., multi-stage centrifugal pumps, pipeline booster stations).

**Pumps in Parallel** (for high-flow applications):
- The combined H-Q curve is constructed by **adding flow rates at the same head**.
- Total flow $= Q_1(H) + Q_2(H)$
- Used when the required flow rate exceeds a single pump's capacity (e.g., city water supply systems).

## 6. Net Positive Suction Head (NPSH)

**Cavitation** occurs when local pressure drops below the vapour pressure of the liquid, causing vapour bubbles to form and violently implode. This is catastrophic for pumps — it causes erosion, noise, vibration, and dramatically reduced performance.

To avoid cavitation, the **Net Positive Suction Head Available (NPSH$_A$)** must exceed the **NPSH Required (NPSH$_R$)** specified by the pump manufacturer:

$$\text{NPSH}_A = \frac{P_{\text{suction}} - P_{\text{vapour}}}{\rho g} = \frac{P_{\text{atm}}}{\rho g} - z_s - h_{f,\text{suction}} - \frac{P_{\text{vapour}}}{\rho g}$$

Design rule: $\text{NPSH}_A \geq \text{NPSH}_R + 0.5 \, \text{m}$ (safety margin).

Practically: **keep pumps low** (minimise $z_s$), **minimise suction line losses** (short, large-diameter suction pipes), and **check vapour pressure** especially for hot liquids.

## 7. Worked Example: Pump Selection

**Problem:** Water ($\rho = 998 \, \text{kg/m}^3$) must be pumped from an open tank at ground level to an elevated tank at $z_2 = 15 \, \text{m}$, both at atmospheric pressure. The required flow rate is $Q = 0.01 \, \text{m}^3/\text{s}$. Total friction head loss is $h_f = 3.5 \, \text{m}$ at this flow rate. Find the required pump head and shaft power if $\eta = 0.72$.

**Required pump head:**
$$H_p = (z_2 - z_1) + h_f = 15 + 3.5 = 18.5 \, \text{m}$$

(Pressures and velocity heads cancel for identical tank sizes and pressures.)

**Required shaft power:**
$$P = \frac{\rho g Q H_p}{\eta} = \frac{998 \times 9.81 \times 0.01 \times 18.5}{0.72} = \frac{1811}{0.72} \approx 2515 \, \text{W} \approx 2.5 \, \text{kW}$$

Select a pump with at least $H_p = 18.5 \, \text{m}$ at $Q = 10 \, \text{L/s}$ near its BEP, with shaft power $\geq 2.5 \, \text{kW}$.
