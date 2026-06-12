# Functions of Several Variables

Until now, our mathematical journey has predominantly dealt with functions of a single independent variable, $y = f(x)$. Such functions are excellent for modeling curves in a 2D plane, like the trajectory of a simple projectile. However, the physical reality engineers face is inherently multi-dimensional. 

Consider a thermodynamic system: the pressure $P$ of a gas is not merely a function of temperature; it depends simultaneously on temperature $T$ and volume $V$, modeled by state functions. In topography and civil engineering, the elevation of terrain $z$ depends on longitude $x$ and latitude $y$. To describe these complex, real-world phenomena, we must extend our mathematical toolkit to **functions of several variables**.

## 1. Definition and Engineering Context

A function of two variables, $z = f(x, y)$, is a rule that assigns a unique real number $z$ to each ordered pair $(x, y)$ within a specific set $D$, known as the domain.
*   $x$ and $y$ are the **independent variables** (e.g., spatial coordinates).
*   $z$ is the **dependent variable** (e.g., elevation, temperature, or stress magnitude).

Graphically, whereas $y = x^2$ represents a 1D parabola curving through a 2D plane, $z = f(x, y)$ represents a **surface** undulating through 3D space.

In engineering, these functions often represent **scalar fields**. For instance, the temperature distribution across a microchip can be modeled as $T(x,y)$, assigning a scalar temperature value to every point on the chip's surface.

## 2. Domain and Range

The **domain** is the set of all valid inputs $(x, y)$ for which the function produces a real, meaningful output. In single-variable calculus, the domain is a segment of the x-axis. For functions of two variables, the domain is a region in the $xy$-plane. The **range** is the set of all possible outputs (z-values).

### Example 1: Evaluating a State Function (Easy)
The Ideal Gas Law relates pressure $P$, volume $V$, and temperature $T$ of a gas: $P(V, T) = \frac{nRT}{V}$, where $n$ (moles) and $R$ (gas constant) are constants. 
**Problem:** Let $n = 1$ mol and $R \approx 8.31 \text{ J/(mol}\cdot\text{K)}$. Calculate the pressure when $V = 0.05 \text{ m}^3$ and $T = 300 \text{ K}$.
**Solution:**
1. Substitute the given values into the state function:
   $$ P(0.05, 300) = \frac{(1)(8.31)(300)}{0.05} $$
2. Perform the arithmetic:
   $$ P = \frac{2493}{0.05} = 49860 \text{ Pa} $$
The pressure is $49,860 \text{ Pascals}$.

### Example 2: Determining an Engineering Domain (Medium)
**Problem:** An antenna's signal strength function is given by $S(x,y) = \frac{100}{\sqrt{25 - x^2 - y^2}}$. Find and sketch the domain of $S(x,y)$.
**Solution:**
1. For the function to be real and defined, the term inside the square root must be strictly positive (it cannot be zero because it's in the denominator, and it cannot be negative).
   $$ 25 - x^2 - y^2 > 0 $$
2. Rearrange the inequality:
   $$ x^2 + y^2 < 25 $$
**Conclusion:** The domain is the set of all points strictly inside a circle of radius $5$ centered at the origin. Physically, this might represent the maximum operational radius of the antenna before the signal model breaks down or hits an obstacle.

## 3. Level Curves (Contour Maps)

Drawing intricate 3D surfaces on a 2D medium is notoriously difficult. A vital engineering technique for visualizing 3D functions in 2D is the use of **level curves** (or contour lines).

A level curve is the 2D curve obtained when you set the function equal to a constant $k$:
$$ f(x, y) = k $$

Think of a topographical map used in civil engineering or geology. The contour lines represent paths of constant elevation. 
*   Walking along a level curve means your altitude ($z$) remains completely unchanged.
*   Tightly packed level curves indicate a very steep gradient (e.g., a cliff).
*   Widely spaced level curves indicate a relatively flat surface (e.g., a plateau).

In thermodynamics, level curves of state functions represent processes where one property is held constant:
*   **Isotherms:** Curves of constant temperature ($T(x,y) = k$).
*   **Isobars:** Curves of constant pressure ($P(x,y) = k$).

### Example 3: Plotting Level Curves of a Pressure Field (Hard)
**Problem:** A fluid dynamicist models the pressure distribution on a flat plate as $P(x,y) = e^{-(x^2 + y^2)}$. Describe and sketch the level curves (isobars) for $P = k$.
**Solution:**
1. Set the function equal to the constant $k$:
   $$ e^{-(x^2 + y^2)} = k $$
2. Note that since $e^{\text{anything}} > 0$, level curves only exist for $k > 0$. Also, the maximum value of $e^{-(x^2+y^2)}$ is 1 (at the origin), so $0 < k \le 1$.
3. Take the natural logarithm of both sides:
   $$ -(x^2 + y^2) = \ln(k) $$
4. Multiply by $-1$:
   $$ x^2 + y^2 = -\ln(k) $$
**Conclusion:** Since $0 < k \le 1$, $\ln(k)$ is zero or negative, making $-\ln(k)$ non-negative. The level curves are concentric circles centered at the origin with radius $r = \sqrt{-\ln(k)}$. 
For instance, if $k = 1/e \approx 0.367$, the radius is $\sqrt{-\ln(e^{-1})} = 1$. The isobars form a bulls-eye pattern, indicating peak pressure at the origin that dissipates outward.

## 4. Functions of Three or More Variables

We can naturally extend these concepts to functions of three variables, $w = f(x, y, z)$. The domain of such a function is a 3D solid region in space.

Graphing a 4D entity $(x, y, z, w)$ is impossible for humans. Instead, we visualize its **level surfaces**:
$$ f(x, y, z) = k $$

If $T(x,y,z)$ represents the temperature distribution inside a solid engine block, the level surface $T(x,y,z) = 150^\circ\text{C}$ is a 3D shell within the metal where every point is exactly $150^\circ\text{C}$. Identifying these surfaces is critical for analyzing thermal stress and designing cooling jackets.

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Functions of Several Variables",
        "icon": "BrainCircuit",
        "description": "Mapping inputs to multidimensional outputs."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Domain & Range",
        "icon": "Grid",
        "description": "Valid input regions in 2D/3D spaces."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "State Functions",
        "icon": "Thermometer",
        "description": "Thermodynamics: P = f(V, T)."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Level Curves (2D)",
        "icon": "Map",
        "description": "Contour maps, Isotherms, Isobars."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Level Surfaces (3D)",
        "icon": "Layers",
        "description": "Isothermal shells in a 3D volume."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
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
      "source": "1",
      "target": "3",
      "animated": true
    },
    {
      "source": "1",
      "target": "4",
      "animated": true
    },
    {
      "source": "4",
      "target": "5",
      "animated": true
    }
  ]
}
```
