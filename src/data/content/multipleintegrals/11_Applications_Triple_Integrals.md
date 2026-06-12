# 11. Applications of Triple Integrals

## Engineering with Triple Integrals

The true power of triple integration is unlocked when we connect abstract 3D sums to measurable, physical engineering quantities. Every time an engineer designs a flywheel, a pressure vessel, a fuel tank, or a satellite component, they must reason about physical quantities distributed throughout a 3D volume. Triple integrals are the exact mathematical tool for this.

Let $E$ be a solid 3D region and $\rho(x,y,z)$ its **volumetric density** (mass per unit volume, kg/m³). This function can be non-uniform — denser in some regions, lighter in others.

---

## Key Physical Quantities

### 1. Total Mass
$$
m = \iiint_E \rho(x,y,z)\,dV
$$

### 2. First Moments (about Coordinate Planes)
The first moment measures "how far" the mass distribution leans toward a plane:
$$
M_{yz} = \iiint_E x\,\rho\,dV, \qquad M_{xz} = \iiint_E y\,\rho\,dV, \qquad M_{xy} = \iiint_E z\,\rho\,dV
$$

### 3. Centre of Mass (Centroid for Uniform Density)
The balancing point — where you could support the object on a pin:
$$
\bar{x} = \frac{M_{yz}}{m}, \qquad \bar{y} = \frac{M_{xz}}{m}, \qquad \bar{z} = \frac{M_{xy}}{m}
$$

**Engineering application:** In aerospace, the centre of mass of a fuel tank must be known precisely to predict how the aircraft's balance shifts as fuel is consumed.

### 4. Moments of Inertia (Second Moments of Mass)
The moment of inertia is the rotational analogue of mass — it measures an object's resistance to **angular acceleration** about an axis. The larger $I$ is, the more torque is needed to spin the object.

$$
I_x = \iiint_E (y^2 + z^2)\,\rho\,dV \qquad \text{(axis = x-axis)}
$$
$$
I_y = \iiint_E (x^2 + z^2)\,\rho\,dV \qquad \text{(axis = y-axis)}
$$
$$
I_z = \iiint_E (x^2 + y^2)\,\rho\,dV \qquad \text{(axis = z-axis)}
$$

**Physical basis:** The integrand $r^2\rho\,dV$ represents the "difficulty" of spinning each mass element $\rho\,dV$ that is at distance $r$ from the axis of rotation. A mass far from the axis contributes $r^2$ times more resistance than the same mass at the axis.

**The Parallel Axis Theorem:** If $I_{cm}$ is the moment of inertia about an axis through the centre of mass, the moment about a parallel axis displaced by distance $d$ is $I = I_{cm} + md^2$.

---

## Worked Examples

### Example 1 — Easy: Centre of Mass of a Uniform Hemisphere

**Problem:** Find the centroid of a solid hemisphere of radius $R$ and uniform density $\rho_0$, sitting with its flat face on the $xy$-plane (upper half: $z \ge 0$).

By symmetry: $\bar{x} = 0$ and $\bar{y} = 0$. We only need $\bar{z}$.

**Mass:** Volume of hemisphere $= \frac{2}{3}\pi R^3$, so $m = \frac{2}{3}\pi R^3 \rho_0$.

**First moment $M_{xy}$** (spherical coordinates, $0 \le \phi \le \pi/2$, $0 \le \rho \le R$):
$$
M_{xy} = \rho_0\int_0^{2\pi}\int_0^{\pi/2}\int_0^R (\rho\cos\phi)\cdot\rho^2\sin\phi\,d\rho\,d\phi\,d\theta
$$

$$
= \rho_0 \cdot 2\pi \cdot \int_0^{\pi/2}\sin\phi\cos\phi\,d\phi \cdot \int_0^R\rho^3\,d\rho
$$

$$
= 2\pi\rho_0 \cdot \left[\frac{\sin^2\phi}{2}\right]_0^{\pi/2} \cdot \frac{R^4}{4} = 2\pi\rho_0 \cdot \frac{1}{2} \cdot \frac{R^4}{4} = \frac{\pi\rho_0 R^4}{4}
$$

$$
\bar{z} = \frac{M_{xy}}{m} = \frac{\pi\rho_0 R^4/4}{2\pi R^3\rho_0/3} = \frac{R^4}{4}\cdot\frac{3}{2R^3} = \frac{3R}{8}
$$

$$\boxed{\bar{z} = \frac{3R}{8} \approx 0.375R}$$

This classic result is critical in aircraft fuel tank and dome design.

---

### Example 2 — Medium: Moment of Inertia of a Uniform Solid Cylinder

**Problem:** A uniform solid cylinder (density $\rho_0$) has radius $R$ and height $H$. Derive its moment of inertia about its central axis ($I_z$) and verify the physics formula $I_z = \frac{1}{2}mR^2$.

In cylindrical coordinates, $x^2 + y^2 = r^2$:
$$
I_z = \rho_0\int_0^{2\pi}\int_0^R\int_0^H r^2 \cdot r\,dz\,dr\,d\theta = \rho_0\int_0^{2\pi}d\theta\int_0^R r^3\,dr\int_0^H dz
$$

$$
= \rho_0 \cdot 2\pi \cdot \frac{R^4}{4} \cdot H = \frac{\pi\rho_0 R^4 H}{2}
$$

Since the total mass is $m = \rho_0 \cdot \pi R^2 H$:
$$
I_z = \frac{\pi\rho_0 R^4 H}{2} = \frac{1}{2}(\rho_0 \pi R^2 H)R^2 = \boxed{\frac{1}{2}mR^2} \quad \checkmark
$$

**Engineering use:** A flywheel stores rotational kinetic energy $KE = \frac{1}{2}I_z\omega^2$. A flywheel with larger $R$ and the same mass stores far more energy.

---

### Example 3 — Hard: Non-Uniform Density Inertia of a Solid Ball

**Problem:** A solid ball of radius $R$ has density $\rho(r) = \rho_0(1 - r/R)$ — denser at the centre, tapering to zero at the surface (like a model of a planetary body). Find its moment of inertia about a diameter (say the z-axis).

In spherical coordinates, the distance from the z-axis is $\rho\sin\phi$, so $x^2+y^2 = \rho^2\sin^2\phi$:
$$
I_z = \int_0^{2\pi}\int_0^{\pi}\int_0^R \rho^2\sin^2\phi \cdot \rho_0\!\left(1 - \frac{\rho}{R}\right)\rho^2\sin\phi\,d\rho\,d\phi\,d\theta
$$

$$
= \rho_0 \cdot 2\pi \cdot \int_0^{\pi}\sin^3\phi\,d\phi \cdot \int_0^R\!\left(\rho^4 - \frac{\rho^5}{R}\right)d\rho
$$

**Angular factor:** $\int_0^\pi \sin^3\phi\,d\phi = \frac{4}{3}$

**Radial factor:**
$$
\int_0^R\!\left(\rho^4 - \frac{\rho^5}{R}\right)d\rho = \frac{R^5}{5} - \frac{R^5}{6} = \frac{R^5}{30}
$$

$$
I_z = \rho_0 \cdot 2\pi \cdot \frac{4}{3} \cdot \frac{R^5}{30} = \frac{8\pi\rho_0 R^5}{45}
$$

The total mass is $m = \rho_0\int_0^{2\pi}\int_0^\pi\int_0^R(1-\rho/R)\rho^2\sin\phi\,d\rho\,d\phi\,d\theta = \rho_0\cdot 4\pi\cdot\left(\frac{R^3}{3}-\frac{R^3}{4}\right) = \frac{\pi\rho_0 R^3}{3}$

$$\boxed{I_z = \frac{8\pi\rho_0 R^5}{45}}$$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Applications: Physical Quantities",
        "icon": "BrainCircuit",
        "description": "Triple integrals compute mass, centre of mass, and moments of inertia for 3D solid bodies."
      },
      "style": { "background": "#1e3a8a", "color": "#dbeafe" }
    },
    {
      "id": "2",
      "data": {
        "label": "Total Mass",
        "icon": "Sigma",
        "description": "m = ∭ ρ(x,y,z) dV. Density may be non-uniform — from alloy composition to planetary structure."
      },
      "style": { "background": "#4c1d95", "color": "#ede9fe" }
    },
    {
      "id": "3",
      "data": {
        "label": "Centre of Mass",
        "icon": "Activity",
        "description": "x̄ = Myz/m, ȳ = Mxz/m, z̄ = Mxy/m. Critical for aircraft balance, satellite attitude control."
      },
      "style": { "background": "#b45309", "color": "#fef3c7" }
    },
    {
      "id": "4",
      "data": {
        "label": "Moment of Inertia",
        "icon": "Wrench",
        "description": "Iz = ∭(x²+y²)ρ dV. Determines energy storage in flywheels, angular acceleration of rotors."
      },
      "style": { "background": "#14532d", "color": "#dcfce7" }
    },
    {
      "id": "5",
      "data": {
        "label": "Choose Right Coordinates",
        "icon": "Layers",
        "description": "Cylindrical for shafts/pipes, Spherical for planets/domes, Cartesian for rectangular prisms."
      },
      "style": { "background": "#7f1d1d", "color": "#fee2e2" }
    },
    {
      "id": "6",
      "data": {
        "label": "Parallel Axis Theorem",
        "icon": "Target",
        "description": "I = Icm + md². Shift moment of inertia from centroidal axis to any parallel axis efficiently."
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
