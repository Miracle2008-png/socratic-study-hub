# 11. Norton's Theorem & Maximum Power Transfer

## Norton's Theorem: The Current Twin

If Thévenin's Theorem collapses a complex network into a voltage source in *series* with a resistor, **Norton's Theorem** collapses the exact same network into a current source ($I_N$) in *parallel* with a resistor ($R_N$).

Because both theorems represent the exact same circuit, you can instantly transform a Thévenin equivalent into a Norton equivalent using Ohm's Law (Source Transformation):
*   $R_N = R_{\text{th}}$ (The resistance is exactly the same).
*   $I_N = \frac{V_{\text{th}}}{R_{\text{th}}}$

**How to find Norton parameters directly:**
1.  **$I_N$ (Short-Circuit Current):** Connect a dead short (a wire) across terminals A and B. Calculate the current flowing through this short. That is $I_N$.
2.  **$R_N$:** Find this exactly the same way as $R_{\text{th}}$ (turn off independent sources and find equivalent resistance).

---

## Maximum Power Transfer Theorem

Why do we care so much about finding $R_{\text{th}}$? Aside from simplifying math, $R_{\text{th}}$ unlocks a fundamental principle of electrical engineering: **Maximum Power Transfer**.

Imagine you have an audio amplifier (which acts as a Thévenin source with some internal resistance $R_{\text{th}}$) and you want to connect a speaker (the load $R_L$) to it. 
*   If $R_L$ is very small ($0.001 \, \Omega$), massive current flows, but the voltage across the speaker is near zero. Power ($P = VI$) is tiny.
*   If $R_L$ is very large ($1,000,000 \, \Omega$), the voltage across the speaker is high, but the current is near zero. Power is tiny.

To deliver the absolute maximum power to the load, calculus dictates that the load resistance must exactly match the internal resistance of the source.

> **Maximum Power Transfer Theorem:** Maximum power is transferred from a source to a load when the load resistance equals the Thévenin resistance of the source.
> $$ R_L = R_{\text{th}} $$
> When this condition is met, the maximum power transferred is:
> $$ P_{\text{max}} = \frac{(V_{\text{th}})^2}{4R_{\text{th}}} $$

---

## Engineering Applications

*   **Audio Systems (Impedance Matching):** Amplifiers are often rated for $4 \, \Omega$ or $8 \, \Omega$. To get the loudest, cleanest sound, you must buy speakers that exactly match that impedance.
*   **RF and Antennas:** In high-frequency communications (like Wi-Fi routers or cell towers), the transmission lines and antennas are strictly standardized to $50 \, \Omega$. If the antenna doesn't exactly match the transmitter's $50 \, \Omega$ internal resistance, not only is power lost, but the signal actually reflects backward, potentially destroying the transmitter.

---

## Worked Examples

### Example 1 — Easy: Norton Transformation

**Problem:** A circuit was found to have a Thévenin voltage of $24\text{V}$ and a Thévenin resistance of $6 \, \Omega$. Draw the Norton equivalent circuit and calculate its values.

**Solution:**
1.  The Norton resistance is identical to the Thévenin resistance:
    $$ \mathbf{R_N = 6 \, \Omega} $$
2.  The Norton current is found via Ohm's Law:
    $$ I_N = \frac{V_{\text{th}}}{R_{\text{th}}} = \frac{24\text{V}}{6 \, \Omega} = \mathbf{4\text{A}} $$
**Result:** The Norton equivalent is a $4\text{A}$ ideal current source connected in *parallel* with a $6 \, \Omega$ resistor.

---

### Example 2 — Medium: Direct Norton Analysis

**Problem:** A $12\text{V}$ battery is connected to a $4 \, \Omega$ resistor in series. This combo is in parallel with a $2\text{A}$ current source. Terminals A and B are across the entire parallel block. Find the Norton current $I_N$ directly.

**Solution:**
1.  To find $I_N$, we must place a dead short (a $0 \, \Omega$ wire) across terminals A and B.
2.  Because A and B are shorted to ground, the current from the $2\text{A}$ source will bypass everything else and flow entirely through the short.
3.  The $12\text{V}$ battery and $4 \, \Omega$ resistor are also shorted to ground. The current from this branch is $I = 12\text{V} / 4 \, \Omega = 3\text{A}$. This $3\text{A}$ also flows through the short.
4.  By KCL, the total short-circuit current is the sum of both:
    $$ I_N = 2\text{A} + 3\text{A} = \mathbf{5\text{A}} $$

---

### Example 3 — Hard: Sizing a Speaker

**Problem:** A complex stereo amplifier outputs audio through terminals A and B. Through testing, you measure the open-circuit voltage at the terminals to be $40\text{V}$. You then attach a $10 \, \Omega$ test resistor and measure the voltage drop across it to be $32\text{V}$. 
(A) What is the internal resistance of the amplifier?
(B) What size speaker ($R_L$) should you buy to get maximum volume?
(C) How much power will that optimal speaker draw?

**Solution:**
**(A) Find $R_{\text{th}}$:**
We know $V_{\text{th}} = V_{\text{oc}} = 40\text{V}$.
When the $10 \, \Omega$ load is attached, it forms a voltage divider with the internal $R_{\text{th}}$:
$$ V_{\text{load}} = V_{\text{th}} \times \frac{R_L}{R_{\text{th}} + R_L} $$
$$ 32 = 40 \times \frac{10}{R_{\text{th}} + 10} $$
Divide by 40:
$$ 0.8 = \frac{10}{R_{\text{th}} + 10} $$
$$ 0.8 R_{\text{th}} + 8 = 10 \implies 0.8 R_{\text{th}} = 2 \implies \mathbf{R_{\text{th}} = 2.5 \, \Omega} $$
The internal resistance of the amplifier is $2.5 \, \Omega$.

**(B) Find Optimal Speaker:**
By the Maximum Power Transfer Theorem, $R_L = R_{\text{th}}$.
You should buy a **$2.5 \, \Omega$ speaker**.

**(C) Calculate Maximum Power:**
$$ P_{\text{max}} = \frac{(V_{\text{th}})^2}{4R_{\text{th}}} = \frac{40^2}{4(2.5)} = \frac{1600}{10} = \mathbf{160\text{W}} $$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Norton's Theorem",
        "icon": "BrainCircuit",
        "description": "Simplify any circuit to ONE current source and ONE parallel resistor."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Source Transformation",
        "icon": "Activity",
        "description": "You can seamlessly swap between Thévenin and Norton using Ohm's Law."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Short-Circuit Current",
        "icon": "Sigma",
        "description": "I_N is found by placing a dead short across terminals A and B."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Maximum Power Transfer",
        "icon": "Layers",
        "description": "To extract maximum power from a source, R_load MUST equal R_th."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Impedance Matching",
        "icon": "Wrench",
        "description": "Crucial in Audio, RF, and Antennas to prevent signal reflection."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "DC Circuits Mastered",
        "icon": "Target",
        "description": "Proceed to Concept Drills and Validation!"
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "2", "target": "3", "animated": true},
    {"source": "1", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true},
    {"source": "5", "target": "6", "animated": true}
  ]
}
```
