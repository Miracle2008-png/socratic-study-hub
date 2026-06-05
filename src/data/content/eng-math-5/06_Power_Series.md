# Power Series

Until now, our series have been sums of constants ($\sum \frac{1}{n^2}$). A **Power Series** is a series where the terms involve a variable $x$. It is essentially an infinite polynomial.

## 1. Definition

A power series centered at $x = a$ has the form:
$$ \sum_{n=0}^{\infty} c_n (x - a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \dots $$
*   $x$ is the variable.
*   The $c_n$'s are the coefficients of the series.
*   $a$ is the center of the series.

If $a = 0$, the series is centered at the origin:
$$ \sum_{n=0}^{\infty} c_n x^n = c_0 + c_1 x + c_2 x^2 + c_3 x^3 + \dots $$

For any specific value you plug in for $x$, the power series becomes a standard series of constants, which might converge or diverge.

## 2. Radius and Interval of Convergence

Because convergence depends on what number you plug in for $x$, the question isn't "Does the power series converge?", but rather, "**For what values of $x$ does it converge?**"

There are only three possibilities for a power series centered at $a$:
1.  **Converges only at $x = a$.** (If you plug in $a$, every term is zero, so it trivially converges to $c_0$. It diverges everywhere else). Radius $R = 0$.
2.  **Converges for all real numbers $x$.** Radius $R = \infty$.
3.  **Converges on a finite interval around $a$.** There is a positive number $R$ (the **Radius of Convergence**) such that the series converges absolutely if $|x - a| < R$, and diverges if $|x - a| > R$.

The **Interval of Convergence** is the actual segment on the number line where the series converges. If the radius is $R$, the interval is $(a - R, a + R)$.

## 3. Finding the Radius of Convergence

We almost always use the **Ratio Test** to find the radius of convergence.

*Example:* Find the radius of convergence of $\sum_{n=1}^{\infty} \frac{(x-3)^n}{n \cdot 2^n}$

1.  Set up the Ratio Test:
    $L = \lim_{n \to \infty} \left| \frac{(x-3)^{n+1}}{(n+1) 2^{n+1}} \cdot \frac{n \cdot 2^n}{(x-3)^n} \right|$
2.  Simplify:
    $L = \lim_{n \to \infty} \left| \frac{x-3}{2} \cdot \frac{n}{n+1} \right|$
3.  Evaluate the limit as $n \to \infty$. (Treat $x$ as a constant).
    $L = \left| \frac{x-3}{2} \right| \cdot 1 = \frac{|x-3|}{2}$
4.  Apply the Ratio Test condition for absolute convergence ($L < 1$):
    $\frac{|x-3|}{2} < 1 \implies |x - 3| < 2$
5.  Identify the Radius $R$ and the interval:
    The distance from the center ($3$) must be less than $2$. So the **Radius of Convergence $R = 2$**.
    The interior of the interval is $1 < x < 5$.

## 4. Checking the Endpoints

The Ratio Test is inconclusive when $L = 1$, which occurs exactly at the boundaries $|x - a| = R$ (in our example, $x = 1$ and $x = 5$).

**You must check the endpoints manually** by plugging them into the original series and using standard series tests (like AST or p-series).

*   Test $x = 5$: $\sum \frac{(5-3)^n}{n \cdot 2^n} = \sum \frac{2^n}{n \cdot 2^n} = \sum \frac{1}{n}$. This is the Harmonic Series, which **diverges**.
*   Test $x = 1$: $\sum \frac{(1-3)^n}{n \cdot 2^n} = \sum \frac{(-2)^n}{n \cdot 2^n} = \sum \frac{(-1)^n 2^n}{n \cdot 2^n} = \sum \frac{(-1)^n}{n}$. This is the Alternating Harmonic Series, which **converges**.

Therefore, the full Interval of Convergence is **$[1, 5)$**.
