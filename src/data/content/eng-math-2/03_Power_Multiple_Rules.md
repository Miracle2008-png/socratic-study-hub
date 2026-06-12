# 3. Power Rule & Constant Multiple Rule

Using first principles every single time would take hours for complex equations. Over centuries, mathematicians evaluated those limits to derive shortcut rules.

### The Constant Rule
The derivative of any constant number is exactly zero. A constant function (e.g., $y = 5$) is a flat horizontal line. A flat horizontal line has zero slope.
$$ \frac{d}{dx}[c] = 0 $$

### The Power Rule
The Power Rule is the most widely used derivative rule for polynomials. To differentiate $x$ raised to any real power $n$, you multiply by the power, and then decrease the power by 1.
$$ \frac{d}{dx}[x^n] = nx^{n-1} $$

**Examples:**
*   $\frac{d}{dx}[x^3] = 3x^2$
*   $\frac{d}{dx}[x^{100}] = 100x^{99}$
*   $\frac{d}{dx}[x] = 1x^0 = 1$

This rule also works perfectly for negative and fractional exponents:
*   $\frac{d}{dx}\left[\frac{1}{x}\right] = \frac{d}{dx}[x^{-1}] = -1x^{-2} = -\frac{1}{x^2}$
*   $\frac{d}{dx}[\sqrt{x}] = \frac{d}{dx}[x^{1/2}] = \frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}}$

### The Constant Multiple Rule
If a constant is multiplying a function, the constant simply "comes along for the ride."
$$ \frac{d}{dx}[c \cdot f(x)] = c \cdot f'(x) $$
*Example:* $\frac{d}{dx}[4x^3] = 4 \cdot \frac{d}{dx}[x^3] = 4(3x^2) = 12x^2$

### The Sum and Difference Rule
The derivative of a sum or difference of functions is the sum or difference of their derivatives. You can differentiate term-by-term.
$$ \frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x) $$

### Worked Example: Polynomial Differentiation
**Problem:** Differentiate the position function $s(t) = 5t^4 - 2t^3 + 7t - 9$ to find the velocity $v(t)$.

**Solution:**
Differentiate term-by-term using the Power and Constant Multiple rules:
$$ v(t) = s'(t) = \frac{d}{dt}(5t^4) - \frac{d}{dt}(2t^3) + \frac{d}{dt}(7t) - \frac{d}{dt}(9) $$
$$ v(t) = 5(4t^3) - 2(3t^2) + 7(1) - 0 $$
$$ v(t) = 20t^3 - 6t^2 + 7 $$


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Power Multiple Rules",
        "icon": "BrainCircuit",
        "description": "Core Concept: Power Multiple Rules"
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
