# 12. Concept Drills

Test your mastery of Digital Logic, Architecture, and Embedded Systems. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: Evaluate the following Boolean logic expression using De Morgan's laws: $\overline{A \cdot \overline{B}} + B$. Which of the following is the most simplified, equivalent expression?
Options:
A) $\overline{A} + B$
B) 1 (Always True)
C) $A \cdot B$
D) $\overline{A}$
Answer: A
Explanation: First, apply De Morgan's law to the left term: $\overline{A \cdot \overline{B}} = \overline{A} + \overline{\overline{B}}$. The double inversion cancels, leaving $\overline{A} + B$. Now plug this back into the original equation: $(\overline{A} + B) + B$. By the idempotent law, $B + B = B$. Therefore, the final simplified expression is $\overline{A} + B$.
```

```drill
Question: A Finite State Machine has 47 distinct states in its State Diagram. What is the absolute minimum number of D Flip-Flops required in the State Register to build this machine?
Options:
A) 47
B) 5
C) 6
D) 8
Answer: C
Explanation: The number of states a binary register can hold is $2^N$, where $N$ is the number of flip-flops. $2^5 = 32$ (not enough to hold 47 states). $2^6 = 64$ (enough to hold 47 states, with 17 unused states). Therefore, exactly 6 D Flip-Flops are required.
```

```drill
Question: A 5-stage pipelined CPU executes $1000$ instructions. Each stage takes exactly $2\text{ns}$. Assume there are absolutely no hazards or stalls. How many nanoseconds does it take to execute the entire program?
Options:
A) 10000 ns
B) 2008 ns
C) 2000 ns
D) 1000 ns
Answer: B
Explanation: The first instruction must travel through all 5 stages, taking $5 \times 2\text{ns} = 10\text{ns}$. After that, the pipeline is full, and one instruction exits every $2\text{ns}$. There are 999 instructions remaining. Total time = $10\text{ns} + (999 \times 2\text{ns}) = 10\text{ns} + 1998\text{ns} = 2008\text{ns}$.
```

```drill
Question: A CPU issues the 32-bit hexadecimal memory address `0xABCD_EF12`. The MMU is using a Virtual Memory system with a $4\text{KB}$ page size. What is the hexadecimal "Offset" of this memory address?
Options:
A) 0x12
B) 0xF12
C) 0xEF12
D) 0xABCD
Answer: B
Explanation: A $4\text{KB}$ page size is $4096$ bytes, which is $2^{12}$. This means the lowest 12 bits of the address are used for the offset. In hexadecimal, each digit is exactly 4 bits. Therefore, the lowest 3 hexadecimal digits represent the 12-bit offset. The offset is `0xF12`.
```

```drill
Question: You configure a microcontroller's 10-bit ADC to read an analog sensor. The reference voltage is $5.0\text{V}$. You read the ADC register and it returns the integer value `512`. What is the physical voltage currently on the pin?
Options:
A) 5.0 V
B) 1.25 V
C) 2.5 V
D) 0.5 V
Answer: C
Explanation: A 10-bit ADC has $2^{10} = 1024$ steps (from $0$ to $1023$). A reading of $512$ is exactly half of the maximum scale ($512/1024 = 0.5$). Therefore, the voltage is half of the reference voltage: $0.5 \times 5.0\text{V} = 2.5\text{V}$.
```

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "ECE Curriculum Complete",
        "icon": "BrainCircuit",
        "description": "From Coulomb's Law to CPU Architecture."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Batch 1: DC Circuits",
        "icon": "Activity",
        "description": "KCL, KVL, Thevenin."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Batch 2: AC Circuits",
        "icon": "Activity",
        "description": "Phasors, Impedance, Resonance."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "4",
      "data": {
        "label": "Batch 3: Semiconductors",
        "icon": "Activity",
        "description": "Diodes, BJTs, MOSFETs, Op-Amps."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "5",
      "data": {
        "label": "Batch 4: Digital Logic",
        "icon": "Activity",
        "description": "FSMs, Assembly, Pipelining."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "6",
      "data": {
        "label": "Proceed to Validation",
        "icon": "Target",
        "description": "Verify the final 416 block structure."
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
