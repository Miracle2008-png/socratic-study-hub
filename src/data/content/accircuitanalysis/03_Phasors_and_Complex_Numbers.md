# 3. Phasors and Complex Numbers

## Escaping Calculus in AC Circuits

If you connect a sine-wave AC voltage source to a circuit containing resistors, capacitors, and inductors, the math becomes a nightmare. Because of the $C(dv/dt)$ and $L(di/dt)$ components, you end up with a system of coupled differential equations containing sines and cosines. 

In 1893, electrical engineer Charles Proteus Steinmetz realized a profound mathematical trick using **Euler's Formula**. He proved that if all sources operate at the exact same frequency $\omega$, you can replace all the sine waves with **Complex Numbers**, and the differential equations collapse back into simple algebra (Ohm's Law)!

---

## Euler's Formula and The Phasor

Euler's formula links trigonometry to the complex plane:
$$ e^{j\theta} = \cos\theta + j\sin\theta $$
*(Note: Engineers use $j = \sqrt{-1}$ instead of $i$, because $i$ is reserved for current).*

A sine wave $v(t) = V_m \cos(\omega t + \phi)$ can be viewed as the real part of a spinning vector in the complex plane: $V_m e^{j(\omega t + \phi)}$.

Since every voltage and current in the circuit is spinning at the exact same frequency $\omega$, we can just factor out the $e^{j\omega t}$ term and ignore it! All that remains is the amplitude $V_m$ and the phase angle $\phi$.

This constant complex number is called a **Phasor**.
$$ \mathbf{V} = V_m e^{j\phi} = V_m \angle \phi $$

### Time Domain vs. Phasor Domain
*   **Time Domain:** $v(t) = 170 \cos(377t + 45^\circ) \text{ V}$
*   **Phasor Domain:** $\mathbf{V} = 170 \angle 45^\circ \text{ V}$

---

## Complex Number Arithmetic

To use Phasors, you must be comfortable switching between **Polar** and **Rectangular** forms.
*   **Polar Form ($V_m \angle \phi$):** Best for Multiplication and Division.
*   **Rectangular Form ($x + jy$):** Best for Addition and Subtraction.

**Converting Polar to Rectangular:**
$$ x = V_m \cos(\phi) $$
$$ y = V_m \sin(\phi) $$

**Converting Rectangular to Polar:**
$$ V_m = \sqrt{x^2 + y^2} $$
$$ \phi = \tan^{-1}\left(\frac{y}{x}\right) $$

**The Magic of $j$:**
Multiplying a phasor by $j$ rotates it by exactly $+90^\circ$ counterclockwise. 
Dividing by $j$ (which is the same as multiplying by $-j$) rotates it by $-90^\circ$ clockwise.

---

## Engineering Applications

*   **AC Circuit Simulators:** When SPICE runs an AC sweep analysis on a filter circuit, it never actually calculates time-domain sine waves. It converts the entire circuit into complex matrices and solves purely using phasor algebra, which is exponentially faster for computers.
*   **Three-Phase Power:** The entire global power grid uses three AC sine waves, each offset by $120^\circ$. Engineers represent the grid mathematically as $\mathbf{V}_A = 120 \angle 0^\circ$, $\mathbf{V}_B = 120 \angle -120^\circ$, and $\mathbf{V}_C = 120 \angle 120^\circ$. By adding these phasors, they instantly prove that the sum of all three phases perfectly cancels out to zero, eliminating the need for massive return wires on transmission towers.

---

## Worked Examples

### Example 1 — Easy: Time to Phasor Conversion

**Problem:** Convert the following currents into their Phasor representations.
A) $i_1(t) = 10\cos(50t + 30^\circ) \text{ A}$
B) $i_2(t) = 5\sin(50t - 20^\circ) \text{ A}$

**Solution:**
A) The wave is already a cosine. Extract the amplitude and phase:
$$ \mathbf{I_1} = \mathbf{10 \angle 30^\circ \text{ A}} $$

B) The wave is a sine. We must convert it to cosine by subtracting $90^\circ$.
$i_2(t) = 5\cos(50t - 20^\circ - 90^\circ) = 5\cos(50t - 110^\circ) \text{ A}$.
$$ \mathbf{I_2} = \mathbf{5 \angle -110^\circ \text{ A}} $$

---

### Example 2 — Medium: Adding Two AC Waves

**Problem:** Two voltages in series are given by $v_1(t) = 50\cos(10t) \text{ V}$ and $v_2(t) = 30\cos(10t + 60^\circ) \text{ V}$. Find the total voltage $v_{total}(t) = v_1(t) + v_2(t)$. 

*(Note: Adding cosines algebraically requires brutal trigonometric identities. Phasors make it easy).*

**Solution:**
1.  **Convert to Phasors:**
    $$ \mathbf{V_1} = 50 \angle 0^\circ $$
    $$ \mathbf{V_2} = 30 \angle 60^\circ $$
2.  **Convert to Rectangular (since we are adding):**
    $$ \mathbf{V_1} = 50\cos(0) + j50\sin(0) = 50 + j0 $$
    $$ \mathbf{V_2} = 30\cos(60^\circ) + j30\sin(60^\circ) = 15 + j25.98 $$
3.  **Add them:**
    $$ \mathbf{V_{total}} = (50 + 15) + j(0 + 25.98) = 65 + j25.98 $$
4.  **Convert back to Polar:**
    $$ V_m = \sqrt{65^2 + 25.98^2} = \sqrt{4225 + 674.96} = \sqrt{4899.96} \approx 70\text{V} $$
    $$ \phi = \tan^{-1}\left(\frac{25.98}{65}\right) \approx 21.8^\circ $$
    $$ \mathbf{V_{total}} = 70 \angle 21.8^\circ $$
5.  **Convert back to Time Domain:**
    $$ \mathbf{v_{total}(t) = 70\cos(10t + 21.8^\circ) \text{ V}} $$

---

### Example 3 — Hard: Deriving the Derivative Shortcut

**Problem:** Using Euler's formula representation $v(t) = V_m e^{j(\omega t + \phi)}$, prove that taking the derivative of a voltage in the time domain is mathematically identical to multiplying its phasor by $j\omega$.

**Solution:**
1.  Write the time domain voltage as a complex exponential:
    $$ v(t) = \mathbf{V} e^{j\omega t} $$ 
    *(where $\mathbf{V} = V_m e^{j\phi}$ is the constant phasor).*
2.  Take the derivative with respect to time ($t$):
    $$ \frac{dv(t)}{dt} = \frac{d}{dt} \left[ \mathbf{V} e^{j\omega t} \right] $$
3.  Since $\mathbf{V}$ is a constant, it pulls out. By the chain rule, the derivative of $e^{j\omega t}$ brings down a $j\omega$:
    $$ \frac{dv(t)}{dt} = \mathbf{V} \cdot (j\omega) e^{j\omega t} = (j\omega \mathbf{V}) e^{j\omega t} $$
4.  Drop the spinning $e^{j\omega t}$ term to find the new phasor representation:
    $$ \text{Phasor}\left( \frac{dv}{dt} \right) = \mathbf{j\omega \mathbf{V}} $$
*(This brilliant proof is why we can eliminate calculus in AC circuits! Every time you see a derivative, just multiply by $j\omega$.)*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "The Phasor Domain",
        "icon": "BrainCircuit",
        "description": "Transforming brutal AC calculus into simple complex algebra."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Time Domain",
        "icon": "Activity",
        "description": "v(t) = Vm cos(ωt + φ)"
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Phasor Transformation",
        "icon": "Sigma",
        "description": "Drop the ωt. Keep the Amplitude and Phase."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Phasor Domain",
        "icon": "Layers",
        "description": "V = Vm ∠ φ"
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Complex Arithmetic",
        "icon": "Wrench",
        "description": "Use Polar for Multiply/Divide. Use Rectangular for Add/Subtract."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Impedance",
        "icon": "Target",
        "description": "Applying Phasors to Capacitors and Inductors to create AC Ohm's Law."
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
