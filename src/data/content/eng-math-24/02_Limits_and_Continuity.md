# 2. Limits and Continuity in the Complex Plane

Before we can do calculus (derivatives and integrals) on complex functions, we must define how Limits work in the complex plane. 

In standard Calculus 1, when we evaluate $\lim_{x \to 2} f(x)$, the variable $x$ travels along a 1D number line. It can only approach the number 2 from two directions: from the left (1.9, 1.99) or from the right (2.1, 2.01). 
If the left limit equals the right limit, the overall limit exists!

### The 2D Nightmare of Complex Limits
In Complex Analysis, the variable $z$ lives on a flat 2D plane. 
When we evaluate $\lim_{z \to z_0} f(z)$, the variable $z$ is NOT restricted to a 1D line. It can approach the target point $z_0$ from **infinitely many directions**!

$z$ can approach $z_0$ from the north, south, east, west, along a diagonal line, along a curved parabola, or spiraling inward like a tornado.

**The Golden Rule of Complex Limits:**
For a complex limit to exist, the function must approach the exact same target value $L$ regardless of which of the infinite possible paths $z$ takes to reach $z_0$.

If you find even *one* path that gives a different answer than the others, the limit **Does Not Exist (DNE)**.

### Proving a Limit Does Not Exist (An Example)
Consider the function $f(z) = \frac{\bar{z}}{z}$, where $\bar{z}$ is the complex conjugate ($x - iy$). 
Does the limit exist as $z$ approaches the origin $(0+0i)$?

$$
\lim_{z \to 0} \frac{x - iy}{x + iy}
$$

**Path 1: Approach along the Real Axis ($y = 0$)**
If we approach along the x-axis, the y-coordinate is strictly zero. We plug $y=0$ into the limit:
$$
\lim_{x \to 0} \frac{x - 0}{x + 0} = \lim_{x \to 0} \frac{x}{x} = 1
$$
The limit along the horizontal path is exactly 1.

**Path 2: Approach along the Imaginary Axis ($x = 0$)**
If we approach along the y-axis, the x-coordinate is strictly zero. We plug $x=0$ into the limit:
$$
\lim_{y \to 0} \frac{0 - iy}{0 + iy} = \lim_{y \to 0} \frac{-iy}{iy} = -1
$$
The limit along the vertical path is exactly -1.

Because Path 1 $\neq$ Path 2 ($1 \neq -1$), the limit absolutely Does Not Exist! The function is violently tearing itself apart at the origin.

### Continuity
Just like in standard calculus, a complex function is **Continuous** at a point $z_0$ if and only if three conditions are met:
1.  The function $f(z_0)$ physically exists.
2.  The limit $\lim_{z \to z_0} f(z)$ successfully exists (meaning all infinite paths agree).
3.  The limit perfectly equals the function value.
