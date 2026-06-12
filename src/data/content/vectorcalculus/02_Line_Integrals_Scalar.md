# 2. Line Integrals of Scalar Fields

## What is a Line Integral?

Standard single-variable integration adds up values of $f(x)$ along a straight segment of the x-axis. But what if we want to sum a function's values along a **curved path** in 2D or 3D space?

This is precisely what a **line integral** (also called a **path integral** or **curve integral**) achieves. Instead of integrating over a straight interval $[a,b]$, we integrate over a curve $C$ in space.

**Engineering applications of scalar line integrals:**
- **Mass of a curved wire:** If $f(x,y,z)$ is the linear density (kg/m) of a curved wire, $\int_C f\,ds$ gives the total mass.
- **Heat generated along a conductor:** If $f$ is the power dissipation per unit length along a bent resistor wire, the line integral gives total power loss.
- **Length of a curve:** If $f = 1$, then $\int_C 1\,ds$ simply computes the arc length of the curve $C$.
- **Average temperature along a pipeline:** $T_{\text{avg}} = \frac{1}{L}\int_C T\,ds$ where $L$ is the pipe length.

---

## Mathematical Setup

The scalar line integral of $f$ along curve $C$ with respect to arc length $s$ is:
$$
\int_C f(x,y)\,ds
$$

Since we cannot integrate over a curve directly, we **parameterize** — we describe the curve using a single variable $t$ (think of $t$ as time as a particle travels along the path).

### The Three-Step Method

**Step 1: Parameterize the curve**
$$
\mathbf{r}(t) = \langle x(t), y(t) \rangle, \quad a \le t \le b
$$

**Step 2: Compute the arc length differential $ds$**

The arc length element is the speed of travel times $dt$:
$$
ds = |\mathbf{r}'(t)|\,dt = \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt
$$

In 3D: $ds = \sqrt{(x')^2 + (y')^2 + (z')^2}\,dt$

**Step 3: Substitute and integrate**
$$
\int_C f(x,y)\,ds = \int_a^b f(x(t),\,y(t))\,\sqrt{(x'(t))^2 + (y'(t))^2}\,dt
$$

> **Key property:** The result is **independent of parameterization** — different choices of $t$ for the same physical curve $C$ yield the same answer.

> **Orientation:** Unlike vector line integrals, scalar line integrals are also **independent of direction** — reversing the direction of travel along $C$ gives the same result.

---

## Worked Examples

### Example 1 — Easy: Arc Length as a Line Integral

**Problem:** Find the arc length of the helix $\mathbf{r}(t) = \langle \cos t, \sin t, t \rangle$ for $0 \le t \le 2\pi$.

$$
L = \int_C 1\,ds = \int_0^{2\pi} |\mathbf{r}'(t)|\,dt
$$

$$
\mathbf{r}'(t) = \langle -\sin t, \cos t, 1 \rangle, \quad |\mathbf{r}'(t)| = \sqrt{\sin^2 t + \cos^2 t + 1} = \sqrt{2}
$$

$$
\boxed{L = \int_0^{2\pi} \sqrt{2}\,dt = 2\sqrt{2}\,\pi \approx 8.89 \text{ m}}
$$

**Engineering context:** One full revolution of a helical spring with radius 1 m and pitch $2\pi$ m has wire length $2\sqrt{2}\pi$ m — this determines the amount of material needed.

---

### Example 2 — Medium: Mass of a Variable-Density Wire

**Problem:** A semicircular wire of radius 2 lies along the upper half of the circle $x^2 + y^2 = 4$. Its linear density is $\rho(x,y) = 2 + x^2$ kg/m. Find its total mass.

**Parameterize:** $x = 2\cos t$, $y = 2\sin t$, $0 \le t \le \pi$.

**Arc length differential:**
$$
\mathbf{r}'(t) = \langle -2\sin t, 2\cos t \rangle, \quad |\mathbf{r}'(t)| = \sqrt{4\sin^2 t + 4\cos^2 t} = 2
$$
So $ds = 2\,dt$.

**Substitute density:**
$$
\rho(t) = 2 + (2\cos t)^2 = 2 + 4\cos^2 t
$$

**Mass integral:**
$$
m = \int_0^\pi (2 + 4\cos^2 t)\cdot 2\,dt = \int_0^\pi (4 + 8\cos^2 t)\,dt
$$

Using $\cos^2 t = \frac{1+\cos(2t)}{2}$:
$$
= \int_0^\pi \left(4 + 4(1+\cos 2t)\right)dt = \int_0^\pi (8 + 4\cos 2t)\,dt
$$

$$
= \left[8t + 2\sin 2t\right]_0^\pi = 8\pi + 0 - 0
$$

$$\boxed{m = 8\pi \approx 25.13 \text{ kg}}$$

---

### Example 3 — Hard: Average Temperature along a 3D Pipeline

**Problem:** A curved pipeline follows the path $\mathbf{r}(t) = \langle t, t^2, \frac{2}{3}t^3 \rangle$ for $0 \le t \le 1$ (in metres). The temperature distribution surrounding the pipe is $T(x,y,z) = x + 2y + z$ °C. Find the average temperature experienced along the pipe.

**Arc length differential:**
$$
\mathbf{r}'(t) = \langle 1, 2t, 2t^2 \rangle, \quad |\mathbf{r}'(t)| = \sqrt{1 + 4t^2 + 4t^4} = \sqrt{(1+2t^2)^2} = 1 + 2t^2
$$

**Pipe length $L$:**
$$
L = \int_0^1 (1+2t^2)\,dt = \left[t + \frac{2t^3}{3}\right]_0^1 = 1 + \frac{2}{3} = \frac{5}{3} \text{ m}
$$

**Integral $\int_C T\,ds$:**
$$
T(t) = t + 2t^2 + \frac{2}{3}t^3
$$
$$
\int_C T\,ds = \int_0^1 \left(t + 2t^2 + \frac{2}{3}t^3\right)(1+2t^2)\,dt
$$

Expanding:
$$
= \int_0^1 \left(t + 2t^3 + 2t^2 + 4t^4 + \frac{2}{3}t^3 + \frac{4}{3}t^5\right)dt = \int_0^1 \left(t + 2t^2 + \frac{8}{3}t^3 + 4t^4 + \frac{4}{3}t^5\right)dt
$$

$$
= \left[\frac{t^2}{2} + \frac{2t^3}{3} + \frac{2t^4}{3} + \frac{4t^5}{5} + \frac{2t^6}{9}\right]_0^1 = \frac{1}{2} + \frac{2}{3} + \frac{2}{3} + \frac{4}{5} + \frac{2}{9}
$$

$$
= \frac{45}{90} + \frac{60}{90} + \frac{60}{90} + \frac{72}{90} + \frac{20}{90} = \frac{257}{90}
$$

**Average temperature:**
$$
\boxed{T_{\text{avg}} = \frac{\int_C T\,ds}{L} = \frac{257/90}{5/3} = \frac{257}{150} \approx 1.71 \, ^\circ\text{C}}
$$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Scalar Line Integrals",
        "icon": "BrainCircuit",
        "description": "∫_C f ds: integrate a scalar function over a curved path. Result is independent of orientation."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Step 1: Parameterize C",
        "icon": "Activity",
        "description": "Express the curve as r(t) = ⟨x(t), y(t)⟩ for t ∈ [a,b]. Choose the most natural parameter."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Step 2: Compute ds",
        "icon": "Sigma",
        "description": "ds = |r'(t)| dt = √(x'² + y'²) dt. This converts the curved integral to a standard one."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Step 3: Substitute and Integrate",
        "icon": "Layers",
        "description": "Replace x,y with x(t),y(t). Multiply f by |r'(t)|. Integrate from a to b."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Engineering Uses",
        "icon": "Wrench",
        "description": "Mass of curved wires, arc length of helical springs, average temperature along pipelines, heat dissipation in bent conductors."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Vector Line Integrals",
        "icon": "Target",
        "description": "Integrate vector fields along curves to compute work done by force fields (gravity, EM, aerodynamic drag)."
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
