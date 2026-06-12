# 6. Curl and Divergence

In vector calculus, there are two fundamental operations you can perform on a vector field to reveal its physical behavior: **Curl** and **Divergence**. These operators are the multivariable equivalents of taking a derivative.

We use the "del" vector differential operator to compute them:
$$ \nabla = \left\langle \frac{\partial}{\partial x}, \frac{\partial}{\partial y}, \frac{\partial}{\partial z} \right\rangle $$

### 1. Divergence (The Dot Product)
**Divergence** measures the tendency of a vector field to originate from or converge upon a given point. It measures "outflow" vs "inflow."
*   If you drop a leaf in a river and the water around it is expanding outward (like a spring), the divergence is positive.
*   If the water is compressing inward (like a drain), the divergence is negative.
*   If the water just flows uniformly without compressing or expanding, divergence is zero (called an *incompressible* fluid).

**Calculation:**
Divergence is the **dot product** of $\nabla$ and the vector field $\mathbf{F} = \langle P, Q, R \rangle$. Because it is a dot product, the result is a **Scalar Field** (a number).
$$ \text{div } \mathbf{F} = \nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} $$

**Example:**
Find the divergence of $\mathbf{F} = \langle x^2y, y^3z, z^2x \rangle$.
$$ \nabla \cdot \mathbf{F} = \frac{\partial}{\partial x}(x^2y) + \frac{\partial}{\partial y}(y^3z) + \frac{\partial}{\partial z}(z^2x) = 2xy + 3y^2z + 2zx $$

### 2. Curl (The Cross Product)
**Curl** measures the tendency of a vector field to rotate or swirl around a point.
*   If you drop a paddlewheel in a river and the water spins it, the curl is non-zero. The axis of the paddlewheel aligns with the curl vector.
*   If the paddlewheel just translates without spinning, the curl is zero (called an *irrotational* field).

**Calculation:**
Curl is the **cross product** of $\nabla$ and the vector field $\mathbf{F}$. Because it is a cross product, the result is a **Vector Field**.
$$ \text{curl } \mathbf{F} = \nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix} $$

Expanding the determinant yields:
$$ \text{curl } \mathbf{F} = \left( \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} \right)\mathbf{i} - \left( \frac{\partial R}{\partial x} - \frac{\partial P}{\partial z} \right)\mathbf{j} + \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)\mathbf{k} $$

*(Notice that the $\mathbf{k}$ component is exactly $Q_x - P_y$, which is the integrand from Green's Theorem!)*

### The Ultimate Test for Conservative Fields
Earlier, we learned that a 2D field is conservative if $Q_x = P_y$. 
For a 3D vector field $\mathbf{F}$, the test is much more elegant:

**A vector field $\mathbf{F}$ is conservative (a gradient field) if and only if its curl is the zero vector:**
$$ \text{curl } \mathbf{F} = \mathbf{0} $$

*(Why? Because of a fundamental identity in vector calculus: The curl of a gradient is always zero. $\nabla \times (\nabla f) = \mathbf{0}$).*


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Curl and Divergence",
        "icon": "BrainCircuit",
        "description": "Topic: Curl and Divergence"
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
