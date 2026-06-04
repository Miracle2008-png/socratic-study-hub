# 5. Homogeneous Systems with Distinct Real Eigenvalues

Recall our hypothesis: the solution to the system $\mathbf{X}' = \mathbf{A}\mathbf{X}$ is $\mathbf{X} = \mathbf{v} e^{\lambda t}$, where $\lambda$ is an eigenvalue and $\mathbf{v}$ is its corresponding eigenvector.

If you solve the characteristic equation $\det(\mathbf{A} - \lambda\mathbf{I}) = 0$ for a 2x2 matrix and get **two distinct, real eigenvalues** ($\lambda_1 \neq \lambda_2$), then you will also find two distinct, linearly independent eigenvectors ($\mathbf{v_1}$ and $\mathbf{v_2}$).

### The General Solution
Because we have two linearly independent solutions, we invoke the Superposition Principle. The general solution to the system is simply their linear combination:

$$ \mathbf{X}(t) = C_1 \mathbf{v_1} e^{\lambda_1 t} + C_2 \mathbf{v_2} e^{\lambda_2 t} $$

To find the individual scalar functions $x(t)$ and $y(t)$, you just read the top and bottom rows of the resulting matrix equation.

### Worked Example
**Problem:** Solve the system:
$x' = 4x - 2y$
$y' = x + y$

**Step 1: Write in Matrix Form**
$$ \begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} 4 & -2 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} $$

**Step 2: Find Eigenvalues and Eigenvectors**
*(We solved this exact matrix on the previous page!)*
$\lambda_1 = 2, \quad \mathbf{v_1} = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$
$\lambda_2 = 3, \quad \mathbf{v_2} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$

**Step 3: Write the Vector General Solution**
$$ \mathbf{X}(t) = C_1 \begin{bmatrix} 1 \\ 1 \end{bmatrix} e^{2t} + C_2 \begin{bmatrix} 2 \\ 1 \end{bmatrix} e^{3t} $$

**Step 4: Unpack into Scalar Functions**
Read across the top row for $x(t)$:
$$ x(t) = C_1 e^{2t} + 2C_2 e^{3t} $$
Read across the bottom row for $y(t)$:
$$ y(t) = C_1 e^{2t} + C_2 e^{3t} $$

That's it! We solved two interconnected differential equations using nothing but basic linear algebra.

### Initial Value Problems
If you are given initial conditions, say $x(0) = 5$ and $y(0) = 3$, you simply plug $t=0$ into your unpacked equations:
$5 = C_1(1) + 2C_2(1)$
$3 = C_1(1) + C_2(1)$

This creates a basic system of algebraic equations. Subtracting the bottom from the top gives $2 = C_2$. Plugging that back in gives $C_1 = 1$.
The particular solution is $x(t) = e^{2t} + 4e^{3t}$ and $y(t) = e^{2t} + 2e^{3t}$.
