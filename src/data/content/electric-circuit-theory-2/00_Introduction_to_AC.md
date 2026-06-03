# Introduction to Alternating Current (AC) Signals

## 1. What is an AC Signal?

An **alternating current (AC)** signal is one whose amplitude and direction vary periodically with time, in contrast to direct current (DC), which maintains a constant polarity. The vast majority of electrical power generation and distribution worldwide uses AC, and the analysis of AC circuits forms the foundation of electrical engineering.

The canonical AC voltage signal is the **sinusoidal waveform**:

$$v(t) = V_m \cos(\omega t + \varphi)$$

where:

| Symbol | Name | Unit |
|--------|------|------|
| $V_m$ | Peak (maximum) amplitude | Volts (V) |
| $\omega$ | Angular frequency | Radians per second (rad/s) |
| $t$ | Time | Seconds (s) |
| $\varphi$ | Initial phase angle | Radians or degrees (°) |

Similarly, an AC current is written:

$$i(t) = I_m \cos(\omega t + \theta)$$

---

## 2. Period, Frequency, and Angular Frequency

### 2.1 Period

The **period** $T$ is the time required for the waveform to complete exactly one full cycle:

$$v(t + T) = v(t) \quad \text{for all } t$$

Substituting into the cosine expression:

$$V_m \cos\!\bigl(\omega(t+T) + \varphi\bigr) = V_m \cos(\omega t + \varphi)$$

Since cosine repeats every $2\pi$:

$$\omega T = 2\pi \implies T = \frac{2\pi}{\omega}$$

### 2.2 Frequency

The **frequency** $f$ is the number of complete cycles per second:

$$f = \frac{1}{T} \quad [\text{Hz} = \text{s}^{-1}]$$

### 2.3 Angular Frequency

The relationship between angular frequency, frequency, and period:

$$\boxed{\omega = 2\pi f = \frac{2\pi}{T}}$$

In most power systems, $f = 50\,\text{Hz}$ (Europe, Asia, Africa) or $f = 60\,\text{Hz}$ (Americas), giving:

$$\omega_{50} = 2\pi(50) \approx 314.16\,\text{rad/s}, \qquad \omega_{60} = 2\pi(60) \approx 376.99\,\text{rad/s}$$

---

## 3. Phase Angle

The **phase** $\varphi$ determines the horizontal shift of the waveform on the time axis.

For two sinusoids at the same frequency:

$$v_1(t) = V_{m1}\cos(\omega t + \varphi_1), \qquad v_2(t) = V_{m2}\cos(\omega t + \varphi_2)$$

- If $\varphi_1 > \varphi_2$: $v_1$ **leads** $v_2$ by $(\varphi_1 - \varphi_2)$
- If $\varphi_1 < \varphi_2$: $v_1$ **lags** $v_2$ by $(\varphi_2 - \varphi_1)$
- If $\varphi_1 = \varphi_2$: the signals are **in phase**
- If $|\varphi_1 - \varphi_2| = 180°$: the signals are **in antiphase** (phase opposition)

> **Convention:** All sinusoids must be expressed in the same trigonometric form (all cosines or all sines) before comparing phases. Use the identity $\sin(\theta) = \cos(\theta - 90°)$ to convert.

### Worked Example: Phase Comparison

Given:

$$v_1(t) = 10\cos(\omega t + 60°), \qquad v_2(t) = 8\sin(\omega t + 30°)$$

Convert $v_2$ to cosine form:

$$v_2(t) = 8\cos(\omega t + 30° - 90°) = 8\cos(\omega t - 60°)$$

Phase difference: $\Delta\varphi = 60° - (-60°) = 120°$. Therefore $v_1$ **leads** $v_2$ by $120°$.

---

## 4. RMS (Root Mean Square) Value

### 4.1 Definition

The **root mean square** value of a periodic signal $v(t)$ with period $T$ is:

$$V_{\text{rms}} = \sqrt{\frac{1}{T}\int_0^T v^2(t)\,dt}$$

This quantity is also called the **effective value** because it equals the DC voltage that would deliver the same average power to a resistive load.

### 4.2 Derivation for a Sinusoidal Signal

Let $v(t) = V_m\cos(\omega t + \varphi)$. Then:

$$V_{\text{rms}}^2 = \frac{1}{T}\int_0^T V_m^2\cos^2(\omega t + \varphi)\,dt$$

Using the identity $\cos^2\theta = \frac{1 + \cos 2\theta}{2}$:

$$V_{\text{rms}}^2 = \frac{V_m^2}{T}\int_0^T \frac{1 + \cos\bigl(2(\omega t+\varphi)\bigr)}{2}\,dt$$

The integral of $\cos(2(\omega t+\varphi))$ over a full period is zero, leaving:

$$V_{\text{rms}}^2 = \frac{V_m^2}{T}\cdot\frac{T}{2} = \frac{V_m^2}{2}$$

$$\boxed{V_{\text{rms}} = \frac{V_m}{\sqrt{2}} \approx 0.7071\,V_m}$$

> **Example:** The standard household voltage in Europe is $230\,\text{V}_{\text{rms}}$, corresponding to a peak value of $V_m = 230\sqrt{2} \approx 325\,\text{V}$.

### 4.3 RMS of a General Waveform

For a square wave with amplitude $V_m$: $V_{\text{rms}} = V_m$.

For a triangle wave with peak $V_m$: $V_{\text{rms}} = V_m/\sqrt{3}$.

For a half-wave rectified sine: $V_{\text{rms}} = V_m/2$.

| Waveform | $V_{\text{rms}}$ |
|----------|-----------------|
| Sinusoid | $V_m/\sqrt{2}$ |
| Square wave | $V_m$ |
| Triangle wave | $V_m/\sqrt{3}$ |
| Half-wave rectified sine | $V_m/2$ |
| Full-wave rectified sine | $V_m/\sqrt{2}$ |

---

## 5. Average Power Delivered by an AC Source

The average power delivered to a resistor $R$ by a sinusoidal voltage $v(t) = V_m\cos(\omega t)$:

$$P = \frac{1}{T}\int_0^T \frac{v^2(t)}{R}\,dt = \frac{V_{\text{rms}}^2}{R} = \frac{V_m^2}{2R}$$

This confirms the interpretation of $V_{\text{rms}}$ as the equivalent DC voltage for power delivery.

---

## 6. Why AC is Used in Power Systems

### 6.1 Efficient Long-Distance Transmission

Power loss in a transmission line with resistance $R_{\text{line}}$ and current $I$ is:

$$P_{\text{loss}} = I^2 R_{\text{line}}$$

For a given power delivery $P = V \cdot I\cos\theta$, increasing the voltage $V$ decreases the required current $I$, which **quadratically** reduces $P_{\text{loss}}$. Transformers — which operate only on AC — allow voltage levels to be changed with very high efficiency (>99%).

### 6.2 Transformers

A transformer steps voltage up or down according to the turns ratio:

$$\frac{V_2}{V_1} = \frac{N_2}{N_1}$$

and correspondingly steps current in the inverse ratio:

$$\frac{I_2}{I_1} = \frac{N_1}{N_2}$$

High-voltage transmission (100 kV–765 kV) is impractical with DC without expensive power electronics; transformers make it trivial with AC.

### 6.3 AC Generator (Alternator) Simplicity

A rotating coil in a magnetic field naturally produces a sinusoidal EMF:

$$\mathcal{E}(t) = N B A \omega \sin(\omega t)$$

where $N$ = number of turns, $B$ = flux density, $A$ = coil area, $\omega$ = rotational angular frequency. This is the direct physical origin of sinusoidal AC generation.

### 6.4 Three-Phase Advantages

Three-phase AC (discussed in Chapter 06) provides:
- Constant instantaneous power (no pulsation)
- More efficient use of conductors
- Self-starting rotating magnetic fields for motors

---

## 7. Summary of Key Relationships

$$\boxed{v(t) = V_m\cos(\omega t + \varphi), \quad \omega = 2\pi f = \frac{2\pi}{T}, \quad V_{\text{rms}} = \frac{V_m}{\sqrt{2}}}$$

---

## 8. Worked Examples

### Example 1: Extract Parameters

Given $v(t) = 15\cos(1000\pi t - 45°)\,\text{V}$, find $V_m$, $\omega$, $f$, $T$, $\varphi$, and $V_{\text{rms}}$.

**Solution:**

$$V_m = 15\,\text{V}$$
$$\omega = 1000\pi \approx 3141.6\,\text{rad/s}$$
$$f = \frac{\omega}{2\pi} = \frac{1000\pi}{2\pi} = 500\,\text{Hz}$$
$$T = \frac{1}{f} = 2\,\text{ms}$$
$$\varphi = -45°$$
$$V_{\text{rms}} = \frac{15}{\sqrt{2}} \approx 10.607\,\text{V}$$

### Example 2: Power Delivered to a Resistor

A $v(t) = 120\sqrt{2}\cos(2\pi\cdot 60\cdot t)\,\text{V}$ source drives a $R = 20\,\Omega$ resistor. Find the average power.

**Solution:**

$$V_{\text{rms}} = \frac{120\sqrt{2}}{\sqrt{2}} = 120\,\text{V}$$
$$P = \frac{V_{\text{rms}}^2}{R} = \frac{(120)^2}{20} = \frac{14400}{20} = 720\,\text{W}$$

### Example 3: Phase Lead/Lag

Determine which signal leads and by how much:

$$v_1(t) = 4\cos(\omega t + 30°), \qquad v_2(t) = 6\cos(\omega t + 75°)$$

**Solution:** $\varphi_2 - \varphi_1 = 75° - 30° = 45°$. Signal $v_2$ **leads** $v_1$ by $45°$ (equivalently, $v_1$ **lags** $v_2$ by $45°$).
