# 12. Concept Drills

Test your mastery of Numerical Integration. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: You need to calculate the exact area under the curve $f(x) = x^3 - 2x + 4$ between $x=0$ and $x=2$. Which is the most efficient method that guarantees zero theoretical truncation error?
Options:
A) Composite Trapezoidal Rule with 10,000 panels.
B) Composite Simpson's 1/3 Rule with 2 panels (3 points).
C) Gaussian Quadrature with 2 points.
D) Both B and C will yield the exact answer.
Answer: D
Explanation: The function is a polynomial of degree 3. Simpson's 1/3 Rule integrates polynomials up to degree 3 exactly (zero truncation error). Gaussian Quadrature with $n=2$ points integrates polynomials up to degree $2n-1 = 3$ exactly. Both will yield the exact analytical answer without requiring a massive number of panels. The Trapezoidal rule, being accurate only for linear functions, would require an infinite number of panels to drive the error to zero.
```

```drill
Question: You are integrating data from a sensor that outputs $(time, velocity)$ pairs every 0.01 seconds. Which integration method is completely invalid for this scenario?
Options:
A) Trapezoidal Rule
B) Simpson's 1/3 Rule
C) Gaussian Quadrature
D) Simpson's 3/8 Rule
Answer: C
Explanation: Gaussian Quadrature dictates exactly where the function must be evaluated (at the roots of Legendre polynomials, which are irrational numbers like $0.57735...$). You cannot go back in time and force the sensor to record data at those specific uneven intervals. The data is locked into an equally-spaced grid, which strictly mandates a Newton-Cotes formula (Trapezoidal or Simpson's).
```

```drill
Question: Why is Monte Carlo Integration the preferred method for evaluating an integral over a 20-dimensional space?
Options:
A) It is the only method with a high-order convergence rate, specifically $O(h^{20})$.
B) Its convergence rate of $O(1/\sqrt{N})$ is independent of the number of dimensions, completely bypassing the "Curse of Dimensionality" that destroys grid-based methods.
C) Random sampling is the only way to avoid Runge's phenomenon in multiple dimensions.
D) It allows the integration of functions that are not continuous.
Answer: B
Explanation: A nested grid in 20 dimensions with just 10 points per axis requires $10^{20}$ evaluations — computationally impossible for any supercomputer. Monte Carlo estimates the integral via random sampling, and its statistical error drops proportionally to $1/\sqrt{N}$ regardless of whether you are in 1D or 100D. While $1/\sqrt{N}$ is slow, it is the only viable option when grid-based methods scale exponentially into the trillions.
```

```drill
Question: An adaptive quadrature algorithm like Gauss-Kronrod works by recursively dividing panels. What triggers the algorithm to stop dividing a specific panel?
Options:
A) When the number of function evaluations reaches a hard-coded limit.
B) When the estimated difference between a lower-order approximation and a higher-order approximation of the panel's integral falls below a user-defined tolerance.
C) When the width of the panel $h$ matches the machine epsilon of double-precision floating point numbers.
D) When the second derivative of the function inside the panel becomes zero.
Answer: B
Explanation: Adaptive quadrature is driven by local error estimation. The algorithm computes a cheap estimate and an expensive, highly accurate estimate for the same panel. If the cheap and expensive estimates agree up to the desired tolerance (e.g., 6 decimal places), the algorithm assumes the integral has converged for that region and stops subdividing. It only continues to subdivide regions where the high-curvature of the function causes the two estimates to disagree.
```
