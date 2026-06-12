# 1. What is a Differential Equation?

In basic algebra, we solve equations for an unknown *number* (e.g., solve $x^2 - 4 = 0$ to find $x = 2$).
In calculus and engineering, we frequently encounter a higher level of problem: we must solve equations for an unknown *function*. 

A **Differential Equation (DE)** is an equation that contains an unknown function and one or more of its derivatives.

### Why do we need them?
Nature rarely tells us exactly what a function $y(t)$ is. Instead, physics tells us how things *change*. 
*   Newton's Second Law ($F = ma$) relates force to acceleration ($y''$).
*   Radioactive decay states that a substance degrades at a rate proportional to how much is currently left ($y' = -ky$).
By solving differential equations, we work backward from the "rules of change" to discover the actual function $y(t)$ describing the system's state at any time $t$.

### Classification
To solve a differential equation, you must first classify it. There are three main classifications:

1.  **Type (ODE vs PDE):**
    *   **Ordinary Differential Equation (ODE):** The unknown function depends on only *one* independent variable (e.g., $y$ depends only on time $t$). It contains only ordinary derivatives ($dy/dt$).
    *   **Partial Differential Equation (PDE):** The unknown function depends on *multiple* independent variables (e.g., temperature $T$ depends on $x, y, z,$ and $t$). It contains partial derivatives ($\partial T/\partial x$).

2.  **Order:**
    The order of a DE is the highest derivative that appears in the equation.
    *   $y' + 3y = 0$ is **First-Order**.
    *   $m\frac{d^2y}{dt^2} + c\frac{dy}{dt} + ky = 0$ is **Second-Order**.

3.  **Linearity:**
    An ODE is **linear** if the unknown function $y$ and all its derivatives appear only to the first power, and are not multiplied by each other or nested inside other functions (like $\sin(y)$ or $e^y$).
    *   $y' + t^2 y = \cos(t)$ is **Linear** (the $t^2$ and $\cos(t)$ are fine because they are the independent variable).
    *   $y' + y^2 = 0$ is **Non-linear** (because $y$ is squared).
    *   $yy' = t$ is **Non-linear** (because $y$ is multiplied by $y'$).

In this unit, we will focus exclusively on solving **First-Order Ordinary Differential Equations**.


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Intro Differential Equations",
        "icon": "BrainCircuit",
        "description": "Topic: Intro Differential Equations"
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
