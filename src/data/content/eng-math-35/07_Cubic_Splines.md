# 7. Cubic Splines

A **Cubic Spline** is the most widely used interpolation method in engineering. It constructs a piecewise cubic polynomial that guarantees $C^2$ continuity across all data nodes — meaning the function, its slope, and its curvature are perfectly smooth everywhere.

Historically, a "spline" was a flexible strip of wood used by shipbuilders. Weighted down at specific points (the nodes or "knots"), the wood would naturally bend to minimize its internal strain energy. The mathematical cubic spline exactly mimics this physical bending.

### Spline Formulation
Given $n+1$ points $x_0, x_1, \dots, x_n$, there are $n$ sub-intervals. On each sub-interval $[x_i, x_{i+1}]$, define a cubic polynomial:
$$S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3$$

Since there are $n$ cubics, we must determine $4n$ unknown coefficients.

### The Smoothness Constraints
To find the coefficients, we impose the following mathematical constraints:

1.  **Interpolation (Internal):** Each cubic must hit the left and right nodes of its interval. (2n constraints)
    $$S_i(x_i) = y_i \quad \text{and} \quad S_i(x_{i+1}) = y_{i+1}$$
2.  **$C^1$ Continuity:** The slopes must match at the interior nodes. (n-1 constraints)
    $$S_{i-1}'(x_i) = S_i'(x_i)$$
3.  **$C^2$ Continuity:** The second derivatives (curvature) must match at the interior nodes. (n-1 constraints)
    $$S_{i-1}''(x_i) = S_i''(x_i)$$

Total constraints: $2n + (n-1) + (n-1) = 4n - 2$.
We are **two constraints short** of solving for all $4n$ coefficients.

### Boundary Conditions
The remaining two constraints are applied at the global boundaries $x_0$ and $x_n$.

*   **Natural Spline:** Assume the second derivative is zero at the ends (the wood strip is unconstrained outside the outer weights).
    $$S_0''(x_0) = 0 \quad \text{and} \quad S_{n-1}''(x_n) = 0$$
*   **Clamped Spline:** The first derivative (slope) is specified at the ends (the wood strip is clamped in a vise).
    $$S_0'(x_0) = v_0 \quad \text{and} \quad S_{n-1}'(x_n) = v_n$$
*   **Not-a-Knot:** Force $C^3$ continuity at the first and last interior nodes. The first two sub-intervals merge into a single cubic, as do the last two.

### The Linear System
Applying these constraints leads to a tridiagonal system of linear equations for the unknown second derivatives $c_i$ at the nodes.
$$\mathbf{A}\mathbf{c} = \mathbf{r}$$
Because the matrix $\mathbf{A}$ is strictly diagonally dominant and tridiagonal, the system is solved extremely quickly in $O(n)$ time using the Thomas algorithm. Once the $c_i$ are found, the remaining $a_i, b_i, d_i$ are computed algebraically.
