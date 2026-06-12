# 1. Voltage, Current, and Resistance

## The Fundamentals of Electricity

Electrical Engineering is built upon the movement of subatomic particles—specifically, electrons. To harness this movement for computation, power, and communication, we must quantify three fundamental properties: **Charge**, **Current**, and **Voltage**.

### 1. Charge ($Q$)
Charge is a fundamental property of matter. Electrons possess a negative charge, and protons possess a positive charge. The unit of charge is the **Coulomb (C)**.
*   One electron has a charge of $e = -1.602 \times 10^{-19} \text{ C}$.
*   Therefore, 1 Coulomb of charge represents an immense number of electrons: $\approx 6.24 \times 10^{18}$ electrons.

### 2. Current ($I$)
Current is the **rate of flow of electric charge** past a specific point in a circuit. If you imagine a wire as a pipe, current is the water flowing through it.
$$ I = \frac{dQ}{dt} $$
*   **Units:** Amperes (A). $1 \text{ A} = 1 \text{ C/s}$.
*   **Convention:** By historical convention (thanks to Benjamin Franklin), conventional current is defined as the flow of *positive* charge, which means it flows in the *opposite* direction of actual electron flow. 

### 3. Voltage ($V$)
Also known as **Electric Potential Difference**, voltage is the "push" or "pressure" that causes charges to move. Mathematically, it is the work ($W$, in Joules) required to move a unit charge ($Q$, in Coulombs) between two points.
$$ V = \frac{dW}{dQ} $$
*   **Units:** Volts (V). $1 \text{ V} = 1 \text{ J/C}$.
*   **Relative Nature:** Voltage is always measured *between two points*. There is no such thing as absolute voltage at a single point; it must be referenced to another point (often called Ground, or $0\text{V}$).

### 4. Resistance ($R$)
Resistance is the opposition a material offers to the flow of electric current. It acts like friction in a mechanical system, converting electrical energy into heat.
The resistance of a physical wire or resistor depends on its geometry and the material's inherent **resistivity ($\rho$)**:
$$ R = \frac{\rho L}{A} $$
Where $L$ is the length, $A$ is the cross-sectional area, and $\rho$ is the resistivity (in $\Omega\cdot\text{m}$).
*   **Units:** Ohms ($\Omega$).

---

## Engineering Applications

*   **Battery Capacity (mAh):** A smartphone battery rated at $3000 \text{ mAh}$ (milliampere-hours) is actually a measure of total *charge*. It can deliver $3000 \text{ mA}$ ($3 \text{ A}$) for 1 hour, or $1 \text{ A}$ for 3 hours. $3000 \text{ mAh} = 3 \text{ A} \times 3600 \text{ s} = 10,800 \text{ Coulombs}$.
*   **Wire Gauge (AWG):** In power systems, engineers must select wire thickness (Area $A$). A thicker wire (lower AWG number) has lower resistance, allowing it to carry more current without overheating and causing a fire.
*   **Strain Gauges:** When a wire is physically stretched, its length $L$ increases and its cross-sectional area $A$ decreases. This increases its resistance. Engineers use this property to build strain gauges to measure stress on bridges and airplane wings.

---

## Worked Examples

### Example 1 — Easy: Calculating Total Charge

**Problem:** A constant current of $50 \text{ mA}$ flows through an LED for 4 minutes. How much total charge has passed through the LED, and roughly how many electrons is this?

**Solution:**
1.  Convert to SI units:
    $$ I = 50 \text{ mA} = 0.05 \text{ A} $$
    $$ t = 4 \text{ minutes} = 240 \text{ s} $$
2.  Use the definition of current ($I = Q/t \implies Q = I \times t$ for constant current):
    $$ Q = 0.05 \text{ A} \times 240 \text{ s} = \mathbf{12 \text{ C}} $$
3.  Calculate the number of electrons:
    $$ N_e = \frac{12 \text{ C}}{1.602 \times 10^{-19} \text{ C/electron}} \approx \mathbf{7.49 \times 10^{19} \text{ electrons}} $$

---

### Example 2 — Medium: Resistance of a Copper Wire

**Problem:** You are designing a power cable using copper wire. The wire must be $50 \text{ m}$ long. To prevent excessive voltage drop, the total resistance of the wire must not exceed $0.1 \, \Omega$. The resistivity of copper is $\rho = 1.68 \times 10^{-8} \, \Omega\cdot\text{m}$. Find the minimum required cross-sectional area and the corresponding diameter of the wire.

**Solution:**
1.  Rearrange the resistance formula for Area ($A$):
    $$ R = \frac{\rho L}{A} \implies A = \frac{\rho L}{R} $$
2.  Substitute the values:
    $$ A = \frac{(1.68 \times 10^{-8} \, \Omega\cdot\text{m})(50 \text{ m})}{0.1 \, \Omega} = \mathbf{8.4 \times 10^{-6} \text{ m}^2} $$
    This is $8.4 \text{ mm}^2$.
3.  Find the diameter. Assuming a circular cross-section ($A = \pi \frac{d^2}{4}$):
    $$ d = \sqrt{\frac{4A}{\pi}} = \sqrt{\frac{4(8.4 \times 10^{-6})}{\pi}} = \sqrt{1.07 \times 10^{-5}} \approx 0.00327 \text{ m} $$
    The minimum wire diameter is **$3.27 \text{ mm}$**.

---

### Example 3 — Hard: Current from a Time-Varying Charge

**Problem:** The charge entering the terminal of a capacitor is described by the equation $q(t) = 5t e^{-2t} \text{ mC}$.
Find the equation for the current $i(t)$ flowing into the capacitor, and determine the exact time $t$ when the current becomes zero.

**Solution:**
1.  Current is the time derivative of charge:
    $$ i(t) = \frac{dq}{dt} $$
2.  Apply the Product Rule to differentiate $q(t) = 5t e^{-2t}$:
    $$ u = 5t \implies du/dt = 5 $$
    $$ v = e^{-2t} \implies dv/dt = -2e^{-2t} $$
    $$ i(t) = u \frac{dv}{dt} + v \frac{du}{dt} = (5t)(-2e^{-2t}) + (e^{-2t})(5) $$
    $$ \mathbf{i(t) = 5e^{-2t}(1 - 2t) \text{ mA}} $$
3.  Find when the current is zero by setting $i(t) = 0$:
    $$ 5e^{-2t}(1 - 2t) = 0 $$
    Since $5e^{-2t}$ is never zero for finite $t$, we must have:
    $$ 1 - 2t = 0 \implies \mathbf{t = 0.5 \text{ s}} $$
    *(At $t=0.5\text{s}$, the capacitor stops charging and the current reverses direction).*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Fundamental Electrical Quantities",
        "icon": "BrainCircuit",
        "description": "The bedrock of Electrical and Computer Engineering."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Charge (Q)",
        "icon": "Activity",
        "description": "Measured in Coulombs (C). The physical property of electrons."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Current (I = dQ/dt)",
        "icon": "Sigma",
        "description": "Measured in Amperes (A). The flow rate of charge over time."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Voltage (V = dW/dQ)",
        "icon": "Layers",
        "description": "Measured in Volts (V). The energy required to move charge (the 'push')."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Resistance (R = ρL/A)",
        "icon": "Wrench",
        "description": "Measured in Ohms (Ω). The opposition to current flow depending on geometry and material."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Ohm's Law",
        "icon": "Target",
        "description": "How V, I, and R interact in a mathematical relationship."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "2", "target": "3", "animated": true},
    {"source": "1", "target": "4", "animated": true},
    {"source": "1", "target": "5", "animated": true},
    {"source": "3", "target": "6", "animated": true},
    {"source": "4", "target": "6", "animated": true},
    {"source": "5", "target": "6", "animated": true}
  ]
}
```
