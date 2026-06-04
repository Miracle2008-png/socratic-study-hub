# 2. Double Integrals over Rectangular Regions

To evaluate a double integral, we convert it into an **Iterated Integral**—two standard, single-variable integrals nested inside one another.

We begin with the simplest 2D domain: a rectangular region defined by constant boundaries. Let $R = [a, b] \times [c, d]$, which means:
*   $a \le x \le b$
*   $c \le y \le d$

### Fubini's Theorem
Fubini's Theorem states that if $f(x, y)$ is continuous on a rectangle $R$, then the double integral can be evaluated as an iterated integral in *either* order:

$$ \iint_R f(x,y) dA = \int_{c}^{d} \left[ \int_{a}^{b} f(x,y) dx \right] dy = \int_{a}^{b} \left[ \int_{c}^{d} f(x,y) dy \right] dx $$

**Crucial Note on Order of Integration:** 
*   If $dx$ is on the inside, you must integrate with respect to $x$ first (treating $y$ as a constant), and evaluate using the $x$-limits ($a$ to $b$).
*   If $dy$ is on the inside, you must integrate with respect to $y$ first (treating $x$ as a constant), and evaluate using the $y$-limits ($c$ to $d$).

### Worked Example: Integrating $dx$ first
**Problem:** Evaluate $\iint_R (2x^2 y + 3y^2) dA$ where $R$ is the rectangle $1 \le x \le 2$ and $0 \le y \le 3$.

**Solution:**
Set up the iterated integral. Let's choose the order $dx\,dy$:
$$ I = \int_{0}^{3} \int_{1}^{2} (2x^2 y + 3y^2) dx \, dy $$

**Step 1: The Inner Integral (with respect to $x$)**
Treat $y$ as a constant.
$$ \int_{1}^{2} (2x^2 y + 3y^2) dx = \left[ \frac{2}{3}x^3 y + 3xy^2 \right]_{x=1}^{x=2} $$
Plug in the upper limit $x=2$:
$$ \left( \frac{2}{3}(8)y + 3(2)y^2 \right) = \frac{16}{3}y + 6y^2 $$
Subtract the lower limit $x=1$:
$$ \left( \frac{2}{3}(1)y + 3(1)y^2 \right) = \frac{2}{3}y + 3y^2 $$
Result of the inner integral:
$$ \left( \frac{16}{3}y + 6y^2 \right) - \left( \frac{2}{3}y + 3y^2 \right) = \frac{14}{3}y + 3y^2 $$

**Step 2: The Outer Integral (with respect to $y$)**
Take the result from Step 1 and integrate it with respect to $y$:
$$ I = \int_{0}^{3} \left( \frac{14}{3}y + 3y^2 \right) dy $$
$$ I = \left[ \frac{7}{3}y^2 + y^3 \right]_{0}^{3} $$
Plug in $y=3$:
$$ I = \frac{7}{3}(9) + (27) = 21 + 27 = 48 $$
Since the lower limit is $0$, the final answer is **48**.

*(Note: Had we chosen the order $dy\,dx$, we would have performed the $y$ integration first from 0 to 3, then the $x$ integration from 1 to 2, and achieved exactly 48).*
