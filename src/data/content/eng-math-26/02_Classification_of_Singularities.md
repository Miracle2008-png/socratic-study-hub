# 2. Classification of Singularities

Why do we care about Laurent Series? Because they act like mathematical x-rays. 
By expanding a function into a Laurent Series around a singularity point $z_0$, you can look at the negative exponents to diagnose exactly what "type" of singularity you are dealing with.

There are exactly three types of Isolated Singularities in the universe.

### 1. Removable Singularities
Sometimes a function looks like it has a singularity, but it's just a mathematical illusion.
Example: $f(z) = \frac{\sin z}{z}$ at $z = 0$.
If you plug in $z=0$, you get $0/0$, which is undefined. 

But let's look at the Laurent series. We take the Taylor series for $\sin z$ and divide every term by $z$:
$$
f(z) = \frac{1}{z} \left( z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots \right)
$$
$$
f(z) = 1 - \frac{z^2}{3!} + \frac{z^4}{5!} - \dots
$$

Look closely at the final series. **There are no negative exponents!**
Because there is no "Principal Part", the singularity doesn't actually exist in the limits. You can simply "plug the hole" by defining $f(0) = 1$, and the function becomes perfectly analytic. 
This is a **Removable Singularity**.

### 2. Poles
A pole is a true, physical singularity, but it has a strict, finite limit to its severity.
If you look at the Laurent series, the Principal Part (the negative exponents) stops after a specific number of terms.

$$
f(z) = \frac{c_{-3}}{z^3} + \frac{c_{-2}}{z^2} + \frac{c_{-1}}{z} + c_0 + c_1 z + \dots
$$
Because the most extreme negative exponent in this series is $-3$, we call this a **Pole of Order 3**. 
If the most extreme term is just $\frac{c_{-1}}{z}$, we call it a **Simple Pole** (Order 1).

Rational fractions naturally generate poles. For example, $f(z) = \frac{5}{(z-2)^4}$ has a Pole of Order 4 at the point $z=2$.

### 3. Essential Singularities
This is the most terrifying object in complex analysis. 
If the Laurent Series has an **infinite number** of negative exponent terms, the singularity never stops getting worse.

We saw this on the previous page with $f(z) = e^{1/z}$:
$$
e^{1/z} = 1 + \frac{1}{z} + \frac{1}{2! z^2} + \frac{1}{3! z^3} + \dots \text{ (forever)}
$$
Because the negative exponents continue to infinity, $z=0$ is an **Essential Singularity**.

Near an essential singularity, a function behaves so wildly that it will take on literally every single complex value in the universe (except possibly one) infinitely many times! It is a region of pure mathematical chaos.
