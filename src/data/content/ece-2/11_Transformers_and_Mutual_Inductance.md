# 11. Transformers and Mutual Inductance

## Magical Magnetic Coupling

An inductor is a coil of wire that stores energy in a magnetic field. But what happens if you place *another* coil of wire right next to it? 

When an AC current flows through the first coil (the **Primary**), it creates a constantly expanding and collapsing magnetic field. This shifting magnetic field slices through the second coil (the **Secondary**), inducing an AC voltage in it. The two circuits are completely isolated physically—no electrons cross the gap—but energy transfers perfectly via magnetic flux. 

This is a **Transformer**.

---

## The Ideal Transformer

An ideal transformer has two coils wrapped around a shared magnetic core (like iron) to trap $100\%$ of the magnetic flux. 
The behavior of the transformer is governed entirely by the **Turns Ratio ($a$)**, which is the ratio of the number of wire wraps on the primary ($N_1$) to the number on the secondary ($N_2$).
$$ a = \frac{N_1}{N_2} $$

### 1. Voltage Transformation
Voltage scales directly with the turns ratio. 
$$ \frac{\mathbf{V}_1}{\mathbf{V}_2} = \frac{N_1}{N_2} = a $$
*   If $N_2 > N_1$, it is a **Step-Up Transformer** (Voltage increases).
*   If $N_2 < N_1$, it is a **Step-Down Transformer** (Voltage decreases).

### 2. Current Transformation
By Conservation of Energy, if voltage goes up, current MUST go down. Power into the primary ($V_1 I_1$) must equal power out of the secondary ($V_2 I_2$). 
Current scales inversely with the turns ratio.
$$ \frac{\mathbf{I}_1}{\mathbf{I}_2} = \frac{N_2}{N_1} = \frac{1}{a} $$

### 3. Impedance Reflection
This is the most powerful feature of a transformer. If you connect a load impedance $\mathbf{Z}_L$ to the secondary coil, what impedance does the power source connected to the primary coil "feel"?
It "feels" an impedance that has been scaled by the square of the turns ratio!
$$ \mathbf{Z}_{in} = a^2 \mathbf{Z}_L = \left(\frac{N_1}{N_2}\right)^2 \mathbf{Z}_L $$

---

## Engineering Applications

*   **The Power Grid:** Power plants generate electricity at $10,000\text{V}$. A step-up transformer ($N_2 \gg N_1$) pushes this to $500,000\text{V}$ for the cross-country transmission lines. Because $V$ went up by $50\text{x}$, $I$ went down by $50\text{x}$. Because power lost to heat is $I^2R$, lowering the current by $50\text{x}$ reduces heat loss by $2500\text{x}$! Outside your house, a step-down transformer brings it back to a safe $120\text{V}$.
*   **Impedance Matching (Audio Amps):** A vacuum tube amplifier has a massive internal Thévenin impedance (e.g., $8,000 \, \Omega$). A speaker is only $8 \, \Omega$. If connected directly, almost no power transfers (huge mismatch). Engineers use an "Audio Output Transformer" with $a = \sqrt{8000 / 8} = \sqrt{1000} \approx 31.6$. The transformer reflects the $8 \, \Omega$ speaker back to the tube as exactly $8000 \, \Omega$, perfectly matching the impedance and transferring maximum power!

---

## Worked Examples

### Example 1 — Easy: Stepping Down Voltage

**Problem:** A transformer in a laptop charger has $600$ turns on the primary coil and $100$ turns on the secondary coil. It is plugged into a $120\text{V}_{\text{rms}}$ wall outlet. Find the voltage on the secondary coil.

**Solution:**
1.  **Calculate the turns ratio ($a$):**
    $$ a = \frac{N_1}{N_2} = \frac{600}{100} = 6 $$
2.  **Use the voltage formula:**
    $$ \frac{V_1}{V_2} = a \implies V_2 = \frac{V_1}{a} $$
    $$ V_2 = \frac{120\text{V}}{6} = \mathbf{20\text{V}_{\text{rms}}} $$
*(This $20\text{V}$ AC will then be passed through diodes to become $20\text{V}$ DC for the laptop).*

---

### Example 2 — Medium: Current and Power

**Problem:** A step-up transformer has a turns ratio of $N_1/N_2 = 1/10$. The secondary coil is connected to a $500 \, \Omega$ resistive load. The primary coil is driven by a $50\text{V}_{\text{rms}}$ source. 
Find the secondary voltage, secondary current, and primary current. Prove that Power In = Power Out.

**Solution:**
1.  **Secondary Voltage ($V_2$):**
    $V_2 = V_1 \times (N_2 / N_1) = 50 \times 10 = \mathbf{500\text{V}}$
2.  **Secondary Current ($I_2$):**
    By Ohm's Law on the secondary side:
    $I_2 = V_2 / R_L = 500 / 500 = \mathbf{1\text{A}}$
3.  **Primary Current ($I_1$):**
    Use the transformer current ratio ($I_1 / I_2 = N_2 / N_1$):
    $I_1 = I_2 \times (10 / 1) = 1 \times 10 = \mathbf{10\text{A}}$
4.  **Power Check:**
    $P_{in} = V_1 I_1 = 50\text{V} \times 10\text{A} = \mathbf{500\text{W}}$
    $P_{out} = V_2 I_2 = 500\text{V} \times 1\text{A} = \mathbf{500\text{W}}$
*(The transformer magically increased the voltage 10x, but demanded 10x more current from the source to obey conservation of energy).*

---

### Example 3 — Hard: Impedance Reflection

**Problem:** You need to connect a $4 \, \Omega$ speaker to an amplifier that has an internal Thévenin impedance of $100 \, \Omega$. To achieve maximum power transfer, you decide to use an ideal transformer. What must the turns ratio ($N_1/N_2$) of the transformer be?

**Solution:**
1.  To achieve maximum power transfer, the amplifier must "see" a load impedance that exactly matches its internal impedance.
    $$ \mathbf{Z}_{in\_desired} = 100 \, \Omega $$
2.  The actual load on the secondary is the speaker:
    $$ \mathbf{Z}_L = 4 \, \Omega $$
3.  Use the Impedance Reflection formula:
    $$ \mathbf{Z}_{in} = \left(\frac{N_1}{N_2}\right)^2 \mathbf{Z}_L $$
    $$ 100 = \left(\frac{N_1}{N_2}\right)^2 \times 4 $$
4.  Solve for the turns ratio:
    $$ 25 = \left(\frac{N_1}{N_2}\right)^2 $$
    $$ \frac{N_1}{N_2} = \sqrt{25} = \mathbf{5} $$
*(You need a step-down transformer with 5 times as many windings on the primary as the secondary. It will perfectly disguise the $4 \, \Omega$ speaker as a $100 \, \Omega$ speaker!)*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Transformers",
        "icon": "BrainCircuit",
        "description": "Transferring AC energy via magnetic fields without physical wires."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Voltage Transformation",
        "icon": "Activity",
        "description": "V1/V2 = N1/N2. Scales directly with the number of wire turns."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Current Transformation",
        "icon": "Sigma",
        "description": "I1/I2 = N2/N1. Scales inversely to conserve power."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Impedance Reflection",
        "icon": "Layers",
        "description": "Z_in = (N1/N2)² × Z_L. Reflects impedance across the gap scaled by the SQUARE of the turns."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: Concept Drills",
        "icon": "Target",
        "description": "Test your mastery of AC Circuits, Phasors, and Power."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "1", "target": "3", "animated": true},
    {"source": "1", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true}
  ]
}
```
