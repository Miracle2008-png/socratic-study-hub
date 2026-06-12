# 3. Basic Integration Rules

Because integration is the inverse of differentiation, every derivative rule has a corresponding integration rule. Reading derivative rules backwards gives us our basic integration formulas.

### The Constant Rule
Integrating a constant $k$ simply attaches an $x$ to it.
$$ \int k \, dx = kx + C $$
*Example:* $\int 5 \, dx = 5x + C$

### The Reverse Power Rule
To differentiate $x^n$, you multiply by $n$ and subtract 1 from the power. 
Therefore, to integrate $x^n$, you do the exact opposite in reverse order: **add 1 to the power, and divide by the new power.**
$$ \int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (\text{for } n \neq -1) $$

*(Note: If $n = -1$, you would divide by 0, which is undefined. The integral of $x^{-1}$ is a special case covered in the next section).*

**Examples:**
*   $\int x^3 \, dx = \frac{x^4}{4} + C$
*   $\int \sqrt{x} \, dx = \int x^{1/2} \, dx = \frac{x^{3/2}}{3/2} = \frac{2}{3}x^{3/2} + C$
*   $\int \frac{1}{x^3} \, dx = \int x^{-3} \, dx = \frac{x^{-2}}{-2} = -\frac{1}{2x^2} + C$

### The Constant Multiple Rule
Just like in differentiation, constant multipliers can be pulled entirely outside the integral sign.
$$ \int k \cdot f(x) \, dx = k \int f(x) \, dx $$

### The Sum and Difference Rule
You can integrate terms separated by addition or subtraction individually.
$$ \int [f(x) \pm g(x)] \, dx = \int f(x) \, dx \pm \int g(x) \, dx $$

### Worked Example: Integrating Polynomials
**Problem:** Evaluate the indefinite integral $\int (6x^2 - 4x + 7) \, dx$.

**Solution:**
Integrate term by term, pulling out the constants:
$$ = 6 \int x^2 \, dx - 4 \int x^1 \, dx + \int 7 \, dx $$

Apply the Reverse Power Rule to each term:
$$ = 6 \left(\frac{x^3}{3}\right) - 4 \left(\frac{x^2}{2}\right) + 7x + C $$

Simplify the fractions:
$$ = 2x^3 - 2x^2 + 7x + C $$

Always double-check by differentiating your answer. The derivative of $2x^3 - 2x^2 + 7x + C$ is $6x^2 - 4x + 7$, which perfectly matches the original integrand!


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Basic Integration Rules",
        "icon": "BrainCircuit",
        "description": "Core Concept: Basic Integration Rules"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Fundamental Theorem",
        "icon": "ArrowRightCircle",
        "description": "Linking derivatives and integrals."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "U-Substitution",
        "icon": "ArrowRightCircle",
        "description": "Reverse chain rule."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Integration by Parts",
        "icon": "CheckCircle",
        "description": "Reverse product rule."
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
