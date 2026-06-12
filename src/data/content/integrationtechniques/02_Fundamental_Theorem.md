# 2. The Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus (FTC) is arguably the most profound achievement of 17th-century mathematics. Discovered independently by Isaac Newton and Gottfried Wilhelm Leibniz, it establishes a breathtaking bridge between two seemingly unrelated concepts: calculating instantaneous rates of change (differentiation) and calculating total accumulated areas (integration).

Before the FTC, finding the area under a curve required exhausting geometric approximations (like drawing hundreds of tiny rectangles). The FTC proved that differentiation and integration are essentially inverse operations, unlocking modern engineering analysis.

### Definite Integrals & Area Accumulation

While an indefinite integral yields a *function* (an infinite family of curves separated by $+ C$), a **definite integral** yields a specific *numerical value*. 

Conceptually, a definite integral calculates the exact net area bounded by a curve $y=f(x)$, the x-axis, and the vertical bounds $x=a$ and $x=b$. In engineering, this "area" often represents a physical quantity. For instance, multiplying a small time step ($dt$) by power ($P(t)$) gives a small slice of energy. Summing an infinite number of these infinitesimal slices gives the total energy accumulated.

Notation for a definite integral:
$$ \int_{a}^{b} f(x) \, dx $$
*   $a$: The lower limit of integration (start point).
*   $b$: The upper limit of integration (end point).

### The FTC: Part 1 (The Accumulator)

If a function $f$ is continuous on a closed interval $[a, b]$, then the "area accumulator function" defined by the integral:
$$ g(x) = \int_{a}^{x} f(t) \, dt $$
is continuous on $[a, b]$, differentiable on the open interval $(a, b)$, and its derivative is exactly $f(x)$:
$$ g'(x) = f(x) $$

**Engineering Translation:** If you have a function $g(x)$ that keeps track of the total accumulated volume of water in a tank up to time $x$, then the *rate of change* of that accumulated volume ($g'(x)$) is exactly equal to the *flow rate* of the water pouring in ($f(x)$). Differentiating an integral gives you back the original rate function.

### The FTC: Part 2 (The Evaluation Theorem)

This is the practical workhorse of calculus, used daily by engineers to calculate real physical values. 

If $f$ is continuous on $[a, b]$, and $F$ is *any* antiderivative of $f$ (meaning $F' = f$), then the definite integral evaluated over that interval is:
$$ \int_{a}^{b} f(x) \, dx = F(b) - F(a) $$

**Engineering Translation:** To find the exact total area (or accumulated quantity) under $f(x)$ from start point $a$ to end point $b$, you simply find its general antiderivative $F(x)$, plug in the upper bound $b$, and subtract the result of plugging in the lower bound $a$. The $+C$ is elegantly ignored because $(C) - (C) = 0$. We often use the evaluation bar notation: $\left[ F(x) \right]_a^b$.

### Engineering Applications & Examples

#### Example 1: Basic Area Calculation (Easy)
Find the exact mathematical area under the parabolic curve $y = 3x^2$ from $x = 1$ to $x = 3$.

**Step 1: Set up the definite integral.**
$$ \text{Area} = \int_{1}^{3} 3x^2 \, dx $$

**Step 2: Find the antiderivative.**
$$ F(x) = x^3 $$

**Step 3: Apply FTC Part 2 ($F(b) - F(a)$).**
$$ \left[ x^3 \right]_{1}^{3} = (3)^3 - (1)^3 $$
$$ = 27 - 1 = 26 $$
*The exact area is 26 square units.*

#### Example 2: Mechanical Work (Medium)
In solid mechanics, the Work ($W$) done by a variable force $F(x)$ stretching a spring from position $x=a$ to $x=b$ is the integral of the force function. If the force required to compress a spring is $F(x) = 50x$ Newtons, how much work is done compressing it from $x = 0.1$ m to $x = 0.5$ m?

**Step 1: Set up the work integral.**
$$ W = \int_{0.1}^{0.5} 50x \, dx $$

**Step 2: Find the antiderivative.**
$$ F(x) = \frac{50x^2}{2} = 25x^2 $$

**Step 3: Evaluate the bounds.**
$$ W = \left[ 25x^2 \right]_{0.1}^{0.5} = 25(0.5)^2 - 25(0.1)^2 $$
$$ W = 25(0.25) - 25(0.01) = 6.25 - 0.25 = 6.0 $$
*The total work done is $6.0$ Joules.*

#### Example 3: Total Energy Consumption (Hard)
The power consumption of an industrial motor over an 8-hour shift is modeled by the function $P(t) = 100 - 20\cos\left(\frac{\pi t}{4}\right)$ in Kilowatts (kW), where $t$ is in hours ($0 \le t \le 8$). Calculate the total energy $E$ consumed during the shift in kWh, given that $E = \int_0^8 P(t) \, dt$.

**Step 1: Set up the integral.**
$$ E = \int_{0}^{8} \left( 100 - 20\cos\left(\frac{\pi t}{4}\right) \right) \, dt $$

**Step 2: Find the antiderivative.**
Using reverse chain rule concepts (to be covered deeply later):
$$ F(t) = 100t - 20 \left( \frac{4}{\pi} \right) \sin\left(\frac{\pi t}{4}\right) $$
$$ F(t) = 100t - \frac{80}{\pi} \sin\left(\frac{\pi t}{4}\right) $$

**Step 3: Evaluate from 0 to 8.**
$$ E = \left[ 100(8) - \frac{80}{\pi} \sin\left(\frac{8\pi}{4}\right) \right] - \left[ 100(0) - \frac{80}{\pi} \sin(0) \right] $$
$$ E = \left[ 800 - \frac{80}{\pi} \sin(2\pi) \right] - \left[ 0 - 0 \right] $$
Since $\sin(2\pi) = 0$:
$$ E = 800 - 0 = 800 $$
*The motor consumes exactly 800 kWh of energy during the shift.*

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Definite Integrals",
        "icon": "BoxSelect",
        "description": "Area as accumulation of slices."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "FTC Part 1",
        "icon": "ArrowDownUp",
        "description": "Derivative of an integral is the original function."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "FTC Part 2",
        "icon": "Calculator",
        "description": "F(b) - F(a)"
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Engineering Analysis",
        "icon": "BarChartBig",
        "description": "Calculating Work, Energy, and Total Mass."
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
