# 2. Ohm's Law and Electrical Power

## The Most Famous Law in Electronics

In 1827, German physicist Georg Ohm published a paper detailing how current flows through resistive materials. He discovered that for many materials, the voltage across the material is directly proportional to the current flowing through it.

This linear relationship is enshrined as **Ohm's Law**:
$$ V = I \cdot R $$

Where:
*   $V$ is the Voltage (Volts, V)
*   $I$ is the Current (Amperes, A)
*   $R$ is the Resistance (Ohms, $\Omega$)

*Note: Materials and components that strictly obey this linear relationship are called "Ohmic." Resistors are Ohmic. Semiconductors like diodes and transistors are heavily non-Ohmic!*

---

## Electrical Power and Energy

While Ohm's law governs the relationship between variables, engineers are ultimately concerned with doing work—moving a motor, lighting an LED, or computing a calculation. 

**Power ($P$)** is the rate at which electrical energy is transferred or consumed. It is measured in **Watts (W)** (where $1 \text{ W} = 1 \text{ Joule/second}$).
The universal power equation in electrical systems is:
$$ P = V \cdot I $$

By substituting Ohm's Law ($V = IR$ or $I = V/R$) into the power equation, we derive two incredibly useful variations for calculating power dissipated by a resistor:
$$ P = I^2 \cdot R $$
$$ P = \frac{V^2}{R} $$

**Energy ($W$)** is the total power consumed over a period of time, measured in **Joules (J)** or **Watt-hours (Wh)**.
$$ W = \int_0^t P(\tau) \, d\tau $$
If power is constant, this simplifies to $W = P \cdot t$.

### The Passive Sign Convention
To determine if a component is *absorbing* power or *supplying* power, engineers use the Passive Sign Convention:
*   If current enters the **positive** voltage terminal, power is **absorbed** (e.g., a resistor, a charging battery). $P$ is calculated as positive.
*   If current enters the **negative** voltage terminal, power is **supplied** (e.g., a discharging battery, a generator). $P$ is calculated as negative.

---

## Engineering Applications

*   **Thermal Management (Heat Dissipation):** The formula $P = I^2R$ represents "Joule Heating." All wires and resistors turn electrical energy into heat. In microprocessors, millions of tiny resistances generate massive heat, requiring complex cooling systems. In power grids, transmission lines run at incredibly high voltages (e.g., $500\text{kV}$) to lower the current ($I$) required to deliver power, thereby drastically reducing $I^2R$ power losses over hundreds of miles.
*   **Sizing Components:** Resistors are rated not just by their resistance (e.g., $100 \, \Omega$), but by their power rating (e.g., $1/4\text{ W}$, $1\text{ W}$, $10\text{ W}$). If you force $2\text{ W}$ of power through a $1/4\text{ W}$ resistor, it will physically burn up and destroy the circuit.

---

## Worked Examples

### Example 1 — Easy: Resistor Power Rating

**Problem:** An LED circuit requires a $330 \, \Omega$ resistor. When the circuit is running, the voltage drop across this specific resistor is $5 \text{ V}$. You have a bin of $1/16\text{ W}$ resistors. Is it safe to use one of these resistors?

**Solution:**
1.  Calculate the power dissipated by the resistor using $P = \frac{V^2}{R}$:
    $$ P = \frac{(5 \text{ V})^2}{330 \, \Omega} = \frac{25}{330} \approx 0.0757 \text{ W} $$
2.  Convert the rating of the resistor to a decimal:
    $$ 1/16 \text{ W} = 0.0625 \text{ W} $$
3.  Compare:
    $$ 0.0757 \text{ W} > 0.0625 \text{ W} $$
    **No, it is not safe.** The resistor is dissipating $\approx 76 \text{ mW}$, but it is only rated for $62.5 \text{ mW}$. It will overheat. You must use at least a $1/8\text{ W}$ ($125 \text{ mW}$) or $1/4\text{ W}$ ($250 \text{ mW}$) resistor.

---

### Example 2 — Medium: High Voltage Power Transmission

**Problem:** A power plant needs to transmit $10 \text{ MW}$ ($10,000,000 \text{ W}$) of power to a city over a transmission line that has a total resistance of $5 \, \Omega$.
Case A: The power is transmitted at $10,000 \text{ V}$.
Case B: The power is stepped up via transformers to $500,000 \text{ V}$.
Calculate the power lost to heat in the wires for both cases.

**Solution:**
**Case A ($10 \text{ kV}$):**
1.  Find the current required to deliver the power:
    $$ I = \frac{P_{total}}{V} = \frac{10,000,000 \text{ W}}{10,000 \text{ V}} = 1000 \text{ A} $$
2.  Calculate the power lost as heat in the transmission lines ($P_{loss} = I^2 R$):
    $$ P_{loss} = (1000 \text{ A})^2 \times 5 \, \Omega = 1,000,000 \times 5 = \mathbf{5,000,000 \text{ W} \text{ (5 MW)}} $$
    *In Case A, 50% of the plant's generated power is wasted as heat in the cables!*

**Case B ($500 \text{ kV}$):**
1.  Find the current required:
    $$ I = \frac{P_{total}}{V} = \frac{10,000,000 \text{ W}}{500,000 \text{ V}} = 20 \text{ A} $$
2.  Calculate the power lost:
    $$ P_{loss} = (20 \text{ A})^2 \times 5 \, \Omega = 400 \times 5 = \mathbf{2,000 \text{ W} \text{ (2 kW)}} $$
    *In Case B, only 0.02% of the power is wasted. This is why power grids use massive high-voltage pylons.*

---

### Example 3 — Hard: Energy Consumption over Time

**Problem:** A variable load is connected to a steady $12 \text{ V}$ battery. The current drawn by the load over a 10-second period is given by the function $i(t) = 2t + 1$ (in Amperes). Calculate the total energy (in Joules) extracted from the battery during this 10-second interval.

**Solution:**
1.  Find the power function $p(t)$:
    $$ p(t) = V \cdot i(t) = 12 \cdot (2t + 1) = 24t + 12 \text{ Watts} $$
2.  Energy is the integral of power with respect to time:
    $$ W = \int_0^{10} p(t) \, dt = \int_0^{10} (24t + 12) \, dt $$
3.  Evaluate the integral:
    $$ W = \left[ 12t^2 + 12t \right]_0^{10} $$
    $$ W = (12(100) + 12(10)) - (0) = 1200 + 120 $$
    $$ \mathbf{W = 1320 \text{ Joules}} $$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Ohm's Law & Power",
        "icon": "BrainCircuit",
        "description": "Connecting Voltage, Current, and Resistance mathematically."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Ohm's Law",
        "icon": "Activity",
        "description": "V = I × R. The linear relationship for Ohmic materials."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Power Equation",
        "icon": "Sigma",
        "description": "P = V × I. The rate of doing electrical work (Watts)."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Joule Heating",
        "icon": "Layers",
        "description": "P = I²R or P = V²/R. Power converted to heat in resistors and wires."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Energy Integral",
        "icon": "Wrench",
        "description": "W = ∫P dt. Total work done over a period of time (Joules)."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Network Laws",
        "icon": "Target",
        "description": "How do these laws apply when we connect multiple components together? (KVL & KCL)"
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "1", "target": "3", "animated": true},
    {"source": "2", "target": "4", "animated": true},
    {"source": "3", "target": "4", "animated": true},
    {"source": "3", "target": "5", "animated": true},
    {"source": "4", "target": "6", "animated": true}
  ]
}
```
