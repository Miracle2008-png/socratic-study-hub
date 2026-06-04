# 2. Homogeneous Equations with Constant Coefficients

The most common and most solvable second-order ODEs in engineering are those where the coefficients $p(x)$ and $q(x)$ are not functions of $x$, but simply constant numbers (like mass, damping coefficient, and spring stiffness).

The equation takes the form:
$$ ay'' + by' + cy = 0 $$
Where $a, b,$ and $c$ are constants, and $a \neq 0$.

### The Guessing Strategy
To solve this, we make a highly educated guess. We need a function $y$ whose first and second derivatives are simply multiples of itself, so that they can all cancel out to equal 0.
The only function in the universe that behaves this way is the exponential function: $y = e^{rt}$.

Let's substitute $y = e^{rt}$ into the ODE:
*   $y = e^{rt}$
*   $y' = re^{rt}$
*   $y'' = r^2e^{rt}$

$$ a(r^2e^{rt}) + b(re^{rt}) + c(e^{rt}) = 0 $$

Factor out the $e^{rt}$:
$$ e^{rt} (ar^2 + br + c) = 0 $$

### The Characteristic Equation
Since $e^{rt}$ can never equal zero, the polynomial inside the parentheses MUST equal zero. This polynomial is called the **Characteristic Equation** (or Auxiliary Equation).

$$ ar^2 + br + c = 0 $$

We have magically transformed a complex calculus problem into a simple high-school algebra problem! To solve the differential equation, we only need to find the roots ($r$) of this quadratic equation.

### The Three Cases
Using the quadratic formula, $r = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$, we know there are three possible outcomes depending on the discriminant ($b^2 - 4ac$):

1. **Case 1: $b^2 - 4ac > 0$** 
   Two real, distinct roots ($r_1 \neq r_2$).
2. **Case 2: $b^2 - 4ac = 0$** 
   One real, repeated root ($r_1 = r_2 = r$).
3. **Case 3: $b^2 - 4ac < 0$** 
   Two complex conjugate roots ($r = \alpha \pm \beta i$).

Each case dictates a completely different physical behavior (Overdamped, Critically Damped, or Underdamped) and requires a different formula for the general solution. We will explore each case in the next three sections.
