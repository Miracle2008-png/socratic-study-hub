# 3. Lagrange Interpolating Polynomials

The **Lagrange form** reformulates the polynomial interpolation problem to avoid solving linear systems entirely. It builds the polynomial as a linear combination of special basis functions.

### The Lagrange Basis Polynomials
For a set of $n+1$ nodes $x_0, x_1, \dots, x_n$, define the $i$-th **Lagrange basis polynomial** $\ell_i(x)$ of degree $n$ as:

$$\ell_i(x) = \prod_{\substack{j=0 \\ j \neq i}}^n \frac{x - x_j}{x_i - x_j} = \frac{(x-x_0)\dots(x-x_{i-1})(x-x_{i+1})\dots(x-x_n)}{(x_i-x_0)\dots(x_i-x_{i-1})(x_i-x_{i+1})\dots(x_i-x_n)}$$

The key property of $\ell_i(x)$ is the **Kronecker delta property**:
$$
\ell_i(x_j) = \delta_{ij} = \begin{cases} 
1 & \text{if } j = i \\ 
0 & \text{if } j \neq i 
\end{cases}
$$

It is 1 at node $x_i$ and strictly 0 at every other node $x_j$.

### The Full Lagrange Polynomial
Because of this property, the unique interpolating polynomial $P_n(x)$ can be written directly as:
$$P_n(x) = \sum_{i=0}^n y_i \ell_i(x) = y_0 \ell_0(x) + y_1 \ell_1(x) + \dots + y_n \ell_n(x)$$

Check: At $x = x_k$, all $\ell_i(x_k)$ vanish except $\ell_k(x_k)=1$. Thus $P_n(x_k) = y_k \cdot 1 = y_k$. It perfectly interpolates the data.

### Worked Example: Linear Interpolation ($n=1$)
Given $(x_0, y_0)$ and $(x_1, y_1)$. The basis polynomials are:
$$\ell_0(x) = \frac{x - x_1}{x_0 - x_1}, \qquad \ell_1(x) = \frac{x - x_0}{x_1 - x_0}$$

The polynomial is:
$$P_1(x) = y_0 \frac{x - x_1}{x_0 - x_1} + y_1 \frac{x - x_0}{x_1 - x_0}$$
This is the standard formula for linear interpolation, re-arranged.

### Worked Example: Quadratic Interpolation ($n=2$)
Given $(1, 1), (2, 4), (3, 9)$.
$$\ell_0(x) = \frac{(x-2)(x-3)}{(1-2)(1-3)} = \frac{1}{2}(x^2 - 5x + 6)$$
$$\ell_1(x) = \frac{(x-1)(x-3)}{(2-1)(2-3)} = -(x^2 - 4x + 3)$$
$$\ell_2(x) = \frac{(x-1)(x-2)}{(3-1)(3-2)} = \frac{1}{2}(x^2 - 3x + 2)$$

$$P_2(x) = 1 \cdot \ell_0(x) + 4 \cdot \ell_1(x) + 9 \cdot \ell_2(x) = x^2$$

### Advantages and Disadvantages
*   **Pros:** Explicit formula, no matrix inversion required, beautiful mathematical structure. Very useful for theoretical derivations (e.g., deriving numerical integration formulas).
*   **Cons:** Computationally expensive to evaluate ($O(n^2)$ operations). If you add a single new data point $(x_{n+1}, y_{n+1})$, you must recompute **all** the basis polynomials from scratch. The Newton form solves this.
