# 5. The Inverse Transform & Partial Fractions

Once we solve an equation in the $s$-domain to get our answer $F(s)$, we must translate it back to the time domain. This is the **Inverse Laplace Transform**, denoted $\mathcal{L}^{-1}\{F(s)\} = f(t)$.

Like the forward transform, the inverse transform is linear. 
We perform inverse transforms entirely by looking at our table in reverse. 
For example, if you see $F(s) = \frac{1}{s-4}$, you know immediately that $f(t) = e^{4t}$.

However, $F(s)$ is almost never neatly separated for us. It usually appears as a single massive algebraic fraction. 
To use our table in reverse, we must break this massive fraction apart into smaller, recognizable pieces. The mathematical technique for doing this is **Partial Fraction Decomposition**.

### Partial Fractions Strategy
Suppose you have an answer like $F(s) = \frac{3s + 1}{(s-1)(s^2 + 4)}$.
You cannot inverse transform this directly. You must split it up!

1.  **Linear Factors:** For every distinct linear factor $(s-a)$ in the denominator, add a fraction $\frac{A}{s-a}$.
2.  **Repeated Linear Factors:** If it's squared $(s-a)^2$, add two fractions: $\frac{A}{s-a} + \frac{B}{(s-a)^2}$.
3.  **Irreducible Quadratic Factors:** For factors like $(s^2+k^2)$ that cannot be factored with real numbers, add a fraction with a linear numerator: $\frac{As + B}{s^2+k^2}$.

For our example:
$$ \frac{3s + 1}{(s-1)(s^2 + 4)} = \frac{A}{s-1} + \frac{Bs + C}{s^2 + 4} $$

### Finding the Coefficients (A, B, C)
Multiply the entire equation by the common denominator $(s-1)(s^2+4)$ to clear all fractions:
$$ 3s + 1 = A(s^2 + 4) + (Bs + C)(s-1) $$

This equation must be true for *any* value of $s$. To find A, B, and C, plug in strategic values of $s$ that make parts of the equation evaluate to zero.

*   Let $s=1$: $3(1) + 1 = A(1^2 + 4) + (B+C)(0)$
    $4 = 5A \implies A = 4/5$.
*   Let $s=0$: $1 = A(4) + C(-1) \implies 1 = \frac{16}{5} - C \implies C = \frac{11}{5}$.
*   Let $s=2$: $7 = A(8) + (2B+C)(1) \implies 7 = \frac{32}{5} + 2B + \frac{11}{5} \implies 7 = \frac{43}{5} + 2B \implies B = -4/5$.

Now rewrite $F(s)$ with the found coefficients:
$$ F(s) = \frac{4/5}{s-1} - \frac{4}{5}\left(\frac{s}{s^2+4}\right) + \frac{11}{5}\left(\frac{1}{s^2+4}\right) $$

### The Inverse Transform
Now we use our table in reverse!
*(Note: To perfectly match the sine formula $\frac{k}{s^2+k^2}$, the last term needs a 2 on top. We multiply by 2/2 to fix it).*
$$ f(t) = \frac{4}{5}e^{t} - \frac{4}{5}\cos(2t) + \frac{11}{10}\sin(2t) $$
We have successfully translated back to the time domain!
