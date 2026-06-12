# Maximum and Minimum Values

Just as in single-variable calculus, finding the peaks (maxima) and valleys (minima) of a surface is a critical optimization task.

## 1. Critical Points

In 1D, a critical point occurs where the tangent line is horizontal ($f'(x) = 0$).
In 2D, a critical point occurs where the tangent *plane* is horizontal. For a plane to be completely flat, its slope in the x-direction and its slope in the y-direction must *both* be zero simultaneously.

A point $(a,b)$ is a **critical point** if:
1.  $f_x(a,b) = 0$ **AND** $f_y(a,b) = 0$. (This is equivalent to saying $\nabla f = \vec{0}$).
2.  OR if either partial derivative does not exist.

To find critical points, you must take both partial derivatives, set them both equal to 0, and solve the resulting system of two equations.

## 2. Saddle Points

In 1D, a critical point $f'(x)=0$ doesn't guarantee a max or min; it could be an inflection point (like $y=x^3$ at $x=0$).

In 2D, a critical point can be a local maximum, a local minimum, or a **saddle point**.
A saddle point looks like a horse saddle or a mountain pass. If you walk in the x-direction, it looks like a valley (a minimum). But if you turn 90 degrees and walk in the y-direction, it looks like a peak (a maximum). Because it is a minimum in one direction and a maximum in another, it is neither a true local max nor a local min.

## 3. The Second Derivatives Test

To classify a critical point as a max, min, or saddle point, we use the 2D version of the Second Derivative Test.

First, calculate the **Discriminant** (also called the Hessian determinant) at the critical point $(a,b)$:
$$ D = f_{xx}(a,b) \cdot f_{yy}(a,b) - [f_{xy}(a,b)]^2 $$

Once you have $D$, apply these rules:
1.  **If $D > 0$ and $f_{xx} > 0$**: The surface is concave up in all directions. It is a **Local Minimum**.
2.  **If $D > 0$ and $f_{xx} < 0$**: The surface is concave down in all directions. It is a **Local Maximum**.
3.  **If $D < 0$**: The concavities disagree. It is a **Saddle Point**.
4.  **If $D = 0$**: The test is **inconclusive**. (You must use graphing or definition testing).

*(Note: In rules 1 and 2, checking $f_{xx}$ is standard, but checking $f_{yy}$ works exactly the same because if $D > 0$, $f_{xx}$ and $f_{yy}$ must have the same sign).*

## 4. Absolute Maxima and Minima on Closed Regions

The Extreme Value Theorem states that a continuous function on a closed, bounded region $D$ in the xy-plane *must* attain an absolute maximum and an absolute minimum.

Just like finding absolute extrema on a closed interval $[a,b]$ in 1D, the absolute max/min will occur either at a local critical point inside the region, or somewhere on the boundary edge.

**The Method:**
1.  Find the values of $f(x,y)$ at all critical points *inside* the region $D$.
2.  Find the maximum and minimum values of $f(x,y)$ on the *boundary* of $D$. (This usually involves substituting the equation of the boundary into $f(x,y)$ to turn it into a 1D calculus problem).
3.  Compare all the values from steps 1 and 2. The largest is the absolute maximum; the smallest is the absolute minimum.


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Maximum and Minimum Values",
        "icon": "BrainCircuit",
        "description": "Topic: Maximum and Minimum Values"
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
