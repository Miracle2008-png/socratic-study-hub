# 12. Concept Drills

Test your mastery of Electronics and Semiconductors. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: You have a silicon PN junction diode at room temperature with a reverse saturation current of $I_S = 10^{-12}\text{A}$. If you apply a massive forward voltage of $V_D = 0.8\text{V}$, roughly what is the theoretical current predicted by the Shockley equation ($n=1$, $V_T=26\text{mV}$)?
Options:
A) 10 mA
B) 230 A
C) 0 A
D) 12 pA
Answer: B
Explanation: The Shockley equation is $I_D \approx I_S e^{V_D/V_T}$. Therefore $I_D = 10^{-12} \times e^{0.8 / 0.026} = 10^{-12} \times e^{30.77}$. Evaluating the exponential gives $10^{-12} \times 2.3 \times 10^{13} \approx 23\text{A}$. (Note: In reality, at 0.8V a real diode would melt instantly unless it was a massive industrial diode. The exponential curve is incredibly violent!)
```

```drill
Question: A full-wave bridge rectifier is built using four standard $0.7\text{V}$ silicon diodes. It is fed by a transformer outputting a peak AC voltage of $12\text{V}$. What is the peak DC voltage that reaches the smoothing capacitor?
Options:
A) 12.0 V
B) 11.3 V
C) 10.6 V
D) 0.0 V
Answer: C
Explanation: In a full-wave bridge, the current must flow through exactly *two* diodes to complete the loop from the transformer through the load and back. Therefore, the total voltage drop is $2 \times 0.7\text{V} = 1.4\text{V}$. The peak output is $12\text{V} - 1.4\text{V} = 10.6\text{V}$.
```

```drill
Question: An NPN Bipolar Junction Transistor has a current gain of $\beta = 200$. If the Emitter current ($I_E$) is measured at $20.1\text{mA}$, what is the Base current ($I_B$)?
Options:
A) 0.1 mA
B) 10 mA
C) 100 μA
D) Both A and C
Answer: D
Explanation: The relationship is $I_E = I_B + I_C$. Since $I_C = \beta I_B$, we can write $I_E = (\beta + 1)I_B$. Therefore, $20.1\text{mA} = (201) \times I_B$. Solving for $I_B$ gives $0.1\text{mA}$, which is exactly equal to $100\mu\text{A}$.
```

```drill
Question: In a CMOS digital logic circuit, what is the primary reason that millions of transistors can be packed onto a chip without instantly melting from heat?
Options:
A) Because PMOS transistors naturally run cooler than NMOS.
B) Because the oxide layer prevents any current from entering the gate, and the NMOS/PMOS pair draws zero static current.
C) Because silicon is a natural heatsink.
D) Because the voltage is so low.
Answer: B
Explanation: In a CMOS inverter, either the top PMOS is OFF or the bottom NMOS is OFF. There is never a direct path from power to ground. Current only flows for a microscopic fraction of a nanosecond during the actual switching event. This zero static power draw is the secret to modern microprocessors.
```

```drill
Question: You have an Op-Amp configured as an Inverting Amplifier. The input resistor is $R_1 = 5 \text{ k}\Omega$ and the feedback resistor is $R_f = 25 \text{ k}\Omega$. If the input is a flat $-2.0\text{V}$ DC signal, what is the output voltage?
Options:
A) -10 V
B) +10 V
C) +12 V
D) -8 V
Answer: B
Explanation: The gain formula for an Inverting Amplifier is $A_v = -R_f / R_1$. Therefore, Gain $= -25\text{k} / 5\text{k} = -5$. The output is $V_{in} \times \text{Gain} = (-2.0\text{V}) \times (-5) = +10\text{V}$.
```

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Electronics Mastery",
        "icon": "BrainCircuit",
        "description": "Final check on Semiconductors & Op-Amps."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Physics & Diodes",
        "icon": "Activity",
        "description": "Doping, Depletion Regions, and Rectification."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Transistors",
        "icon": "Sigma",
        "description": "BJT current control vs MOSFET voltage control."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Op-Amps",
        "icon": "Layers",
        "description": "Golden rules, Negative Feedback, and Integration."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
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
    {"source": "4", "target": "5", "animated": true}
  ]
}
```
