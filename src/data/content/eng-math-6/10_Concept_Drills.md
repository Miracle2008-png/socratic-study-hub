# Concept Drills: Partial Derivatives and Gradients

Test your conceptual understanding of multivariable functions, gradients, and optimization.

## Conceptual Questions

1.  **True or False:** If $f_x(a,b)$ and $f_y(a,b)$ both exist, then $f(x,y)$ must be continuous at $(a,b)$.
2.  If you are standing on a hill $z = f(x,y)$ and $\nabla f = \langle 0, 0 \rangle$, what kind of terrain are you standing on?
3.  What is the geometric relationship between the gradient vector $\nabla f$ at a point $(x_0, y_0)$ and the level curve $f(x,y) = k$ passing through that point?
4.  If the directional derivative of $f$ in the direction of vector $\vec{u}$ is 5, what is the directional derivative in the exact opposite direction ($-\vec{u}$)?
5.  Why do we need the Discriminant ($D = f_{xx}f_{yy} - f_{xy}^2$) in the Second Derivative Test for two variables, rather than just looking at $f_{xx}$?
6.  In the method of Lagrange Multipliers ($\nabla f = \lambda \nabla g$), what does this equation physically represent geometrically?

## Analytical Problems

1.  **Domain:** Find the domain of $f(x,y) = \ln(y - x^2)$. Sketch it.
2.  **Partial Derivatives:** Find $f_{xy}$ for $f(x,y) = x^2e^y + y\sin(x)$.
3.  **Tangent Plane:** Find the equation of the tangent plane to $z = x^2 + 3y^2$ at the point $(1, 1, 4)$.
4.  **Chain Rule:** If $z = x^2y$, and $x = t^2$, $y = t^3$, find $dz/dt$ using the multivariable chain rule, and then verify by direct substitution.
5.  **Gradient/Directional:** Let $f(x,y) = 3x^2y$. Find the gradient at $(1, 2)$. What is the maximum possible rate of change at this point?
6.  **Critical Points:** Find and classify all critical points of $f(x,y) = x^2 + y^2 - 2x - 6y + 14$.

---

## Solutions

### Conceptual Solutions

1.  **False.** A function can have partial derivatives at a point but still be discontinuous there. The surface could be "torn" except along the specific cross-sections parallel to the axes. Continuity requires the limit to exist from *all* directions.
2.  You are standing on a perfectly flat spot. This is a critical point. It could be a peak (local max), a valley (local min), or a mountain pass (saddle point).
3.  The gradient vector is perfectly **orthogonal (perpendicular)** to the level curve.
4.  **$-5$**. If $D_{\vec{u}} f = \nabla f \cdot \vec{u} = 5$, then $D_{-\vec{u}} f = \nabla f \cdot (-\vec{u}) = -(\nabla f \cdot \vec{u}) = -5$.
5.  Because concavity in multivariable functions is complex. A surface could curve up in the x-direction ($f_{xx} > 0$) but curve down in the y-direction ($f_{yy} < 0$), creating a saddle. Even if both are positive, diagonal directions might curve down. The Discriminant checks the cross-partials to ensure the concavity agrees in *all* directions.
6.  It represents the point where the contour lines of the function $f$ are perfectly tangent to the constraint curve $g$. Since they are tangent, their normal vectors (the gradients) must be parallel.

### Analytical Solutions

1.  The argument of the logarithm must be strictly positive: $y - x^2 > 0 \implies y > x^2$. The domain is the region *strictly above* the parabola $y = x^2$ (not including the parabola itself).
2.  First find $f_x$: $f_x = 2xe^y + y\cos(x)$.
    Now differentiate $f_x$ with respect to $y$: $f_{xy} = 2xe^y + \cos(x)$.
    (Verify with Clairaut's theorem: $f_y = x^2e^y + \sin(x) \implies f_{yx} = 2xe^y + \cos(x)$. They match).
3.  $f_x = 2x \implies f_x(1,1) = 2$.
    $f_y = 6y \implies f_y(1,1) = 6$.
    Tangent plane: $z - 4 = 2(x - 1) + 6(y - 1)$.
4.  **Chain rule:** $\frac{dz}{dt} = \frac{\partial z}{\partial x}\frac{dx}{dt} + \frac{\partial z}{\partial y}\frac{dy}{dt} = (2xy)(2t) + (x^2)(3t^2)$.
    Substitute $x$ and $y$: $(2(t^2)(t^3))(2t) + ((t^2)^2)(3t^2) = 4t^6 + 3t^6 = 7t^6$.
    **Direct Substitution:** $z = (t^2)^2(t^3) = t^4 \cdot t^3 = t^7$. Derivative $dz/dt = 7t^6$. They match.
5.  $\nabla f = \langle 6xy, 3x^2 \rangle$. At $(1,2)$, $\nabla f(1,2) = \langle 12, 3 \rangle$.
    The maximum rate of change is the magnitude of the gradient: $|\nabla f| = \sqrt{12^2 + 3^2} = \sqrt{144 + 9} = \sqrt{153}$.
6.  $f_x = 2x - 2 = 0 \implies x = 1$.
    $f_y = 2y - 6 = 0 \implies y = 3$.
    Critical point at $(1, 3)$.
    Second derivatives: $f_{xx} = 2, f_{yy} = 2, f_{xy} = 0$.
    Discriminant $D = (2)(2) - (0)^2 = 4$.
    Since $D > 0$ and $f_{xx} > 0$, the point $(1,3)$ is a **Local Minimum**.
