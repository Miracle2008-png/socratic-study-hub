# 3. Double Integrals over General Regions

Most real-world engineering problems do not involve perfect rectangles. Heat dissipating across a circular brake pad, fluid flowing through a parabolic channel, or structural loads on an irregularly shaped aircraft wing all require integrating over general 2D regions where the boundaries are curved functions, not constants.

To integrate over general regions, we classify 2D shapes into two types based on how we "slice" them—either vertically or horizontally.

### Type I Regions (Vertical Slicing)
A Type I region is bounded on the left and right by vertical lines (constants) $x=a$ and $x=b$. However, the top and bottom boundaries are defined by continuous curves $y = g_2(x)$ and $y = g_1(x)$.
*   $a \le x \le b$ (Outer limits are constants)
*   $g_1(x) \le y \le g_2(x)$ (Inner limits are functions of $x$)

Imagine drawing vertical slices through the region. The height of every slice is bounded by the functions $g_1(x)$ and $g_2(x)$. Thus, we must integrate with respect to $y$ first ($dy\,dx$):
$$ \iint_D f(x,y) \, dA = \int_{a}^{b} \int_{g_1(x)}^{g_2(x)} f(x,y) \, dy \, dx $$

### Type II Regions (Horizontal Slicing)
A Type II region is bounded on the bottom and top by horizontal lines (constants) $y=c$ and $y=d$. The left and right boundaries are defined by continuous curves $x = h_1(y)$ and $x = h_2(y)$.
*   $c \le y \le d$ (Outer limits are constants)
*   $h_1(y) \le x \le h_2(y)$ (Inner limits are functions of $y$)

Imagine drawing horizontal slices through the region. The width of every slice is bounded by $h_1(y)$ and $h_2(y)$. Thus, we integrate with respect to $x$ first ($dx\,dy$):
$$ \iint_D f(x,y) \, dA = \int_{c}^{d} \int_{h_1(y)}^{h_2(y)} f(x,y) \, dx \, dy $$

**The Golden Rule of Iterated Integrals:** The outermost integral limits MUST be constants. You cannot have variables in your final evaluation step; otherwise, your result will be a function instead of a numerical value (representing mass, area, volume, etc.).

---

### Step-by-Step Examples

#### Example 1 (Easy): Type I Region (Between a Line and Parabola)
**Problem:** A metal bracket occupies a region $D$ bounded by the parabola $y = x^2$ and the line $y = 2x$. The material's density is given by $\rho(x,y) = x$. Find the total mass of the bracket.

**Step-by-Step Solution:**
1.  **Find the Intersection Points:** Set the curves equal to find where they cross.
    $$ x^2 = 2x \implies x^2 - 2x = 0 \implies x(x - 2) = 0 $$
    The intersections are at $x=0$ and $x=2$. These are our constant outer bounds.
2.  **Determine Top and Bottom curves:** Between $x=0$ and $x=2$ (e.g., at $x=1$), the line $y=2(1)=2$ is higher than the parabola $y=1^2=1$.
    Top curve: $g_2(x) = 2x$. Bottom curve: $g_1(x) = x^2$.
3.  **Set up the integral:**
    $$ M = \int_{0}^{2} \int_{x^2}^{2x} x \, dy \, dx $$
4.  **Evaluate inner integral (w.r.t $y$):** Treat $x$ as a constant.
    $$ \int_{x^2}^{2x} x \, dy = [xy]_{y=x^2}^{y=2x} = x(2x) - x(x^2) = 2x^2 - x^3 $$
5.  **Evaluate outer integral (w.r.t $x$):**
    $$ M = \int_{0}^{2} (2x^2 - x^3) \, dx = \left[ \frac{2x^3}{3} - \frac{x^4}{4} \right]_{0}^{2} $$
    $$ M = \left( \frac{16}{3} - \frac{16}{4} \right) = \frac{16}{3} - 4 = \frac{16}{3} - \frac{12}{3} = \frac{4}{3} $$
**Conclusion:** The mass of the bracket is $4/3$ units.

#### Example 2 (Medium): Type II Region (Horizontal Slicing)
**Problem:** Find the area of the region bounded by $x = y^2$ and the line $x - y = 2$.

**Step-by-Step Solution:**
1.  **Analyze the region:** We want to find the area, so $f(x,y) = 1$. The curves are $x = y^2$ (a sideways parabola) and $x = y + 2$ (a line). It is much easier to treat this as a Type II region, integrating with respect to $x$ first (horizontal slices), because the right boundary is always the line, and the left boundary is always the parabola.
2.  **Find intersection points in terms of $y$:**
    $$ y^2 = y + 2 \implies y^2 - y - 2 = 0 \implies (y - 2)(y + 1) = 0 $$
    Intersections are at $y = -1$ and $y = 2$.
3.  **Set up the integral ($dx\,dy$):**
    Right curve $h_2(y) = y+2$, Left curve $h_1(y) = y^2$.
    $$ \text{Area} = \int_{-1}^{2} \int_{y^2}^{y+2} 1 \, dx \, dy $$
4.  **Evaluate inner integral (w.r.t $x$):**
    $$ \int_{y^2}^{y+2} 1 \, dx = [x]_{x=y^2}^{x=y+2} = (y + 2) - y^2 $$
5.  **Evaluate outer integral (w.r.t $y$):**
    $$ \text{Area} = \int_{-1}^{2} (y + 2 - y^2) \, dy = \left[ \frac{y^2}{2} + 2y - \frac{y^3}{3} \right]_{-1}^{2} $$
    Upper limit ($y=2$): $2 + 4 - 8/3 = 6 - 8/3 = 10/3$.
    Lower limit ($y=-1$): $1/2 - 2 + 1/3 = 3/6 - 12/6 + 2/6 = -7/6$.
    Subtract: $10/3 - (-7/6) = 20/6 + 7/6 = 27/6 = 9/2$.
**Conclusion:** The area of the region is $4.5$ square units.

#### Example 3 (Hard): Reversing the Order of Integration
**Problem:** In manufacturing, assessing fluid flux might lead to an integral like $\int_{0}^{1} \int_{y}^{1} e^{x^2} \, dx \, dy$. This integral is impossible to evaluate directly because $e^{x^2}$ has no elementary antiderivative. Solve it by reversing the order of integration.

**Step-by-Step Solution:**
1.  **Sketch the original region:** The limits tell us this is a Type II region.
    Inner limits: $x$ goes from $x = y$ to $x = 1$.
    Outer limits: $y$ goes from $y = 0$ to $y = 1$.
    The region is bounded on the left by the line $x=y$, on the right by $x=1$, and at the bottom by $y=0$. This is a triangle with vertices $(0,0), (1,0), (1,1)$.
2.  **Convert to a Type I region:** Instead of horizontal slices, use vertical slices.
    Outer limits ($x$ bounds): The triangle spans from $x = 0$ to $x = 1$.
    Inner limits ($y$ bounds): A vertical slice goes from the x-axis ($y=0$) up to the line ($y=x$).
3.  **Set up the new integral ($dy\,dx$):**
    $$ I = \int_{0}^{1} \int_{0}^{x} e^{x^2} \, dy \, dx $$
4.  **Evaluate inner integral (w.r.t $y$):**
    $$ \int_{0}^{x} e^{x^2} \, dy = \left[ y e^{x^2} \right]_{y=0}^{y=x} = x e^{x^2} - 0 = x e^{x^2} $$
5.  **Evaluate outer integral (w.r.t $x$):**
    $$ I = \int_{0}^{1} x e^{x^2} \, dx $$
    Now we can use u-substitution! Let $u = x^2$, $du = 2x \, dx \implies x \, dx = du/2$.
    Limits: $x=0 \implies u=0$. $x=1 \implies u=1$.
    $$ I = \int_{0}^{1} \frac{1}{2} e^u \, du = \frac{1}{2} [e^u]_{0}^{1} = \frac{1}{2}(e - 1) $$
**Conclusion:** By reversing the order of integration, an impossible problem became solvable. The result is $\frac{e - 1}{2}$.

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "General Regions Integration",
        "icon": "BrainCircuit",
        "description": "Topic: Variable Bounds"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Type I Regions",
        "icon": "ArrowDown",
        "description": "Vertical slices. Outer bounds are x. Order: dy dx"
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Type II Regions",
        "icon": "ArrowRight",
        "description": "Horizontal slices. Outer bounds are y. Order: dx dy"
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Intersection Points",
        "icon": "Target",
        "description": "Crucial for finding the constant outer bounds."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Reversing Order",
        "icon": "Activity",
        "description": "Switching between Type I and Type II to solve difficult integrals."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
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
      "source": "1",
      "target": "5",
      "animated": true
    }
  ]
}
```
