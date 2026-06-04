# 7. Liouville's Theorem

We established in the previous chapter that the complex sine wave $\sin(z)$ is an Entire Function (perfectly analytic everywhere in the universe).
However, we also proved that as you move along the imaginary y-axis, the sine wave explodes to exponentially massive infinity ($\sin(10i) \approx \text{huge}$). It is **unbounded**.

Is it possible to invent an Entire Function that is bounded (meaning its output never exceeds some maximum ceiling $M$), but is NOT just a flat, boring constant line like $f(z) = 5$?

### The Theorem
In 1847, Joseph Liouville used the Generalized Cauchy Integral Formula to prove one of the most elegant constraints in all of mathematics.

**Liouville's Theorem:**
The ONLY bounded entire functions in the universe are constants.

If a complex function is perfectly smooth everywhere (no singularities) AND it never shoots off to infinity in any direction, then the function must be a perfectly flat, horizontal line ($f(z) = c$).

### Why does this happen?
Imagine trying to build a smooth hill on the 2D complex plane. 
Because the real and imaginary parts of an analytic function must be Harmonic (passing Laplace's equation), they cannot possess any local maximums or minimums (peaks or valleys) unless they are pushed up by a boundary. 
If there are no boundaries and no singularities to push against, the only way a harmonic function can exist without growing to infinity in some direction is to be perfectly flat!

### The Proof Concept
Using the Generalized Cauchy Integral Formula for the first derivative:
$$
|f'(z_0)| \le \frac{1}{2\pi} \oint_C \frac{|f(z)|}{|z - z_0|^2} \, |dz|
$$
If the function is bounded by a ceiling $M$, we can substitute $M$ for $|f(z)|$.
If we draw a massive circular contour of radius $R$ around our point, the circumference is $2\pi R$, and the denominator becomes $R^2$.
$$
|f'(z_0)| \le \frac{1}{2\pi} \frac{M}{R^2} (2\pi R) = \frac{M}{R}
$$
Because the function is Entire, this must be true for ANY size circle. We can let the radius $R$ expand to infinity!
As $R \to \infty$, the fraction $\frac{M}{R} \to 0$.
Therefore, $|f'(z_0)| = 0$. 
Since the derivative is zero everywhere, the function must be a constant!
