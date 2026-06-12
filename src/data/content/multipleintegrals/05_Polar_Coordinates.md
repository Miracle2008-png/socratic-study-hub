# 5. Double Integrals in Polar Coordinates

Some 2D regions are incredibly difficult to describe using Cartesian $(x,y)$ coordinates. For example, a simple circle $x^2 + y^2 = R^2$ requires messy square root limits like $-\sqrt{R^2 - x^2} \le y \le \sqrt{R^2 - x^2}$. Integrating over these boundaries often leads to vicious trigonometric substitutions.

Regions that possess radial or circular symmetry are infinitely easier to evaluate using **Polar Coordinates** $(r, \theta)$.

### Engineering Applications
Why do engineers care about polar coordinates?
*   **Antenna Radiation Patterns:** In telecommunications, the power radiated by a directional antenna is almost always defined in polar or spherical coordinates. Integrating the power density function over an angle gives the total radiated power and directivity.
*   **Fluid Mechanics (Pipe Flow):** Flow profiles in cylindrical pipes (like Poiseuille flow) are symmetric about the center axis. Calculating the volumetric flow rate across the pipe's cross-section is done via a polar double integral.
*   **Rotational Dynamics:** Analyzing the stress in a spinning turbine disk or a centrifugal clutch requires integrating forces over a circular area.

### The Coordinate Transformation
Recall the fundamental relationships that map the $(r, \theta)$ plane to the $(x, y)$ plane:
*   $x = r\cos(\theta)$
*   $y = r\sin(\theta)$
*   $r^2 = x^2 + y^2$
*   $\theta = \arctan\left(\frac{y}{x}\right)$

### The Area Element $dA$ and the Jacobian
In Cartesian coordinates, the differential area element is a tiny rectangle of constant size regardless of where you are in the plane: $dA = dx\,dy$. 

In Polar coordinates, the grid is made of concentric circles and radial rays. The differential area element is a tiny polar sector. As you move further from the origin (as $r$ increases), the "width" of this sector ($r\,d\theta$) grows. Therefore, the area is NOT simply $dr\,d\theta$. 

You must include an extra scaling factor of $r$, formally known as the **Jacobian determinant** of the transformation:
$$ dA = r \, dr \, d\theta $$

**NEVER FORGET THE EXTRA '$r$'!** Without it, your integrals will be completely incorrect.

### The Polar Integral Formula
If a region $R$ is bounded by angles $\alpha$ and $\beta$, and inner/outer radii curves $h_1(\theta)$ and $h_2(\theta)$:
*   $\alpha \le \theta \le \beta$
*   $h_1(\theta) \le r \le h_2(\theta)$

Then the double integral of a function $f(x,y)$ over region $R$ is evaluated as:
$$ \iint_R f(x,y) dA = \int_{\alpha}^{\beta} \int_{h_1(\theta)}^{h_2(\theta)} f(r\cos\theta, r\sin\theta) \, r \, dr \, d\theta $$

---

### Example 1: Area of a Circle
**Difficulty: Easy**

**Problem:** Prove that the area of a circle with radius $R$ is $\pi R^2$ using a double integral.

**Step-by-step Solution:**
To find area, we integrate the function $f(x,y) = 1$.
1.  **Region:** A full circle goes from $\theta = 0$ to $\theta = 2\pi$, and the radius goes from $r = 0$ to $r = R$.
2.  **Integral:**
    $$ A = \int_{0}^{2\pi} \int_{0}^{R} 1 \cdot r \, dr \, d\theta $$
3.  **Evaluate:**
    Inner: $\int_{0}^{R} r \, dr = \left[ \frac{1}{2}r^2 \right]_{0}^{R} = \frac{1}{2}R^2$
    Outer: $\int_{0}^{2\pi} \frac{1}{2}R^2 \, d\theta = \left[ \frac{1}{2}R^2 \theta \right]_{0}^{2\pi} = \frac{1}{2}R^2(2\pi) = \pi R^2$.

---

### Example 2: The Bell Curve Volume (Gaussian Integral)
**Difficulty: Medium**

**Problem:** Find the volume under the paraboloid surface $z = 1 - x^2 - y^2$ situated above the xy-plane ($z \ge 0$).

**Step-by-step Solution:**
1.  **Determine the Region $R$:**
    The surface intersects the xy-plane when $z=0$:
    $$ 0 = 1 - x^2 - y^2 \implies x^2 + y^2 = 1 $$
    This is a circle of radius 1. In Polar: $0 \le r \le 1$, $0 \le \theta \le 2\pi$.
2.  **Convert the Function $f(x,y)$:**
    $$ f(x,y) = 1 - (x^2 + y^2) = 1 - r^2 $$
3.  **Set up the Integral:**
    $$ V = \int_{0}^{2\pi} \int_{0}^{1} (1 - r^2) \cdot r \, dr \, d\theta $$
4.  **Evaluate:**
    Distribute the $r$: $\int_{0}^{1} (r - r^3) \, dr = \left[ \frac{1}{2}r^2 - \frac{1}{4}r^4 \right]_{0}^{1} = \frac{1}{4}$
    Outer: $\int_{0}^{2\pi} \frac{1}{4} \, d\theta = \frac{1}{4}(2\pi) = \frac{\pi}{2}$.

---

### Example 3: Evaluating a Cartesian Nightmare
**Difficulty: Hard**

**Problem:** Evaluate $\int_{-3}^{3} \int_{0}^{\sqrt{9-x^2}} \sin(x^2 + y^2) \, dy \, dx$

**Step-by-step Solution:**
1.  **Extract Limits to Find Region:**
    $x$ goes from $-3$ to $3$.
    $y$ goes from $0$ to $y = \sqrt{9-x^2}$. The upper bound implies $y^2 = 9 - x^2 \implies x^2 + y^2 = 9$.
    This is the top half of a circle of radius 3 (because $y \ge 0$).
2.  **Convert to Polar:**
    Limits: $0 \le r \le 3$, $0 \le \theta \le \pi$ (since it's a semi-circle).
    Integrand: $\sin(x^2 + y^2) = \sin(r^2)$.
    Differential: $dy \, dx = r \, dr \, d\theta$.
3.  **New Integral:**
    $$ I = \int_{0}^{\pi} \int_{0}^{3} \sin(r^2) \, r \, dr \, d\theta $$
4.  **Evaluate:**
    Inner: $\int_{0}^{3} r\sin(r^2) \, dr$. Let $u=r^2, du=2rdr$.
    $= \left[ -\frac{1}{2}\cos(r^2) \right]_{0}^{3} = -\frac{1}{2}(\cos(9) - \cos(0)) = \frac{1}{2}(1 - \cos 9)$.
    Outer: $\int_{0}^{\pi} \frac{1}{2}(1 - \cos 9) \, d\theta = \frac{\pi}{2}(1 - \cos 9)$.

---

### Example 4: Area of a Rose Petal
**Difficulty: Very Hard**

**Problem:** Find the area of one loop (petal) of the polar rose curve given by $r = \cos(3\theta)$.

**Step-by-step Solution:**
1.  **Identify Limits for One Petal:**
    A petal starts and ends at the origin, where $r=0$.
    Set $r=0$: $\cos(3\theta) = 0 \implies 3\theta = -\frac{\pi}{2}, \frac{\pi}{2}$.
    So, $\theta$ bounds are $-\frac{\pi}{6}$ to $\frac{\pi}{6}$.
    The radius goes from $r=0$ out to the curve $r=\cos(3\theta)$.
2.  **Integral Setup:**
    $$ A = \int_{-\pi/6}^{\pi/6} \int_{0}^{\cos(3\theta)} r \, dr \, d\theta $$
3.  **Evaluate:**
    Inner: $\int_{0}^{\cos(3\theta)} r \, dr = \left[ \frac{1}{2}r^2 \right]_{0}^{\cos(3\theta)} = \frac{1}{2}\cos^2(3\theta)$.
    Outer: $A = \int_{-\pi/6}^{\pi/6} \frac{1}{2}\cos^2(3\theta) \, d\theta$.
    Use the half-angle identity: $\cos^2(\phi) = \frac{1 + \cos(2\phi)}{2}$. So $\cos^2(3\theta) = \frac{1 + \cos(6\theta)}{2}$.
    $$ A = \frac{1}{4} \int_{-\pi/6}^{\pi/6} (1 + \cos(6\theta)) \, d\theta = \frac{1}{4} \left[ \theta + \frac{1}{6}\sin(6\theta) \right]_{-\pi/6}^{\pi/6} $$
    $$ A = \frac{1}{4} \left[ \left(\frac{\pi}{6} + \frac{\sin(\pi)}{6}\right) - \left(-\frac{\pi}{6} + \frac{\sin(-\pi)}{6}\right) \right] = \frac{1}{4} \left( \frac{2\pi}{6} \right) = \frac{\pi}{12} $$

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "5. Polar Coordinates (r, θ)",
        "icon": "Target",
        "description": "Circular Symmetry, Jacobian Factor r, Rose Curves"
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
