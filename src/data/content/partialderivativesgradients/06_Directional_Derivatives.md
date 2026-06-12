# Directional Derivatives

Partial derivatives $f_x$ and $f_y$ lock us into an axis-aligned viewpoint. They tell us the slope of a surface if we walk exactly due East (the positive x-direction) or exactly due North (the positive y-direction).

But nature and engineering are rarely restricted to grid lines. If you are analyzing a topographic map $z = f(x,y)$ and want to build a road heading Northeast, or South-Southwest, you need the **directional derivative**. It allows you to calculate the precise rate of change (slope) of the surface in *any* arbitrary continuous direction.

## 1. Defining the Direction Vector

To specify a heading, we use a 2D direction vector $\vec{v} = \langle a, b \rangle$. 

Crucially, to find a true geometric slope, the direction vector must be a **unit vector** $\vec{u}$ (a vector with length exactly equal to 1). If we fail to do this, our calculated "slope" will be artificially scaled by the length of the vector, destroying its physical meaning.

If you are given a raw direction vector $\vec{v}$, you must normalize it by dividing by its magnitude $|\vec{v}|$:
$$ \vec{u} = \frac{\vec{v}}{|\vec{v}|} = \langle u_1, u_2 \rangle $$
Where the components satisfy $u_1^2 + u_2^2 = 1$.

Alternatively, the direction can be specified purely by an angle $\theta$ measured counterclockwise from the positive x-axis. In this case, trigonometry gives us the unit vector automatically:
$$ \vec{u} = \langle \cos\theta, \sin\theta \rangle $$

## 2. The Directional Derivative Formula and the Gradient

The directional derivative of a function $f(x,y)$ at a point $(x_0, y_0)$ in the direction of the unit vector $\vec{u} = \langle u_1, u_2 \rangle$ is denoted $D_{\vec{u}} f(x_0, y_0)$.

If the function is differentiable, calculating it is remarkably elegant. It is simply a linear combination of the two partial derivatives, weighted by the components of the direction vector:

$$ D_{\vec{u}} f(x,y) = f_x(x,y) \cdot u_1 + f_y(x,y) \cdot u_2 $$

**The Gradient Connection:**
Notice that the right side of that equation looks exactly like a dot product. We can define a special vector containing the partial derivatives called the **Gradient Vector**, denoted $\nabla f$ (read "del f"):
$$ \nabla f = \langle f_x, f_y \rangle $$

We can rewrite the directional derivative profoundly as the dot product of the gradient and the unit vector:
$$ D_{\vec{u}} f = \nabla f \cdot \vec{u} $$

Because $\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\phi$, this implies $D_{\vec{u}} f = |\nabla f|(1)\cos\phi$. This reveals a massive geometric secret:
*   The directional derivative is maximized when $\phi = 0$ (meaning you walk in the exact direction of the gradient).
*   **The gradient vector always points in the direction of steepest ascent.**

**Engineering Context:** In thermodynamics, the gradient of a temperature field indicates the direction of maximum heat flow. In hydrogeology, the gradient of the water table elevation dictates the flow direction of groundwater. Optimization algorithms (like Gradient Descent in Machine Learning) use the negative gradient to find the fastest way down an error surface.

---

## Step-by-Step Examples

### Example 1: Direction from an Angle (Easy)
Find the directional derivative of $f(x,y) = x^2 y^3 - 4y$ at the point $(2, -1)$ in the direction indicated by the angle $\theta = \frac{\pi}{6}$.

**Step 1:** Formulate the unit vector $\vec{u}$.
$$ \vec{u} = \langle \cos(\pi/6), \sin(\pi/6) \rangle = \langle \frac{\sqrt{3}}{2}, \frac{1}{2} \rangle $$

**Step 2:** Calculate the partial derivatives.
$$ f_x(x,y) = 2xy^3 $$
$$ f_y(x,y) = 3x^2y^2 - 4 $$

**Step 3:** Evaluate the partials at the target point $(2, -1)$.
$$ f_x(2, -1) = 2(2)(-1)^3 = -4 $$
$$ f_y(2, -1) = 3(2)^2(-1)^2 - 4 = 12 - 4 = 8 $$

**Step 4:** Apply the directional derivative formula.
$$ D_{\vec{u}} f = f_x u_1 + f_y u_2 $$
$$ D_{\vec{u}} f = (-4)\left(\frac{\sqrt{3}}{2}\right) + (8)\left(\frac{1}{2}\right) = -2\sqrt{3} + 4 $$
The slope in that specific direction is $4 - 2\sqrt{3}$ (approx 0.536).

### Example 2: Direction from a Raw Vector (Medium)
Find the directional derivative of $f(x,y) = e^{xy} + x^2$ at the point $(1, 0)$ in the direction of the vector $\vec{v} = \langle 3, -4 \rangle$.

**Step 1:** Normalize the raw vector into a unit vector $\vec{u}$.
$$ |\vec{v}| = \sqrt{3^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5 $$
$$ \vec{u} = \frac{\vec{v}}{|\vec{v}|} = \langle \frac{3}{5}, -\frac{4}{5} \rangle $$

**Step 2:** Calculate and evaluate the gradient $\nabla f = \langle f_x, f_y \rangle$ at $(1, 0)$.
$$ f_x(x,y) = y e^{xy} + 2x \implies f_x(1,0) = (0)e^0 + 2(1) = 2 $$
$$ f_y(x,y) = x e^{xy} \implies f_y(1,0) = (1)e^0 = 1 $$
$$ \nabla f(1,0) = \langle 2, 1 \rangle $$

**Step 3:** Compute the dot product $D_{\vec{u}} f = \nabla f \cdot \vec{u}$.
$$ D_{\vec{u}} f = \langle 2, 1 \rangle \cdot \langle \frac{3}{5}, -\frac{4}{5} \rangle = 2\left(\frac{3}{5}\right) + 1\left(-\frac{4}{5}\right) = \frac{6}{5} - \frac{4}{5} = \frac{2}{5} $$

### Example 3: Finding Steepest Ascent (Medium)
You are standing on a hill whose elevation is modeled by $H(x,y) = 5000 - 0.01x^2 - 0.02y^2$ at the coordinates $(50, 80)$. In what direction should you walk to climb the steepest path? What is the slope of that steepest path?

**Step 1:** Find the gradient vector at the point. The gradient *is* the direction of steepest ascent.
$$ H_x = -0.02x \implies H_x(50, 80) = -0.02(50) = -1 $$
$$ H_y = -0.04y \implies H_y(50, 80) = -0.04(80) = -3.2 $$
$$ \nabla H(50, 80) = \langle -1, -3.2 \rangle $$
The direction of steepest ascent is the vector $\langle -1, -3.2 \rangle$.

**Step 2:** Find the maximum slope. The maximum directional derivative is simply the magnitude of the gradient.
$$ \text{Max Slope} = |\nabla H| = \sqrt{(-1)^2 + (-3.2)^2} = \sqrt{1 + 10.24} = \sqrt{11.24} \approx 3.35 $$
The steepest uphill slope is approximately 3.35.

### Example 4: 3D Heat Transfer Gradient (Hard)
The temperature in a 3D reactor core is given by $T(x,y,z) = 200 e^{-x^2 - y^2 - z^2}$. A cooling probe is moving from the point $P(1, 1, 1)$ toward the origin $(0,0,0)$. What is the rate of change of temperature in that specific direction?

**Step 1:** Formulate the direction vector $\vec{v}$ from $P$ to the origin, and normalize it.
$$ \vec{v} = \text{Target} - \text{Start} = \langle 0-1, 0-1, 0-1 \rangle = \langle -1, -1, -1 \rangle $$
$$ |\vec{v}| = \sqrt{(-1)^2 + (-1)^2 + (-1)^2} = \sqrt{3} $$
$$ \vec{u} = \langle -\frac{1}{\sqrt{3}}, -\frac{1}{\sqrt{3}}, -\frac{1}{\sqrt{3}} \rangle $$

**Step 2:** Find the 3D gradient vector $\nabla T = \langle T_x, T_y, T_z \rangle$.
$$ T_x = 200(-2x)e^{-x^2 - y^2 - z^2} = -400x e^{-x^2 - y^2 - z^2} $$
By symmetry:
$$ T_y = -400y e^{-x^2 - y^2 - z^2} $$
$$ T_z = -400z e^{-x^2 - y^2 - z^2} $$

**Step 3:** Evaluate $\nabla T$ at the point $(1, 1, 1)$.
The exponential term becomes $e^{-1^2 - 1^2 - 1^2} = e^{-3}$.
$$ \nabla T(1,1,1) = \langle -400 e^{-3}, -400 e^{-3}, -400 e^{-3} \rangle = -400 e^{-3} \langle 1, 1, 1 \rangle $$

**Step 4:** Calculate $D_{\vec{u}} T = \nabla T \cdot \vec{u}$.
$$ D_{\vec{u}} T = \left( -400 e^{-3} \langle 1, 1, 1 \rangle \right) \cdot \langle -\frac{1}{\sqrt{3}}, -\frac{1}{\sqrt{3}}, -\frac{1}{\sqrt{3}} \rangle $$
$$ D_{\vec{u}} T = -400 e^{-3} \left( 1(-\frac{1}{\sqrt{3}}) + 1(-\frac{1}{\sqrt{3}}) + 1(-\frac{1}{\sqrt{3}}) \right) $$
$$ D_{\vec{u}} T = -400 e^{-3} \left( -\frac{3}{\sqrt{3}} \right) = 400\sqrt{3} e^{-3} \approx 34.5 $$
The temperature is increasing at approximately $34.5$ degrees per unit distance as the probe moves inward.

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Directional Derivatives",
        "icon": "Compass",
        "description": "Finding slopes in arbitrary 2D/3D headings."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Unit Vector Normalization",
        "icon": "ArrowUpRight",
        "description": "u = v / |v| (Crucial for true slope)"
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "The Gradient Vector (∇f)",
        "icon": "Sigma",
        "description": "Vector of partials: <fx, fy, fz>"
      },
      "style": {
        "background": "#0f766e",
        "color": "#ccfbf1"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Dot Product Formula",
        "icon": "Activity",
        "description": "Du f = ∇f · u"
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Steepest Ascent",
        "icon": "TrendingUp",
        "description": "Gradient points to maximum positive slope."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Engineering Heat/Flow Flux",
        "icon": "Wind",
        "description": "Modeling flow across concentration gradients."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
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
      "source": "1",
      "target": "3",
      "animated": true
    },
    {
      "source": "2",
      "target": "4",
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
