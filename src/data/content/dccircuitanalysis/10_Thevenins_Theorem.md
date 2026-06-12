# 10. Thévenin's Theorem

## The Black Box Approach

Imagine you are plugging a high-end stereo into a wall outlet. You don't know the resistance of the hundreds of miles of transmission lines leading to your house, nor the internal layout of the power plant's generators. But mathematically, *you don't have to.*

**Thévenin's Theorem** states that *any* linear circuit containing multiple voltage sources, current sources, and resistors, no matter how complex, can be simplified into exactly two components connected in series:
1.  A single ideal voltage source ($V_{\text{th}}$)
2.  A single equivalent resistor ($R_{\text{th}}$)

From the perspective of your stereo (the "load" connected to the two terminals of the wall outlet), the million-component power grid behaves *identically* to a single battery and a single resistor. 

---

## How to Find the Thévenin Equivalent

You are given a complex circuit with two output terminals, **A** and **B**. You want to replace everything inside the circuit with $V_{\text{th}}$ and $R_{\text{th}}$.

### Step 1: Find $V_{\text{th}}$ (Open-Circuit Voltage)
Remove whatever load is connected to terminals A and B, leaving them as an open circuit. Calculate the voltage drop across terminals A and B. This open-circuit voltage *is* the Thévenin Voltage ($V_{\text{th}}$).
*   $V_{\text{th}} = V_{oc}$

### Step 2: Find $R_{\text{th}}$ (Equivalent Resistance)
There are two ways to find the Thévenin Resistance, depending on whether the circuit contains dependent sources.

**Method A (Independent sources only):**
Turn off all independent sources (short voltage sources, open current sources) exactly as you would for Superposition. Then, look into terminals A and B and calculate the equivalent resistance. That is $R_{\text{th}}$.

**Method B (If dependent sources exist):**
You cannot turn off dependent sources. Instead, apply a fake $1\text{V}$ test source across terminals A and B. Calculate the current $i_{\text{test}}$ that flows out of your test source.
$R_{\text{th}} = \frac{1\text{V}}{i_{\text{test}}}$

---

## Engineering Applications

*   **Battery Modeling:** An ideal battery holds a perfect voltage regardless of how much current you draw. Real batteries drop in voltage when under heavy load (like a car's headlights dimming when you crank the starter motor). Engineers model real batteries as a Thévenin equivalent: an ideal source $V_{\text{th}}$ in series with an internal resistance $R_{\text{th}}$.
*   **Modular Design:** If a power supply team builds a complex regulator, they give the consumer electronics team just the $V_{\text{th}}$ and $R_{\text{th}}$ specs. The consumer team can design their load without needing to solve the power supply's massive schematic.

---

## Worked Examples

### Example 1 — Easy: A Simple Divider

**Problem:** Find the Thévenin equivalent circuit for a $12\text{V}$ battery connected in series with a $4 \, \Omega$ resistor ($R_1$) and an $8 \, \Omega$ resistor ($R_2$). The output terminals A and B are placed across $R_2$.

**Step 1: Find $V_{\text{th}}$**
Since terminals A and B are open, no current flows *out* of the circuit. The $12\text{V}$ battery simply pushes current in a loop through $R_1$ and $R_2$.
The open-circuit voltage at A and B is just the voltage across $R_2$. Use a Voltage Divider:
$$ V_{\text{th}} = 12\text{V} \times \frac{8}{4 + 8} = 12 \times \frac{8}{12} = \mathbf{8\text{V}} $$

**Step 2: Find $R_{\text{th}}$**
Turn off the $12\text{V}$ source (replace it with a short circuit). Now, imagine standing at terminals A and B and looking *back* into the circuit.
The current would split: one path goes through the $8 \, \Omega$ resistor, and the other path goes through the shorted wire to the $4 \, \Omega$ resistor. The two resistors are in *parallel* from the perspective of the output!
$$ R_{\text{th}} = \frac{4 \times 8}{4 + 8} = \frac{32}{12} = \mathbf{2.67 \, \Omega} $$

**Result:** You can replace the entire circuit with an $8\text{V}$ battery and a $2.67 \, \Omega$ resistor.

---

### Example 2 — Medium: Bridge with a Load

**Problem:** A $20\text{V}$ source drives a circuit. It connects to a $10 \, \Omega$ resistor ($R_1$) and a $5 \, \Omega$ resistor ($R_2$). A load resistor $R_L$ connects the end of $R_1$ (Terminal A) to the end of $R_2$ (Terminal B). A $2\text{A}$ current source also feeds into Terminal A. Find the Thévenin equivalent seen by the load $R_L$.

**Step 1: Find $V_{\text{th}}$**
Remove $R_L$. Terminals A and B are open.
Find the voltage at Node A ($V_A$): The $2\text{A}$ source pushes into Node A. By KCL, $\frac{V_A - 20}{10} - 2 = 0 \implies V_A - 20 = 20 \implies V_A = 40\text{V}$.
Find the voltage at Node B ($V_B$): Since Terminal B is open, no current flows through the $5 \, \Omega$ resistor. Thus, there is no voltage drop across it. $V_B = 20\text{V}$ (tied directly to the source).
$$ V_{\text{th}} = V_A - V_B = 40 - 20 = \mathbf{20\text{V}} $$

**Step 2: Find $R_{\text{th}}$**
Turn off the $20\text{V}$ source (short it to ground). Turn off the $2\text{A}$ current source (open circuit).
Look into A and B. $R_1$ ($10 \, \Omega$) connects A to ground. $R_2$ ($5 \, \Omega$) connects B to ground.
From A to B, the two resistors are in series.
$$ R_{\text{th}} = 10 + 5 = \mathbf{15 \, \Omega} $$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Thévenin's Theorem",
        "icon": "BrainCircuit",
        "description": "Simplify any linear circuit into just ONE voltage source and ONE resistor."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Step 1: Remove Load",
        "icon": "Activity",
        "description": "Disconnect whatever is attached to terminals A and B."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Step 2: Find V_th",
        "icon": "Sigma",
        "description": "Calculate the Open-Circuit Voltage across A and B."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Step 3: Find R_th",
        "icon": "Layers",
        "description": "Turn off all independent sources. Look into A and B to find Equivalent Resistance."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Dependent Sources?",
        "icon": "Wrench",
        "description": "If present, you CANNOT turn them off. Apply a 1V test source and measure I_test."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Norton's Theorem",
        "icon": "Target",
        "description": "The exact same concept, but with a Current Source and a Parallel Resistor."
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
