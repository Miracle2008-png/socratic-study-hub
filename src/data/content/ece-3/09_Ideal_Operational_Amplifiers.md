# 9. Ideal Operational Amplifiers

## The Ultimate Analog Building Block

Designing amplifiers using individual BJTs or MOSFETs is incredibly difficult. You have to calculate DC biases, account for temperature drift, and manage complex small-signal models.

In the 1960s, engineers realized they could package 20 to 50 transistors together onto a single silicon chip to create a "perfect" universal amplifier. They called it the **Operational Amplifier (Op-Amp)**.

An Op-Amp has two inputs and one output:
1.  **Non-Inverting Input ($V_+$)**
2.  **Inverting Input ($V_-$)**
3.  **Output ($V_{out}$)**

The Op-Amp's job is simple: It measures the voltage difference between its two inputs, multiplies that difference by an almost infinite number (the Open-Loop Gain, $A \approx 100,000$), and outputs the result.
$$ V_{out} = A \times (V_+ - V_-) $$

Because the gain $A$ is so massive, if $V_+$ is even a microvolt higher than $V_-$, the output instantly slams to the maximum positive power supply voltage. Used this way, it is a **Comparator**. But its true power lies in **Negative Feedback**.

---

## Negative Feedback & The Two Golden Rules

If we connect a wire (or a resistor) from the Output back to the Inverting Input ($V_-$), the Op-Amp creates a feedback loop. It will automatically adjust its output voltage until $V_-$ perfectly matches $V_+$.

When an Op-Amp is wired with negative feedback, we can analyze the entire circuit using just **Two Golden Rules**:
1.  **Rule 1 (Infinite Input Impedance):** No current ever flows into the input terminals. ($I_+ = 0$ and $I_- = 0$).
2.  **Rule 2 (Virtual Short):** The Op-Amp will do whatever it takes to ensure the voltage at the two inputs is exactly equal. ($V_+ = V_-$).

Using just these two rules and KCL, you can analyze almost any Op-Amp circuit in seconds, completely ignoring the complex transistor physics inside the chip!

---

## Standard Topologies

### 1. The Voltage Follower (Buffer)
*   $V_{in}$ connected to $V_+$. Output connected directly to $V_-$.
*   By Rule 2, $V_- = V_+$, so $V_{out} = V_{in}$. 
*   **Why is this useful?** Because of Rule 1, it draws *zero* current from the input. It acts as an isolation barrier, allowing a weak sensor to drive a heavy load without drooping.

### 2. The Non-Inverting Amplifier
*   Input to $V_+$. A voltage divider ($R_1$ and $R_2$) feeds a fraction of the output back to $V_-$.
*   Gain: $A_v = 1 + \frac{R_2}{R_1}$
*   The output is a multiplied version of the input, in the same phase.

### 3. The Inverting Amplifier
*   $V_+$ is grounded ($0\text{V}$). Input is fed through $R_1$ into $V_-$. Feedback resistor $R_2$ connects Output to $V_-$.
*   Gain: $A_v = -\frac{R_2}{R_1}$
*   The output is multiplied and flipped upside down (180° phase shift).

---

## Engineering Applications

*   **Audio Mixing Consoles:** A "Summing Amplifier" is an Op-Amp circuit where multiple audio signals (Microphone 1, Guitar, Keyboard) are fed into the inverting input through different resistors. The Op-Amp perfectly adds all the voltages together into a single master output track.
*   **Biomedical Sensors:** An EKG measuring a heartbeat on the skin produces a signal of about $1\text{mV}$. An "Instrumentation Amplifier" (built from 3 Op-Amps) provides massive gain while rejecting the $60\text{Hz}$ electrical noise absorbed from the room's lights.

---

## Worked Examples

### Example 1 — Easy: The Non-Inverting Amplifier

**Problem:** You have a Non-Inverting Amplifier circuit. $V_{in}$ is connected to $V_+$. The feedback network consists of $R_2 = 10 \text{ k}\Omega$ (from Output to $V_-$) and $R_1 = 2 \text{ k}\Omega$ (from $V_-$ to Ground).
If the input is a $0.5\text{V}$ DC signal, what is the exact output voltage?

**Solution:**
1.  **Use the Non-Inverting Gain Formula:**
    $$ A_v = 1 + \frac{R_2}{R_1} $$
    $$ A_v = 1 + \frac{10,000}{2,000} = 1 + 5 = 6 $$
2.  **Calculate Output:**
    $$ V_{out} = A_v \times V_{in} = 6 \times 0.5\text{V} = \mathbf{3.0\text{V}} $$

---

### Example 2 — Medium: Deriving the Inverting Amplifier

**Problem:** Derive the gain formula ($V_{out} / V_{in}$) for an Inverting Amplifier using ONLY the Two Golden Rules and KCL.
(Circuit: $V_+$ is grounded. $V_{in}$ connects to $V_-$ via $R_1$. $V_{out}$ connects to $V_-$ via $R_2$).

**Solution:**
1.  **Apply Rule 2 (Virtual Short):**
    Because $V_+$ is tied to Ground ($0\text{V}$), the Op-Amp will force $V_-$ to also be $0\text{V}$. This is called a "Virtual Ground".
    $$ V_- = 0\text{V} $$
2.  **Apply KCL at the $V_-$ node:**
    Current entering the node from the input resistor ($I_{in}$) must equal the current leaving the node through the feedback resistor ($I_{fb}$) plus the current entering the Op-Amp ($I_-$).
    $$ I_{in} = I_{fb} + I_- $$
3.  **Apply Rule 1 (Infinite Impedance):**
    No current enters the Op-Amp. $I_- = 0$.
    Therefore, $I_{in} = I_{fb}$.
4.  **Use Ohm's Law to express the currents:**
    $$ \frac{V_{in} - V_-}{R_1} = \frac{V_- - V_{out}}{R_2} $$
    Since $V_- = 0$:
    $$ \frac{V_{in} - 0}{R_1} = \frac{0 - V_{out}}{R_2} $$
    $$ \frac{V_{in}}{R_1} = \frac{-V_{out}}{R_2} $$
5.  **Rearrange for Gain ($V_{out} / V_{in}$):**
    $$ \mathbf{\frac{V_{out}}{V_{in}} = -\frac{R_2}{R_1}} $$
*(The math perfectly proves the textbook formula!)*

---

### Example 3 — Hard: The Summing Amplifier

**Problem:** An Op-Amp is configured as an Inverting Summing Amplifier. 
$V_+$ is grounded. 
Input 1 ($V_1 = 2\text{V}$) connects to $V_-$ via a $10 \text{ k}\Omega$ resistor.
Input 2 ($V_2 = -1\text{V}$) connects to $V_-$ via a $5 \text{ k}\Omega$ resistor.
The feedback resistor from Output to $V_-$ is $20 \text{ k}\Omega$.
What is the Output Voltage ($V_{out}$)?

**Solution:**
1.  **Establish Virtual Ground:**
    $V_+ = 0\text{V} \implies V_- = 0\text{V}$.
2.  **Write KCL at the $V_-$ node:**
    The sum of all currents entering the node from the inputs must equal the current leaving through the feedback resistor (since $I_- = 0$).
    $$ I_1 + I_2 = I_{fb} $$
3.  **Express with Ohm's Law:**
    $$ \frac{V_1 - 0}{R_1} + \frac{V_2 - 0}{R_2} = \frac{0 - V_{out}}{R_{fb}} $$
4.  **Substitute the values:**
    $$ \frac{2}{10k} + \frac{-1}{5k} = \frac{-V_{out}}{20k} $$
5.  **Solve the left side:**
    $\frac{2}{10k} = 0.2\text{mA}$
    $\frac{-1}{5k} = -0.2\text{mA}$
    Total current entering = $0.2\text{mA} - 0.2\text{mA} = 0\text{mA}$.
6.  **Solve for $V_{out}$:**
    $$ 0 = \frac{-V_{out}}{20k} \implies \mathbf{V_{out} = 0\text{V}} $$
*(The Op-Amp perfectly multiplied $V_1$ by a gain of $-2$ and $V_2$ by a gain of $-4$, resulting in $-4\text{V} + 4\text{V} = 0\text{V}$).*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "The Ideal Op-Amp",
        "icon": "BrainCircuit",
        "description": "Vout = A * (V+ - V-). A mathematical black box."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Golden Rule 1",
        "icon": "Activity",
        "description": "Infinite Input Impedance. I+ = 0, I- = 0."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Golden Rule 2",
        "icon": "Sigma",
        "description": "Virtual Short (with negative feedback). V+ = V-."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Inverting Amplifier",
        "icon": "Layers",
        "description": "Gain = -R2/R1. Flips the signal upside down."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: Active Filters",
        "icon": "Target",
        "description": "Replacing the feedback resistors with Capacitors to do Calculus on the signals."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "1", "target": "3", "animated": true},
    {"source": "2", "target": "4", "animated": true},
    {"source": "3", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true}
  ]
}
```
