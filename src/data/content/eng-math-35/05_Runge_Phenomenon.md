# 5. Interpolation Error and Runge's Phenomenon

Interpolating exactly through a set of points does not guarantee that the polynomial is a good approximation of the underlying function *between* the points. 

### The Interpolation Error Theorem
If $P_n(x)$ interpolates a function $f(x)$ at $n+1$ distinct nodes $x_0, x_1, \dots, x_n$, then for any $x$ in the interval spanning the nodes, the interpolation error is:
$$E_n(x) = f(x) - P_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!} \prod_{i=0}^n (x - x_i)$$

Where $\xi$ is some unknown point in the interval.

This formula is structurally identical to the remainder term in a Taylor series. The error depends on:
1.  The $(n+1)$-th derivative of the true function $f$.
2.  The product of distances from $x$ to all the nodes (the **nodal polynomial** $\omega(x) = \prod (x-x_i)$).

### Runge's Phenomenon
Intuition suggests that increasing the number of data points $n$ (and thus the polynomial degree) will improve the interpolation accuracy. In 1901, Carl Runge proved this intuition dangerously wrong.

Consider Runge's function:
$$f(x) = \frac{1}{1 + 25x^2} \quad \text{on the interval } [-1, 1]$$

If you interpolate this function using equally spaced nodes, the polynomial $P_n(x)$ converges to $f(x)$ in the center of the interval, but **oscillates wildly near the boundaries** ($\pm 1$). 

As $n \to \infty$, the maximum error at the edges diverges to infinity. This high-degree polynomial oscillation is **Runge's Phenomenon**.

The root cause is the nodal polynomial $\omega(x)$. For equally spaced points, $\omega(x)$ has massive peaks near the edges of the interval, overwhelming any convergence provided by the factorial denominator.

### Chebyshev Nodes: The Cure for Runge's Phenomenon
If you have the freedom to *choose* where to sample the data points, never use equally spaced points for high-degree interpolation.

To minimize the maximum value of the nodal polynomial $\omega(x)$, cluster the nodes densely near the boundaries of the interval and sparsely in the center. The optimal node placements are the roots of the **Chebyshev polynomials**.

For the interval $[-1, 1]$, the $n+1$ Chebyshev nodes are:
$$x_k = \cos\left(\frac{2k + 1}{2n + 2} \pi\right), \quad k = 0, 1, \dots, n$$

Using Chebyshev nodes completely eliminates Runge's phenomenon and guarantees uniform convergence of $P_n(x)$ to $f(x)$ as $n \to \infty$ for any smooth function.

If you *cannot* choose the nodes (e.g., experimental data is already equally spaced), you must abandon global high-degree polynomial interpolation entirely and use **splines**.
