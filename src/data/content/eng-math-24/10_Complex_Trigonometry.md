# 10. Complex Trigonometric Functions

If the exponential function $e^z$ can handle complex numbers, can the standard sine and cosine waves handle them too? Yes, but they behave very differently than you might expect.

Recall Euler's formula from page 8:
$$
e^{iy} = \cos y + i \sin y
$$
If we plug in a negative angle ($-y$), we get:
$$
e^{-iy} = \cos(-y) + i \sin(-y) = \cos y - i \sin y
$$

If we add these two equations together, the $i\sin y$ terms perfectly cancel out, leaving $2\cos y$. 
If we subtract the equations, the $\cos y$ terms cancel out, leaving $2i\sin y$.

This gives us the incredible ability to define standard Trigonometry entirely using Exponentials! 
For any complex number $z$:
$$
\cos z = \frac{e^{iz} + e^{-iz}}{2}
$$
$$
\sin z = \frac{e^{iz} - e^{-iz}}{2i}
$$

### The Unbounded Sine Wave
In real numbers, the graph of $y = \sin(x)$ is a wave trapped between 1 and -1. It can never exceed a height of 1.

But let's calculate the sine of a purely imaginary number, like $z = 10i$.
$$
\sin(10i) = \frac{e^{i(10i)} - e^{-i(10i)}}{2i}
$$
$$
= \frac{e^{-10} - e^{10}}{2i}
$$

Look at that term: $e^{10}$. That is a massive real number! 
In the complex plane, the sine and cosine functions are **NOT bounded**. As you move up the imaginary y-axis, the sine wave explodes into exponentially massive values!

### Hyperbolic Functions
The equations we just derived look shockingly similar to the Hyperbolic functions ($\sinh z$ and $\cosh z$). That is not an accident! Complex Trigonometry acts as the perfect bridge connecting oscillating circular geometry to exploding hyperbolic geometry.

$$
\sin(iy) = i \sinh(y)
$$
$$
\cos(iy) = \cosh(y)
$$

Because they are built purely out of the analytic exponential function $e^z$, both $\sin z$ and $\cos z$ are **Entire Functions**, meaning they are perfectly analytic everywhere in the universe, and their derivatives work exactly as expected: $\frac{d}{dz}(\sin z) = \cos z$.
