# 6. Curl and Divergence

## The Two Fundamental Derivatives of a Vector Field

Just as a scalar function $f(x)$ has one derivative $f'(x)$, a vector field $\mathbf{F}$ has two distinct derivative operations: **divergence** and **curl**. Together they completely characterise whether a field is a source, a sink, or a vortex at any given point — forming the mathematical backbone of Maxwell's equations and fluid mechanics.

Both use the **del (nabla) operator**:
$$
\nabla = \left\langle \frac{\partial}{\partial x},\, \frac{\partial}{\partial y},\, \frac{\partial}{\partial z} \right\rangle
$$

---

## 1. Divergence — Measuring Sources and Sinks

**Divergence** is the dot product of $\nabla$ with $\mathbf{F} = \langle P, Q, R \rangle$:
$$
\text{div}\,\mathbf{F} = \nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}
$$

**Physical interpretation (the paddlewheel analogy):**
Imagine placing a tiny inflatable balloon at a point in the field. If the field tends to **expand** the balloon (material flowing outward), divergence is **positive** (a source). If the balloon is **compressed** (material flowing inward), divergence is **negative** (a sink). If neither, divergence is **zero**.

| Sign of $\nabla \cdot \mathbf{F}$ | Physical Meaning |
|---|---|
| $> 0$ | Source — fluid or field expanding outward |
| $< 0$ | Sink — fluid or field converging inward |
| $= 0$ | Incompressible / solenoidal field |

**Engineering applications:**
- **Fluid mechanics:** $\nabla \cdot \mathbf{v} = 0$ describes incompressible flow (e.g., water in a pipe). Compressible gas flow has $\nabla \cdot \mathbf{v} \neq 0$.
- **Maxwell's equations:** $\nabla \cdot \mathbf{E} = \rho/\varepsilon_0$ (Gauss's Law for electric fields — charge is the source). $\nabla \cdot \mathbf{B} = 0$ (no magnetic monopoles — $\mathbf{B}$ is always source-free).
- **Heat transfer:** $\nabla \cdot \mathbf{q} = -\dot{q}$ where $\mathbf{q}$ is heat flux and $\dot{q}$ is volumetric heat generation.

---

## 2. Curl — Measuring Rotation

**Curl** is the cross product of $\nabla$ with $\mathbf{F}$:
$$
\text{curl}\,\mathbf{F} = \nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \partial_x & \partial_y & \partial_z \\ P & Q & R \end{vmatrix}
$$

Expanding:
$$
\nabla \times \mathbf{F} = \left(R_y - Q_z\right)\mathbf{i} - \left(R_x - P_z\right)\mathbf{j} + \left(Q_x - P_y\right)\mathbf{k}
$$

**Physical interpretation:** Imagine placing a tiny paddlewheel at a point. If the field spins it, the curl is non-zero — its direction gives the **axis of rotation** (via the right-hand rule), and its magnitude gives the **angular speed**.

**Engineering applications:**
- **Electromagnetics:** $\nabla \times \mathbf{E} = -\partial\mathbf{B}/\partial t$ (Faraday's Law). $\nabla \times \mathbf{B} = \mu_0\mathbf{J}$ (Ampère's Law). These are two of Maxwell's four equations.
- **Fluid mechanics:** $\boldsymbol{\omega} = \frac{1}{2}\nabla \times \mathbf{v}$ is the vorticity field. Irrotational flow ($\nabla \times \mathbf{v} = 0$) simplifies aerodynamic analysis enormously.
- **Stokes' Theorem:** The surface integral of $\nabla \times \mathbf{F}$ equals the circulation of $\mathbf{F}$ around the boundary.

---

## Key Vector Calculus Identities

$$
\nabla \times (\nabla f) = \mathbf{0} \qquad \text{(curl of gradient = zero)}
$$
$$
\nabla \cdot (\nabla \times \mathbf{F}) = 0 \qquad \text{(divergence of curl = zero)}
$$

These identities are fundamental: the first proves conservative fields have zero curl; the second guarantees $\nabla \cdot \mathbf{B} = 0$ persists after applying Faraday's Law.

---

## Worked Examples

### Example 1 — Easy: Computing Divergence

**Problem:** Find $\nabla \cdot \mathbf{F}$ for $\mathbf{F} = \langle x^2 y,\, y^3 z,\, z^2 x \rangle$.

$$
\nabla \cdot \mathbf{F} = \frac{\partial}{\partial x}(x^2 y) + \frac{\partial}{\partial y}(y^3 z) + \frac{\partial}{\partial z}(z^2 x) = 2xy + 3y^2 z + 2zx
$$

$$\boxed{\nabla \cdot \mathbf{F} = 2xy + 3y^2z + 2xz}$$

At the point $(1, 1, 1)$: $\nabla\cdot\mathbf{F} = 2 + 3 + 2 = 7 > 0$ — the field is a local source at this point.

---

### Example 2 — Medium: Computing Curl and Checking Conservatism

**Problem:** For $\mathbf{F}(x,y,z) = \langle 2xy + z^2,\, x^2,\, 2xz \rangle$, compute $\nabla \times \mathbf{F}$ and determine if $\mathbf{F}$ is conservative.

Let $P = 2xy + z^2$, $Q = x^2$, $R = 2xz$:

**i-component:** $R_y - Q_z = 0 - 0 = 0$

**j-component:** $-(R_x - P_z) = -(2z - 2z) = 0$

**k-component:** $Q_x - P_y = 2x - 2x = 0$

$$
\nabla \times \mathbf{F} = \mathbf{0}
$$

Since $\nabla \times \mathbf{F} = \mathbf{0}$, the field is **conservative**. Its potential function (integrate $P$ w.r.t. $x$):
$$
f = x^2 y + xz^2 + g(y,z)
$$
Check: $f_y = x^2 = Q$ ✓, $f_z = 2xz = R$ ✓. So $g = \text{const}$ and:
$$
\boxed{f(x,y,z) = x^2 y + xz^2}
$$

---

### Example 3 — Hard: Gauss's Law from Divergence

**Problem:** The electric field of a point charge $q$ at the origin (in 3D) is:
$$
\mathbf{E} = \frac{q}{4\pi\varepsilon_0} \cdot \frac{\mathbf{r}}{|\mathbf{r}|^3} = \frac{q}{4\pi\varepsilon_0}\left\langle \frac{x}{r^3}, \frac{y}{r^3}, \frac{z}{r^3}\right\rangle
$$
where $r = \sqrt{x^2+y^2+z^2}$.

Compute $\nabla \cdot \mathbf{E}$ for $\mathbf{r} \neq \mathbf{0}$ and interpret.

By the chain rule:
$$
\frac{\partial}{\partial x}\!\left(\frac{x}{r^3}\right) = \frac{r^3 - x \cdot 3r^2(x/r)}{r^6} = \frac{r^2 - 3x^2}{r^5}
$$

Summing all three components:
$$
\nabla \cdot \mathbf{E} = \frac{q}{4\pi\varepsilon_0} \cdot \frac{3r^2 - 3(x^2+y^2+z^2)}{r^5} = \frac{q}{4\pi\varepsilon_0} \cdot \frac{3r^2 - 3r^2}{r^5} = 0
$$

So $\nabla \cdot \mathbf{E} = 0$ everywhere **except** at the origin (where $\mathbf{E}$ is singular). This perfectly captures Gauss's Law: the field is source-free in empty space, with all the charge concentrated at the singular origin — a Dirac delta source: $\nabla \cdot \mathbf{E} = \frac{q}{\varepsilon_0}\delta^3(\mathbf{r})$.

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Curl and Divergence",
        "icon": "BrainCircuit",
        "description": "Two fundamental derivatives of vector fields: ∇·F (scalar) and ∇×F (vector)."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Divergence ∇·F",
        "icon": "Activity",
        "description": "∂P/∂x + ∂Q/∂y + ∂R/∂z. Measures source (+), sink (-), or incompressibility (0)."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Gauss's & Continuity Laws",
        "icon": "Sigma",
        "description": "∇·E = ρ/ε₀ (Gauss). ∇·v = 0 (incompressible flow). ∇·B = 0 (no monopoles)."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Curl ∇×F",
        "icon": "Layers",
        "description": "Determinant formula gives a vector. Magnitude = rotation rate. Direction = rotation axis."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Maxwell's Equations",
        "icon": "Wrench",
        "description": "∇×E = -∂B/∂t (Faraday). ∇×B = μ₀J (Ampère). Curl is the language of EM waves."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Key Identities",
        "icon": "Target",
        "description": "∇×(∇f) = 0 always. ∇·(∇×F) = 0 always. These underpin Stokes' and Divergence theorems."
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
