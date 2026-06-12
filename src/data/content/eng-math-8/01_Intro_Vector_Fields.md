# 1. Introduction to Vector Fields

Up to this point, our multivariable functions $f(x,y,z)$ have been **scalar fields**. If you plug in a coordinate, the function returns a single number (like temperature, density, or pressure).

A **vector field** is a function that assigns a *vector* to every point in space. Instead of returning a single number, it returns a magnitude and a direction.

### Mathematical Definition
In two dimensions, a vector field $\mathbf{F}$ is written as:
$$ \mathbf{F}(x,y) = P(x,y)\mathbf{i} + Q(x,y)\mathbf{j} $$
or
$$ \mathbf{F}(x,y) = \langle P(x,y), Q(x,y) \rangle $$

In three dimensions:
$$ \mathbf{F}(x,y,z) = P(x,y,z)\mathbf{i} + Q(x,y,z)\mathbf{j} + R(x,y,z)\mathbf{k} $$

### Physical Interpretations
1.  **Velocity Fields:** If $\mathbf{F}$ represents the velocity of wind in a hurricane, or water flowing in a river, the vector at point $(x,y)$ tells you exactly which way the particle is moving and how fast.
2.  **Force Fields:** If $\mathbf{F}$ represents a gravitational field or an electric field, the vector at $(x,y)$ tells you the direction and strength of the force that would act on a particle placed there.

### Gradient Fields
The most important type of vector field arises from the **gradient** of a scalar function.
If you have a scalar field $f(x,y,z)$ (like temperature), its gradient is defined as the vector of its partial derivatives:
$$ \nabla f = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right\rangle $$

Because $\nabla f$ assigns a vector to every point, **the gradient of a scalar field is a vector field.**
$$ \mathbf{F} = \nabla f $$
When a vector field $\mathbf{F}$ is the gradient of some scalar function $f$, we call $\mathbf{F}$ a **Conservative Vector Field**, and we call $f$ the **Potential Function**. 

(Think of gravity: the gravitational force field $\mathbf{F}$ is conservative because it is the gradient of a gravitational potential energy field $f$).

### Recognizing Conservative Fields
If you are given a 2D vector field $\mathbf{F} = P\mathbf{i} + Q\mathbf{j}$, how do you know if it is conservative?
According to Clairaut's Theorem of mixed partial derivatives ($f_{xy} = f_{yx}$), a field is conservative if and only if:
$$ \frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x} $$

**Worked Example:**
Is $\mathbf{F}(x,y) = (3x^2 + 2y)\mathbf{i} + (2x + 3y^2)\mathbf{j}$ conservative?
1. Let $P = 3x^2 + 2y$. The derivative with respect to $y$ is: $\frac{\partial P}{\partial y} = 2$.
2. Let $Q = 2x + 3y^2$. The derivative with respect to $x$ is: $\frac{\partial Q}{\partial x} = 2$.
3. Since $2 = 2$, yes! This field is conservative.


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Intro Vector Fields",
        "icon": "BrainCircuit",
        "description": "Topic: Intro Vector Fields"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Vector Fields (F)",
        "icon": "FunctionSquare",
        "description": "Assigning a vector to every point in space."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Line Integrals",
        "icon": "Sigma",
        "description": "Integrating a function or field along a curve C."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Conservative Fields",
        "icon": "Activity",
        "description": "Path independence where ∇ × F = 0."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Curl (∇ × F)",
        "icon": "Layers",
        "description": "Measures the macroscopic rotation of the field."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Divergence (∇ · F)",
        "icon": "Target",
        "description": "Measures the magnitude of a source or sink at a given point."
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
