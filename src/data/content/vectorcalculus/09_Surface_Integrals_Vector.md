# 9. Surface Integrals of Vector Fields (Flux)

## The Concept of Flux

If scalar surface integrals sum a property like density over a surface, **vector surface integrals** measure flow *through* a surface. This quantity is called **Flux**.

Imagine a net placed in a flowing river. If the net is perpendicular to the current, maximum water flows through it. If you tilt the net parallel to the current, zero water flows through it. Flux quantifies exactly how much of a vector field penetrates a surface $S$.

**Engineering Applications of Flux:**
*   **Fluid Mechanics:** If $\mathbf{v}$ is the fluid velocity field, the flux $\iint_S \mathbf{v} \cdot d\mathbf{S}$ gives the **volumetric flow rate** (m³/s) through a pipe cross-section or turbine blade.
*   **Electromagnetics:** Electric flux $\Phi_E = \iint_S \mathbf{E} \cdot d\mathbf{S}$ and magnetic flux $\Phi_B = \iint_S \mathbf{B} \cdot d\mathbf{S}$ are central to Gauss's Law and Faraday's Law of Induction (how generators work).
*   **Heat Transfer:** If $\mathbf{q}$ is the heat flux vector field (W/m²), integrating it over a surface yields the total heat transfer rate (W).

---

## The Mathematical Definition

$$ \Phi = \iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_S (\mathbf{F} \cdot \mathbf{n}) \, dS $$

Here, $\mathbf{n}$ is the **unit normal vector** to the surface.
The dot product $\mathbf{F} \cdot \mathbf{n}$ extracts the component of the field $\mathbf{F}$ that is perfectly perpendicular to the surface at every point. This perpendicular component is then summed over the scalar area elements $dS$.

### Orientation matters!
A surface has two sides (two possible normal vectors). You must choose an **orientation**:
*   For an open surface (like a bowl), usually the problem specifies "upward" or "downward."
*   For a closed surface (like a sphere), convention always dictates the **outward-pointing** normal.

---

## Evaluation Method

Instead of finding $\mathbf{n}$ and $dS$ separately, we combine them. From the previous chapter, $dS = |\mathbf{r}_u \times \mathbf{r}_v| du dv$, and the unit normal is $\mathbf{n} = \frac{\mathbf{r}_u \times \mathbf{r}_v}{|\mathbf{r}_u \times \mathbf{r}_v|}$.
Multiplying them together cancels the ugly magnitude:
$$ d\mathbf{S} = (\mathbf{r}_u \times \mathbf{r}_v) \, du \, dv $$

So the pull-back formula to the 2D parameter domain $D$ is:
$$ \iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_D \mathbf{F}(\mathbf{r}(u,v)) \cdot (\mathbf{r}_u \times \mathbf{r}_v) \, du \, dv $$

*(Check your orientation! If $\mathbf{r}_u \times \mathbf{r}_v$ points the wrong way, just multiply the cross product by $-1$ before dotting it with $\mathbf{F}$.)*

### The Explicit Surface Shortcut ($z = g(x,y)$)
If the surface is given by $z = g(x,y)$ and oriented **upward**, the normal vector $\mathbf{r}_x \times \mathbf{r}_y$ simplifies to $\langle -g_x, -g_y, 1 \rangle$.
The flux integral becomes incredibly simple:
$$ \iint_S \langle P, Q, R \rangle \cdot d\mathbf{S} = \iint_D (-P g_x - Q g_y + R) \, dA $$

*(If oriented downward, just flip the signs to $\langle g_x, g_y, -1 \rangle$).*

---

## Worked Examples

### Example 1 — Easy: Upward Flux using the Shortcut

**Problem:** Find the upward flux of the vector field $\mathbf{F}(x,y,z) = \langle x, y, z \rangle$ across the paraboloid $z = 4 - x^2 - y^2$ that lies above the $xy$-plane.

**Step 1: Setup Shortcut.**
$g(x,y) = 4 - x^2 - y^2$.
$g_x = -2x \implies -g_x = 2x$.
$g_y = -2y \implies -g_y = 2y$.
Upward normal vector: $\mathbf{n} \, dA = \langle 2x, 2y, 1 \rangle \, dA$.

**Step 2: Dot Product.**
Evaluate $\mathbf{F}$ on the surface: $\mathbf{F} = \langle x, y, 4-x^2-y^2 \rangle$.
$$ \mathbf{F} \cdot (\mathbf{n} \, dA) = (x)(2x) + (y)(2y) + (4-x^2-y^2)(1) = 2x^2 + 2y^2 + 4 - x^2 - y^2 = x^2 + y^2 + 4 $$

**Step 3: Integrate over shadow $D$.**
The surface hits $z=0$ at $x^2+y^2=4$, so $D$ is a circle of radius 2. Use polar coordinates:
$$ \Phi = \iint_D (x^2+y^2+4) \, dA = \int_0^{2\pi} \int_0^2 (r^2+4) r \, dr \, d\theta $$
$$ = \int_0^{2\pi} d\theta \int_0^2 (r^3+4r) \, dr = 2\pi \left[ \frac{r^4}{4} + 2r^2 \right]_0^2 = 2\pi (4 + 8) = \mathbf{24\pi} $$

---

### Example 2 — Medium: Magnetic Flux through a Tilted Disk

**Problem:** A uniform magnetic field $\mathbf{B} = \langle 0, 3, 4 \rangle$ T exists in space. Find the magnetic flux through a circular disk of radius 2 lying in the plane $y + z = 5$, oriented with an upward normal.

**Step 1: Setup Shortcut.**
The plane is $z = 5 - y$.
$g_x = 0$, $g_y = -1$.
Upward normal vector: $\mathbf{n} \, dA = \langle 0, 1, 1 \rangle \, dA$.

**Step 2: Dot Product.**
$\mathbf{B} \cdot \mathbf{n} \, dA = \langle 0, 3, 4 \rangle \cdot \langle 0, 1, 1 \rangle = 0 + 3 + 4 = 7$.

**Step 3: Integrate.**
$$ \Phi_B = \iint_D 7 \, dA = 7 \iint_D dA $$
What is the area of the shadow $D$? The disk itself has radius 2, so its surface area is $\pi(2)^2 = 4\pi$.
Wait! $D$ is the projection on the $xy$-plane. The angle of the plane is $45^\circ$ (since normal is $\langle 0,1,1 \rangle$, $\cos\gamma = 1/\sqrt{2}$).
So Area$(D) = \text{Area}(S) \cos\gamma = 4\pi (1/\sqrt{2}) = 2\sqrt{2}\pi$.
Therefore, $\Phi_B = 7 \times 2\sqrt{2}\pi = \mathbf{14\sqrt{2}\pi \text{ Wb}}$.

*(Alternatively, parameterize the disk directly in 3D: Flux = $\mathbf{B} \cdot \mathbf{\hat{n}} \times \text{Area}$. The unit normal is $\langle 0, 1/\sqrt{2}, 1/\sqrt{2} \rangle$. $\mathbf{B} \cdot \mathbf{\hat{n}} = 7/\sqrt{2}$. Flux = $(7/\sqrt{2}) \times 4\pi = 14\sqrt{2}\pi$.)*

---

### Example 3 — Hard: Flux Out of a Cylinder

**Problem:** Find the outward flux of $\mathbf{F} = \langle x^3, y^3, z^2 \rangle$ through the curved side of the cylinder $x^2 + y^2 = 9$ bounded by $z=0$ and $z=2$.

**Step 1: Parameterize the surface.**
Since it's a vertical cylinder wall, we cannot use $z=g(x,y)$. Use cylindrical coordinates as parameters $(\theta, z)$:
$$ \mathbf{r}(\theta, z) = \langle 3\cos\theta, 3\sin\theta, z \rangle $$
Domain $D$: $0 \le \theta \le 2\pi$, $0 \le z \le 2$.

**Step 2: Normal vector.**
$$ \mathbf{r}_\theta = \langle -3\sin\theta, 3\cos\theta, 0 \rangle $$
$$ \mathbf{r}_z = \langle 0, 0, 1 \rangle $$
$$ \mathbf{r}_\theta \times \mathbf{r}_z = \langle 3\cos\theta, 3\sin\theta, 0 \rangle $$
Does this point outward? Yes, it points radially away from the $z$-axis.

**Step 3: Dot Product.**
Evaluate $\mathbf{F}$ on the surface: $\mathbf{F} = \langle 27\cos^3\theta, 27\sin^3\theta, z^2 \rangle$.
$$ \mathbf{F} \cdot (\mathbf{r}_\theta \times \mathbf{r}_z) = (27\cos^3\theta)(3\cos\theta) + (27\sin^3\theta)(3\sin\theta) + (z^2)(0) $$
$$ = 81\cos^4\theta + 81\sin^4\theta $$

**Step 4: Integrate.**
$$ \Phi = \int_0^2 \int_0^{2\pi} 81(\cos^4\theta + \sin^4\theta) \, d\theta \, dz $$
The $z$ integral just multiplies by 2.
$$ \Phi = 162 \int_0^{2\pi} (\cos^4\theta + \sin^4\theta) \, d\theta $$
Using power-reduction identities, $\int_0^{2\pi} \cos^4\theta \, d\theta = \frac{3\pi}{4}$ and $\int_0^{2\pi} \sin^4\theta \, d\theta = \frac{3\pi}{4}$.
$$ \Phi = 162 \left( \frac{3\pi}{4} + \frac{3\pi}{4} \right) = 162 \left( \frac{6\pi}{4} \right) = 162 \left( \frac{3\pi}{2} \right) = 81(3\pi) = \mathbf{243\pi} $$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Vector Surface Integrals (Flux)",
        "icon": "BrainCircuit",
        "description": "Φ = ∬_S F·dS = ∬_S (F·n) dS. Measures flow of a field perpendicular to a surface."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Orientation",
        "icon": "Activity",
        "description": "Crucial! Pick upward/downward for open surfaces, or strictly outward for closed surfaces."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Pull-Back Formula",
        "icon": "Sigma",
        "description": "Replace dS with (r_u × r_v) du dv. Take the dot product with F before integrating."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Explicit Shortcut",
        "icon": "Layers",
        "description": "If z=g(x,y) upward, dS = ⟨-g_x, -g_y, 1⟩ dA. The dot product becomes -Pg_x - Qg_y + R."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Engineering Applications",
        "icon": "Wrench",
        "description": "Volumetric fluid flow rates, electric flux (Gauss's Law), magnetic flux (Faraday's Law), heat flux."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Stokes' Theorem",
        "icon": "Target",
        "description": "What if the flux you are calculating is the curl of another field? Boundary lines come to the rescue."
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
