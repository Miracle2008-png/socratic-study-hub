# 12. Concept Drills

Test your mastery of DC Circuit Analysis. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: A 12V battery is connected in series with a 2Ω resistor and a 4Ω resistor. Using the Voltage Divider rule, what is the exact voltage drop across the 4Ω resistor?
Options:
A) 4V
B) 6V
C) 8V
D) 12V
Answer: C
Explanation: The Voltage Divider formula is $V_x = V_{\text{source}} \times (R_x / R_{eq})$. Here, $R_{eq} = 2 + 4 = 6\Omega$. The voltage across the 4Ω resistor is $12\text{V} \times (4 / 6) = 12 \times 0.667 = 8\text{V}$.
```

```drill
Question: You are applying Superposition to a circuit containing an ideal 9V battery and an ideal 5A current source. When calculating the contribution of the 5A current source alone, what must you do with the 9V battery?
Options:
A) Replace it with an open circuit (broken wire).
B) Replace it with a short circuit (solid wire).
C) Replace it with a 9Ω resistor.
D) Leave it exactly as it is.
Answer: B
Explanation: To "turn off" an ideal voltage source during Superposition, you set its voltage to 0V. A component with 0V across it regardless of current is a perfect conductor, i.e., a short circuit. (Current sources are turned off by replacing them with open circuits).
```

```drill
Question: When performing Nodal Analysis, you encounter a 5V battery connected directly between Node A (unknown voltage) and Node B (unknown voltage). What is the correct protocol to handle this?
Options:
A) Apply Ohm's Law using $V = IR$.
B) Create a Supermesh by removing the battery.
C) Create a Supernode enclosing both Node A and Node B.
D) Assume the battery draws zero current.
Answer: C
Explanation: A Supernode is required when a voltage source floats between two unknown nodes, preventing you from writing a standard KCL current expression ($I = V/R$) for that branch. You enclose both nodes in a single KCL boundary and add a constraint equation ($V_A - V_B = 5\text{V}$).
```

```drill
Question: You measure the open-circuit voltage of an unknown black box circuit and find it to be 10V. You then short the output terminals with a wire and measure 2A of current flowing through the short. What is the Thévenin Equivalent Resistance ($R_{th}$) of this circuit?
Options:
A) 0.2 Ω
B) 5 Ω
C) 10 Ω
D) 20 Ω
Answer: B
Explanation: The open-circuit voltage is $V_{th}$ (10V). The short-circuit current is the Norton current $I_N$ (2A). Since the Thévenin and Norton resistances are identical and related by Source Transformation ($V_{th} = I_N \times R_{th}$), we have $10 = 2 \times R_{th}$, giving $R_{th} = 5\Omega$.
```

```drill
Question: An audio amplifier has an internal Thévenin resistance of 8Ω. You have four speakers: 2Ω, 4Ω, 8Ω, and 16Ω. To extract the absolute maximum electrical power from the amplifier to create the loudest sound, which speaker should you connect?
Options:
A) 2Ω (Least resistance)
B) 4Ω
C) 8Ω (Matched impedance)
D) 16Ω (Highest voltage drop)
Answer: C
Explanation: The Maximum Power Transfer Theorem dictates that maximum power is delivered to a load only when the load resistance exactly equals the source's internal Thévenin resistance ($R_L = R_{th}$). This is called Impedance Matching.
```

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Concept Mastery",
        "icon": "BrainCircuit",
        "description": "Final check on DC Circuit Analysis."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Ohm's & Power",
        "icon": "Activity",
        "description": "V=IR, P=VI, P=I²R."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Network Laws",
        "icon": "Sigma",
        "description": "KVL (Loops) and KCL (Nodes)."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Analysis Methods",
        "icon": "Layers",
        "description": "Nodal (Voltages) and Mesh (Currents)."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Network Theorems",
        "icon": "Wrench",
        "description": "Superposition, Thévenin, Norton, Max Power."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Curriculum Complete",
        "icon": "Target",
        "description": "Proceed to validation."
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
