# 9. Triple Integrals in Cylindrical Coordinates

## Why Cylindrical Coordinates?

When a 3D solid possesses **radial symmetry** about an axis (typically the z-axis), Cartesian coordinates force us to deal with awkward square-root expressions from circular boundaries. Cylindrical coordinates eliminate this entirely by naturally describing circular cross-sections.

**Engineering contexts where cylindrical coordinates dominate:**
- **Shaft and pipe mechanics:** Calculating mass, moment of inertia, or stress distributions in cylindrical shafts
- **Electromagnetic fields:** Magnetic field inside a solenoid or coaxial cable, which has perfect cylindrical symmetry
- **Fluid mechanics:** Poiseuille flow — viscous fluid velocity through a pipe varies as $v(r) = v_0(1 - r^2/R^2)$, where $r$ is the radial distance from the pipe centreline
- **Heat transfer:** Radial conduction in cylindrical pressure vessels and heat exchangers

---

## The Coordinate System

Cylindrical coordinates $(r, \theta, z)$ are simply **polar coordinates for the xy-plane** with the standard Cartesian $z$-axis stacked on top.

**Conversion formulas (Cartesian ↔ Cylindrical):**
$$
x = r\cos\theta, \qquad y = r\sin\theta, \qquad z = z
$$
$$
r = \sqrt{x^2 + y^2}, \qquad \tan\theta = \frac{y}{x}
$$

**Key equation:** $r^2 = x^2 + y^2$ — the cylinder $x^2 + y^2 = R^2$ becomes simply $r = R$.

---

## The Volume Element $dV$

In Cartesian coordinates: $dV = dx\,dy\,dz$.

When converting to cylindrical, the base area element transforms from Cartesian to polar:
$$
dx\,dy \longrightarrow r\,dr\,d\theta
$$

Therefore:

$$
\boxed{dV = r\,dz\,dr\,d\theta}
$$

> **⚠️ CRITICAL:** The extra factor of $r$ is the **Jacobian** of the coordinate transformation. Omitting it is the single most common error in cylindrical integrals. The factor $r$ physically represents the fact that a "wedge" of area at large $r$ is much larger than the same angular wedge near the origin.

---

## Setting Up Cylindrical Triple Integrals

A solid $E$ described in cylindrical coordinates typically has this form:
- Angle: $\alpha \le \theta \le \beta$ (specifying the angular "slice")
- Radius: $h_1(\theta) \le r \le h_2(\theta)$ (specifying the radial extent)
- Height: $u_1(r,\theta) \le z \le u_2(r,\theta)$ (the bottom and top surfaces)

$$
\iiint_E f(x,y,z)\,dV = \int_{\alpha}^{\beta}\int_{h_1(\theta)}^{h_2(\theta)}\int_{u_1}^{u_2} f(r\cos\theta,\,r\sin\theta,\,z)\cdot r\,dz\,dr\,d\theta
$$

---

## Worked Examples

### Example 1 — Easy: Volume of a Cylinder Cap

**Problem:** Find the volume of the solid $E$ bounded by the cylinder $r = 2$, the plane $z = 0$ (bottom), and the plane $z = 5$ (top).

$$
V = \int_0^{2\pi}\int_0^{2}\int_0^{5} r\,dz\,dr\,d\theta
$$

**Inner ($dz$):** $\int_0^5 r\,dz = 5r$

**Middle ($dr$):** $\int_0^2 5r\,dr = 5 \cdot \frac{r^2}{2}\Big|_0^2 = 10$

**Outer ($d\theta$):** $\int_0^{2\pi} 10\,d\theta = 20\pi$

$$\boxed{V = 20\pi \approx 62.83 \text{ m}^3}$$

Verification: $\pi R^2 H = \pi(4)(5) = 20\pi$ ✓

---

### Example 2 — Medium: Fluid Flow Rate Through a Pipe (Poiseuille Flow)

**Problem:** In a circular pipe of radius $R = 0.05$ m, the velocity profile of a viscous fluid is $v(r) = v_0\left(1 - \frac{r^2}{R^2}\right)$ m/s, where $v_0 = 2$ m/s is the centreline velocity. The volumetric flow rate is $Q = \iint_D v(r)\,dA$. Find $Q$.

$$
Q = \int_0^{2\pi}\int_0^{R} v_0\left(1 - \frac{r^2}{R^2}\right) r\,dr\,d\theta
$$

**Angular part:** $\int_0^{2\pi} d\theta = 2\pi$

**Radial part:**
$$
\int_0^{R} v_0\left(r - \frac{r^3}{R^2}\right) dr = v_0\left[\frac{r^2}{2} - \frac{r^4}{4R^2}\right]_0^R = v_0\left(\frac{R^2}{2} - \frac{R^2}{4}\right) = \frac{v_0 R^2}{4}
$$

$$
Q = 2\pi \cdot \frac{v_0 R^2}{4} = \frac{\pi v_0 R^2}{2}
$$

Substituting $v_0 = 2$ m/s, $R = 0.05$ m:
$$
\boxed{Q = \frac{\pi (2)(0.0025)}{2} = 0.0025\pi \approx 7.85 \times 10^{-3} \text{ m}^3/\text{s}}
$$

---

### Example 3 — Hard: Volume Between a Paraboloid and a Plane

**Problem:** Find the volume of the solid $E$ lying inside the cylinder $x^2+y^2=1$, below the plane $z=4$, and above the paraboloid $z = 1 - x^2 - y^2$.

**Converting to cylindrical:**
- Cylinder: $r = 1$, so $0 \le r \le 1$
- Full rotation: $0 \le \theta \le 2\pi$
- Top: $z = 4$; Bottom: $z = 1 - r^2$

$$
V = \int_0^{2\pi}\int_0^1\int_{1-r^2}^{4} r\,dz\,dr\,d\theta
$$

**Inner ($dz$):**
$$
\int_{1-r^2}^{4} r\,dz = r\big[4 - (1-r^2)\big] = r(3 + r^2) = 3r + r^3
$$

**Middle ($dr$):**
$$
\int_0^1 (3r + r^3)\,dr = \left[\frac{3r^2}{2} + \frac{r^4}{4}\right]_0^1 = \frac{3}{2} + \frac{1}{4} = \frac{7}{4}
$$

**Outer ($d\theta$):**
$$
\int_0^{2\pi} \frac{7}{4}\,d\theta = \frac{7\pi}{2}
$$

$$\boxed{V = \frac{7\pi}{2} \approx 11.0 \text{ m}^3}$$

---

### Example 4 — Hard: Moment of Inertia of a Hollow Shaft

**Problem:** A steel shaft (density $\rho_0 = 7800$ kg/m³) has inner radius $R_1 = 0.02$ m, outer radius $R_2 = 0.05$ m, and length $L = 0.3$ m. Find its moment of inertia about its central axis $I_z$.

$$
I_z = \rho_0 \int_0^{2\pi}\int_{R_1}^{R_2}\int_0^{L} r^2 \cdot r\,dz\,dr\,d\theta = \rho_0 \int_0^{2\pi}\int_{R_1}^{R_2}\int_0^{L} r^3\,dz\,dr\,d\theta
$$

**Inner ($dz$):** $\int_0^L r^3\,dz = Lr^3$

**Middle ($dr$):**
$$
\int_{R_1}^{R_2} Lr^3\,dr = L\left[\frac{r^4}{4}\right]_{R_1}^{R_2} = \frac{L}{4}(R_2^4 - R_1^4)
$$

**Outer ($d\theta$):**
$$
I_z = \rho_0 \cdot 2\pi \cdot \frac{L}{4}(R_2^4 - R_1^4) = \frac{\pi \rho_0 L}{2}(R_2^4 - R_1^4)
$$

Substituting values:
$$
I_z = \frac{\pi (7800)(0.3)}{2}\big((0.05)^4 - (0.02)^4\big) = \frac{7332\pi}{2}(6.25\times10^{-6} - 1.6\times10^{-7})
$$
$$
\boxed{I_z \approx 0.0697 \text{ kg·m}^2}
$$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Cylindrical Coordinates",
        "icon": "BrainCircuit",
        "description": "System (r, θ, z): polar for xy-plane + standard z-axis. Ideal for radially symmetric solids."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Coordinate Conversion",
        "icon": "Activity",
        "description": "x = r·cos(θ), y = r·sin(θ), z = z. Key identity: r² = x² + y²."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Volume Element dV",
        "icon": "Sigma",
        "description": "dV = r dz dr dθ — NEVER forget the Jacobian factor r!"
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Setting Up Limits",
        "icon": "Layers",
        "description": "θ from α to β, r from h₁(θ) to h₂(θ), z from bottom surface to top surface."
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
        "description": "Pipe flow (Poiseuille), moment of inertia of shafts, solenoid field energy, cylindrical tank volumes."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Next: Spherical Coordinates",
        "icon": "Target",
        "description": "For point-symmetric solids (spheres, cones from origin), spherical coordinates provide cleaner limits."
      },
      "style": {
        "background": "#0f766e",
        "color": "#ccfbf1"
      }
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
