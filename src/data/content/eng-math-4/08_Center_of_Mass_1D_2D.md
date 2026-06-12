# Center of Mass and Centroids

In physics and engineering, the **center of mass** is the unique point at which the entire mass of an object or system can be considered to be concentrated. If a uniform gravitational field acts on the object, it will balance perfectly if supported exactly at this point. 

When dealing with geometric shapes that have a uniform, constant density, the center of mass relies purely on the object's shape and dimensions. In this context, the point is formally called the **centroid**. Understanding centroids is vital for calculating structural stability, analyzing aircraft flight dynamics, and determining how vehicles behave under acceleration.

## 1. Discrete Point Masses (1D)

To build intuition, consider a simple seesaw balancing on a fulcrum with discrete masses scattered along it.
*   Masses: $m_1, m_2, \dots, m_n$
*   Positions along the x-axis: $x_1, x_2, \dots, x_n$

The **Moment** ($M$) of a mass about the origin is defined as its mass multiplied by its position: $M = m \cdot x$. The moment measures the tendency of the mass to induce rotation around the origin.

To balance the system, the sum of all individual moments must be equivalent to the total mass of the system concentrated at a single coordinate, the center of mass ($\bar{x}$).
$$ \bar{x} \cdot \sum_{i=1}^{n} m_i = \sum_{i=1}^{n} (m_i \cdot x_i) $$
$$ \bar{x} = \frac{M_{\text{total}}}{m_{\text{total}}} = \frac{\sum m_i x_i}{\sum m_i} $$

## 2. Continuous 1D Objects (Rods and Cables)

Real-world materials are continuous, not discrete points. How do we find the balance point of a solid rod of length $L$ whose thickness or material density changes along its length?

Calculus replaces the discrete sum $\sum$ with a continuous integral $\int$. Let the linear mass density (mass per unit length, e.g., kg/m) at position $x$ be $\rho(x)$.
*   An infinitesimally tiny slice of the rod has length $dx$.
*   The differential mass of this slice is $dm = \rho(x) \, dx$.
*   The total mass is $m = \int_{0}^{L} \rho(x) \, dx$.
*   The total moment about the origin is $M_y = \int_{0}^{L} x \cdot \rho(x) \, dx$.

The 1D center of mass is the ratio of the total moment to the total mass:
$$ \bar{x} = \frac{\int_{0}^{L} x \rho(x) \, dx}{\int_{0}^{L} \rho(x) \, dx} $$

## 3. Centroids of 2D Regions (Planar Laminas)

Consider a flat, infinitesimally thin plate (a *lamina*) covering a region in the xy-plane bounded above by a curve $y = f(x)$, below by $y = 0$, and laterally by $x = a$ and $x = b$. We assume uniform density $\rho$, which conveniently cancels out in the ratio, meaning we only care about the geometry.

We must find both balancing coordinates: $(\bar{x}, \bar{y})$.

**Finding $\bar{x}$ (the horizontal balance point):**
Slice the region into vertical strips of width $dx$ and height $f(x)$.
*   Area of a strip: $dA = f(x) \, dx$.
*   The x-coordinate of this strip is simply $x$.
*   The moment about the y-axis ($M_y$) is $\int x \, dA = \int_{a}^{b} x f(x) \, dx$.

$$ \bar{x} = \frac{M_y}{A} = \frac{\int_{a}^{b} x f(x) \, dx}{\int_{a}^{b} f(x) \, dx} $$

**Finding $\bar{y}$ (the vertical balance point):**
Using the exact same vertical strip of width $dx$ and height $f(x)$:
*   The area is still $dA = f(x) \, dx$.
*   Where is the vertical center of this specific rectangular strip? Since it spans from $y=0$ to $y=f(x)$, its center is exactly halfway up: $\tilde{y} = \frac{1}{2}f(x)$.
*   The moment about the x-axis ($M_x$) integrates these localized centers:
    $$ M_x = \int \tilde{y} \, dA = \int_{a}^{b} \left[ \frac{1}{2}f(x) \right] \big[ f(x) \, dx \big] = \frac{1}{2} \int_{a}^{b} [f(x)]^2 \, dx $$

$$ \bar{y} = \frac{M_x}{A} = \frac{\frac{1}{2} \int_{a}^{b} [f(x)]^2 \, dx}{\int_{a}^{b} f(x) \, dx} $$

## 4. Detailed Mathematical Examples

### Example 1: 1D Rod with Variable Density (Easy)
**Problem:** A $2 \text{ m}$ long metal alloy rod has a linear density that increases uniformly from left to right, given by $\rho(x) = 1 + 2x \text{ (kg/m)}$, for $0 \le x \le 2$. Find its center of mass.

**Solution:**
1.  **Find total mass $m$:**
    $$ m = \int_{0}^{2} (1 + 2x) \, dx = \left[ x + x^2 \right]_0^2 = (2 + 4) - 0 = 6 \text{ kg} $$
2.  **Find the moment $M_y$:**
    $$ M_y = \int_{0}^{2} x(1 + 2x) \, dx = \int_{0}^{2} (x + 2x^2) \, dx = \left[ \frac{x^2}{2} + \frac{2x^3}{3} \right]_0^2 = \left( 2 + \frac{16}{3} \right) = \frac{22}{3} $$
3.  **Calculate $\bar{x}$:**
    $$ \bar{x} = \frac{M_y}{m} = \frac{22/3}{6} = \frac{22}{18} \approx 1.22 \text{ m} $$
The center of mass leans toward the heavier, right side of the rod.

### Example 2: Centroid of a Parabolic Region (Medium)
**Problem:** Find the centroid $(\bar{x}, \bar{y})$ of the region bounded by $y = 4 - x^2$ and the x-axis ($y = 0$).

**Solution:**
The roots are at $x = -2$ and $x = 2$.
1.  **Calculate Area ($A$):**
    $$ A = \int_{-2}^{2} (4 - x^2) \, dx = \left[ 4x - \frac{x^3}{3} \right]_{-2}^{2} = \left( 8 - \frac{8}{3} \right) - \left( -8 + \frac{8}{3} \right) = \frac{32}{3} $$
2.  **Calculate $\bar{x}$:**
    Because the parabola $y = 4 - x^2$ is perfectly symmetric across the y-axis, the centroid must lie on the axis of symmetry. Therefore, $\bar{x} = 0$. (Evaluating $\int_{-2}^{2} x(4-x^2)dx$ will yield 0).
3.  **Calculate $M_x$ to find $\bar{y}$:**
    $$ M_x = \frac{1}{2} \int_{-2}^{2} (4 - x^2)^2 \, dx = \frac{1}{2} \int_{-2}^{2} (16 - 8x^2 + x^4) \, dx $$
    $$ M_x = \frac{1}{2} \left[ 16x - \frac{8x^3}{3} + \frac{x^5}{5} \right]_{-2}^{2} $$
    $$ M_x = \frac{1}{2} \left( \left( 32 - \frac{64}{3} + \frac{32}{5} \right) - \left( -32 + \frac{64}{3} - \frac{32}{5} \right) \right) = 32 - \frac{64}{3} + \frac{32}{5} = \frac{480 - 320 + 96}{15} = \frac{256}{15} $$
4.  **Evaluate $\bar{y}$:**
    $$ \bar{y} = \frac{M_x}{A} = \frac{256/15}{32/3} = \frac{256}{15} \cdot \frac{3}{32} = \frac{8}{5} = 1.6 $$
The centroid is $(0, 1.6)$.

### Example 3: Region Between Two Curves (Hard)
**Problem:** Find the centroid of the region bounded by $y = x^2$ and $y = x$.

**Solution:**
The curves intersect at $x^2 = x \implies x = 0, 1$. The top curve is $f(x) = x$, bottom is $g(x) = x^2$.
1.  **Calculate Area ($A$):**
    $$ A = \int_{0}^{1} (x - x^2) \, dx = \left[ \frac{x^2}{2} - \frac{x^3}{3} \right]_0^1 = \frac{1}{2} - \frac{1}{3} = \frac{1}{6} $$
2.  **Calculate $M_y$ (for $\bar{x}$):**
    $$ M_y = \int_{0}^{1} x(f(x) - g(x)) \, dx = \int_{0}^{1} x(x - x^2) \, dx = \int_{0}^{1} (x^2 - x^3) \, dx = \left[ \frac{x^3}{3} - \frac{x^4}{4} \right]_0^1 = \frac{1}{12} $$
    $$ \bar{x} = \frac{M_y}{A} = \frac{1/12}{1/6} = \frac{1}{2} $$
3.  **Calculate $M_x$ (for $\bar{y}$):**
    Using the two-curve formula: $M_x = \frac{1}{2} \int ([f(x)]^2 - [g(x)]^2) \, dx$.
    $$ M_x = \frac{1}{2} \int_{0}^{1} (x^2 - (x^2)^2) \, dx = \frac{1}{2} \int_{0}^{1} (x^2 - x^4) \, dx = \frac{1}{2} \left[ \frac{x^3}{3} - \frac{x^5}{5} \right]_0^1 = \frac{1}{2} \left( \frac{1}{3} - \frac{1}{5} \right) = \frac{1}{2} \left( \frac{2}{15} \right) = \frac{1}{15} $$
    $$ \bar{y} = \frac{M_x}{A} = \frac{1/15}{1/6} = \frac{6}{15} = \frac{2}{5} $$
The centroid is $\left(\frac{1}{2}, \frac{2}{5}\right)$.

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Mass Distribution",
        "icon": "Scale",
        "description": "Moments depend on position and mass"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Planar Laminas",
        "icon": "Square",
        "description": "Uniform density 2D shapes"
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Integrate Moments",
        "icon": "Sigma",
        "description": "Mx and My moment integrals"
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Centroid (x̄, ȳ)",
        "icon": "Crosshair",
        "description": "Calculate geometric balance point"
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
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
    }
  ]
}
```
