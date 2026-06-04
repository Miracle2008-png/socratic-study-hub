# 1. Why We Need Series Solutions

Up to this point, we have solved second-order linear ODEs like $y'' + p(x)y' + q(x)y = 0$ using the Characteristic Equation. 

However, the Characteristic Equation only works if the coefficients $p(x)$ and $q(x)$ are **constants**. What if the coefficients are variables, depending on $x$?

Consider this equation:
$$ x^2 y'' + x y' + (x^2 - \nu^2)y = 0 $$
This is Bessel's Equation. The coefficients are functions of $x$. If you try to guess a solution like $y = e^{rx}$, the derivatives will generate extra $x$'s that you can never cancel out. The Characteristic Equation fails. The Laplace Transform fails. Variation of Parameters fails.

In fact, for most differential equations with variable coefficients, the solutions cannot be written in terms of standard elementary functions (sines, cosines, exponentials, or polynomials).

### The Solution Strategy
When an equation is too complex to solve with standard functions, mathematicians throw their hands up and declare: "Let's assume the solution is an infinite polynomial!"

This infinite polynomial is called a **Power Series**. 

Instead of searching for a closed-form function like $y = \cos(x)$, we search for a series like:
$$ y(x) = c_0 + c_1 x + c_2 x^2 + c_3 x^3 + \dots $$
$$ y(x) = \sum_{n=0}^{\infty} c_n x^n $$

We will plug this infinite series directly into the differential equation, take derivatives, group all the $x$ terms together, and solve algebraically to find the unknown coefficients ($c_0, c_1, c_2, \dots$). 

While an infinite series might seem messy, it is incredibly powerful. Computers calculate sines, cosines, and logarithms using series approximations. For engineers, having a series solution is just as good as having a closed-form solution.
