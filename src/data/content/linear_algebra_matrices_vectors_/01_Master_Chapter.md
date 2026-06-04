# Linear Algebra: Matrices and Vectors

## 1. Vectors and Vector Spaces
A **vector** represents a quantity with both magnitude and direction. In $\mathbb{R}^n$, a vector is an $n$-tuple of real numbers.
- **Dot Product:** $\mathbf{u} \cdot \mathbf{v} = \sum_{i=1}^{n} u_i v_i = \|\mathbf{u}\|\|\mathbf{v}\|\cos\theta$
- **Cross Product (in $\mathbb{R}^3$):** Produces a vector orthogonal to both operands.

## 2. Matrices and Matrix Operations
An $m \times n$ matrix $A$ has $m$ rows and $n$ columns.
- **Addition:** Element-wise addition for matrices of the same dimensions.
- **Multiplication:** If $A$ is $m \times n$ and $B$ is $n \times p$, $C = AB$ is $m \times p$ with $c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}$.

## 3. Determinants and Inverses
The **determinant** of a square matrix $A$ (denoted $|A|$ or $\det(A)$) is a scalar that encodes volume scaling and invertibility.
- A matrix is invertible if and only if $\det(A) \neq 0$.
- The inverse $A^{-1}$ satisfies $AA^{-1} = A^{-1}A = I$.
- For a $2 \times 2$ matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, $A^{-1} = \frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.

## 4. Eigenvalues and Eigenvectors
For a square matrix $A$, a non-zero vector $\mathbf{v}$ is an eigenvector if applying $A$ only scales it:
$$ A\mathbf{v} = \lambda \mathbf{v} $$
The scalar $\lambda$ is the **eigenvalue**. Found by solving the characteristic equation: $\det(A - \lambda I) = 0$.

## 5. Step-by-Step Solved Examples

### Example 1: Matrix Multiplication
**Problem:** Calculate $AB$ where $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}$.
**Solution:**
1. Element $c_{11}$: $(1)(5) + (2)(7) = 5 + 14 = 19$.
2. Element $c_{12}$: $(1)(6) + (2)(8) = 6 + 16 = 22$.
3. Element $c_{21}$: $(3)(5) + (4)(7) = 15 + 28 = 43$.
4. Element $c_{22}$: $(3)(6) + (4)(8) = 18 + 32 = 50$.
Result: $AB = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}$.

### Example 2: Finding a Matrix Inverse
**Problem:** Find the inverse of $A = \begin{pmatrix} 3 & 7 \\ 2 & 5 \end{pmatrix}$.
**Solution:**
1. Calculate determinant: $\det(A) = (3)(5) - (7)(2) = 15 - 14 = 1$.
2. Apply $2 \times 2$ inverse formula: swap diagonal elements, negate off-diagonal elements, multiply by $1/\det(A)$.
3. $A^{-1} = \frac{1}{1} \begin{pmatrix} 5 & -7 \\ -2 & 3 \end{pmatrix} = \begin{pmatrix} 5 & -7 \\ -2 & 3 \end{pmatrix}$.

### Example 3: Finding Eigenvalues and Eigenvectors
**Problem:** Find the eigenvalues and eigenvectors of $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.
**Solution:**
1. Set up characteristic equation: $\det(A - \lambda I) = 0$.
   $$ \det \begin{pmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{pmatrix} = (4-\lambda)(3-\lambda) - 2 = 0 $$
2. Expand: $12 - 7\lambda + \lambda^2 - 2 = \lambda^2 - 7\lambda + 10 = 0$.
3. Factor: $(\lambda - 5)(\lambda - 2) = 0 \implies \lambda = 5, 2$.
4. Find eigenvector for $\lambda = 5$:
   $(A - 5I)\mathbf{v} = 0 \implies \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
   $-x + y = 0 \implies y = x$. The eigenvector is $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
5. Find eigenvector for $\lambda = 2$:
   $(A - 2I)\mathbf{v} = 0 \implies \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
   $2x + y = 0 \implies y = -2x$. The eigenvector is $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

### Example 4: Cross Product in $\mathbb{R}^3$
**Problem:** Find $\mathbf{u} \times \mathbf{v}$ for $\mathbf{u} = \langle 1, 2, 3 \rangle$ and $\mathbf{v} = \langle 4, 5, 6 \rangle$.
**Solution:**
1. Set up the determinant form:
   $$ \mathbf{u} \times \mathbf{v} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 2 & 3 \\ 4 & 5 & 6 \end{vmatrix} $$
2. Expand by cofactors along the first row:
   $\mathbf{i}(2\cdot6 - 3\cdot5) - \mathbf{j}(1\cdot6 - 3\cdot4) + \mathbf{k}(1\cdot5 - 2\cdot4)$
3. Simplify:
   $\mathbf{i}(12 - 15) - \mathbf{j}(6 - 12) + \mathbf{k}(5 - 8)$
   $-3\mathbf{i} + 6\mathbf{j} - 3\mathbf{k} = \langle -3, 6, -3 \rangle$.
