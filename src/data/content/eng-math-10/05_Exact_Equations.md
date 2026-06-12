# 5. Exact Differential Equations

If a first-order differential equation is neither separable nor linear, it might still be solvable if it is **Exact**.

This method relies on multivariable calculus. Recall that the total differential of a 2D scalar function $f(x,y)$ is:
$$ df = \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial y}dy $$

If an ODE can be written in the form:
$$ M(x,y)dx + N(x,y)dy = 0 $$
and if the left side happens to be the exact total differential of some function $f(x,y)$, then the equation collapses to:
$$ df = 0 $$
Integrating both sides gives the immediate, implicit general solution:
$$ f(x,y) = C $$

### The Test for Exactness
How do we know if $M(x,y)dx + N(x,y)dy$ is exactly the derivative of some unknown function $f$?
By Clairaut's Theorem of mixed partial derivatives ($f_{xy} = f_{yx}$), the equation is exact if and only if:
$$ \frac{\partial M}{\partial y} = \frac{\partial N}{\partial x} $$

*(Notice how this is the exact same test we used to determine if a vector field $\mathbf{F} = \langle M, N \rangle$ is conservative! Exact equations and conservative vector fields are mathematically identical concepts).*

### The 4-Step Solution Process
1.  **Test for Exactness:** Verify that $M_y = N_x$.
2.  **Integrate $M$:** Since $M = \partial f/\partial x$, integrate $M$ with respect to $x$ to find $f$. Add an unknown function of $y$, $+ g(y)$, instead of a constant.
3.  **Differentiate $f$:** Differentiate your new $f$ with respect to $y$, and set it equal to $N(x,y)$.
4.  **Solve for $g(y)$:** Simplify, integrate to find $g(y)$, and write the final solution as $f(x,y) = C$.

### Worked Example
**Problem:** Solve $(2xy)dx + (x^2 - 1)dy = 0$.

**Step 1: Test for Exactness**
$M(x,y) = 2xy \implies M_y = 2x$
$N(x,y) = x^2 - 1 \implies N_x = 2x$
Since $2x = 2x$, the equation is exact.

**Step 2: Integrate $M$**
$$ f(x,y) = \int M \, dx = \int 2xy \, dx = x^2 y + g(y) $$

**Step 3: Differentiate $f$ with respect to $y$ and set equal to $N$**
$$ \frac{\partial f}{\partial y} = x^2 + g'(y) $$
Set equal to $N$:
$$ x^2 + g'(y) = x^2 - 1 $$

**Step 4: Solve for $g(y)$**
The $x^2$ terms perfectly cancel (if they don't, you made a mistake earlier!).
$$ g'(y) = -1 $$
Integrate with respect to $y$:
$$ g(y) = -y $$

**Step 5: Write the Final Solution**
Substitute $g(y)$ back into our $f$ equation:
$$ f(x,y) = x^2 y - y $$
Set the function equal to an arbitrary constant $C$:
$$ x^2 y - y = C $$

This is the implicit general solution. In this case, we can easily solve for $y$ explicitly by factoring:
$$ y(x^2 - 1) = C \implies y = \frac{C}{x^2 - 1} $$


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Exact Equations",
        "icon": "BrainCircuit",
        "description": "Topic: Exact Equations"
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
