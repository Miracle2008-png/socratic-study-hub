# 4. Kirchhoff's Current Law (KCL)

## Conservation of Charge at a Node

If Kirchhoff's Voltage Law is about loops and energy, **Kirchhoff's Current Law (KCL)** is about junctions and mass. Specifically, KCL is a direct application of the **conservation of charge**.

> **Kirchhoff's Current Law:** The algebraic sum of all currents entering and exiting a node (junction) must equal zero.
> $$ \sum_{k=1}^{n} I_k = 0 $$

An alternative, often more intuitive way to state KCL is:
**Total Current Entering a Node = Total Current Exiting a Node.**

Imagine a T-junction in a water pipe. If $5$ liters per minute flow into the junction from the main pipe, exactly $5$ liters per minute must flow out through the two branching pipes combined. Water cannot compress or disappear inside the junction. Similarly, a circuit node cannot store or destroy electrons. Whatever charge flows in must instantly flow out.

### What is a Node?
A **node** is any point in a circuit where two or more circuit elements connect. A continuous, uninterrupted piece of wire is considered a single node, regardless of how it is drawn on a schematic. 

### The KCL Sign Convention
When writing KCL equations in the form $\sum I = 0$, you must choose a sign convention:
*   Currents **entering** the node are $(+)$.
*   Currents **leaving** the node are $(-)$.
*(You can reverse this if you prefer, as long as you are consistent. The math will work out exactly the same).*

---

## Engineering Applications

*   **Integrated Circuit (IC) Limits:** Microcontrollers like an Arduino have strict current limits on their ground pins (e.g., $200\text{mA}$). Engineers use KCL to sum up the currents from all the individual LEDs and sensors returning to that ground pin to ensure they don't melt the silicon inside the chip.
*   **Parallel Fault Analysis:** In residential wiring (which is entirely parallel), KCL dictates that the total current drawn from the circuit breaker equals the sum of the currents drawn by the toaster, microwave, and fridge. If the KCL sum exceeds $15\text{A}$, the breaker trips to prevent a fire.
*   **Nodal Analysis:** KCL forms the mathematical foundation for Nodal Analysis, the primary algorithm used by software simulators (like SPICE) to instantly solve circuits with thousands of components.

---

## Worked Examples

### Example 1 — Easy: The T-Junction

**Problem:** At a 3-way junction (node A), a current of $12\text{A}$ flows into the node from the left. A current of $4\text{A}$ flows out of the node downward. What is the magnitude and direction of the current on the right branch?

**Solution:**
1.  Let's use the "Current In = Current Out" concept.
    $$ I_{\text{in}} = I_{\text{out}} $$
2.  Let $I_x$ be the unknown current. Assume it is flowing *out*.
    $$ 12\text{A} = 4\text{A} + I_x $$
3.  Solve for $I_x$:
    $$ I_x = 12 - 4 = \mathbf{8\text{A}} $$
4.  Since the result is positive, our assumption was correct. The current is **8A flowing out** of the node to the right.

---

### Example 2 — Medium: A Four-Way Node

**Problem:** Four wires meet at a single node. 
*   Wire 1: $I_1 = 5\text{A}$ (Entering)
*   Wire 2: $I_2 = -3\text{A}$ (Entering)
*   Wire 3: $I_3 = 7\text{A}$ (Leaving)
*   Wire 4: $I_4$ (Direction unknown)
Find the value of $I_4$ and state whether it is entering or leaving the node.

**Solution:**
1.  Use the algebraic sum formulation ($\sum I = 0$) with Entering=$(+)$ and Leaving=$(-)$. Let's assume $I_4$ is entering $(+I_4)$.
2.  Write the equation:
    $$ (+I_1) + (+I_2) + (-I_3) + (+I_4) = 0 $$
    *(Note: $I_2$ is entering, so we add it as $(+I_2)$, but its actual numerical value is negative!)*
3.  Substitute values:
    $$ (+5) + (-3) + (-7) + I_4 = 0 $$
    $$ 5 - 3 - 7 + I_4 = 0 $$
    $$ -5 + I_4 = 0 $$
4.  Solve for $I_4$:
    $$ \mathbf{I_4 = 5\text{A}} $$
5.  Since $I_4$ is positive, our assumption that it was entering is correct. $I_4$ is **5A, entering the node.**

---

### Example 3 — Hard: KCL with Ohm's Law (Intro to Nodal Analysis)

**Problem:** A node $A$ connects three resistors to a common ground ($0\text{V}$). 
*   The left wire connects Node A to a $10\text{V}$ source through a $2 \, \Omega$ resistor. 
*   The right wire connects Node A to a $5\text{V}$ source through a $5 \, \Omega$ resistor.
*   The bottom wire connects Node A to ground ($0\text{V}$) through a $10 \, \Omega$ resistor.
Let $V_A$ be the unknown voltage at Node A. Write the KCL equation for Node A in terms of $V_A$, and solve for $V_A$.

**Solution:**
1.  Assume all currents are **leaving** Node A. By KCL:
    $$ I_{\text{left}} + I_{\text{right}} + I_{\text{bottom}} = 0 $$
2.  Use Ohm's Law ($I = \Delta V / R$) to express each current. The voltage difference is $(V_{\text{start}} - V_{\text{end}})$. Since we assume current leaves Node A, the starting voltage is $V_A$.
    $$ I_{\text{left}} = \frac{V_A - 10}{2} $$
    $$ I_{\text{right}} = \frac{V_A - 5}{5} $$
    $$ I_{\text{bottom}} = \frac{V_A - 0}{10} = \frac{V_A}{10} $$
3.  Substitute these into the KCL equation:
    $$ \frac{V_A - 10}{2} + \frac{V_A - 5}{5} + \frac{V_A}{10} = 0 $$
4.  Multiply the entire equation by the common denominator (10) to clear fractions:
    $$ 5(V_A - 10) + 2(V_A - 5) + 1(V_A) = 0 $$
    $$ 5V_A - 50 + 2V_A - 10 + V_A = 0 $$
5.  Combine terms and solve:
    $$ 8V_A - 60 = 0 $$
    $$ 8V_A = 60 \implies \mathbf{V_A = 7.5\text{V}} $$
    *(This technique is called Nodal Analysis, and it is the most powerful tool in circuit design).*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Kirchhoff's Current Law (KCL)",
        "icon": "BrainCircuit",
        "description": "∑ I = 0 at any node."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Conservation of Charge",
        "icon": "Activity",
        "description": "Electrons cannot disappear or accumulate at a junction."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "The Node",
        "icon": "Sigma",
        "description": "Any continuous piece of wire connecting multiple components is a single node."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Summing Technique",
        "icon": "Layers",
        "description": "Set Entering = (+) and Leaving = (-), or set Total In = Total Out."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: Topologies",
        "icon": "Target",
        "description": "Applying Ohm's, KVL, and KCL to standard Series and Parallel circuits."
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
