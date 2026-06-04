# 1. Introduction to Complex Functions

Up until this point, we have studied functions that take real numbers as inputs and output real numbers ($y = f(x)$), or functions that take multiple real numbers and output a real number ($z = f(x,y)$).

Now, we enter the realm of **Complex Analysis**. We will study functions that take a Complex Number as an input, and output a completely new Complex Number!

### The Complex Variable $z$
A complex number $z$ is composed of a real part ($x$) and an imaginary part ($y$), combined using the imaginary unit $i = \sqrt{-1}$.
$$
z = x + iy
$$

Instead of placing $x$ on a number line, we place $z$ on the 2D **Complex Plane** (an Argand diagram). The x-axis is the Real axis, and the y-axis is the Imaginary axis. Therefore, the single variable $z$ secretly contains two independent physical dimensions!

### The Complex Function $f(z)$
A complex function $w = f(z)$ takes a complex number $z$ from the input plane, performs algebraic operations on it, and outputs a new complex number $w$ onto a completely different output plane.

Because the output $w$ is also a complex number, we can split it into its own real and imaginary parts. We traditionally call the real part $u$, and the imaginary part $v$.

$$
w = f(z) = u(x,y) + i v(x,y)
$$

This equation reveals the great secret of complex analysis: 
**A single complex function $f(z)$ is mathematically identical to a pair of 2D multivariable real functions $u(x,y)$ and $v(x,y)$ locked together!**

### Example: Squaring a Complex Number
Let's see what happens when we define the simple function $f(z) = z^2$.
We substitute $z = x + iy$ into the function:
$$
f(z) = (x + iy)^2
$$
$$
f(z) = x^2 + 2ixy + (iy)^2
$$
Because $i^2 = -1$, the last term becomes $-y^2$. We group the real terms and the imaginary terms together:
$$
f(z) = (x^2 - y^2) + i(2xy)
$$

We have successfully split the complex function into its two hidden multivariable components!
*   **The Real Part:** $u(x,y) = x^2 - y^2$
*   **The Imaginary Part:** $v(x,y) = 2xy$

If you want to know the output of $f(z) = z^2$ at the coordinate $z = 3 + 4i$:
1. $x = 3, y = 4$
2. $u(3,4) = 3^2 - 4^2 = 9 - 16 = -7$
3. $v(3,4) = 2(3)(4) = 24$
4. Final Output: $w = -7 + 24i$
