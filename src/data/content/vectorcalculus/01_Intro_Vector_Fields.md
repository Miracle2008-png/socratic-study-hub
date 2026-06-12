# 1. Introduction to Vector Fields

## From Scalar Fields to Vector Fields

Throughout the previous chapters, we worked with **scalar fields** — functions like temperature $T(x,y,z)$, pressure $P(x,y,z)$, or density $\rho(x,y,z)$ that assign a single number to each point in space.

A **vector field** goes one step further: it assigns a complete **vector** (magnitude AND direction) to every point in space. Vector fields are the fundamental mathematical language of physics and engineering.

**Engineering examples of vector fields:**
- **Wind velocity field:** At every point $(x,y)$ above Earth's surface, the wind has a speed and direction. Weather modelling computes this field.
- **Electric field $\mathbf{E}$:** At every point in space around a charged object, the electric field tells you the force-per-unit-charge a test charge would experience.
- **Magnetic field $\mathbf{B}$:** Inside an MRI machine, the magnetic field vectors point in specific directions with specific magnitudes throughout the bore.
- **Gravitational field $\mathbf{g}$:** At every point around the Earth, the gravitational field points toward the centre with magnitude $GM/r^2$.
- **Fluid velocity field:** Inside a pipe or around an airfoil, the velocity vector at each point describes how fast and in what direction the fluid is moving.

---

## Mathematical Definition

### 2D Vector Field
$$
\mathbf{F}(x,y) = P(x,y)\,\mathbf{i} + Q(x,y)\,\mathbf{j} = \langle P(x,y),\, Q(x,y) \rangle
$$

where $P$ is the $x$-component and $Q$ is the $y$-component — both are scalar functions.

### 3D Vector Field
$$
\mathbf{F}(x,y,z) = P(x,y,z)\,\mathbf{i} + Q(x,y,z)\,\mathbf{j} + R(x,y,z)\,\mathbf{k}
$$

---

## Gradient Fields and Conservative Fields

The most important class of vector fields arises from the **gradient** of a scalar function. If $f(x,y,z)$ is a differentiable scalar field, its gradient is:
$$
\nabla f = \left\langle \frac{\partial f}{\partial x},\, \frac{\partial f}{\partial y},\, \frac{\partial f}{\partial z} \right\rangle
$$

The gradient field $\nabla f$ always points in the direction of **steepest ascent** of $f$, and its magnitude equals the rate of change in that direction.

When a vector field $\mathbf{F} = \nabla f$ for some scalar $f$, we call:
- $\mathbf{F}$ a **conservative vector field**
- $f$ the **potential function** of $\mathbf{F}$

**Engineering interpretation:** The gravitational force field $\mathbf{F} = -\nabla U$ is conservative, where $U = mgh$ is gravitational potential energy. This is why an object returning to the same height does zero net work against gravity — the conservative field property guarantees it.

---

## Recognising Conservative Fields

**Test in 2D:** A 2D field $\mathbf{F} = \langle P, Q \rangle$ is conservative if and only if:
$$
\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}
$$

This follows from Clairaut's Theorem: if $\mathbf{F} = \nabla f$, then $P = f_x$ and $Q = f_y$, so $P_y = f_{xy} = f_{yx} = Q_x$.

**Test in 3D:** A 3D field $\mathbf{F} = \langle P, Q, R \rangle$ is conservative if and only if:
$$
\nabla \times \mathbf{F} = \mathbf{0} \qquad \text{(zero curl everywhere)}
$$
which means $R_y = Q_z$, $P_z = R_x$, and $Q_x = P_y$ simultaneously.

---

## Worked Examples

### Example 1 — Easy: Identifying a Conservative Field

**Problem:** Is $\mathbf{F}(x,y) = (3x^2 + 2y)\,\mathbf{i} + (2x + 3y^2)\,\mathbf{j}$ conservative?

Let $P = 3x^2 + 2y$ and $Q = 2x + 3y^2$.
$$
\frac{\partial P}{\partial y} = 2, \qquad \frac{\partial Q}{\partial x} = 2
$$
Since $P_y = Q_x = 2$, the field **is conservative**. ✓

Its potential function satisfies $f_x = 3x^2 + 2y$ and $f_y = 2x + 3y^2$:
$$
f(x,y) = x^3 + 2xy + y^3 + C
$$

---

### Example 2 — Medium: Electric Field of a Point Charge

**Problem:** The electric field of a positive point charge $q$ at the origin in 2D is:
$$
\mathbf{E}(x,y) = \frac{kq}{(x^2+y^2)^{3/2}}\langle x, y \rangle
$$
Show this is conservative and find its potential.

Let $P = kqx(x^2+y^2)^{-3/2}$ and $Q = kqy(x^2+y^2)^{-3/2}$.

Computing:
$$
\frac{\partial P}{\partial y} = kqx \cdot \left(-\frac{3}{2}\right)(x^2+y^2)^{-5/2}\cdot 2y = \frac{-3kqxy}{(x^2+y^2)^{5/2}}
$$
$$
\frac{\partial Q}{\partial x} = \frac{-3kqxy}{(x^2+y^2)^{5/2}}
$$

Since $P_y = Q_x$, the field is **conservative** (for $(x,y) \neq (0,0)$).

The potential is the **electric potential**:
$$
f(x,y) = \frac{-kq}{\sqrt{x^2+y^2}} = \frac{-kq}{r}
$$

**Engineering context:** In circuit design and antenna theory, this potential function is used to compute capacitance, field energy, and signal propagation.

---

### Example 3 — Hard: Fluid Velocity Field and Divergence

**Problem:** A 2D fluid velocity field is given by $\mathbf{F}(x,y) = \langle x^2 - y^2,\, 2xy \rangle$.

**(a)** Is this field conservative?
**(b)** Compute its divergence $\nabla \cdot \mathbf{F}$ and interpret the result.

**(a)** Let $P = x^2 - y^2$, $Q = 2xy$:
$$
P_y = -2y, \qquad Q_x = 2y
$$
Since $-2y \neq 2y$ (for $y \neq 0$), the field is **NOT conservative**. It is a rotational flow.

**(b)** Divergence:
$$
\nabla \cdot \mathbf{F} = \frac{\partial}{\partial x}(x^2 - y^2) + \frac{\partial}{\partial y}(2xy) = 2x + 2x = 4x
$$

**Interpretation:** Where $x > 0$, the field has positive divergence (fluid is spreading out, like a source). Where $x < 0$, there is negative divergence (fluid is converging, like a sink). This pattern describes a 2D saddle-point flow, common in aerodynamic stagnation regions.

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Vector Fields",
        "icon": "BrainCircuit",
        "description": "F(x,y,z) = ⟨P, Q, R⟩ — assigns a vector to every point. The language of EM, fluid mechanics, and gravity."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Scalar Fields → Gradient → Vector Field",
        "icon": "FunctionSquare",
        "description": "∇f = ⟨f_x, f_y, f_z⟩. The gradient of temperature gives the heat flow vector field."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Conservative Fields",
        "icon": "Activity",
        "description": "F = ∇f for some potential f. Test: ∂P/∂y = ∂Q/∂x in 2D. Curl = 0 in 3D."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Divergence ∇·F",
        "icon": "Sigma",
        "description": "Measures local expansion/compression. ∇·F > 0: source. ∇·F < 0: sink. Incompressible flow: ∇·v = 0."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Curl ∇×F",
        "icon": "Layers",
        "description": "Measures local rotation. Conservative field: curl = 0. Vortex flow: curl ≠ 0."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Line & Surface Integrals",
        "icon": "Target",
        "description": "Integrate vector fields along curves (work) and over surfaces (flux). Foundation of Maxwell's equations."
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
