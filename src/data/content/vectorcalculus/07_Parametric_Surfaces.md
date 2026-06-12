# 7. Parametric Surfaces and Surface Area

## Parameterizing 2D Surfaces in 3D Space

Just as a 1D curve $C$ is parameterized by a single variable $t$, a **2D surface** $S$ floating in 3D space is parameterized by **two** independent variables, typically $u$ and $v$.

A **parametric surface** is defined by the vector-valued function:
$$ \mathbf{r}(u,v) = \langle x(u,v), y(u,v), z(u,v) \rangle $$
where $(u,v)$ lie in some 2D parameter domain $D$.

**Engineering Applications of Parametric Surfaces:**
*   **CAD and Manufacturing:** Bézier surfaces and NURBS (Non-Uniform Rational B-Splines) use $u,v$ parameterizations to define the smooth, aerodynamic hulls of ships, car bodies, and aircraft fuselages.
*   **Antenna Design:** Parabolic dish antennas are parameterized to analyze signal focusing and compute the total required material area.
*   **Heat Exchangers:** The complex curved surfaces of cooling fins or heat sink geometries are modeled parametrically to optimize surface area-to-volume ratios.

---

## The Surface Area Differential ($dS$)

To find the area of a parameterized surface, we need to find the area of a tiny "patch" on the surface.
At any point $\mathbf{r}(u,v)$, there are two tangent vectors:
1.  **$\mathbf{r}_u = \langle x_u, y_u, z_u \rangle$**: The tangent vector in the $u$-direction.
2.  **$\mathbf{r}_v = \langle x_v, y_v, z_v \rangle$**: The tangent vector in the $v$-direction.

The cross product of these two vectors, $\mathbf{r}_u \times \mathbf{r}_v$, gives a **normal vector** perpendicular to the surface.
Crucially, the *magnitude* of this cross product gives the exact area of the tiny parallelogram formed by $du$ and $dv$.

Therefore, the differential surface area element $dS$ is:
$$ \boxed{dS = |\mathbf{r}_u \times \mathbf{r}_v| \, du \, dv} $$

The total surface area of $S$ is the double integral over the parameter domain $D$:
$$ A(S) = \iint_D |\mathbf{r}_u \times \mathbf{r}_v| \, du \, dv $$

---

## The Special Case: Explicit Surfaces $z = f(x,y)$

Many engineering surfaces are simply defined as a "height" above a base plane, such as $z = f(x,y)$ (e.g., a terrain map or a stamped sheet metal part).
In this case, the parameterization is trivial: let $u=x$ and $v=y$.
$$ \mathbf{r}(x,y) = \langle x, y, f(x,y) \rangle $$

Taking the cross product $\mathbf{r}_x \times \mathbf{r}_y$ and its magnitude yields a famous and incredibly useful shortcut:
$$ |\mathbf{r}_x \times \mathbf{r}_y| = \sqrt{1 + \left(\frac{\partial f}{\partial x}\right)^2 + \left(\frac{\partial f}{\partial y}\right)^2} $$

The surface area becomes:
$$ \boxed{A(S) = \iint_D \sqrt{1 + (f_x)^2 + (f_y)^2} \, dx \, dy} $$

---

## Worked Examples

### Example 1 — Easy: Surface Area of a Plane

**Problem:** Find the surface area of the portion of the plane $z = 10 - 2x - 2y$ that lies in the first octant ($x \ge 0, y \ge 0, z \ge 0$).

**Step 1: Use the explicit surface shortcut.**
Here, $f(x,y) = 10 - 2x - 2y$.
$f_x = -2$ and $f_y = -2$.
$$ dS = \sqrt{1 + (-2)^2 + (-2)^2} \, dA = \sqrt{1 + 4 + 4} \, dA = \sqrt{9} \, dA = 3 \, dA $$

**Step 2: Determine the domain $D$.**
The surface hits the $xy$-plane when $z=0$: $0 = 10 - 2x - 2y \implies y = 5 - x$.
The region $D$ in the first octant is a triangle bounded by $x=0$, $y=0$, and $y=5-x$.

**Step 3: Integrate.**
$$ A(S) = \iint_D 3 \, dA = 3 \times (\text{Area of triangle } D) = 3 \times \left(\frac{1}{2} \cdot 5 \cdot 5\right) = \mathbf{\frac{75}{2}} $$
*(Alternatively, you can compute $\int_0^5 \int_0^{5-x} 3 \, dy \, dx = \frac{75}{2}$)*.

---

### Example 2 — Medium: Surface Area of a Paraboloid (Antenna Dish)

**Problem:** A parabolic reflector dish is modeled by the surface $z = x^2 + y^2$ for $z \le 4$ meters. Find the total surface area of the dish.

**Step 1: Explicit surface shortcut.**
$f(x,y) = x^2 + y^2$.
$f_x = 2x$ and $f_y = 2y$.
$$ dS = \sqrt{1 + (2x)^2 + (2y)^2} \, dA = \sqrt{1 + 4x^2 + 4y^2} \, dA $$

**Step 2: Determine domain $D$ and set up integral.**
The dish is capped at $z=4$, so the projection onto the $xy$-plane is $x^2 + y^2 \le 4$ (a circle of radius 2).
Because $D$ is circular, convert to polar coordinates: $x^2 + y^2 = r^2$ and $dA = r \, dr \, d\theta$.
$$ A(S) = \iint_D \sqrt{1 + 4(x^2+y^2)} \, dA = \int_0^{2\pi} \int_0^2 \sqrt{1 + 4r^2} \, r \, dr \, d\theta $$

**Step 3: Evaluate.**
Inner integral (let $u = 1+4r^2, du = 8r \, dr \implies \frac{1}{8}du = r \, dr$):
$$ \int_0^2 r(1+4r^2)^{1/2} \, dr = \frac{1}{8} \left[ \frac{2}{3}(1+4r^2)^{3/2} \right]_0^2 = \frac{1}{12} (17^{3/2} - 1^{3/2}) $$
Outer integral:
$$ A(S) = \int_0^{2\pi} \frac{1}{12}(17\sqrt{17} - 1) \, d\theta = \mathbf{\frac{\pi}{6}(17\sqrt{17} - 1) \approx 36.18 \text{ m}^2} $$

---

### Example 3 — Hard: Surface Area using Spherical Parameters

**Problem:** Find the surface area of a sphere of radius $R$. (Derive the famous $A = 4\pi R^2$ formula).

**Step 1: Parameterize the sphere.**
Instead of $z = \pm\sqrt{R^2 - x^2 - y^2}$ (which is messy), use spherical angles $(\phi, \theta)$ as parameters $u$ and $v$:
$$ \mathbf{r}(\phi, \theta) = \langle R\sin\phi\cos\theta, \, R\sin\phi\sin\theta, \, R\cos\phi \rangle $$
Domain $D$: $0 \le \phi \le \pi$, $0 \le \theta \le 2\pi$.

**Step 2: Find tangent vectors and cross product.**
$$ \mathbf{r}_\phi = \langle R\cos\phi\cos\theta, \, R\cos\phi\sin\theta, \, -R\sin\phi \rangle $$
$$ \mathbf{r}_\theta = \langle -R\sin\phi\sin\theta, \, R\sin\phi\cos\theta, \, 0 \rangle $$
Computing the cross product $\mathbf{r}_\phi \times \mathbf{r}_\theta$:
$$ \mathbf{r}_\phi \times \mathbf{r}_\theta = \langle R^2\sin^2\phi\cos\theta, \, R^2\sin^2\phi\sin\theta, \, R^2\sin\phi\cos\phi \rangle $$

**Step 3: Magnitude ($dS$).**
$$ |\mathbf{r}_\phi \times \mathbf{r}_\theta| = \sqrt{R^4\sin^4\phi\cos^2\theta + R^4\sin^4\phi\sin^2\theta + R^4\sin^2\phi\cos^2\phi} $$
$$ = \sqrt{R^4\sin^4\phi(\cos^2\theta + \sin^2\theta) + R^4\sin^2\phi\cos^2\phi} $$
$$ = \sqrt{R^4\sin^2\phi(\sin^2\phi + \cos^2\phi)} = \sqrt{R^4\sin^2\phi} = R^2\sin\phi $$
Thus, $dS = R^2\sin\phi \, d\phi \, d\theta$.

**Step 4: Integrate.**
$$ A(S) = \int_0^{2\pi} \int_0^\pi R^2\sin\phi \, d\phi \, d\theta = R^2 \int_0^{2\pi} \left[-\cos\phi\right]_0^\pi d\theta = R^2 \int_0^{2\pi} (1 - (-1)) \, d\theta $$
$$ = R^2 \int_0^{2\pi} 2 \, d\theta = R^2 (4\pi) = \mathbf{4\pi R^2} $$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Parametric Surfaces",
        "icon": "BrainCircuit",
        "description": "r(u,v) maps a 2D domain (u,v) into a curved 3D surface S. The foundation of modern CAD systems."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Tangent Vectors",
        "icon": "Activity",
        "description": "Compute r_u and r_v. These vectors lie flat against the surface at every point."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Normal Vector & dS",
        "icon": "Sigma",
        "description": "The cross product r_u × r_v gives a normal vector. Its magnitude is the area element dS."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Explicit Shortcut",
        "icon": "Layers",
        "description": "For z = f(x,y), dS simply becomes √(1 + (f_x)² + (f_y)²) dA. Use this whenever possible!"
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Area Calculation",
        "icon": "Wrench",
        "description": "Integrate dS over the domain to find total material area for antennas, fuselages, and pressure vessels."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Surface Integrals",
        "icon": "Target",
        "description": "Now multiply dS by a scalar field (density, temp) or a vector field (flux) to evaluate physics on the surface."
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
