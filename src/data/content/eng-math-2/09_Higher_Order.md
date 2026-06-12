# 9. Higher-Order Derivatives

A derivative is itself a function, which means it can also be differentiated. Differentiating a derivative yields a **higher-order derivative**.

### Notation
*   **First derivative:** $f'(x)$ or $\frac{dy}{dx}$
*   **Second derivative:** $f''(x)$ or $\frac{d^2y}{dx^2}$
*   **Third derivative:** $f'''(x)$ or $\frac{d^3y}{dx^3}$
*   **$n$-th derivative:** $f^{(n)}(x)$ or $\frac{d^ny}{dx^n}$

### Physical Meaning
If $s(t)$ represents the position of a vehicle over time:
1.  **Velocity $v(t)$:** The first derivative $s'(t)$. (Rate of change of position).
2.  **Acceleration $a(t)$:** The second derivative $s''(t)$. (Rate of change of velocity).
3.  **Jerk $j(t)$:** The third derivative $s'''(t)$. (Rate of change of acceleration—crucial in roller coaster design and elevator engineering to ensure passenger comfort).

### Worked Example
**Problem:** Find the first four derivatives of $f(x) = 2x^4 - 3x^3 + 5x - 7$.

**Solution:**
First derivative:
$$ f'(x) = 8x^3 - 9x^2 + 5 $$

Second derivative (differentiate $f'(x)$):
$$ f''(x) = 24x^2 - 18x $$

Third derivative:
$$ f'''(x) = 48x - 18 $$

Fourth derivative:
$$ f^{(4)}(x) = 48 $$

*(Note: The 5th derivative, and all subsequent derivatives of this polynomial, will be 0).*


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Higher Order",
        "icon": "BrainCircuit",
        "description": "Core Concept: Higher Order"
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
