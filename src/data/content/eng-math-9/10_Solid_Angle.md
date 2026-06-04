# 10. Solid Angle & Gauss's Formula

We are familiar with standard 2D angles, measured in radians. A full circle contains $2\pi$ radians. 

In 3D space, we measure how "large" an object appears from a specific viewing point using the **Solid Angle** ($\Omega$). It is measured in **steradians** (sr). 
Just as the circumference of a unit circle is $2\pi$, the surface area of a unit sphere is $4\pi$. Therefore, the total solid angle looking out in all directions from a point is $4\pi$ steradians.

### The Inverse-Square Vector Field
Consider a vector field that points purely radially outward from the origin, and whose magnitude drops off with the square of the distance. 
$$ \mathbf{F}(\mathbf{r}) = \frac{\mathbf{r}}{|\mathbf{r}|^3} = \frac{\langle x, y, z \rangle}{(x^2+y^2+z^2)^{3/2}} $$

This specific mathematical field perfectly models gravity (Newton's Law) and electrostatics (Coulomb's Law). 

### The Divergence Anomaly
What is the divergence of this field?
If you manually compute $\nabla \cdot \mathbf{F}$ using the quotient rule, a miraculous cancellation occurs:
$$ \nabla \cdot \mathbf{F} = \frac{3|\mathbf{r}|^2 - 3|\mathbf{r}|^2}{|\mathbf{r}|^5} = 0 $$

The divergence is zero everywhere! But wait... if we integrate the flux of this field over a sphere $S$ of radius $R$ centered at the origin:
On the sphere, the outward normal is $\mathbf{n} = \mathbf{r}/R$.
$$ \mathbf{F} \cdot \mathbf{n} = \left( \frac{\mathbf{r}}{R^3} \right) \cdot \left( \frac{\mathbf{r}}{R} \right) = \frac{|\mathbf{r}|^2}{R^4} = \frac{R^2}{R^4} = \frac{1}{R^2} $$
The surface integral is $\iint_S (\frac{1}{R^2}) dS = \frac{1}{R^2} \cdot (4\pi R^2) = 4\pi$.

**The Paradox:**
By the Divergence Theorem, $\iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E (\nabla \cdot \mathbf{F}) dV$.
Left side = $4\pi$.
Right side = $\iiint 0 \, dV = 0$.
**$4\pi \neq 0$! What broke?**

### The Dirac Delta Function
The Divergence Theorem requires the field to be continuous and differentiable everywhere inside the volume. Our inverse-square field has a massive singularity at the origin $(0,0,0)$ where it divides by zero! 

To mathematically fix this, physicists use the **Dirac Delta function** $\delta^3(\mathbf{r})$, which is zero everywhere except at the origin, where it is infinitely dense, such that its total volume integral equals 1.
The true divergence of the inverse square field is not 0, but rather:
$$ \nabla \cdot \left( \frac{\mathbf{r}}{|\mathbf{r}|^3} \right) = 4\pi \delta^3(\mathbf{r}) $$

When you integrate this proper divergence over the volume, you get exactly $4\pi$, restoring the validity of the Divergence Theorem!
