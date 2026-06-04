# 6. Exact Equations

Some differential equations are neither separable nor linear, but they are born from a specific multivariable calculus concept: the total differential.

If we have a 3D surface $F(x, y) = C$ (where $C$ is a constant), its total differential is given by:
$$ dF = \frac{\partial F}{\partial x} dx + \frac{\partial F}{\partial y} dy = 0 $$

If a differential equation is presented in the form:
$$ M(x, y) dx + N(x, y) dy = 0 $$
and there exists some hidden function $F(x, y)$ such that $\frac{\partial F}{\partial x} = M$ and $\frac{\partial F}{\partial y} = N$, then the equation is called **Exact**.

### The Test for Exactness
How do we know if that hidden function $F$ exists? We use Clairaut's Theorem, which states that mixed partial derivatives must be equal ($\frac{\partial^2 F}{\partial x \partial y} = \frac{\partial^2 F}{\partial y \partial x}$).

Therefore, the equation $M dx + N dy = 0$ is exact **if and only if**:
$$ \frac{\partial M}{\partial y} = \frac{\partial N}{\partial x} $$

### The Solution Algorithm
If the equation is exact, our goal is to reconstruct the hidden function $F(x, y) = C$.

1. Verify exactness: Check if $M_y = N_x$.
2. Integrate $M(x, y)$ with respect to $x$. Because we are reversing a partial derivative, our "constant of integration" is not a number $C$, but an unknown function of $y$, say $g(y)$.
   $$ F(x, y) = \int M \, dx + g(y) $$
3. Differentiate your new $F(x, y)$ with respect to $y$, and set it equal to $N(x, y)$.
4. Solve for $g'(y)$, and integrate it to find $g(y)$.
5. Write the final solution implicitly as $F(x, y) = C$.

### Worked Example
**Problem:** Solve $(2xy + 3)dx + (x^2 - 1)dy = 0$.

**1. Test for exactness:**
$M = 2xy + 3 \implies \frac{\partial M}{\partial y} = 2x$
$N = x^2 - 1 \implies \frac{\partial N}{\partial x} = 2x$
Since $2x = 2x$, it is exact!

**2. Integrate $M$ wrt $x$:**
$$ F(x, y) = \int (2xy + 3) dx = x^2y + 3x + g(y) $$

**3. Differentiate wrt $y$ and set equal to $N$:**
$$ \frac{\partial F}{\partial y} = x^2 + 0 + g'(y) $$
Set this equal to $N$:
$$ x^2 + g'(y) = x^2 - 1 $$

**4. Solve for $g(y)$:**
$$ g'(y) = -1 $$
Integrate: $g(y) = -y$.

**5. Final Solution:**
Substitute $g(y)$ back into our $F(x, y)$ equation and set it equal to $C$:
$$ x^2y + 3x - y = C $$
