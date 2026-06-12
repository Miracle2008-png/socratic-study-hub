# 6. Limits at Infinity & Horizontal Asymptotes

Instead of asking what happens to $f(x)$ as $x$ approaches a specific number, engineering analysis frequently asks what happens to a system over a long period of time, or as variables grow without bound. This is the concept of a **limit at infinity**.

Engineers use limits at infinity to determine the **steady-state behavior** of dynamic systems:
*   **Aerospace Engineering:** What is the terminal velocity of a falling mass experiencing air resistance?
*   **Electrical Engineering:** To what voltage does a capacitor fully charge after the switch is closed for a "long" time?
*   **Civil Engineering:** How does a structural vibration dampen out over infinite time?

### Evaluating Limits at Infinity
We evaluate the behavior of $f(x)$ as $x \to \infty$ or $x \to -\infty$. 

If the function eventually settles down and approaches a single finite value $L$ as $x$ gets infinitely large, we write:
$$\lim_{x \to \infty} f(x) = L$$
In this case, the horizontal line $y = L$ is called a **horizontal asymptote**. This represents the equilibrium state of the system.

### Fundamental Rule of Limits at Infinity
For any rational number $r > 0$:
$$ \lim_{x \to \infty} \frac{1}{x^r} = 0 $$
*(Example: as $x$ gets massive, $1/x$ gets closer and closer to $0$. A fraction with a constant numerator and an exploding denominator vanishes).*

### The Shortcut Rule for Rational Functions
When dealing with rational functions (polynomial over polynomial), comparing the highest degree of the numerator ($n$) and the denominator ($m$) offers a fast path to the solution:
1. **$n = m$**: The limit is the ratio of their leading coefficients.
2. **$n < m$**: The limit is $0$ (the denominator dominates).
3. **$n > m$**: The limit is $\pm\infty$ (no horizontal asymptote; the numerator dominates).

---

### Worked Examples

#### Example 1 (Easy): Terminal Velocity (Equal Degrees)
The velocity $v(t)$ of a skydiver after $t$ seconds, accounting for air drag, can sometimes be approximated by a rational function if modeled empirically:
**Evaluate:** $\lim_{t \to \infty} \frac{50t^2 - 10t + 5}{t^2 + 2}$

**Step-by-Step Solution:**
1. The highest power of $t$ in the denominator is $t^2$. Divide all terms in the numerator and denominator by $t^2$:
   $$ \lim_{t \to \infty} \frac{\frac{50t^2}{t^2} - \frac{10t}{t^2} + \frac{5}{t^2}}{\frac{t^2}{t^2} + \frac{2}{t^2}} $$
2. Simplify the expressions:
   $$ = \lim_{t \to \infty} \frac{50 - \frac{10}{t} + \frac{5}{t^2}}{1 + \frac{2}{t^2}} $$
3. Apply the fundamental rule. As $t \to \infty$, any term with $t$ in the denominator goes to 0:
   $$ = \frac{50 - 0 + 0}{1 + 0} = \frac{50}{1} = 50 $$
4. The system has a horizontal asymptote at $v = 50$ m/s, representing the steady-state terminal velocity.

#### Example 2 (Medium): RC Circuit Charging (Exponential Decay)
The voltage $V(t)$ across a capacitor in an RC circuit charging from a DC source $V_0$ is given by:
$$ V(t) = V_0 \left(1 - e^{-\frac{t}{RC}}\right) $$
**Evaluate the limit as $t \to \infty$.**

**Step-by-Step Solution:**
1. Set up the limit:
   $$ \lim_{t \to \infty} V_0 \left(1 - e^{-\frac{t}{RC}}\right) $$
2. Analyze the exponential term. As $t \to \infty$, the exponent $-\frac{t}{RC}$ approaches $-\infty$.
3. We know that $e^{-\infty} \to 0$. Therefore:
   $$ \lim_{t \to \infty} e^{-\frac{t}{RC}} = 0 $$
4. Substitute this back into the equation:
   $$ V_0 (1 - 0) = V_0 $$
5. The capacitor eventually charges to the exact voltage of the source $V_0$.

#### Example 3 (Hard): Limits with Radicals (Signal Attenuation)
Determine the steady-state value of a modified signal response governed by:
**Evaluate:** $\lim_{x \to \infty} \frac{\sqrt{9x^2 + 2}}{4x - 3}$

**Step-by-Step Solution:**
1. The highest power in the denominator is $x^1$. However, inside the square root in the numerator, the highest power is $x^2$. Since $\sqrt{x^2} = x$ (for positive $x$), the effective degree of both numerator and denominator is $1$.
2. Divide numerator and denominator by $x$. Because we are approaching $+\infty$, $x$ is positive, so we can bring it into the square root as $x^2$:
   $$ \lim_{x \to \infty} \frac{\frac{\sqrt{9x^2 + 2}}{x}}{\frac{4x - 3}{x}} = \lim_{x \to \infty} \frac{\sqrt{\frac{9x^2}{x^2} + \frac{2}{x^2}}}{4 - \frac{3}{x}} $$
3. Simplify:
   $$ \lim_{x \to \infty} \frac{\sqrt{9 + \frac{2}{x^2}}}{4 - \frac{3}{x}} $$
4. As $x \to \infty$, $\frac{2}{x^2} \to 0$ and $\frac{3}{x} \to 0$:
   $$ = \frac{\sqrt{9 + 0}}{4 - 0} = \frac{3}{4} $$
5. The signal response asymptotically settles at a ratio of $0.75$. *(Note: if the limit were as $x \to -\infty$, $x$ would be negative, so $x = -\sqrt{x^2}$, which would introduce a negative sign).*

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Observe Expression",
        "icon": "Eye",
        "description": "Identify polynomial degrees or exponentials"
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Compare Degrees",
        "icon": "Scale",
        "description": "n = m, n < m, or n > m"
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Divide by Highest Power",
        "icon": "Activity",
        "description": "Algebraic reduction"
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Evaluate Terms to 0",
        "icon": "CheckCircle",
        "description": "Any 1/x^r goes to zero"
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    }
  ],
  "edges": [
    { "source": "1", "target": "2", "animated": true },
    { "source": "2", "target": "3", "animated": true },
    { "source": "3", "target": "4", "animated": true }
  ]
}
```
