# 7. Substitution Methods (Bernoulli Equations)

If an ODE is completely stubborn (not separable, not linear, not exact), we can sometimes use an algebraic substitution to force it to become something we know how to solve. 

The most common substitution target in engineering mathematics is the **Bernoulli Differential Equation**.

### Bernoulli Equations
A Bernoulli equation is a specific type of non-linear ODE that looks suspiciously similar to a standard linear equation, except the $y$ term on the right side is raised to a power $n$:
$$ \frac{dy}{dx} + P(x)y = Q(x)y^n $$
*(If $n=0$ or $n=1$, the equation is already linear).*

### The Bernoulli Substitution
To transform a Bernoulli equation into a standard linear equation, we use the specific substitution:
$$ v = y^{1-n} $$

By changing the variable from $y$ to $v$, the equation will magically straighten out into a perfectly linear equation that we can solve using the Integrating Factor method.

### The Substitution Process
1.  Identify $n$ from the right side of the equation.
2.  Define $v = y^{1-n}$.
3.  Take the derivative: $\frac{dv}{dx} = (1-n)y^{-n} \frac{dy}{dx}$ (Chain rule!).
4.  Multiply the original differential equation by $(1-n)y^{-n}$. This will perfectly set up the substitution.
5.  Substitute $v$ and $dv/dx$ into the equation. It is now linear.
6.  Solve for $v(x)$.
7.  Substitute $y$ back in at the very end to find the final answer.

### Worked Example
**Problem:** Solve $x \frac{dy}{dx} + y = x^2 y^2$

**Step 1: Put in Bernoulli Form**
Divide by $x$ to get $dy/dx$ by itself:
$$ \frac{dy}{dx} + \frac{1}{x}y = x y^2 $$
This is Bernoulli with $n = 2$. $P(x) = 1/x$, $Q(x) = x$.

**Step 2: The Substitution**
Let $v = y^{1-2} = y^{-1}$.
Take the derivative: $\frac{dv}{dx} = -1 y^{-2} \frac{dy}{dx}$.

**Step 3: Multiply original equation**
Multiply the Bernoulli equation from Step 1 by the derivative coefficient $(-1 y^{-2})$:
$$ -y^{-2}\frac{dy}{dx} - \frac{1}{x}y^{-1} = -x $$

**Step 4: Substitute $v$**
Notice that the first term is exactly $\frac{dv}{dx}$, and the second term contains $y^{-1}$, which is exactly $v$.
$$ \frac{dv}{dx} - \frac{1}{x}v = -x $$
This is now a standard **Linear First-Order Equation**!

**Step 5: Solve the Linear Equation**
Integrating factor: $P(x) = -1/x$. 
$\mu(x) = e^{\int -\frac{1}{x} dx} = e^{-\ln x} = e^{\ln(x^{-1})} = x^{-1} = \frac{1}{x}$.

Multiply the linear equation by $1/x$:
$$ \frac{d}{dx} \left[ \frac{1}{x} v \right] = -x \left( \frac{1}{x} \right) = -1 $$
Integrate both sides:
$$ \frac{1}{x} v = -x + C $$
Multiply by $x$ to isolate $v$:
$$ v = -x^2 + Cx $$

**Step 6: Back-Substitute $y$**
Since $v = y^{-1} = 1/y$:
$$ \frac{1}{y} = -x^2 + Cx $$
$$ y = \frac{1}{Cx - x^2} $$


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Substitution Methods",
        "icon": "BrainCircuit",
        "description": "Topic: Substitution Methods"
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
