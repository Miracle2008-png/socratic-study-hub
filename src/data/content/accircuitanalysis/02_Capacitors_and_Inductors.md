# 2. Capacitors and Inductors

## Energy Storage Elements

Resistors only do one thing: they dissipate electrical energy as heat. In contrast, **Capacitors** and **Inductors** are passive components that *store* energy. Because they store energy and release it over time, they are responsible for creating memory, timers, filters, and oscillators in electrical circuits.

Crucially, their behavior involves calculus. Unlike Ohm's Law ($V=IR$), their voltage-current relationships rely on derivatives and integrals.

---

## 1. Capacitors ($C$)

A capacitor consists of two conductive plates separated by an insulating material (dielectric). It stores energy in an **electric field**.
*   **Unit:** Farad (F). Most practical capacitors are in microfarads ($\mu\text{F}$) or picofarads ($\text{pF}$).
*   **The Physics:** It resists changes in *voltage*. If you try to change the voltage across a capacitor instantly, it requires infinite current.

**The Differential Equation:**
The current through a capacitor is proportional to the *rate of change* of the voltage across it.
$$ i(t) = C \frac{dv(t)}{dt} $$

**Energy Stored:**
$$ W = \frac{1}{2} C V^2 $$

---

## 2. Inductors ($L$)

An inductor is simply a coil of wire. It stores energy in a **magnetic field**.
*   **Unit:** Henry (H). Most practical inductors are in millihenries ($\text{mH}$) or microhenries ($\mu\text{H}$).
*   **The Physics:** It resists changes in *current*. If you try to stop the current through an inductor instantly (by opening a switch), it will generate an infinite voltage to keep the current flowing, often creating a spark.

**The Differential Equation:**
The voltage across an inductor is proportional to the *rate of change* of the current through it.
$$ v(t) = L \frac{di(t)}{dt} $$

**Energy Stored:**
$$ W = \frac{1}{2} L I^2 $$

---

## Engineering Applications

*   **Smoothing Capacitors:** In AC-to-DC power supplies (like your laptop charger), the AC wave is converted to a bumpy DC wave. Large capacitors are placed across the output to store energy during the peaks and release it during the valleys, creating a perfectly smooth, flat DC voltage.
*   **Inductive Kickback and Flyback Diodes:** Motors and relays are massive inductors. When a microcontroller turns off a motor, the inductor's magnetic field collapses, trying to force current to keep moving ($v = L \frac{di}{dt}$). This creates a massive negative voltage spike that will destroy the silicon in the microcontroller. Engineers place a "flyback diode" in parallel with the motor to give this dangerous current a safe loop to dissipate.
*   **Touchscreens:** The glass on your smartphone acts as a dielectric. When your finger (a conductor) approaches the screen, it forms a tiny capacitor with the grid beneath the glass. The processor detects this microscopic change in capacitance to pinpoint your touch.

---

## Worked Examples

### Example 1 — Easy: Inductor Voltage

**Problem:** A $5\text{mH}$ inductor has a current flowing through it described by $i(t) = 4t^2 + 2t \text{ A}$. Find the voltage across the inductor at exactly $t = 3\text{s}$.

**Solution:**
1.  Use the inductor equation: $v(t) = L \frac{di}{dt}$.
2.  Take the derivative of the current:
    $$ \frac{di}{dt} = \frac{d}{dt}(4t^2 + 2t) = 8t + 2 \text{ A/s} $$
3.  Evaluate at $t=3$:
    $$ \frac{di}{dt} \Big|_{t=3} = 8(3) + 2 = 26 \text{ A/s} $$
4.  Multiply by the inductance ($L = 5\text{mH} = 0.005\text{H}$):
    $$ v(3) = 0.005 \times 26 = \mathbf{0.13\text{V}} $$

---

### Example 2 — Medium: Capacitor Integral

**Problem:** A $10\mu\text{F}$ capacitor is completely discharged ($V=0\text{V}$) at $t=0$. A constant charging current of $2\text{mA}$ is applied to it for $5\text{ms}$. What is the final voltage across the capacitor, and how much energy is stored inside it?

**Solution:**
1.  Rearrange the capacitor equation to solve for voltage (integration):
    $$ i(t) = C \frac{dv}{dt} \implies dv = \frac{1}{C} i(t) dt \implies v(t) = \frac{1}{C} \int_0^t i(\tau) d\tau + v(0) $$
2.  Substitute the values ($C = 10 \times 10^{-6}\text{F}$, $i = 2 \times 10^{-3}\text{A}$, $v(0) = 0$):
    $$ v(5\text{ms}) = \frac{1}{10 \times 10^{-6}} \int_0^{0.005} (2 \times 10^{-3}) dt $$
3.  Evaluate the integral of a constant:
    $$ v(5\text{ms}) = 100,000 \times [2 \times 10^{-3} \times t]_0^{0.005} $$
    $$ v = 100,000 \times (2 \times 10^{-3} \times 0.005) = 100,000 \times (1 \times 10^{-5}) = \mathbf{1.0\text{V}} $$
    *(The voltage across the capacitor is $1\text{V}$).*
4.  Calculate the stored energy:
    $$ W = \frac{1}{2}CV^2 = \frac{1}{2}(10 \times 10^{-6})(1.0)^2 = \mathbf{5 \mu\text{J}} $$

---

### Example 3 — Hard: Response to a Sine Wave

**Problem:** An AC voltage $v(t) = 12\cos(1000t) \text{ V}$ is applied across a $50\mu\text{F}$ capacitor. Find the equation for the current $i(t)$ flowing through the capacitor. Notice the phase relationship between the voltage and current.

**Solution:**
1.  Use the capacitor equation: $i(t) = C \frac{dv}{dt}$.
2.  Take the derivative of the voltage:
    $$ \frac{dv}{dt} = \frac{d}{dt}(12\cos(1000t)) = -12000\sin(1000t) \text{ V/s} $$
3.  Multiply by Capacitance ($C = 50 \times 10^{-6}\text{F}$):
    $$ i(t) = (50 \times 10^{-6})(-12000\sin(1000t)) = -0.6\sin(1000t) \text{ A} $$
4.  **Phase Analysis:** We standardise by converting $-\sin$ back to $\cos$.
    $-\sin(x) = \cos(x + 90^\circ)$.
    $$ \mathbf{i(t) = 0.6\cos(1000t + 90^\circ) \text{ A}} $$
    *Notice that the current is shifted by $+90^\circ$ relative to the voltage. In a capacitor, **Current Leads Voltage** by $90^\circ$.*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Energy Storage Components",
        "icon": "BrainCircuit",
        "description": "Capacitors and Inductors. The foundation of AC filters and oscillators."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Capacitors (C)",
        "icon": "Activity",
        "description": "Store electric fields. Resists changes in Voltage."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "i = C(dv/dt)",
        "icon": "Sigma",
        "description": "Current leads voltage by 90 degrees in AC."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Inductors (L)",
        "icon": "Layers",
        "description": "Store magnetic fields. Resists changes in Current."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "v = L(di/dt)",
        "icon": "Wrench",
        "description": "Voltage leads current by 90 degrees in AC."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Phasors",
        "icon": "Target",
        "description": "Solving circuit derivatives with sine waves is terrible. We will use Imaginary Numbers to skip the calculus entirely."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "2", "target": "3", "animated": true},
    {"source": "1", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true},
    {"source": "3", "target": "6", "animated": true},
    {"source": "5", "target": "6", "animated": true}
  ]
}
```
