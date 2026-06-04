# 3. Homogeneous Equations with Constant Coefficients

The easiest (and most common) type of second-order linear ODEs to solve are those where the coefficients $p(x)$ and $q(x)$ are just constant numbers ($a, b, c$).
$$ ay'' + by' + cy = 0 $$

### The Guess
Remember our strategy: we just need to find two linearly independent functions $y_1$ and $y_2$ that make this equation true.
Look closely at the equation: it says that some function $y$, its first derivative $y'$, and its second derivative $y''$ must add together and perfectly cancel each other out to equal zero.

What kind of function looks exactly like its own derivatives? **The Exponential Function!**
Let us guess that the solution takes the form:
$$ y = e^{rt} $$
where $r$ is an unknown constant we need to find.

### The Characteristic Equation
If $y = e^{rt}$, then:
$$ y' = r e^{rt} $$
$$ y'' = r^2 e^{rt} $$

Substitute these back into the original ODE ($ay'' + by' + cy = 0$):
$$ a(r^2 e^{rt}) + b(r e^{rt}) + c(e^{rt}) = 0 $$
Factor out the common $e^{rt}$:
$$ e^{rt} (ar^2 + br + c) = 0 $$

Since an exponential function $e^{rt}$ can never equal zero, the polynomial inside the parentheses MUST equal zero.
$$ ar^2 + br + c = 0 $$

This is called the **Characteristic Equation** (or Auxiliary Equation). 

### The Grand Transformation
Notice what just happened. We completely eliminated calculus from the problem! 
To solve the differential equation $ay'' + by' + cy = 0$, we simply write down the algebraic quadratic equation $ar^2 + br + c = 0$ and use the quadratic formula to find its roots ($r_1, r_2$).

Because it is a quadratic equation, the roots can take three possible forms, which dictate the physical behavior of the system:
1.  Two distinct real roots (Overdamped)
2.  One repeated real root (Critically Damped)
3.  Two complex conjugate roots (Underdamped / Oscillating)

We will explore how to construct the general solution for each of these three cases over the next two pages.
