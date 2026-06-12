# 1. AC Fundamentals and Sine Waves

## The War of the Currents

In the late 19th century, Thomas Edison (champion of Direct Current, DC) and Nikola Tesla (champion of Alternating Current, AC) battled to electrify the world. AC ultimately won the grid for a simple reason: **Transformers**. 

Because AC voltage constantly changes, it naturally induces magnetic fields that allow transformers to step voltages up to enormous levels (e.g., $500,000\text{V}$) for long-distance transmission with near-zero heat loss, and then step them back down to safe levels ($120\text{V}$) for homes. This is impossible with pure DC.

---

## Anatomy of a Sine Wave

An Alternating Current (AC) signal is a voltage or current that varies periodically with time. In electrical engineering, the fundamental AC waveform is the **sine wave**, mathematically described by:

$$ v(t) = V_m \cos(\omega t + \phi) $$

Let's break down the components:
1.  **$V_m$ (Peak Amplitude):** The maximum voltage reached by the wave. 
2.  **$\omega$ (Angular Frequency):** How fast the wave spins in a circle, measured in radians per second ($\text{rad/s}$).
3.  **$t$ (Time):** The independent variable, measured in seconds.
4.  **$\phi$ (Phase Angle):** How far shifted the wave is from a standard cosine wave starting at $t=0$. Measured in degrees or radians.

*Note: Engineers prefer $\cos()$ over $\sin()$ as the standard reference because $\cos(0) = 1$, aligning perfectly with the real axis in complex math, which we will use heavily in later chapters.*

### Frequency and Period
The **Period ($T$)** is the time it takes for one full cycle of the wave (in seconds).
The **Frequency ($f$)** is the number of cycles per second, measured in **Hertz (Hz)**.
$$ f = \frac{1}{T} $$
$$ \omega = 2\pi f $$

---

## The RMS Value (Root Mean Square)

If you connect a lightbulb to an AC outlet, the voltage is constantly crossing zero. So, what is the "effective" voltage doing the work to heat the filament? It is not the peak voltage ($V_m$), nor is it the average (which is exactly $0\text{V}$). 

We use the **Root Mean Square (RMS)**. It is the equivalent DC voltage that would produce the exact same amount of heat in a resistor.
For a pure sine wave, the RMS value is:
$$ V_{\text{rms}} = \frac{V_m}{\sqrt{2}} \approx 0.707 \times V_m $$

When you measure a wall outlet in North America as "$120\text{V}$", that is the **RMS** voltage. The actual peak voltage pushing against the insulation in your walls is $120 \times \sqrt{2} \approx 170\text{V}$.

---

## Engineering Applications

*   **Global Power Grids:** North America uses $120\text{V}_{\text{rms}}$ at $60\text{Hz}$ ($\omega = 377 \text{ rad/s}$). Europe and much of the world use $230\text{V}_{\text{rms}}$ at $50\text{Hz}$ ($\omega = 314 \text{ rad/s}$). Power supply designers must build "universal" adapters that can rectify and handle peaks up to $230 \times \sqrt{2} \approx 325\text{V}$!
*   **Audio Signals:** Sound waves converted to electricity are simply complex AC waveforms. A deep bass note is a low-frequency AC voltage (e.g., $60\text{Hz}$), while a high treble note is a high-frequency AC voltage (e.g., $10,000\text{Hz}$).

---

## Worked Examples

### Example 1 — Easy: Extracting Wave Parameters

**Problem:** An AC voltage is given by the equation $v(t) = 170 \cos(377t + 45^\circ) \text{ V}$. Find the peak voltage, the RMS voltage, the frequency in Hz, and the phase angle.

**Solution:**
1.  **Peak Voltage ($V_m$):** The coefficient in front is the peak. $V_m = \mathbf{170\text{V}}$.
2.  **RMS Voltage ($V_{\text{rms}}$):** $V_{\text{rms}} = \frac{170}{\sqrt{2}} \approx \mathbf{120.2\text{V}}$.
3.  **Frequency ($f$):** The coefficient of $t$ is $\omega = 377 \text{ rad/s}$.
    $$ f = \frac{\omega}{2\pi} = \frac{377}{2\pi} \approx \mathbf{60\text{Hz}} $$
4.  **Phase Angle ($\phi$):** The offset is $\mathbf{45^\circ}$.

---

### Example 2 — Medium: Writing the Equation from a Graph

**Problem:** You observe an AC current on an oscilloscope. The wave completes one full cycle every $2\text{ms}$. The peak current reaches $50\text{mA}$. The wave is delayed, crossing its positive peak $0.5\text{ms}$ *after* $t=0$. Write the mathematical expression for $i(t)$.

**Solution:**
1.  **Find $I_m$:** $I_m = 50\text{mA}$.
2.  **Find $\omega$:** 
    Period $T = 2\text{ms} = 0.002\text{s}$.
    Frequency $f = 1/T = 1/0.002 = 500\text{Hz}$.
    Angular frequency $\omega = 2\pi f = 2\pi(500) = 1000\pi \text{ rad/s}$.
3.  **Find Phase $\phi$:**
    A standard cosine wave peaks at $t=0$. This wave is delayed (shifted to the right) by $t_d = 0.5\text{ms}$.
    Phase shift is related to time delay by: $\phi = -\omega \times t_d$ (Negative because it's shifted right).
    $$ \phi = -(1000\pi)(0.0005) = -0.5\pi \text{ radians} = -90^\circ $$
4.  **Write the equation:**
    $$ \mathbf{i(t) = 50 \cos(1000\pi t - 90^\circ) \text{ mA}} $$
    *(Which is mathematically equivalent to $50\sin(1000\pi t)$).*

---

### Example 3 — Hard: Power of a Complex Waveform

**Problem:** A non-sinusoidal AC voltage is composed of a DC bias and a sine wave: $v(t) = 10 + 5\cos(100t) \text{ V}$. This voltage is applied across a $4 \, \Omega$ resistor. Find the average power dissipated by the resistor.

**Solution:**
1.  The average power is related to the true RMS voltage squared: $P_{avg} = \frac{V_{\text{rms}}^2}{R}$.
2.  To find the true RMS value of a mixed waveform, you square the components, add their averages, and take the square root:
    $$ V_{\text{rms}} = \sqrt{V_{\text{DC}}^2 + V_{\text{AC\_rms}}^2} $$
3.  Calculate the components:
    $$ V_{\text{DC}} = 10\text{V} $$
    $$ V_{\text{AC\_rms}} = \frac{5}{\sqrt{2}}\text{V} $$
4.  Calculate True RMS:
    $$ V_{\text{rms}}^2 = (10)^2 + \left(\frac{5}{\sqrt{2}}\right)^2 = 100 + \frac{25}{2} = 100 + 12.5 = 112.5 $$
5.  Calculate Power:
    $$ P_{avg} = \frac{112.5}{4} = \mathbf{28.125\text{W}} $$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "AC Fundamentals",
        "icon": "BrainCircuit",
        "description": "Voltages and currents that alternate direction over time."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "The Math: v(t) = Vm cos(ωt + φ)",
        "icon": "Activity",
        "description": "Peak amplitude, angular frequency, and phase shift."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Frequency (f = 1/T)",
        "icon": "Sigma",
        "description": "Hertz (cycles per second). ω = 2πf."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "RMS Value",
        "icon": "Layers",
        "description": "The 'effective' DC voltage for calculating power and heat. V_rms = Vm / √2."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: Capacitors & Inductors",
        "icon": "Target",
        "description": "How do components that store energy react to an ever-changing AC wave?"
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "2", "target": "3", "animated": true},
    {"source": "2", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true}
  ]
}
```
