# 4. Eigenvalues and Eigenvectors Review

To solve the differential equation $\mathbf{X}' = \mathbf{A}\mathbf{X}$, we must find the eigenvalues ($\lambda$) and eigenvectors ($\mathbf{v}$) of the matrix $\mathbf{A}$. Here is a quick review of how to calculate them.

### Finding Eigenvalues ($\lambda$)
We must solve the equation $\mathbf{A}\mathbf{v} = \lambda\mathbf{v}$.
Rearrange to bring everything to the left side:
$$ \mathbf{A}\mathbf{v} - \lambda\mathbf{I}\mathbf{v} = \mathbf{0} $$
$$ (\mathbf{A} - \lambda\mathbf{I})\mathbf{v} = \mathbf{0} $$
*(Where $\mathbf{I}$ is the identity matrix $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$. We need it so we can subtract a scalar from a matrix).*

For this equation to have a non-zero vector solution $\mathbf{v}$, the matrix $(\mathbf{A} - \lambda\mathbf{I})$ must be singular, meaning its determinant is exactly zero.

**The Characteristic Equation:**
$$ \det(\mathbf{A} - \lambda\mathbf{I}) = 0 $$

For a 2x2 matrix $\mathbf{A} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, the determinant expands to:
$$ \det \begin{bmatrix} a-\lambda & b \\ c & d-\lambda \end{bmatrix} = (a-\lambda)(d-\lambda) - (bc) = 0 $$
$$ \lambda^2 - (a+d)\lambda + (ad-bc) = 0 $$

This is a quadratic equation! Solving it gives the eigenvalues $\lambda_1$ and $\lambda_2$.

### Finding Eigenvectors ($\mathbf{v}$)
Once you have found an eigenvalue $\lambda$, plug it back into the equation $(\mathbf{A} - \lambda\mathbf{I})\mathbf{v} = \mathbf{0}$.
Let $\mathbf{v} = \begin{bmatrix} x \\ y \end{bmatrix}$.

1.  Subtract the specific eigenvalue $\lambda$ from the main diagonal of matrix $\mathbf{A}$.
2.  Multiply this new matrix by the vector $\begin{bmatrix} x \\ y \end{bmatrix}$ and set it equal to $\begin{bmatrix} 0 \\ 0 \end{bmatrix}$.
3.  This generates a system of two algebraic equations. They will always be redundant (parallel lines). Choose either equation, pick a simple integer value for $x$, and solve for $y$ to form your eigenvector $\mathbf{v}$.

### Worked Example
Find eigenvalues and eigenvectors for $\mathbf{A} = \begin{bmatrix} 4 & -2 \\ 1 & 1 \end{bmatrix}$.

**1. Eigenvalues:**
$\det \begin{bmatrix} 4-\lambda & -2 \\ 1 & 1-\lambda \end{bmatrix} = (4-\lambda)(1-\lambda) - (-2)(1) = 0$
$\lambda^2 - 5\lambda + 4 + 2 = 0 \implies \lambda^2 - 5\lambda + 6 = 0$
$(\lambda - 2)(\lambda - 3) = 0$.
The eigenvalues are **$\lambda_1 = 2$** and **$\lambda_2 = 3$**.

**2. Eigenvector for $\lambda_1 = 2$:**
Subtract 2 from the main diagonal:
$\begin{bmatrix} 4-2 & -2 \\ 1 & 1-2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 2 & -2 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$
This gives $2x - 2y = 0 \implies x = y$.
Let $x=1$, then $y=1$. The eigenvector is $\mathbf{v_1} = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$.

*(Repeat process for $\lambda_2 = 3$ to find $\mathbf{v_2} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$).*
