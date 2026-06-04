# 7. Integrating Factors for Exact Equations

What happens if an equation looks like it *should* be exact, but it fails the test ($M_y \neq N_x$)? 
Just as we used an integrating factor $\mu(x)$ to force a linear equation into submission, we can sometimes find an integrating factor $\mu$ that forces a non-exact equation to become exact.

If we multiply the entire equation by $\mu(x, y)$:
$$ \mu M dx + \mu N dy = 0 $$
We want the new equation to be exact, meaning:
$$ \frac{\partial}{\partial y}(\mu M) = \frac{\partial}{\partial x}(\mu N) $$

Finding a general $\mu(x, y)$ requires solving partial differential equations, which defeats the purpose. However, if we assume $\mu$ depends *only* on $x$, or *only* on $y$, the math simplifies dramatically into two standard formulas.

### Formula 1: $\mu$ depends only on $x$
If the expression:
$$ \frac{M_y - N_x}{N} $$
depends **only on $x$** (no $y$ terms remain), then there exists an integrating factor:
$$ \mu(x) = e^{\int \left( \frac{M_y - N_x}{N} \right) dx} $$

### Formula 2: $\mu$ depends only on $y$
If the expression:
$$ \frac{N_x - M_y}{M} $$
depends **only on $y$** (no $x$ terms remain), then there exists an integrating factor:
$$ \mu(y) = e^{\int \left( \frac{N_x - M_y}{M} \right) dy} $$

### Worked Example
**Problem:** Solve $(3xy + y^2)dx + (x^2 + xy)dy = 0$.

1. Test exactness:
   $M_y = 3x + 2y$
   $N_x = 2x + y$
   They are not equal. Not exact.
2. Check Formula 1:
   $$ \frac{M_y - N_x}{N} = \frac{(3x + 2y) - (2x + y)}{x^2 + xy} = \frac{x + y}{x(x + y)} = \frac{1}{x} $$
   Since $\frac{1}{x}$ depends only on $x$, we have found our path!
3. Find $\mu(x)$:
   $$ \mu(x) = e^{\int \frac{1}{x} dx} = e^{\ln|x|} = x $$
4. Multiply the original ODE by $x$:
   $$ (3x^2y + xy^2)dx + (x^3 + x^2y)dy = 0 $$
5. Verify new exactness:
   $M_y = 3x^2 + 2xy$
   $N_x = 3x^2 + 2xy$
   It is now exactly exact! You can now solve it using the standard Exact Equation algorithm from the previous section.
