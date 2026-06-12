# 9. Resonance and Filters

## The Magic Frequency

We have seen that an inductor's impedance ($\mathbf{Z}_L = j\omega L$) increases with frequency, while a capacitor's impedance ($\mathbf{Z}_C = -j/\omega C$) decreases with frequency. 

Because one is purely positive-imaginary and the other is purely negative-imaginary, what happens if we connect them in series?
At low frequencies, the capacitor dominates. At high frequencies, the inductor dominates. But at exactly one magical frequency, their impedances will be perfectly equal in magnitude and opposite in sign. 

This frequency is called the **Resonant Frequency ($\omega_0$)**.
$$ j\omega_0 L = \frac{j}{\omega_0 C} $$
Solving for $\omega_0$:
$$ \omega_0 = \frac{1}{\sqrt{LC}} \text{ (rad/s)} \implies f_0 = \frac{1}{2\pi\sqrt{LC}} \text{ (Hz)} $$

At resonance in a series RLC circuit, $\mathbf{Z}_L$ and $\mathbf{Z}_C$ perfectly cancel each other out ($+jX - jX = 0$). The total impedance of the circuit drops to just $\mathbf{Z}_{eq} = R$. This means the circuit allows maximum current to flow *only* at this specific frequency!

---

## Filters

By strategically placing Resistors, Capacitors, and Inductors, engineers can create circuits that manipulate specific frequencies:

1.  **Low-Pass Filter (LPF):** Allows frequencies below a "cutoff" frequency to pass, and blocks high frequencies. (Often built with an RC circuit taking the output across C).
2.  **High-Pass Filter (HPF):** Allows frequencies above a cutoff to pass, blocking low frequencies and DC. (Often built with an RC circuit taking the output across R).
3.  **Band-Pass Filter (BPF):** Allows only a narrow "band" of frequencies to pass. This is achieved using a Resonant RLC circuit.
4.  **Band-Stop (Notch) Filter:** Blocks only a specific narrow band of frequencies, allowing everything else to pass.

### Quality Factor ($Q$)
In a resonant Band-Pass filter, the **Quality Factor ($Q$)** measures how "sharp" or "narrow" the filter is. A high $Q$ means the filter is extremely picky and only lets a razor-thin band of frequencies through.
$$ Q = \frac{\omega_0 L}{R} $$

---

## Engineering Applications

*   **Tuning a Radio:** When you turn the dial on an old FM radio to $101.1\text{MHz}$, you are physically turning a knob that changes the distance between plates inside a Variable Capacitor. You are changing $C$ so that the resonant equation $1/(2\pi\sqrt{LC})$ exactly equals $101,100,000 \text{ Hz}$. The antenna is bombarded by thousands of radio stations simultaneously, but the BPF circuit ensures that only the $101.1\text{MHz}$ signal creates a large current; all other stations are blocked.
*   **Audio Equalizers:** A 10-band graphic equalizer on a stereo is literally just 10 different resonant band-pass filters, each tuned to a different acoustic frequency (e.g., $60\text{Hz}$, $250\text{Hz}$, $1\text{kHz}$, $10\text{kHz}$). The sliders simply change the resistance $R$ for that specific filter, increasing or decreasing the volume of that specific frequency band.

---

## Worked Examples

### Example 1 — Easy: Finding the Resonant Frequency

**Problem:** An AM radio receiver uses an inductor of $1\text{mH}$ and a tuning capacitor set to $100\text{pF}$. What frequency (in kHz) is the radio currently tuned to?

**Solution:**
1.  **Use the resonant frequency formula:**
    $$ f_0 = \frac{1}{2\pi\sqrt{LC}} $$
2.  **Substitute the values:**
    $L = 1 \times 10^{-3} \text{ H}$
    $C = 100 \times 10^{-12} \text{ F} = 10^{-10} \text{ F}$
3.  **Calculate:**
    $$ LC = (10^{-3}) \times (10^{-10}) = 10^{-13} $$
    $$ \sqrt{LC} = \sqrt{10 \times 10^{-14}} = \sqrt{10} \times 10^{-7} \approx 3.16 \times 10^{-7} $$
    $$ f_0 = \frac{1}{2\pi (3.16 \times 10^{-7})} = \frac{1}{1.98 \times 10^{-6}} \approx \mathbf{503,000 \text{ Hz (503 kHz)}} $$

---

### Example 2 — Medium: Series Resonance Cancellation

**Problem:** A $10 \angle 0^\circ \text{ V}$ source drives a series RLC circuit where $R = 5 \, \Omega$, $L = 20\text{mH}$, and $C = 50\mu\text{F}$. 
(A) Find the resonant angular frequency $\omega_0$. 
(B) Find the total current $\mathbf{I}$ flowing at resonance.
(C) Find the voltage across the inductor at resonance.

**Solution:**
**(A) Find $\omega_0$:**
$$ \omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{0.02 \times 0.00005}} = \frac{1}{\sqrt{0.000001}} = \frac{1}{0.001} = \mathbf{1000 \text{ rad/s}} $$

**(B) Find Total Current $\mathbf{I}$ at $\omega_0$:**
At resonance, the impedance of the inductor ($\mathbf{Z}_L = j(1000)(0.02) = j20$) perfectly cancels the impedance of the capacitor ($\mathbf{Z}_C = -j/(1000 \times 0.00005) = -j20$).
The total impedance is just $R$.
$$ \mathbf{Z}_{eq} = 5 \, \Omega $$
$$ \mathbf{I} = \frac{\mathbf{V}}{\mathbf{Z}_{eq}} = \frac{10 \angle 0^\circ}{5} = \mathbf{2 \angle 0^\circ \text{ A}} $$

**(C) Find Voltage across Inductor ($\mathbf{V}_L$):**
By Ohm's Law: $\mathbf{V}_L = \mathbf{I} \times \mathbf{Z}_L$
$$ \mathbf{V}_L = (2 \angle 0^\circ) \times (j20) = (2 \angle 0^\circ) \times (20 \angle 90^\circ) = \mathbf{40 \angle 90^\circ \text{ V}} $$
*(Wait! The source is only $10\text{V}$, but the voltage across the inductor is $40\text{V}$! This is the dangerous magic of resonance—voltages across internal components can massively multiply and destroy the circuit, even though they perfectly cancel out from the perspective of the source!)*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Resonance & Filters",
        "icon": "BrainCircuit",
        "description": "Manipulating specific frequencies while ignoring others."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Frequency Dependence",
        "icon": "Activity",
        "description": "Z_L grows with frequency. Z_C shrinks with frequency."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Resonant Frequency (ω0)",
        "icon": "Sigma",
        "description": "ω0 = 1 / √(LC). The point where Z_L perfectly cancels Z_C."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Filters",
        "icon": "Layers",
        "description": "Low-Pass, High-Pass, Band-Pass, and Notch."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Quality Factor (Q)",
        "icon": "Wrench",
        "description": "How 'sharp' or picky the filter is. Higher Q = narrower frequency band."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: AC Thévenin",
        "icon": "Target",
        "description": "Expanding the black-box theorem to include Complex Impedances and Impedance Matching."
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
