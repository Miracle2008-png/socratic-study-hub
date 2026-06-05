# Lagrange Multipliers

In the previous section, finding the absolute max/min on the boundary of a region was sometimes tedious, requiring us to substitute the boundary equation into the main function.

**Lagrange Multipliers** is an elegant, powerful method for finding the maximum or minimum of a function $f(x,y)$ subject to a strict constraint $g(x,y) = k$.

*Example Problem:* Find the maximum volume of a rectangular box $V(x,y,z) = xyz$ given that you only have 100 square meters of cardboard $A(x,y,z) = 2xy + 2xz + 2yz = 100$.

## 1. The Geometric Concept

Imagine the contour map of the function you want to maximize, $f(x,y)$.
Now, draw the constraint curve $g(x,y) = k$ on top of that contour map.

You are forced to walk only along the constraint curve $g(x,y)=k$. You want to find the point on this curve that touches the highest possible contour line of $f(x,y)$.

As you walk along the constraint curve, you will cross various contour lines of $f$. When do you reach the maximum? The maximum occurs exactly at the point where the constraint curve is **tangent** to a contour line of $f$.

If two curves are tangent, their normal vectors must point in the same (or exactly opposite) direction.
*   The normal vector to the contour lines of $f$ is the gradient $\nabla f$.
*   The normal vector to the constraint curve $g=k$ is the gradient $\nabla g$.

Therefore, at the maximum or minimum point, $\nabla f$ must be parallel to $\nabla g$.
Two vectors are parallel if one is a scalar multiple of the other. We call this scalar $\lambda$ (lambda).

$$ \nabla f = \lambda \nabla g $$

## 2. The Method of Lagrange Multipliers

To maximize or minimize $f(x,y)$ subject to the constraint $g(x,y) = k$:

1.  Write the gradient equation: $\nabla f = \lambda \nabla g$.
2.  Expand this into a system of equations by equating the components:
    *   $f_x = \lambda g_x$
    *   $f_y = \lambda g_y$
3.  Include the original constraint as the final equation:
    *   $g(x,y) = k$
4.  Solve this system of 3 equations for the 3 unknowns ($x, y, \lambda$). (Usually, finding $\lambda$ is just a stepping stone to finding $x$ and $y$).
5.  Plug all the resulting $(x,y)$ points into the original function $f(x,y)$. The largest result is the maximum; the smallest is the minimum.

*(Note: For 3 variables $f(x,y,z)$, the system expands to 4 equations: $f_x=\lambda g_x$, $f_y=\lambda g_y$, $f_z=\lambda g_z$, and $g=k$.)*

## 3. Multiple Constraints

If you have to optimize a function subject to *two* constraints simultaneously ($g(x,y,z) = k$ and $h(x,y,z) = c$), the logic extends. The gradient of $f$ must lie in the plane formed by the gradients of the two constraints.

We introduce two Lagrange multipliers, $\lambda$ and $\mu$:

$$ \nabla f = \lambda \nabla g + \mu \nabla h $$

This results in a system of 5 equations with 5 variables ($x, y, z, \lambda, \mu$). While difficult to solve by hand, it is incredibly easy to program into a computer, making Lagrange multipliers a foundational tool in economics, mechanical design, and control theory.
