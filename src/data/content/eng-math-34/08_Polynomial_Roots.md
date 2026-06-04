# 8. Polynomial Root Finding

Polynomials of degree $n$ have exactly $n$ roots in the complex plane (counting multiplicity), by the Fundamental Theorem of Algebra. Finding all roots simultaneously requires specialized algorithms.

### Horner's Method (Synthetic Division)
Evaluating $p(x) = a_n x^n + a_{n-1}x^{n-1} + \dots + a_1 x + a_0$ naively requires $O(n^2)$ multiplications. **Horner's Method** rewrites it as nested multiplications:
$$p(x) = (\dots((a_n x + a_{n-1})x + a_{n-2})x + \dots + a_1)x + a_0$$

This reduces to $n$ multiplications and $n$ additions — minimum possible. The same algorithm simultaneously computes $p'(x_k)$ for Newton's step.

**Horner recursion:**
$$b_n = a_n, \quad b_k = a_k + x \cdot b_{k+1}, \quad k = n-1, \dots, 0$$

Then $p(x) = b_0$ and $p'(x) = c_0$ where $c_k = b_k + x \cdot c_{k+1}$.

### Deflation
After finding one root $x_1^*$ (approximately), divide out the factor $(x - x_1^*)$ to obtain a polynomial of degree $n-1$:
$$p(x) = (x - x_1^*) q(x) + r$$

If $r \approx 0$ (as expected for a near-root), continue searching for roots of $q(x)$. **Deflation can accumulate errors** with each division — always polish roots by re-running Newton on the original $p(x)$ using the deflated roots as starting points.

### Companion Matrix Eigenvalue Method
All roots of $p(x) = x^n + c_{n-1}x^{-1} + \dots + c_0$ are eigenvalues of its **Companion Matrix**:
$$\mathbf{C} = \begin{pmatrix} 0 & 0 & \cdots & 0 & -c_0 \\ 1 & 0 & \cdots & 0 & -c_1 \\ 0 & 1 & \cdots & 0 & -c_2 \\ \vdots & & \ddots & \vdots & \vdots \\ 0 & 0 & \cdots & 1 & -c_{n-1} \end{pmatrix}$$

Applying the QR eigenvalue algorithm to $\mathbf{C}$ finds all $n$ roots (including complex roots) simultaneously. This is the method used by MATLAB's `roots()` function and NumPy's `np.roots()`.

### Muller's Method
Extends the Secant method to use three points and fit a quadratic (instead of a line). Solves the quadratic by the quadratic formula to get the next iterate. Convergence order $\approx 1.839$. Naturally finds complex roots even with real starting points — unlike Bisection or Newton started with real values.
