# 4. Conservative Vector Fields and Potential Functions

The Fundamental Theorem of Line Integrals is incredibly powerful, but it comes with a massive catch: It ONLY works if the vector field $\mathbf{F}$ is a Gradient Vector Field ($\mathbf{F} = \nabla f$).

In physics, a vector field that is a gradient is called a **Conservative Vector Field** (because it perfectly conserves mechanical energy over closed loops). The scalar function $f(x,y)$ that spawned it is called the **Potential Function** (like gravitational potential energy).

How do you know if a random vector field you encounter in the wild is Conservative?

### The Cross-Partial Test (2D)
Let a 2D vector field be defined as $\mathbf{F}(x,y) = P(x,y)\mathbf{i} + Q(x,y)\mathbf{j}$.
If this field is truly the gradient of some scalar function $f$, then:
*   $P$ must be the x-derivative: $P = \frac{\partial f}{\partial x}$
*   $Q$ must be the y-derivative: $Q = \frac{\partial f}{\partial y}$

By Clairaut's Theorem, mixed second partial derivatives must be equal ($\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial^2 f}{\partial x \partial y}$).
Therefore, if we take the y-derivative of $P$, and the x-derivative of $Q$, they must be perfectly equal!

**The Test:**
A vector field $\mathbf{F} = \langle P, Q \rangle$ is Conservative *if and only if*:
$$
\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}
$$

If these derivatives are not equal, the field is NOT conservative. Path independence is destroyed, and you are forced to calculate the line integral the long, painful way.

### Finding the Potential Function
If the test passes, how do you actually find the hidden Potential Function $f(x,y)$ so you can use the shortcut?
You perform partial integration!

1.  We know $P = \frac{\partial f}{\partial x}$. So, integrate $P$ with respect to $x$!
    $$
    f(x,y) = \int P(x,y) \, dx + g(y)
    $$
    *(Because we integrated with respect to $x$, the "constant of integration" could be an entire hidden function of $y$, which we call $g(y)$).*
2.  Take the derivative of this new equation with respect to $y$, and set it equal to $Q$ (since $Q = \frac{\partial f}{\partial y}$).
    $$
    \frac{\partial}{\partial y} \left( \int P \, dx + g(y) \right) = Q(x,y)
    $$
3.  Solve this equation algebraically to find $g'(y)$, then integrate it to find $g(y)$.
4.  Plug $g(y)$ back into your formula from Step 1. You have successfully recovered the hidden scalar function $f(x,y)$!

Now, you can calculate the work done by the vector field simply by plugging the end point and start point into $f(x,y)$ and subtracting!
