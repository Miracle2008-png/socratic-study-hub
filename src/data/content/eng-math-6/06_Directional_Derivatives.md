# Directional Derivatives

Partial derivatives $f_x$ and $f_y$ tell us the slope of a surface if we walk exactly due East (the x-direction) or exactly due North (the y-direction).

But what if you are hiking on a mountain $z = f(x,y)$ and you want to walk Northeast? Or South-Southwest? The **directional derivative** allows you to find the slope of the surface in *any* arbitrary direction.

## 1. Defining the Direction

To specify a direction, we use a 2D vector $\vec{v} = \langle a, b \rangle$.
Crucially, to find a pure slope, we must use a **unit vector** $\vec{u}$ (a vector with length 1). If we don't, our "slope" will be artificially inflated by the length of the vector.

If you are given a direction vector $\vec{v}$ that is not a unit vector, you must normalize it first by dividing by its magnitude:
$$ \vec{u} = \frac{\vec{v}}{|\vec{v}|} = \langle u_1, u_2 \rangle $$
Where $u_1^2 + u_2^2 = 1$.

Alternatively, the direction can be given as an angle $\theta$ from the positive x-axis. In this case, the unit vector is simply:
$$ \vec{u} = \langle \cos\theta, \sin\theta \rangle $$

## 2. The Directional Derivative Formula

The directional derivative of $f(x,y)$ at a point $(x_0, y_0)$ in the direction of the unit vector $\vec{u} = \langle u_1, u_2 \rangle$ is denoted $D_{\vec{u}} f(x_0, y_0)$.

If $f$ is differentiable, it is incredibly easy to calculate. It is simply a linear combination of the two partial derivatives, weighted by the components of the direction vector:

$$ D_{\vec{u}} f(x,y) = f_x(x,y) \cdot u_1 + f_y(x,y) \cdot u_2 $$

If the direction is given by an angle $\theta$:
$$ D_{\vec{u}} f(x,y) = f_x(x,y)\cos\theta + f_y(x,y)\sin\theta $$

**Sanity Check:**
What if we choose the direction $\vec{u} = \langle 1, 0 \rangle$ (due East)?
$D_{\vec{u}} f = f_x(1) + f_y(0) = f_x$. The formula correctly returns the partial derivative with respect to x.

## 3. Example Calculation

Find the directional derivative of $f(x,y) = x^2 y^3 - 4y$ at the point $(2, -1)$ in the direction of the vector $\vec{v} = \langle 2, 5 \rangle$.

1.  **Normalize the vector:**
    $|\vec{v}| = \sqrt{2^2 + 5^2} = \sqrt{29}$
    $\vec{u} = \langle \frac{2}{\sqrt{29}}, \frac{5}{\sqrt{29}} \rangle$
2.  **Calculate the partial derivatives:**
    $f_x = 2xy^3$
    $f_y = 3x^2y^2 - 4$
3.  **Evaluate partials at the point $(2, -1)$:**
    $f_x(2, -1) = 2(2)(-1)^3 = -4$
    $f_y(2, -1) = 3(2)^2(-1)^2 - 4 = 12 - 4 = 8$
4.  **Apply the formula:**
    $D_{\vec{u}} f = (-4)\left(\frac{2}{\sqrt{29}}\right) + (8)\left(\frac{5}{\sqrt{29}}\right) = \frac{-8 + 40}{\sqrt{29}} = \frac{32}{\sqrt{29}}$

If you walk from the point $(2, -1)$ in the direction $\langle 2, 5 \rangle$, you will be walking uphill with a slope of $\frac{32}{\sqrt{29}}$.

## 4. Functions of Three Variables

The concept extends perfectly to 3D. If $w = f(x,y,z)$ represents temperature, and you are flying a drone through space in the direction of a 3D unit vector $\vec{u} = \langle u_1, u_2, u_3 \rangle$, the rate of change of temperature you experience is:

$$ D_{\vec{u}} f(x,y,z) = f_x u_1 + f_y u_2 + f_z u_3 $$


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Directional Derivatives",
        "icon": "BrainCircuit",
        "description": "Topic: Directional Derivatives"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Partial Derivative (∂f/∂x)",
        "icon": "FunctionSquare",
        "description": "Holding other variables constant while differentiating."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Gradient Vector (∇f)",
        "icon": "Sigma",
        "description": "Vector pointing in the direction of steepest ascent."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Directional Derivative",
        "icon": "Activity",
        "description": "Rate of change in a specific unit vector direction."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Tangent Planes",
        "icon": "Layers",
        "description": "Linear approximation of a surface at a specific point."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Optimization (Lagrange)",
        "icon": "Target",
        "description": "Finding local maxima/minima using critical points & multipliers."
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
