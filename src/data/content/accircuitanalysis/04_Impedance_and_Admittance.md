# 4. Impedance and Admittance

## AC Ohm's Law

We have established that phasors allow us to replace derivatives with $j\omega$. Let's apply this to our three fundamental components: the Resistor, the Inductor, and the Capacitor.

By transforming their time-domain equations into the phasor domain, we create a unified concept called **Impedance ($\mathbf{Z}$)**. Impedance is the AC equivalent of resistance. It restricts current flow, but unlike resistance, it is a *complex number*, meaning it can also shift the phase of the wave.

Ohm's Law in AC becomes:
$$ \mathbf{V} = \mathbf{I} \cdot \mathbf{Z} $$

Where $\mathbf{V}$, $\mathbf{I}$, and $\mathbf{Z}$ are all complex numbers!

---

## Impedance of the Three Components

### 1. Resistor ($R$)
Time domain: $v(t) = R \cdot i(t)$.
Phasor domain: $\mathbf{V} = R \cdot \mathbf{I}$.
$$ \mathbf{Z}_R = R $$
*A resistor's impedance is purely real. It does not shift the phase angle. It restricts current equally at all frequencies.*

### 2. Inductor ($L$)
Time domain: $v(t) = L \frac{di}{dt}$.
Phasor domain: Replace derivative with $j\omega$: $\mathbf{V} = L(j\omega)\mathbf{I}$.
$$ \mathbf{Z}_L = j\omega L $$
*An inductor's impedance is purely imaginary and positive. Because $Z$ scales directly with $\omega$, inductors block high frequencies and let low frequencies pass.*

### 3. Capacitor ($C$)
Time domain: $i(t) = C \frac{dv}{dt}$.
Phasor domain: Replace derivative with $j\omega$: $\mathbf{I} = C(j\omega)\mathbf{V} \implies \mathbf{V} = \frac{1}{j\omega C}\mathbf{I}$.
Recall that $1/j = -j$.
$$ \mathbf{Z}_C = \frac{1}{j\omega C} = -j \frac{1}{\omega C} $$
*A capacitor's impedance is purely imaginary and negative. Because $\omega$ is in the denominator, capacitors block low frequencies (and DC) and let high frequencies pass.*

---

## Admittance ($\mathbf{Y}$)
Sometimes dealing with parallel impedances is messy mathematically ($1/\mathbf{Z}_{eq} = 1/\mathbf{Z}_1 + 1/\mathbf{Z}_2$). 
Engineers define **Admittance ($\mathbf{Y}$)** as the inverse of impedance:
$$ \mathbf{Y} = \frac{1}{\mathbf{Z}} $$
*   **Units:** Siemens (S) or Mhos ($\mho$).
*   Ohm's law becomes $\mathbf{I} = \mathbf{Y} \cdot \mathbf{V}$.
*   When components are in parallel, their admittances simply add: $\mathbf{Y}_{eq} = \mathbf{Y}_1 + \mathbf{Y}_2$.

---

## Engineering Applications

*   **Low-Pass and High-Pass Filters:** By combining a resistor (flat impedance) with a capacitor (impedance drops at high frequencies), audio engineers create filters. A low-pass filter allows the heavy bass drum of a song to reach a subwoofer while blocking the high-pitched cymbals.
*   **Decoupling Capacitors:** On complex motherboards, billions of transistors switching on and off create high-frequency noise on the $5\text{V}$ power rails. Engineers place tiny capacitors right next to microchips. To the high-frequency noise, the capacitor's impedance is nearly zero, acting as a short-circuit to ground and instantly killing the noise, leaving the clean DC voltage (which sees the capacitor as infinite impedance) untouched.

---

## Worked Examples

### Example 1 — Easy: Finding Impedances

**Problem:** A circuit operates at a frequency of $1000 \text{ rad/s}$. Find the impedance $\mathbf{Z}$ of:
A) A $50 \, \Omega$ resistor.
B) A $20 \text{ mH}$ inductor.
C) A $10 \mu\text{F}$ capacitor.

**Solution:**
A) $\mathbf{Z}_R = R = \mathbf{50 \, \Omega}$

B) $\mathbf{Z}_L = j\omega L = j(1000)(20 \times 10^{-3}) = \mathbf{j20 \, \Omega}$

C) $\mathbf{Z}_C = \frac{-j}{\omega C} = \frac{-j}{(1000)(10 \times 10^{-6})} = \frac{-j}{10^{-2}} = \mathbf{-j100 \, \Omega}$

---

### Example 2 — Medium: AC Ohm's Law

**Problem:** A voltage source $\mathbf{V} = 10 \angle 0^\circ \text{ V}$ is connected across the $20 \text{ mH}$ inductor from Example 1. Find the resulting current phasor $\mathbf{I}$, and write the time-domain equation for the current.

**Solution:**
1.  From Ex 1, $\mathbf{Z}_L = j20 \, \Omega$.
2.  Convert to polar form for division: $j20 = 20 \angle 90^\circ \, \Omega$.
3.  Use AC Ohm's Law ($\mathbf{I} = \mathbf{V} / \mathbf{Z}$):
    $$ \mathbf{I} = \frac{10 \angle 0^\circ}{20 \angle 90^\circ} $$
    *(To divide polar numbers, divide the magnitudes and subtract the angles).*
    $$ \mathbf{I} = 0.5 \angle (0^\circ - 90^\circ) = \mathbf{0.5 \angle -90^\circ \text{ A}} $$
4.  Write in time domain:
    $$ \mathbf{i(t) = 0.5\cos(1000t - 90^\circ) \text{ A}} $$
    *Notice the current lags the voltage by $90^\circ$. ELI the ICE man: Voltage (E) leads Current (I) in an Inductor (L)!*

---

### Example 3 — Hard: Series Equivalent Impedance

**Problem:** A $10 \, \Omega$ resistor, a $15 \text{ mH}$ inductor, and a $100 \mu\text{F}$ capacitor are all connected in series. The source frequency is $\omega = 1000 \text{ rad/s}$. Find the total equivalent impedance $\mathbf{Z}_{eq}$ of the circuit in both rectangular and polar forms.

**Solution:**
1.  Calculate individual impedances:
    $$ \mathbf{Z}_R = 10 \, \Omega $$
    $$ \mathbf{Z}_L = j\omega L = j(1000)(0.015) = j15 \, \Omega $$
    $$ \mathbf{Z}_C = \frac{-j}{\omega C} = \frac{-j}{(1000)(100 \times 10^{-6})} = \frac{-j}{0.1} = -j10 \, \Omega $$
2.  Since they are in series, add them (Rectangular form is best for addition):
    $$ \mathbf{Z}_{eq} = \mathbf{Z}_R + \mathbf{Z}_L + \mathbf{Z}_C $$
    $$ \mathbf{Z}_{eq} = 10 + j15 - j10 $$
    $$ \mathbf{Z}_{eq} = \mathbf{10 + j5 \, \Omega \text{ (Rectangular)}} $$
3.  Convert to Polar form:
    Magnitude: $|\mathbf{Z}_{eq}| = \sqrt{10^2 + 5^2} = \sqrt{100 + 25} = \sqrt{125} \approx 11.18 \, \Omega$
    Phase angle: $\phi = \tan^{-1}(5/10) = \tan^{-1}(0.5) \approx 26.57^\circ$
    $$ \mathbf{Z}_{eq} = \mathbf{11.18 \angle 26.57^\circ \, \Omega \text{ (Polar)}} $$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Impedance (Z)",
        "icon": "BrainCircuit",
        "description": "AC equivalent of resistance. Measured in Ohms, but as a Complex Number."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Resistor (R)",
        "icon": "Activity",
        "description": "Z = R. Real. Frequency independent."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Inductor (L)",
        "icon": "Sigma",
        "description": "Z = jωL. Imaginary (+). Blocks high frequencies."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Capacitor (C)",
        "icon": "Layers",
        "description": "Z = -j/(ωC). Imaginary (-). Blocks low frequencies."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "AC Ohm's Law",
        "icon": "Wrench",
        "description": "V = I × Z. Every DC rule (KVL, KCL, Nodal) now works for AC!"
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: AC Power",
        "icon": "Target",
        "description": "If Voltage and Current are out of phase, what happens to Power? Meet Real and Reactive power."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "1", "target": "3", "animated": true},
    {"source": "1", "target": "4", "animated": true},
    {"source": "2", "target": "5", "animated": true},
    {"source": "3", "target": "5", "animated": true},
    {"source": "4", "target": "5", "animated": true},
    {"source": "5", "target": "6", "animated": true}
  ]
}
```
