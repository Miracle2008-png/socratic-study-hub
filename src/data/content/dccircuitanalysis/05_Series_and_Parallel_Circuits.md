# 5. Series and Parallel Circuits

## Combining Components

Real-world electronic systems contain millions of resistors, capacitors, and transistors. To make sense of them, engineers constantly simplify complex networks into smaller, mathematically equivalent components. The two most fundamental ways to connect components are in **Series** and **Parallel**.

---

## 1. Series Circuits

Components are in **series** if they are connected end-to-end, forming a single path for electrons to flow. 
*   **Current is Constant:** Because there are no branching paths (nodes), KCL dictates that the exact same current $I$ flows through every component in a series chain.
*   **Voltages Add:** KVL dictates that the total voltage across the chain is the sum of the individual voltage drops.

### Equivalent Resistance (Series)
If you place $N$ resistors in series, they act like one giant resistor whose length is the sum of all the individual lengths. 
$$ R_{eq} = R_1 + R_2 + R_3 + \dots + R_N $$

---

## 2. Parallel Circuits

Components are in **parallel** if both of their terminals are connected to the exact same two nodes.
*   **Voltage is Constant:** Because they share the same two nodes, the voltage drop $V$ across every parallel component must be exactly the same.
*   **Currents Add:** KCL dictates that the total current entering the parallel bank is the sum of the currents flowing through each individual branch.

### Equivalent Resistance (Parallel)
If you place $N$ resistors in parallel, they act like a single resistor with a vastly larger cross-sectional area, making it *easier* for current to flow. The equivalent resistance is always *less* than the smallest individual resistor.
$$ \frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \dots + \frac{1}{R_N} $$

**The 2-Resistor Shortcut:**
If you only have two resistors in parallel, you can use the "Product over Sum" rule:
$$ R_{eq} = \frac{R_1 \times R_2}{R_1 + R_2} $$

---

## Engineering Applications

*   **Battery Packs (EVs and Laptops):** 
    *   Connecting cells in **series** adds their voltages (e.g., placing four $3.7\text{V}$ lithium cells end-to-end creates a $14.8\text{V}$ battery).
    *   Connecting cells in **parallel** adds their current capacities (e.g., placing four $2000\text{mAh}$ cells in parallel creates a massive $8000\text{mAh}$ battery, still at $3.7\text{V}$). Tesla battery packs use thousands of cells wired in complex series-parallel grids to achieve both high voltage ($400\text{V}+$) and high capacity.
*   **Household Wiring:** All electrical outlets in a house are wired in **parallel**. This ensures that every appliance receives exactly $120\text{V}$ (or $230\text{V}$), and if one appliance is unplugged (opening the circuit), the others continue to operate.

---

## Worked Examples

### Example 1 — Easy: Equivalent Resistance

**Problem:** Find the equivalent resistance of a circuit containing a $100 \, \Omega$ resistor and a $300 \, \Omega$ resistor if they are connected: (A) In series, (B) In parallel.

**Solution:**
**(A) Series:**
$$ R_{eq} = 100 + 300 = \mathbf{400 \, \Omega} $$

**(B) Parallel:**
Using the Product over Sum shortcut:
$$ R_{eq} = \frac{100 \times 300}{100 + 300} = \frac{30,000}{400} = \mathbf{75 \, \Omega} $$
*(Notice how the parallel equivalent is smaller than the smallest resistor, $100 \, \Omega$.)*

---

### Example 2 — Medium: Current in a Series-Parallel Mix

**Problem:** A $24\text{V}$ battery is connected to a $4 \, \Omega$ resistor. In series with this resistor is a parallel pair consisting of a $6 \, \Omega$ resistor and a $3 \, \Omega$ resistor. Find the total current drawn from the battery.

**Solution:**
1.  **Collapse the parallel pair first:**
    $$ R_p = \frac{6 \times 3}{6 + 3} = \frac{18}{9} = 2 \, \Omega $$
2.  **Add the series resistor:**
    The circuit now looks like a $24\text{V}$ battery connected to a $4 \, \Omega$ resistor in series with a $2 \, \Omega$ equivalent resistor.
    $$ R_{total} = 4 + 2 = 6 \, \Omega $$
3.  **Apply Ohm's Law for the whole circuit:**
    $$ I_{total} = \frac{V}{R_{total}} = \frac{24}{6} = \mathbf{4 \text{ A}} $$

---

### Example 3 — Hard: Power in Parallel Branches

**Problem:** A $12\text{V}$ power supply is connected to three parallel branches. Branch 1 has a $2 \, \Omega$ resistor. Branch 2 has a $4 \, \Omega$ resistor. Branch 3 has a $6 \, \Omega$ resistor. 
Find the total power supplied by the voltage source. Do this in two different ways to verify the result.

**Solution:**
**Method 1: Using Equivalent Resistance**
1.  Find $R_{eq}$ of the three parallel resistors:
    $$ \frac{1}{R_{eq}} = \frac{1}{2} + \frac{1}{4} + \frac{1}{6} = \frac{6}{12} + \frac{3}{12} + \frac{2}{12} = \frac{11}{12} $$
    $$ R_{eq} = \frac{12}{11} \, \Omega \approx 1.09 \, \Omega $$
2.  Calculate total power using the source voltage and $R_{eq}$:
    $$ P_{total} = \frac{V^2}{R_{eq}} = \frac{12^2}{12/11} = \frac{144 \times 11}{12} = 12 \times 11 = \mathbf{132 \text{ W}} $$

**Method 2: Summing Individual Powers**
1.  Since they are in parallel, the full $12\text{V}$ drops across each resistor individually.
2.  Power in $2 \, \Omega$: $P_1 = \frac{12^2}{2} = \frac{144}{2} = 72 \text{ W}$
3.  Power in $4 \, \Omega$: $P_2 = \frac{12^2}{4} = \frac{144}{4} = 36 \text{ W}$
4.  Power in $6 \, \Omega$: $P_3 = \frac{12^2}{6} = \frac{144}{6} = 24 \text{ W}$
5.  Sum them up (Conservation of Energy):
    $$ P_{total} = 72 + 36 + 24 = \mathbf{132 \text{ W}} $$
*(Both methods yield the exact same physical result!)*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Circuit Topologies",
        "icon": "BrainCircuit",
        "description": "How components connect in a network."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Series Circuits",
        "icon": "Activity",
        "description": "End-to-end. Current is constant. Voltages add."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Series Math",
        "icon": "Sigma",
        "description": "R_eq = R1 + R2 + R3..."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Parallel Circuits",
        "icon": "Layers",
        "description": "Shared nodes. Voltage is constant. Currents add."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Parallel Math",
        "icon": "Wrench",
        "description": "1/R_eq = 1/R1 + 1/R2 + 1/R3..."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Dividers",
        "icon": "Target",
        "description": "Exploiting series and parallel math to scale voltages and currents instantly."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "2", "target": "3", "animated": true},
    {"source": "1", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true},
    {"source": "3", "target": "6", "animated": true},
    {"source": "5", "target": "6", "animated": true}
  ]
}
```
