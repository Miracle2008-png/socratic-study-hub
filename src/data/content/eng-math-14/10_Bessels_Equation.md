# 10. Bessel's Equation

We now apply the Method of Frobenius to one of the most famous equations in all of physics and engineering: **Bessel's Equation**.

$$ x^2 y'' + x y' + (x^2 - \nu^2)y = 0 $$

This equation naturally arises whenever you solve problems involving circular or cylindrical symmetry. It dictates how heat flows through a metal cylinder, how a circular drumhead vibrates when struck, and how electromagnetic waves propagate through fiber-optic cables.

The parameter $\nu$ (nu) is a given constant (often an integer or half-integer) that depends on the specific geometry of the physical problem.

### The Solutions (Bessel Functions)
Because $x=0$ is a regular singular point, we use Frobenius. Solving the indicial equation yields $r = \pm \nu$.

Plugging $r = \nu$ into the recurrence relation generates a massive infinite series. This series is so important that mathematicians gave it a special name and symbol: **The Bessel Function of the First Kind of Order $\nu$**, denoted **$J_\nu(x)$**.

$$ J_\nu(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{n! \, \Gamma(n+\nu+1)} \left(\frac{x}{2}\right)^{2n+\nu} $$
*(Note: $\Gamma$ is the Gamma function, a continuous version of the factorial).*

What does this series look like? 
$J_0(x)$ looks like a cosine wave that slowly decays in amplitude as it travels. 
$J_1(x)$ looks like a sine wave that slowly decays.
They are basically "damped ripples" in space. This is exactly what a vibrating drumhead looks like!

### The Second Solution
Since Bessel's Equation is second-order, we need a second solution.
If $\nu$ is not an integer, we can just use the negative root $r = -\nu$ to get $J_{-\nu}(x)$.
But if $\nu$ *is* an integer (like 0, 1, 2...), the roots differ by an integer. As we learned, this triggers the Frobenius trap, and the second solution requires a logarithm.

This logarithmic second solution is called **The Bessel Function of the Second Kind**, denoted **$Y_\nu(x)$** (or sometimes the Weber function).

### The General Solution
For any real number $\nu$, the complete general solution to Bessel's Equation is:
$$ y(x) = C_1 J_\nu(x) + C_2 Y_\nu(x) $$

**Important Physical Constraint:**
The function $Y_\nu(x)$ contains a $\ln(x)$ term. Therefore, as $x \to 0$ (the center of the drum, or the center of the cylinder), $Y_\nu(x)$ dives to negative infinity! 
In almost all solid physical problems, the center point cannot have infinite temperature or infinite vibration. Therefore, we must forcefully set $C_2 = 0$ to delete the infinite $Y$ function, leaving only $y(x) = C_1 J_\nu(x)$!
