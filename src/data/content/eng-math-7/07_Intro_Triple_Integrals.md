# 7. Introduction to Triple Integrals

## From Two Dimensions to Three

In previous chapters, we mastered the double integral — the tool for summing a function's values over a 2D region $R$. Now we make the natural and necessary jump to **three dimensions**. The triple integral allows engineers to compute cumulative physical quantities distributed throughout a volume, not just across a surface.

Consider a massive steel turbine blade in an aircraft engine. Its density is not uniform — it varies from point to point due to cooling channels and composite reinforcements. To find the total mass, you cannot simply multiply a single density value by the volume. You must integrate the density function $\rho(x,y,z)$ over every infinitesimal cubic element $dV$ within the blade's volume. This is precisely what the triple integral accomplishes.

### Mathematical Definition

If $E$ is a closed, bounded solid region in 3D space, we partition it into tiny rectangular boxes of volume $\Delta V = \Delta x \, \Delta y \, \Delta z$. We pick a sample point $(x_i^*, y_j^*, z_k^*)$ in each box, evaluate $f$ there, multiply by the box's volume, and sum over all boxes. The triple integral is the limit of this Riemann sum as the partitions are made arbitrarily fine:

$$
\iiint_E f(x,y,z) \, dV = \lim_{l,m,n \to \infty} \sum_{i=1}^{l} \sum_{j=1}^{m} \sum_{k=1}^{n} f(x_i^*, y_j^*, z_k^*) \, \Delta V
$$

Because the integrand $f$ is a scalar and $dV$ has units of volume, the result is a 4D quantity with units of $[f] \times [\text{volume}]$. We make physical sense of this through interpretation.

---

## Physical Interpretations

Since we cannot visualize a 4D result, the triple integral earns its meaning through physics:

### 1. Mass of a 3D Solid
If $\rho(x,y,z)$ is the volumetric mass density (kg/m³) at each point of solid $E$:
$$
m = \iiint_E \rho(x,y,z) \, dV
$$
**Engineering Context:** The density of Earth's crust varies radially. The density of a turbine disc varies radially due to heat treatment. The density of a concrete dam varies due to rebar embedment. The triple integral handles all of these.

### 2. Total Electric Charge
If $\rho_q(x,y,z)$ is the charge density (C/m³) inside a semiconductor or plasma:
$$
Q = \iiint_E \rho_q(x,y,z) \, dV
$$

### 3. Volume Computation
The simplest case: if $f(x,y,z) = 1$, the fourth dimension collapses and we recover pure 3D volume:
$$
V = \iiint_E 1 \, dV
$$

### 4. Average Value
The average value of a function over a solid region $E$:
$$
f_{\text{avg}} = \frac{1}{V} \iiint_E f(x,y,z) \, dV
$$
**Engineering Context:** The average temperature inside a nuclear reactor core, the average stress inside a loaded beam, or the average chemical concentration inside a reaction vessel.

---

## Triple Integrals over Rectangular Boxes — Fubini's Theorem

The simplest solid region is a rectangular box:
$$
B = [a,b] \times [c,d] \times [r,s] \implies a \le x \le b, \quad c \le y \le d, \quad r \le z \le s
$$

**Fubini's Theorem** (for triple integrals) states that if $f$ is continuous on $B$, the triple integral equals an iterated integral that may be evaluated in any of the $3! = 6$ possible orders:

$$
\iiint_B f(x,y,z) \, dV = \int_{r}^{s} \int_{c}^{d} \int_{a}^{b} f(x,y,z) \, dx \, dy \, dz
$$

**Evaluation Strategy (working from inside out):**
1. **Innermost integral** — Integrate with respect to $x$; treat $y$ and $z$ as constants. Result is a function of $(y,z)$.
2. **Middle integral** — Integrate with respect to $y$; treat $z$ as a constant. Result is a function of $z$ only.
3. **Outermost integral** — Integrate with respect to $z$. Result is a scalar.

---

## Worked Examples

### Example 1 — Easy: Basic Rectangular Box

**Problem:** Evaluate $\displaystyle\iiint_B xyz \, dV$, where $B = [0,1] \times [0,2] \times [0,3]$.

**Setup:**
$$
I = \int_{0}^{3} \int_{0}^{2} \int_{0}^{1} xyz \, dx \, dy \, dz
$$

**Inner integral ($dx$):**
$$
\int_{0}^{1} xyz \, dx = yz \left[\frac{x^2}{2}\right]_0^1 = \frac{yz}{2}
$$

**Middle integral ($dy$):**
$$
\int_{0}^{2} \frac{yz}{2} \, dy = \frac{z}{2} \left[\frac{y^2}{2}\right]_0^2 = \frac{z}{2} \cdot 2 = z
$$

**Outer integral ($dz$):**
$$
\int_{0}^{3} z \, dz = \left[\frac{z^2}{2}\right]_0^3 = \frac{9}{2}
$$

$$\boxed{I = \frac{9}{2}}$$

---

### Example 2 — Medium: Average Temperature in a Furnace Chamber

**Problem:** A rectangular furnace chamber occupies the box $B = [0,2] \times [0,1] \times [0,1]$ (units in metres). The temperature distribution (in °C) inside is $T(x,y,z) = 200 + 50xy + 30z$. Find the average temperature in the chamber.

**Total Volume:** $V = 2 \times 1 \times 1 = 2 \text{ m}^3$

**Total "heat content":**
$$
\iiint_B T \, dV = \int_0^1 \int_0^1 \int_0^2 (200 + 50xy + 30z) \, dx \, dy \, dz
$$

**Inner ($dx$):**
$$
\int_0^2 (200 + 50xy + 30z) \, dx = \left[200x + 25x^2 y + 30xz\right]_0^2 = 400 + 100y + 60z
$$

**Middle ($dy$):**
$$
\int_0^1 (400 + 100y + 60z) \, dy = \left[400y + 50y^2 + 60yz\right]_0^1 = 400 + 50 + 60z = 450 + 60z
$$

**Outer ($dz$):**
$$
\int_0^1 (450 + 60z) \, dz = \left[450z + 30z^2\right]_0^1 = 480
$$

**Average temperature:**
$$
\boxed{T_{\text{avg}} = \frac{480}{2} = 240 \, ^\circ\text{C}}
$$

---

### Example 3 — Hard: Mass of a Non-Uniform Rectangular Solid

**Problem:** An alloy block occupies $B = [0,1] \times [0,1] \times [0,1]$ (in cm). Its density varies as $\rho(x,y,z) = 8000(1 + x + y + z)$ kg/m³ (note: 8000 kg/m³ is typical for steel-like alloys). Find the total mass.

$$
m = \iiint_B \rho(x,y,z) \, dV = 8000 \int_0^1 \int_0^1 \int_0^1 (1 + x + y + z) \, dx \, dy \, dz
$$

**Inner ($dx$):**
$$
\int_0^1 (1 + x + y + z) \, dx = \left[x + \frac{x^2}{2} + xy + xz\right]_0^1 = 1 + \frac{1}{2} + y + z = \frac{3}{2} + y + z
$$

**Middle ($dy$):**
$$
\int_0^1 \left(\frac{3}{2} + y + z\right) dy = \left[\frac{3}{2}y + \frac{y^2}{2} + yz\right]_0^1 = \frac{3}{2} + \frac{1}{2} + z = 2 + z
$$

**Outer ($dz$):**
$$
\int_0^1 (2 + z) \, dz = \left[2z + \frac{z^2}{2}\right]_0^1 = 2 + \frac{1}{2} = \frac{5}{2}
$$

The block has a volume of $(0.01)^3 = 10^{-6}$ m³. Converting the integral from units of cm³ to m³:
$$
\boxed{m = 8000 \times \frac{5}{2} \times 10^{-6} = 0.02 \text{ kg} = 20 \text{ g}}
$$

---

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Triple Integrals",
        "icon": "BrainCircuit",
        "description": "Summing f(x,y,z) over a 3D solid E — the generalization of double integrals to volume."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "From Double Integrals",
        "icon": "FunctionSquare",
        "description": "Natural extension: 2D region → 3D solid. dA becomes dV = dx dy dz."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Fubini's Theorem",
        "icon": "Sigma",
        "description": "Continuous f on box B: evaluate as 3 nested single integrals in any of 6 orders."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Physical Interpretations",
        "icon": "Activity",
        "description": "Mass (ρ·dV), Total charge, Volume (f=1), Average value of any physical field."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Rectangular Box Setup",
        "icon": "Layers",
        "description": "Simplest region: constant limits. Evaluate innermost first, work outward step-by-step."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Advanced: Cylindrical & Spherical",
        "icon": "Target",
        "description": "For symmetric solids, change coordinates for simpler limits and cleaner evaluation."
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
