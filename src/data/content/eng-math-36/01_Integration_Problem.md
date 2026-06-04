# 1. The Numerical Integration Problem

Integration is the mathematical operation of computing areas, volumes, total mass from density, work from force, or accumulated energy from power. 

While analytical calculus teaches us to find exact antiderivatives (e.g., $\int x^2 dx = x^3/3$), **numerical integration** (historically called **quadrature**) approximates the definite integral of a function using discrete function evaluations.

### Why Do We Need Numerical Integration?
In engineering practice, exact analytical integration is often impossible for three reasons:

1.  **No Closed-Form Antiderivative:** Many common functions have antiderivatives that cannot be expressed in terms of elementary functions (polynomials, exponentials, trig functions).
    *   The Error Function: $\int e^{-x^2} dx$ (crucial in probability and heat transfer).
    *   The Sine Integral: $\int \frac{\sin x}{x} dx$ (crucial in optics and signal processing).
    *   Elliptic Integrals: $\int \sqrt{1 - k^2 \sin^2\theta} \, d\theta$ (calculating the arc length of an ellipse or the exact period of a pendulum).
2.  **Experimental Data:** We often don't have a formula for $f(x)$. Instead, we have a set of discrete data points $(x_i, y_i)$ from sensors (e.g., velocity vs. time to find distance).
3.  **Complex System Models:** The function $f(x)$ might be the output of a complex computer simulation (like a CFD or FEA model) where evaluating $f(x)$ takes minutes of computation.

### The General Quadrature Formula
Virtually all numerical integration methods approximate the integral as a weighted sum of function values at specific points:

$$I = \int_a^b f(x) \, dx \approx \sum_{i=0}^n w_i f(x_i)$$

*   $x_i$ are the **nodes** (or integration points, or abscissas).
*   $w_i$ are the **weights** (or coefficients).
*   $n+1$ is the number of function evaluations.

The entire field of numerical integration revolves around choosing the best locations for the nodes $x_i$ and calculating the optimal weights $w_i$ to minimize the error for the fewest possible function evaluations.

### Two Main Families of Quadrature
1.  **Newton-Cotes Formulas:** The nodes $x_i$ are **equally spaced** across the interval $[a, b]$. This is necessary for experimental data and makes the math simple (Trapezoidal Rule, Simpson's Rule).
2.  **Gaussian Quadrature:** The nodes $x_i$ and weights $w_i$ are both treated as free parameters and strictly optimized. The nodes are **not equally spaced**. This yields dramatically higher accuracy for the same number of evaluations, provided you can evaluate $f(x)$ anywhere you want.
