# 4. Distinct and Repeated Real Roots

When we solve the characteristic equation $ar^2 + br + c = 0$, the quadratic formula yields two roots:
$$ r = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

The behavior of the solution depends entirely on the discriminant ($b^2 - 4ac$).

---

### Case 1: Distinct Real Roots ($b^2 - 4ac > 0$)
If the discriminant is positive, the quadratic formula gives two different real numbers, $r_1$ and $r_2$.
This means our two fundamental solutions are simply:
$$ y_1 = e^{r_1 t} \quad \text{and} \quad y_2 = e^{r_2 t} $$
Since $r_1 \neq r_2$, these functions are linearly independent.
By the Superposition Principle, the general solution is:
$$ y(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t} $$

**Worked Example:** Solve $y'' - 5y' + 6y = 0$.
1.  Write characteristic equation: $r^2 - 5r + 6 = 0$.
2.  Factor: $(r-2)(r-3) = 0$.
3.  Roots are $r_1 = 2, r_2 = 3$.
4.  General Solution: $y(t) = C_1 e^{2t} + C_2 e^{3t}$.

---

### Case 2: Repeated Real Root ($b^2 - 4ac = 0$)
If the discriminant is exactly zero, the quadratic formula gives only a single real root: $r = -b/2a$.
We have one solution: $y_1 = e^{rt}$.
But a second-order ODE *requires* two linearly independent solutions to form the general solution! If we just use $y_2 = e^{rt}$ again, it isn't linearly independent.

To find the missing second solution, mathematicians use a technique called **Reduction of Order**. We won't derive it here, but the result is beautifully simple: just multiply the first solution by $t$.
$$ y_2 = t e^{rt} $$
*(You can verify using the Wronskian that $e^{rt}$ and $te^{rt}$ are indeed linearly independent).*

By the Superposition Principle, the general solution for a repeated root $r$ is:
$$ y(t) = C_1 e^{rt} + C_2 t e^{rt} $$

**Worked Example:** Solve $y'' - 6y' + 9y = 0$.
1.  Write characteristic equation: $r^2 - 6r + 9 = 0$.
2.  Factor: $(r-3)^2 = 0$.
3.  Root is $r = 3$ (repeated).
4.  General Solution: $y(t) = C_1 e^{3t} + C_2 t e^{3t}$.
