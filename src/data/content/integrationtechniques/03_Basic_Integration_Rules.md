# 3. Basic Integration Rules

Because integration is the fundamental inverse of differentiation, every derivative rule you have learned has a corresponding integration rule. By reading derivative rules backwards, we generate our basic toolkit for solving integrals. Mastery of these foundational rules is essential before moving on to complex techniques like integration by parts or partial fractions.

### The Constant Rule

When differentiating, the derivative of $kx$ is simply the constant $k$. Reversing this, integrating a constant $k$ with respect to $x$ simply attaches an $x$ to it (because the area under a flat horizontal line $y=k$ is a rectangle of height $k$ and width $x$).

$$ \int k \, dx = kx + C $$

*Example:* $\int 9.81 \, dx = 9.81x + C$ (Integrating gravitational acceleration yields velocity).

### The Reverse Power Rule

To differentiate $x^n$, the power rule states you multiply by the exponent $n$ and subtract 1 from the power. 
Therefore, to integrate $x^n$, you perform the exact inverse operations in reverse order: **first add 1 to the power, and then divide by the new power.**

$$ \int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (\text{for } n \neq -1) $$

*(Note: If $n = -1$, the denominator becomes 0, rendering the expression undefined. The integral of $x^{-1}$ or $\frac{1}{x}$ is a special case that evaluates to the natural logarithm: $\int \frac{1}{x} dx = \ln|x| + C$).*

**Quick Examples:**
*   **Cubic:** $\int x^3 \, dx = \frac{x^4}{4} + C$
*   **Roots (Fractional Powers):** $\int \sqrt{x} \, dx = \int x^{1/2} \, dx = \frac{x^{3/2}}{3/2} = \frac{2}{3}x^{3/2} + C$
*   **Inverse Powers:** $\int \frac{1}{x^3} \, dx = \int x^{-3} \, dx = \frac{x^{-2}}{-2} = -\frac{1}{2x^2} + C$

### The Constant Multiple and Sum/Difference Rules

Integration is a linear operator. This gives us two immensely helpful properties that mirror differentiation:

**1. Constant Multiple Rule:** Constant multipliers can be pulled entirely outside the integral sign. They do not affect the integration process of the variable.
$$ \int k \cdot f(x) \, dx = k \int f(x) \, dx $$

**2. Sum and Difference Rule:** You can integrate terms separated by addition or subtraction individually. A massive polynomial can be broken down into bite-sized integrals.
$$ \int [f(x) \pm g(x)] \, dx = \int f(x) \, dx \pm \int g(x) \, dx $$

### Essential Transcendental Rules

Engineering math frequently involves exponentials and trigonometry (e.g., control systems, signal processing).
*   **Exponential:** The natural exponential function is its own derivative, thus it is its own integral.
    $$ \int e^x \, dx = e^x + C $$
*   **Sine and Cosine:** Pay close attention to the negative signs, as they swap compared to differentiation!
    $$ \int \cos(x) \, dx = \sin(x) + C $$
    $$ \int \sin(x) \, dx = -\cos(x) + C $$

---

### Engineering Examples

#### Example 1: Kinematic Profile (Easy)
Evaluate the indefinite integral representing the velocity of a drone given its acceleration profile: $\int (12x^2 - 4) \, dx$.

**Solution:**
Apply the Sum/Difference and Constant Multiple rules:
$$ = 12 \int x^2 \, dx - \int 4 \, dx $$
Apply the Reverse Power Rule and Constant Rule:
$$ = 12 \left(\frac{x^3}{3}\right) - 4x + C $$
Simplify:
$$ = 4x^3 - 4x + C $$

#### Example 2: Structural Beam Deflection (Medium)
During the calculation of a cantilever beam's deflection, an engineer must integrate the bending moment equation divided by the beam's stiffness: $\int \left( \frac{5}{x^2} - 3\sqrt{x} \right) \, dx$. Evaluate this integral.

**Solution:**
Rewrite the expressions with fractional and negative exponents to prepare for the Power Rule:
$$ = \int (5x^{-2} - 3x^{1/2}) \, dx $$
Integrate term by term:
$$ = 5 \left( \frac{x^{-1}}{-1} \right) - 3 \left( \frac{x^{3/2}}{3/2} \right) + C $$
Simplify the fractions:
$$ = -5x^{-1} - 3 \left( \frac{2}{3} \right) x^{3/2} + C $$
$$ = -\frac{5}{x} - 2x^{3/2} + C $$

#### Example 3: Harmonic Oscillator (Hard)
The velocity of an undamped harmonic oscillator (like a mass on a spring) is modeled by $v(t) = 4\cos(t) - 2\sin(t)$. Find its position function $s(t)$, knowing that $s(t) = \int v(t) \, dt$.

**Solution:**
Set up the integral:
$$ s(t) = \int (4\cos(t) - 2\sin(t)) \, dt $$
Integrate each term using the trigonometric rules:
$$ = 4 \int \cos(t) \, dt - 2 \int \sin(t) \, dt $$
$$ = 4(\sin(t)) - 2(-\cos(t)) + C $$
Simplify:
$$ s(t) = 4\sin(t) + 2\cos(t) + C $$

*Always double-check your work by taking the derivative of your answer! The derivative of $4\sin(t) + 2\cos(t) + C$ perfectly returns our integrand $4\cos(t) - 2\sin(t)$.*

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Linearity Properties",
        "icon": "SplitSquareHorizontal",
        "description": "Sum/Difference and Constant Multiples"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Algebraic Rules",
        "icon": "Variable",
        "description": "Power Rule and Constant Rule"
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Transcendental Rules",
        "icon": "Waves",
        "description": "Trig, Exponentials, and Logarithms"
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Complex Integration",
        "icon": "Network",
        "description": "Combining rules for engineering models"
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
