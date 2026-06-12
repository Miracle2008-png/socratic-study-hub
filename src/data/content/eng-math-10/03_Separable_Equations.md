# 3. Separable Equations

We begin learning to solve first-order ODEs with the simplest and most intuitive method: **Separation of Variables**.

A first-order ODE is called **separable** if it can be written in the form:
$$ \frac{dy}{dx} = g(x) h(y) $$

Notice that the right side of the equation is a pure product (or quotient) of a function of $x$ and a function of $y$. If $x$ and $y$ are linked by addition inside a function (e.g., $\cos(x+y)$), the equation is *not* separable.

### The Method of Separation
To solve a separable equation, follow these strict algebraic steps:

1.  **Group Variables:** Multiply and divide to move all $y$'s (including $dy$) to the left side of the equation, and all $x$'s (including $dx$) to the right side.
    $$ \frac{1}{h(y)} dy = g(x) dx $$
2.  **Integrate:** Slap an integral sign on both sides.
    $$ \int \frac{1}{h(y)} dy = \int g(x) dx $$
3.  **Add $C$:** Perform the integrations. You only need to add one constant of integration $+C$ on the right side.
4.  **Solve for $y$ (if possible):** Use algebra to isolate $y$ and obtain an explicit solution $y(x)$. If the algebra is impossible, leave it as an implicit solution.

### Worked Example
**Problem:** Find the general solution to $\frac{dy}{dx} = \frac{x^2}{y^2}$.

**Step 1: Separate the Variables**
Multiply both sides by $y^2$ to move the $y$'s to the left. Multiply both sides by $dx$ to move the $x$'s to the right.
$$ y^2 dy = x^2 dx $$

**Step 2: Integrate Both Sides**
$$ \int y^2 dy = \int x^2 dx $$

**Step 3: Perform Integration**
$$ \frac{1}{3}y^3 = \frac{1}{3}x^3 + C $$

**Step 4: Solve explicitly for $y$**
Multiply by 3:
$$ y^3 = x^3 + 3C $$
*(Note: Since $C$ is an arbitrary constant, $3C$ is also just an arbitrary constant. We can absorb the 3 and just call it $C_1$, or simply $C$ again. This absorption trick is extremely common in differential equations).*
$$ y^3 = x^3 + C $$

Take the cube root:
$$ y(x) = \sqrt[3]{x^3 + C} $$
This is the explicit general solution.


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Separable Equations",
        "icon": "BrainCircuit",
        "description": "Topic: Separable Equations"
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
