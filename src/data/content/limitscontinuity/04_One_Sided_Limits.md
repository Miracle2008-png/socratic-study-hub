# 4. One-Sided Limits & Discontinuities

A standard limit $\lim_{x \to c} f(x)$ examines the behavior of a function as $x$ approaches $c$ from *both* directions simultaneously. In pure mathematics, smooth, continuous curves are the norm. However, engineering reality is often abruptly discontinuous. 

Think about an electrical switch being thrown: voltage jumps from $0$ to $5V$ instantaneously. Consider a robotic arm encountering a physical boundary, or a thermal control system (like a thermostat) kicking in at a precise temperature. In these systems, the behavior approaching from the "left" (before the event) is fundamentally different from the behavior approaching from the "right" (after the event).

To mathematically model and analyze these sudden changes, we rely on **one-sided limits**.

### Defining One-Sided Limits

#### Left-Hand Limit
The limit as $x$ approaches $c$ from values strictly less than $c$. We denote this direction with a negative superscript:
$$\lim_{x \to c^-} f(x)$$
In a physical context, this often represents the state of a system *just before* an event occurs.

#### Right-Hand Limit
The limit as $x$ approaches $c$ from values strictly greater than $c$. We denote this with a positive superscript:
$$\lim_{x \to c^+} f(x)$$
This represents the state of a system *immediately after* the event has occurred.

### The Two-Sided Limit Theorem
A fundamental theorem of calculus unifies these concepts: the overall (two-sided) limit exists if and only if both the left-hand and right-hand limits exist and are exactly equal to each other.

$$\lim_{x \to c} f(x) = L \iff \lim_{x \to c^-} f(x) = L \text{ and } \lim_{x \to c^+} f(x) = L$$

If the left and right limits yield different values, we say the two-sided limit **Does Not Exist (DNE)**. In an engineering context, a DNE limit usually indicates a physical shock, a step change, or a discontinuity in the material or system state.

---

### Worked Examples

#### Example 1 (Easy): The Heaviside Step Function
In control theory and signal processing, the Heaviside step function $H(t)$ represents a switch that turns on at time $t = 0$:
$$ H(t) = \begin{cases} 0 & t < 0 \\ 1 & t \ge 0 \end{cases} $$
**Evaluate:** $\lim_{t \to 0} H(t)$

**Step-by-Step Solution:**
1. Check the left-hand limit (approaching from $t < 0$):
   $$ \lim_{t \to 0^-} H(t) = \lim_{t \to 0^-} (0) = 0 $$
2. Check the right-hand limit (approaching from $t > 0$):
   $$ \lim_{t \to 0^+} H(t) = \lim_{t \to 0^+} (1) = 1 $$
3. Compare the two one-sided limits:
   Because $0 \neq 1$, the left-hand limit does not equal the right-hand limit.
   Therefore, $\lim_{t \to 0} H(t)$ **DNE**.

#### Example 2 (Medium): Signal Rectification (Absolute Value)
**Evaluate:** $\lim_{x \to 0} \frac{|x|}{x}$

This function mathematically describes a sign detector or a basic comparator circuit.
**Step-by-Step Solution:**
1. Define the absolute value function piecewise:
   $|x| = x$ if $x > 0$
   $|x| = -x$ if $x < 0$
2. Evaluate the right-hand limit ($x > 0$):
   $$ \lim_{x \to 0^+} \frac{|x|}{x} = \lim_{x \to 0^+} \frac{x}{x} = \lim_{x \to 0^+} 1 = 1 $$
3. Evaluate the left-hand limit ($x < 0$):
   $$ \lim_{x \to 0^-} \frac{|x|}{x} = \lim_{x \to 0^-} \frac{-x}{x} = \lim_{x \to 0^-} -1 = -1 $$
4. Conclusion: Because $1 \neq -1$, the overall limit **DNE**. The system experiences an instantaneous polarity flip.

#### Example 3 (Hard): Piecewise Thermal Control System
A chemical reactor's cooling jacket power $P(T)$ is governed by the reactor's internal temperature $T$ (in degrees Celsius). To prevent thermal runaway, cooling power aggressively ramps up when $T$ reaches 100°C:
$$ P(T) = \begin{cases} \frac{T^2 - 10000}{T - 100} & T < 100 \\ 250 & T > 100 \end{cases} $$

**Evaluate the limit of $P(T)$ as $T$ approaches 100°C.**

**Step-by-Step Solution:**
1. Right-hand approach (approaching from higher temperatures):
   $$ \lim_{T \to 100^+} P(T) = \lim_{T \to 100^+} 250 = 250 \text{ kW} $$
2. Left-hand approach (approaching from lower temperatures):
   Here we have an indeterminate form $\frac{0}{0}$. We must factor the numerator.
   $$ T^2 - 10000 = (T - 100)(T + 100) $$
   $$ \lim_{T \to 100^-} \frac{(T - 100)(T + 100)}{T - 100} = \lim_{T \to 100^-} (T + 100) $$
3. Substitute $T = 100$ into the simplified expression:
   $$ \lim_{T \to 100^-} (T + 100) = 100 + 100 = 200 \text{ kW} $$
4. Conclusion: The left-hand limit is $200$ and the right-hand limit is $250$. Since $200 \neq 250$, the overall limit $\lim_{T \to 100} P(T)$ **DNE**. The cooling system experiences an instantaneous $50 \text{ kW}$ jump at exactly 100°C.

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Identify Limit Target",
        "icon": "Target",
        "description": "Determine the approach point 'c'"
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Left-Hand Limit",
        "icon": "ArrowLeft",
        "description": "Evaluate approaching from x < c"
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Right-Hand Limit",
        "icon": "ArrowRight",
        "description": "Evaluate approaching from x > c"
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Compare Results",
        "icon": "Scale",
        "description": "If Equal: Limit Exists. If Unequal: DNE."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    }
  ],
  "edges": [
    { "source": "1", "target": "2", "animated": true },
    { "source": "1", "target": "3", "animated": true },
    { "source": "2", "target": "4", "animated": true },
    { "source": "3", "target": "4", "animated": true }
  ]
}
```
