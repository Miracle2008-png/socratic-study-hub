# 12. Concept Drills

Test your mastery of Numerical Root Finding. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: You are solving $x^3 - 5x + 1 = 0$ using Newton's method. Your initial guess is $x_0 = 1$. What happens?
Options:
A) It converges rapidly to a root near 1.
B) The derivative $f'(1) = -2$, so $x_1 = 1 - (-3)/(-2) = -0.5$. Convergence continues normally.
C) The derivative $f'(x) = 3x^2 - 5$. At $x_0=1$, $f'(1) = -2$. The next iterate $x_1$ shoots far away.
D) The sequence will oscillate endlessly between two values.
Answer: B
Explanation: Let's compute it. $f(x) = x^3 - 5x + 1$, $f'(x) = 3x^2 - 5$. At $x_0 = 1$: $f(1) = 1 - 5 + 1 = -3$. $f'(1) = 3(1) - 5 = -2$. The Newton step is $x_1 = x_0 - f(x_0)/f'(x_0) = 1 - (-3)/(-2) = 1 - 1.5 = -0.5$. From there, $f(-0.5) = -0.125 + 2.5 + 1 = 3.375$ and $f'(-0.5) = 0.75 - 5 = -4.25$. Convergence will continue. A failure only occurs if $f'(x_k)$ is exactly zero.
```

```drill
Question: You need to find a root of $f(x) = \sin(1/x)$ in the interval $[0.01, 1]$. The function is highly oscillatory near zero. Which method is most reliable?
Options:
A) Newton's Method — its quadratic convergence handles oscillations easily.
B) Secant Method — it avoids calculating the rapidly changing derivative.
C) Bisection — as long as you can find two points with opposite signs, it will rigorously trap a root.
D) Brent's Method — it will use IQI to fit the oscillations.
Answer: C
Explanation: Highly oscillatory functions defeat gradient-based methods. Newton's method will fail catastrophically because the derivative $f'(x) = (-1/x^2)\cos(1/x)$ swings wildly, sending the tangent line intercepts all over the real axis. Secant and Brent's IQI will also struggle with the non-polynomial curvature. Bisection is the only method that ignores the shape of the function entirely; provided $f(a)f(b) < 0$, it simply halves the interval and guarantees finding *some* root in the bracket.
```

```drill
Question: What is the primary advantage of Brent's method over the pure Secant method?
Options:
A) Brent's method is strictly faster (cubic convergence).
B) Brent's method does not require an initial bracket.
C) Brent's method uses a Bisection fallback step when the fast interpolation steps misbehave, guaranteeing convergence.
D) Brent's method calculates the exact derivative analytically.
Answer: C
Explanation: The pure Secant method (and pure IQI) can diverge or throw the iterate far outside the region of interest if the function's curvature is poor. Brent's method starts with a bracket and rigorously maintains it. If the Secant or IQI step attempts to jump outside the bracket, or isn't reducing the bracket size fast enough, Brent's method discards it and safely falls back to a guaranteed Bisection step. This hybridization provides Secant-like speed with Bisection-like reliability.
```

```drill
Question: To solve a system of $n=1000$ nonlinear equations $\mathbf{F}(\mathbf{x}) = \mathbf{0}$, why is standard Newton-Raphson often avoided?
Options:
A) Newton-Raphson is mathematically invalid for systems larger than $n=3$.
B) The Jacobian matrix has $1,000,000$ entries, making analytical derivation, evaluation, and solving the $O(n^3)$ linear system at every step prohibitively expensive.
C) The method only achieves linear convergence in multiple dimensions.
D) The system has infinite roots, and Newton cannot isolate one.
Answer: B
Explanation: In $n$ dimensions, Newton's method requires solving $\mathbf{J}_k \Delta\mathbf{x}_k = -\mathbf{F}_k$ at every iteration. Evaluating the $n \times n$ Jacobian requires $n^2$ partial derivatives. Solving the linear system by Gaussian elimination/LU factorization requires $O(n^3)$ operations (a billion operations for $n=1000$ per step). For large systems, Quasi-Newton methods (like Broyden's), Krylov-subspace solvers (Jacobian-Free Newton Krylov), or L-BFGS are used to drastically reduce the computational cost per step while maintaining acceptable convergence rates.
```
