# 4. The Fundamental Theorem of Line Integrals

## The Power of Conservative Fields

Computing vector line integrals by parameterization can be tedious — especially along complex, irregular paths. However, if the field is **conservative**, there is a breathtakingly powerful shortcut: the result depends **only on the endpoints**, not on the path taken between them.

This is the multivariable generalisation of the single-variable Fundamental Theorem of Calculus (FTC):
$$
\text{FTC:} \quad \int_a^b F'(x)\,dx = F(b) - F(a)
$$
$$
\text{FTLI:} \quad \int_C \nabla f \cdot d\mathbf{r} = f(B) - f(A)
$$

---

## The Theorem

> **Fundamental Theorem of Line Integrals (FTLI):**
>
> If $\mathbf{F} = \nabla f$ is a conservative vector field on an open connected region $D$, and $C$ is any smooth curve in $D$ from point $A$ to point $B$, then:
> $$
> \int_C \mathbf{F} \cdot d\mathbf{r} = f(B) - f(A)
> $$

**Consequences:**

1. **Path Independence:** The work done by a conservative field depends only on the start and end points. Whether the path is a straight line, a wild spiral, or a rollercoaster loop — the answer is the same.

2. **Closed Loop = Zero Work:** If the path starts and ends at the same point ($A = B$):
$$
\oint_C \mathbf{F} \cdot d\mathbf{r} = f(A) - f(A) = 0
$$

**Engineering implication:** In circuit analysis, voltage (work per unit charge) around a closed loop is zero for conservative electric fields — this is **Kirchhoff's Voltage Law (KVL)**, the cornerstone of circuit theory.

---

## Finding the Potential Function

Given a conservative field $\mathbf{F} = \langle P, Q \rangle$ (verified via $P_y = Q_x$), find $f$ such that $\nabla f = \mathbf{F}$:

**Step 1:** Integrate $P$ with respect to $x$ (treating $y$ as constant), but add $g(y)$ instead of $+C$:
$$
f = \int P\,dx + g(y)
$$

**Step 2:** Differentiate this $f$ with respect to $y$ and set equal to $Q$:
$$
\frac{\partial f}{\partial y} = Q \quad \Rightarrow \quad g'(y) = Q - \frac{\partial}{\partial y}\int P\,dx
$$

**Step 3:** Integrate $g'(y)$ to find $g(y)$, then write the complete $f(x,y)$.

For 3D fields $\langle P, Q, R \rangle$, the process has an extra integration step for $g(y,z)$.

---

## Worked Examples

### Example 1 — Easy: Applying FTLI Directly

**Problem:** Compute $\int_C (2x + y)\,dx + x\,dy$ along the curve $C$ from $(0,0)$ to $(3,2)$, given that $\mathbf{F} = \langle 2x+y, x \rangle$ is conservative with potential $f(x,y) = x^2 + xy$.

**Verify:** $P_y = 1$, $Q_x = 1$ ✓

**Apply FTLI:**
$$
\int_C \mathbf{F}\cdot d\mathbf{r} = f(3,2) - f(0,0) = (9 + 6) - (0) = \boxed{15}
$$

No parameterization required — just evaluate $f$ at the two endpoints!

---

### Example 2 — Medium: Finding the Potential Function

**Problem:** Show that $\mathbf{F}(x,y) = (2x\cos y)\,\mathbf{i} + (-x^2\sin y)\,\mathbf{j}$ is conservative, find $f$, and evaluate $\int_C \mathbf{F}\cdot d\mathbf{r}$ from $(1,0)$ to $(3,\pi/2)$ along any path.

**Step 1 — Conservative test:**
$$
P = 2x\cos y, \quad P_y = -2x\sin y
$$
$$
Q = -x^2\sin y, \quad Q_x = -2x\sin y
$$
$P_y = Q_x$ ✓ Conservative.

**Step 2 — Find potential $f$:**

Integrate $P$ w.r.t. $x$:
$$
f = \int 2x\cos y\,dx = x^2\cos y + g(y)
$$

Differentiate w.r.t. $y$ and equate to $Q$:
$$
f_y = -x^2\sin y + g'(y) = -x^2\sin y \quad \Rightarrow \quad g'(y) = 0 \quad \Rightarrow \quad g(y) = C
$$

$$
\boxed{f(x,y) = x^2\cos y}
$$

**Step 3 — Apply FTLI:**
$$
\int_C \mathbf{F}\cdot d\mathbf{r} = f(3, \pi/2) - f(1, 0) = 9\cos(\pi/2) - 1\cdot\cos(0) = 9(0) - 1(1) = \boxed{-1}
$$

**Engineering context:** This $\mathbf{F}$ could represent a position-dependent force on a mechanical actuator. The potential function $f$ is the stored potential energy. The net work done going from state $(1,0)$ to state $(3,\pi/2)$ is $-1$ J, regardless of the actuator's path.

---

### Example 3 — Hard: 3D Conservative Field and KVL

**Problem:** Verify that $\mathbf{F}(x,y,z) = \langle yz, xz, xy \rangle$ is conservative, find its potential, and compute $\int_C \mathbf{F}\cdot d\mathbf{r}$ from $(0,0,0)$ to $(2,3,1)$.

**Conservative test in 3D** (check all cross-partials):
$$
P = yz: \quad P_y = z,\quad P_z = y
$$
$$
Q = xz: \quad Q_x = z,\quad Q_z = x
$$
$$
R = xy: \quad R_x = y,\quad R_y = x
$$

Check: $P_y = z = Q_x$ ✓, $P_z = y = R_x$ ✓, $Q_z = x = R_y$ ✓ → **Conservative!**

**Find potential:**

Integrate $P = yz$ w.r.t. $x$:
$$
f = xyz + g(y,z)
$$

Differentiate w.r.t. $y$: $f_y = xz + g_y = Q = xz \Rightarrow g_y = 0$

Differentiate w.r.t. $z$: $f_z = xy + g_z = R = xy \Rightarrow g_z = 0$

So $g$ is a constant:
$$
\boxed{f(x,y,z) = xyz}
$$

**Apply FTLI:**
$$
\int_C \mathbf{F}\cdot d\mathbf{r} = f(2,3,1) - f(0,0,0) = 2\cdot3\cdot1 - 0 = \boxed{6}
$$

**Engineering context:** This field type appears in trilinear coupling problems, such as piezoelectric sensors where the coupling tensor relates mechanical strain and electric field through a mixed product.

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Fundamental Theorem of Line Integrals",
        "icon": "BrainCircuit",
        "description": "∫_C ∇f·dr = f(B) - f(A). For conservative fields, only the endpoints matter."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Path Independence",
        "icon": "Activity",
        "description": "Any path from A to B gives the same result. Straight, curved, spiral — it doesn't matter."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Closed Loop = Zero",
        "icon": "Sigma",
        "description": "∮_C F·dr = 0 for conservative fields. Basis of Kirchhoff's Voltage Law in circuit analysis."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Finding the Potential Function f",
        "icon": "Layers",
        "description": "Integrate P w.r.t. x (add g(y)), differentiate w.r.t. y, solve for g'(y), integrate g."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Engineering Connections",
        "icon": "Wrench",
        "description": "Gravitational PE, electric potential, KVL, conservative mechanical actuator forces."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Green's Theorem",
        "icon": "Target",
        "description": "Converts a line integral over a closed curve into a double integral over the enclosed region."
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
