# 10. AC Thévenin's Theorem

## The Complex Black Box

In the DC section, we learned that any linear network of resistors and batteries can be replaced by a single voltage source ($V_{th}$) and a single resistor ($R_{th}$).

Because AC circuits using phasors are perfectly linear, **Thévenin's Theorem applies exactly the same way to AC circuits!**
Any network of AC sources, resistors, capacitors, and inductors can be collapsed into:
1.  A single Phasor Voltage Source ($\mathbf{V}_{th}$)
2.  A single Complex Impedance ($\mathbf{Z}_{th}$)

**The Method remains identical:**
1.  **$\mathbf{V}_{th}$:** Open the load terminals and calculate the phasor voltage across them.
2.  **$\mathbf{Z}_{th}$:** Turn off independent sources (short voltage sources, open current sources) and calculate the equivalent complex impedance looking back into the terminals.

---

## Maximum AC Power Transfer

In DC circuits, to extract the maximum power from a source, you must make the load resistance exactly equal to the Thévenin resistance ($R_L = R_{th}$). 

In AC circuits, it is slightly more complicated. Your load has a complex impedance ($\mathbf{Z}_L = R_L + jX_L$), and the source has a complex Thévenin impedance ($\mathbf{Z}_{th} = R_{th} + jX_{th}$).

To extract maximum Real Power ($P$), the load must perfectly cancel out the useless reactive "sloshing" power of the source. If the source is inductive ($+jX_{th}$), the load must be equally capacitive ($-jX_L$).

> **Maximum AC Power Transfer Theorem:** Maximum real power is transferred to the load when the load impedance is the **Complex Conjugate** of the Thévenin impedance.
> $$ \mathbf{Z}_L = \mathbf{Z}_{th}^* $$
> This means: $R_L = R_{th}$ AND $X_L = -X_{th}$.

When this condition is met, the maximum real power transferred is:
$$ P_{\text{max}} = \frac{|\mathbf{V}_{th}|^2}{4R_{th}} $$

---

## Engineering Applications

*   **Antenna Matching Networks:** A Wi-Fi transmitter chip might have a Thévenin output impedance of $\mathbf{Z}_{th} = 20 - j15 \, \Omega$ (resistive and capacitive). To get the absolute maximum range on the Wi-Fi signal, the antenna connected to it must have an impedance of exactly $\mathbf{Z}_L = 20 + j15 \, \Omega$ (resistive and inductive). If it doesn't, engineers build an "Impedance Matching Network" of capacitors and inductors between the chip and the antenna to perfectly sculpt the impedance to match the complex conjugate.
*   **Audio Amplifier Design:** When plugging headphones into a DAC (Digital-to-Analog Converter), the output impedance of the DAC and the impedance of the headphones must be matched to maximize power transfer without distorting the frequency response.

---

## Worked Examples

### Example 1 — Medium: AC Thévenin Equivalent

**Problem:** An AC circuit operates at $\omega = 100 \text{ rad/s}$. A voltage source $\mathbf{V}_s = 10 \angle 0^\circ \text{ V}$ is in series with a $4 \, \Omega$ resistor. This combination is in parallel with a $0.03\text{H}$ inductor. Terminals A and B are across the inductor. Find $\mathbf{V}_{th}$ and $\mathbf{Z}_{th}$.

**Solution:**
**1. Find $\mathbf{V}_{th}$ (Open-Circuit Voltage):**
The inductor's impedance is $\mathbf{Z}_L = j(100)(0.03) = j3 \, \Omega$.
Because terminals A and B are open, this is a simple series voltage divider.
$$ \mathbf{V}_{th} = \mathbf{V}_s \times \frac{\mathbf{Z}_L}{R + \mathbf{Z}_L} = (10 \angle 0^\circ) \times \frac{j3}{4 + j3} $$
Convert $4 + j3$ to polar: $\sqrt{16+9} \angle \tan^{-1}(3/4) = 5 \angle 36.87^\circ$.
Convert $j3$ to polar: $3 \angle 90^\circ$.
$$ \mathbf{V}_{th} = (10 \angle 0^\circ) \times \frac{3 \angle 90^\circ}{5 \angle 36.87^\circ} = 10 \times 0.6 \angle (90^\circ - 36.87^\circ) = \mathbf{6 \angle 53.13^\circ \text{ V}} $$

**2. Find $\mathbf{Z}_{th}$ (Equivalent Impedance):**
Turn off the voltage source (short circuit). Look into terminals A and B. The $4 \, \Omega$ resistor and the $j3 \, \Omega$ inductor are now perfectly in parallel.
$$ \mathbf{Z}_{th} = \frac{R \times \mathbf{Z}_L}{R + \mathbf{Z}_L} = \frac{4 \times j3}{4 + j3} = \frac{j12}{4 + j3} $$
Convert to polar to divide: $j12 = 12 \angle 90^\circ$. Denominator is $5 \angle 36.87^\circ$.
$$ \mathbf{Z}_{th} = \frac{12 \angle 90^\circ}{5 \angle 36.87^\circ} = \mathbf{2.4 \angle 53.13^\circ \, \Omega} $$
*(In rectangular form: $\mathbf{Z}_{th} = 2.4\cos(53.13) + j2.4\sin(53.13) = \mathbf{1.44 + j1.92 \, \Omega}$)*.

---

### Example 2 — Hard: Complex Conjugate Matching

**Problem:** You are given the circuit from Example 1, where the Thévenin equivalent is $\mathbf{V}_{th} = 6 \angle 53.13^\circ \text{ V}$ and $\mathbf{Z}_{th} = 1.44 + j1.92 \, \Omega$.
You must connect a load $\mathbf{Z}_L$ across terminals A and B to extract maximum average power.
(A) What should $\mathbf{Z}_L$ be?
(B) What is the maximum average power extracted?

**Solution:**
**(A) Find $\mathbf{Z}_L$:**
By the Maximum AC Power Transfer Theorem, the load must be the complex conjugate of the source impedance.
$$ \mathbf{Z}_L = \mathbf{Z}_{th}^* = \mathbf{1.44 - j1.92 \, \Omega} $$
*(You would build this load using a $1.44 \, \Omega$ resistor in series with a capacitor that has a reactance of $-j1.92 \, \Omega$ at $\omega=100$).*

**(B) Calculate Maximum Power:**
When matched, the reactive parts ($+j1.92$ and $-j1.92$) perfectly cancel out. The total impedance of the loop is just $R_{th} + R_L = 1.44 + 1.44 = 2.88 \, \Omega$ (purely resistive).
Use the maximum power formula:
$$ P_{\text{max}} = \frac{|\mathbf{V}_{th}|^2}{4R_{th}} $$
*(Note: Use only the magnitude of $\mathbf{V}_{th}$, which is $6\text{V}$, and the real part of $\mathbf{Z}_{th}$, which is $1.44 \, \Omega$).*
$$ P_{\text{max}} = \frac{6^2}{4(1.44)} = \frac{36}{5.76} = \mathbf{6.25\text{W}} $$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "AC Thévenin",
        "icon": "BrainCircuit",
        "description": "Simplify any AC network to one V_th and one Z_th."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Find V_th",
        "icon": "Activity",
        "description": "Open circuit voltage using Nodal, Mesh, or Voltage Dividers."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Find Z_th",
        "icon": "Sigma",
        "description": "Turn off sources, look back in to find parallel/series equivalents."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Maximum AC Power",
        "icon": "Layers",
        "description": "Z_load MUST equal Z_th* (the Complex Conjugate)."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Impedance Matching",
        "icon": "Wrench",
        "description": "Cancel the source's inductance with capacitance, and match the resistances."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Transformers",
        "icon": "Target",
        "description": "Using magnetic fields to magically change V, I, and Z without physical contact."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "1", "target": "3", "animated": true},
    {"source": "2", "target": "4", "animated": true},
    {"source": "3", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true},
    {"source": "5", "target": "6", "animated": true}
  ]
}
```
