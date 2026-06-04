# 8. The Exponential Function $e^z$

How do standard algebraic functions behave when you shove a complex number into them?
Let's start with the most important function in calculus: the exponential function $e^x$. 

We want to define a new complex function $f(z) = e^z$. 
By replacing $z$ with $x + iy$, we get:
$$
e^z = e^{x + iy} = e^x \cdot e^{iy}
$$

What does $e^{iy}$ mean? In 1748, Leonhard Euler proved the most famous formula in mathematics by expanding the Taylor Series for $e^x$, $\sin x$, and $\cos x$. He discovered that raising $e$ to an imaginary power physically converts the number into oscillating trigonometric waves!

**Euler's Formula:**
$$
e^{iy} = \cos(y) + i \sin(y)
$$

### The Full Definition of $e^z$
By combining these pieces, the official definition of the complex exponential function is:
$$
e^z = e^x (\cos y + i \sin y)
$$

This is an incredible revelation. The real part $x$ controls the **magnitude** (how violently the exponential grows or decays). The imaginary part $y$ acts as a **phase angle**, controlling how the number rotates and spins in a circle!

### Periodicity (The Spinning Wheel)
Because the imaginary part $y$ is trapped inside a sine and cosine wave, it is bounded by a cycle of $2\pi$. 
If you add $2\pi i$ to any complex number $z$, the function simply completes one full $360^\circ$ rotation and lands right back where it started!

$$
e^{z + 2\pi i} = e^z
$$

Unlike the real exponential function $e^x$ which just grows to infinity forever, the complex exponential function $e^z$ is infinitely **periodic**. It loops back onto itself over and over again as you move up the imaginary axis.

### Is $e^z$ Analytic?
Let's extract the real and imaginary parts from our definition:
*   $u(x,y) = e^x \cos y$
*   $v(x,y) = e^x \sin y$

If you calculate the partial derivatives, you will find they perfectly pass the Cauchy-Riemann equations everywhere! $e^z$ is an Entire function.
Furthermore, if you calculate the derivative $f'(z) = u_x + iv_x$, you get:
$$
f'(z) = e^x \cos y + i (e^x \sin y) = \mathbf{e^z}
$$
The beautiful rule survives: The derivative of $e^z$ is exactly $e^z$!
