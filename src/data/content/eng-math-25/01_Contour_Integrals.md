# 1. Contour Integrals

In standard calculus, you integrate a function from point $a$ to point $b$ along a straight 1D number line. 
In Vector Calculus, we learned how to integrate a vector field along a curved 3D path $C$ using Line Integrals.

In Complex Analysis, integration happens in the 2D complex plane. The path you travel along is called a **Contour**. 
A Contour Integral is simply a Line Integral of a complex function $f(z)$ traveling along a specific curved path $C$ in the complex plane.

$$
\int_C f(z) \, dz
$$

### Parameterizing the Contour
To actually calculate this integral by hand, we must parameterize the contour $C$ using a real variable $t$ (usually representing time).

Let the path be $z(t) = x(t) + iy(t)$ for $a \le t \le b$.
Taking the derivative with respect to $t$ gives the velocity vector:
$$
z'(t) = x'(t) + iy'(t)
$$
Therefore, the complex differential $dz$ becomes $z'(t) \, dt$. 
We substitute these into the integral to turn it into a standard Calculus 1 definite integral!

$$
\int_C f(z) \, dz = \int_a^b f(z(t)) \cdot z'(t) \, dt
$$

### The Direction Matters
Just like in Vector Calculus, a Contour Integral is highly directional.
If you integrate from point $A$ to point $B$, and then you decide to turn around and integrate from point $B$ back to point $A$ along the exact same curve (which we denote as $-C$), the final answer will perfectly flip its sign!

$$
\int_{-C} f(z) \, dz = - \int_C f(z) \, dz
$$

### Example: Integrating around a Circle
Circles are the most important contours in complex analysis.
Let $C$ be the unit circle centered at the origin, traversed counter-clockwise.
The easiest way to parameterize a circle is using Euler's formula:
$$
z(t) = e^{it}, \quad 0 \le t \le 2\pi
$$
The derivative is:
$$
z'(t) = i e^{it}
$$

Let's integrate the incredibly important function $f(z) = \frac{1}{z}$ around this full circle!
$$
\oint_C \frac{1}{z} \, dz = \int_0^{2\pi} \frac{1}{e^{it}} \cdot (i e^{it}) \, dt
$$
Notice that the $e^{it}$ on the top and bottom perfectly cancel out!
$$
\oint_C \frac{1}{z} \, dz = \int_0^{2\pi} i \, dt = i [t]_0^{2\pi} = \mathbf{2\pi i}
$$

This result ($\oint \frac{1}{z} dz = 2\pi i$) is the single most important integration result in all of complex analysis. Burn it into your memory.
