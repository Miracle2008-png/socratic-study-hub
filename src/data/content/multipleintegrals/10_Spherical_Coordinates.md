# 10. Triple Integrals in Spherical Coordinates

## Why Spherical Coordinates?

When a 3D solid exhibits **point symmetry** about the origin — think spheres, hemispheres, and cones emanating from the origin — even cylindrical coordinates can produce complicated bounds. **Spherical coordinates** are the natural language for these shapes.

**Engineering contexts:**
- **Gravitational field modelling:** Earth's gravitational potential is modelled as a function of $\rho$ (distance from centre). Integration over spherical shells gives total gravitational energy.
- **Nuclear reactor design:** A spherical reactor core has a neutron flux $\phi(\rho)$ that depends only on the radial distance from centre. Total neutron production is $\iiint_E \phi(\rho)\,dV$.
- **Antenna radiation:** The power radiated by a 3D antenna is integrated over the full sphere $(\theta, \phi)$ at a fixed large radius $\rho$.
- **Electrostatics:** Total charge in a spherical charge cloud, total electric field energy stored in a capacitor modelled as concentric spheres.

---

## The Coordinate System

Every point in 3D is described by three quantities:

| Symbol | Name | Physical Meaning | Range |
|--------|------|-----------------|-------|
| $\rho$ | radial distance | straight-line distance from origin to point | $\rho \ge 0$ |
| $\theta$ | azimuthal angle | sweeps around the z-axis (like longitude) | $0 \le \theta \le 2\pi$ |
| $\phi$ | polar angle | drops from North Pole ($\phi=0$) to South Pole ($\phi=\pi$) | $0 \le \phi \le \pi$ |

**Critical distinction:** $\phi=0$ points straight up (North Pole), $\phi = \pi/2$ is the equator, $\phi = \pi$ is the South Pole.

### Conversion to Cartesian:
$$
x = \rho\sin\phi\cos\theta, \qquad y = \rho\sin\phi\sin\theta, \qquad z = \rho\cos\phi
$$
$$
\rho^2 = x^2 + y^2 + z^2
$$

**Key identities:**
- A sphere of radius $R$: $x^2+y^2+z^2 = R^2$ becomes simply $\rho = R$
- A cone $z = \sqrt{x^2+y^2}$: becomes $\rho\cos\phi = \rho\sin\phi \implies \phi = \pi/4$
- The upper hemisphere ($z \ge 0$): $0 \le \phi \le \pi/2$

---

## The Volume Element $dV$

The spherical volume element is derived from the Jacobian of the transformation. A spherical "wedge" at distance $\rho$ and polar angle $\phi$ has volume:
$$
\boxed{dV = \rho^2\sin\phi\,d\rho\,d\phi\,d\theta}
$$

**Physical intuition:** The factor $\rho^2$ appears because a spherical shell's area scales as $\rho^2$. The factor $\sin\phi$ accounts for the fact that circles of latitude shrink to zero at the poles ($\phi = 0$ or $\pi$) and are largest at the equator ($\phi = \pi/2$).

> **⚠️ CRITICAL:** $dV = \rho^2\sin\phi\,d\rho\,d\phi\,d\theta$. Missing either $\rho^2$ or $\sin\phi$ is the most common fatal error in spherical integrals.

---

## General Setup

$$
\iiint_E f(x,y,z)\,dV = \int_{\alpha}^{\beta}\int_{c}^{d}\int_{g_1(\theta,\phi)}^{g_2(\theta,\phi)} f(\rho,\theta,\phi)\cdot\rho^2\sin\phi\,d\rho\,d\phi\,d\theta
$$

---

## Worked Examples

### Example 1 — Easy: Volume of a Sphere

**Problem:** Derive the formula $V = \frac{4}{3}\pi R^3$ for a sphere of radius $R$.

All limits are constants — the ideal case for spherical coordinates:
$$
V = \int_0^{2\pi}\int_0^{\pi}\int_0^{R} \rho^2\sin\phi\,d\rho\,d\phi\,d\theta
$$

**Inner ($d\rho$):** $\displaystyle\int_0^R \rho^2\,d\rho = \frac{R^3}{3}$

**Middle ($d\phi$):** $\displaystyle\int_0^{\pi} \frac{R^3}{3}\sin\phi\,d\phi = \frac{R^3}{3}\Big[-\cos\phi\Big]_0^{\pi} = \frac{R^3}{3}(1+1) = \frac{2R^3}{3}$

**Outer ($d\theta$):** $\displaystyle\int_0^{2\pi}\frac{2R^3}{3}\,d\theta = \frac{4\pi R^3}{3}$

$$\boxed{V = \frac{4}{3}\pi R^3} \quad \checkmark$$

---

### Example 2 — Medium: Thermal Energy in a Spherical Reactor Core

**Problem:** A spherical nuclear reactor core of radius $R = 1.5$ m has a power density (thermal energy per unit volume, W/m³) given by:
$$
P(\rho) = P_0\left(1 - \frac{\rho^2}{R^2}\right)
$$
where $P_0 = 50 \times 10^6$ W/m³ at the centre. Find the total thermal power output (in watts).

Since $P$ depends only on $\rho$, we integrate:
$$
W = \int_0^{2\pi}\int_0^{\pi}\int_0^{R} P_0\!\left(1 - \frac{\rho^2}{R^2}\right)\rho^2\sin\phi\,d\rho\,d\phi\,d\theta
$$

**Angular parts (they separate cleanly):**
$$
\int_0^{2\pi}d\theta\int_0^{\pi}\sin\phi\,d\phi = 2\pi \cdot 2 = 4\pi
$$

**Radial part:**
$$
\int_0^R P_0\!\left(\rho^2 - \frac{\rho^4}{R^2}\right)d\rho = P_0\left[\frac{\rho^3}{3} - \frac{\rho^5}{5R^2}\right]_0^R = P_0 R^3\!\left(\frac{1}{3} - \frac{1}{5}\right) = \frac{2P_0 R^3}{15}
$$

$$
W = 4\pi \cdot \frac{2P_0 R^3}{15} = \frac{8\pi P_0 R^3}{15}
$$

Substituting $P_0 = 5\times10^7$ W/m³, $R = 1.5$ m:
$$
\boxed{W = \frac{8\pi (5\times10^7)(3.375)}{15} \approx 2.83 \times 10^8 \text{ W} = 283 \text{ MW}}
$$

---

### Example 3 — Hard: Mass of a Non-Uniform Solid Inside a Cone and Sphere

**Problem:** Find the mass of the solid $E$ bounded above by the sphere $\rho = 2$ and below by the cone $\phi = \pi/3$, with density $\rho_m = k\rho^2$ (denser further from the centre, e.g., a compressed outer shell).

**Limits:** $0 \le \theta \le 2\pi$, $0 \le \phi \le \pi/3$, $0 \le \rho \le 2$

$$
m = k\int_0^{2\pi}\int_0^{\pi/3}\int_0^{2} \rho^2 \cdot \rho^2\sin\phi\,d\rho\,d\phi\,d\theta = k\int_0^{2\pi}\int_0^{\pi/3}\int_0^{2}\rho^4\sin\phi\,d\rho\,d\phi\,d\theta
$$

**Inner ($d\rho$):** $\displaystyle\int_0^2 \rho^4\,d\rho = \frac{32}{5}$

**Middle ($d\phi$):** $\displaystyle\int_0^{\pi/3}\sin\phi\,d\phi = \Big[-\cos\phi\Big]_0^{\pi/3} = -\frac{1}{2} + 1 = \frac{1}{2}$

**Outer ($d\theta$):** $\displaystyle\int_0^{2\pi}\frac{32}{5}\cdot\frac{1}{2}\,d\theta = \frac{16}{5}\cdot 2\pi = \frac{32\pi}{5}$

$$\boxed{m = \frac{32\pi k}{5}}$$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Spherical Coordinates (ρ, θ, φ)",
        "icon": "BrainCircuit",
        "description": "ρ = distance from origin, θ = azimuthal angle, φ = polar angle from z-axis."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Cartesian Conversion",
        "icon": "Activity",
        "description": "x = ρ sin(φ) cos(θ), y = ρ sin(φ) sin(θ), z = ρ cos(φ). ρ² = x²+y²+z²."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Volume Element dV",
        "icon": "Sigma",
        "description": "dV = ρ² sin(φ) dρ dφ dθ — CRITICAL: never forget both ρ² and sin(φ)!"
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Recognising Spherical Shapes",
        "icon": "Layers",
        "description": "Sphere: ρ = R. Cone: φ = const. Half-space z≥0: 0 ≤ φ ≤ π/2."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Engineering Applications",
        "icon": "Wrench",
        "description": "Reactor thermal power, gravitational potential, antenna radiation patterns, non-uniform charge clouds."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Key Technique: Separate Angular and Radial",
        "icon": "Target",
        "description": "If f depends only on ρ, the θ and φ integrals evaluate to 4π independently, simplifying computation."
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
