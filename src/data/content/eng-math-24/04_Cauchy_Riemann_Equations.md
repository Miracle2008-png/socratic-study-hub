# 4. The Cauchy-Riemann Equations

Trying to prove a function is differentiable by checking all infinite limits is exhausting. 
Luckily, in 1814, Augustin-Louis Cauchy and Bernhard Riemann discovered the master cheat code for complex derivatives.

Remember that every complex function $f(z)$ is actually two multivariable real functions trapped together:
$$
f(z) = u(x,y) + iv(x,y)
$$

They realized that for the infinite directional slopes to perfectly align, the partial derivatives of the real part ($u$) and the imaginary part ($v$) must be locked into a highly specific cross-coupled relationship.

### The Equations
A complex function $f(z) = u + iv$ is differentiable at a point $(x,y)$ **if and only if** its partial derivatives exist and satisfy the **Cauchy-Riemann (CR) Equations**:

$$
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}
$$
$$
\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
$$

These two equations are the absolute bedrock of complex analysis. If a function fails these equations, it is mathematically dead. It has no derivative.

### Testing $f(z) = z^2$
Let's test the squaring function we built on page 1.
We found that $u(x,y) = x^2 - y^2$ and $v(x,y) = 2xy$.

Let's calculate the four partial derivatives:
*   $\frac{\partial u}{\partial x} = 2x$
*   $\frac{\partial u}{\partial y} = -2y$
*   $\frac{\partial v}{\partial x} = 2y$
*   $\frac{\partial v}{\partial y} = 2x$

Now, let's check the two CR conditions!
**Condition 1:** Does $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$? 
Yes! $2x = 2x$.
**Condition 2:** Does $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$?
Yes! $-2y = -(2y)$.

Because $f(z) = z^2$ perfectly passes both equations at every single point $(x,y)$ in the universe, it is fully differentiable everywhere! 

### Calculating the Derivative
If the CR equations are satisfied, you don't need to do any limit definitions to find the actual derivative $f'(z)$. 
You can simply use the standard partial derivatives you just calculated! 
Because the slopes align in all directions, you can just construct the derivative using the horizontal ($x$) slopes:

$$
f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}
$$

For $f(z) = z^2$, we plug in our partials:
$$
f'(z) = 2x + i(2y) = 2(x + iy) = \mathbf{2z}
$$
Incredible! The power rule from Calculus 1 ($d/dz [z^2] = 2z$) perfectly survives in the 2D complex plane!
