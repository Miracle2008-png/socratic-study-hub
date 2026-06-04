# 7. Finding Harmonic Conjugates

If you are given a real harmonic function $u(x,y)$, can you work backward to reconstruct the entire hidden Analytic complex function $f(z)$?
Yes! Because $u$ and $v$ are locked together by the Cauchy-Riemann equations, if you know $u$, you can mathematically hunt down its partner $v$. 

The missing partner function $v(x,y)$ is called the **Harmonic Conjugate** of $u(x,y)$.

### The Reconstructive Surgery (Worked Example)
Suppose a thermal engineer determines the temperature of a metal plate is modeled by the harmonic function:
$$
u(x,y) = x^2 - y^2 - 2y
$$
We need to find the harmonic conjugate $v(x,y)$ to build the full analytic function $f(z) = u + iv$.

**Step 1: Calculate the Partial Derivatives of $u$**
$$
\frac{\partial u}{\partial x} = 2x
$$
$$
\frac{\partial u}{\partial y} = -2y - 2
$$

**Step 2: Use the First Cauchy-Riemann Equation**
We know that $\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x}$.
Therefore:
$$
\frac{\partial v}{\partial y} = 2x
$$
To find $v$, we integrate this equation with respect to $y$!
$$
v(x,y) = \int 2x \, dy = 2xy + h(x)
$$
*(Because we integrated with respect to $y$, the constant of integration is an unknown function of $x$, $h(x)$).*

**Step 3: Use the Second Cauchy-Riemann Equation**
We know that $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$.
Take the x-derivative of the $v(x,y)$ we just found in Step 2:
$$
\frac{\partial v}{\partial x} = 2y + h'(x)
$$
Set this perfectly equal to the negative of $\frac{\partial u}{\partial y}$ from Step 1:
$$
2y + h'(x) = -(-2y - 2)
$$
$$
2y + h'(x) = 2y + 2
$$
The $2y$ terms perfectly cancel out!
$$
h'(x) = 2
$$

**Step 4: Integrate to find $h(x)$**
$$
h(x) = \int 2 \, dx = 2x + C
$$

**Step 5: Assemble the Final Answer!**
Plug $h(x)$ back into the equation from Step 2.
$$
v(x,y) = 2xy + 2x + C
$$
We have successfully found the Harmonic Conjugate! The full, unbreakable analytic function is:
$$
f(z) = (x^2 - y^2 - 2y) + i(2xy + 2x + C)
$$
