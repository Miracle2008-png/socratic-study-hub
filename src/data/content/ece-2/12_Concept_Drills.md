# 12. Concept Drills

Test your mastery of AC Circuit Analysis. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: You measure a wall outlet in Europe and your multimeter reads 230V AC. What is the absolute peak voltage ($V_m$) that the insulation in the wall wires must withstand?
Options:
A) 230V
B) 162V
C) 325V
D) 460V
Answer: C
Explanation: Multimeters measure the RMS (Root Mean Square) voltage. The relationship for a sine wave is $V_{\text{rms}} = V_m / \sqrt{2}$. Therefore, the peak voltage is $V_m = V_{\text{rms}} \times \sqrt{2} = 230 \times 1.414 \approx 325\text{V}$.
```

```drill
Question: A circuit operates at an angular frequency of $\omega = 100 \text{ rad/s}$. What is the phasor impedance ($\mathbf{Z}_C$) of a $200\mu\text{F}$ capacitor?
Options:
A) $j50 \, \Omega$
B) $-j50 \, \Omega$
C) $j0.02 \, \Omega$
D) $-j0.02 \, \Omega$
Answer: B
Explanation: The formula for capacitive impedance is $\mathbf{Z}_C = -j / (\omega C)$. Plugging in the values: $\mathbf{Z}_C = -j / (100 \times 200 \times 10^{-6}) = -j / (0.02) = -j50 \, \Omega$.
```

```drill
Question: In a factory, a massive induction motor draws $100\text{kVA}$ of apparent power from the grid, but the power factor is $0.8$ lagging. What is the actual Real Power ($P$) being used to spin the motor?
Options:
A) 80 kW
B) 60 kW
C) 100 kW
D) 125 kW
Answer: A
Explanation: Real power is the horizontal component of the Power Triangle. $P = |\mathbf{S}| \times pf$. Therefore, $P = 100\text{kVA} \times 0.8 = 80\text{kW}$. (The remaining $60\text{kVAR}$ is useless reactive power).
```

```drill
Question: You are designing a Band-Pass filter using a series RLC circuit. You want the filter to perfectly resonate at exactly $1000 \text{ rad/s}$. If you have a $10\text{mH}$ inductor, what size capacitor must you use?
Options:
A) 10 μF
B) 100 μF
C) 1 mF
D) 0.1 F
Answer: B
Explanation: The resonant frequency formula is $\omega_0 = 1/\sqrt{LC}$. Squaring both sides: $\omega_0^2 = 1/(LC)$. Rearranging for $C$: $C = 1 / (\omega_0^2 L) = 1 / (1000^2 \times 0.01) = 1 / (1,000,000 \times 0.01) = 1 / 10,000 = 0.0001 \text{ F}$, which is $100 \mu\text{F}$.
```

```drill
Question: An audio amplifier has an internal Thévenin impedance of $\mathbf{Z}_{th} = 8 - j6 \, \Omega$. To achieve maximum power transfer to a speaker array, what complex impedance must the speaker array have?
Options:
A) $8 - j6 \, \Omega$
B) $8 + j6 \, \Omega$
C) $8 + j0 \, \Omega$
D) $0 + j6 \, \Omega$
Answer: B
Explanation: The Maximum AC Power Transfer Theorem states that the load impedance must be the complex conjugate of the source impedance ($\mathbf{Z}_L = \mathbf{Z}_{th}^*$). This perfectly matches the real resistance while canceling out the reactive inductance/capacitance.
```

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "AC Circuit Mastery",
        "icon": "BrainCircuit",
        "description": "Final check on AC Analysis."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Phasors",
        "icon": "Activity",
        "description": "Converting sine waves and derivatives into complex algebra."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Impedance",
        "icon": "Sigma",
        "description": "Z_R, Z_L, and Z_C. Applying Nodal/Mesh with complex numbers."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "AC Power",
        "icon": "Layers",
        "description": "Real (P), Reactive (Q), Apparent (S), and Power Factor Correction."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Transformers & Resonance",
        "icon": "Wrench",
        "description": "Impedance matching, filtering, and magnetic coupling."
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
