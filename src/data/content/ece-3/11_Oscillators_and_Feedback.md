# 11. Oscillators and Feedback

## Escaping Stability

Up to this point, we have exclusively used **Negative Feedback** (routing the output back to the negative $V_-$ input). Negative feedback enforces stability, control, and precision. It forces the system to settle at a calm equilibrium.

But what happens if you route the output back to the **Positive ($V_+$)** input?
You create **Positive Feedback**. 

If a microscopic noise spike of $+0.001\text{V}$ appears at $V_+$, the Op-Amp amplifies it to $+0.1\text{V}$ at the output. That $+0.1\text{V}$ is fed back into $V_+$, making the input even larger. The Op-Amp amplifies it again to $+10\text{V}$, feeding it back again. Within a fraction of a microsecond, the output violently slams into the power supply rail. 
Positive feedback creates instability. It creates a circuit that desperately wants to flip states.

---

## The Oscillator

If we combine a Positive Feedback loop (to make it flip) with an RC circuit (to delay the flip), we can create a circuit that constantly bounces back and forth between $+V_{CC}$ and $-V_{CC}$ all by itself, forever, with no external input.
This is an **Oscillator**. It generates an AC wave from a flat DC battery!

### The Barkhausen Criterion
To sustain a perfect sine wave oscillation without it dying out or clipping into a square wave, a feedback loop must perfectly satisfy two rules (The Barkhausen Criterion):
1.  **Loop Gain ($A\beta$) = 1:** The amplifier must exactly replace the energy lost in the feedback resistors.
2.  **Phase Shift = 360° (or 0°):** The signal arriving back at the input must be perfectly synchronized with the wave already there.

### The 555 Timer
The most famous chip in electronic history is the **555 Timer**. Inside, it contains a voltage divider, two Op-Amp comparators, a digital flip-flop, and a discharge transistor. By simply attaching one external resistor and one capacitor, you can tune it to oscillate (flash an LED or generate an audio tone) at any frequency you desire.

---

## Engineering Applications

*   **CPU Clocks:** Every computer CPU relies on a microscopic piece of Quartz crystal. When you apply voltage to quartz, it physically vibrates (Piezoelectricity). By placing this vibrating crystal in the feedback loop of an amplifier, it forms a "Crystal Oscillator" that generates a flawlessly precise $3.0\text{GHz}$ square wave. This acts as the metronome that keeps all 15 billion transistors in the CPU marching in sync.
*   **RF Transmitters:** An LC Oscillator (like a Colpitts oscillator) uses a resonating Inductor and Capacitor tank. As energy sloshes back and forth between the magnetic field of the L and the electric field of the C, a transistor amplifier nudges it to keep it from dying. This generates the $2.4\text{GHz}$ sine waves used in Wi-Fi and Bluetooth.

---

## Worked Examples

### Example 1 — Easy: 555 Timer Frequency

**Problem:** A 555 Timer is wired in "Astable" (oscillating) mode. The frequency of the output square wave is governed by the formula:
$$ f = \frac{1.44}{(R_1 + 2R_2)C} $$
You want to build a metronome that clicks exactly twice per second ($f = 2\text{Hz}$). You choose $C = 10 \mu\text{F}$ ($0.00001\text{F}$) and $R_1 = 10 \text{ k}\Omega$. 
Calculate the required value for $R_2$.

**Solution:**
1.  **Rearrange the formula to solve for the resistors:**
    $$ R_1 + 2R_2 = \frac{1.44}{f \times C} $$
2.  **Substitute the knowns:**
    $$ 10,000 + 2R_2 = \frac{1.44}{2 \times 0.00001} $$
    $$ 10,000 + 2R_2 = \frac{1.44}{0.00002} = 72,000 $$
3.  **Solve for $R_2$:**
    $$ 2R_2 = 72,000 - 10,000 = 62,000 $$
    $$ R_2 = \frac{62,000}{2} = \mathbf{31,000 \, \Omega \text{ (31 k}\Omega\text{)}} $$

---

### Example 2 — Medium: Wien Bridge Oscillator Frequency

**Problem:** The Wien Bridge Oscillator uses an Op-Amp to generate incredibly pure audio sine waves. Its oscillation frequency is determined by an RC network in its positive feedback path:
$$ f_0 = \frac{1}{2\pi R C} $$
If you want to generate a standard $440\text{Hz}$ "A4" musical note for tuning a guitar, and you have exactly two $0.01 \mu\text{F}$ capacitors ($C$), what identical value resistors ($R$) must you use?

**Solution:**
1.  **Rearrange to solve for $R$:**
    $$ R = \frac{1}{2\pi f_0 C} $$
2.  **Substitute values:**
    $f_0 = 440\text{Hz}$
    $C = 0.01 \times 10^{-6}\text{F} = 10^{-8}\text{F}$
    $$ R = \frac{1}{2\pi (440) (10^{-8})} $$
3.  **Calculate:**
    $$ R = \frac{1}{2\pi \times 0.0000044} = \frac{1}{0.0000276} \approx \mathbf{36,170 \, \Omega \text{ (36.17 k}\Omega\text{)}} $$

---

### Example 3 — Hard: Barkhausen Loop Gain

**Problem:** For the Wien Bridge Oscillator in Example 2 to sustain a stable sine wave, the Barkhausen criterion states that the loop gain must be exactly 1. 
The RC network on the positive input intrinsically causes a loss, passing only $1/3$ of the signal voltage. 
To compensate, the Op-Amp must be configured as a Non-Inverting Amplifier with a gain of exactly $A_v = 3$.
If the input resistor to ground is $R_1 = 10 \text{ k}\Omega$, what must the feedback resistor $R_f$ be to achieve this exact gain?

**Solution:**
1.  **State the required gain:**
    $$ A_v = 3 $$
2.  **Write the Non-Inverting Amplifier gain formula:**
    $$ A_v = 1 + \frac{R_f}{R_1} $$
3.  **Substitute and solve:**
    $$ 3 = 1 + \frac{R_f}{10,000} $$
    $$ 2 = \frac{R_f}{10,000} $$
    $$ R_f = \mathbf{20,000 \, \Omega \text{ (20 k}\Omega\text{)}} $$
*(If $R_f$ is even $20.1\text{k}\Omega$, the sine wave will grow until it clips and distorts. If it is $19.9\text{k}\Omega$, the sine wave will slowly decay to zero. Perfect oscillation requires a perfect gain of 3!)*

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Positive Feedback",
        "icon": "BrainCircuit",
        "description": "Routing the output back to V+ creates instability and switching."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Oscillators",
        "icon": "Activity",
        "description": "Generating AC waves from a DC battery."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Barkhausen Criterion",
        "icon": "Sigma",
        "description": "Loop Gain = 1, Phase = 360°. The rules for a perfect, sustaining sine wave."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "The 555 Timer",
        "icon": "Layers",
        "description": "The ultimate square-wave generating IC chip."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Next: Concept Drills",
        "icon": "Target",
        "description": "Test your mastery of Semiconductors, Transistors, and Amplifiers."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "2", "target": "3", "animated": true},
    {"source": "2", "target": "4", "animated": true},
    {"source": "3", "target": "5", "animated": true},
    {"source": "4", "target": "5", "animated": true}
  ]
}
```
