# 8. Surface Integrals (Scalar Fields)

## The 2D Equivalent of a Line Integral

In the previous chapters, we learned how to compute the line integral $\int_C f\,ds$ to find the total mass of a curved 1D wire with variable density $f(x,y,z)$.

A **scalar surface integral** takes this concept into 2D: instead of summing a function over a curved wire, we sum a function $f(x,y,z)$ over a **curved surface** $S$ in 3D space.

$$ \iint_S f(x,y,z) dS $$

Notice the capital $dS$. This indicates integration over the actual, physical curved surface area, unlike $dA$ which usually implies integration over a flat 2D region.

**Engineering Applications:**
*   **Mass of a Curved Plate (Shell):** If $f(x,y,z)$ represents the area mass density ($\text{kg/m}^2$) of a curved metal hull or satellite dish, the surface integral computes the total mass.
*   **Heat Transfer:** If $q(x,y,z)$ is the heat flux distribution (W/m²) over the surface of a boiler or heat exchanger fin, the surface integral computes total heat loss/gain.
*   **Surface Charge Density:** If $\sigma(x,y,z)$ is the electric charge per unit area on a curved electrode, the integral yields the total enclosed charge.

---

## Evaluation: The Pull-Back Method

We cannot integrate over a curved surface directly. We must "pull back" the integral to a flat 2D parameter domain $D$ using our parameterization $\mathbf{r}(u,v)$.

Recall from the previous section that the surface area element is $dS = |\mathbf{r}_u \times \mathbf{r}_v| \, du \, dv$.
Substituting this into our integral gives the master formula:

$$ \iint_S f(x,y,z) \, dS = \iint_D f(\mathbf{r}(u,v)) \, |\mathbf{r}_u \times \mathbf{r}_v| \, dA $$

### The Explicit Surface Shortcut
If the surface $S$ is given explicitly as a height function $z = g(x,y)$ over a domain $D$ in the $xy$-plane, the formula beautifully simplifies using our shortcut for $dS$:

$$ \iint_S f(x,y,z) \, dS = \iint_D f(x,y, g(x,y)) \sqrt{1 + \left(\frac{\partial g}{\partial x}\right)^2 + \left(\frac{\partial g}{\partial y}\right)^2} \, dA $$

---

## Worked Examples

### Example 1 — Easy: Mass of a Slanted Roof

**Problem:** A slanted triangular roof is given by the plane $z = 6 - 2x - 3y$ in the first octant. Due to accumulated snow, the area mass density of the roof is $\rho(x,y,z) = x \text{ kg/m}^2$. Find the total mass of the snow on the roof.

**Step 1: Use the explicit surface shortcut.**
$g(x,y) = 6 - 2x - 3y$.
$g_x = -2$ and $g_y = -3$.
$dS = \sqrt{1 + (-2)^2 + (-3)^2} \, dA = \sqrt{1 + 4 + 9} \, dA = \sqrt{14} \, dA$.

**Step 2: Determine domain $D$ and substitute $f$.**
The roof hits the $xy$-plane when $z=0 \implies 0 = 6 - 2x - 3y \implies y = 2 - \frac{2}{3}x$.
The domain $D$ is bounded by $x=0$, $y=0$, and $y = 2 - \frac{2}{3}x$. The $x$-intercept is 3.
The function is $f(x,y,z) = x$.

**Step 3: Integrate.**
$$ M = \iint_S x \, dS = \iint_D x \sqrt{14} \, dA = \sqrt{14} \int_0^3 \int_0^{2 - 2x/3} x \, dy \, dx $$
Inner integral: $\int_0^{2 - 2x/3} x \, dy = x[y]_0^{2 - 2x/3} = x(2 - \frac{2}{3}x) = 2x - \frac{2}{3}x^2$.
Outer integral:
$$ M = \sqrt{14} \int_0^3 \left(2x - \frac{2}{3}x^2\right) \, dx = \sqrt{14} \left[ x^2 - \frac{2}{9}x^3 \right]_0^3 = \sqrt{14} \left(9 - \frac{2}{9}(27)\right) = \sqrt{14}(9 - 6) $$
$$ \mathbf{M = 3\sqrt{14} \approx 11.22 \text{ kg}} $$

---

### Example 2 — Medium: Heat Distribution on a Cone

**Problem:** A metal funnel is modeled by the cone $z = \sqrt{x^2 + y^2}$ for $1 \le z \le 4$. The temperature distribution on the surface is $T(x,y,z) = z^2$. Evaluate the surface integral $\iint_S T \, dS$ to find a weighted temperature metric.

**Step 1: Explicit shortcut.**
$g(x,y) = (x^2 + y^2)^{1/2}$.
$g_x = \frac{x}{\sqrt{x^2+y^2}}$ and $g_y = \frac{y}{\sqrt{x^2+y^2}}$.
$$ dS = \sqrt{1 + \frac{x^2}{x^2+y^2} + \frac{y^2}{x^2+y^2}} \, dA = \sqrt{1 + \frac{x^2+y^2}{x^2+y^2}} \, dA = \sqrt{1 + 1} \, dA = \sqrt{2} \, dA $$

**Step 2: Domain $D$ and substitute.**
The cone $z = \sqrt{x^2+y^2}$ exists between $z=1$ and $z=4$.
Thus, $1 \le \sqrt{x^2+y^2} \le 4$, which means the shadow $D$ on the $xy$-plane is an annulus (ring) $1 \le x^2+y^2 \le 16$, or $1 \le r \le 4$ in polar coordinates.
The function is $T = z^2 = (\sqrt{x^2+y^2})^2 = x^2+y^2 = r^2$.

**Step 3: Integrate (Polar).**
$$ \iint_S z^2 \, dS = \iint_D r^2 (\sqrt{2}) \, dA = \sqrt{2} \int_0^{2\pi} \int_1^4 r^2 \cdot r \, dr \, d\theta = \sqrt{2} \int_0^{2\pi} d\theta \int_1^4 r^3 \, dr $$
$$ = \sqrt{2} (2\pi) \left[ \frac{r^4}{4} \right]_1^4 = 2\pi\sqrt{2} \left( \frac{256}{4} - \frac{1}{4} \right) = 2\pi\sqrt{2} \left( \frac{255}{4} \right) = \mathbf{\frac{255\pi\sqrt{2}}{2}} $$

---

### Example 3 — Hard: Integrating over a Sphere

**Problem:** Evaluate $\iint_S x^2 dS$, where $S$ is the unit sphere $x^2 + y^2 + z^2 = 1$. This type of integral is used when calculating the moment of inertia of a hollow spherical shell.

**Step 1: Parameterize.**
For a full sphere, the $z = g(x,y)$ shortcut is awkward (needs splitting). Use spherical coordinates with radius $R=1$:
$$ \mathbf{r}(\phi, \theta) = \langle \sin\phi\cos\theta, \, \sin\phi\sin\theta, \, \cos\phi \rangle $$
Domain $D$: $0 \le \phi \le \pi$, $0 \le \theta \le 2\pi$.

**Step 2: Find $dS$.**
As derived in the previous chapter, for a sphere of radius $R$, $dS = R^2\sin\phi \, d\phi \, d\theta$.
Since $R=1$, $dS = \sin\phi \, d\phi \, d\theta$.

**Step 3: Substitute $f$.**
The function is $f(x,y,z) = x^2$. Substitute $x = \sin\phi\cos\theta$:
$$ f(\phi, \theta) = \sin^2\phi\cos^2\theta $$

**Step 4: Integrate.**
$$ \iint_S x^2 \, dS = \int_0^{2\pi} \int_0^\pi (\sin^2\phi\cos^2\theta)(\sin\phi) \, d\phi \, d\theta $$
$$ = \int_0^{2\pi} \cos^2\theta \, d\theta \int_0^\pi \sin^3\phi \, d\phi $$

Evaluate the $\theta$ integral using $\cos^2\theta = \frac{1+\cos(2\theta)}{2}$:
$$ \int_0^{2\pi} \frac{1+\cos(2\theta)}{2} d\theta = \left[ \frac{\theta}{2} + \frac{\sin(2\theta)}{4} \right]_0^{2\pi} = \pi $$

Evaluate the $\phi$ integral:
$$ \int_0^\pi \sin^3\phi \, d\phi = \int_0^\pi \sin\phi(1-\cos^2\phi) \, d\phi $$
Let $u = \cos\phi, du = -\sin\phi \, d\phi$. Limits change from $(1$ to $-1)$, but the minus sign flips them back:
$$ \int_{-1}^1 (1-u^2) \, du = \left[ u - \frac{u^3}{3} \right]_{-1}^1 = \left(1 - \frac{1}{3}\right) - \left(-1 - \frac{-1}{3}\right) = \frac{2}{3} - \left(-\frac{2}{3}\right) = \frac{4}{3} $$

Final Answer:
$$ \pi \times \frac{4}{3} = \mathbf{\frac{4\pi}{3}} $$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Scalar Surface Integrals",
        "icon": "BrainCircuit",
        "description": "∬_S f(x,y,z) dS: integrate a scalar function (density, temp) over a curved 3D surface."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Pull-Back Method",
        "icon": "Activity",
        "description": "Convert 3D surface integral to 2D double integral over flat domain D using parameterization."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Area Element dS",
        "icon": "Sigma",
        "description": "Replace dS with |r_u × r_v| du dv (or R²sin(φ) dφ dθ for a sphere)."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Explicit Shortcut",
        "icon": "Layers",
        "description": "If z=g(x,y), replace dS with √(1 + g_x² + g_y²) dA and evaluate over the shadow D."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Engineering Applications",
        "icon": "Wrench",
        "description": "Total mass of curved satellite dishes, heat transfer across cooling fins, moments of inertia for shells."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Vector Surface Integrals",
        "icon": "Target",
        "description": "Instead of a scalar field, integrate a vector field dotted with the normal vector to calculate Flux."
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
