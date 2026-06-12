# 5. Green's Theorem

## The Bridge Between 1D and 2D

Green's Theorem is one of the most useful results in all of engineering mathematics. It establishes a profound connection: **the line integral of a vector field around a closed 2D boundary equals a double integral over the interior of that boundary.**

This allows engineers to choose the easier computation — sometimes converting an intractable boundary integral into a simple area calculation, or vice versa.

**Engineering applications:**
- **2D fluid flow:** Calculating circulation (rotational flow tendency) around a closed boundary, e.g., around an airfoil cross-section
- **Structural mechanics:** Computing work done by a force around a closed loading cycle (hysteresis loops)
- **Electrical engineering:** Relating circulation of a 2D magnetic field to the current flowing through the enclosed area — a 2D form of Ampère's Law
- **Area calculation:** Green's Theorem provides an elegant formula for computing irregular areas using boundary traversal (used in GIS, CNC path planning, and surveying)

---

## The Theorem

> **Green's Theorem:** Let $C$ be a positively oriented (counterclockwise), piecewise-smooth, simple closed curve bounding region $D$. If $P$ and $Q$ have continuous partial derivatives on an open region containing $D$:
>
> $$\oint_C P\,dx + Q\,dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dA$$

**Direction convention:** "Positively oriented" means the interior $D$ is always to your **left** as you walk along $C$ — i.e., counterclockwise for outer boundaries, clockwise for interior holes.

**The integrand $(Q_x - P_y)$** is the **2D curl** (the $\mathbf{k}$-component of $\nabla \times \mathbf{F}$). Green's Theorem states: the total rotational circulation around the boundary equals the total 2D curl summed over the interior.

If the field is conservative, $Q_x - P_y = 0$, and the theorem immediately proves $\oint_C \mathbf{F}\cdot d\mathbf{r} = 0$ — confirming what we already know.

---

## Area Formula via Green's Theorem

Setting $P = -y/2$ and $Q = x/2$ gives $Q_x - P_y = 1$, so:
$$
A = \iint_D dA = \oint_C \frac{1}{2}(-y\,dx + x\,dy)
$$

This remarkable formula computes the **area of any region from its boundary alone** — used in planimeters (mechanical area integrators) and modern polygon area algorithms in GIS.

---

## Worked Examples

### Example 1 — Easy: Circulation Around a Rectangle

**Problem:** Compute $\oint_C (x^2 - y)\,dx + (y^2 + x)\,dy$ counterclockwise around the rectangle with vertices $(0,0)$, $(3,0)$, $(3,2)$, $(0,2)$.

**Apply Green's Theorem:** $P = x^2-y$, $Q = y^2+x$:
$$
Q_x - P_y = 1 - (-1) = 2
$$

$$
\oint_C \mathbf{F}\cdot d\mathbf{r} = \iint_D 2\,dA = 2 \times \text{Area}(D) = 2 \times (3 \times 2) = \boxed{12}
$$

No parameterization of 4 separate line segments needed!

---

### Example 2 — Medium: An Impossible Direct Integral

**Problem:** Evaluate $\oint_C (3y - e^{\sin x})\,dx + (7x + \sqrt{y^4+1})\,dy$, where $C$ is the circle $x^2 + y^2 = 9$ counterclockwise.

**Direct approach:** Substituting $x = 3\cos t$ into $e^{\sin x}$ would create $e^{\sin(3\cos t)}$ — impossible to integrate analytically.

**Green's Theorem:** $P = 3y - e^{\sin x}$, $Q = 7x + \sqrt{y^4+1}$:
$$
Q_x = 7, \qquad P_y = 3, \qquad Q_x - P_y = 4
$$

$$
\oint_C \mathbf{F}\cdot d\mathbf{r} = \iint_D 4\,dA = 4 \cdot \pi(3)^2 = \boxed{36\pi}
$$

A completely intractable direct integral solved in three lines of algebra.

---

### Example 3 — Hard: Area of an Ellipse by Boundary Traversal

**Problem:** Use the Green's Theorem area formula to derive the area of the ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$.

**Parameterize boundary:** $x = a\cos t$, $y = b\sin t$, $0 \le t \le 2\pi$.

**Apply area formula:**
$$
A = \frac{1}{2}\oint_C (-y\,dx + x\,dy)
$$

Compute $dx = -a\sin t\,dt$, $dy = b\cos t\,dt$:
$$
-y\,dx = -b\sin t \cdot (-a\sin t)\,dt = ab\sin^2 t\,dt
$$
$$
x\,dy = a\cos t \cdot b\cos t\,dt = ab\cos^2 t\,dt
$$

$$
A = \frac{1}{2}\int_0^{2\pi} ab(\sin^2 t + \cos^2 t)\,dt = \frac{ab}{2}\int_0^{2\pi} dt = \frac{ab}{2}\cdot 2\pi = \boxed{\pi ab}
$$

**Engineering context:** The cross-sectional area of an elliptical pipe, pressure vessel, or aircraft fuselage is $\pi ab$ — derived elegantly from Green's Theorem.

---

### Example 4 — Hard: Green's Theorem as Ampère's Law

**Problem:** In 2D magnetostatics, the magnetic field $\mathbf{B} = \langle B_x, B_y \rangle$ from a long current-carrying wire satisfies $\frac{\partial B_y}{\partial x} - \frac{\partial B_x}{\partial y} = \mu_0 J_z$, where $J_z$ is the current density. Use Green's Theorem to relate the circulation of $\mathbf{B}$ around a closed loop $C$ to the total current through the enclosed area $D$.

**Apply Green's Theorem:**
$$
\oint_C B_x\,dx + B_y\,dy = \iint_D\!\!\left(\frac{\partial B_y}{\partial x} - \frac{\partial B_x}{\partial y}\right)dA = \iint_D \mu_0 J_z\,dA = \mu_0 I_{\text{enc}}
$$

$$\boxed{\oint_C \mathbf{B}\cdot d\mathbf{r} = \mu_0 I_{\text{enc}}}$$

This is **Ampère's Circuital Law** in 2D — a foundational result in electromagnetism, derived directly from Green's Theorem.

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Green's Theorem",
        "icon": "BrainCircuit",
        "description": "∮_C P dx + Q dy = ∬_D (∂Q/∂x - ∂P/∂y) dA. Converts boundary integral to area integral."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Positive Orientation (CCW)",
        "icon": "Activity",
        "description": "Walk counterclockwise — interior D always to your left. Clockwise = multiply result by -1."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Integrand = 2D Curl",
        "icon": "Sigma",
        "description": "∂Q/∂x - ∂P/∂y is the z-component of ∇×F. Sums local rotation over interior."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Area Formula",
        "icon": "Layers",
        "description": "A = ½∮(-y dx + x dy). Computes area from boundary alone. Used in GIS and CNC."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Engineering: Ampère's Law",
        "icon": "Wrench",
        "description": "∮ B·dr = μ₀I_enc. Circulation of magnetic field = enclosed current × μ₀."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Generalises to Stokes' Theorem",
        "icon": "Target",
        "description": "Green's Theorem is Stokes' Theorem restricted to flat 2D surfaces. Stokes works on curved 3D surfaces."
      },
      "style": { "background": "#0f766e", "color": "#ccfbf1" }
    }
  ],
  "edges": [
    {"source": "1", "target": "2", "animated": true},
    {"source": "2", "target": "3", "animated": true},
    {"source": "3", "target": "4", "animated": true},
    {"source": "4", "target": "5", "animated": true},
    {"source": "5", "target": "6", "animated": true}
  ]
}
```
