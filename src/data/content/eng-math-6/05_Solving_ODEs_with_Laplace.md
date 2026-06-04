# 5. Solving ODEs with the Laplace Transform

The traditional method for solving a linear nonhomogeneous ODE with constant coefficients (like $y'' + 4y' + 3y = e^t$) requires three separate phases: find $y_h$, find $y_p$, add them together, and then apply initial conditions to a complex system of equations to find $C_1$ and $C_2$.

The Laplace Transform condenses this entire process into a single, unified algebraic algorithm.

### The Algorithm
**Step 1: Transform.** Take the Laplace Transform ($\mathcal{L}$) of both sides of the differential equation. Use the derivative formulas to replace $y''$ and $y'$ with polynomials of $s$ and $Y(s)$, immediately plugging in your initial conditions.
**Step 2: Algebra.** Use basic algebra to factor out $Y(s)$ and isolate it on one side of the equation.
**Step 3: Inverse Transform.** Take the Inverse Laplace Transform ($\mathcal{L}^{-1}$) of $Y(s)$ to convert the equation back into the time domain $y(t)$.

### Worked Example
**Problem:** Solve $y' - 2y = 4$, given the initial condition $y(0) = 1$.

**Step 1: Transform**
Take the Laplace transform of every term:
$$ \mathcal{L}\{y'\} - 2\mathcal{L}\{y\} = \mathcal{L}\{4\} $$

Use the derivative rule $\mathcal{L}\{y'\} = sY(s) - y(0)$:
$$ [sY(s) - y(0)] - 2Y(s) = \frac{4}{s} $$

Plug in the initial condition $y(0) = 1$:
$$ sY(s) - 1 - 2Y(s) = \frac{4}{s} $$

**Step 2: Algebra**
Our goal is to isolate $Y(s)$. First, group the $Y(s)$ terms and move the $-1$ to the right side:
$$ Y(s)[s - 2] = \frac{4}{s} + 1 $$

Find a common denominator for the right side:
$$ Y(s)[s - 2] = \frac{4 + s}{s} $$

Divide by $[s - 2]$ to isolate $Y(s)$:
$$ Y(s) = \frac{s + 4}{s(s - 2)} $$

We have fully solved for the system in the frequency domain! No calculus was required to get here, only algebra.

**Step 3: Inverse Transform Preview**
To find the final answer $y(t)$, we must apply the inverse transform to $Y(s)$. However, the fraction $\frac{s + 4}{s(s - 2)}$ does not exist in our basic transform table.

Before we can use the inverse transform, we must break this complicated fraction down into simpler fractions using **Partial Fraction Decomposition**. We will cover the Inverse Transform and Partial Fractions in the next two sections.
