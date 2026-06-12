# 2. Graphical Approach to Limits

Understanding limits visually is crucial before attempting algebraic manipulation. A function's limit at a point $c$ depends entirely on its behavior *near* $c$, not its actual value *at* $c$.

### Evaluating Limits from a Graph
When looking at the graph of a function $y = f(x)$, evaluating the limit as $x \to c$ means finding the y-value that the curve is "aiming" for as you trace the graph from the left side and the right side toward $x = c$.

There are three primary scenarios you will encounter visually:

#### Scenario A: Continuous Curve
If the graph passes smoothly through a point $(c, L)$ without any breaks, holes, or jumps, then the limit exists and is equal to the function's value.
$$\lim_{x \to c} f(x) = L$$
*(Example: A standard parabola $y = x^2$ as $x \to 2$, the limit is $4$.)*

#### Scenario B: The Removable Discontinuity (Hole)
Often, a function is undefined at a specific point $c$ due to division by zero, creating a "hole" in the graph. However, the curve still clearly approaches a specific y-coordinate from both sides.
Even if $f(c)$ is undefined, the limit **still exists**.
$$\lim_{x \to c} f(x) = L$$
This highlights the most important rule of limits: **The limit cares about the journey, not the destination.**

#### Scenario C: Jump Discontinuity
If the graph approaches one y-value from the left side, and a completely different y-value from the right side, the curve experiences a "jump." 
Because the two sides do not agree on a single destination, the overall limit **does not exist (DNE)**.

### Worked Example 1: Visual Evaluation
Imagine a piecewise function graph $f(x)$ with the following features:
*   A solid line from $(0,0)$ up to an open hole at $(2, 4)$.
*   A solid dot plotted explicitly at $(2, 1)$.
*   A solid line continuing from an open hole at $(2, -2)$ downwards.

**Problem 1:** What is $f(2)$?
**Solution:** The explicit solid dot is at $(2, 1)$. Therefore, $f(2) = 1$.

**Problem 2:** What is $\lim_{x \to 2^-} f(x)$? (The limit approaching from the left)
**Solution:** Tracing the curve from the left ($x < 2$), the graph aims for the hole at y-coordinate 4. So, $\lim_{x \to 2^-} f(x) = 4$.

**Problem 3:** What is $\lim_{x \to 2} f(x)$? (The overall limit)
**Solution:** Approaching from the right ($x > 2$), the graph aims for y = -2. Because the left side aims for 4 and the right side aims for -2, they do not agree. Therefore, the overall limit **Does Not Exist (DNE)**.


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Graphical Limits",
        "icon": "BrainCircuit",
        "description": "Core Concept: Graphical Limits"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Indeterminate Form",
        "icon": "ArrowRightCircle",
        "description": "0/0 or inf/inf requires further manipulation."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Algebraic Manipulation",
        "icon": "ArrowRightCircle",
        "description": "Factor, conjugate, or simplify."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "L'Hôpital's Rule",
        "icon": "CheckCircle",
        "description": "Apply derivatives if applicable."
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
