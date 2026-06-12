# 2. Double Integrals over Rectangular Regions

To evaluate a double integral, we convert it into an **Iterated Integral**—two standard, single-variable integrals nested inside one another.

We begin with the simplest 2D domain: a rectangular region defined by constant boundaries. Let $R = [a, b] \times [c, d]$, which means:
*   $a \le x \le b$
*   $c \le y \le d$

### Fubini's Theorem
Fubini's Theorem states that if $f(x, y)$ is continuous on a rectangle $R$, then the double integral can be evaluated as an iterated integral in *either* order:

$$ \iint_R f(x,y) dA = \int_{c}^{d} \left[ \int_{a}^{b} f(x,y) dx \right] dy = \int_{a}^{b} \left[ \int_{c}^{d} f(x,y) dy \right] dx $$

**Crucial Note on Order of Integration:** 
*   If $dx$ is on the inside, you must integrate with respect to $x$ first (treating $y$ as a constant), and evaluate using the $x$-limits ($a$ to $b$).
*   If $dy$ is on the inside, you must integrate with respect to $y$ first (treating $x$ as a constant), and evaluate using the $y$-limits ($c$ to $d$).

### Worked Example: Integrating $dx$ first
**Problem:** Evaluate $\iint_R (2x^2 y + 3y^2) dA$ where $R$ is the rectangle $1 \le x \le 2$ and $0 \le y \le 3$.

**Solution:**
Set up the iterated integral. Let's choose the order $dx\,dy$:
$$ I = \int_{0}^{3} \int_{1}^{2} (2x^2 y + 3y^2) dx \, dy $$

**Step 1: The Inner Integral (with respect to $x$)**
Treat $y$ as a constant.
$$ \int_{1}^{2} (2x^2 y + 3y^2) dx = \left[ \frac{2}{3}x^3 y + 3xy^2 \right]_{x=1}^{x=2} $$
Plug in the upper limit $x=2$:
$$ \left( \frac{2}{3}(8)y + 3(2)y^2 \right) = \frac{16}{3}y + 6y^2 $$
Subtract the lower limit $x=1$:
$$ \left( \frac{2}{3}(1)y + 3(1)y^2 \right) = \frac{2}{3}y + 3y^2 $$
Result of the inner integral:
$$ \left( \frac{16}{3}y + 6y^2 \right) - \left( \frac{2}{3}y + 3y^2 \right) = \frac{14}{3}y + 3y^2 $$

**Step 2: The Outer Integral (with respect to $y$)**
Take the result from Step 1 and integrate it with respect to $y$:
$$ I = \int_{0}^{3} \left( \frac{14}{3}y + 3y^2 \right) dy $$
$$ I = \left[ \frac{7}{3}y^2 + y^3 \right]_{0}^{3} $$
Plug in $y=3$:
$$ I = \frac{7}{3}(9) + (27) = 21 + 27 = 48 $$
Since the lower limit is $0$, the final answer is **48**.

*(Note: Had we chosen the order $dy\,dx$, we would have performed the $y$ integration first from 0 to 3, then the $x$ integration from 1 to 2, and achieved exactly 48).*


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Rectangular Regions",
        "icon": "BrainCircuit",
        "description": "Topic: Rectangular Regions"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Double Integrals",
        "icon": "FunctionSquare",
        "description": "Integrating over 2D regions (Area/Volume)."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Fubini's Theorem",
        "icon": "Sigma",
        "description": "Evaluating via iterated single integrals."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Polar Coordinates (r, θ)",
        "icon": "Activity",
        "description": "Jacobian transformation: dx dy = r dr dθ."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Triple Integrals",
        "icon": "Layers",
        "description": "Integrating over 3D volumes (Mass/Density)."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Cylindrical & Spherical",
        "icon": "Target",
        "description": "Advanced coordinate transformations for symmetric regions."
      },
      "style": {
        "background": "#0f766e",
        "color": "#ccfbf1"
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
    },
    {
      "source": "4",
      "target": "5",
      "animated": true
    },
    {
      "source": "5",
      "target": "6",
      "animated": true
    }
  ]
}
```
