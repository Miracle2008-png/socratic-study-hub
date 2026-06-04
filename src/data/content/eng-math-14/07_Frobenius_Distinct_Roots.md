# 7. Frobenius: Distinct Roots not Differing by an Integer

When you solve the indicial equation for a regular singular point, you get two roots, $r_1$ and $r_2$.

### Case 1: The Ideal Scenario
If $r_1$ and $r_2$ are distinct real numbers, AND their difference ($r_1 - r_2$) is **NOT an integer** (like 1, 2, 3...), you are in luck.

This is the easiest case in the Method of Frobenius. The theorem guarantees that you can simply plug $r_1$ into your recurrence relation to generate the first infinite series solution, and then plug $r_2$ into the recurrence relation to generate a completely separate, linearly independent infinite series solution.

Let $r_1 > r_2$.
The two solutions are:
$$ y_1(x) = \sum_{n=0}^{\infty} a_n x^{n+r_1} = x^{r_1}(a_0 + a_1 x + a_2 x^2 + \dots) $$
$$ y_2(x) = \sum_{n=0}^{\infty} b_n x^{n+r_2} = x^{r_2}(b_0 + b_1 x + b_2 x^2 + \dots) $$

### Why the "Not an Integer" Rule?
Recall that the recurrence relation calculates the next coefficient by dividing by some algebraic expression involving $n$ and $r$. 
Usually, it looks something like $c_n = \frac{c_{n-1}}{f(r,n)}$.

If you use the smaller root $r_2$, and the difference $r_1 - r_2$ happens to be exactly equal to some integer $N$, then when your series reaches the $N$-th term, the denominator $f(r_2, N)$ will evaluate exactly to zero!

You will end up with $c_N = \frac{c_{N-1}}{0}$, which explodes to infinity. The series collapses. This is why Case 1 only works when the roots do not differ by an integer.

### The General Solution
If the roots do not differ by an integer, the general solution is simply the superposition of the two series:
$$ y(x) = C_1 y_1(x) + C_2 y_2(x) $$

This provides a complete, robust solution to the variable-coefficient ODE near the singular point.
