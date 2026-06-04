# 7. Repeated Eigenvalues & Defective Matrices

The final case occurs when the characteristic equation $\det(\mathbf{A} - \lambda\mathbf{I}) = 0$ has a repeated real root $\lambda$.
When you try to find the eigenvectors for this repeated root, two different things can happen, depending on the geometry of the matrix $\mathbf{A}$.

### Scenario 1: Complete Matrices (Two Eigenvectors)
Sometimes, plugging the repeated eigenvalue $\lambda$ back into $(\mathbf{A} - \lambda\mathbf{I})\mathbf{v} = \mathbf{0}$ yields the zero matrix: $\begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$. 
This means $0x + 0y = 0$, which is true for *any* vector. You can freely choose two linearly independent vectors (like $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$ and $\begin{bmatrix} 0 \\ 1 \end{bmatrix}$).
Because you have two independent eigenvectors, the general solution is the standard:
$$ \mathbf{X}(t) = C_1 \mathbf{v_1} e^{\lambda t} + C_2 \mathbf{v_2} e^{\lambda t} $$
*(This only happens if the original matrix $\mathbf{A}$ was already a multiple of the identity matrix).*

### Scenario 2: Defective Matrices (One Eigenvector)
Usually, a repeated eigenvalue will only yield *one* linearly independent eigenvector, $\mathbf{v_1}$.
Because we must have two linearly independent solutions to form the general solution, we are trapped. The matrix is called **Defective**.

Recall from single ODEs that we multiplied by $t$ to fix a repeated root. We do that here too, but because we are dealing with matrices, we must also add a constant vector $\mathbf{v_2}$ (called a generalized eigenvector) to balance the equation.

The two solutions are:
$$ \mathbf{X_1} = \mathbf{v_1} e^{\lambda t} $$
$$ \mathbf{X_2} = (\mathbf{v_1} t + \mathbf{v_2}) e^{\lambda t} $$

**How to find the generalized eigenvector $\mathbf{v_2}$:**
Instead of solving $(\mathbf{A} - \lambda\mathbf{I})\mathbf{v} = \mathbf{0}$, you set the equation equal to your *first* eigenvector $\mathbf{v_1}$:
$$ (\mathbf{A} - \lambda\mathbf{I})\mathbf{v_2} = \mathbf{v_1} $$

### Worked Example
**Problem:** Solve $\mathbf{X}' = \begin{bmatrix} 1 & -1 \\ 1 & 3 \end{bmatrix} \mathbf{X}$.

**Step 1:** Eigenvalues are $\lambda = 2, 2$ (Repeated).
**Step 2:** The single eigenvector for $\lambda=2$ is $\mathbf{v_1} = \begin{bmatrix} -1 \\ 1 \end{bmatrix}$. (Matrix is defective).
**Step 3:** Find generalized eigenvector $\mathbf{v_2}$:
$$ \begin{bmatrix} 1-2 & -1 \\ 1 & 3-2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} -1 \\ 1 \end{bmatrix} $$
$$ \begin{bmatrix} -1 & -1 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} -1 \\ 1 \end{bmatrix} $$
This gives $-x - y = -1 \implies x + y = 1$. Let $x=1, y=0$. Then $\mathbf{v_2} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.

**Step 4: Form General Solution**
$$ \mathbf{X}(t) = C_1 \begin{bmatrix} -1 \\ 1 \end{bmatrix} e^{2t} + C_2 \left( \begin{bmatrix} -1 \\ 1 \end{bmatrix} t + \begin{bmatrix} 1 \\ 0 \end{bmatrix} \right) e^{2t} $$
