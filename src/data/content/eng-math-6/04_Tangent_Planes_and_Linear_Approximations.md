# Tangent Planes and Linear Approximations

In single-variable calculus, the derivative gave us the tangent line. In multivariable calculus, the partial derivatives give us the **tangent plane** to a surface at a specific point.

## 1. The Equation of the Tangent Plane

If a surface is given by $z = f(x, y)$, and the function has continuous partial derivatives, then the equation of the tangent plane at the point $P(x_0, y_0, z_0)$ is:

$$ z - z_0 = f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0) $$

This should look very familiar. It is the 3D analogue of the point-slope form for a line: $y - y_0 = m(x - x_0)$. Here, we have two "slopes" ($f_x$ and $f_y$) corresponding to the two independent directions.

**How to find it:**
1.  Evaluate the function at the point to find $z_0 = f(x_0, y_0)$.
2.  Calculate the partial derivatives $f_x$ and $f_y$.
3.  Evaluate both partial derivatives at the specific point $(x_0, y_0)$.
4.  Plug these values into the tangent plane formula.

## 2. Linear Approximation (The Total Differential)

The tangent plane sits flat against the curved surface at the point of tangency. If you stay very close to $(x_0, y_0)$, the z-value of the flat plane is a very good approximation of the z-value of the complicated curved surface.

We define the linear function $L(x,y)$ as the tangent plane equation rearranged:
$$ L(x, y) = f(x_0, y_0) + f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0) $$

So, for points $(x,y)$ near $(x_0, y_0)$, $f(x,y) \approx L(x,y)$.

**The Total Differential ($dz$):**
If we let $dx = x - x_0$ be a small change in $x$, and $dy = y - y_0$ be a small change in $y$, then the estimated change in $z$ (moving along the tangent plane) is called the total differential, $dz$:

$$ dz = f_x(x,y) \, dx + f_y(x,y) \, dy $$

The *actual* change in the height of the surface is $\Delta z = f(x, y) - f(x_0, y_0)$.
As $dx$ and $dy$ become very small, $dz \approx \Delta z$.

## 3. Application: Error Propagation

The total differential is incredibly useful in engineering for **error propagation** (or sensitivity analysis).

If you measure the radius $r$ and height $h$ of a cylindrical tank to calculate its volume $V = \pi r^2 h$, your measuring tools have small errors ($dr$ and $dh$). How do these small measurement errors propagate into the total error of the calculated volume ($dV$)?

1.  Calculate partial derivatives:
    $V_r = 2\pi r h$
    $V_h = \pi r^2$
2.  Write the total differential:
    $dV = (2\pi r h) \, dr + (\pi r^2) \, dh$
3.  Plug in your measured values for $r$ and $h$, and your maximum possible measurement errors for $dr$ and $dh$, to find the maximum possible error in volume $dV$.

## 4. Differentiability in Higher Dimensions

In 1D, if $f'(x)$ exists, the function is differentiable (smooth) at that point.

In 2D, the existence of $f_x$ and $f_y$ is **not** enough to guarantee the surface is smooth! A function can have partial derivatives at the origin but still be discontinuous or jagged there, meaning a true tangent plane doesn't exist.

> **Theorem:** If the partial derivatives $f_x$ and $f_y$ exist near $(a,b)$ and are *continuous* at $(a,b)$, then $f$ is differentiable at $(a,b)$, and the tangent plane exists.
