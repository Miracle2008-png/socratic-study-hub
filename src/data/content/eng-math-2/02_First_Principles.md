# 2. First Principles & Difference Quotients

To translate the geometric idea of a tangent line into rigorous mathematics, we use limits. This formal definition is known as differentiation from "first principles."

### The Difference Quotient
Let's pick a point $x$. Let's pick a second point slightly further down the x-axis, at $x + h$.
The corresponding y-values are $f(x)$ and $f(x+h)$.

The slope of the secant line between these two points is the difference in y divided by the difference in x:
$$ \text{Slope} = \frac{f(x+h) - f(x)}{(x+h) - x} = \frac{f(x+h) - f(x)}{h} $$
This fraction is called the **Difference Quotient**.

### The Formal Definition
To find the tangent line (instantaneous slope), we need to make the distance $h$ between the two points shrink to zero. We apply a limit as $h \to 0$.

The derivative of a function $f(x)$ with respect to $x$ is:
$$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$
provided this limit exists.

### Worked Example: Differentiating by First Principles
**Problem:** Find the derivative of $f(x) = x^2$ using first principles.

**Solution:**
Set up the limit definition:
$$ f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h} $$

Expand the numerator $(x+h)^2$:
$$ = \lim_{h \to 0} \frac{(x^2 + 2xh + h^2) - x^2}{h} $$

Cancel the $x^2$ and $-x^2$ terms:
$$ = \lim_{h \to 0} \frac{2xh + h^2}{h} $$

Factor out $h$ from the numerator:
$$ = \lim_{h \to 0} \frac{h(2x + h)}{h} $$

Cancel the $h$ (since $h \to 0$ but $h \neq 0$):
$$ = \lim_{h \to 0} (2x + h) $$

Now evaluate the limit by direct substitution ($h = 0$):
$$ = 2x + 0 = 2x $$

Thus, the derivative of $x^2$ is $2x$.


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "First Principles",
        "icon": "BrainCircuit",
        "description": "Core Concept: First Principles"
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
