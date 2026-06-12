# Maximum and Minimum Values

Just as in single-variable calculus, finding the peaks (maxima) and valleys (minima) of a surface is a critical mathematical task, representing the core of **optimization**.

## 1. Critical Points

In 1D, a critical point occurs where the tangent line is horizontal ($f'(x) = 0$).
In 2D, a critical point occurs where the tangent *plane* is perfectly horizontal. For a plane to be completely flat, its slope in the x-direction and its slope in the y-direction must *both* be zero simultaneously.

A point $(a,b)$ is a **critical point** of $f(x,y)$ if:
1.  $f_x(a,b) = 0$ **AND** $f_y(a,b) = 0$. (This is equivalent to stating that the gradient $\nabla f = \vec{0}$).
2.  OR if either partial derivative does not exist at $(a,b)$.

To find critical points, you must calculate both first-order partial derivatives, set them both equal to 0, and solve the resulting system of simultaneous equations.

## 2. Saddle Points

In 1D, a critical point $f'(x)=0$ doesn't guarantee a max or min; it could be an inflection point (like $y=x^3$ at $x=0$).
In 2D, the situation is more complex. A critical point can be a local maximum, a local minimum, or a **saddle point**.

A saddle point looks exactly like a horse saddle or a mountain pass. If you walk along the surface in the x-direction, the point might look like a valley (a minimum). But if you turn 90 degrees and walk in the y-direction, it looks like a peak (a maximum). Because it is a minimum in one cross-section and a maximum in another, it is neither a true local max nor a local min.

## 3. The Second Derivatives Test

To mathematically classify a critical point without having to graph it, we use the 2D version of the Second Derivative Test, which relies on the curvature of the surface.

First, calculate the **Discriminant** $D$ (often derived from the Hessian determinant) at the critical point $(a,b)$:
$$ D = f_{xx}(a,b) \cdot f_{yy}(a,b) - [f_{xy}(a,b)]^2 $$

Once you have computed $D$, apply these rules:
1.  **If $D > 0$ and $f_{xx} > 0$**: The surface is curving upward in all directions (concave up). It is a **Local Minimum**.
2.  **If $D > 0$ and $f_{xx} < 0$**: The surface is curving downward in all directions (concave down). It is a **Local Maximum**.
3.  **If $D < 0$**: The concavities disagree in different directions. It is a **Saddle Point**.
4.  **If $D = 0$**: The test is **inconclusive**. Higher-order testing or graphing is required.

*(Note: In rules 1 and 2, checking $f_{xx}$ is standard, but checking $f_{yy}$ works exactly the same because if $D > 0$, the mathematical structure dictates that $f_{xx}$ and $f_{yy}$ must have the same sign).*

## 4. Absolute Maxima and Minima on Closed Regions

The **Extreme Value Theorem** states that a continuous function on a closed, bounded region $D$ in the xy-plane *must* attain both an absolute maximum and an absolute minimum.

Just like finding absolute extrema on a closed interval $[a,b]$ in 1D, the absolute max/min will occur either at a local critical point *inside* the region, or somewhere on the boundary edge.

**The Method for Absolute Extrema:**
1.  **Interior:** Find all critical points inside the region $D$ and evaluate $f(x,y)$ at these points.
2.  **Boundary:** Find the maximum and minimum values of $f(x,y)$ on the boundary of $D$. This usually involves substituting the parametric equations of the boundary (or isolating a variable) into $f(x,y)$ to collapse it into a 1D calculus problem.
3.  **Compare:** Compare all the function values from steps 1 and 2. The largest output is the absolute maximum; the smallest is the absolute minimum.

## 5. Engineering & Real-World Applications

Optimization is the lifeblood of engineering. You are constantly trying to minimize cost or maximize efficiency.
*   **Structural Engineering:** When designing a bridge truss, engineers use optimization to minimize the total weight of the steel used while ensuring the structural stress never exceeds a failure threshold. Critical points help find areas of maximum stress concentration.
*   **Thermal Design:** Finding the maximum temperature on a microprocessor die allows engineers to optimally place heat sinks or cooling channels exactly where the "hotspots" (local maxima) occur.
*   **Data Science:** While Gradient Descent finds local minima iteratively, analytical methods (like solving $\nabla f = \vec{0}$) are used in algorithms like Ordinary Least Squares (OLS) linear regression to explicitly find the exact minimum of the error function.

## 6. Worked Examples

### Example 1: Finding and Classifying Critical Points (Easy)
Find and classify all critical points of $f(x,y) = x^2 + y^2 - 2x - 6y + 14$.

**Step 1:** Find critical points by setting $\nabla f = \vec{0}$.
$$ f_x = 2x - 2 = 0 \implies x = 1 $$
$$ f_y = 2y - 6 = 0 \implies y = 3 $$
There is one critical point: $(1, 3)$.

**Step 2:** Compute second partial derivatives.
$$ f_{xx} = 2 $$
$$ f_{yy} = 2 $$
$$ f_{xy} = 0 $$

**Step 3:** Calculate the Discriminant $D$ at $(1, 3)$.
$$ D = (2)(2) - (0)^2 = 4 $$
Since $D = 4 > 0$ and $f_{xx} = 2 > 0$, the point $(1, 3)$ is a **Local Minimum**.

### Example 2: Saddle Points (Medium)
Find and classify the critical points of $f(x,y) = y^2 - x^2$.

**Step 1:** Find critical points.
$$ f_x = -2x = 0 \implies x = 0 $$
$$ f_y = 2y = 0 \implies y = 0 $$
Critical point at $(0, 0)$.

**Step 2:** Compute second derivatives.
$$ f_{xx} = -2 $$
$$ f_{yy} = 2 $$
$$ f_{xy} = 0 $$

**Step 3:** Calculate the Discriminant $D$ at $(0, 0)$.
$$ D = (-2)(2) - (0)^2 = -4 $$
Since $D = -4 < 0$, the point $(0, 0)$ is a **Saddle Point**. (Notice how $f_{xx}$ and $f_{yy}$ have opposite signs, indicating opposite concavities).

### Example 3: Absolute Extrema on a Closed Region (Hard)
Find the absolute maximum and minimum values of $f(x,y) = x^2 + y^2 - 2x$ on the closed triangular region with vertices $(2,0), (0,2),$ and $(0,-2)$.

**Step 1: Check the interior.**
$$ f_x = 2x - 2 = 0 \implies x = 1 $$
$$ f_y = 2y = 0 \implies y = 0 $$
Critical point at $(1, 0)$. This point is inside the triangle.
Evaluate the function: $f(1,0) = 1^2 + 0^2 - 2(1) = -1$.

**Step 2: Check the boundaries.**
The triangle has three boundary segments.
*   **Segment 1 ($x=0$, from $y=-2$ to $y=2$):**
    Substitute $x=0$ into $f$: $g(y) = f(0,y) = y^2$.
    Max/min of $y^2$ on $[-2, 2]$ occur at the endpoints and critical points.
    $g(2) = 4$, $g(-2) = 4$, $g(0) = 0$.
*   **Segment 2 (Line from $(0,2)$ to $(2,0)$):** Equation is $y = -x + 2$ for $x \in [0,2]$.
    Substitute $y$: $h(x) = f(x, -x+2) = x^2 + (-x+2)^2 - 2x = x^2 + x^2 - 4x + 4 - 2x = 2x^2 - 6x + 4$.
    Find 1D critical points: $h'(x) = 4x - 6 = 0 \implies x = 1.5$.
    If $x=1.5$, $y = -1.5+2 = 0.5$. Evaluate: $f(1.5, 0.5) = h(1.5) = 2(1.5)^2 - 6(1.5) + 4 = 4.5 - 9 + 4 = -0.5$.
    Also check endpoints: $x=0 \implies f(0,2) = 4$. $x=2 \implies f(2,0) = 2^2+0-2(2) = 0$.
*   **Segment 3 (Line from $(0,-2)$ to $(2,0)$):** Equation is $y = x - 2$ for $x \in [0,2]$.
    Substitute $y$: $k(x) = f(x, x-2) = x^2 + (x-2)^2 - 2x = 2x^2 - 6x + 4$.
    This is identical to Segment 2. Critical point at $x=1.5, y=-0.5$.
    Evaluate: $f(1.5, -0.5) = -0.5$.
    Endpoints: $f(0,-2)=4$, $f(2,0)=0$.

**Step 3: Compare all values.**
We collected the following values:
Interior: $-1$
Boundaries: $4, 0, -0.5$
**Answer:** The absolute maximum is **$4$** (at $(0,2)$ and $(0,-2)$). The absolute minimum is **$-1$** (at $(1,0)$).

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Optimization Basics",
        "icon": "Target",
        "description": "Finding maxima, minima, and saddle points."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Critical Points",
        "icon": "Crosshair",
        "description": "Solve ∇f = 0 (fx=0, fy=0)"
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "2nd Derivative Test",
        "icon": "Calculator",
        "description": "Discriminant D = fxx·fyy - (fxy)²"
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Local Max/Min",
        "icon": "Mountain",
        "description": "D > 0. Curvature dictates Max or Min."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Saddle Point",
        "icon": "Spline",
        "description": "D < 0. Neither max nor min."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Absolute Extrema",
        "icon": "Maximize",
        "description": "Compare interior points vs. boundary."
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
      "source": "3",
      "target": "5",
      "animated": true
    },
    {
      "source": "2",
      "target": "6",
      "animated": true
    }
  ]
}
```
