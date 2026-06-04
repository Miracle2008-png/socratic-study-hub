# 5. Algebraic vs. Geometric Multiplicity

When we solve the Characteristic Equation $\det(A - \lambda I) = 0$, we find the roots of a polynomial. As we know from algebra, polynomials can have repeated roots!

For example, a $3 \times 3$ matrix might yield the characteristic polynomial:
$$
(\lambda - 5)^2 (\lambda + 2) = 0
$$
The roots are $\lambda = 5$ (repeated twice) and $\lambda = -2$.

We classify this repetition using two different types of "Multiplicity."

### 1. Algebraic Multiplicity (The Polynomial Count)
The Algebraic Multiplicity of an eigenvalue is simply the number of times it appears as a root in the characteristic polynomial.
In our example above:
*   The Algebraic Multiplicity of $\lambda = 5$ is **2**.
*   The Algebraic Multiplicity of $\lambda = -2$ is **1**.

### 2. Geometric Multiplicity (The Eigenvector Count)
Once you find an eigenvalue, you plug it into $(A - \lambda I)\mathbf{x} = \mathbf{0}$ to find its eigenvectors. The set of all valid eigenvectors for a specific $\lambda$ forms a subspace called the **Eigenspace**.

The Geometric Multiplicity of an eigenvalue is the **Dimension of its Eigenspace**. 
In simpler terms, it is the number of linearly independent eigenvectors you can find for that $\lambda$!

If you plug in $\lambda = 5$, and row reduction gives you *two* free variables, you will find *two* independent eigenvectors. The Geometric Multiplicity is 2. The Eigenspace is a flat 2D plane.

### The Multiplicity Inequality
There is a strict mathematical law governing the relationship between these two multiplicities:
$$
1 \le \text{Geometric Multiplicity} \le \text{Algebraic Multiplicity}
$$

1.  **The Minimum:** Geometric multiplicity is always at least 1. If $\lambda$ is a root, there is absolutely guaranteed to be at least one eigenvector.
2.  **The Maximum:** Geometric multiplicity can never exceed Algebraic multiplicity. If an eigenvalue only appears once in the polynomial, it can only produce one eigenvector.

### The Defective Matrix Trap
What happens if the Algebraic Multiplicity is 2, but when you do the row reduction, you only get 1 free variable? The Geometric Multiplicity is 1.

$$
\text{Geometric} < \text{Algebraic}
$$

When this happens, the matrix is "missing" an eigenvector! It does not have enough independent directions to span the full space. A matrix that suffers from this geometric shortage is called a **Defective Matrix**. As we will see on the next page, defective matrices break one of the most powerful algorithms in linear algebra: Diagonalization.
