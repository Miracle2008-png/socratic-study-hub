# 10. Stokes' Theorem

## The "Soap Bubble" Principle

Stokes' Theorem is the breathtaking 3D generalization of Green's Theorem. While Green's Theorem converts a line integral around a 2D boundary into a double integral over the flat region inside, **Stokes' Theorem** converts a line integral around a 3D boundary loop into a surface integral over **any** 3D surface bounded by that loop.

**The Analogy:**
Imagine a closed loop of wire (the boundary curve $C$). If you dip it into a bucket of soapy water, it forms a flat soap film across the wire. If you blow gently on the film, it bulges out into a 3D dome (the surface $S$).
Stokes' Theorem guarantees that the flux of the *curl* of a vector field is exactly the same whether you integrate over the flat film, the bulging dome, or any other bizarrely warped surface, **as long as they share the same boundary wire $C$**.

**Engineering Applications:**
*   **Electromagnetism (Maxwell's Equations):** The integral form of **Faraday's Law** ($\oint_C \mathbf{E} \cdot d\mathbf{r} = -\iint_S \frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{S}$) and **Ampère's Law** ($\oint_C \mathbf{B} \cdot d\mathbf{r} = \mu_0 \iint_S \mathbf{J} \cdot d\mathbf{S}$) are direct applications of Stokes' Theorem.
*   **Fluid Mechanics:** Circulation of a fluid around an aircraft wing (which generates lift via the Kutta-Joukowski theorem) is equal to the integral of the vorticity ($\nabla \times \mathbf{v}$) over a surface cutting through the wing's wake.

---

## The Theorem

> **Stokes' Theorem:** Let $S$ be an oriented piecewise-smooth surface bounded by a simple, closed, piecewise-smooth boundary curve $C$ with positive orientation. Let $\mathbf{F}$ be a vector field whose components have continuous partial derivatives. Then:
>
> $$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} $$

### The Right-Hand Rule (Orientation)
The curve $C$ and the surface $S$ must be orientably linked.
**Rule:** Point the thumb of your right hand in the direction of the surface's normal vector $\mathbf{n}$. Your fingers will naturally curl in the direction of the **positive orientation** of the boundary curve $C$.

---

## When to use Stokes' Theorem

You use this theorem when one side of the equation is a nightmare to compute, and the other side is easy.
1.  **To evaluate a Line Integral:** If $C$ is a complex 3D shape (e.g., the intersection of a cylinder and a plane), parameterizing the curve can be brutal. Instead, compute $\nabla \times \mathbf{F}$, and do a surface integral over the flat planar slice inside the curve.
2.  **To evaluate a Surface Integral:** If you need to find the flux of a field that *happens to be the curl of another field*, skip the complex surface integral and just do a line integral around its edge.

---

## Worked Examples

### Example 1 — Medium: Line Integral to Surface Integral

**Problem:** Evaluate $\oint_C \mathbf{F} \cdot d\mathbf{r}$, where $\mathbf{F} = \langle -y^2, x, z^2 \rangle$, and $C$ is the curve of intersection of the plane $y+z=2$ and the cylinder $x^2+y^2=1$. (Oriented counterclockwise when viewed from above).

**Step 1: Direct approach is tough.** The boundary is a tilted ellipse in 3D. Let's use Stokes' Theorem to integrate over the flat elliptical disk $S$ inside the cylinder.

**Step 2: Compute Curl.**
$$ \nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \partial_x & \partial_y & \partial_z \\ -y^2 & x & z^2 \end{vmatrix} = \langle 0 - 0, \, 0 - 0, \, 1 - (-2y) \rangle = \langle 0, 0, 1+2y \rangle $$

**Step 3: Setup Surface Integral.**
The surface $S$ is the plane $z = 2 - y$ inside the cylinder $x^2+y^2 \le 1$.
Using the explicit surface shortcut for an upward normal:
$g(x,y) = 2 - y \implies g_x = 0, g_y = -1$.
$d\mathbf{S} = \langle 0, 1, 1 \rangle \, dA$.

**Step 4: Dot Product and Integrate.**
$$ (\nabla \times \mathbf{F}) \cdot d\mathbf{S} = \langle 0, 0, 1+2y \rangle \cdot \langle 0, 1, 1 \rangle = 1+2y $$
$$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_D (1+2y) \, dA $$
Convert to polar over the unit circle $D$:
$$ = \int_0^{2\pi} \int_0^1 (1 + 2r\sin\theta) r \, dr \, d\theta = \int_0^{2\pi} \left[ \frac{r^2}{2} + \frac{2r^3}{3}\sin\theta \right]_0^1 d\theta $$
$$ = \int_0^{2\pi} \left( \frac{1}{2} + \frac{2}{3}\sin\theta \right) d\theta = \left[ \frac{1}{2}\theta - \frac{2}{3}\cos\theta \right]_0^{2\pi} = \left(\pi - \frac{2}{3}\right) - \left(0 - \frac{2}{3}\right) = \mathbf{\pi} $$

---

### Example 2 — Hard: Surface Integral to Line Integral (The Soap Bubble)

**Problem:** Evaluate the flux integral $\iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$, where $\mathbf{F} = \langle z^2, y^2, x \rangle$ and $S$ is the upper hemisphere $x^2 + y^2 + z^2 = 4$ ($z \ge 0$), oriented upwards.

**Step 1: Recognize the trick.**
Computing the curl and performing a spherical surface integral over a dome is massive work. By Stokes' Theorem, the flux of the curl over the dome equals the line integral around the base boundary curve $C$.

**Step 2: Find Boundary Curve $C$.**
The boundary of the hemisphere is the circle on the $xy$-plane ($z=0$): $x^2 + y^2 = 4$.
Parameterize this circle (radius 2) counterclockwise:
$\mathbf{r}(t) = \langle 2\cos t, 2\sin t, 0 \rangle$ for $0 \le t \le 2\pi$.

**Step 3: Evaluate Line Integral.**
$d\mathbf{r} = \langle -2\sin t, 2\cos t, 0 \rangle dt$.
Evaluate $\mathbf{F}$ on $C$: Since $z=0$, $\mathbf{F}(\mathbf{r}(t)) = \langle 0, 4\sin^2 t, 2\cos t \rangle$.

Dot product:
$$ \mathbf{F} \cdot d\mathbf{r} = (0)(-2\sin t) + (4\sin^2 t)(2\cos t) + (2\cos t)(0) = 8\sin^2 t \cos t $$

Integrate:
$$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \int_0^{2\pi} 8\sin^2 t \cos t \, dt $$
U-sub ($u = \sin t, du = \cos t \, dt$):
$$ \left[ \frac{8}{3}\sin^3 t \right]_0^{2\pi} = \frac{8}{3}(0) - \frac{8}{3}(0) = \mathbf{0} $$

---

### Example 3 — Hard: Ampère's Law (Magnetic Circulation)

**Problem:** A steady current $I$ flows along the $z$-axis. The magnetic field produced is $\mathbf{B} = \frac{\mu_0 I}{2\pi(x^2+y^2)} \langle -y, x, 0 \rangle$. Use Stokes' theorem to relate the line integral of $\mathbf{B}$ around a loop $C$ to the current enclosed.

**Background:** Maxwell's equations state $\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$, where $\mathbf{J}$ is the current density vector (amps per m²).

**Apply Stokes' Theorem:**
Let $S$ be any surface bounded by the loop $C$.
$$ \oint_C \mathbf{B} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{B}) \cdot d\mathbf{S} $$

Substitute Ampère's differential form:
$$ \iint_S (\nabla \times \mathbf{B}) \cdot d\mathbf{S} = \iint_S (\mu_0 \mathbf{J}) \cdot d\mathbf{S} $$

The integral of current density $\mathbf{J}$ over the surface $S$ is exactly the total current passing through $S$, denoted $I_{\text{enc}}$.
$$ \mu_0 \iint_S \mathbf{J} \cdot d\mathbf{S} = \mu_0 I_{\text{enc}} $$

Therefore:
$$ \mathbf{\oint_C \mathbf{B} \cdot d\mathbf{r} = \mu_0 I_{\text{enc}}} $$

This is the integral form of Ampère's Law, derived elegantly via Stokes' Theorem!

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Stokes' Theorem",
        "icon": "BrainCircuit",
        "description": "∮_C F·dr = ∬_S (∇×F)·dS. Links a 1D boundary loop to ANY 3D surface it bounds."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "The Soap Bubble Principle",
        "icon": "Activity",
        "description": "The flux of the curl is identical over a flat disk or a bulging dome, provided they share the same boundary."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Right-Hand Rule",
        "icon": "Sigma",
        "description": "Thumb = surface normal vector n. Fingers = positive orientation of the boundary curve C."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Convert Hard to Easy",
        "icon": "Layers",
        "description": "Trade a difficult 3D line integral for a curl surface integral, or vice versa."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Engineering Applications",
        "icon": "Wrench",
        "description": "Faraday's Law of Induction, Ampère's Law, aerodynamic lift, computing mechanical work along 3D edges."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Divergence Theorem",
        "icon": "Target",
        "description": "Stokes' links 1D edges to 2D surfaces. The Divergence Theorem links 2D closed shells to 3D volumes."
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
