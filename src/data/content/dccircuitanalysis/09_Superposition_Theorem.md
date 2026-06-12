# 9. The Superposition Theorem

## Divide and Conquer

In linear systems, the total response to multiple stimuli is simply the sum of the responses to each stimulus individually. Since basic circuits made of resistors, ideal voltage sources, and ideal current sources are perfectly linear, this principle holds true. We call it the **Superposition Theorem**.

> **The Superposition Theorem:** In a linear circuit with multiple independent sources, the voltage across (or current through) any component is the algebraic sum of the voltages (or currents) produced by each independent source acting alone.

### How to Apply Superposition

To analyze a circuit with $N$ independent sources, you solve the circuit $N$ times. Each time, you keep only ONE source "on" and turn all the others "off".

**How to turn off an ideal source:**
1.  **Voltage Sources:** An ideal voltage source set to $0\text{V}$ is a perfect wire with zero resistance. Therefore, you replace "turned off" voltage sources with a **Short Circuit** (a solid wire).
2.  **Current Sources:** An ideal current source set to $0\text{A}$ means no electrons can flow through that branch. Therefore, you replace "turned off" current sources with an **Open Circuit** (a broken wire).

*Note: You CANNOT turn off dependent sources (e.g., a voltage source whose value depends on a current elsewhere). Dependent sources must remain active in every sub-circuit.*

---

## Engineering Applications

*   **Mixed AC and DC Signals:** In audio amplifiers and RF communication, signals often ride on a DC "bias" voltage (e.g., an AC sine wave oscillating around a $+5\text{V}$ DC baseline). Engineers use Superposition to analyze the DC biasing circuitry separately from the AC signal circuitry, combining them only at the end.
*   **Sensor Noise Analysis:** If a circuit has a main power supply and a secondary noise source (like electromagnetic interference acting as an unwanted current source), engineers can isolate and calculate the exact impact of the noise source on the final output using Superposition.

---

## Worked Examples

### Example 1 — Medium: Two Voltage Sources

**Problem:** A circuit has two voltage sources: $V_1 = 12\text{V}$ on the left and $V_2 = 6\text{V}$ on the right. 
A $2 \, \Omega$ resistor is connected in series with $V_1$. A $4 \, \Omega$ resistor is connected in series with $V_2$. The two branches meet at a top node, which is connected to Ground via an $8 \, \Omega$ middle resistor.
Find the current flowing down through the $8 \, \Omega$ resistor using Superposition.

**Solution:**
**Step 1: Turn off $V_2$ (Short it out)**
*   The circuit is now $12\text{V}$ driving a $2 \, \Omega$ resistor, which is in series with a parallel combo of $4 \, \Omega$ and $8 \, \Omega$.
*   $R_p = (4 \times 8)/(4 + 8) = 32/12 = 2.67 \, \Omega$
*   $R_{total} = 2 + 2.67 = 4.67 \, \Omega$
*   Total current from $V_1$: $I_1 = 12 / 4.67 = 2.57 \text{ A}$
*   Use Current Divider to find how much goes down the $8 \, \Omega$ branch:
    $$ I'_{8\Omega} = 2.57 \times \frac{4}{4 + 8} = 2.57 \times \frac{1}{3} = \mathbf{0.857 \text{ A (down)}} $$

**Step 2: Turn off $V_1$ (Short it out)**
*   The circuit is now $6\text{V}$ driving a $4 \, \Omega$ resistor, which is in series with a parallel combo of $2 \, \Omega$ and $8 \, \Omega$.
*   $R_p = (2 \times 8)/(2 + 8) = 16/10 = 1.6 \, \Omega$
*   $R_{total} = 4 + 1.6 = 5.6 \, \Omega$
*   Total current from $V_2$: $I_2 = 6 / 5.6 = 1.07 \text{ A}$
*   Use Current Divider to find how much goes down the $8 \, \Omega$ branch:
    $$ I''_{8\Omega} = 1.07 \times \frac{2}{2 + 8} = 1.07 \times \frac{2}{10} = \mathbf{0.214 \text{ A (down)}} $$

**Step 3: Superimpose (Add them up)**
Both partial currents flow *down* the resistor, so we add them.
$$ I_{\text{total}} = I'_{8\Omega} + I''_{8\Omega} = 0.857 + 0.214 = \mathbf{1.071 \text{ A}} $$

---

### Example 2 — Medium: One Voltage and One Current Source

**Problem:** A $10\text{V}$ voltage source is in series with a $5 \, \Omega$ resistor. This combination is connected in parallel with a $2\text{A}$ current source and a $10 \, \Omega$ load resistor. Find the voltage across the $10 \, \Omega$ load resistor.

**Solution:**
**Step 1: Turn off the Current Source (Open it)**
*   The current source branch becomes a broken wire. We just have a series circuit: the $10\text{V}$ source, the $5 \, \Omega$ resistor, and the $10 \, \Omega$ resistor.
*   Use Voltage Divider to find the voltage across the $10 \, \Omega$ load:
    $$ V'_{10\Omega} = 10\text{V} \times \frac{10}{5 + 10} = 10 \times \frac{10}{15} = \mathbf{6.67\text{V}} $$

**Step 2: Turn off the Voltage Source (Short it)**
*   The voltage source becomes a solid wire. The $5 \, \Omega$ and $10 \, \Omega$ resistors are now perfectly in *parallel* with each other, being fed by the $2\text{A}$ current source.
*   First, find the equivalent parallel resistance:
    $$ R_p = \frac{5 \times 10}{5 + 10} = \frac{50}{15} = 3.33 \, \Omega $$
*   Use Ohm's Law to find the voltage across this parallel block:
    $$ V''_{10\Omega} = I_{source} \times R_p = 2\text{A} \times 3.33 \, \Omega = \mathbf{6.67\text{V}} $$

**Step 3: Superimpose**
Both sources push current in a way that makes the top of the $10 \, \Omega$ resistor positive.
$$ V_{\text{total}} = 6.67\text{V} + 6.67\text{V} = \mathbf{13.34\text{V}} $$

---

### Example 3 — Hard: Warning About Power!

**Problem:** In a certain circuit, Voltage Source A causes $2\text{A}$ to flow through a $5 \, \Omega$ resistor. Current Source B causes $3\text{A}$ to flow through the same resistor in the same direction. Use superposition to find the total power dissipated by the resistor.

**Solution:**
**WRONG METHOD:**
If you try to superimpose *power*, you will fail miserably. Power is $I^2 R$. Squaring makes it non-linear!
$P_A = 2^2 \times 5 = 20\text{W}$
$P_B = 3^2 \times 5 = 45\text{W}$
Total Power $\neq 65\text{W}$.

**RIGHT METHOD:**
Superposition *only* works for linear values: Voltage and Current. You must find the total current first, and *then* calculate power.
1.  Superimpose the current:
    $$ I_{\text{total}} = I_A + I_B = 2\text{A} + 3\text{A} = \mathbf{5\text{A}} $$
2.  Calculate the true power:
    $$ P_{\text{true}} = (I_{\text{total}})^2 \times R = (5)^2 \times 5 = 25 \times 5 = \mathbf{125\text{W}} $$

*Superposition does not work for Power!*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "The Superposition Theorem",
        "icon": "BrainCircuit",
        "description": "In linear circuits, responses sum algebraically."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Turn off V-Sources",
        "icon": "Activity",
        "description": "Replace Voltage Sources (0V) with SHORT CIRCUITS (wires)."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Turn off I-Sources",
        "icon": "Sigma",
        "description": "Replace Current Sources (0A) with OPEN CIRCUITS (broken wires)."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Solve Sub-circuits",
        "icon": "Layers",
        "description": "Solve the circuit N times for N independent sources."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Add Voltages or Currents",
        "icon": "Wrench",
        "description": "Never superimpose power directly, as power is non-linear (I²R)!"
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Thévenin's Theorem",
        "icon": "Target",
        "description": "If Superposition breaks a circuit into pieces, Thévenin collapses the entire universe into just two components."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "1", "target": "3", "animated": true},
    {"source": "2", "target": "4", "animated": true},
    {"source": "3", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true},
    {"source": "5", "target": "6", "animated": true}
  ]
}
```
