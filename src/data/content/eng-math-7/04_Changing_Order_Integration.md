# 4. Changing the Order of Integration

Sometimes you are given an iterated integral that is extremely difficult, or completely impossible, to evaluate in its current order.

For example:
$$ \int_{0}^{1} \int_{x}^{1} \sin(y^2) dy \, dx $$

There is no elementary antiderivative for $\sin(y^2)$. We cannot perform the inner $dy$ integral. 

However, if we reverse the order of integration to $dx\,dy$, we might be able to integrate it. 

### How to Reverse the Order
**You cannot simply swap the limits!** (e.g., you cannot just write $\int_{x}^{1} \int_{0}^{1}$). 
If the limits contain variables, swapping them puts variables on the outside integral, which violates the golden rule of multiple integrals.

Instead, you must:
1.  **Extract the Inequalities:** Read the current limits to figure out the 2D region.
2.  **Sketch the Region:** Draw the shape on the xy-plane.
3.  **Reslice the Region:** If the region was Type I (vertical slices), redefine it as a Type II region (horizontal slices).
4.  **Write the New Integral:** Set up the integral with the new boundaries.

### Worked Example: Reversing the Order

**Problem:** Evaluate $I = \int_{0}^{1} \int_{x}^{1} \sin(y^2) dy \, dx$

**Step 1: Extract the Inequalities**
The outer limits are for $x$: $0 \le x \le 1$.
The inner limits are for $y$: $x \le y \le 1$.

**Step 2: Sketch the Region**
*   The line $y = x$ is a diagonal line.
*   The line $y = 1$ is a horizontal ceiling.
*   We want the area above $y=x$ and below $y=1$, bounded between $x=0$ and $x=1$. 
*   This forms a triangle with vertices at $(0,0)$, $(1,1)$, and $(0,1)$.

**Step 3: Reslice the Region (Type II)**
We currently have vertical slices ($dy$ inside). We need horizontal slices ($dx$ inside).
*   For horizontal slices, what are the constant limits for $y$? The triangle spans from $y=0$ at the bottom to $y=1$ at the top. So: $0 \le y \le 1$.
*   For a given $y$, where does a horizontal slice start and end? It starts at the y-axis ($x=0$) and moves right until it hits the diagonal line ($x=y$). So: $0 \le x \le y$.

**Step 4: Write the New Integral**
$$ I = \int_{0}^{1} \int_{0}^{y} \sin(y^2) dx \, dy $$

**Step 5: Evaluate**
Now the inner integral is with respect to $x$. Since $\sin(y^2)$ behaves as a constant relative to $x$, this is trivial!

Inner integral:
$$ \int_{0}^{y} \sin(y^2) dx = \left[ x\sin(y^2) \right]_{x=0}^{x=y} = y\sin(y^2) $$

Outer integral:
$$ I = \int_{0}^{1} y\sin(y^2) dy $$
This can be solved with a simple $u$-substitution! Let $u = y^2 \implies du = 2ydy \implies \frac{1}{2}du = ydy$.
$$ I = \int_{0}^{1} \frac{1}{2}\sin(u) du = \left[ -\frac{1}{2}\cos(u) \right]_{0}^{1} $$
$$ I = -\frac{1}{2}(\cos(1) - \cos(0)) = \frac{1}{2}(1 - \cos(1)) $$

By changing the order of integration, an impossible problem became completely solvable.


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Changing Order Integration",
        "icon": "BrainCircuit",
        "description": "Topic: Changing Order Integration"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Double Integrals",
        "icon": "FunctionSquare",
        "description": "Integrating over 2D regions (Area/Volume)."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Fubini's Theorem",
        "icon": "Sigma",
        "description": "Evaluating via iterated single integrals."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Polar Coordinates (r, θ)",
        "icon": "Activity",
        "description": "Jacobian transformation: dx dy = r dr dθ."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Triple Integrals",
        "icon": "Layers",
        "description": "Integrating over 3D volumes (Mass/Density)."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Cylindrical & Spherical",
        "icon": "Target",
        "description": "Advanced coordinate transformations for symmetric regions."
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
