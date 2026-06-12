# Concept Drills: Series, Convergence, and Taylor Polynomials in Engineering

Test your conceptual understanding of infinite sequences and power series applied to engineering contexts.

## Conceptual Questions

1.  **Convergence vs. System Stability:** In discrete-time control systems, the system response can often be modeled as an infinite series $y[n] = \sum_{k=0}^{\infty} h[k]x[n-k]$. If $h[k]$ converges to 0 as $k \to \infty$, does this guarantee that the system is bounded-input bounded-output (BIBO) stable? Explain using series convergence concepts.
2.  **Taylor Series in AC Circuits:** When analyzing the non-linear voltage-current characteristic of a diode $I = I_s(e^{V/(nV_T)} - 1)$ for very small AC signals, engineers often use a linear approximation. How does this relate to Taylor Series, and what does the error of this approximation depend on?
3.  **Alternating Series in Signal Processing:** You are designing a digital filter whose coefficients alternate in sign and decrease in magnitude. Why does the Alternating Series Estimation Theorem provide a powerful tool for truncating this filter without exceeding a specific error tolerance?
4.  **Radius of Convergence in Thermodynamics:** Suppose the partition function of a thermodynamic system is expressed as a power series in terms of inverse temperature $\beta$. If the series converges for $\beta > \beta_c$ and diverges for $\beta < \beta_c$, what physical phenomenon might occur at $\beta = \beta_c$? Explain in terms of the radius of convergence.
5.  **Ratio Test vs. Root Test:** Why might an electrical engineer prefer the Root Test over the Ratio Test when determining the region of convergence (ROC) for the Z-transform of a signal $x[n]$ defined by $X(z) = \sum_{n=0}^{\infty} x[n] z^{-n}$ where $x[n]$ involves $n$-th powers?

## Analytical Problems

1.  **AC Circuit Steady-State Response:** The voltage response of an RLC circuit to a periodic non-sinusoidal input is expressed as a Fourier series. Consider a simplified high-frequency response where the amplitude of the $n$-th harmonic is $V_n = \frac{120 \cdot (-1)^{n+1}}{n \sqrt{n^2 + 4\omega^2}}$. Determine whether the total power, proportional to $\sum_{n=1}^{\infty} V_n^2$, is finite (i.e., whether the series converges). Show rigorous proof.
2.  **Mechanical Error Tolerance (Taylor Polynomials):** A mechanical linkage involves a component whose displacement is governed by $f(x) = \ln(1+x)$ where $x$ is the applied force in kN. The system is designed to use the 3rd-degree Maclaurin polynomial $P_3(x)$ to compute this displacement in real-time. Find $P_3(x)$ and use Taylor's Inequality to determine the maximum possible error in this calculation for forces up to $x = 0.2$ kN. Does it meet the strict engineering tolerance of $10^{-4}$?
3.  **Control System Ratio Test:** The error signal in a discrete-time feedback loop follows the series $E = \sum_{n=1}^{\infty} \frac{n^3 2^n}{(2n)!} z^n$. Find the radius of convergence for this series to determine the range of the complex variable $z$ for which the error signal remains finite.
4.  **Thermodynamic Integral Test:** The density of states in a specific crystalline structure leads to a specific heat contribution proportional to $\sum_{n=2}^{\infty} \frac{1}{n \ln(n)^p}$. Using the Integral Test, determine the values of the parameter $p$ for which the total specific heat remains finite at high temperatures.
5.  **Electromagnetic Field Expansion:** The magnetic field intensity $H(r)$ at a distance $r$ from a complex antenna array is modeled as a power series: $H(r) = \sum_{n=0}^{\infty} \frac{(-1)^n r^{2n}}{4^n (n!)^2}$. Identify the familiar function this series represents, and determine its radius of convergence.

---

## Solutions

### Conceptual Solutions

1.  **No.** The sequence of impulse responses $h[k] \to 0$ is analogous to the sequence of terms in a series going to zero. As seen in the Harmonic Series $\sum \frac{1}{n}$, terms can approach zero while the sum diverges. For BIBO stability, we require the series $\sum |h[k]|$ to converge (absolute summability).
2.  **Linearization.** The linear approximation is the first-order Taylor polynomial (or Maclaurin series if centered at $V=0$). Specifically, $I \approx I_s \left(1 + \frac{V}{nV_T} - 1\right) = \frac{I_s}{nV_T}V$. The error (the remainder $R_1(V)$) depends on the second derivative of the characteristic curve evaluated at some point in the interval, and on $V^2$. Thus, it is only valid for "small signals."
3.  **Error Bounds.** The Alternating Series Estimation Theorem states that the truncation error $|R_N| = |S - S_N| \le b_{N+1}$, where $b_{N+1}$ is the magnitude of the first neglected term. This allows the engineer to know exactly how many filter taps (terms) are needed to guarantee the truncation error is strictly below a given specification.
4.  **Phase Transition.** The critical value $\beta_c$ corresponds to the boundary of the radius of convergence. In physics, singularities or divergences at the radius of convergence often indicate a phase transition (where the mathematical model of a single phase breaks down).
5.  **Z-Transform ROC.** The Z-transform contains $z^{-n}$. When $x[n]$ involves powers like $a^n$, taking the $n$-th root via the Root Test ($\lim \sqrt[n]{|x[n] z^{-n}|}$) directly simplifies the expression by neutralizing the $n$-th powers, making it mathematically cleaner and faster to find the ROC than the Ratio Test.

### Analytical Solutions

1.  **Convergence of Total Power:**
    We are testing the convergence of $\sum_{n=1}^{\infty} V_n^2$.
    $$ V_n^2 = \left( \frac{120 \cdot (-1)^{n+1}}{n \sqrt{n^2 + 4\omega^2}} \right)^2 = \frac{14400}{n^2(n^2 + 4\omega^2)} $$
    To test for convergence, use the Limit Comparison Test with the known convergent p-series $b_n = \frac{1}{n^4}$ ($p=4 > 1$).
    $$ \lim_{n \to \infty} \frac{V_n^2}{b_n} = \lim_{n \to \infty} \frac{\frac{14400}{n^2(n^2 + 4\omega^2)}}{\frac{1}{n^4}} = \lim_{n \to \infty} \frac{14400 n^4}{n^4 + 4\omega^2 n^2} $$
    Dividing numerator and denominator by $n^4$:
    $$ \lim_{n \to \infty} \frac{14400}{1 + \frac{4\omega^2}{n^2}} = 14400 $$
    Since the limit is a positive finite constant ($0 < 14400 < \infty$), both series share the same fate. Since $\sum \frac{1}{n^4}$ converges, the power series **converges**, meaning the total high-frequency power is strictly finite.

2.  **Mechanical Error Tolerance (Taylor Polynomials):**
    First, find $P_3(x)$ for $f(x) = \ln(1+x)$ at $x=0$:
    $$ f(x) = \ln(1+x) \implies f(0) = 0 $$
    $$ f'(x) = (1+x)^{-1} \implies f'(0) = 1 $$
    $$ f''(x) = -(1+x)^{-2} \implies f''(0) = -1 $$
    $$ f'''(x) = 2(1+x)^{-3} \implies f'''(0) = 2 $$
    $$ P_3(x) = 0 + 1x - \frac{1}{2!}x^2 + \frac{2}{3!}x^3 = x - \frac{x^2}{2} + \frac{x^3}{3} $$
    Next, bound the error $R_3(x)$ for $x \in [0, 0.2]$. By Taylor's Inequality:
    $$ |R_3(x)| \le \frac{M}{4!} |x|^4 $$
    where $M \ge |f^{(4)}(c)|$ for all $c \in [0, 0.2]$.
    $$ f^{(4)}(x) = -6(1+x)^{-4} = \frac{-6}{(1+x)^4} $$
    The maximum absolute value of $f^{(4)}(x)$ on $[0, 0.2]$ occurs at $x=0$ (since the denominator grows for $x>0$):
    $$ M = \left| \frac{-6}{(1+0)^4} \right| = 6 $$
    Plugging this in to find the maximum error at $x=0.2$:
    $$ |R_3(0.2)| \le \frac{6}{24} (0.2)^4 = \frac{1}{4} (0.0016) = 0.0004 $$
    The maximum error is $4 \times 10^{-4}$. Since $0.0004 > 10^{-4}$, the linkage design **does not meet** the strict engineering tolerance of $10^{-4}$.

3.  **Control System Ratio Test:**
    We are given $\sum_{n=1}^{\infty} a_n$ where $a_n = \frac{n^3 2^n}{(2n)!} z^n$. Apply the Ratio Test:
    $$ L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = \lim_{n \to \infty} \left| \frac{(n+1)^3 2^{n+1} z^{n+1}}{(2(n+1))!} \cdot \frac{(2n)!}{n^3 2^n z^n} \right| $$
    Simplify the factorials and exponents:
    $$ L = \lim_{n \to \infty} \left| \frac{(n+1)^3}{n^3} \cdot 2 \cdot z \cdot \frac{(2n)!}{(2n+2)(2n+1)(2n)!} \right| $$
    $$ L = \lim_{n \to \infty} \left| \left(1+\frac{1}{n}\right)^3 \cdot \frac{2z}{(2n+2)(2n+1)} \right| $$
    As $n \to \infty$, the first term approaches $1^3 = 1$, and the denominator of the second term approaches infinity. Thus:
    $$ L = |z| \cdot 0 = 0 $$
    Since $L = 0 < 1$ for *all* complex values of $z$, the series converges everywhere. The radius of convergence is **$R = \infty$**.

4.  **Thermodynamic Integral Test:**
    We evaluate the convergence of $\sum_{n=2}^{\infty} \frac{1}{n \ln(n)^p}$ using the Integral Test:
    $$ \int_{2}^{\infty} \frac{1}{x (\ln x)^p} dx $$
    Let $u = \ln x \implies du = \frac{1}{x} dx$. The limits become $\ln 2$ to $\infty$.
    $$ \int_{\ln 2}^{\infty} \frac{1}{u^p} du $$
    This is a standard p-integral.
    - If $p = 1$: $\int \frac{1}{u} du = \left[ \ln u \right] \to \infty$ (Diverges).
    - If $p > 1$: $\int u^{-p} du = \left[ \frac{u^{1-p}}{1-p} \right] \to 0 - \frac{(\ln 2)^{1-p}}{1-p}$ (Converges).
    - If $p < 1$: The term $u^{1-p}$ goes to $\infty$ (Diverges).
    Therefore, the total specific heat remains finite only for **$p > 1$**.

5.  **Electromagnetic Field Expansion:**
    Given $H(r) = \sum_{n=0}^{\infty} \frac{(-1)^n r^{2n}}{4^n (n!)^2}$. Notice that $4^n = 2^{2n}$. We can rewrite this as:
    $$ H(r) = \sum_{n=0}^{\infty} \frac{(-1)^n}{(n!)^2} \left(\frac{r}{2}\right)^{2n} $$
    This is the standard Maclaurin series definition for the **Bessel function of the first kind of order 0, $J_0(r)$**.
    To find the radius of convergence, use the Ratio Test on $a_n = \frac{(-1)^n r^{2n}}{2^{2n} (n!)^2}$:
    $$ L = \lim_{n \to \infty} \left| \frac{r^{2(n+1)}}{2^{2(n+1)} ((n+1)!)^2} \cdot \frac{2^{2n} (n!)^2}{r^{2n}} \right| $$
    $$ L = \lim_{n \to \infty} \left| \frac{r^2}{2^2} \cdot \frac{1}{(n+1)^2} \right| = \frac{r^2}{4} \cdot 0 = 0 $$
    Because $L = 0$ for all $r$, the radius of convergence is **$R = \infty$**.


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Engineering Series",
        "icon": "BrainCircuit",
        "description": "Series in Engineering Contexts"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "AC Circuit Response",
        "icon": "Activity",
        "description": "Power via convergence."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Convergence Tests",
        "icon": "ArrowRightCircle",
        "description": "Ratio, Limit & Integral tests."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Error Tolerances",
        "icon": "Settings",
        "description": "Taylor & Truncation bounds."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    }
  ],
  "edges": [
    {
      "source": "1",
      "target": "2",
      "animated": true
    },
    {
      "source": "1",
      "target": "3",
      "animated": true
    },
    {
      "source": "3",
      "target": "4",
      "animated": true
    }
  ]
}
```
