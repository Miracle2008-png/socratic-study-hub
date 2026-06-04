# 4. Ordinary Points and Recurrence Relations

Continuing from the previous page, we found the recurrence relation for $y' - y = 0$:
$$ c_{n+1} = \frac{c_n}{n+1} \quad \text{for } n = 0, 1, 2, \dots $$

Let's plug in values of $n$ to generate the coefficients. The first coefficient, $c_0$, is just an arbitrary constant (it acts as our '$C$' from $C e^x$).

*   For $n=0$: $c_1 = \frac{c_0}{0+1} = c_0$
*   For $n=1$: $c_2 = \frac{c_1}{1+1} = \frac{c_1}{2} = \frac{c_0}{2}$
*   For $n=2$: $c_3 = \frac{c_2}{2+1} = \frac{c_2}{3} = \frac{1}{3}(\frac{c_0}{2}) = \frac{c_0}{6}$
*   For $n=3$: $c_4 = \frac{c_3}{3+1} = \frac{c_3}{4} = \frac{1}{4}(\frac{c_0}{6}) = \frac{c_0}{24}$

Do you see the pattern emerging in the denominators? It's a factorial!
$$ c_n = \frac{c_0}{n!} $$

Now substitute these coefficients back into our original assumed series $y(x) = \sum_{n=0}^{\infty} c_n x^n$:
$$ y(x) = c_0 + c_0 x + \frac{c_0}{2} x^2 + \frac{c_0}{6} x^3 + \frac{c_0}{24} x^4 + \dots $$
Factor out the arbitrary constant $c_0$:
$$ y(x) = c_0 \left( 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \dots \right) $$

If you recall your Taylor Series from Calculus II, the infinite series inside the parentheses is the exact definition of $e^x$.
Therefore:
$$ y(x) = c_0 e^x $$
The Power Series method correctly deduced the solution!

### Ordinary Points
We can use this standard power series method to solve second-order equations like $P(x)y'' + Q(x)y' + R(x)y = 0$. 
Divide by the leading coefficient $P(x)$:
$$ y'' + p(x)y' + q(x)y = 0 $$

A point $x = x_0$ is called an **Ordinary Point** if both $p(x)$ and $q(x)$ are analytical (continuous and differentiable, with no division by zero) at that point. 

If $x=0$ is an ordinary point, you are guaranteed that the standard power series method $\sum c_n x^n$ will successfully find two linearly independent solutions that converge near zero. 

But what if $P(0) = 0$, causing division by zero? The standard method will fail catastrophically. We must deal with Singular Points.
