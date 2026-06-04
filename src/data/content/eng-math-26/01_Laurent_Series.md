# 1. Laurent Series

In standard calculus, Taylor Series are used to perfectly recreate smooth functions using infinite polynomials ($1 + x + x^2/2 \dots$).
However, Taylor Series have a massive limitation: they can ONLY recreate functions that are perfectly analytic (smooth). If a function has a Singularity (a point where it breaks, like $1/z$ at $z=0$), the Taylor Series completely fails. It cannot model the explosion.

To model functions that contain singularities, Pierre Alphonse Laurent invented a massive upgrade to the Taylor Series: **The Laurent Series**.

### Negative Exponents
A Taylor series only has positive exponents ($z^0, z^1, z^2, z^3$). These terms get smoothly smaller near the origin.
A Laurent series is allowed to use **negative exponents** ($z^{-1}, z^{-2}, z^{-3}$). These terms act like rational fractions ($1/z, 1/z^2, 1/z^3$), which means they violently explode near the origin!

By mixing smooth positive terms with exploding negative terms, a Laurent series can perfectly model a function that is smooth everywhere except for a single violent singularity at $z_0$.

$$
f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n
$$

Let's expand that summation out so we can see its two halves:
$$
f(z) = \underbrace{\dots + \frac{c_{-2}}{(z-z_0)^2} + \frac{c_{-1}}{z-z_0}}_{\text{Principal Part (Negative)}} + \underbrace{c_0 + c_1(z-z_0) + c_2(z-z_0)^2 + \dots}_{\text{Analytic Part (Positive)}}
$$

### The Annulus of Convergence
A Taylor series converges inside a single, solid circle.
Because a Laurent series contains negative exponents, it cannot converge at the singularity itself. Therefore, a Laurent Series converges inside an **Annulus** (a 2D donut shape).

The inner hole of the donut avoids the singularity, while the outer ring extends as far as possible until it hits the next singularity!
$$
r < |z - z_0| < R
$$

### Example: Expanding $e^{1/z}$
Consider the function $f(z) = e^{1/z}$. This has a catastrophic singularity at $z=0$. 
We cannot use a Taylor series. But we CAN substitute $1/z$ into the standard Taylor series for $e^x$ to create a Laurent series!

The standard Taylor series is:
$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} \dots$

Substitute $x = 1/z$:
$$
e^{1/z} = 1 + \frac{1}{z} + \frac{1}{2! z^2} + \frac{1}{3! z^3} + \dots
$$
This is a perfect Laurent series centered at $z_0 = 0$. Because the series contains an infinite number of negative exponent terms, we know the singularity at the origin is incredibly severe!
