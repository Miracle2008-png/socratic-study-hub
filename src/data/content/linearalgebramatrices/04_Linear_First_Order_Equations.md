# 4. Linear First-Order Equations

Many practical differential equations in engineering (like RC circuits or fluid mixing) are *not* separable. For example:
$$ \frac{dy}{dt} + 2y = t $$
You cannot factor this into a pure product of $t$ and $y$. However, notice that both $y'$ and $y$ appear strictly to the first power. This makes the equation **Linear**.

All linear first-order ODEs can be written in the **Standard Form**:
$$ \frac{dy}{dx} + P(x)y = Q(x) $$

### The Integrating Factor Method
To solve this, we use a brilliant mathematical trick. We multiply the entire equation by a "magic" function called the **Integrating Factor**, denoted $I(x)$ or $\mu(x)$.

The Integrating Factor is defined as:
$$ \mu(x) = e^{\int P(x) dx} $$

**Why is this magic?**
If you multiply the standard form equation by $\mu(x)$, the entire left side perfectly collapses into the derivative of a product:
$$ \frac{d}{dx}[\mu(x)y] = \mu(x)Q(x) $$
From there, you simply integrate both sides with respect to $x$ to solve for $y$.

### The 4-Step Process
1.  Write the equation in standard form to identify $P(x)$ and $Q(x)$. *(Make sure the coefficient of $dy/dx$ is exactly 1!)*
2.  Calculate the integrating factor: $\mu(x) = e^{\int P(x) dx}$. *(Do not include a $+C$ here).*
3.  Set up the collapsed equation: $\frac{d}{dx}[\mu(x)y] = \mu(x)Q(x)$.
4.  Integrate both sides and divide by $\mu(x)$ to isolate $y$.

### Worked Example
**Problem:** Solve $\frac{dy}{dx} + \frac{3}{x}y = 6x^2$.

**Step 1: Standard Form**
The coefficient of $dy/dx$ is already 1.
$P(x) = \frac{3}{x}$
$Q(x) = 6x^2$

**Step 2: Integrating Factor**
$$ \mu(x) = e^{\int \frac{3}{x} dx} = e^{3\ln|x|} $$
Using logarithm rules ($a \ln x = \ln x^a$), we can move the 3 inside:
$$ \mu(x) = e^{\ln|x^3|} = x^3 $$
*(The $e$ and $\ln$ cancel perfectly).*

**Step 3: The Collapsed Equation**
The left side collapses to $\frac{d}{dx}[\mu(x)y]$, and the right side is multiplied by $\mu(x)$.
$$ \frac{d}{dx}[x^3 y] = (x^3)(6x^2) = 6x^5 $$

**Step 4: Integrate and Solve**
Integrate both sides with respect to $x$:
$$ x^3 y = \int 6x^5 dx $$
$$ x^3 y = x^6 + C $$
Divide by $x^3$ to isolate $y$:
$$ y(x) = x^3 + \frac{C}{x^3} $$

This is the exact general solution. Notice how the $+C$ was divided by $x^3$, creating a transient term $C/x^3$. This is why the integrating factor method is so powerful!


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Linear First Order Equations",
        "icon": "BrainCircuit",
        "description": "Topic: Linear First Order Equations"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Differential Equation Form",
        "icon": "FunctionSquare",
        "description": "Identifying dy/dx = f(x,y)."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Separation of Variables",
        "icon": "Sigma",
        "description": "Isolating dy and dx on opposite sides."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Integrating Factor Method",
        "icon": "Activity",
        "description": "Solving linear 1st-order ODEs using exp(∫P(x)dx)."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Exact Equations",
        "icon": "Layers",
        "description": "Solving via partial derivatives where M_y = N_x."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Initial Value Problems",
        "icon": "Target",
        "description": "Applying boundary conditions to find the specific constant C."
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
