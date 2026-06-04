# 9. Euler-Cauchy Equations

Until now, we assumed the coefficients $a, b,$ and $c$ in our second-order ODEs were constant. If the coefficients are functions of $x$ (like $x^2y'' + \sin(x)y = 0$), the equation is generally impossible to solve without resorting to infinite power series.

However, there is one specific, highly structured exception that arises frequently in engineering (especially in fluid mechanics and Laplace's equation in spherical coordinates): **The Euler-Cauchy Equation**.

### The Standard Form
An Euler-Cauchy equation has the structure:
$$ ax^2y'' + bxy' + cy = 0 $$
Notice the strict symmetry: The power of $x$ perfectly matches the order of the derivative it is attached to.

### The Guessing Strategy
For constant coefficient ODEs, we guessed $y = e^{rx}$ because derivatives of exponentials are multiples of themselves.
For Euler-Cauchy equations, we guess **$y = x^m$**.

Why? Because when you differentiate a polynomial and multiply it by $x$, you get the exact same power back:
*   $y = x^m$
*   $y' = m x^{m-1} \implies x y' = m x^m$
*   $y'' = m(m-1) x^{m-2} \implies x^2 y'' = m(m-1) x^m$

### The Characteristic Equation
Substitute $y = x^m$ into the Euler-Cauchy ODE:
$$ a[m(m-1)x^m] + b[mx^m] + c[x^m] = 0 $$

Factor out $x^m$:
$$ x^m [am(m-1) + bm + c] = 0 $$

Since $x^m \neq 0$ (for $x>0$), the polynomial inside must equal zero. Distributing the $a$, we get the characteristic equation:
$$ am^2 + (b-a)m + c = 0 $$

*(Caution: Do not forget the $(b-a)$ term! This is the most common mistake students make).*

### The Three Cases
Solve for $m$ using the quadratic formula.

**Case 1: Real and Distinct Roots ($m_1 \neq m_2$)**
$$ y(x) = C_1 x^{m_1} + C_2 x^{m_2} $$

**Case 2: Real Repeated Root ($m_1 = m_2 = m$)**
In constant coefficients, we multiplied the second term by $x$. Here, because of the logarithmic nature of the transformation, we multiply by $\ln(x)$:
$$ y(x) = C_1 x^m + C_2 x^m \ln(x) $$

**Case 3: Complex Conjugate Roots ($m = \alpha \pm \beta i$)**
Using Euler's identity on an imaginary power of a polynomial yields sines and cosines containing logarithms:
$$ y(x) = x^\alpha [C_1 \cos(\beta \ln x) + C_2 \sin(\beta \ln x)] $$
