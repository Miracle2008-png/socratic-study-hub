# 7. Nodal Analysis

## The Ultimate Circuit Solver

Up to this point, you have solved circuits by collapsing series and parallel resistors. But what happens when a circuit is a complex web (like a bridge circuit) that has *no* purely series or parallel resistors? 

You need a universal algorithm. **Nodal Analysis** is exactly that. It is a systematic way to apply Kirchhoff's Current Law (KCL) to find the voltage at every single node in a circuit. Once you know every node voltage, you can trivially calculate any current or power.

Nodal analysis is so powerful and algorithmic that it forms the mathematical backbone of **SPICE** (Simulation Program with Integrated Circuit Emphasis)—the software used globally to simulate microchips containing billions of transistors.

---

## The Nodal Analysis Algorithm

1.  **Identify all nodes:** Mark every distinct continuous wire junction in the circuit. Let's say there are $N$ nodes.
2.  **Select a Reference Node (Ground):** Choose one node (usually the bottom wire with the most connections) and define its voltage as $0\text{V}$. You now have $N-1$ unknown node voltages ($V_1, V_2, \dots$).
3.  **Write KCL for every unknown node:** For each unknown node, assume all currents are *leaving* the node. 
4.  **Express currents using Ohm's Law:** A current leaving Node A towards Node B through a resistor $R$ is expressed as:
    $$ I = \frac{V_A - V_B}{R} $$
5.  **Solve the System of Equations:** You will have a system of linear equations (usually solved via matrix math in computers or substitution by hand) that yields the voltage at every node.

---

## Dealing with Voltage Sources (Supernodes)

If a voltage source is connected directly between an unknown node and Ground, you're in luck! You immediately know the voltage of that node, reducing your unknowns.

But what if a voltage source is floating *between two unknown nodes* (e.g., between $V_1$ and $V_2$)? You cannot easily write a KCL expression for the current passing through an ideal battery. 
The solution is a **Supernode**:
1. Draw a bubble encircling the voltage source and its two nodes.
2. Write one giant KCL equation for all currents leaving the entire bubble.
3. Write an internal constraint equation relating the two nodes (e.g., $V_1 - V_2 = 10\text{V}$).

---

## Engineering Applications

*   **Software Simulators:** When an engineer designs a PCB in Altium or Cadence, they don't do math by hand. The software instantly constructs a massive Nodal Admittance Matrix (combining conductance $1/R$) and inverts it to solve for every node voltage simultaneously.
*   **Finding "Floating" Voltages:** In complex networks, Nodal Analysis is the best way to find the voltage of a node suspended deep inside a resistor mesh relative to ground, which is vital for preventing transistor breakdown.

---

## Worked Examples

### Example 1 — Medium: Basic Nodal Analysis

**Problem:** A circuit has three nodes. The bottom node is chosen as Ground ($0\text{V}$). Node 1 is forced to $12\text{V}$ by a voltage source. Node 2 is unknown.
Between Node 1 ($12\text{V}$) and Node 2 ($V_2$) is a $4 \, \Omega$ resistor.
Between Node 2 ($V_2$) and Ground ($0\text{V}$) is a $2 \, \Omega$ resistor.
Entering Node 2 from the outside is an independent current source of $3\text{A}$.
Find the voltage $V_2$.

**Solution:**
1.  **Write KCL at Node 2.** Let's sum currents leaving the node:
    $$ I_{\text{left}} + I_{\text{down}} - I_{\text{source}} = 0 $$
    *(Note: the 3A source is entering, so leaving is -3A).*
2.  **Express using Ohm's Law:**
    $$ \frac{V_2 - 12}{4} + \frac{V_2 - 0}{2} - 3 = 0 $$
3.  **Solve the equation.** Multiply by 4 to clear fractions:
    $$ 1(V_2 - 12) + 2(V_2) - 12 = 0 $$
    $$ V_2 - 12 + 2V_2 - 12 = 0 $$
    $$ 3V_2 - 24 = 0 $$
    $$ 3V_2 = 24 \implies \mathbf{V_2 = 8\text{V}} $$

---

### Example 2 — Hard: Two Unknown Nodes

**Problem:** Node 0 is Ground.
Node 1 is connected to a $20\text{A}$ current source (entering the node).
Node 2 is connected to a $10\text{A}$ current source (entering the node).
A $5 \, \Omega$ resistor connects Node 1 to Ground.
A $2 \, \Omega$ resistor connects Node 2 to Ground.
A $10 \, \Omega$ resistor connects Node 1 to Node 2.
Find $V_1$ and $V_2$.

**Solution:**
1.  **KCL at Node 1 (Assume currents leave):**
    $$ \frac{V_1 - 0}{5} + \frac{V_1 - V_2}{10} - 20 = 0 $$
    Multiply by 10:
    $$ 2V_1 + (V_1 - V_2) - 200 = 0 $$
    $$ 3V_1 - V_2 = 200 \quad \text{--- (Equation 1)} $$

2.  **KCL at Node 2 (Assume currents leave):**
    $$ \frac{V_2 - 0}{2} + \frac{V_2 - V_1}{10} - 10 = 0 $$
    Multiply by 10:
    $$ 5V_2 + (V_2 - V_1) - 100 = 0 $$
    $$ -V_1 + 6V_2 = 100 \quad \text{--- (Equation 2)} $$

3.  **Solve the system:**
    From Eq 2: $V_1 = 6V_2 - 100$.
    Substitute into Eq 1:
    $$ 3(6V_2 - 100) - V_2 = 200 $$
    $$ 18V_2 - 300 - V_2 = 200 $$
    $$ 17V_2 = 500 \implies \mathbf{V_2 \approx 29.41\text{V}} $$
    Back-substitute:
    $$ V_1 = 6(29.41) - 100 = 176.46 - 100 = \mathbf{76.46\text{V}} $$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Nodal Analysis",
        "icon": "BrainCircuit",
        "description": "The universal algorithm for solving any circuit using KCL."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Step 1: Pick Ground",
        "icon": "Activity",
        "description": "Set one major node to 0V. The remaining nodes are unknowns (V1, V2)."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Step 2: Write KCL",
        "icon": "Sigma",
        "description": "Assume all currents leave the node: (Va - Vb)/R."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Supernodes",
        "icon": "Layers",
        "description": "If a battery floats between two unknown nodes, combine them into one giant KCL bubble."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Matrix Math",
        "icon": "Wrench",
        "description": "Solve the resulting system of linear equations. This is how SPICE software works!"
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Mesh Analysis",
        "icon": "Target",
        "description": "The KVL-based twin to Nodal Analysis, focusing on loops instead of nodes."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "2", "target": "3", "animated": true},
    {"source": "3", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true},
    {"source": "5", "target": "6", "animated": true}
  ]
}
```
