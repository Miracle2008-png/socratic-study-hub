# 11. Legendre's Equation

If Bessel functions rule the cylindrical world, **Legendre Polynomials** rule the spherical world.

Whenever you solve problems involving spheres—like calculating the gravitational field of the Earth, modeling the quantum mechanical electron orbitals of a Hydrogen atom, or mapping the cosmic microwave background radiation of the universe—you will encounter **Legendre's Equation**:

$$ (1 - x^2)y'' - 2xy' + n(n+1)y = 0 $$
where $n$ is a non-negative integer.

*(Note: The variable $x$ here usually represents $\cos(\theta)$ in spherical coordinates, which is why the domain is restricted to $-1 \le x \le 1$).*

### Solving at an Ordinary Point
Let's analyze the singularities. 
Dividing by $(1-x^2)$ gives $p(x) = \frac{-2x}{1-x^2}$. This divides by zero at $x=1$ and $x=-1$.
However, the center $x=0$ is a perfectly safe **Ordinary Point**. We do not need the complex Frobenius method! We can just use the standard power series: $y(x) = \sum c_m x^m$.

Plugging this into Legendre's equation yields the recurrence relation:
$$ c_{m+2} = - \frac{(n-m)(n+m+1)}{(m+2)(m+1)} c_m $$

This relation steps by 2. This means $c_0$ generates $c_2, c_4, c_6$, forming a series of purely even powers ($y_{even}$). 
Meanwhile, $c_1$ generates $c_3, c_5, c_7$, forming a series of purely odd powers ($y_{odd}$).

### The Magic Truncation
Look closely at the numerator of the recurrence relation: $(n-m)$.
Remember that $n$ is a specific, fixed integer (like $n=3$). 
What happens when our series index $m$ counts up and finally equals $n$? (When $m=3$).
The numerator becomes $(3-3) = 0$. 
This means $c_5 = 0$. Which means $c_7 = 0$. The entire infinite series suddenly terminates!

Because $n$ is an integer, one of the two infinite series will always truncate into a finite polynomial.
These surviving finite polynomials are the **Legendre Polynomials, $P_n(x)$**.

*   $n=0$: $P_0(x) = 1$
*   $n=1$: $P_1(x) = x$
*   $n=2$: $P_2(x) = \frac{1}{2}(3x^2 - 1)$
*   $n=3$: $P_3(x) = \frac{1}{2}(5x^3 - 3x)$

These polynomials form the mathematical backbone of quantum chemistry and orbital mechanics!
