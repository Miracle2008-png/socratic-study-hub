# 4. Residues

We have classified singularities. Now we must extract their most valuable secret.
Look closely at the standard Laurent Series for a function with a singularity at $z_0$:

$$
f(z) = \dots + \frac{c_{-3}}{(z-z_0)^3} + \frac{c_{-2}}{(z-z_0)^2} + \mathbf{\frac{c_{-1}}{z-z_0}} + c_0 + c_1(z-z_0) + \dots
$$

Let's integrate this entire infinite series around a small closed circular contour $C$ that surrounds the singularity $z_0$.

We can integrate the series term by term!
1.  **The Analytic terms ($c_0, c_1 \dots$):** By the Cauchy-Goursat theorem, the integral of any analytic term around a closed loop is exactly **0**. All positive exponents instantly vanish.
2.  **The Higher Negative terms ($c_{-2}, c_{-3} \dots$):** By the Generalized Cauchy Integral Formula, the contour integral of $(z-z_0)^{-n}$ is the $(n-1)$ derivative of the numerator (which is just a constant $c_{-n}$). The derivative of a constant is **0**! All higher negative exponents instantly vanish.

Every single infinite term in the series perfectly evaluates to zero, EXCEPT for one specific term: $\frac{c_{-1}}{z-z_0}$.

### The Magic of $c_{-1}$
If we integrate that single surviving term using Cauchy's Integral Formula:
$$
\oint_C \frac{c_{-1}}{z-z_0} \, dz = 2\pi i (c_{-1})
$$

This is a staggering mathematical revelation. If you integrate ANY complex function around a closed loop containing a singularity, the infinite chaos of the function perfectly collapses. The final answer depends entirely on the specific value of the **$c_{-1}$ coefficient** in the Laurent Series.

Because this coefficient is the only thing "left over" after the integral destroys the rest of the series, we call it the **Residue**.

$$
\text{Res}(f, z_0) = c_{-1}
$$

### Example
Suppose you calculate the Laurent Series for a terrifying function and find:
$$
f(z) = \frac{7}{z^5} - \frac{\pi}{z^2} + \mathbf{\frac{4}{z}} + 9 + 12z + \dots
$$
What is the contour integral $\oint_C f(z) \, dz$ around the unit circle?

You don't need to do any calculus. 
1. The singularity is at $z=0$ (which is inside the circle).
2. The coefficient of the $1/z$ term is exactly $4$. Therefore, the Residue is 4.
3. The integral is simply $2\pi i \times \text{Residue}$.
$$
\oint_C f(z) \, dz = 2\pi i (4) = \mathbf{8\pi i}
$$

The Residue is the single most important number in Complex Integration.
