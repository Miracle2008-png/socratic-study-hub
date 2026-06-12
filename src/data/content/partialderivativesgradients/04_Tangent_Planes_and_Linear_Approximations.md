# Tangent Planes and Linear Approximations

In single-variable calculus, the derivative gave us the tangent line, the best linear approximation to a curve at a single point. In multivariable calculus, extending this concept to surfaces requires partial derivatives, which collectively define the **tangent plane** to a surface at a specific point.

## 1. The Geometry and Equation of the Tangent Plane

Geometrically, a tangent plane to a surface $z = f(x, y)$ at a point $P(x_0, y_0, z_0)$ is the plane that just "touches" the surface at $P$ and contains all the tangent lines to the curves on the surface passing through $P$.

If the function $f(x, y)$ has continuous partial derivatives at $(x_0, y_0)$, then the equation of the tangent plane is:

$$ z - z_0 = f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0) $$

This is the 3D analogue of the point-slope form for a line ($y - y_0 = m(x - x_0)$). Instead of a single slope $m$, we use the two orthogonal "slopes" $f_x$ and $f_y$ evaluated at the point. 

**Theoretical Nuance:** The mere existence of $f_x$ and $f_y$ does not guarantee a tangent plane exists! The surface could be creased or disjointed. A function is truly *differentiable* (and possesses a well-defined tangent plane) only if the partial derivatives are continuous in a neighborhood around the point.

## 2. Linear Approximation and the Total Differential

The tangent plane is flat, making its algebra straightforward. Near the point of tangency $(x_0, y_0)$, the $z$-value of the tangent plane provides an excellent approximation of the $z$-value of the actual curved surface.

This is formalized as the **linear approximation** or **linearization**, $L(x,y)$:

$$ f(x,y) \approx L(x, y) = f(x_0, y_0) + f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0) $$

**The Total Differential ($dz$):**
If we denote small changes in our independent variables as $dx = x - x_0$ and $dy = y - y_0$, the estimated change in height moving along the tangent plane is called the total differential, $dz$:

$$ dz = f_x(x,y) \, dx + f_y(x,y) \, dy $$

The *actual* change in the surface height is $\Delta z = f(x, y) - f(x_0, y_0)$. For vanishingly small increments, $dz \approx \Delta z$.

## 3. Engineering Application: Error Propagation

In practical engineering, no measurement is perfectly precise. The total differential is the foundational mathematical tool for **error propagation** (or sensitivity analysis). 

If an engineer calculates a critical quantity $Q = f(x_1, x_2, \dots, x_n)$ based on measured variables $x_i$, each measurement carries a small uncertainty or error margin $dx_i$. The maximum propagated error in the calculated quantity $Q$ is estimated by the total differential:

$$ dQ = \left| \frac{\partial f}{\partial x_1} \right| dx_1 + \left| \frac{\partial f}{\partial x_2} \right| dx_2 + \dots + \left| \frac{\partial f}{\partial x_n} \right| dx_n $$
*(Absolute values are used because errors can accumulate in the worst-case scenario).*

This principle is critical across disciplines: structural engineering (predicting stress limits based on manufacturing dimensional tolerances), fluid mechanics (estimating flow rate variances based on pipe diameter fluctuations), and electronics (determining worst-case circuit behavior given resistor tolerances).

---

## Step-by-Step Examples

### Example 1: Finding a Tangent Plane (Easy)
Find the equation of the tangent plane to the paraboloid $z = x^2 + 3y^2$ at the point $(1, 2, 13)$.

**Step 1:** Verify the point lies on the surface.
$$ z(1, 2) = (1)^2 + 3(2)^2 = 1 + 12 = 13 \quad \checkmark $$

**Step 2:** Calculate the partial derivatives.
$$ f_x(x,y) = 2x $$
$$ f_y(x,y) = 6y $$

**Step 3:** Evaluate partial derivatives at $(x_0, y_0) = (1, 2)$.
$$ f_x(1, 2) = 2(1) = 2 $$
$$ f_y(1, 2) = 6(2) = 12 $$

**Step 4:** Construct the tangent plane equation.
$$ z - 13 = 2(x - 1) + 12(y - 2) $$
$$ z = 2x - 2 + 12y - 24 + 13 $$
$$ z = 2x + 12y - 13 $$

### Example 2: Linear Approximation (Medium)
Use a linear approximation to estimate the value of $f(x,y) = \sqrt{x^2 + y^2}$ at the point $(3.02, 3.96)$.

**Step 1:** Choose a nearby "nice" point $(x_0, y_0)$ where the function is easy to evaluate. The point $(3, 4)$ is perfect because it forms a 3-4-5 right triangle.
$$ f(3, 4) = \sqrt{3^2 + 4^2} = \sqrt{25} = 5 $$

**Step 2:** Calculate partial derivatives and evaluate at $(3, 4)$.
$$ f_x(x,y) = \frac{1}{2}(x^2 + y^2)^{-1/2}(2x) = \frac{x}{\sqrt{x^2 + y^2}} \implies f_x(3,4) = \frac{3}{5} = 0.6 $$
$$ f_y(x,y) = \frac{y}{\sqrt{x^2 + y^2}} \implies f_y(3,4) = \frac{4}{5} = 0.8 $$

**Step 3:** Formulate the linearization $L(x,y)$.
$$ L(x,y) = 5 + 0.6(x - 3) + 0.8(y - 4) $$

**Step 4:** Evaluate $L$ at the target point $(3.02, 3.96)$.
$$ x - 3 = 3.02 - 3 = 0.02 $$
$$ y - 4 = 3.96 - 4 = -0.04 $$
$$ f(3.02, 3.96) \approx 5 + 0.6(0.02) + 0.8(-0.04) $$
$$ f(3.02, 3.96) \approx 5 + 0.012 - 0.032 = 4.98 $$
*(Note: The true mathematical value is roughly 4.9804, showing the high accuracy of the linearization over small distances).*

### Example 3: Error Propagation in Fluid Storage (Hard)
A civil engineer is calculating the volume of a large cylindrical chemical storage tank. The radius is measured as $r = 10 \text{ m}$ with a maximum measurement error of $\pm 0.1 \text{ m}$. The height is measured as $h = 25 \text{ m}$ with a maximum measurement error of $\pm 0.2 \text{ m}$. Estimate the maximum absolute error and percentage error in the calculated volume.

**Step 1:** State the volume formula and nominal volume.
$$ V(r, h) = \pi r^2 h $$
$$ V = \pi (10)^2 (25) = 2500\pi \approx 7853.98 \text{ m}^3 $$

**Step 2:** Calculate the total differential $dV$.
$$ V_r = 2\pi r h $$
$$ V_h = \pi r^2 $$
$$ dV = \left| 2\pi r h \right| dr + \left| \pi r^2 \right| dh $$

**Step 3:** Plug in the measured nominal values and error margins to find maximum absolute error.
$$ dV = (2\pi(10)(25))(0.1) + (\pi(10)^2)(0.2) $$
$$ dV = (500\pi)(0.1) + (100\pi)(0.2) $$
$$ dV = 50\pi + 20\pi = 70\pi \approx 219.91 \text{ m}^3 $$
The maximum absolute volume error is $70\pi \text{ m}^3$.

**Step 4:** Calculate the relative (percentage) error.
$$ \text{Percentage Error} = \frac{dV}{V} \times 100\% $$
$$ \text{Percentage Error} = \frac{70\pi}{2500\pi} \times 100\% = \frac{70}{25}\% = 2.8\% $$

### Example 4: Error Propagation in Electronics (Hard)
Two resistors, $R_1$ and $R_2$, are connected in parallel. The equivalent resistance $R$ is governed by $\frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2}$. If $R_1 = 100 \, \Omega$ with a $1\%$ tolerance, and $R_2 = 400 \, \Omega$ with a $5\%$ tolerance, estimate the maximum percentage error in the equivalent resistance $R$.

**Step 1:** Solve for $R$ and determine the nominal equivalent resistance.
$$ R = \frac{R_1 R_2}{R_1 + R_2} = \frac{(100)(400)}{100 + 400} = \frac{40000}{500} = 80 \, \Omega $$

**Step 2:** Determine the absolute errors $dR_1$ and $dR_2$ from their percentage tolerances.
$$ dR_1 = 0.01 \times 100 = 1 \, \Omega $$
$$ dR_2 = 0.05 \times 400 = 20 \, \Omega $$

**Step 3:** Calculate partial derivatives using the explicit quotient rule formula for $R$.
$$ \frac{\partial R}{\partial R_1} = \frac{(1)(R_1 + R_2) - R_1(1)}{(R_1 + R_2)^2} \cdot R_2 = \frac{R_2^2}{(R_1 + R_2)^2} = \left(\frac{R_2}{R_1 + R_2}\right)^2 $$
$$ \frac{\partial R}{\partial R_2} = \left(\frac{R_1}{R_1 + R_2}\right)^2 $$

**Step 4:** Evaluate partials and compute $dR$.
$$ \frac{\partial R}{\partial R_1} = \left(\frac{400}{500}\right)^2 = (0.8)^2 = 0.64 $$
$$ \frac{\partial R}{\partial R_2} = \left(\frac{100}{500}\right)^2 = (0.2)^2 = 0.04 $$
$$ dR = |0.64|(1) + |0.04|(20) = 0.64 + 0.8 = 1.44 \, \Omega $$

**Step 5:** Calculate the final percentage error.
$$ \text{Percentage Error} = \frac{dR}{R} \times 100\% = \frac{1.44}{80} \times 100\% = 1.8\% $$

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Tangent Planes & Linearization",
        "icon": "Layers",
        "description": "Approximating 3D surfaces with flat planes."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Partial Derivatives",
        "icon": "FunctionSquare",
        "description": "Evaluate fx and fy at the point of tangency."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Tangent Plane Equation",
        "icon": "Map",
        "description": "z - z0 = fx(x-x0) + fy(y-y0)"
      },
      "style": {
        "background": "#0f766e",
        "color": "#ccfbf1"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Linear Approximation (L)",
        "icon": "TrendingUp",
        "description": "Estimate function behavior near a known point."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Total Differential (dz)",
        "icon": "Activity",
        "description": "Calculate dz = fx dx + fy dy."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Engineering Error Propagation",
        "icon": "AlertTriangle",
        "description": "Apply differentials to predict measurement uncertainty."
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
