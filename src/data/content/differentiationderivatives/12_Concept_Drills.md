# 12. Concept Drills

Test your engineering intuition and mathematical rigor regarding Differentiation. Select your answer to immediately reveal the worked mathematical correction. These drills simulate real-world physics and engineering scenarios.

```drill
Question: The dampening force of a mechanical shock absorber is proportional to the derivative of $f(x) = x^3 \sin(x)$. What is this derivative?
Options:
A) $3x^2 \cos(x)$
B) $3x^2 \sin(x) - x^3 \cos(x)$
C) $3x^2 \sin(x) + x^3 \cos(x)$
D) $x^3 \cos(x)$
Answer: C
Explanation: Because the function is the product of two distinct functions of $x$, you must use the Product Rule: $(uv)' = u'v + uv'$.
Let the amplitude envelope $u = x^3$ and the oscillating component $v = \sin(x)$.
Compute the individual rates of change:
$u' = 3x^2$
$v' = \cos(x)$
Substitute these into the formula to find the dampening derivative:
$$ f'(x) = (3x^2)(\sin x) + (x^3)(\cos x) = 3x^2 \sin(x) + x^3 \cos(x) $$
```

```drill
Question: The entropy in a closed thermodynamic system over time $x$ scales logarithmically, modeled by $S(x) = \ln(x^2 + 4x)$. What is the rate of entropy change, $\frac{dS}{dx}$?
Options:
A) $\frac{1}{x^2 + 4x}$
B) $\frac{2x + 4}{x^2 + 4x}$
C) $\frac{1}{2x + 4}$
D) $\frac{2}{x}$
Answer: B
Explanation: Because we have a function nested inside a logarithm, we must apply the Chain Rule. The outer function is $\ln(u)$, whose derivative is $\frac{1}{u}$. The inner function is $u = x^2 + 4x$.
The Chain Rule states: $\frac{d}{dx}[\ln(u)] = \frac{1}{u} \cdot u'$.
1. Define $u = x^2 + 4x$.
2. Take the derivative of the inside: $u' = 2x + 4$.
3. Multiply the outer derivative by the inner derivative:
$$ \frac{dS}{dx} = \frac{1}{x^2 + 4x} \cdot (2x + 4) = \frac{2x + 4}{x^2 + 4x} $$
```

```drill
Question: An elliptical fluid pipeline has a cross-sectional profile defined by the implicit equation $x^3 + y^3 = 9$. To mount a sensor perfectly tangent to the pipe surface at the point $(1, 2)$, what must the slope of the sensor bracket be?
Options:
A) $-\frac{1}{4}$
B) $\frac{1}{4}$
C) $-4$
D) $-\frac{1}{2}$
Answer: A
Explanation: Since it is difficult to isolate $y$ algebraically, use implicit differentiation. Differentiate both sides with respect to $x$, remembering that $y$ is a function of $x$ (so $y^3$ requires the Chain Rule).
$$ \frac{d}{dx}[x^3 + y^3] = \frac{d}{dx}[9] $$
$$ 3x^2 + 3y^2 \left(\frac{dy}{dx}\right) = 0 $$
Rearrange to solve for the slope $\frac{dy}{dx}$:
$$ 3y^2 \frac{dy}{dx} = -3x^2 $$
$$ \frac{dy}{dx} = -\frac{3x^2}{3y^2} = -\frac{x^2}{y^2} $$
Evaluate this slope at the physical mounting point $(x, y) = (1, 2)$:
$$ m = -\frac{(1)^2}{(2)^2} = -\frac{1}{4} $$
The bracket must have a slope of $-1/4$.
```

```drill
Question: The structural stress on a load-bearing beam across its length $x$ is given by $f(x) = 2x^3 - 3x^2 - 12x + 5$. At what position $x$ is the beam experiencing the minimum local stress?
Options:
A) $x = -1$
B) $x = 1$
C) $x = 2$
D) $x = 0$
Answer: C
Explanation: First, find the critical points where the rate of stress change is zero by setting the first derivative to zero.
$$ f'(x) = 6x^2 - 6x - 12 = 0 $$
Divide the entire equation by 6 to simplify:
$$ x^2 - x - 2 = 0 $$
Factor the quadratic:
$$ (x - 2)(x + 1) = 0 $$
The critical points are at $x = 2$ and $x = -1$.
To determine which point corresponds to a physical minimum, apply the Second Derivative Test:
$$ f''(x) = 12x - 6 $$
Test $x = -1$: $f''(-1) = 12(-1) - 6 = -18$ (Since $f'' < 0$, the curve is concave down, making this a local maximum).
Test $x = 2$: $f''(2) = 12(2) - 6 = 18$ (Since $f'' > 0$, the curve is concave up, making this a local minimum).
The minimum stress occurs at position $x = 2$.
```

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Identify Concept",
        "icon": "BrainCircuit",
        "description": "Chain, Product, or Implicit?"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Apply Rule",
        "icon": "Edit3",
        "description": "Execute the derivative."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Solve/Simplify",
        "icon": "Filter",
        "description": "Isolate variables."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Evaluate",
        "icon": "CheckCircle",
        "description": "Plug in coordinates."
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
