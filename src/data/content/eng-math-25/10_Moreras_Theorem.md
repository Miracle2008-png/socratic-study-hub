# 10. Morera's Theorem

We know the Cauchy-Goursat theorem states:
*If a function is Analytic, then its integral around any closed loop is zero.*
$$
\text{Analytic} \implies \oint_C f(z) \, dz = 0
$$

But does this logical statement work in reverse? If you walk up to a random, unknown continuous function, and you integrate it around every possible closed loop you can draw, and every single time the answer is exactly zero... can you confidently declare that the function is Analytic?

### Morera's Theorem (The Reverse Cauchy-Goursat)
In 1886, Giacinto Morera proved that the reverse is absolutely true!

Let $f(z)$ be a continuous function in a region $D$.
If the contour integral $\oint_C f(z) \, dz = 0$ for *every* possible closed contour $C$ lying inside $D$, then $f(z)$ is mathematically guaranteed to be an **Analytic Function** throughout $D$!

$$
\oint_C f(z) \, dz = 0 \implies \text{Analytic}
$$

### Why is this useful?
Proving that a function is Analytic is normally very difficult. You have to prove the derivative exists, which requires proving the Cauchy-Riemann equations, which requires taking ugly partial derivatives.

But what if the function is defined as an incredibly messy integral, or an infinite series of other functions? Taking partial derivatives of an infinite series is extremely dangerous and often mathematically illegal.

Morera's Theorem provides a brilliant backdoor. 
Instead of taking derivatives to prove analyticity, you can take integrals! 
Because integrating an infinite series is mathematically much safer than differentiating one, mathematicians use Morera's Theorem to effortlessly prove that complex infinite series and messy integral transforms (like the Laplace Transform or the Riemann Zeta function) create perfectly Analytic functions!
