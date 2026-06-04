# 6. Generalized Cauchy Integral Formula

Cauchy's Integral formula allows us to instantly evaluate integrals with a single $(z - z_0)$ in the denominator.
$$
\oint_C \frac{f(z)}{z - z_0} \, dz = 2\pi i \cdot f(z_0)
$$

But what if the singularity in the denominator has an exponent? What if the integral looks like $\oint \frac{f(z)}{(z - z_0)^3} \, dz$?

If we take the derivative of the original Cauchy Integral Formula with respect to the variable $z_0$, we unlock an even more powerful tool.

### The Generalized Formula (Derivatives)
If $f(z)$ is analytic inside and on a simple closed contour $C$, and $z_0$ is any point inside $C$, then:

$$
\oint_C \frac{f(z)}{(z - z_0)^{n+1}} \, dz = \frac{2\pi i}{n!} f^{(n)}(z_0)
$$
*(Where $f^{(n)}(z_0)$ is the $n$-th derivative of the numerator $f(z)$ evaluated at $z_0$.)*

Notice the exponent in the denominator is $(n+1)$. 
If the denominator is cubed $(z-z_0)^3$, then $n+1 = 3$, which means $n = 2$. You must take the second derivative of the numerator!

### Example
Evaluate $\oint_C \frac{e^{2z}}{(z - i)^4} \, dz$, where $C$ is a circle enclosing the point $z = i$.

1.  **Identify $z_0$:** The singularity is $z_0 = i$. It is inside the contour.
2.  **Identify $n$:** The denominator is raised to the 4th power. Therefore $n+1 = 4$, so $n=3$. We need a 3rd derivative!
3.  **Identify $f(z)$:** The numerator is $f(z) = e^{2z}$.
4.  **Take the derivatives of $f(z)$:**
    *   $f'(z) = 2e^{2z}$
    *   $f''(z) = 4e^{2z}$
    *   $f'''(z) = 8e^{2z}$
5.  **Evaluate at $z_0$:** Plug $z_0 = i$ into the 3rd derivative.
    $$f'''(i) = 8e^{2i}$$
6.  **Apply the formula:** Multiply by $\frac{2\pi i}{n!}$
$$
\oint_C \frac{e^{2z}}{(z - i)^4} \, dz = \frac{2\pi i}{3!} (8e^{2i})
$$
Since $3! = 6$, this simplifies to:
$$
= \frac{2\pi i}{6} (8e^{2i}) = \mathbf{\frac{8\pi i e^{2i}}{3}}
$$

### The Staggering Theoretical Implication
Look at this generalized formula again, but rewrite it to solve for the derivative:
$$
f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^{n+1}} \, dz
$$
This equation proves that the derivative of a complex function at a specific point is entirely determined by an integral taken along a boundary fence surrounding that point! 
This formally proves the miracle we discussed in the last chapter: **If a complex function can be differentiated once, it is mathematically guaranteed to be infinitely differentiable!**
