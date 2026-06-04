# 6. Piecewise Interpolation

To defeat Runge's phenomenon for equally spaced data, we abandon the idea of fitting a single high-degree polynomial through all $n+1$ points. Instead, we use **piecewise interpolation**: break the domain into smaller sub-intervals and fit low-degree polynomials between adjacent points.

### Piecewise Linear Interpolation
The simplest approach. Connect each adjacent pair of points $(x_i, y_i)$ and $(x_{i+1}, y_{i+1})$ with a straight line.

On the sub-interval $[x_i, x_{i+1}]$, the interpolant is:
$$S_i(x) = y_i + \frac{y_{i+1} - y_i}{x_{i+1} - x_i}(x - x_i)$$

*   **Continuity:** The global function $S(x)$ is continuous ($C^0$).
*   **Smoothness:** The first derivative is discontinuous at every data node (the curve has sharp corners).
*   **Error:** Bounded by $O(h^2)$ where $h$ is the maximum spacing between nodes. Increasing the number of points monotonically decreases the error.

### Piecewise Quadratic Interpolation
Use a quadratic parabola spanning three adjacent points. This provides a smoother curve but requires overlapping points or special boundary conditions to ensure the parabolas match up. Still rarely used because of issues with derivative continuity at the boundaries.

### The Continuity Hierarchy
When connecting pieces of a function, we categorize the smoothness by the highest derivative that is continuous everywhere:
*   **$C^0$ continuity:** The function values match (no gaps). Example: Piecewise linear.
*   **$C^1$ continuity:** The first derivatives (slopes) match (no sharp corners).
*   **$C^2$ continuity:** The second derivatives (curvature) match (no sudden changes in bending). This is the standard for modern engineering design and CAD.

### The Trade-off
Piecewise methods guarantee that the error will go to zero as $h \to 0$ (unlike global polynomials on equally spaced nodes), but low-degree piecewise methods lack the smoothness required for many physical applications (like cam design, fluid flow boundaries, or stress analysis where $C^2$ continuity is critical). To achieve $C^2$ continuity without high degrees, we need **Cubic Splines**.
