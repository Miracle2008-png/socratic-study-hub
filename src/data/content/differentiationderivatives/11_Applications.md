# 11. Applications: Velocity, Acceleration & Optimization

Derivatives are far more than abstract mathematical exercises; they are the language used to describe and optimize the physical world. From predicting the apogee of a rocket to minimizing the cost of manufacturing materials, calculus is the primary tool of the engineer.

---

### Kinematics: Position, Velocity, Acceleration

In classical mechanics and dynamics, the movement of an object along a coordinate axis is described by a position function $s(t)$, where $t$ is time.

The derivatives of position give us profound physical insights:
*   **Velocity, $v(t)$:** The first derivative of position, $v(t) = s'(t)$. It dictates the rate at which position changes. Positive velocity indicates forward motion; negative indicates reverse motion.
*   **Acceleration, $a(t)$:** The second derivative of position, $a(t) = v'(t) = s''(t)$. It represents the rate of change of velocity. When acceleration and velocity share the same sign, the object is speeding up. When they have opposite signs, the object is braking.
*   **Jerk, $j(t)$:** The third derivative, $j(t) = a'(t) = s'''(t)$. Important in civil engineering (e.g., roller coaster design), as sudden changes in acceleration cause passenger discomfort.

When an object reverses direction (like a pendulum swinging back), its velocity must transition through zero. Setting $v(t) = 0$ reveals the exact instantaneous moment the object turns around.

---

### Optimization: Maxima and Minima

Engineering is fundamentally the science of optimization: maximizing structural load capacity, minimizing thermal loss, finding the optimum trajectory that minimizes fuel consumption, or determining the most cost-effective dimensions for packaging.

**Fermat's Theorem** states that if a continuous, differentiable function $f(x)$ has a local maximum or minimum at an interior point $x = c$, then the tangent line at that point must be perfectly horizontal. In mathematical terms:
$$ f'(c) = 0 $$
Points where $f'(c) = 0$ (or where the derivative is undefined) are called **Critical Points**.

#### The First Derivative Test
To classify a critical point as a maximum or a minimum:
1. Find all critical points $c$ where $f'(c) = 0$.
2. Test the sign of the first derivative $f'(x)$ on intervals between these critical points.
3. If $f'(x)$ changes from positive (+) to negative (-), the function was rising and is now falling. The point is a **Local Maximum**.
4. If $f'(x)$ changes from negative (-) to positive (+), the function was falling and is now rising. The point is a **Local Minimum**.

---

### Engineering Examples

#### Example 1: Rocket Kinematics (Easy)
**Problem:** The altitude of a model rocket (in meters) $t$ seconds after launch is given by $s(t) = -4.9t^2 + 49t + 10$. Find the maximum altitude the rocket reaches.

**Solution:**
The maximum altitude occurs when the upward velocity hits zero (before falling back down).

1. **Find the velocity function $v(t)$:**
   $$ v(t) = s'(t) = -9.8t + 49 $$
2. **Set velocity to zero to find the critical point:**
   $$ -9.8t + 49 = 0 \implies 9.8t = 49 \implies t = 5 \text{ seconds} $$
3. **Calculate the altitude at $t=5$:**
   $$ s(5) = -4.9(5)^2 + 49(5) + 10 $$
   $$ s(5) = -4.9(25) + 245 + 10 = -122.5 + 255 = 132.5 \text{ meters} $$

The rocket reaches a maximum altitude of $132.5$ m.

---

#### Example 2: Optimizing Sheet Metal for a Tank (Medium)
**Problem:** A chemical plant requires a cylindrical holding tank with an open top to hold exactly $1000 \pi \text{ m}^3$ of fluid. What radius $r$ and height $h$ will minimize the surface area (and thus the cost of sheet metal)?

**Solution:**
1. **Identify the Objective Function (Surface Area of open cylinder):**
   $$ SA = \pi r^2 + 2\pi rh $$
2. **Identify the Constraint (Volume):**
   $$ V = \pi r^2 h = 1000 \pi $$
   Solving the constraint for $h$: 
   $$ h = \frac{1000}{r^2} $$
3. **Substitute $h$ into the Objective Function:**
   $$ SA(r) = \pi r^2 + 2\pi r \left( \frac{1000}{r^2} \right) = \pi r^2 + \frac{2000\pi}{r} $$
4. **Find the derivative with respect to $r$:**
   $$ SA'(r) = 2\pi r - \frac{2000\pi}{r^2} $$
5. **Set the derivative to zero to find the minimum:**
   $$ 2\pi r - \frac{2000\pi}{r^2} = 0 $$
   $$ 2\pi r = \frac{2000\pi}{r^2} $$
   Multiply by $r^2$ and divide by $2\pi$:
   $$ r^3 = 1000 \implies r = 10 \text{ meters} $$
6. **Find the corresponding height $h$:**
   $$ h = \frac{1000}{10^2} = \frac{1000}{100} = 10 \text{ meters} $$

To minimize material costs, both the radius and the height should be 10 meters.

---

#### Example 3: Snell's Law and Fermat's Principle of Least Time (Hard)
**Problem:** A fiber optic cable needs to be routed from a server at $(0, a)$ across a boundary at $y=0$ to a terminal at $(d, -b)$. Light travels at velocity $v_1$ in the first medium and $v_2$ in the second medium. Set up the optimization equation to show that the path of least time satisfies Snell's Law: $\frac{\sin(\theta_1)}{v_1} = \frac{\sin(\theta_2)}{v_2}$.

**Solution:**
Let the cable cross the boundary $y=0$ at a point $(x, 0)$. 
The distance in medium 1 is $D_1 = \sqrt{x^2 + a^2}$.
The distance in medium 2 is $D_2 = \sqrt{(d-x)^2 + b^2}$.

1. **Total Time $T(x)$ is Distance / Velocity:**
   $$ T(x) = \frac{\sqrt{x^2 + a^2}}{v_1} + \frac{\sqrt{(d-x)^2 + b^2}}{v_2} $$
2. **To minimize time, set $T'(x) = 0$:**
   Using the Chain Rule:
   $$ T'(x) = \frac{1}{v_1} \cdot \frac{1}{2}(x^2+a^2)^{-1/2}(2x) + \frac{1}{v_2} \cdot \frac{1}{2}((d-x)^2+b^2)^{-1/2}(2(d-x)(-1)) $$
   $$ T'(x) = \frac{x}{v_1\sqrt{x^2+a^2}} - \frac{d-x}{v_2\sqrt{(d-x)^2+b^2}} = 0 $$
3. **Relate to Trigonometry:**
   Looking at the geometry of the path, $\sin(\theta_1) = \frac{x}{\sqrt{x^2+a^2}}$ and $\sin(\theta_2) = \frac{d-x}{\sqrt{(d-x)^2+b^2}}$.
4. **Substitute the sines back into the equation:**
   $$ \frac{\sin(\theta_1)}{v_1} - \frac{\sin(\theta_2)}{v_2} = 0 \implies \frac{\sin(\theta_1)}{v_1} = \frac{\sin(\theta_2)}{v_2} $$

*We have just derived Snell's Law of Refraction purely by minimizing the time function using Calculus!*


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Physical System",
        "icon": "Box",
        "description": "Identify parameters."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Constraint Eq.",
        "icon": "Link",
        "description": "Reduce variables."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Objective Function",
        "icon": "Target",
        "description": "Function to optimize."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Critical Points",
        "icon": "Crosshair",
        "description": "Set f'(x) = 0 and solve."
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
