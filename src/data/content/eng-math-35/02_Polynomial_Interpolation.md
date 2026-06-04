# 2. Polynomial Interpolation and the Vandermonde Matrix

The most classic form of interpolation uses a single polynomial to connect all the points.

### Weierstrass Approximation Theorem
Why polynomials? The Weierstrass theorem guarantees that any continuous function on a closed interval $[a, b]$ can be uniformly approximated as closely as desired by a polynomial of sufficiently high degree. Therefore, polynomials form a universal basis for approximation.

### Existence and Uniqueness Theorem
Given $n+1$ distinct points $(x_0, y_0), \dots, (x_n, y_n)$, there exists **exactly one** polynomial $P_n(x)$ of degree at most $n$ that passes through all $n+1$ points.

*   2 points $\to$ exactly one line (degree 1).
*   3 points $\to$ exactly one parabola (degree 2).
*   $n+1$ points $\to$ exactly one polynomial of degree $n$.

### The Direct Method (Vandermonde Matrix)
To find the unique polynomial $P_n(x) = a_0 + a_1 x + a_2 x^2 + \dots + a_n x^n$, substitute the $n+1$ data points into the equation:

$$
\begin{cases}
a_0 + a_1 x_0 + a_2 x_0^2 + \dots + a_n x_0^n = y_0 \\
a_0 + a_1 x_1 + a_2 x_1^2 + \dots + a_n x_1^n = y_1 \\
\vdots \\
a_0 + a_1 x_n + a_2 x_n^2 + \dots + a_n x_n^n = y_n
\end{cases}
$$

This is a system of $n+1$ linear equations in the unknowns $a_0, a_1, \dots, a_n$. In matrix form:
$$\mathbf{V}\mathbf{a} = \mathbf{y}$$

$$
\begin{pmatrix}
1 & x_0 & x_0^2 & \cdots & x_0^n \\
1 & x_1 & x_1^2 & \cdots & x_1^n \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & x_n & x_n^2 & \cdots & x_n^n
\end{pmatrix}
\begin{pmatrix} a_0 \\ a_1 \\ \vdots \\ a_n \end{pmatrix} =
\begin{pmatrix} y_0 \\ y_1 \\ \vdots \\ y_n \end{pmatrix}
$$

The matrix $\mathbf{V}$ is the **Vandermonde matrix**. Since the $x_i$ are distinct, $\mathbf{V}$ is invertible, proving the existence and uniqueness theorem.

### The Conditioning Problem
While the direct method is mathematically simple, it is **computationally disastrous** for large $n$. The Vandermonde matrix becomes exceedingly ill-conditioned as $n$ increases. 

For $n > 10$, solving $\mathbf{V}\mathbf{a} = \mathbf{y}$ using standard elimination will result in severe numerical round-off errors. The coefficients $a_i$ will be inaccurate, and evaluating the polynomial will fail.

Because of this ill-conditioning, the direct Vandermonde method is almost never used in practice. Instead, we use alternative representations of the exact same unique polynomial: the **Lagrange form** and the **Newton form**.
