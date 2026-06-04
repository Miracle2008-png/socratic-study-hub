# 6. Transforms of Derivatives (Solving IVPs)

We now arrive at the crown jewel of the Laplace Transform: solving differential equations.

As mentioned earlier, taking the Laplace Transform of a derivative $y'$ converts the calculus operation into algebraic multiplication by $s$. 
The formulas for the transforms of the first and second derivatives are:

$$ \mathcal{L}\{y'(t)\} = s Y(s) - y(0) $$
$$ \mathcal{L}\{y''(t)\} = s^2 Y(s) - s y(0) - y'(0) $$

*(Where $Y(s)$ is the unknown Laplace Transform of $y(t)$).*

Notice what these formulas require: $y(0)$ and $y'(0)$. These are exactly the **Initial Conditions** of an Initial Value Problem! The Laplace transform automatically bakes the initial conditions directly into the algebraic equation.

### The 4-Step Master Process
To solve any linear ODE initial value problem:
1.  Take the Laplace Transform of the entire differential equation (left and right sides).
2.  Substitute the initial conditions $y(0)$ and $y'(0)$ into the resulting algebraic equation.
3.  Solve the equation algebraically for the unknown $Y(s)$.
4.  Use Partial Fractions and the Inverse Laplace Transform to find $y(t)$.

### Worked Example
**Problem:** Solve the IVP: $y'' - y' - 2y = 0$, with $y(0)=1$ and $y'(0)=0$.

**Step 1: Transform the Equation**
$\mathcal{L}\{y''\} - \mathcal{L}\{y'\} - 2\mathcal{L}\{y\} = \mathcal{L}\{0\}$
$[s^2 Y(s) - s y(0) - y'(0)] - [s Y(s) - y(0)] - 2[Y(s)] = 0$

**Step 2: Substitute Initial Conditions**
Since $y(0)=1$ and $y'(0)=0$:
$[s^2 Y(s) - s(1) - 0] - [s Y(s) - 1] - 2Y(s) = 0$
$s^2 Y(s) - s - s Y(s) + 1 - 2Y(s) = 0$

**Step 3: Solve for Y(s)**
Group all terms with $Y(s)$ on the left, and move everything else to the right:
$Y(s) [s^2 - s - 2] = s - 1$
$$ Y(s) = \frac{s - 1}{s^2 - s - 2} $$

**Step 4: Inverse Transform (Partial Fractions)**
Factor the denominator: $s^2 - s - 2 = (s-2)(s+1)$.
Set up partial fractions:
$$ \frac{s-1}{(s-2)(s+1)} = \frac{A}{s-2} + \frac{B}{s+1} $$
$s - 1 = A(s+1) + B(s-2)$
*   Let $s=-1$: $-2 = B(-3) \implies B = 2/3$.
*   Let $s=2$: $1 = A(3) \implies A = 1/3$.

$$ Y(s) = \frac{1/3}{s-2} + \frac{2/3}{s+1} $$
Take the inverse transform using the table:
$$ y(t) = \frac{1}{3}e^{2t} + \frac{2}{3}e^{-t} $$

No Characteristic Equation. No Undetermined Coefficients. We solved the calculus problem using pure algebra!
