# 4. Changing the Order of Integration

In multivariate calculus, you will frequently encounter iterated double integrals that appear completely impossible to solve in their given order. This usually happens when the inner integral involves a function that lacks an elementary antiderivative (such as $\sin(y^2)$, $e^{x^2}$, or $\frac{\sin x}{x}$).

However, by leveraging **Fubini's Theorem** over non-rectangular regions, we can reverse the order of integration (e.g., from $dy \, dx$ to $dx \, dy$). What is intractable in one direction often becomes trivial in the other.

### Engineering Applications
Why does the order of integration matter in the real world?
*   **CNC Machining & Toolpath Optimization:** When programming a CNC mill to face a complex 2D pocket, the machine can raster in the X-direction or the Y-direction. Changing the order of integration is analogous to changing the raster direction—one direction might involve fewer passes, simpler boundaries, or avoid mechanical singularities.
*   **Thermal & Fluid Dynamics:** When integrating heat flux over a non-rectangular surface (like an airplane wing), integrating along the span first rather than the chord might align perfectly with the thermal boundary conditions, turning a numerical nightmare into a closed-form solution.

### How to Reverse the Order
**You cannot simply swap the integral limits!** 
If the limits contain variables (which they do for non-rectangular regions), blindly swapping them places variables on the outer integral. This violates the golden rule of multiple integrals: *the final answer of a definite integral must be a scalar number, not a variable expression.*

To correctly reverse the order, follow this strict geometric algorithm:
1.  **Extract the Inequalities:** Read the current limits to algebraically define the 2D region $R$.
2.  **Sketch the Region:** Draw the boundaries on the $xy$-plane. Identify the intersection points.
3.  **Reslice the Region:** 
    *   If the region was originally defined with vertical slices (Type I, $dy \, dx$), redefine it using horizontal slices (Type II, $dx \, dy$).
    *   Find the new absolute minimum and maximum for the outer variable.
    *   Find the new left/right or top/bottom bounds as functions for the inner variable.
4.  **Write the New Integral:** Set up the integral with the new boundaries and evaluate.

---

### Example 1: The Trivial Case (Rectangular Region)
**Difficulty: Easy**

**Problem:** Evaluate $I = \int_{0}^{2} \int_{1}^{3} (4xy) \, dy \, dx$ by changing the order of integration.

**Step-by-step Solution:**
1.  **Extract:** $1 \le y \le 3$ and $0 \le x \le 2$.
2.  **Sketch:** This is just a rectangle.
3.  **Reslice:** Because the boundaries are all constants, we can actually just swap them (this is the *only* time you can do this, per Fubini's Theorem for rectangles).
4.  **Evaluate:**
    $$ I = \int_{1}^{3} \int_{0}^{2} (4xy) \, dx \, dy $$
    Inner: $\int_{0}^{2} 4xy \, dx = [2x^2 y]_{x=0}^{x=2} = 8y$
    Outer: $\int_{1}^{3} 8y \, dy = [4y^2]_{1}^{3} = 4(9) - 4(1) = 32$.

---

### Example 2: The Classic Non-Elementary Integral
**Difficulty: Medium**

**Problem:** Evaluate $I = \int_{0}^{1} \int_{x}^{1} \sin(y^2) \, dy \, dx$

**Step-by-step Solution:**
1.  **Extract:** Outer $0 \le x \le 1$. Inner $x \le y \le 1$.
2.  **Sketch:** The region is bounded below by the diagonal line $y = x$, above by the horizontal line $y = 1$, and on the left by $x = 0$. This forms a triangle with vertices at $(0,0)$, $(0,1)$, and $(1,1)$.
3.  **Reslice:** We need horizontal slices ($dx$ inside). 
    *   The total vertical span of the triangle is from $y = 0$ to $y = 1$. (New outer limits).
    *   A horizontal slice starts at the y-axis ($x = 0$) and extends to the right until it hits the diagonal line ($x = y$). (New inner limits).
4.  **New Integral:** 
    $$ I = \int_{0}^{1} \int_{0}^{y} \sin(y^2) \, dx \, dy $$
5.  **Evaluate:**
    Inner integral (with respect to $x$):
    $$ \int_{0}^{y} \sin(y^2) \, dx = \left[ x\sin(y^2) \right]_{x=0}^{x=y} = y\sin(y^2) $$
    Outer integral:
    $$ I = \int_{0}^{1} y\sin(y^2) \, dy $$
    Use $u$-substitution: $u = y^2 \implies \frac{1}{2}du = y \, dy$.
    $$ I = \int_{0}^{1} \frac{1}{2}\sin(u) \, du = \left[ -\frac{1}{2}\cos(u) \right]_{0}^{1} = \frac{1}{2}(1 - \cos(1)) $$

---

### Example 3: The Radical Boundary
**Difficulty: Hard**

**Problem:** Evaluate $I = \int_{0}^{4} \int_{\sqrt{x}}^{2} \frac{1}{y^3 + 1} \, dy \, dx$

**Step-by-step Solution:**
1.  **Extract:** $0 \le x \le 4$ and $\sqrt{x} \le y \le 2$.
2.  **Sketch:** The region is above the parabola $y = \sqrt{x}$ (which is $x = y^2$), below the horizontal line $y = 2$, bounded between $x = 0$ and $x = 4$. This is a curved region in the upper left of the $2 \times 4$ bounding box.
3.  **Reslice:** Change to horizontal slices ($dx \, dy$).
    *   The $y$-values range from the origin up to $y = 2$. So outer limits: $0 \le y \le 2$.
    *   For a fixed $y$, $x$ goes from the y-axis ($x = 0$) to the parabola ($x = y^2$). So inner limits: $0 \le x \le y^2$.
4.  **New Integral:**
    $$ I = \int_{0}^{2} \int_{0}^{y^2} \frac{1}{y^3 + 1} \, dx \, dy $$
5.  **Evaluate:**
    Inner: $\int_{0}^{y^2} \frac{1}{y^3 + 1} \, dx = \frac{y^2}{y^3 + 1}$
    Outer: $I = \int_{0}^{2} \frac{y^2}{y^3 + 1} \, dy$
    Let $u = y^3 + 1 \implies du = 3y^2 dy \implies \frac{1}{3}du = y^2 dy$.
    Bounds: $y=0 \to u=1$, $y=2 \to u=9$.
    $$ I = \int_{1}^{9} \frac{1}{3u} \, du = \left[ \frac{1}{3}\ln|u| \right]_{1}^{9} = \frac{1}{3}(\ln 9 - \ln 1) = \frac{\ln 9}{3} = \frac{2\ln 3}{3} $$

---

### Example 4: Combining Regions
**Difficulty: Very Hard**

**Problem:** Sometimes changing the order simplifies a piecewise region. Write the equivalent single double integral with reversed order for:
$I = \int_{0}^{1} \int_{0}^{x} f(x,y) \, dy \, dx + \int_{1}^{2} \int_{0}^{2-x} f(x,y) \, dy \, dx$

**Step-by-step Solution:**
1.  **Extract & Sketch:**
    *   Region 1: $0 \le x \le 1$, $0 \le y \le x$. (Triangle under $y=x$).
    *   Region 2: $1 \le x \le 2$, $0 \le y \le 2-x$. (Triangle under $y=2-x$).
    Combining these, we get a single large triangle with vertices $(0,0)$, $(2,0)$, and $(1,1)$.
2.  **Reslice:** The current setup uses vertical slices, which requires splitting the integral because the "roof" changes from $y=x$ to $y=2-x$ at $x=1$.
    If we use horizontal slices ($dx \, dy$), the "left wall" is always $y=x \implies x=y$, and the "right wall" is always $y=2-x \implies x=2-y$.
    *   Outer bounds: $0 \le y \le 1$.
    *   Inner bounds: $y \le x \le 2-y$.
3.  **New Integral:**
    $$ I = \int_{0}^{1} \int_{y}^{2-y} f(x,y) \, dx \, dy $$
    We turned two integrals into one!

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "4. Changing Order of Integration",
        "icon": "ArrowRightLeft",
        "description": "Fubini's Theorem, Reslicing Regions, Non-Elementary Integrals"
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
