# Aircraft Performance and Range

## Introduction

Aircraft performance analysis answers the mission-critical question: **How far, how fast, and how efficiently can an aircraft fly?** From the fuel-burn calculations that define transatlantic route economics to the glide-ratio analysis that saves fuel during descents, performance engineering translates aerodynamic theory into operational reality. This module develops the governing equations for range, endurance, climb, and descent, grounded in real-world examples from commercial aviation.

---

## 1. Fundamental Performance Equations

For flight in a vertical plane, Newton's second law along and perpendicular to the flight path gives:

$$T - D - W\sin\gamma = m\dot{V}$$
$$L - W\cos\gamma = mV\dot{\gamma}$$

For **steady, level, unaccelerated flight** (SLUF): $\gamma = 0$, $\dot{V} = 0$, so:

$$T = D, \qquad L = W$$

### 1.1 Thrust-Required and Power-Required

$$T_R = D = \frac{W}{L/D} = \frac{W\,C_D}{C_L}$$

Since $C_D = C_{D0} + C_L^2/(\pi e AR)$, thrust required is minimised when $C_L = \sqrt{\pi e AR \cdot C_{D0}}$ (induced = parasite drag), giving:

$$\left(\frac{L}{D}\right)_{\max} = \frac{1}{2}\sqrt{\frac{\pi e AR}{C_{D0}}}$$

Power required: $P_R = T_R \times V_\infty$.

---

## 2. Range: The Breguet Range Equation

Derived from the fuel-flow rate $\dot{W}_f = c_T \cdot T$ where $c_T$ is the **thrust-specific fuel consumption** (TSFC, kg/(N·s)):

$$R = \int_{W_i}^{W_f} \frac{V_\infty}{c_T \cdot T}\,(-dW)$$

For **cruise-climb** (constant $C_L$ and Mach, optimum):

$$\boxed{R = \frac{V_\infty}{c_T} \cdot \frac{L}{D} \cdot \ln\left(\frac{W_i}{W_f}\right)}$$

This is the **Breguet Range Equation** — one of the most important formulas in aerospace engineering. Its three factors reveal the levers for range improvement:

1. **Cruise speed / TSFC ratio** ($V/c_T$) — improved by high-bypass turbofans.
2. **Aerodynamic efficiency** ($L/D$) — improved by high-AR wings and winglets.
3. **Structural efficiency** ($W_i/W_f = $ fuel fraction) — improved by composites.

### 2.1 Equivalent for Propeller Aircraft

For propeller aircraft with shaft power $P$ and propulsive efficiency $\eta_p$, thrust $T = \eta_p P / V$, and BSFC $c_P$ (kg/(W·s)):

$$R = \frac{\eta_p}{c_P} \cdot \frac{L}{D} \cdot \ln\left(\frac{W_i}{W_f}\right)$$

Note: range is **independent of airspeed** for propeller aircraft — fly slower to save fuel if headwinds are negligible.

---

## 3. Endurance

Maximum endurance occurs at minimum power required (propeller) or minimum fuel flow. For jet aircraft, maximum endurance is at $V_{(L/D)_{max}}$; for propellers, at $V_{P_{min}}$.

$$E = \frac{1}{c_T} \cdot \frac{L}{D} \cdot \ln\left(\frac{W_i}{W_f}\right) \cdot \frac{1}{V}$$

Since $V$ appears in the denominator, jets achieve maximum endurance by flying at the speed for $(L/D)_{\max}$, typically 20–30% slower than maximum-range speed.

---

## 4. Rate of Climb

**Rate of Climb (ROC)** is the excess power divided by weight:

$$\dot{h} = \frac{(T - D)V_\infty}{W} = \frac{P_{excess}}{W}$$

For jets, maximum ROC occurs at the speed where excess thrust times velocity is maximised. The **service ceiling** is reached when maximum ROC falls to 0.5 m/s (100 ft/min).

---

## Worked Examples

### Example 1 — Breguet Range for a Boeing 787-9

**Problem:** A 787-9 has $L/D = 21$, TSFC $c_T = 1.5 \times 10^{-5}\ \text{kg/(N·s)}$, cruises at $M = 0.85$ at 40,000 ft (ISA: $T = 216.65\ \text{K}$, $a = \sqrt{\gamma R T} = 295\ \text{m/s}$). Initial weight $W_i = 245\,000 \times 9.81\ \text{N}$, fuel weight $W_{fuel} = 101\,000\ \text{kg}$. Find range.

**Solution:**

$$V_\infty = 0.85 \times 295 = 250.75\ \text{m/s}$$

$$W_f = (245\,000 - 101\,000) \times 9.81 = 144\,000 \times 9.81\ \text{N}$$

$$\ln\left(\frac{W_i}{W_f}\right) = \ln\left(\frac{245\,000}{144\,000}\right) = \ln(1.701) = 0.5313$$

$$R = \frac{250.75}{1.5\times10^{-5}} \times 21 \times 0.5313$$

$$R = \frac{250.75}{1.5\times10^{-5}} \times 11.157 = 16\,717\,000 \times 11.157 = \mathbf{1.865\times10^{10}\ \text{m}}$$

Wait — let us recalculate cleanly:

$$R = \frac{V}{c_T \cdot g} \cdot \frac{L}{D} \cdot \ln\left(\frac{W_i}{W_f}\right)$$

Note: $c_T$ in kg/(N·s) requires care. Using $c_T$ as a fuel mass flow per unit thrust: $\dot{m}_f = c_T \cdot T$, so $c_T = 1.5\times10^{-5}\ \text{kg/(N·s)}$.

$$R = \frac{250.75}{1.5\times10^{-5}} \times 21 \times 0.5313 = 1.672\times10^7 \times 21 \times 0.5313 = \mathbf{1.87\times10^7\ \text{m}} \approx \mathbf{18\,700\ \text{km}}$$

The published range of the 787-9 is ~14,140 km — the discrepancy reflects that actual missions carry payload weight, encounter non-ISA winds, and operate at partial $L/D$ during climb/descent. Real airline planning reduces Breguet range by ~25%.

---

### Example 2 — Maximum Lift-to-Drag Ratio and Optimal Cruise Speed

**Problem:** An aircraft has $C_{D0} = 0.018$, $e = 0.85$, $AR = 11$, $W = 180\,000\ \text{N}$, $S = 95\ \text{m}^2$. Find $(L/D)_{\max}$ and the cruise speed at sea level that achieves it.

**Solution:**

$$\left(\frac{L}{D}\right)_{\max} = \frac{1}{2}\sqrt{\frac{\pi \times 0.85 \times 11}{0.018}} = \frac{1}{2}\sqrt{\frac{29.37}{0.018}} = \frac{1}{2}\sqrt{1631.7} = \frac{1}{2}\times 40.39 = \mathbf{20.2}$$

Optimal $C_L$: $C_L^* = \sqrt{\pi e AR \cdot C_{D0}} = \sqrt{29.37 \times 0.018} = \sqrt{0.5287} = 0.727$

$$q^* = \frac{W}{S\,C_L^*} = \frac{180\,000}{95 \times 0.727} = \frac{180\,000}{69.1} = 2606\ \text{Pa}$$

$$V^* = \sqrt{\frac{2q^*}{\rho}} = \sqrt{\frac{2\times2606}{1.225}} = \sqrt{4254} = \mathbf{65.2\ \text{m/s}} \approx 127\ \text{KTAS}$$

---

### Example 3 — Rate of Climb for a Commercial Aircraft

**Problem:** At initial cruise weight, an aircraft ($W = 400\,000\ \text{N}$, $S = 260\ \text{m}^2$, $C_{D0} = 0.022$, $e = 0.8$, $AR = 8.6$) climbs at sea level at $V = 100\ \text{m/s}$ with thrust $T = 80\,000\ \text{N}$. Find the rate of climb.

**Solution:**

$$C_L = \frac{W}{q S} = \frac{400\,000}{\frac{1}{2}\times1.225\times10\,000\times 260} = \frac{400\,000}{1\,592\,500} = 0.251$$

$$C_D = 0.022 + \frac{0.251^2}{\pi\times0.8\times8.6} = 0.022 + \frac{0.0630}{21.6} = 0.022 + 0.00292 = 0.02492$$

$$D = 0.02492 \times \frac{1}{2}\times1.225\times10\,000\times260 = 0.02492\times1\,592\,500 = 39\,684\ \text{N}$$

$$\dot{h} = \frac{(T-D)V}{W} = \frac{(80\,000-39\,684)\times100}{400\,000} = \frac{4\,031\,600}{400\,000} = \mathbf{10.1\ \text{m/s}} = 1990\ \text{ft/min}$$

This is a typical initial climb rate for a twin-engine narrowbody airliner.

---

```diagram
{"type":"flowchart","direction":"TB","nodes":[{"id":"1","data":{"label":"Thrust Available vs Required","description":"T_A and T_R curves as functions of airspeed"}},{"id":"2","data":{"label":"(L/D)_max Point","description":"Induced drag = parasite drag; sets optimal cruise C_L"}},{"id":"3","data":{"label":"Breguet Range Equation","description":"R = (V/c_T)·(L/D)·ln(Wi/Wf) — three efficiency levers"}},{"id":"4","data":{"label":"Maximum Endurance","description":"Fly at minimum fuel-flow speed; jet at (L/D)_max speed"}},{"id":"5","data":{"label":"Excess Power","description":"P_excess = (T−D)·V; drives climb rate"}},{"id":"6","data":{"label":"Rate of Climb","description":"dh/dt = P_excess / W; decreases as altitude increases"}},{"id":"7","data":{"label":"Service Ceiling","description":"ROC = 0.5 m/s; maximum operational altitude"}},{"id":"8","data":{"label":"Fuel Weight Fraction","description":"Wi/Wf drives range; reduced by payload and structural weight"}}],"edges":[{"id":"e1","source":"1","target":"2","label":"T_R minimum"},{"id":"e2","source":"2","target":"3","label":"L/D input"},{"id":"e3","source":"2","target":"4","label":"endurance optimum"},{"id":"e4","source":"1","target":"5","label":"T - D"},{"id":"e5","source":"5","target":"6","label":"divide by W"},{"id":"e6","source":"6","target":"7","label":"ceiling condition"},{"id":"e7","source":"8","target":"3","label":"ln(Wi/Wf)"}]}
```
