# 12. Concept Drills

Test your understanding of Differentiation. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: What is the derivative of $f(x) = x^3 \sin(x)$?
Options:
A) $3x^2 \cos(x)$
B) $3x^2 \sin(x) - x^3 \cos(x)$
C) $3x^2 \sin(x) + x^3 \cos(x)$
D) $x^3 \cos(x)$
Answer: C
Explanation: Use the Product Rule: $(uv)' = u'v + uv'$.
Let $u = x^3$ and $v = \sin(x)$.
Then $u' = 3x^2$ and $v' = \cos(x)$.
Substitute these into the formula:
$$ f'(x) = (3x^2)(\sin x) + (x^3)(\cos x) = 3x^2 \sin(x) + x^3 \cos(x) $$
```

```drill
Question: Find $\frac{dy}{dx}$ if $y = \ln(x^2 + 4x)$.
Options:
A) $\frac{1}{x^2 + 4x}$
B) $\frac{2x + 4}{x^2 + 4x}$
C) $\frac{1}{2x + 4}$
D) $\frac{2}{x}$
Answer: B
Explanation: Use the Chain Rule. The derivative of $\ln(u)$ is $\frac{1}{u} \cdot u'$.
Let $u = x^2 + 4x$. Then $u' = 2x + 4$.
$$ \frac{dy}{dx} = \frac{1}{x^2 + 4x} \cdot (2x + 4) = \frac{2x + 4}{x^2 + 4x} $$
```

```drill
Question: Determine the slope of the tangent line to the curve $x^3 + y^3 = 9$ at the point $(1, 2)$.
Options:
A) $-\frac{1}{4}$
B) $\frac{1}{4}$
C) $-4$
D) $-\frac{1}{2}$
Answer: A
Explanation: Use implicit differentiation.
$$ \frac{d}{dx}[x^3 + y^3] = \frac{d}{dx}[9] $$
$$ 3x^2 + 3y^2 \frac{dy}{dx} = 0 $$
Solve for $\frac{dy}{dx}$:
$$ \frac{dy}{dx} = -\frac{3x^2}{3y^2} = -\frac{x^2}{y^2} $$
Evaluate at $(x, y) = (1, 2)$:
$$ m = -\frac{(1)^2}{(2)^2} = -\frac{1}{4} $$
```

```drill
Question: At what x-coordinate does the function $f(x) = 2x^3 - 3x^2 - 12x + 5$ have a local minimum?
Options:
A) $x = -1$
B) $x = 1$
C) $x = 2$
D) $x = 0$
Answer: C
Explanation: First, find the critical points by setting the derivative to zero.
$$ f'(x) = 6x^2 - 6x - 12 = 0 $$
Divide by 6:
$$ x^2 - x - 2 = 0 $$
Factor:
$$ (x - 2)(x + 1) = 0 $$
Critical points are at $x = 2$ and $x = -1$.
To determine which is a minimum, use the Second Derivative Test.
$$ f''(x) = 12x - 6 $$
At $x = -1$: $f''(-1) = -18$ (negative, so it's a local maximum).
At $x = 2$: $f''(2) = 18$ (positive, concave up, so it's a local minimum).
```


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Concept Drills",
        "icon": "BrainCircuit",
        "description": "Core Concept: Concept Drills"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Basic Rules",
        "icon": "ArrowRightCircle",
        "description": "Power, constant, and sum rules."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Product & Quotient",
        "icon": "ArrowRightCircle",
        "description": "Complex combinations of functions."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Chain Rule",
        "icon": "CheckCircle",
        "description": "Derivatives of composite functions."
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
