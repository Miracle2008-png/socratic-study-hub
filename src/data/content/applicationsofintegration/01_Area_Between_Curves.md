# Area Between Curves: Cross-Sections and Material Bounds

One of the most immediate and practical applications of the definite integral in engineering is finding the area of a region bounded by two or more curves. In the real world, geometric shapes are rarely perfect rectangles or circles.

**Engineering Applications:**
*   **Civil Engineering:** When designing a highway over uneven terrain, engineers must calculate the area between the proposed road grade (top curve) and the existing ground level (bottom curve) to estimate the volume of earth to be excavated or filled (cut-and-fill calculations).
*   **Aerospace & Mechanical Engineering:** Calculating the cross-sectional area of an airfoil (airplane wing) where the upper camber and lower camber are defined by complex polynomial or spline functions. The total lift is directly related to the shape and area bounded by these surfaces.
*   **Material Science:** Extrusion dies and custom 3D printed components often require computing the exact cross-sectional area to determine material volume per unit length, weight, and cost.

---

## 1. Area Between a Top and Bottom Curve (Integration with respect to $x$)

If you have a region bounded above by the curve $y = f(x)$, below by the curve $y = g(x)$, and on the left and right by the vertical lines $x = a$ and $x = b$, the area is found by integrating the difference between the upper and lower functions.

For this to work cleanly, the condition $f(x) \geq g(x)$ must hold for all $x$ in the interval $[a, b]$.

$$ \text{Area} = \int_{a}^{b} [f(x) - g(x)] \, dx $$

**Visualizing it as an Engineer:**
Imagine slicing a metal plate into infinitesimally thin vertical strips.
*   The width of each strip is the differential $dx$.
*   The height of each strip is the top boundary minus the bottom boundary: $f(x) - g(x)$.
*   The area of one infinitesimal strip is $[f(x) - g(x)] \, dx$.
*   The integral acts as an infinite accumulator, summing up all these strip areas from the start coordinate $x=a$ to the end coordinate $x=b$.

### Finding Intersection Points
Often, blueprints or problems won't give you explicit bounds $a$ and $b$. Instead, they ask for the area enclosed *completely* between two bounding curves. To find the limits of integration, set the two functions equal and solve for $x$:
$$ f(x) = g(x) $$
The solutions give the $x$-coordinates where the curves intersect.

### Example 1: Simple Enclosed Region (Easy)
**Problem:** Find the area of the region enclosed by the parabola $y = 2 - x^2$ and the line $y = -x$.

**Step 1: Find the intersection points.**
Set the equations equal to each other:
$$ 2 - x^2 = -x $$
$$ x^2 - x - 2 = 0 $$
Factor the quadratic:
$$ (x - 2)(x + 1) = 0 $$
The curves intersect at $x = -1$ and $x = 2$. These are our bounds of integration.

**Step 2: Identify the top and bottom curves.**
On the interval $[-1, 2]$, plug in a test point, say $x = 0$.
$y_{parabola} = 2 - 0 = 2$
$y_{line} = 0$
Since $2 > 0$, the parabola $y = 2 - x^2$ is the top curve $f(x)$, and the line $y = -x$ is the bottom curve $g(x)$.

**Step 3: Set up and evaluate the integral.**
$$ A = \int_{-1}^{2} [(2 - x^2) - (-x)] \, dx = \int_{-1}^{2} (2 - x^2 + x) \, dx $$
$$ A = \left[ 2x - \frac{x^3}{3} + \frac{x^2}{2} \right]_{-1}^{2} $$
Evaluate at the upper bound ($x=2$):
$$ \left( 2(2) - \frac{8}{3} + \frac{4}{2} \right) = 4 - \frac{8}{3} + 2 = 6 - \frac{8}{3} = \frac{10}{3} $$
Evaluate at the lower bound ($x=-1$):
$$ \left( 2(-1) - \frac{-1}{3} + \frac{1}{2} \right) = -2 + \frac{1}{3} + \frac{1}{2} = -\frac{12}{6} + \frac{2}{6} + \frac{3}{6} = -\frac{7}{6} $$
Subtract the lower bound from the upper bound:
$$ A = \frac{10}{3} - \left(-\frac{7}{6}\right) = \frac{20}{6} + \frac{7}{6} = \frac{27}{6} = \frac{9}{2} $$
The enclosed area is $4.5$ square units.

---

## 2. When the Curves Cross Over

If $f(x)$ and $g(x)$ intersect within the interval $[a, b]$ such that $f(x)$ is the top curve for part of the interval and $g(x)$ is the top curve for the rest, you cannot just blindly evaluate $\int [f(x) - g(x)] \, dx$. Doing so will calculate the "net area," where regions cancel each other out mathematically, which is physically meaningless if you are calculating material requirements.

To find the true geometric area, you must split the integral at the intersection points:

$$ \text{Area} = \int_{a}^{c} (\text{Top}_1 - \text{Bottom}_1) \, dx + \int_{c}^{b} (\text{Top}_2 - \text{Bottom}_2) \, dx $$

Alternatively, using the absolute value:
$$ \text{Area} = \int_{a}^{b} |f(x) - g(x)| \, dx $$

### Example 2: Crossing Curves (Medium)
**Problem:** Find the total area between the curves $y = \sin(x)$ and $y = \cos(x)$ from $x = 0$ to $x = \pi$.

**Step 1: Find the intersection points in the interval.**
$$ \sin(x) = \cos(x) \implies \tan(x) = 1 $$
In the interval $[0, \pi]$, this occurs at $x = \frac{\pi}{4}$.

**Step 2: Determine top and bottom functions for each sub-interval.**
*   For $[0, \frac{\pi}{4}]$, $\cos(x) > \sin(x)$ (e.g., at $x=0$, $1 > 0$).
*   For $[\frac{\pi}{4}, \pi]$, $\sin(x) > \cos(x)$ (e.g., at $x=\frac{\pi}{2}$, $1 > 0$).

**Step 3: Set up the split integrals.**
$$ A = \int_{0}^{\pi/4} (\cos(x) - \sin(x)) \, dx + \int_{\pi/4}^{\pi} (\sin(x) - \cos(x)) \, dx $$

**Step 4: Evaluate.**
First integral:
$$ \int_{0}^{\pi/4} (\cos(x) - \sin(x)) \, dx = [\sin(x) + \cos(x)]_{0}^{\pi/4} $$
$$ = \left( \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2} \right) - (0 + 1) = \sqrt{2} - 1 $$

Second integral:
$$ \int_{\pi/4}^{\pi} (\sin(x) - \cos(x)) \, dx = [-\cos(x) - \sin(x)]_{\pi/4}^{\pi} $$
$$ = (-\cos(\pi) - \sin(\pi)) - \left(-\cos\left(\frac{\pi}{4}\right) - \sin\left(\frac{\pi}{4}\right)\right) $$
$$ = (-(-1) - 0) - \left( -\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2} \right) = 1 - (-\sqrt{2}) = 1 + \sqrt{2} $$

Total Area:
$$ A = (\sqrt{2} - 1) + (1 + \sqrt{2}) = 2\sqrt{2} $$

---

## 3. Area Between a Right and Left Curve (Integration with respect to $y$)

Sometimes, a region is bounded by a rightmost curve $x = f(y)$ and a leftmost curve $x = g(y)$, between horizontal lines $y = c$ and $y = d$.

In this case, attempting to use vertical slices (integrating with respect to $x$) forces you to split the region into multiple parts because the top or bottom curves change. It is much more efficient to slice the region into horizontal strips and integrate with respect to $y$.

$$ \text{Area} = \int_{c}^{d} [f(y) - g(y)] \, dy $$

*Note: $f(y)$ is the right curve (larger x-values), and $g(y)$ is the left curve (smaller x-values).*

**When to integrate with respect to y:**
1.  When the equations are given as $x$ in terms of $y$ (e.g., $x = y^2 - 2$).
2.  When the "top" curve or "bottom" curve changes if you use vertical slices, requiring two or more $x$-integrals, but the "right" and "left" curves remain consistent if you use horizontal slices.

### Example 3: Horizontal Slicing (Hard)
**Problem:** Find the area of the region bounded by the line $y = x - 1$ and the parabola $y^2 = 2x + 6$.

**Step 1: Express equations as $x$ in terms of $y$.**
Line: $x = y + 1$
Parabola: $x = \frac{y^2}{2} - 3$

**Step 2: Find intersection points.**
Set the equations equal:
$$ y + 1 = \frac{y^2}{2} - 3 $$
Multiply by 2 to clear fractions:
$$ 2y + 2 = y^2 - 6 $$
$$ y^2 - 2y - 8 = 0 $$
$$ (y - 4)(y + 2) = 0 $$
The curves intersect at $y = -2$ and $y = 4$.

**Step 3: Identify the right and left curves.**
Pick a test value between $y = -2$ and $y = 4$, say $y = 0$.
$x_{line} = 0 + 1 = 1$
$x_{parabola} = \frac{0}{2} - 3 = -3$
Since $1 > -3$, the line is the right curve $f(y)$, and the parabola is the left curve $g(y)$.

**Step 4: Set up and evaluate the integral.**
$$ A = \int_{-2}^{4} \left[ (y + 1) - \left( \frac{y^2}{2} - 3 \right) \right] \, dy $$
$$ A = \int_{-2}^{4} \left( y + 4 - \frac{y^2}{2} \right) \, dy $$
$$ A = \left[ \frac{y^2}{2} + 4y - \frac{y^3}{6} \right]_{-2}^{4} $$

Evaluate at upper bound ($y=4$):
$$ \left( \frac{16}{2} + 16 - \frac{64}{6} \right) = 8 + 16 - \frac{32}{3} = 24 - \frac{32}{3} = \frac{72 - 32}{3} = \frac{40}{3} $$

Evaluate at lower bound ($y=-2$):
$$ \left( \frac{4}{2} - 8 - \frac{-8}{6} \right) = 2 - 8 + \frac{4}{3} = -6 + \frac{4}{3} = \frac{-18 + 4}{3} = -\frac{14}{3} $$

Total Area:
$$ A = \frac{40}{3} - \left(-\frac{14}{3}\right) = \frac{54}{3} = 18 $$
The total enclosed area is $18$ square units.

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "1. Curve Boundaries",
        "icon": "Spline",
        "description": "Identify top/bottom or left/right functions."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "2. Intersections",
        "icon": "Crosshair",
        "description": "Solve f(x) = g(x) to find limits [a, b]."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "3. Setup Integral",
        "icon": "Sigma",
        "description": "Set up ∫ (Top - Bottom) dx or ∫ (Right - Left) dy."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "4. Area Output",
        "icon": "Box",
        "description": "Calculate definitive material cross-section."
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
      "source": "2",
      "target": "3",
      "animated": true
    },
    {
      "source": "3",
      "target": "4",
      "animated": true
    }
  ]
}
```
