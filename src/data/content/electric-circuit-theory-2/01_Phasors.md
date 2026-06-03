# Phasor Analysis

## 1. Motivation: The Problem with Time-Domain Sinusoidal Analysis

Consider a circuit driven by sinusoidal sources. Applying KVL in the time domain produces differential equations. For example, a series RL circuit:

$$V_m\cos(\omega t) = R\,i(t) + L\,\frac{di}{dt}$$

Solving this ODE for every circuit would be tedious. **Phasors** provide an algebraic shortcut: they convert differential equations into algebraic equations by exploiting the fact that, in a **linear** circuit with a single-frequency sinusoidal source, every voltage and current is also sinusoidal at the **same frequency** in steady state.

---

## 2. Euler's Formula and Complex Exponentials

The bridge from sinusoids to complex algebra is **Euler's formula**:

$$\boxed{e^{j\theta} = \cos\theta + j\sin\theta}$$

where $j = \sqrt{-1}$ (engineers use $j$ rather than $i$ to avoid confusion with current).

Consequently:

$$\cos\theta = \text{Re}\{e^{j\theta}\}, \qquad \sin\theta = \text{Im}\{e^{j\theta}\}$$

Any sinusoidal voltage can therefore be written:

$$v(t) = V_m\cos(\omega t + \varphi) = \text{Re}\!\left\{V_m e^{j(\omega t+\varphi)}\right\} = \text{Re}\!\left\{V_m e^{j\varphi} e^{j\omega t}\right\}$$

The factor $e^{j\omega t}$ is common to **every** voltage and current at the same frequency and can be suppressed when working in steady state. This is the key insight behind the phasor transform.

---

## 3. The Phasor Transform

### 3.1 Definition

Given a sinusoidal signal $v(t) = V_m\cos(\omega t + \varphi)$, its **phasor** (or frequency-domain) representation is the complex number:

$$\boxed{\mathbf{V} = V_m e^{j\varphi} = V_m\angle\varphi}$$

Equivalently in rectangular form:

$$\mathbf{V} = V_m\cos\varphi + j\,V_m\sin\varphi$$

The inverse transform (recovering the time-domain signal) is:

$$v(t) = \text{Re}\!\left\{\mathbf{V}\,e^{j\omega t}\right\}$$

> **Note:** Some textbooks define the phasor using the RMS amplitude, $\mathbf{V} = V_{\text{rms}}\angle\varphi$. In power engineering the RMS phasor is standard; in circuit analysis the peak-amplitude phasor is common. Always check which convention is being used.

### 3.2 Transform Table

| Time Domain | Phasor Domain |
|-------------|---------------|
| $V_m\cos(\omega t + \varphi)$ | $V_m\angle\varphi$ |
| $V_m\sin(\omega t + \varphi)$ | $V_m\angle(\varphi - 90°)$ |
| $\dfrac{d}{dt}[V_m\cos(\omega t+\varphi)]$ | $j\omega\cdot V_m\angle\varphi$ |
| $\displaystyle\int V_m\cos(\omega t+\varphi)\,dt$ | $\dfrac{1}{j\omega}\cdot V_m\angle\varphi$ |

The differentiation property is crucial: **differentiation in time becomes multiplication by $j\omega$ in the phasor domain**, converting ODEs to algebraic equations.

---

## 4. Polar and Rectangular Representation

A phasor $\mathbf{V} = V_m\angle\varphi$ exists in the complex plane:

$$\mathbf{V} = \underbrace{V_m\cos\varphi}_{a} + j\underbrace{V_m\sin\varphi}_{b}$$

**Conversion formulas:**

$$\text{Rectangular} \to \text{Polar:} \quad V_m = \sqrt{a^2+b^2}, \quad \varphi = \arctan\!\left(\frac{b}{a}\right) \quad (\text{use atan2 for correct quadrant})$$

$$\text{Polar} \to \text{Rectangular:} \quad a = V_m\cos\varphi, \quad b = V_m\sin\varphi$$

---

## 5. Phasor Arithmetic

### 5.1 Addition and Subtraction

Phasor addition/subtraction must be performed in **rectangular form**:

$$\mathbf{V}_1 + \mathbf{V}_2 = (a_1 + a_2) + j(b_1 + b_2)$$

This corresponds to the superposition of sinusoidal waveforms of the same frequency.

### 5.2 Multiplication

In polar form:

$$\mathbf{V}_1 \cdot \mathbf{V}_2 = (V_{m1}\angle\varphi_1)(V_{m2}\angle\varphi_2) = V_{m1}V_{m2}\angle(\varphi_1+\varphi_2)$$

In rectangular form (FOIL, treating $j^2 = -1$):

$$(a_1 + jb_1)(a_2 + jb_2) = (a_1 a_2 - b_1 b_2) + j(a_1 b_2 + a_2 b_1)$$

### 5.3 Division

In polar form:

$$\frac{\mathbf{V}_1}{\mathbf{V}_2} = \frac{V_{m1}}{V_{m2}}\angle(\varphi_1 - \varphi_2)$$

In rectangular form, multiply numerator and denominator by the **complex conjugate** of the denominator:

$$\frac{a_1+jb_1}{a_2+jb_2} = \frac{(a_1+jb_1)(a_2-jb_2)}{a_2^2+b_2^2}$$

### 5.4 Complex Conjugate

$$\mathbf{V}^* = (a+jb)^* = a - jb = V_m\angle(-\varphi)$$

---

## 6. KVL and KCL in the Phasor Domain

Because KVL and KCL are linear relationships and the real part of a sum equals the sum of real parts:

$$\text{Re}\!\left\{\sum_k \mathbf{V}_k e^{j\omega t}\right\} = \sum_k \text{Re}\!\left\{\mathbf{V}_k e^{j\omega t}\right\} = \sum_k v_k(t)$$

it follows that if $\sum_k v_k(t) = 0$ in the time domain, then $\sum_k \mathbf{V}_k = 0$ in the phasor domain.

**KVL (phasor):** $\sum_k \mathbf{V}_k = 0$ around any closed loop.

**KCL (phasor):** $\sum_k \mathbf{I}_k = 0$ at any node.

These are identical in form to DC circuit laws — the entire toolkit of mesh analysis, nodal analysis, superposition, Thévenin/Norton equivalents all apply directly in the phasor domain.

---

## 7. Element Voltage-Current Relations in Phasor Domain

Using the differentiation property and constitutive relations:

### Resistor
$$v_R(t) = R\,i(t) \implies \mathbf{V}_R = R\,\mathbf{I}$$

Current and voltage are **in phase**.

### Inductor
$$v_L(t) = L\,\frac{di}{dt} \implies \mathbf{V}_L = j\omega L\,\mathbf{I}$$

Voltage **leads** current by $90°$ ($j = 1\angle 90°$).

### Capacitor
$$i_C(t) = C\,\frac{dv}{dt} \implies \mathbf{I}_C = j\omega C\,\mathbf{V} \implies \mathbf{V}_C = \frac{\mathbf{I}}{j\omega C} = \frac{-j}{\omega C}\,\mathbf{I}$$

Voltage **lags** current by $90°$.

---

## 8. Worked Examples

### Example 1: Phasor Transform and Inverse

**Given:** $v(t) = 50\cos(377t + 30°)\,\text{V}$ and $i(t) = 20\sin(377t - 15°)\,\text{A}$

**Step 1:** Convert $i(t)$ to cosine: $i(t) = 20\cos(377t - 15° - 90°) = 20\cos(377t - 105°)\,\text{A}$

**Phasors:**
$$\mathbf{V} = 50\angle 30°\,\text{V}, \qquad \mathbf{I} = 20\angle{-105°}\,\text{A}$$

**Rectangular forms:**
$$\mathbf{V} = 50\cos 30° + j50\sin 30° = 43.30 + j25.00\,\text{V}$$
$$\mathbf{I} = 20\cos(-105°) + j20\sin(-105°) = -5.176 - j19.319\,\text{A}$$

---

### Example 2: Adding Two Sinusoids via Phasors

Find $v_s(t) = v_1(t) + v_2(t)$ where:

$$v_1(t) = 10\cos(\omega t + 45°)\,\text{V}, \qquad v_2(t) = 8\cos(\omega t - 30°)\,\text{V}$$

**Phasors:**
$$\mathbf{V}_1 = 10\angle 45° = 7.071 + j7.071\,\text{V}$$
$$\mathbf{V}_2 = 8\angle{-30°} = 6.928 - j4.000\,\text{V}$$

**Sum:**
$$\mathbf{V}_s = (7.071+6.928) + j(7.071-4.000) = 13.999 + j3.071\,\text{V}$$

**Polar form:**
$$V_{sm} = \sqrt{13.999^2 + 3.071^2} = \sqrt{195.97 + 9.43} = \sqrt{205.40} \approx 14.33\,\text{V}$$
$$\varphi_s = \arctan\!\left(\frac{3.071}{13.999}\right) \approx 12.38°$$

**Result:**
$$v_s(t) = 14.33\cos(\omega t + 12.38°)\,\text{V}$$

---

### Example 3: KVL with Phasors in a Series RL Circuit

A series RL circuit ($R = 5\,\Omega$, $L = 10\,\text{mH}$) is driven by $v_s(t) = 100\cos(1000t)\,\text{V}$.

Find the steady-state current $i(t)$.

**Step 1:** Phasor of source: $\mathbf{V}_s = 100\angle 0°\,\text{V}$, $\omega = 1000\,\text{rad/s}$

**Step 2:** Impedances (see Chapter 02):
$$Z_R = 5\,\Omega, \qquad Z_L = j\omega L = j(1000)(0.01) = j10\,\Omega$$

**Step 3:** KVL: $\mathbf{V}_s = \mathbf{I}(Z_R + Z_L)$

$$\mathbf{I} = \frac{\mathbf{V}_s}{Z_R + Z_L} = \frac{100\angle 0°}{5 + j10}$$

**Step 4:** Convert denominator to polar:
$$|5 + j10| = \sqrt{25+100} = \sqrt{125} = 11.18\,\Omega, \quad \angle = \arctan(10/5) = 63.43°$$

$$\mathbf{I} = \frac{100\angle 0°}{11.18\angle 63.43°} = 8.944\angle{-63.43°}\,\text{A}$$

**Step 5:** Inverse transform:
$$i(t) = 8.944\cos(1000t - 63.43°)\,\text{A}$$

The current lags the voltage by $63.43°$ due to the inductive impedance.

---

### Example 4: Superposition of Sources in Phasor Domain

A circuit has two mesh equations (from KVL):

$$10\,\mathbf{I}_1 - 5\,\mathbf{I}_2 = 50\angle 0°$$
$$-5\,\mathbf{I}_1 + (5+j4)\,\mathbf{I}_2 = 0$$

**Solve** using Cramer's rule:

$$\Delta = \begin{vmatrix} 10 & -5 \\ -5 & 5+j4 \end{vmatrix} = 10(5+j4) - (-5)(-5) = 50+j40-25 = 25+j40$$

$$|\Delta| = \sqrt{625+1600} = \sqrt{2225} \approx 47.17, \quad \angle\Delta = \arctan(40/25) = 57.99°$$

$$\mathbf{I}_1 = \frac{\begin{vmatrix}50 & -5 \\ 0 & 5+j4\end{vmatrix}}{\Delta} = \frac{50(5+j4)}{25+j40} = \frac{250+j200}{25+j40}$$

Numerator: $|250+j200| = \sqrt{62500+40000} = \sqrt{102500} \approx 320.16$, $\angle = \arctan(200/250) = 38.66°$

$$\mathbf{I}_1 = \frac{320.16\angle 38.66°}{47.17\angle 57.99°} = 6.786\angle{-19.33°}\,\text{A}$$

---

## 9. Phasor Diagram

A **phasor diagram** is a graphical representation in the complex plane showing relative magnitudes and phase angles of phasors. For the series RL example above:

- $\mathbf{V}_R = R\,\mathbf{I} = 5\times 8.944\angle{-63.43°} = 44.72\angle{-63.43°}\,\text{V}$
- $\mathbf{V}_L = j\omega L\,\mathbf{I} = j10\times 8.944\angle{-63.43°} = 89.44\angle{26.57°}\,\text{V}$
- $\mathbf{V}_s = \mathbf{V}_R + \mathbf{V}_L = 100\angle 0°\,\text{V}$ ✓

The vectors $\mathbf{V}_R$, $\mathbf{V}_L$, and $\mathbf{V}_s$ form a right triangle in the complex plane, confirming the 90° relationship between resistive and inductive voltage drops.
