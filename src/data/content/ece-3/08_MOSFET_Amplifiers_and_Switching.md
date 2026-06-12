# 8. MOSFET Amplifiers and CMOS Logic

## MOSFET Operation Regions (The Math)

Like the BJT, the MOSFET has three regions of operation, but they have slightly different names and completely different equations. A MOSFET is a **Voltage-Controlled Current Source**.

**1. Cutoff Region (The Open Switch):**
*   $V_{GS} < V_{th}$
*   No channel exists. $I_D = 0$.

**2. Saturation / Active Region (The Amplifier):**
*   $V_{GS} > V_{th}$ AND $V_{DS} > V_{GS} - V_{th}$
*   The channel is "pinched off" at the drain side, acting like a constant current valve. The Drain current ($I_D$) is entirely dependent on the square of the Gate voltage, and independent of $V_{DS}$.
*   **The Square Law Equation:**
    $$ I_D = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th})^2 $$
    *(Notice the physics parameters: $\mu_n$ is electron mobility, $C_{ox}$ is oxide capacitance, $W$ is channel Width, $L$ is channel Length).*

**3. Triode / Ohmic / Linear Region (The Closed Switch):**
*   $V_{GS} > V_{th}$ AND $V_{DS} < V_{GS} - V_{th}$
*   The channel is fully open. The MOSFET acts like a physical resistor ($R_{DS(on)}$). Current flows freely based on Ohm's law. 

*(Warning! "Saturation" in a MOSFET means it's acting as an amplifier. "Saturation" in a BJT means it's acting as a closed switch! The naming conventions are swapped and highly confusing for students).*

---

## CMOS Digital Logic: The Holy Grail

If we want to build a digital NOT gate (an Inverter), we want the output to be exactly the opposite of the input.
*   If Input = $5\text{V}$ (Logic 1), Output = $0\text{V}$ (Logic 0).
*   If Input = $0\text{V}$ (Logic 0), Output = $5\text{V}$ (Logic 1).

We can build this by stacking a **PMOS** on top of an **NMOS**. This is called **CMOS (Complementary MOS)**.
*   **Top (PMOS):** Source tied to $5\text{V}$. Drain tied to Output.
*   **Bottom (NMOS):** Drain tied to Output. Source tied to Ground ($0\text{V}$).
*   **Gates:** Both Gates are tied together to form the Input.

**How it works:**
*   Apply $5\text{V}$ to the Input: The bottom NMOS turns ON. The top PMOS turns OFF. The output is pulled cleanly to Ground ($0\text{V}$).
*   Apply $0\text{V}$ to the Input: The bottom NMOS turns OFF. The top PMOS turns ON. The output is pulled cleanly to $5\text{V}$.

**The Magic:** In either state, *one of the transistors is always OFF*. Therefore, there is NEVER a direct path for current to flow from $5\text{V}$ to Ground. The circuit draws zero static current. It is infinitely efficient.

---

## Engineering Applications

*   **Chip Fabrication Scaling:** Look at the Square Law equation. The current $I_D$ is proportional to $W/L$ (Width divided by Length of the gate). If semiconductor fabs (like TSMC) can shrink the Length ($L$) from $100\text{nm}$ down to $3\text{nm}$, they massively increase the transistor's current capacity while taking up vastly less silicon area.
*   **Solid State Relays:** In industrial automation, heavy mechanical relays (which spark and wear out) are being replaced by Triode-region MOSFETs. With an $R_{DS(on)}$ of just $0.001 \, \Omega$, a MOSFET can switch $50\text{A}$ of current with almost zero heat loss, and no moving parts.

---

## Worked Examples

### Example 1 — Medium: The Square Law Amplifier

**Problem:** An NMOS transistor has a threshold voltage $V_{th} = 1.0\text{V}$. The physical manufacturing parameters are $k_n = \mu_n C_{ox} (W/L) = 2.0 \text{ mA/V}^2$. 
The transistor is operating in the Saturation region. You apply a gate voltage of $V_{GS} = 3.0\text{V}$. 
Calculate the Drain Current ($I_D$).

**Solution:**
1.  **Set up the Square Law equation:**
    $$ I_D = \frac{1}{2} k_n (V_{GS} - V_{th})^2 $$
2.  **Substitute the values:**
    $$ I_D = \frac{1}{2} (2.0\text{mA/V}^2) \times (3.0\text{V} - 1.0\text{V})^2 $$
3.  **Solve:**
    $$ I_D = 1.0 \times (2.0)^2 = 1.0 \times 4.0 = \mathbf{4.0\text{mA}} $$

---

### Example 2 — Hard: Checking the Region of Operation

**Problem:** For the same transistor in Example 1 ($V_{th} = 1.0\text{V}$, $V_{GS} = 3.0\text{V}$, $I_D = 4.0\text{mA}$), a $1 \text{ k}\Omega$ resistor ($R_D$) is placed between the $10\text{V}$ power supply and the Drain. 
(A) What is the voltage at the Drain ($V_{DS}$)?
(B) Is the transistor actually in Saturation (as we assumed in Example 1), or did it fall into the Triode region?

**Solution:**
**(A) Calculate $V_{DS}$:**
KVL from the $10\text{V}$ supply down to the Drain.
$$ V_D = V_{supply} - (I_D \times R_D) $$
$$ V_D = 10\text{V} - (4.0\text{mA} \times 1\text{k}\Omega) = 10 - 4 = \mathbf{6.0\text{V}} $$
Since the Source is grounded, $V_{DS} = 6.0\text{V}$.

**(B) Check the Region Condition:**
To be in Saturation, $V_{DS}$ must be GREATER than the "overdrive voltage" ($V_{GS} - V_{th}$).
Overdrive voltage = $3.0\text{V} - 1.0\text{V} = 2.0\text{V}$.
Is $V_{DS} > 2.0\text{V}$?
$6.0\text{V} > 2.0\text{V}$. 
**Yes, it is safely in Saturation.** Our math from Example 1 holds true!

---

### Example 3 — Easy: Logic Inverter

**Problem:** A CMOS Inverter is powered by $V_{DD} = 3.3\text{V}$. You input a $3.3\text{V}$ signal to the combined Gates.
(A) Which transistor turns ON? (The top PMOS or bottom NMOS?)
(B) What is the voltage at the output?

**Solution:**
**(A)** The Gate voltage is $3.3\text{V}$ (Positive/High). NMOS transistors turn ON with positive voltage. PMOS transistors turn OFF with positive voltage. Therefore, the **bottom NMOS turns ON**, and the top PMOS turns OFF.
**(B)** Because the bottom NMOS is ON, it connects the Output directly to Ground. The output voltage is **$0\text{V}$**. (The Inverter successfully inverted a 1 into a 0!)

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "MOSFET Regions & CMOS",
        "icon": "BrainCircuit",
        "description": "Amplification Math and Digital Logic."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Triode Region (Switch ON)",
        "icon": "Activity",
        "description": "Vds is small. Acts like a physical resistor R_ds(on)."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Saturation Region (Amplifier)",
        "icon": "Sigma",
        "description": "Current Id is controlled by the Square of the Gate voltage."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "CMOS Logic",
        "icon": "Layers",
        "description": "Stacking PMOS over NMOS. Zero static power draw. The basis of all CPUs."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: Operational Amplifiers",
        "icon": "Target",
        "description": "Packing 50 transistors into a single chip to create a perfect, mathematical amplifying black box."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "1", "target": "3", "animated": true},
    {"source": "1", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true}
  ]
}
```
