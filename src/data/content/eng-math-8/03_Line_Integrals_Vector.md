# 3. Line Integrals of Vector Fields — Work

## The Concept of Work in a Force Field

In elementary physics, work = force × distance, but only when the force and displacement are parallel and constant. In reality, a spacecraft manoeuvring through Earth's non-uniform gravitational field, or an electron moving through a complex electric field, experiences a force that changes direction and magnitude at every point along its curved path.

The **vector line integral** handles this precisely: it integrates the **component of the force along the direction of motion** over every infinitesimal segment of the path. The result is the total work done by the field.

**Engineering applications:**
- **Aerospace:** Work done by aerodynamic lift and drag along a curved flight path
- **Electromagnetics:** Work done by the electric field on a charge moving between two electrodes (= voltage × charge)
- **Mechanical engineering:** Work done by a variable clamping force along a curved tool path in CNC machining
- **Robotics:** Energy consumed by a robot arm as it traces a curved welding trajectory through a magnetic field

---

## Mathematical Definition

If $\mathbf{F}$ is a vector field and $C$ is a smooth curve parameterized by $\mathbf{r}(t)$, $a \le t \le b$, the work done by $\mathbf{F}$ along $C$ is:

$$
W = \int_C \mathbf{F} \cdot d\mathbf{r}
$$

The dot product $\mathbf{F} \cdot d\mathbf{r}$ extracts only the tangential component of $\mathbf{F}$ — the component that actually contributes to work:
- Force **parallel** to motion → positive work (energy added)
- Force **antiparallel** to motion → negative work (energy removed)
- Force **perpendicular** to motion → zero work (e.g., magnetic force on moving charge)

### Alternative Notation

If $\mathbf{F} = \langle P, Q \rangle$ and $d\mathbf{r} = \langle dx, dy \rangle$:
$$
\int_C \mathbf{F} \cdot d\mathbf{r} = \int_C P\,dx + Q\,dy
$$

In 3D with $\mathbf{F} = \langle P, Q, R \rangle$:
$$
\int_C \mathbf{F} \cdot d\mathbf{r} = \int_C P\,dx + Q\,dy + R\,dz
$$

---

## Evaluation Method

**Step 1:** Parameterize $C$: $\mathbf{r}(t) = \langle x(t), y(t) \rangle$, $a \le t \le b$

**Step 2:** Compute $\mathbf{r}'(t) = \langle x'(t), y'(t) \rangle$ (no magnitude needed — just the derivative vector)

**Step 3:** Substitute and integrate:
$$
\int_C \mathbf{F}\cdot d\mathbf{r} = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)\,dt
$$

> **Direction matters!** Reversing the orientation of $C$ reverses the sign of the integral: $\int_{-C}\mathbf{F}\cdot d\mathbf{r} = -\int_C \mathbf{F}\cdot d\mathbf{r}$.

---

## Worked Examples

### Example 1 — Easy: Work Against Gravity

**Problem:** A 5 kg object is lifted from $(0,0)$ to $(0,3)$ along a straight vertical path. The gravitational force field is $\mathbf{F} = \langle 0, -mg \rangle = \langle 0, -49 \rangle$ N. Find the work done by gravity.

**Parameterize:** $x = 0$, $y = 3t$, $0 \le t \le 1$. So $\mathbf{r}'(t) = \langle 0, 3 \rangle$.

$$
W = \int_0^1 \langle 0, -49 \rangle \cdot \langle 0, 3 \rangle\,dt = \int_0^1 (-147)\,dt = -147 \text{ J}
$$

$$\boxed{W = -147 \text{ J}}$$

Gravity does $-147$ J of work (it opposes the upward lift). The applied lifting force does $+147$ J.

---

### Example 2 — Medium: Work by Electric Field Along a Curved Path

**Problem:** An electron ($q = -1.6\times10^{-19}$ C) moves along the quarter-circle path $\mathbf{r}(t) = \langle \cos t, \sin t \rangle$ from $t=0$ to $t=\pi/2$ (radius = 1 m) in the electric field $\mathbf{E}(x,y) = \langle x, y \rangle$ V/m. Find the work done by the electric force $\mathbf{F} = q\mathbf{E}$.

**Parameterize (given):** $x = \cos t$, $y = \sin t$, $\mathbf{r}'(t) = \langle -\sin t, \cos t \rangle$

**Force field:** $\mathbf{F}(t) = q\langle \cos t, \sin t \rangle$

**Dot product:**
$$
\mathbf{F} \cdot \mathbf{r}' = q(\cos t(-\sin t) + \sin t(\cos t)) = q(0) = 0
$$

$$\boxed{W = 0}$$

**Physical interpretation:** The radial electric field $\langle x,y\rangle$ is always perpendicular to the tangential circular path. No work is done — consistent with the fact that $\mathbf{E} = \nabla\phi$ for $\phi = \frac{x^2+y^2}{2}$ makes this a conservative field, and the start/end points are equidistant from the origin.

---

### Example 3 — Hard: Work by a Non-Conservative Field Along a Parabolic Path

**Problem:** Find the work done by $\mathbf{F}(x,y) = \langle xy, x^2 - y^2 \rangle$ along the parabola $y = x^2$ from $(0,0)$ to $(2,4)$.

**Verify non-conservative:** $P_y = x$, $Q_x = 2x$. Since $x \neq 2x$, the field is **not conservative** — the path matters.

**Parameterize:** Let $t = x$, so $x = t$, $y = t^2$, $0 \le t \le 2$.
$$
\mathbf{r}'(t) = \langle 1, 2t \rangle
$$

**Substitute into F:**
$$
\mathbf{F}(t) = \langle t \cdot t^2, t^2 - t^4 \rangle = \langle t^3, t^2 - t^4 \rangle
$$

**Dot product:**
$$
\mathbf{F} \cdot \mathbf{r}' = t^3(1) + (t^2 - t^4)(2t) = t^3 + 2t^3 - 2t^5 = 3t^3 - 2t^5
$$

**Integrate:**
$$
W = \int_0^2 (3t^3 - 2t^5)\,dt = \left[\frac{3t^4}{4} - \frac{t^6}{3}\right]_0^2 = \frac{3(16)}{4} - \frac{64}{3} = 12 - \frac{64}{3} = -\frac{28}{3}
$$

$$\boxed{W = -\frac{28}{3} \approx -9.33 \text{ J}}$$

The non-conservative field does negative net work along this particular path.

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Vector Line Integrals — Work",
        "icon": "BrainCircuit",
        "description": "W = ∫_C F·dr: integrate the tangential component of force along curved path C."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Parameterize the Path",
        "icon": "Activity",
        "description": "r(t) = ⟨x(t), y(t)⟩. Compute r'(t) — the tangent/velocity vector."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Dot Product F·r'",
        "icon": "Sigma",
        "description": "Extract tangential force component. Positive = aids motion. Negative = opposes motion. Perpendicular = zero work."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Orientation Matters",
        "icon": "Layers",
        "description": "Reversing C negates the integral. Unlike scalar integrals, direction of travel matters."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Engineering Applications",
        "icon": "Wrench",
        "description": "Aerodynamic drag work, EM field energy, robot arm energy, electron acceleration in E-fields."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Conservative Shortcut",
        "icon": "Target",
        "description": "If F = ∇f, use the Fundamental Theorem: W = f(B) - f(A). No parameterization needed."
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
