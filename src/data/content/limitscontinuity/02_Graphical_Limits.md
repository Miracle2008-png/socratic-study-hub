# 2. Graphical Approach to Limits

Understanding limits visually is crucial before attempting complex algebraic manipulations. In engineering fields like digital signal processing, control theory, and circuit design, functions are often represented graphically as signals over time. A function's limit at a point $c$ depends entirely on its behavior *near* $c$, not its actual value *at* $c$. 

Visualizing limits allows engineers to quickly identify system stability, phase changes, and signal discontinuities without getting bogged down in arithmetic.

### Evaluating Limits from a Graph
When looking at the graph of a function $y = f(x)$, evaluating the limit as $x \to c$ means finding the precise y-value that the curve is "aiming" for as you trace the graph along the x-axis from both the left side ($x \to c^-$) and the right side ($x \to c^+$).

There are four primary visual scenarios you will encounter:

#### Scenario A: The Continuous Curve
If the graph passes smoothly through a point $(c, L)$ without any breaks, holes, or sudden jumps, then the limit exists and is equal to the function's explicit value at that point.
$$ \lim_{x \to c} f(x) = f(c) = L $$
*Engineering Context:* A temperature sensor reading warming water. The change is continuous and predictable.

#### Scenario B: The Removable Discontinuity (Hole)
Often, an engineering formula might be mathematically undefined at a specific point $c$ (e.g., division by zero), creating a tiny "hole" in an otherwise smooth graph. However, the curve clearly approaches a specific y-coordinate from both sides.
Even if $f(c)$ is undefined, the limit **still exists**.
$$ \lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = L \implies \lim_{x \to c} f(x) = L $$
*Engineering Context:* A digital sensor drops a single packet of data at time $t=c$. The data point is missing, but by looking at the trajectory from the left and right, the system can reliably interpolate the limit. This highlights the most important rule of limits: **The limit cares about the journey, not the destination.**

#### Scenario C: The Jump Discontinuity
If the graph approaches one y-value from the left side, and a completely different y-value from the right side, the curve experiences a physical "jump." Because the two one-sided trajectories do not agree on a single destination, the overall two-sided limit **does not exist (DNE)**.
$$ \lim_{x \to c^-} f(x) = L_1, \quad \lim_{x \to c^+} f(x) = L_2 $$
$$ L_1 \neq L_2 \implies \lim_{x \to c} f(x) \text{ DNE} $$
*Engineering Context:* The flick of a digital switch or the sudden actuation of a hydraulic valve. At the exact moment of the switch, the signal jumps from $0$ to $5$ Volts. 

#### Scenario D: The Infinite Discontinuity (Asymptote)
If the curve rockets upwards toward infinity ($\infty$) or plunges toward negative infinity ($-\infty$) as $x$ approaches $c$, there is a vertical asymptote.
*Engineering Context:* A mechanical system hitting its resonance frequency, causing oscillations to theoretically approach infinite amplitude, leading to catastrophic failure.

---

### Mathematical Examples

#### Example 1 (Easy): Continuous Function Limit
**Problem:** A robotic arm's velocity $v(t)$ in m/s is plotted over time $t$. The graph is a smooth curve passing through the point $(4, 12.5)$. There are no breaks. Evaluate $\lim_{t \to 4} v(t)$.

**Solution:**
Since the graph is a continuous curve (Scenario A) and smoothly passes through the point where $t = 4$ and $v = 12.5$:
$$ \lim_{t \to 4^-} v(t) = 12.5 $$
$$ \lim_{t \to 4^+} v(t) = 12.5 $$
Therefore, the two-sided limit exists and equals the function's value:
$$ \lim_{t \to 4} v(t) = 12.5 \text{ m/s} $$

#### Example 2 (Medium): Removable Discontinuity Analysis
**Problem:** Consider the piecewise function $g(x)$ defined graphically as a straight line $y = 2x + 1$ everywhere except at $x = 3$, where there is an open hole at $(3, 7)$ and a single solid plotted point at $(3, 10)$ due to a calibration error. Evaluate $g(3)$ and $\lim_{x \to 3} g(x)$.

**Solution:**
1. **The Function Value:** The explicit solid dot is plotted at $(3, 10)$. 
   $$ g(3) = 10 $$
2. **The Limit:** We must trace the graph as $x$ gets arbitrarily close to 3, ignoring the actual dot at $x=3$.
   From the left ($x < 3$), the line $y = 2x + 1$ approaches $2(3)+1 = 7$.
   $$ \lim_{x \to 3^-} g(x) = 7 $$
   From the right ($x > 3$), the line approaches the same hole.
   $$ \lim_{x \to 3^+} g(x) = 7 $$
   Because the left and right limits agree, the overall limit is $7$, despite the function value being $10$.
   $$ \lim_{x \to 3} g(x) = 7 $$

#### Example 3 (Medium): Analyzing a Step Function (Jump)
**Problem:** The Heaviside step function $H(t)$, used extensively in control engineering to model a sudden 1-Volt power-on signal, is defined as:
$$ H(t) = \begin{cases} 0 & \text{for } t < 0 \\ 1 & \text{for } t \ge 0 \end{cases} $$
Evaluate the left-hand limit, right-hand limit, and overall limit at $t = 0$.

**Solution:**
1. **Left-hand limit:** As $t$ approaches $0$ from negative time, the graph sits flat at $0$.
   $$ \lim_{t \to 0^-} H(t) = 0 $$
2. **Right-hand limit:** As $t$ approaches $0$ from positive time, the graph is flat at $1$.
   $$ \lim_{t \to 0^+} H(t) = 1 $$
3. **Overall limit:** Because the left limit ($0$) does not equal the right limit ($1$), they do not align.
   $$ \lim_{t \to 0} H(t) = \text{DNE} $$

#### Example 4 (Hard): Infinite Limits and Asymptotes
**Problem:** The magnetic field strength $B$ at a distance $r$ from a perfectly thin wire is proportional to $\frac{1}{r}$. Analyzing the graph of $f(r) = \frac{1}{r}$, evaluate the limits as $r \to 0^-$ and $r \to 0^+$.

**Solution:**
1. **Approaching from the right ($r \to 0^+$):** As the distance $r$ becomes a tiny positive number (e.g., $0.001$, $0.0001$), $\frac{1}{r}$ becomes a massive positive number ($1000$, $10000$). The graph shoots up.
   $$ \lim_{r \to 0^+} \frac{1}{r} = +\infty $$
2. **Approaching from the left ($r \to 0^-$):** Though physically impossible for distance, mathematically, as $r$ becomes a tiny negative number ($-0.001$), the function plummets downward.
   $$ \lim_{r \to 0^-} \frac{1}{r} = -\infty $$
Because the two sides shoot in opposite infinite directions, the two-sided limit definitively Does Not Exist.

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Graphical Limits",
        "icon": "Eye",
        "description": "Visualizing function behavior near x=c"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Continuous",
        "icon": "Activity",
        "description": "Left = Right = f(c)"
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Removable (Hole)",
        "icon": "Circle",
        "description": "Left = Right ≠ f(c)"
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Jump / Asymptote",
        "icon": "AlertTriangle",
        "description": "Left ≠ Right (DNE)"
      },
      "style": {
        "background": "#991b1b",
        "color": "#fee2e2"
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
      "source": "1",
      "target": "4",
      "animated": true
    }
  ]
}
```
