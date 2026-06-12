# 8. Homogeneous Equations

Another type of ODE that can be solved via substitution is the **Homogeneous First-Order Differential Equation**.

*(Note: In the context of first-order ODEs, the word "homogeneous" has a very specific algebraic meaning, which is different from its meaning in second-order linear ODEs).*

A first-order ODE is homogeneous if it can be algebraically rewritten so that $x$ and $y$ only appear as the ratio $(y/x)$.
$$ \frac{dy}{dx} = F\left(\frac{y}{x}\right) $$

If you can write the equation purely in terms of $(y/x)$, then a simple substitution will transform the equation into a **Separable Equation**.

### The Homogeneous Substitution
We define a new variable $v$ as the ratio:
$$ v = \frac{y}{x} \implies y = vx $$

To substitute this into the differential equation, we need the derivative. By the Product Rule:
$$ \frac{dy}{dx} = v + x\frac{dv}{dx} $$

### The 4-Step Process
1.  **Verify Homogeneity:** Divide the numerator and denominator by the highest power of $x$ to force all variables into $(y/x)$ fractions.
2.  **Substitute:** Replace all $(y/x)$ with $v$, and replace $dy/dx$ with $\left(v + x\frac{dv}{dx}\right)$.
3.  **Separate and Solve:** The equation is now guaranteed to be separable in terms of $v$ and $x$. Solve for $v$.
4.  **Back-Substitute:** Replace $v$ with $y/x$ and simplify to find the final solution.

### Worked Example
**Problem:** Solve $\frac{dy}{dx} = \frac{x^2 + y^2}{xy}$.

**Step 1: Verify Homogeneity**
Divide every single term in the numerator and denominator by $x^2$:
$$ \frac{dy}{dx} = \frac{\frac{x^2}{x^2} + \frac{y^2}{x^2}}{\frac{xy}{x^2}} = \frac{1 + (\frac{y}{x})^2}{(\frac{y}{x})} $$
Because the right side depends *only* on the ratio $(y/x)$, the equation is homogeneous.

**Step 2: Substitute $v$**
Let $v = y/x$. The right side becomes $\frac{1 + v^2}{v}$.
Replace $dy/dx$ on the left side with $v + x\frac{dv}{dx}$:
$$ v + x\frac{dv}{dx} = \frac{1 + v^2}{v} $$

**Step 3: Separate Variables**
Subtract $v$ from both sides:
$$ x\frac{dv}{dx} = \frac{1 + v^2}{v} - v $$
Find a common denominator:
$$ x\frac{dv}{dx} = \frac{1 + v^2 - v^2}{v} = \frac{1}{v} $$
Now, separate the variables ($v$'s left, $x$'s right):
$$ v \, dv = \frac{1}{x} dx $$
Integrate both sides:
$$ \int v \, dv = \int \frac{1}{x} dx $$
$$ \frac{1}{2}v^2 = \ln|x| + C $$

**Step 4: Back-Substitute**
Replace $v$ with $y/x$:
$$ \frac{1}{2}\left(\frac{y}{x}\right)^2 = \ln|x| + C $$
$$ \frac{y^2}{2x^2} = \ln|x| + C $$
Multiply by $2x^2$:
$$ y^2 = 2x^2 (\ln|x| + C) $$
$$ y = \pm x \sqrt{2\ln|x| + 2C} $$
*(Since $2C$ is just a constant, we can rewrite it as just $C$).*


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Homogeneous Equations",
        "icon": "BrainCircuit",
        "description": "Topic: Homogeneous Equations"
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
