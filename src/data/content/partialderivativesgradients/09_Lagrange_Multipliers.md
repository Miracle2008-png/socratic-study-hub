# Lagrange Multipliers

In the previous section, finding the absolute max/min on the boundary of a region was sometimes tedious, requiring us to explicitly substitute the boundary equation into the main function. What if the boundary is a complex curve where isolating $x$ or $y$ is impossible?

**Lagrange Multipliers** is an elegant, powerful analytical method for finding the local maxima and minima of a function $f(x,y)$ subject to a strict equality constraint $g(x,y) = k$.

*Example Problem:* Find the maximum volume of a cylindrical silo $V(r,h) = \pi r^2 h$ given that you only have a fixed budget of sheet metal to build the surface area $A(r,h) = 2\pi r^2 + 2\pi rh = 100$.

## 1. The Geometric Concept

Imagine the contour map (topographic map) of the objective function you want to maximize, $f(x,y)$.
Now, draw the constraint curve $g(x,y) = k$ on top of that contour map.

You are forced to walk *only* along the constraint curve $g(x,y)=k$. You want to find the specific point on this curve that touches the highest possible contour line of $f(x,y)$.

As you walk along the constraint curve, you will cross various contour lines of $f$. When do you reach the maximum? The maximum (or minimum) occurs exactly at the point where the constraint curve $g=k$ just barely "kisses" or is **tangent** to a contour line of $f$. If it were intersecting it transversely, you could keep walking along $g$ to reach a higher or lower contour of $f$.

If two curves are tangent at a point, their normal vectors at that point must point in the exact same (or exactly opposite) direction.
*   The normal vector to the contour lines of $f$ is its gradient $\nabla f$.
*   The normal vector to the constraint curve $g=k$ is its gradient $\nabla g$.

Therefore, at the constrained optimal point, $\nabla f$ must be parallel to $\nabla g$.
Two vectors are parallel if one is simply a scalar multiple of the other. We call this unknown scalar $\lambda$ (lambda), the **Lagrange Multiplier**.

$$ \nabla f = \lambda \nabla g $$

## 2. The Method of Lagrange Multipliers

To maximize or minimize an objective function $f(x,y)$ subject to the constraint $g(x,y) = k$:

1.  Write the gradient equation: $\nabla f = \lambda \nabla g$.
2.  Expand this single vector equation into a system of scalar equations by equating the components:
    *   $f_x = \lambda g_x$
    *   $f_y = \lambda g_y$
3.  Include the original constraint as the final necessary equation:
    *   $g(x,y) = k$
4.  Solve this nonlinear system of 3 equations for the 3 unknowns ($x, y, \lambda$). *(Tip: Usually, solving for $\lambda$ in the first two equations and setting them equal to each other is a fast way to find a relationship between $x$ and $y$).*
5.  Plug all the resulting $(x,y)$ coordinate pairs into the original objective function $f(x,y)$. The largest result is the constrained maximum; the smallest is the constrained minimum.

*(Note: For 3 variables $f(x,y,z)$ subject to $g(x,y,z)=k$, the system expands naturally to 4 equations: $f_x=\lambda g_x$, $f_y=\lambda g_y$, $f_z=\lambda g_z$, and $g=k$.)*

## 3. Multiple Constraints

If an engineering problem requires you to optimize a function subject to *two* simultaneous constraints (e.g., $g(x,y,z) = k$ and $h(x,y,z) = c$), the geometric logic extends. The optimal point occurs where the gradient of $f$ lies exactly in the plane spanned by the normal vectors of the two constraint surfaces.

We introduce two distinct Lagrange multipliers, $\lambda$ and $\mu$:

$$ \nabla f = \lambda \nabla g + \mu \nabla h $$

This results in a system of 5 equations with 5 variables ($x, y, z, \lambda, \mu$). While tedious to solve by hand, it is trivial to program into a computational solver.

## 4. Engineering & Real-World Applications

Lagrange multipliers are a foundational tool across quantitative disciplines:
*   **Economics (Utility Maximization):** Consumers want to maximize their "utility" function $U(x,y)$ based on purchasing goods $x$ and $y$, but they are strictly constrained by their budget $P_x x + P_y y = \text{Budget}$. The multiplier $\lambda$ has a physical meaning here: the marginal utility of money.
*   **Mechanical & Aerospace Design:** Maximizing the cargo volume of an aircraft fuselage subject to strict constraints on maximum takeoff weight and aerodynamic drag area.
*   **Thermodynamics & Information Theory:** Deriving statistical mechanics distributions (like the Boltzmann distribution) involves maximizing entropy subject to the constraints of fixed total energy and fixed number of particles.

## 5. Worked Examples

### Example 1: Basic 2D Constraint (Easy)
Find the maximum and minimum values of $f(x,y) = xy$ subject to the constraint $x^2 + y^2 = 8$.

**Step 1:** Identify $f(x,y) = xy$ and $g(x,y) = x^2 + y^2$. The constraint is $g(x,y) = 8$.
**Step 2:** Set up the Lagrange equations $\nabla f = \lambda \nabla g$.
1) $y = \lambda(2x)$
2) $x = \lambda(2y)$
3) $x^2 + y^2 = 8$

**Step 3:** Solve the system.
From (1), $\lambda = \frac{y}{2x}$ (assuming $x \neq 0$).
From (2), $\lambda = \frac{x}{2y}$ (assuming $y \neq 0$).
Equating $\lambda$: $\frac{y}{2x} = \frac{x}{2y} \implies 2y^2 = 2x^2 \implies y^2 = x^2 \implies y = \pm x$.

**Step 4:** Substitute into the constraint (3).
Case $y=x$: $x^2 + x^2 = 8 \implies 2x^2 = 8 \implies x^2 = 4 \implies x = \pm 2$. Points: $(2,2)$ and $(-2,-2)$.
Case $y=-x$: $x^2 + (-x)^2 = 8 \implies 2x^2 = 8 \implies x = \pm 2$. Points: $(2,-2)$ and $(-2,2)$.

**Step 5:** Evaluate $f(x,y) = xy$ at these points.
$f(2,2) = 4$
$f(-2,-2) = 4$
$f(2,-2) = -4$
$f(-2,2) = -4$
**Answer:** The maximum is $4$ and the minimum is $-4$.

### Example 2: 3D Optimization - The Box Problem (Medium)
Find the dimensions of a rectangular box with maximum volume if the total surface area is $64 \text{ cm}^2$.

**Step 1:** Objective function: Maximize Volume $V(x,y,z) = xyz$.
Constraint: Surface Area $g(x,y,z) = 2xy + 2xz + 2yz = 64$.
**Step 2:** Setup equations $\nabla V = \lambda \nabla g$.
1) $yz = \lambda(2y + 2z)$
2) $xz = \lambda(2x + 2z)$
3) $xy = \lambda(2x + 2y)$
4) $2xy + 2xz + 2yz = 64$

**Step 3:** Solve. Multiply eq(1) by $x$, eq(2) by $y$, and eq(3) by $z$:
$xyz = \lambda(2xy + 2xz)$
$xyz = \lambda(2xy + 2yz)$
$xyz = \lambda(2xz + 2yz)$
Since all equal $xyz$, we equate the right sides:
$\lambda(2xy + 2xz) = \lambda(2xy + 2yz)$
Assuming $\lambda \neq 0$ (otherwise $V=0$), we get $2xz = 2yz \implies x = y$.
Similarly, $\lambda(2xy + 2yz) = \lambda(2xz + 2yz) \implies 2xy = 2xz \implies y = z$.
Therefore, $x = y = z$ (the box is a cube).

**Step 4:** Substitute $x=y=z$ into the constraint (4).
$2x(x) + 2x(x) + 2x(x) = 64 \implies 6x^2 = 64 \implies x^2 = \frac{64}{6} = \frac{32}{3}$.
$x = \sqrt{\frac{32}{3}} = \frac{4\sqrt{2}}{\sqrt{3}}$.
**Answer:** The dimensions for maximum volume are $x = y = z = \frac{4\sqrt{2}}{\sqrt{3}}$ cm.

### Example 3: Two Constraints (Hard)
Find the maximum value of $f(x,y,z) = x + y + z$ subject to two constraints: $x^2 + y^2 = 2$ and $x + z = 1$.

**Step 1:** $f(x,y,z) = x+y+z$. Constraints: $g(x,y,z) = x^2+y^2=2$, $h(x,y,z) = x+z=1$.
**Step 2:** Setup equations $\nabla f = \lambda \nabla g + \mu \nabla h$.
1) $1 = \lambda(2x) + \mu(1)$  (from $\partial/\partial x$)
2) $1 = \lambda(2y) + \mu(0) \implies 1 = 2\lambda y$
3) $1 = \lambda(0) + \mu(1) \implies \mu = 1$
4) $x^2 + y^2 = 2$
5) $x + z = 1$

**Step 3:** Solve.
From (3), $\mu = 1$.
Substitute $\mu=1$ into (1): $1 = 2\lambda x + 1 \implies 2\lambda x = 0$.
Since $\lambda$ cannot be 0 (from eq 2, $1 = 2\lambda y$), we must have $x = 0$.
From (4), if $x=0$, $0^2 + y^2 = 2 \implies y = \pm \sqrt{2}$.
From (5), if $x=0$, $0 + z = 1 \implies z = 1$.
We have two points: $(0, \sqrt{2}, 1)$ and $(0, -\sqrt{2}, 1)$.

**Step 4:** Evaluate $f(x,y,z) = x+y+z$.
$f(0, \sqrt{2}, 1) = 0 + \sqrt{2} + 1 = 1 + \sqrt{2}$.
$f(0, -\sqrt{2}, 1) = 0 - \sqrt{2} + 1 = 1 - \sqrt{2}$.
**Answer:** The maximum value is $1 + \sqrt{2}$.

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Constrained Optimization",
        "icon": "Filter",
        "description": "Maximizing f(x,y) subject to g(x,y)=k."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Geometric Tangency",
        "icon": "GitCommit",
        "description": "Contour of f is tangent to constraint g."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Parallel Gradients",
        "icon": "Move",
        "description": "∇f = λ∇g"
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "System of Equations",
        "icon": "Calculator",
        "description": "Solve for x, y, and λ simultaneously."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Multiple Constraints",
        "icon": "Layers",
        "description": "∇f = λ∇g + μ∇h"
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
    }
  ]
}
```
