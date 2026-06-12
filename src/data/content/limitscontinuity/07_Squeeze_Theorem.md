# 7. The Squeeze (Sandwich) Theorem

## Overview
In the realm of calculus, limits describe the behavior of functions as they approach specific points. However, some functions exhibit wild oscillations, chaotic fluctuations, or simply lack a clean algebraic definition near the point of interest. When direct substitution, factoring, or multiplying by conjugates fail, we turn to the **Squeeze Theorem** (often called the **Sandwich Theorem** or **Pinching Theorem**). 

The underlying principle is elegant and intuitive: if we can "trap" or "squeeze" a complex, unpredictable function between two simpler, well-behaved functions that both converge to the exact same limit, the trapped function is forced to converge to that identical limit. 

## Engineering Context
Why do engineers care about the Squeeze Theorem? In physical systems, we frequently encounter signals or forces that oscillate unpredictably but are bounded by known constraints.
- **Electrical Engineering:** Consider Amplitude Modulation (AM) in radio transmissions, where a high-frequency carrier signal oscillates rapidly but its amplitude is bounded by a slowly varying envelope function. We can determine the signal's behavior as it attenuates by looking at the envelope.
- **Mechanical Vibrations:** A damped harmonic oscillator, such as a car's suspension system hitting a bump, oscillates wildly. However, its displacement is strictly bounded by exponential decay curves ($e^{-at}$ and $-e^{-at}$). We use bounding to guarantee the system returns to equilibrium (a limit of zero).
- **Control Systems:** When designing controllers with uncertainty, engineers might not know the exact mathematical model of a disturbance, but they know its maximum and minimum bounds. Bounding the worst-case scenarios guarantees system stability.

## Formal Definition
Suppose that for all $x$ in an open interval containing $c$ (except possibly at $c$ itself):
$$ g(x) \leq f(x) \leq h(x) $$

If we also establish that the outer bounding functions converge to the same value:
$$ \lim_{x \to c} g(x) = L \quad \text{and} \quad \lim_{x \to c} h(x) = L $$

Then, it is mathematically guaranteed that the inner function must also converge to $L$:
$$ \lim_{x \to c} f(x) = L $$

---

## Worked Examples

### Example 1: The Oscillating Limit (Easy)
**Evaluate:** $\lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right)$

**Solution:**
Direct substitution yields $0 \cdot \sin(\infty)$, which is undefined. The function $\sin(1/x)$ oscillates infinitely fast between $-1$ and $1$ as $x$ approaches $0$, making algebraic evaluation impossible.

1. **Establish the bounds:** We know the fundamental property of the sine function:
   $$ -1 \leq \sin\left(\frac{1}{x}\right) \leq 1 $$

2. **Construct the function:** Multiply all parts of the inequality by $x^2$. Since $x^2 \geq 0$ for all real numbers, the inequality signs remain unchanged:
   $$ -x^2 \leq x^2 \sin\left(\frac{1}{x}\right) \leq x^2 $$
   We now have our "bounding" functions: $g(x) = -x^2$ and $h(x) = x^2$.

3. **Evaluate the limits of the bounds:**
   $$ \lim_{x \to 0} (-x^2) = 0 $$
   $$ \lim_{x \to 0} (x^2) = 0 $$

4. **Conclusion:** Because the lower bound and upper bound both approach $0$, the function trapped between them must also approach $0$.
   $$ \lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right) = 0 $$

---

### Example 2: Damped Signal Attenuation (Medium)
**Evaluate:** $\lim_{t \to \infty} e^{-0.5t} \cos(10t)$

**Solution:**
This models an exponentially damped mechanical or electrical oscillation as time approaches infinity.

1. **Establish the bounds:** The cosine function is naturally bounded:
   $$ -1 \leq \cos(10t) \leq 1 $$

2. **Construct the function:** Multiply the entire inequality by the exponential decay factor $e^{-0.5t}$. Since exponential functions are always positive, the inequality direction is preserved:
   $$ -e^{-0.5t} \leq e^{-0.5t} \cos(10t) \leq e^{-0.5t} $$

3. **Evaluate the limits of the bounds as $t \to \infty$:**
   $$ \lim_{t \to \infty} (-e^{-0.5t}) = 0 $$
   $$ \lim_{t \to \infty} (e^{-0.5t}) = 0 $$

4. **Conclusion:** By the Squeeze Theorem, the heavily oscillating signal must eventually die out completely.
   $$ \lim_{t \to \infty} e^{-0.5t} \cos(10t) = 0 $$

---

### Example 3: Rational Bounds (Hard)
**Evaluate:** $\lim_{x \to \infty} \frac{5x^2 - \sin(3x)}{x^2 + 10}$

**Solution:**
As $x$ approaches infinity, the $\sin(3x)$ term oscillates but remains bounded, while the $x^2$ terms dominate. We must formalize this using the Squeeze Theorem.

1. **Establish the bounds for the oscillating component:**
   $$ -1 \leq \sin(3x) \leq 1 $$
   Multiply by $-1$ (flips inequality, but bounds are symmetric):
   $$ -1 \leq -\sin(3x) \leq 1 $$

2. **Construct the numerator:** Add $5x^2$ to all sides:
   $$ 5x^2 - 1 \leq 5x^2 - \sin(3x) \leq 5x^2 + 1 $$

3. **Construct the full function:** Divide by the denominator $(x^2 + 10)$. Since $x^2 + 10$ is strictly positive, the inequality remains intact:
   $$ \frac{5x^2 - 1}{x^2 + 10} \leq \frac{5x^2 - \sin(3x)}{x^2 + 10} \leq \frac{5x^2 + 1}{x^2 + 10} $$

4. **Evaluate the limits of the bounds:** Use standard limit techniques for rational functions at infinity (divide by highest power of $x$):
   $$ \lim_{x \to \infty} \frac{5x^2 - 1}{x^2 + 10} = \lim_{x \to \infty} \frac{5 - \frac{1}{x^2}}{1 + \frac{10}{x^2}} = \frac{5 - 0}{1 + 0} = 5 $$
   $$ \lim_{x \to \infty} \frac{5x^2 + 1}{x^2 + 10} = \lim_{x \to \infty} \frac{5 + \frac{1}{x^2}}{1 + \frac{10}{x^2}} = \frac{5 + 0}{1 + 0} = 5 $$

5. **Conclusion:** Since both the lower and upper rational bounds converge to 5, the original function must also converge to 5.
   $$ \lim_{x \to \infty} \frac{5x^2 - \sin(3x)}{x^2 + 10} = 5 $$

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Complex Function",
        "icon": "Activity",
        "description": "Hard to evaluate directly due to oscillations."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Establish Bounds",
        "icon": "Minimize2",
        "description": "Find upper g(x) and lower h(x) bounding functions."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Evaluate Limits",
        "icon": "ArrowRightCircle",
        "description": "Show lim g(x) = lim h(x) = L."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Squeeze Theorem",
        "icon": "CheckCircle",
        "description": "Inner function must also equal L."
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
