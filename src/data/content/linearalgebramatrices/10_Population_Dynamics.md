# 10. Application: Population Dynamics

One of the most famous applications of first-order autonomous ODEs is modeling the growth of populations, whether it's humans, bacteria, or a viral infection.

### Model 1: Exponential Growth (Malthusian)
The simplest model assumes that a population $P(t)$ grows at a rate proportional to its current size. 
If you have 10 rabbits, you get 1 baby. If you have 100 rabbits, you get 10 babies.
$$ \frac{dP}{dt} = kP $$
where $k$ is the relative growth rate (birth rate minus death rate).

This is a separable, linear ODE. 
$$ \int \frac{1}{P} dP = \int k \, dt \implies \ln|P| = kt + C \implies P(t) = P_0 e^{kt} $$
While mathematically elegant, this model is physically impossible long-term. It predicts the population will grow to infinity, eventually exceeding the mass of the universe.

### Model 2: Logistic Growth (Verhulst)
In reality, environments have limited resources (food, space). There is a maximum "Carrying Capacity" denoted by $M$.
As the population $P$ gets closer to $M$, the growth rate must slow down. When $P$ hits $M$, growth must stop entirely.

To model this, we multiply the exponential growth rate by a "brakes" factor: $(1 - P/M)$.
$$ \frac{dP}{dt} = kP \left( 1 - \frac{P}{M} \right) $$

**Phase Line Analysis:**
This is an autonomous equation $f(P)$. Where are the equilibria?
$kP(1 - P/M) = 0 \implies P = 0$ or $P = M$.
*   If $P < M$, $(1 - P/M)$ is positive, so $P'$ is positive ($\uparrow$).
*   If $P > M$, $(1 - P/M)$ is negative, so $P'$ is negative ($\downarrow$).

Conclusion: The carrying capacity $P=M$ is a **Stable Attractor**. No matter the starting population, it will always level off exactly at $M$.

### Solving the Logistic Equation
To find the exact algebraic function $P(t)$, we must solve the ODE. It is separable!
$$ \frac{M}{P(M-P)} dP = k \, dt $$
To integrate the left side, you must use **Partial Fraction Decomposition**:
$$ \frac{M}{P(M-P)} = \frac{1}{P} + \frac{1}{M-P} $$
So the integral becomes:
$$ \int \left( \frac{1}{P} + \frac{1}{M-P} \right) dP = \int k \, dt $$
$$ \ln|P| - \ln|M-P| = kt + C $$
Using log properties: $\ln\left|\frac{P}{M-P}\right| = kt + C$.
Exponentiate both sides: $\frac{P}{M-P} = A e^{kt}$ (where $A = e^C$).
After messy algebraic rearrangement to solve explicitly for $P$:
$$ P(t) = \frac{M}{1 + B e^{-kt}} $$
*(where $B$ is a constant determined by the initial population $P_0$).*

This generates the famous "S-curve" (sigmoid curve) used extensively in machine learning and biology.


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Population Dynamics",
        "icon": "BrainCircuit",
        "description": "Topic: Population Dynamics"
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
