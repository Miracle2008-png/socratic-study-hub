# 2. Fubini's Theorem (Iterated Integrals)

How do you actually calculate $\iint f(x,y) \, dx \, dy$? 
You perform an **Iterated Integral**. You simply integrate one variable at a time, working from the inside out.

Suppose our region $R$ is a perfect rectangle on the floor, defined by $a \le x \le b$ and $c \le y \le d$.

### Fubini's Theorem
In 1907, Guido Fubini proved that for any continuous function over a rectangular region, you can compute the double integral by nesting two single integrals. Furthermore, **the order in which you integrate absolutely does not matter!**

You can integrate $x$ first (inner integral) and then $y$ (outer integral):
$$
\int_c^d \left[ \int_a^b f(x,y) \, dx \right] dy
$$

Or you can integrate $y$ first, and then $x$:
$$
\int_a^b \left[ \int_c^d f(x,y) \, dy \right] dx
$$
Both methods are mathematically guaranteed to yield the exact same final Volume!

### Partial Integration (The Core Technique)
The actual calculation relies on the concept of Partial Derivatives acting in reverse.
When you evaluate the *inner integral* with respect to $x$ ($dx$), you must treat the variable $y$ as if it were a pure constant number (like a 5 or a 10). 

### Worked Example
Find the volume under the surface $f(x,y) = x^2 y$ over the rectangle $R = [0,2] \times [1,3]$.
(This means $0 \le x \le 2$ and $1 \le y \le 3$).

Let's set up the iterated integral, choosing to do $dx$ first on the inside:
$$
V = \int_{y=1}^{y=3} \left[ \int_{x=0}^{x=2} x^2 y \, dx \right] dy
$$

**Step 1: The Inner Integral (dx)**
We integrate with respect to $x$. The $y$ is treated as a constant multiplier.
$$
\int_{0}^{2} x^2 y \, dx = \left[ \frac{1}{3} x^3 y \right]_{x=0}^{x=2}
$$
Evaluate the bounds (plug in 2 for $x$, then plug in 0 for $x$):
$$
= \left( \frac{1}{3} (2)^3 y \right) - (0) = \frac{8}{3} y
$$
The inner integral completely destroyed all the $x$'s! We are left with only $y$.

**Step 2: The Outer Integral (dy)**
Now we take that answer and plug it into the outer integral:
$$
V = \int_{1}^{3} \frac{8}{3} y \, dy
$$
$$
= \left[ \frac{4}{3} y^2 \right]_{y=1}^{y=3}
$$
$$
= \frac{4}{3}(9) - \frac{4}{3}(1) = 12 - \frac{4}{3} = \mathbf{\frac{32}{3}}
$$

The total volume is $32/3$. If you had swapped the order and done $dy$ first, you would have arrived at the exact same fraction!
