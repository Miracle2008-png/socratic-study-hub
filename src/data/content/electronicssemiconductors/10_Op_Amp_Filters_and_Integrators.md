# 10. Op-Amp Filters and Integrators

## Doing Calculus with Silicon

In the previous chapter, we used Resistors in the feedback loop to create amplifiers with constant gain. 
However, if we replace one of those resistors with a **Capacitor**, the gain of the Op-Amp becomes frequency-dependent. Even more incredibly, because the current through a capacitor is governed by a derivative ($I = C \frac{dV}{dt}$), the Op-Amp actually performs real-time calculus on the input signal!

---

## 1. The Analog Integrator

If you place a Resistor at the input ($R_1$) and a Capacitor in the feedback loop ($C_f$), you create an **Integrator**.
By applying the two Golden Rules and integrating both sides of the KCL equation with respect to time, we find the output is:
$$ V_{out}(t) = -\frac{1}{R_1 C_f} \int V_{in}(t) \, dt $$

*   If the input is a flat DC voltage, the output will be a steadily rising or falling ramp (a straight line).
*   If the input is a Square Wave, the output will be a perfect Triangle Wave.
*   Because integrating a sine wave produces a negative cosine wave, it acts as a Low-Pass filter, naturally suppressing high-frequency noise.

## 2. The Analog Differentiator

If you swap them—putting the Capacitor at the input ($C_1$) and the Resistor in the feedback loop ($R_f$)—you create a **Differentiator**.
$$ V_{out}(t) = -R_f C_1 \frac{d V_{in}(t)}{dt} $$

*   If the input is a steady DC voltage, the derivative is zero, so the output is exactly $0\text{V}$.
*   If the input is a Triangle wave, the output is a Square wave.
*   This circuit acts as a High-Pass filter. (In reality, pure differentiators are rarely used because they massively amplify microscopic high-frequency noise).

## 3. Active Filters

If you use a combination of Resistors AND Capacitors in the feedback loops, you can build **Active Filters**. 
Unlike passive RC filters (which always lose signal strength), an active filter can perfectly carve out a specific frequency band (e.g., $100\text{Hz}$ to $500\text{Hz}$) while simultaneously boosting its volume by $10\text{x}$.

---

## Engineering Applications

*   **Analog Computers:** Before digital microprocessors existed, the Apollo space program used networks of Op-Amp Integrators to solve complex differential equations for orbital mechanics in real-time.
*   **PID Controllers:** In industrial robotics, a motor is controlled by a PID (Proportional-Integral-Derivative) loop. You literally build three parallel Op-Amp circuits (an amplifier, an integrator, and a differentiator), sum their outputs together, and feed it to the motor to ensure it moves to the exact coordinate without overshooting.

---

## Worked Examples

### Example 1 — Easy: Integrator Output Ramp

**Problem:** An Op-Amp integrator has $R_1 = 100 \text{ k}\Omega$ and $C_f = 10 \mu\text{F}$. A steady DC voltage of $V_{in} = 2.0\text{V}$ is applied to the input at $t=0$. The initial voltage on the capacitor is $0\text{V}$.
Calculate the exact Output Voltage ($V_{out}$) after $3.0$ seconds.

**Solution:**
1.  **Use the Integrator formula:**
    $$ V_{out}(t) = -\frac{1}{R_1 C_f} \int_0^t V_{in} \, dt $$
2.  **Calculate the time constant ($RC$):**
    $$ R_1 C_f = (100,000 \, \Omega) \times (0.00001 \text{ F}) = 1.0 \text{ second} $$
3.  **Integrate the constant $V_{in}$:**
    The integral of a constant ($2.0$) with respect to $t$ is just $2.0t$.
    $$ V_{out}(t) = -\frac{1}{1.0} (2.0 \times t) = -2.0t $$
4.  **Evaluate at $t = 3.0$ seconds:**
    $$ V_{out}(3.0) = -2.0(3.0) = \mathbf{-6.0\text{V}} $$
*(The output is a negative-going ramp that drops by $2\text{V}$ every second!)*

---

### Example 2 — Medium: Differentiator Output

**Problem:** An Op-Amp differentiator has $C_1 = 1 \mu\text{F}$ and $R_f = 10 \text{ k}\Omega$. 
The input voltage is a Triangle wave. During its rising slope, the voltage increases steadily from $0\text{V}$ to $5\text{V}$ over $10\text{ms}$ ($0.01\text{s}$).
What is the constant Output Voltage ($V_{out}$) during this rising slope?

**Solution:**
1.  **Calculate the derivative of the input ($dV/dt$):**
    The slope is the change in voltage over the change in time.
    $$ \frac{dV_{in}}{dt} = \frac{5\text{V} - 0\text{V}}{0.01\text{s}} = \frac{5}{0.01} = 500 \text{ V/s} $$
2.  **Use the Differentiator formula:**
    $$ V_{out}(t) = -R_f C_1 \frac{d V_{in}(t)}{dt} $$
3.  **Substitute values:**
    $R_f C_1 = 10,000 \times 0.000001 = 0.01$
    $$ V_{out} = -(0.01) \times (500) $$
    $$ V_{out} = \mathbf{-5.0\text{V}} $$
*(During the entire $10\text{ms}$ that the input is ramping up, the output stays flat at exactly $-5.0\text{V}$. When the triangle wave starts ramping down, the output will instantly snap to $+5.0\text{V}$, creating a square wave).*

---

### Example 3 — Hard: Active Low-Pass Filter Cutoff

**Problem:** You build an Active Low-Pass Filter by taking an Inverting Amplifier and adding a Capacitor ($C_f$) in parallel with the feedback resistor ($R_f$). 
The components are $R_{in} = 1 \text{ k}\Omega$, $R_f = 10 \text{ k}\Omega$, and $C_f = 0.01 \mu\text{F}$.
(A) What is the DC gain of this amplifier?
(B) What is the cutoff frequency ($f_c$ in Hz) where the gain starts to roll off?

**Solution:**
**(A) DC Gain:**
At DC ($0\text{Hz}$), a capacitor acts as an open circuit (infinite impedance). 
Therefore, $C_f$ effectively disappears, leaving a standard Inverting Amplifier.
$$ Gain_{DC} = -\frac{R_f}{R_{in}} = -\frac{10k}{1k} = \mathbf{-10} $$

**(B) Cutoff Frequency:**
The cutoff frequency occurs when the impedance of the feedback capacitor perfectly equals the impedance of the feedback resistor ($1/\omega C = R$).
$$ \omega_c = \frac{1}{R_f C_f} $$
$$ f_c = \frac{1}{2\pi R_f C_f} $$
Substitute the values ($R_f = 10,000$, $C_f = 10^{-8}$):
$$ f_c = \frac{1}{2\pi (10,000 \times 10^{-8})} = \frac{1}{2\pi (0.0001)} $$
$$ f_c = \frac{1}{0.000628} \approx \mathbf{1590 \text{ Hz (1.59 kHz)}} $$
*(This filter will amplify bass and mid-range audio by 10x, but will heavily suppress high-pitched treble above 1.59kHz).*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Op-Amp Calculus",
        "icon": "BrainCircuit",
        "description": "Adding Capacitors to the feedback loop."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Integrator",
        "icon": "Activity",
        "description": "Capacitor in feedback. Output is the area under the input curve. Turns Squares into Triangles."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Differentiator",
        "icon": "Sigma",
        "description": "Capacitor at input. Output is the slope of the input curve. Turns Triangles into Squares."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Active Filters",
        "icon": "Layers",
        "description": "Combining R and C in feedback to simultaneously Filter and Amplify."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: Oscillators",
        "icon": "Target",
        "description": "What happens if we wire the output to the POSITIVE input? The circuit begins to scream."
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
