# Partial Derivatives

If $z = f(x, y)$ represents a 3D surface, how do we find its slope? A 3D surface doesn't have a single "slope." It tilts differently depending on which direction you walk.

The **partial derivatives** tell you the slope of the surface if you walk purely in the x-direction, or purely in the y-direction.

## 1. Definition and Notation

To find the partial derivative with respect to $x$ (denoted $f_x$ or $\frac{\partial f}{\partial x}$), we treat $y$ as a constant and differentiate $f$ using standard rules.
Geometrically, this is the slope of the tangent line to the surface if we slice the surface with a plane parallel to the xz-plane.

To find the partial derivative with respect to $y$ (denoted $f_y$ or $\frac{\partial f}{\partial y}$), we treat $x$ as a constant and differentiate $f$ with respect to $y$.

**Notation:**
*   With respect to x: $f_x(x,y) = \frac{\partial f}{\partial x} = \frac{\partial z}{\partial x}$
*   With respect to y: $f_y(x,y) = \frac{\partial f}{\partial y} = \frac{\partial z}{\partial y}$

*(Note the use of the curly $\partial$, called "del" or "partial", distinguishing it from the straight $d$ used for ordinary derivatives).*

## 2. Calculating Partial Derivatives

*Example:* Let $f(x, y) = x^3 y^2 + 4x - 5y^3 + \sin(xy)$.

**Find $f_x$:** Treat all $y$'s as if they were constants (like 5 or $\pi$).
*   The derivative of $x^3 y^2$ with respect to $x$ is $3x^2 \cdot y^2$. (The $y^2$ just acts as a constant multiplier).
*   The derivative of $4x$ is 4.
*   The derivative of $-5y^3$ with respect to $x$ is 0. (It's a constant).
*   The derivative of $\sin(xy)$ with respect to $x$ is $\cos(xy) \cdot y$. (Chain rule, $y$ is the constant multiplier inside).
$$ f_x(x,y) = 3x^2y^2 + 4 + y\cos(xy) $$

**Find $f_y$:** Treat all $x$'s as constants.
*   The derivative of $x^3 y^2$ with respect to $y$ is $x^3 \cdot 2y$.
*   The derivative of $4x$ is 0.
*   The derivative of $-5y^3$ is $-15y^2$.
*   The derivative of $\sin(xy)$ with respect to $y$ is $\cos(xy) \cdot x$.
$$ f_y(x,y) = 2x^3y - 15y^2 + x\cos(xy) $$

## 3. Higher-Order Partial Derivatives

Just as you can take the second derivative in 1D, you can take second partial derivatives. Since $f_x$ is itself a function of $x$ and $y$, you can differentiate it again with respect to $x$, or with respect to $y$.

There are four second-order partial derivatives for a function of two variables:
1.  **$f_{xx}$** or $\frac{\partial^2 f}{\partial x^2}$: Differentiate with respect to x, then x again.
2.  **$f_{yy}$** or $\frac{\partial^2 f}{\partial y^2}$: Differentiate with respect to y, then y again.
3.  **$f_{xy}$** or $\frac{\partial^2 f}{\partial x \partial y}$: Differentiate with respect to x, then y.
4.  **$f_{yx}$** or $\frac{\partial^2 f}{\partial y \partial x}$: Differentiate with respect to y, then x.

## 4. Clairaut's Theorem (Symmetry of Mixed Partials)

If you calculate $f_{xy}$ and $f_{yx}$ for most well-behaved functions, you will notice something magical: they are identical.

**Clairaut's Theorem:** If the functions $f_{xy}$ and $f_{yx}$ are both continuous on a disk containing $(a,b)$, then:
$$ f_{xy}(a,b) = f_{yx}(a,b) $$

The order of differentiation does not matter for mixed partials! This saves a tremendous amount of calculation time in engineering problems, and it is the fundamental reason why conservative vector fields exist in physics.

## 5. Partial Differential Equations (PDEs)

Equations that relate the partial derivatives of an unknown function are called PDEs. They govern almost all physical phenomena in multiple dimensions.

*   **Laplace's Equation:** $f_{xx} + f_{yy} = 0$. (Governs steady-state heat flow, electrostatics, irrotational fluid flow). Functions that satisfy this are called *harmonic functions*.
*   **The Wave Equation:** $u_{tt} = c^2 (u_{xx} + u_{yy})$. (Governs the vibration of a drumhead, electromagnetic waves).
*   **The Heat Equation:** $u_t = \alpha (u_{xx} + u_{yy})$. (Governs how temperature spreads over time).
