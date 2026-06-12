# 8. Triple Integrals over General Solid Regions

## Beyond the Rectangular Box

Rectangular boxes are rare in real engineering. A turbine housing is not a box — it is bounded by complex curved surfaces. A fuel tank is bounded above by a dome and below by a flat floor. Setting up triple integrals over these **general solid regions** is one of the most important skills in multivariable calculus.

Just as we classified 2D regions into Type I ($y$ between functions of $x$) and Type II ($x$ between functions of $y$), we classify **3D solid regions** based on which axis we use to define the "sandwich" of bounding surfaces.

---

## Type 1 Solids — Bounded Above and Below by z-Surfaces

A solid $E$ is of **Type 1** if it lies between a bottom surface $z = u_1(x,y)$ and a top surface $z = u_2(x,y)$, and its projection down onto the $xy$-plane is a 2D region $D$.

$$
E = \{(x,y,z) \mid (x,y) \in D, \quad u_1(x,y) \le z \le u_2(x,y)\}
$$

The triple integral over this region factors naturally:

$$
\iiint_E f(x,y,z) \, dV = \iint_D \left[ \int_{u_1(x,y)}^{u_2(x,y)} f(x,y,z) \, dz \right] dA
$$

**The systematic approach:**
1. **Inner integral (dz):** Integrate from bottom surface $u_1$ to top surface $u_2$. Result: a function of $(x,y)$ only.
2. **Outer double integral (dA):** Integrate the result over the 2D shadow region $D$ using standard techniques (Type I or Type II setup).

**Engineering Application:** The volume of a reservoir bounded by the natural ground topology $z = \text{ground}(x,y)$ and the water level $z = H$ is exactly a Type 1 triple integral.

---

## Type 2 and Type 3 Solids

By permuting the roles of the axes, we get:

- **Type 2 Solid:** $y$ is sandwiched between two surfaces $y = u_1(x,z)$ and $y = u_2(x,z)$. Shadow is projected onto the $xz$-plane.
- **Type 3 Solid:** $x$ is sandwiched between two surfaces $x = u_1(y,z)$ and $x = u_2(y,z)$. Shadow is projected onto the $yz$-plane.

The choice of type is a strategic decision — you should pick the type that leads to the simplest limits of integration.

---

## Worked Examples

### Example 1 — Easy: Volume of a Tetrahedron

**Problem:** Find the volume of the tetrahedron $E$ bounded by the planes $x=0$, $y=0$, $z=0$, and $x+y+z=1$.

**Strategy:** This is a Type 1 solid. The bottom surface is $z = 0$, the top is $z = 1-x-y$. The 2D shadow $D$ on the $xy$-plane is bounded by $x=0$, $y=0$, and $y = 1-x$.

**Setup:**
$$
V = \int_{0}^{1} \int_{0}^{1-x} \int_{0}^{1-x-y} dz \, dy \, dx
$$

**Inner ($dz$):** $\int_0^{1-x-y} dz = 1-x-y$

**Middle ($dy$):**
$$
\int_0^{1-x} (1-x-y) \, dy = \left[(1-x)y - \frac{y^2}{2}\right]_0^{1-x} = (1-x)^2 - \frac{(1-x)^2}{2} = \frac{(1-x)^2}{2}
$$

**Outer ($dx$):**
$$
\int_0^1 \frac{(1-x)^2}{2} \, dx = \frac{1}{2}\left[-\frac{(1-x)^3}{3}\right]_0^1 = \frac{1}{2} \cdot \frac{1}{3} = \frac{1}{6}
$$

$$\boxed{V = \frac{1}{6}}$$

This matches the known formula $V = \frac{1}{6} a \cdot b \cdot c$ for a tetrahedron with legs of length 1.

---

### Example 2 — Medium: The Integral of z Over a Tetrahedron

**Problem:** Evaluate $\displaystyle\iiint_E z \, dV$ over the same tetrahedron as Example 1.

**Setup (same limits):**
$$
I = \int_{0}^{1} \int_{0}^{1-x} \int_{0}^{1-x-y} z \, dz \, dy \, dx
$$

**Inner ($dz$):**
$$
\int_{0}^{1-x-y} z \, dz = \left[\frac{z^2}{2}\right]_0^{1-x-y} = \frac{(1-x-y)^2}{2}
$$

**Middle ($dy$):** Let $u = 1-x-y$, $du = -dy$:
$$
\int_{0}^{1-x} \frac{(1-x-y)^2}{2} \, dy = \left[-\frac{(1-x-y)^3}{6}\right]_{y=0}^{y=1-x} = \frac{(1-x)^3}{6}
$$

**Outer ($dx$):**
$$
\int_0^1 \frac{(1-x)^3}{6} \, dx = \left[-\frac{(1-x)^4}{24}\right]_0^1 = \frac{1}{24}
$$

$$\boxed{I = \frac{1}{24}}$$

**Physical meaning:** The z-coordinate of the centroid is $\bar{z} = I/V = (1/24)/(1/6) = 1/4$. By symmetry, the centroid of this regular tetrahedron is at $(1/4, 1/4, 1/4)$ — the expected result.

---

### Example 3 — Hard: Mass of a Variable-Density Solid Bounded by a Paraboloid

**Problem:** A solid $E$ is bounded by the paraboloid $z = x^2 + y^2$ (below) and the plane $z = 4$ (above). Its density is $\rho(x,y,z) = z$ kg/m³. Find the total mass.

**Step 1: Identify Region D**

The two surfaces intersect when $x^2 + y^2 = 4$, so $D$ is the disk $x^2 + y^2 \le 4$ in the $xy$-plane. We'll switch to polar later; for now:
- Bottom: $z = x^2 + y^2$
- Top: $z = 4$

**Step 2: Convert to Polar for D**

In polar: $x^2+y^2 = r^2$, $dA = r\,dr\,d\theta$.
$$
m = \int_0^{2\pi}\int_0^{2}\int_{r^2}^{4} z \cdot r \, dz \, dr \, d\theta
$$

**Inner ($dz$):**
$$
\int_{r^2}^{4} z \, dz = \left[\frac{z^2}{2}\right]_{r^2}^4 = 8 - \frac{r^4}{2}
$$

**Middle ($dr$):**
$$
\int_0^{2} r\left(8 - \frac{r^4}{2}\right) dr = \int_0^2 \left(8r - \frac{r^5}{2}\right) dr = \left[4r^2 - \frac{r^6}{12}\right]_0^2 = 16 - \frac{64}{12} = 16 - \frac{16}{3} = \frac{32}{3}
$$

**Outer ($d\theta$):**
$$
\int_0^{2\pi} \frac{32}{3} \, d\theta = \frac{64\pi}{3}
$$

$$\boxed{m = \frac{64\pi}{3} \approx 67.0 \text{ kg}}$$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "General Solid Regions",
        "icon": "BrainCircuit",
        "description": "Extending triple integrals beyond rectangular boxes to curved, irregular 3D solids."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Type 1 Solid",
        "icon": "Layers",
        "description": "z sandwiched between u₁(x,y) and u₂(x,y). Shadow D projected onto xy-plane."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Project to Shadow Region D",
        "icon": "Sigma",
        "description": "Set z-limits from lower surface to upper. Remaining 2D integral is over D."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Type 2 & Type 3 Solids",
        "icon": "Activity",
        "description": "Permute axes: y bounded by y=u₁(x,z) to y=u₂(x,z), or x by functions of (y,z)."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Engineering Applications",
        "icon": "Wrench",
        "description": "Reservoir volumes, non-uniform mass distributions, centroid of complex solids."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Switch Coordinates When Symmetric",
        "icon": "Target",
        "description": "If the solid has rotational symmetry, cylindrical or spherical coordinates simplify limits dramatically."
      },
      "style": {
        "background": "#0f766e",
        "color": "#ccfbf1"
      }
    }
  ],
  "edges": [
    {
      "source": "1",
      "target": "2",
      "animated": true
    },
    {
      "source": "2",
      "target": "3",
      "animated": true
    },
    {
      "source": "3",
      "target": "4",
      "animated": true
    },
    {
      "source": "4",
      "target": "5",
      "animated": true
    },
    {
      "source": "5",
      "target": "6",
      "animated": true
    }
  ]
}
```
