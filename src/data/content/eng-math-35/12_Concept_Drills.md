# 12. Concept Drills

Test your mastery of Numerical Interpolation. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: You have 20 highly precise, equally spaced data points mapping the lift coefficient of an airfoil over an angle of attack range. To interpolate values smoothly between the points, you construct a 19th-degree polynomial. What is the most likely outcome?
Options:
A) The polynomial will provide an exceptionally accurate and smooth curve across the entire range.
B) The polynomial will be perfectly accurate, but too slow to evaluate.
C) The polynomial will suffer from Runge's phenomenon, exhibiting violent oscillations between the data points near the ends of the interval.
D) The Vandermonde matrix will fail to invert, making it impossible to find any polynomial.
Answer: C
Explanation: Interpolating a large number of equally spaced points with a single high-degree global polynomial inevitably triggers Runge's phenomenon. The polynomial will hit the exact points, but the curve between points near the boundaries will oscillate wildly, producing completely non-physical predictions. The correct engineering approach is to use a piecewise low-degree polynomial, such as a Cubic Spline, which maintains $C^2$ smoothness without global oscillation.
```

```drill
Question: A sensor network records temperature at 50 random locations across a city. You need to generate a continuous 2D heat map. Which interpolation algorithm is appropriate?
Options:
A) Bilinear Interpolation
B) Bicubic Interpolation
C) Newton's Divided Differences
D) Radial Basis Functions (RBF)
Answer: D
Explanation: Bilinear and bicubic interpolation strictly require structured, rectangular grid data. Newton's divided differences are for 1D data. RBFs (and Kriging) are specifically designed for multidimensional scattered data. They build a surface using distance-based functions centered on the random points, requiring no grid structure at all.
```

```drill
Question: What is the primary computational advantage of using Newton's Divided Differences over Lagrange polynomials?
Options:
A) Newton's method produces a polynomial of lower degree.
B) Newton's method completely eliminates Runge's phenomenon.
C) If a new data point is added, Newton's method only requires computing one new term, whereas Lagrange requires recomputing the entire polynomial from scratch.
D) Newton's polynomials are easier to integrate analytically.
Answer: C
Explanation: By the Uniqueness Theorem, Newton and Lagrange methods produce the exact same algebraic polynomial — they are just different ways of writing it. Neither avoids Runge's phenomenon. The advantage of the Newton form is its nested, hierarchical structure. Adding an $(n+1)$-th point only requires computing the bottom diagonal of the divided difference table and adding $c_{n+1}(x-x_0)\dots(x-x_n)$, leaving all previous coefficients unchanged.
```

```drill
Question: Why do cubic splines require "boundary conditions" (like Natural or Clamped) when setting up the system of equations?
Options:
A) Because cubic polynomials inherently have two extra degrees of freedom.
B) To ensure $C^2$ continuity across the interior nodes.
C) To force the spline to pass through the first and last data points.
D) Because matching function values, first derivatives, and second derivatives at interior nodes provides $4n-2$ constraints for $4n$ unknown coefficients, leaving the system underdetermined by 2 constraints.
Answer: D
Explanation: For $n$ sub-intervals, we have $n$ cubic polynomials, meaning $4n$ unknown coefficients. Interpolating the points provides $2n$ constraints. Enforcing $C^1$ and $C^2$ continuity at the $n-1$ interior nodes provides another $2n-2$ constraints. The total is $4n-2$. We need exactly 2 more constraints to solve the system uniquely, which must be supplied at the outer boundaries (e.g., setting the second derivative to zero for a Natural Spline).
```
