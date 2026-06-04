# 10. Root-Finding vs. Optimization

Root-finding (finding $x^*$ where $f(x^*) = 0$) and Optimization (finding $x^*$ where $g(x)$ is a maximum or minimum) are mathematically intertwined. Most 1D and multidimensional algorithms are identical in structure, operating on different target functions.

### The Fundamental Link
Finding a local extremum of an unconstrained, differentiable objective function $g(\mathbf{x})$ requires finding a stationary point where the gradient is zero:
$$\nabla g(\mathbf{x}) = \mathbf{0}$$

This is exactly a multidimensional root-finding problem for the vector-valued function $\mathbf{F}(\mathbf{x}) = \nabla g(\mathbf{x})$.

### Newton's Method for Optimization
Apply Newton's root-finding method to $\mathbf{F}(\mathbf{x}) = \nabla g(\mathbf{x})$.
The Jacobian of the gradient is the **Hessian matrix** $\mathbf{H}$ (matrix of second derivatives):
$$[\mathbf{H}(\mathbf{x})]_{ij} = \frac{\partial^2 g}{\partial x_i \partial x_j}$$

The Newton iteration for optimization becomes:
$$\mathbf{x}_{k+1} = \mathbf{x}_k - [\mathbf{H}(\mathbf{x}_k)]^{-1} \nabla g(\mathbf{x}_k)$$

In 1D, this reduces to:
$$x_{k+1} = x_k - \frac{g'(x_k)}{g''(x_k)}$$

### Transforming Optimization to Root-Finding
If you only have a root-finding algorithm but need to minimize $g(x)$, you can approximate the derivative using central differences and find the root of the approximation:
$$f(x) \approx \frac{g(x+h) - g(x-h)}{2h} = 0$$

### Transforming Root-Finding to Optimization
Conversely, finding the root of $f(x) = 0$ or the system $\mathbf{F}(\mathbf{x}) = \mathbf{0}$ can be transformed into an optimization problem by defining an objective function (the sum of squared residuals):
$$\min_{\mathbf{x}} G(\mathbf{x}) = \|\mathbf{F}(\mathbf{x})\|_2^2 = \sum_i [F_i(\mathbf{x})]^2$$

This minimum is precisely 0 at the root. Algorithms like Levenberg-Marquardt (Nonlinear Least Squares) exploit this by treating root-finding as a minimization problem. This approach is highly robust because even if it fails to find an exact root, it returns the $x$ that minimizes the error.

### Key Differences in Algorithms
Despite the mathematical equivalence, the algorithms differ in practice:
*   **Bracketing:** Bisection requires a sign change (root finding). Golden Section Search requires a "unimodal" bowl shape (optimization).
*   **Descent direction:** In optimization, you can ensure each step decreases the objective function value (global convergence). In root-finding, enforcing a decrease in $\|F(x)\|$ is harder and requires specialized line-search techniques.
