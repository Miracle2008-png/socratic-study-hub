# 6. Newton's Method for Systems

Many engineering problems require solving a system of $n$ nonlinear equations in $n$ unknowns simultaneously — the operating point of a multi-loop circuit, the equilibrium of a chemical reaction with multiple species, or the steady-state of a nonlinear dynamical system.

### The Problem
Find $\mathbf{x}^* \in \mathbb{R}^n$ such that:
$$\mathbf{F}(\mathbf{x}) = \mathbf{0}$$

Where $\mathbf{F}: \mathbb{R}^n \to \mathbb{R}^n$ is a vector of $n$ nonlinear functions $F_1, F_2, \dots, F_n$.

### The Jacobian Matrix
The matrix analogue of the derivative $f'(x)$ is the **Jacobian matrix** $\mathbf{J}(\mathbf{x})$:
$$\mathbf{J}(\mathbf{x}) = \frac{\partial \mathbf{F}}{\partial \mathbf{x}} = \begin{pmatrix} \partial F_1/\partial x_1 & \cdots & \partial F_1/\partial x_n \\ \vdots & & \vdots \\ \partial F_n/\partial x_1 & \cdots & \partial F_n/\partial x_n \end{pmatrix}$$

### Newton's Method for Systems
The iteration is the direct vector generalization of scalar Newton:
$$\mathbf{x}_{k+1} = \mathbf{x}_k - [\mathbf{J}(\mathbf{x}_k)]^{-1} \mathbf{F}(\mathbf{x}_k)$$

In practice, we **never explicitly invert $\mathbf{J}$**. Instead, solve the linear system at each step:
$$\mathbf{J}(\mathbf{x}_k) \Delta\mathbf{x}_k = -\mathbf{F}(\mathbf{x}_k), \quad \text{then} \quad \mathbf{x}_{k+1} = \mathbf{x}_k + \Delta\mathbf{x}_k$$

This is $O(n^3)$ per iteration (LU factorization cost) plus $O(n^2)$ for the Jacobian evaluation.

**Convergence:** Quadratic near a simple root — same as scalar Newton.

### Worked Example: Two-Equation System
Solve $F_1(x, y) = x^2 + y^2 - 4 = 0$ (circle) and $F_2(x, y) = xy - 1 = 0$ (hyperbola).

Jacobian: $\mathbf{J} = \begin{pmatrix} 2x & 2y \\ y & x \end{pmatrix}$

Starting from $(x_0, y_0) = (2, 0.4)$:

Iteration 1: $\mathbf{F} = (0.16, -0.2)$. Solve $\mathbf{J}\Delta\mathbf{x} = -\mathbf{F}$: $\Delta x = 0.0392$, $\Delta y = 0.0784$. New point: $(1.9608, 0.4784)$.

Convergence in 3–4 iterations to $(1.9319, 0.5176)$ — one of the intersection points.

### Broyden's Method (Quasi-Newton)
Recomputing the full Jacobian at each iteration is expensive. **Broyden's Method** updates a rank-1 approximation to $\mathbf{J}^{-1}$ using only function evaluations:
$$\mathbf{J}_{k+1}^{-1} \approx \mathbf{J}_k^{-1} + \frac{(\Delta\mathbf{x} - \mathbf{J}_k^{-1}\Delta\mathbf{F})\Delta\mathbf{x}^T \mathbf{J}_k^{-1}}{\Delta\mathbf{x}^T \mathbf{J}_k^{-1} \Delta\mathbf{F}}$$

Cost per iteration drops to $O(n^2)$. Convergence degrades to superlinear, but the overall computational cost is often lower than full Newton for large systems.
