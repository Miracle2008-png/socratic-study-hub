# 1. Introduction to Ordinary Differential Equations

In engineering, it is rarely possible to directly measure a quantity like the position of a rocket or the temperature of a reactor core at any future time. Instead, our physical laws (like Newton's Second Law or Fourier's Law of Heat Conduction) relate a quantity to its *rate of change*.

An equation that contains an unknown function and one or more of its derivatives is called a **Differential Equation**.

### Ordinary vs. Partial
*   **Ordinary Differential Equation (ODE):** The unknown function depends on only **one** independent variable (usually time $t$ or distance $x$). Therefore, it only contains ordinary derivatives (e.g., $\frac{dy}{dx}$).
*   **Partial Differential Equation (PDE):** The unknown function depends on **multiple** independent variables (e.g., heat diffusing through a 3D block depends on $x, y, z$, and $t$). It contains partial derivatives (e.g., $\frac{\partial u}{\partial t}$).

### Order and Degree
The **order** of a differential equation is the order of the highest derivative present.
*   $y' + 3y = e^x$ (First Order)
*   $y'' + 4y' - 5y = 0$ (Second Order)

The **degree** of a differential equation is the power to which the highest derivative is raised (after removing any fractional or negative powers).
*   $(y')^2 + y = 0$ (First Order, Second Degree)

### Linear vs. Nonlinear
An ODE is **linear** if the unknown function $y$ and its derivatives $y', y'', \dots$ appear only to the first power, and are not multiplied together or nested inside other functions.

**Linear Examples:**
*   $y'' + 5y' + 6y = \sin(t)$
*   $x^2 y' + xy = e^x$ (The independent variable $x$ can be squared or inside a function, but $y$ cannot).

**Nonlinear Examples:**
*   $y' + y^2 = 0$ ($y$ is squared)
*   $y \cdot y' = x$ ($y$ is multiplied by its derivative)
*   $y'' + \sin(y) = 0$ ($y$ is trapped inside a trig function)

### What is a "Solution"?
In algebra, solving $x^2 - 4 = 0$ yields a *number* ($x = \pm 2$).
In differential equations, solving $y' = y$ yields a **function** ($y = C e^x$).

A solution is any function that, when plugged back into the ODE, makes the equation true.

**Worked Example:**
Verify that $y = C e^{-2x}$ is a solution to the ODE $y' + 2y = 0$.

1. Differentiate the proposed solution: $y' = -2C e^{-2x}$.
2. Plug $y$ and $y'$ into the left side of the ODE:
   $$ (-2C e^{-2x}) + 2(C e^{-2x}) $$
3. Simplify:
   $$ 0 $$
Because the left side equals the right side, it is a valid solution.
