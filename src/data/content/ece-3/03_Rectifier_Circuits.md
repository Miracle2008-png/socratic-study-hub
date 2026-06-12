# 3. Rectifier Circuits

## Turning AC into DC

As we learned in AC Fundamentals, the power grid uses AC sine waves because they can be easily stepped up and down using transformers. However, all microchips, processors, and batteries absolutely require pure, flat DC voltage to operate. 

The process of converting an AC sine wave into a flat DC line is called **Rectification**, and it relies entirely on the one-way nature of diodes.

---

## 1. The Half-Wave Rectifier

The simplest way to convert AC to DC is to place a single diode in series with an AC source and a load resistor.
*   **Positive Half-Cycle:** The AC wave is positive. The diode is forward-biased and acts like a closed switch. The positive hump of the sine wave passes through to the load (minus the $0.7\text{V}$ diode drop).
*   **Negative Half-Cycle:** The AC wave goes negative. The diode is reverse-biased and acts like an open switch. The negative hump of the wave is completely blocked. The voltage at the load is exactly $0\text{V}$.

**Result:** The output is a series of positive "pulses" separated by gaps of zero voltage. This is DC (it never changes direction), but it is terrible, bumpy DC.

## 2. The Full-Wave Bridge Rectifier

To capture the wasted negative half of the AC wave, engineers use a clever arrangement of four diodes arranged in a diamond pattern, called a **Bridge Rectifier**.
*   **Positive Half-Cycle:** Current flows out of the top of the AC source, through Diode A, across the load, and returns through Diode C to the bottom of the source.
*   **Negative Half-Cycle:** Current flows out of the *bottom* of the AC source, through Diode B, across the load (in the exact same direction!), and returns through Diode D to the top of the source.

**Result:** The negative humps are "flipped" upwards. The output is a continuous series of positive pulses with no gaps. 
*(Note: Because the current must flow through TWO diodes in the bridge to complete the circuit, the total voltage drop is $2 \times 0.7\text{V} = 1.4\text{V}$).*

## 3. Smoothing (Filter) Capacitors

A bumpy DC wave will cause a computer to crash instantly. To flatten the bumps into a pure DC line, a large Capacitor is placed in parallel with the load.
*   When the rectified voltage pulses upward, the capacitor charges up.
*   When the rectified voltage drops toward zero, the capacitor acts as a temporary battery, discharging its stored energy into the load and keeping the voltage high.

The slight droop in voltage between pulses before the next pulse charges it back up is called the **Ripple Voltage ($V_r$)**.
$$ V_r \approx \frac{V_{peak}}{f \cdot R \cdot C} $$
*(For a full-wave rectifier, the frequency of the pulses is $2f_{AC}$ since there are two pulses per cycle).*

---

## Engineering Applications

*   **Phone Chargers (Wall Warts):** Every device you plug into the wall has a rectifier inside it. The $120\text{V}$ AC is stepped down to $5\text{V}$ AC by a tiny transformer, fed through a 4-diode Bridge Rectifier to flip the negative waves up, and smoothed by a large electrolytic capacitor to provide flat $5\text{V}$ DC to your phone's battery.
*   **Alternators in Cars:** A car engine turns a magnet inside a coil to generate electricity. This naturally produces AC! However, the car battery requires DC to charge. The alternator has a built-in heavy-duty 6-diode rectifier bridge (since cars use 3-phase AC alternators) to convert the engine's AC power into DC.

---

## Worked Examples

### Example 1 — Easy: Peak Output of a Bridge

**Problem:** A transformer steps $120\text{V}_{\text{rms}}$ AC down to $12\text{V}_{\text{rms}}$ AC. This $12\text{V}_{\text{rms}}$ signal is fed into a full-wave bridge rectifier (using silicon diodes). What is the peak voltage ($V_{\text{out\_peak}}$) that reaches the load?

**Solution:**
1.  **Find the Peak AC Voltage:**
    The input is $12\text{V}_{\text{rms}}$. The peak of the sine wave is:
    $$ V_{\text{in\_peak}} = 12 \times \sqrt{2} \approx 16.97\text{V} $$
2.  **Account for Diode Drops:**
    In a full-wave bridge, current always travels through *two* diodes to complete the loop. Each silicon diode drops $0.7\text{V}$.
    $$ \text{Total Drop} = 2 \times 0.7\text{V} = 1.4\text{V} $$
3.  **Calculate Output Peak:**
    $$ V_{\text{out\_peak}} = V_{\text{in\_peak}} - \text{Total Drop} = 16.97 - 1.4 = \mathbf{15.57\text{V}} $$

---

### Example 2 — Medium: Sizing the Smoothing Capacitor

**Problem:** You are designing a $5\text{V}$ DC power supply. After the transformer and full-wave rectifier, the peak voltage is $5.0\text{V}$. The AC wall frequency is $60\text{Hz}$. The load is a microcontroller that acts like a $50 \, \Omega$ resistor.
If the microcontroller will crash if the voltage drops below $4.5\text{V}$, what is the minimum capacitance ($C$) required for the smoothing capacitor?

**Solution:**
1.  **Determine allowable Ripple Voltage ($V_r$):**
    The peak is $5.0\text{V}$. The minimum allowed is $4.5\text{V}$.
    $$ V_r = 5.0 - 4.5 = 0.5\text{V} $$
2.  **Determine Rectified Frequency:**
    The AC wall frequency is $60\text{Hz}$. A full-wave rectifier doubles the number of peaks (positive and flipped negative).
    $$ f_{rect} = 2 \times 60 = 120\text{Hz} $$
3.  **Use the Ripple Approximation Formula:**
    $$ V_r \approx \frac{V_{\text{peak}}}{f_{rect} \cdot R \cdot C} $$
4.  **Solve for C:**
    $$ C = \frac{V_{\text{peak}}}{V_r \cdot f_{rect} \cdot R} $$
    $$ C = \frac{5.0}{0.5 \times 120 \times 50} = \frac{5.0}{3000} \approx 0.00167\text{F} $$
    $$ \mathbf{C = 1670 \mu\text{F}} $$
*(You would likely buy a standard $2200 \mu\text{F}$ capacitor to be safe).*

---

### Example 3 — Hard: Power Dissipated in the Bridge

**Problem:** An industrial power supply uses a full-wave bridge rectifier to drive a $10 \, \Omega$ DC heater. The smoothed DC voltage across the heater is a flat $100\text{V}$. Assuming standard $0.7\text{V}$ silicon diodes, how much total power is dissipated as heat by the four diodes in the bridge rectifier?

**Solution:**
1.  **Find the continuous load current:**
    $$ I_{load} = \frac{V_{load}}{R} = \frac{100\text{V}}{10 \, \Omega} = 10\text{A} $$
2.  **Understand the Bridge Path:**
    At any given instant in time, the $10\text{A}$ current is flowing through exactly *two* of the four diodes (e.g., Diode A and Diode C during the positive half, Diode B and Diode D during the negative half).
    Therefore, the circuit *always* has two diodes actively dropping $0.7\text{V}$ each.
3.  **Calculate Total Power Loss:**
    Power is Voltage Drop $\times$ Current.
    $$ P_{\text{loss}} = (\text{Total Diode Voltage Drop}) \times I_{load} $$
    $$ P_{\text{loss}} = (2 \times 0.7\text{V}) \times 10\text{A} $$
    $$ P_{\text{loss}} = 1.4\text{V} \times 10\text{A} = \mathbf{14\text{W}} $$
*(The rectifier assembly is dissipating 14 Watts of heat! This is why high-power power supplies have massive aluminum heatsinks bolted directly to the bridge rectifier chip to prevent it from melting).*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Rectification",
        "icon": "BrainCircuit",
        "description": "Converting Alternating Current (AC) into Direct Current (DC)."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Half-Wave Rectifier",
        "icon": "Activity",
        "description": "1 Diode. Chops off the negative half of the wave. Lots of dead time."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Full-Wave Bridge",
        "icon": "Sigma",
        "description": "4 Diodes. Flips the negative half upward. 1.4V total drop."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Smoothing Capacitor",
        "icon": "Layers",
        "description": "Charges on the peaks, discharges during the valleys. Flattens the wave."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: Zener Diodes",
        "icon": "Target",
        "description": "What happens if we intentionally push a diode so hard in reverse that the Depletion Region shatters?"
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "1", "target": "3", "animated": true},
    {"source": "3", "target": "4", "animated": true},
    {"source": "2", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true}
  ]
}
```
