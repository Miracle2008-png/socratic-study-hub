# 11. Change of Variables (The Jacobian)

We learned that when switching from Cartesian coordinates ($dx\,dy$) to Polar Coordinates, we must inject an extra "$r$" into the differential ($r\,dr\,d\theta$) to fix the distortion of the grid.
When switching to Spherical, we injected "$ \rho^2 \sin\phi $".

But what if you invent a completely random, custom coordinate system (like a grid made of diagonal diamonds) to make a specific integral easier? How do you calculate the required "distortion multiplier" for a custom grid?
You use **The Jacobian Determinant**.

### The Theory of the Jacobian
If you perform a transformation from an old coordinate system $(x,y)$ to a new custom coordinate system $(u,v)$, the geometry is distorted. Some areas stretch, some areas shrink. 

The **Jacobian** measures the exact mathematical scaling factor of that physical stretching at any given point.

### Calculating the Jacobian (2D)
The Jacobian, denoted $J(u,v)$ or $\frac{\partial(x,y)}{\partial(u,v)}$, is simply the determinant of a $2 \times 2$ matrix filled with partial derivatives!

$$
J(u,v) = \det 
\begin{bmatrix}
\frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\
\frac{\partial y}{\partial u} & \frac{\partial y}{\partial v}
\end{bmatrix}
$$
$$
= \left( \frac{\partial x}{\partial u} \right)\left( \frac{\partial y}{\partial v} \right) - \left( \frac{\partial x}{\partial v} \right)\left( \frac{\partial y}{\partial u} \right)
$$

### The Universal Change of Variables Formula
Once you calculate the Jacobian determinant, you take its **absolute value** (because Area scaling must be positive). You then multiply this absolute value into your new differential!

$$
\iint_R f(x,y) \, dx \, dy = \iint_S f(x(u,v), y(u,v)) \, |J(u,v)| \, du \, dv
$$

### Proving the Polar 'r'
Let's use the Jacobian to legally prove where the extra '$r$' in Polar coordinates came from!
The transformation is $x = r\cos\theta$ and $y = r\sin\theta$.
We treat $r$ as our first variable ($u$) and $\theta$ as our second variable ($v$).

$$
J(r,\theta) = \det 
\begin{bmatrix}
\frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} \\
\frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta}
\end{bmatrix}
$$

Take the partial derivatives:
*   $\frac{\partial x}{\partial r} = \cos\theta$
*   $\frac{\partial x}{\partial \theta} = -r\sin\theta$
*   $\frac{\partial y}{\partial r} = \sin\theta$
*   $\frac{\partial y}{\partial \theta} = r\cos\theta$

Plug them into the matrix and find the determinant $(ad - bc)$:
$$
J(r,\theta) = (\cos\theta)(r\cos\theta) - (-r\sin\theta)(\sin\theta)
$$
$$
J(r,\theta) = r\cos^2\theta + r\sin^2\theta
$$
$$
J(r,\theta) = r(\cos^2\theta + \sin^2\theta)
$$
Because $\cos^2\theta + \sin^2\theta = 1$, the answer collapses!
$$
J(r,\theta) = \mathbf{r}
$$

The math perfectly confirms it! The geometric stretching factor of the Polar grid is exactly $r$. This is the origin of the rule $dA = r \, dr \, d\theta$.
