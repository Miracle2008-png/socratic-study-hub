# 6. Applications of Double Integrals

While calculating arbitrary volumes is a great mathematical exercise, double integrals are the fundamental tool used by mechanical, civil, and aerospace engineers to compute the physical properties of thin 2D objects, known as **laminae**.

Let $D$ be a 2D lamina occupying a region in the $xy$-plane, and let $\rho(x,y)$ be its area density function (mass per unit area, e.g., $\text{kg}/\text{m}^2$). If the material is completely uniform (like sheet metal), $\rho$ is a constant. If the material is a composite, or has a thermal gradient altering its density, $\rho$ is a variable function.

### Engineering Applications
*   **Aerospace Engineering (Centroids):** The aerodynamic stability of an aircraft heavily depends on its Center of Gravity (CG). Computing the centroid of uniquely shaped wing cross-sections ensures the plane won't pitch out of control.
*   **Structural Engineering (Moments of Inertia):** An I-beam resists bending better than a solid square beam of the same mass. This resistance is quantified by the "Second Moment of Area" (or Area Moment of Inertia), calculated via double integrals.
*   **Mechanical Engineering (Flywheels):** The kinetic energy stored in a spinning flywheel depends on its Polar Moment of Inertia. Double integrals help distribute mass away from the center to maximize rotational energy storage.

---

### Core Formulas

#### 1. Total Mass ($m$)
To find the total mass of the object, we sum up (integrate) the infinitesimal mass elements ($dm = \rho(x,y) dA$) over the entire region:
$$ m = \iint_D \rho(x,y) \, dA $$

#### 2. First Moments ($M_x, M_y$)
A first moment measures the tendency of the mass to rotate around an axis. It is mass multiplied by the perpendicular distance to the axis.
*   **Moment about the x-axis ($M_x$):** Distance to the x-axis is $y$.
    $$ M_x = \iint_D y \cdot \rho(x,y) \, dA $$
*   **Moment about the y-axis ($M_y$):** Distance to the y-axis is $x$.
    $$ M_y = \iint_D x \cdot \rho(x,y) \, dA $$

#### 3. Center of Mass $(\bar{x}, \bar{y})$
The center of mass (called a centroid if density is uniform) is the exact balancing point of the lamina. It is found by dividing the first moments by the total mass:
$$ \bar{x} = \frac{M_y}{m} \quad \text{and} \quad \bar{y} = \frac{M_x}{m} $$

#### 4. Second Moments (Moments of Inertia) ($I_x, I_y, I_0$)
Moments of inertia represent the object's resistance to rotational acceleration. The distance is squared.
*   About x-axis: $I_x = \iint_D y^2 \rho(x,y) \, dA$
*   About y-axis: $I_y = \iint_D x^2 \rho(x,y) \, dA$
*   Polar Moment (about origin): $I_0 = I_x + I_y = \iint_D (x^2+y^2) \rho(x,y) \, dA$

---

### Example 1: Mass of a Non-Uniform Plate
**Difficulty: Easy**

**Problem:** Find the mass of a rectangular plate bounded by $0 \le x \le 2$ and $0 \le y \le 1$, if its density function is $\rho(x,y) = x^2 y$.

**Step-by-step Solution:**
$$ m = \int_{0}^{2} \int_{0}^{1} x^2 y \, dy \, dx $$
Inner: $\int_{0}^{1} x^2 y \, dy = \left[ \frac{1}{2} x^2 y^2 \right]_{0}^{1} = \frac{1}{2}x^2$
Outer: $\int_{0}^{2} \frac{1}{2}x^2 \, dx = \left[ \frac{1}{6}x^3 \right]_{0}^{2} = \frac{8}{6} = \frac{4}{3} \text{ kg}$.

---

### Example 2: Center of Mass of a Triangular Lamina
**Difficulty: Medium**

**Problem:** Find the center of mass of a lamina bounded by the vertices $(0,0)$, $(1,0)$, and $(0,2)$ with uniform density $\rho(x,y) = \rho_0$.

**Step-by-step Solution:**
1.  **Region:** Bounded by $x=0$, $y=0$, and the line $y = -2x + 2$.
2.  **Mass ($m$):**
    $$ m = \int_{0}^{1} \int_{0}^{-2x+2} \rho_0 \, dy \, dx = \rho_0 \int_{0}^{1} (-2x+2) \, dx = \rho_0 \left[ -x^2 + 2x \right]_{0}^{1} = \rho_0 (1) = \rho_0 $$
    (Makes sense: Area of triangle is $\frac{1}{2}(1)(2) = 1$, mass = density $\times$ area = $\rho_0$).
3.  **Moment $M_y$ (to find $\bar{x}$):**
    $$ M_y = \int_{0}^{1} \int_{0}^{-2x+2} x \cdot \rho_0 \, dy \, dx = \rho_0 \int_{0}^{1} x(-2x+2) \, dx = \rho_0 \int_{0}^{1} (-2x^2+2x) \, dx $$
    $$ M_y = \rho_0 \left[ -\frac{2}{3}x^3 + x^2 \right]_{0}^{1} = \rho_0 \left( -\frac{2}{3} + 1 \right) = \frac{1}{3}\rho_0 $$
4.  **Moment $M_x$ (to find $\bar{y}$):**
    $$ M_x = \int_{0}^{1} \int_{0}^{-2x+2} y \cdot \rho_0 \, dy \, dx = \rho_0 \int_{0}^{1} \left[ \frac{1}{2}y^2 \right]_{0}^{-2x+2} dx = \frac{\rho_0}{2} \int_{0}^{1} (4x^2 - 8x + 4) \, dx $$
    $$ M_x = \frac{\rho_0}{2} \left[ \frac{4}{3}x^3 - 4x^2 + 4x \right]_{0}^{1} = \frac{\rho_0}{2} \left( \frac{4}{3} - 4 + 4 \right) = \frac{2}{3}\rho_0 $$
5.  **Center of Mass:**
    $$ \bar{x} = \frac{M_y}{m} = \frac{\rho_0 / 3}{\rho_0} = \frac{1}{3} $$
    $$ \bar{y} = \frac{M_x}{m} = \frac{2\rho_0 / 3}{\rho_0} = \frac{2}{3} $$
    Center of mass is at $\left( \frac{1}{3}, \frac{2}{3} \right)$.

---

### Example 3: Moment of Inertia of a Disk (Polar Integration)
**Difficulty: Hard**

**Problem:** Find the Polar Moment of Inertia $I_0$ of a uniform circular disk of radius $R$ and uniform density $\rho_0$ centered at the origin. Express the answer in terms of its total mass $M$.

**Step-by-step Solution:**
1.  **Formula:** $I_0 = \iint_D (x^2+y^2)\rho_0 \, dA$
2.  **Convert to Polar:** 
    $x^2 + y^2 = r^2$. $dA = r \, dr \, d\theta$. Limits: $0 \le r \le R$, $0 \le \theta \le 2\pi$.
    $$ I_0 = \int_{0}^{2\pi} \int_{0}^{R} (r^2) \cdot \rho_0 \cdot r \, dr \, d\theta = \rho_0 \int_{0}^{2\pi} \int_{0}^{R} r^3 \, dr \, d\theta $$
3.  **Evaluate:**
    Inner: $\int_{0}^{R} r^3 \, dr = \frac{1}{4}R^4$.
    Outer: $\int_{0}^{2\pi} \frac{1}{4}R^4 \, d\theta = \frac{1}{4}R^4 (2\pi) = \frac{\pi}{2} \rho_0 R^4$.
4.  **Express in terms of Mass:**
    The total mass of a uniform disk is $M = \text{Area} \times \rho_0 = \pi R^2 \rho_0$.
    Substitute this into our $I_0$ formula:
    $$ I_0 = \frac{1}{2} (\pi \rho_0 R^2) R^2 = \frac{1}{2}MR^2 $$
    This is the standard engineering formula for the moment of inertia of a solid cylinder/disk!

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "6. Applications of Double Integrals",
        "icon": "Scale",
        "description": "Mass, Center of Mass, Moments of Inertia"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Double Integrals",
        "icon": "FunctionSquare",
        "description": "Integrating over 2D regions (Area/Volume)."
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
        "description": "Evaluating via iterated single integrals."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Polar Coordinates (r, θ)",
        "icon": "Activity",
        "description": "Jacobian transformation: dx dy = r dr dθ."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Triple Integrals",
        "icon": "Layers",
        "description": "Integrating over 3D volumes (Mass/Density)."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Cylindrical & Spherical",
        "icon": "Target",
        "description": "Advanced coordinate transformations for symmetric regions."
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
