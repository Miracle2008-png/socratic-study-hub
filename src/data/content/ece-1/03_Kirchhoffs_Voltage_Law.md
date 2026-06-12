# 3. Kirchhoff's Voltage Law (KVL)

## Conservation of Energy in a Circuit

Ohm's Law tells us how an individual component behaves. But what happens when we wire dozens of components together? Gustav Kirchhoff formulated two rules in 1845 that allow us to analyze any electrical network. 

The first is **Kirchhoff's Voltage Law (KVL)**. KVL is a direct application of the law of **conservation of energy**.

> **Kirchhoff's Voltage Law:** The algebraic sum of all voltages around any closed loop in a circuit must equal zero.
> $$ \sum_{k=1}^{n} V_k = 0 $$

Imagine walking on a hiking trail that loops back to where you started. No matter how many hills you climb (gaining elevation) or valleys you descend (losing elevation), by the time you return to your exact starting point, your net change in elevation must be exactly zero. 

Similarly, if you trace a closed path around a circuit, the total electrical potential you gain (from batteries/sources) must be exactly canceled out by the total electrical potential you drop (across resistors/loads).

### The Step-by-Step KVL Method

1.  **Define a Loop:** Choose any closed path through the circuit.
2.  **Pick a Direction:** Decide whether to trace the loop clockwise or counterclockwise (it doesn't matter, as long as you are consistent).
3.  **Assign Polarities:** 
    *   Batteries have fixed polarities (long line is +, short line is -).
    *   For resistors, draw a current arrow $I$. The side the current *enters* gets a $(+)$ and the side it *leaves* gets a $(-)$. (This represents a voltage drop in the direction of current).
4.  **Write the Equation:** Walk around the loop. 
    *   If you hit a $(+)$ sign first, write the voltage as positive (e.g., $+V_R$).
    *   If you hit a $(-)$ sign first, write the voltage as negative (e.g., $-V_S$).
5.  **Set to Zero:** Equate the sum to zero and solve.

---

## Engineering Applications

*   **Multi-Source Circuits:** KVL is essential for determining if two batteries placed in a circuit will work together to drive a load, or if they will fight each other (e.g., jump-starting a car incorrectly).
*   **Ground Referencing:** In complex Printed Circuit Boards (PCBs), engineers use KVL to calculate the exact voltage at a specific node relative to the common "Ground" plane. This ensures sensitive microchips receive exactly $3.3\text{V}$, rather than a damaged, noisy $3.0\text{V}$ caused by unforeseen voltage drops along the copper traces.

---

## Worked Examples

### Example 1 — Easy: A Single Loop Circuit

**Problem:** A circuit consists of a $12\text{V}$ battery connected in series with three resistors: $R_1$, $R_2$, and $R_3$. The voltage drop across $R_1$ is measured as $3\text{V}$, and the drop across $R_2$ is $5\text{V}$. What is the voltage drop across $R_3$?

**Solution:**
1.  Establish the loop and polarities. The battery supplies voltage (let's enter its negative terminal, so $-12\text{V}$). The resistors drop voltage as current passes through them ($+V_1$, $+V_2$, $+V_3$).
2.  Write the KVL equation:
    $$ -12\text{V} + V_1 + V_2 + V_3 = 0 $$
3.  Substitute the known values:
    $$ -12 + 3 + 5 + V_3 = 0 $$
    $$ -4 + V_3 = 0 $$
4.  Solve for $V_3$:
    $$ \mathbf{V_3 = 4\text{V}} $$

---

### Example 2 — Medium: Finding Current with Ohm's Law and KVL

**Problem:** A $24\text{V}$ source is connected in series with a $100 \, \Omega$ resistor and a $300 \, \Omega$ resistor. Find the current $I$ flowing through the circuit, and the voltage drop across the $300 \, \Omega$ resistor.

**Solution:**
1.  Assume a clockwise current $I$. 
2.  Assign polarities: Current enters the resistors, creating $(+)$ to $(-)$ drops.
3.  Write the KVL equation:
    $$ -24 + V_{100\Omega} + V_{300\Omega} = 0 $$
4.  Apply Ohm's Law ($V=IR$) to express the voltages in terms of the unknown current $I$:
    $$ V_{100\Omega} = I \times 100 $$
    $$ V_{300\Omega} = I \times 300 $$
5.  Substitute into the KVL equation:
    $$ -24 + 100I + 300I = 0 $$
    $$ 400I = 24 $$
    $$ I = \frac{24}{400} = \mathbf{0.06 \text{ A} \text{ (or 60 mA)}} $$
6.  Find the voltage drop across the $300 \, \Omega$ resistor:
    $$ V_{300\Omega} = I \times 300 = 0.06 \times 300 = \mathbf{18\text{V}} $$

---

### Example 3 — Hard: Two Opposing Batteries

**Problem:** A loop consists of a $10\text{V}$ battery, a $2 \, \Omega$ resistor, a $5\text{V}$ battery, and a $3 \, \Omega$ resistor, all in series. The positive terminal of the $10\text{V}$ battery connects to the $2 \, \Omega$ resistor, which connects to the *positive* terminal of the $5\text{V}$ battery (they are opposing). The circuit is closed by the $3 \, \Omega$ resistor. Find the current $I$ and the power absorbed by the $5\text{V}$ battery.

**Solution:**
1.  Assume a clockwise current $I$.
2.  Walk the loop clockwise starting from the bottom of the $10\text{V}$ battery:
    *   Hit the $(-)$ of the $10\text{V}$ source: $-10$
    *   Hit the $(+)$ of the $2 \, \Omega$ drop: $+2I$
    *   Hit the $(+)$ of the $5\text{V}$ source (since it is placed in opposition): $+5$
    *   Hit the $(+)$ of the $3 \, \Omega$ drop: $+3I$
3.  Write the KVL equation:
    $$ -10 + 2I + 5 + 3I = 0 $$
4.  Solve for $I$:
    $$ 5I - 5 = 0 $$
    $$ 5I = 5 \implies \mathbf{I = 1\text{A}} $$
    *(Since $I$ is positive, our assumed clockwise direction was correct. The $10\text{V}$ battery overpowers the $5\text{V}$ battery).*
5.  Calculate the power of the $5\text{V}$ battery:
    Current ($1\text{A}$) is being forced into the positive terminal of the $5\text{V}$ battery. According to the Passive Sign Convention, it is *absorbing* power (it is being charged).
    $$ P = V \cdot I = 5\text{V} \times 1\text{A} = \mathbf{5\text{W} \text{ absorbed}} $$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Kirchhoff's Voltage Law (KVL)",
        "icon": "BrainCircuit",
        "description": "∑ V = 0 around any closed loop."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Conservation of Energy",
        "icon": "Activity",
        "description": "Total voltage supplied must equal total voltage dropped."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Sign Convention",
        "icon": "Sigma",
        "description": "Walk the loop. If you hit the + terminal first, the term is positive. If -, it's negative."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Combine with Ohm's Law",
        "icon": "Layers",
        "description": "Replace unknown voltage drops with (I × R) to solve for current."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: Nodes and Currents",
        "icon": "Target",
        "description": "KVL handles loops and voltages. Kirchhoff's Current Law (KCL) handles nodes and currents."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "2", "target": "3", "animated": true},
    {"source": "3", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true}
  ]
}
```
