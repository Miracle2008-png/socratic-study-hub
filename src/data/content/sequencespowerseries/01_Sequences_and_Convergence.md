# Sequences and Convergence in Engineering

In calculus and engineering mathematics, we often transition from analyzing continuous functions—such as analog signals or fluid flow—to studying discrete lists of numbers. This transition is fundamental in modern digital systems. A continuous-time signal $x(t)$ becomes a discrete-time sequence $x[n]$ when sampled by an Analog-to-Digital Converter (ADC). Understanding how these discrete sequences behave, and specifically whether they converge, forms the foundation for digital signal processing (DSP), control systems, and numerical methods.

## 1. Defining a Sequence

A **sequence** is an ordered list of numbers, mathematically represented as a mapping from the natural numbers to the real (or complex) numbers:
$$ a_1, a_2, a_3, a_4, \dots, a_n, \dots $$
The numbers $a_n$ are called the *terms* of the sequence, and $n$ is the discrete *index*. In engineering, $n$ often represents discrete time steps or iteration counts.

A sequence can be defined by an explicit formula for the $n$-th term, often modeling a sampled signal:
*   $a_n = \frac{n}{n+1} \implies \frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \dots$

Alternatively, it can be defined recursively, which is how discrete dynamical systems and feedback loops operate (where the next state depends on the previous state):
*   $a_1 = 1, \quad a_n = 0.5 a_{n-1} + 2 \implies 1, 2.5, 3.25, 3.625, \dots$

## 2. The Concept of Convergence and Divergence

The most critical question regarding a sequence in any engineering application is: **What is its steady-state behavior as $n \to \infty$?**
Does a structural vibration damp out to zero? Does a numerical root-finding algorithm (like Newton-Raphson) lock onto a stable solution, or does the error blow up?

*   **Convergence:** If the terms $a_n$ arbitrarily approach a single, finite, real number $L$ as $n$ grows infinitely large, the sequence converges to $L$. In control theory, this represents a system reaching a stable steady-state.
    $$ \lim_{n \to \infty} a_n = L $$

*   **Divergence:** If the terms do not approach a single finite number, the sequence diverges. This implies instability. Divergence can occur if the terms grow unboundedly (e.g., resonance destroying a bridge) or if they oscillate endlessly without settling.

## 3. Limit Laws and The Squeeze Theorem

For convergent sequences $\lim a_n = A$ and $\lim b_n = B$, the standard linear operations apply:
*   $\lim (a_n \pm b_n) = A \pm B$
*   $\lim (c \cdot a_n) = c \cdot A$
*   $\lim (a_n \cdot b_n) = A \cdot B$
*   $\lim \frac{a_n}{b_n} = \frac{A}{B}$ (provided $B \neq 0$)

### The Squeeze Theorem
In engineering, you often cannot compute the exact trajectory of a complex non-linear system, but you can bound its behavior between a "worst-case" and "best-case" envelope. 
If $b_n \le a_n \le c_n$ for all $n > N$, and $\lim_{n \to \infty} b_n = L = \lim_{n \to \infty} c_n$, then the inner sequence is "squeezed" to the same limit:
$$ \lim_{n \to \infty} a_n = L $$

## 4. Monotonic Sequence Theorem

A sequence is *increasing* if $a_{n+1} \ge a_n$ and *decreasing* if $a_{n+1} \le a_n$. It is *bounded above* if $a_n \le M$ and *bounded below* if $a_n \ge m$.

**The Monotonic Sequence Theorem:**
> Every bounded, monotonic sequence must converge.

This is a profoundly reassuring theorem in numerical methods. If an algorithm's error strictly decreases with each iteration (monotonic) and cannot drop below zero (bounded below), you are guaranteed that it converges to *some* limit.

---

## Worked Examples

### Example 1: Easy - Convergence of a Rational Sequence
**Problem:** Determine if the sequence representing the transient response of a discrete RC circuit, given by $a_n = \frac{4n^2 - 3n + 1}{2n^2 + 5}$, converges or diverges. If it converges, find its limit.

**Step-by-Step Solution:**
1. To evaluate the limit as $n \to \infty$, divide the numerator and denominator by the highest power of $n$ found in the denominator, which is $n^2$.
$$ \lim_{n \to \infty} \frac{4n^2 - 3n + 1}{2n^2 + 5} = \lim_{n \to \infty} \frac{\frac{4n^2}{n^2} - \frac{3n}{n^2} + \frac{1}{n^2}}{\frac{2n^2}{n^2} + \frac{5}{n^2}} $$
2. Simplify the terms:
$$ \lim_{n \to \infty} \frac{4 - \frac{3}{n} + \frac{1}{n^2}}{2 + \frac{5}{n^2}} $$
3. As $n \to \infty$, the terms with $n$ in the denominator approach zero:
$$ \frac{4 - 0 + 0}{2 + 0} = \frac{4}{2} = 2 $$
**Conclusion:** The sequence converges to $2$. The system reaches a steady-state value of 2.

### Example 2: Medium - Applying the Squeeze Theorem to a Damped Signal
**Problem:** A digital sensor records a damped vibrational signal represented by the sequence $x_n = \frac{(-1)^n \cos(n \pi / 4)}{n^2}$. Prove that the signal converges to zero as time $n \to \infty$.

**Step-by-Step Solution:**
1. The sequence contains oscillating terms $(-1)^n$ and $\cos(n \pi / 4)$, making direct limit evaluation tricky. We use the Squeeze Theorem.
2. Observe that the numerator is bounded. The cosine function always outputs values between $-1$ and $1$. The $(-1)^n$ term just flips the sign but doesn't change the magnitude bound.
$$ -1 \le (-1)^n \cos\left(\frac{n\pi}{4}\right) \le 1 $$
3. Divide the entire inequality by the positive denominator $n^2$:
$$ -\frac{1}{n^2} \le \frac{(-1)^n \cos\left(\frac{n\pi}{4}\right)}{n^2} \le \frac{1}{n^2} $$
4. Evaluate the limits of the outer bounds as $n \to \infty$:
$$ \lim_{n \to \infty} \left(-\frac{1}{n^2}\right) = 0 \quad \text{and} \quad \lim_{n \to \infty} \left(\frac{1}{n^2}\right) = 0 $$
**Conclusion:** Since the upper and lower bounding sequences both converge to 0, by the Squeeze Theorem, the sequence $x_n$ also converges to 0. The vibration successfully damps out.

### Example 3: Hard - Monotonic Sequence Theorem on a Feedback Loop
**Problem:** Consider an iterative feedback control system where the output at step $n$ is defined recursively as $a_1 = \sqrt{2}$, and $a_{n+1} = \sqrt{2 + a_n}$. Prove that the system's output converges, and find its steady-state limit.

**Step-by-Step Solution:**
1. **Show Boundedness:** We hypothesize the sequence is bounded above by 2. Let's prove it by induction.
   * Base case: $a_1 = \sqrt{2} \approx 1.414 < 2$. (True)
   * Inductive step: Assume $a_k < 2$. Then $a_{k+1} = \sqrt{2 + a_k} < \sqrt{2 + 2} = \sqrt{4} = 2$.
   * Thus, the sequence is bounded above by 2.
2. **Show Monotonicity:** Let's show it is increasing, $a_{n+1} > a_n$.
   * We need $\sqrt{2 + a_n} > a_n \implies 2 + a_n > a_n^2 \implies a_n^2 - a_n - 2 < 0$.
   * Factoring gives $(a_n - 2)(a_n + 1) < 0$. Since $a_n > 0$ and $a_n < 2$ (proved above), this inequality holds. The sequence is strictly increasing.
3. **Invoke Theorem & Solve:** Since it's bounded above and increasing, it *must* converge to some limit $L$.
   * Take the limit of the recursive formula: $\lim_{n \to \infty} a_{n+1} = \lim_{n \to \infty} \sqrt{2 + a_n}$
   * Which gives $L = \sqrt{2 + L}$.
   * Squaring both sides: $L^2 = 2 + L \implies L^2 - L - 2 = 0 \implies (L-2)(L+1)=0$.
   * Since terms are positive, $L$ cannot be $-1$.
**Conclusion:** The sequence converges to $L = 2$. The feedback loop stabilizes perfectly at 2.

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Sequences & Sampling",
        "icon": "Activity",
        "description": "Discrete representations of continuous signals."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Infinite Series",
        "icon": "Layers",
        "description": "Summation of discrete sequences over time."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Convergence Analysis",
        "icon": "Filter",
        "description": "Evaluating system stability and limits."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Transforms & Expansions",
        "icon": "Zap",
        "description": "Z-transforms and Power Series."
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
      "source": "2",
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
