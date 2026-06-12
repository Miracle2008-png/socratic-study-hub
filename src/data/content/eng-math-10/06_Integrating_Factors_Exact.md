# 6. Making Equations Exact (Special Integrating Factors)

What happens if you have an equation $M(x,y)dx + N(x,y)dy = 0$, but when you test it, $M_y \neq N_x$? 
The equation is not exact.

However, just like we did with linear equations, we can sometimes multiply the entire equation by a "magic" Integrating Factor $\mu$ to force the equation to become exact.
$$ (\mu M)dx + (\mu N)dy = 0 $$
For this to be exact, we need the new test to pass:
$$ \frac{\partial}{\partial y}(\mu M) = \frac{\partial}{\partial x}(\mu N) $$

Finding $\mu(x,y)$ in general requires solving a PDE, which is too difficult. However, there are two special cases where the integrating factor depends on only one variable.

### Case 1: Integrating Factor depends only on $x$
Calculate this test quotient:
$$ \frac{M_y - N_x}{N} $$
If the result depends *only* on $x$ (all $y$'s cancel out), let's call this result $h(x)$. The integrating factor is:
$$ \mu(x) = e^{\int h(x) dx} $$

### Case 2: Integrating Factor depends only on $y$
Calculate this test quotient (notice the flipped subtraction and division by M):
$$ \frac{N_x - M_y}{M} $$
If the result depends *only* on $y$ (all $x$'s cancel out), let's call this result $h(y)$. The integrating factor is:
$$ \mu(y) = e^{\int h(y) dy} $$

### Worked Example
**Problem:** Solve $(xy)dx + (2x^2 + 3y^2 - 20)dy = 0$
*(Assume $x>0, y>0$)*

**Step 1: Test for exactness**
$M = xy \implies M_y = x$
$N = 2x^2 + 3y^2 - 20 \implies N_x = 4x$
$M_y \neq N_x$. Not exact.

**Step 2: Try Case 1 (Depends on x)**
$$ \frac{M_y - N_x}{N} = \frac{x - 4x}{2x^2 + 3y^2 - 20} = \frac{-3x}{2x^2 + 3y^2 - 20} $$
This still contains $y$. Case 1 fails.

**Step 3: Try Case 2 (Depends on y)**
$$ \frac{N_x - M_y}{M} = \frac{4x - x}{xy} = \frac{3x}{xy} = \frac{3}{y} $$
Success! All $x$'s canceled out. $h(y) = 3/y$.

**Step 4: Find the Integrating Factor $\mu(y)$**
$$ \mu(y) = e^{\int \frac{3}{y} dy} = e^{3\ln y} = y^3 $$

**Step 5: Multiply original equation by $\mu$**
Multiply $(xy)dx + (2x^2 + 3y^2 - 20)dy = 0$ by $y^3$:
$$ (xy^4)dx + (2x^2 y^3 + 3y^5 - 20y^3)dy = 0 $$

**Step 6: Solve the new exact equation**
New $M = xy^4$. New $N = 2x^2 y^3 + 3y^5 - 20y^3$.
Verify: $M_y = 4xy^3$. $N_x = 4xy^3$. It is now exact!

Integrate $M$ with respect to $x$:
$$ f(x,y) = \int xy^4 dx = \frac{1}{2}x^2 y^4 + g(y) $$
Differentiate with respect to $y$ and set to $N$:
$$ \frac{\partial f}{\partial y} = 2x^2 y^3 + g'(y) = 2x^2 y^3 + 3y^5 - 20y^3 $$
Cancel common terms:
$$ g'(y) = 3y^5 - 20y^3 $$
Integrate to find $g(y)$:
$$ g(y) = \frac{1}{2}y^6 - 5y^4 $$
Final Solution:
$$ \frac{1}{2}x^2 y^4 + \frac{1}{2}y^6 - 5y^4 = C $$


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Integrating Factors Exact",
        "icon": "BrainCircuit",
        "description": "Topic: Integrating Factors Exact"
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
