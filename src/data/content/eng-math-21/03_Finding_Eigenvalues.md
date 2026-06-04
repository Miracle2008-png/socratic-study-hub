# 3. Finding Eigenvalues (Worked Example)

Let's walk through the full algebraic process of finding the eigenvalues for a $2 \times 2$ matrix.

Consider the matrix:
$$
A = 
\begin{bmatrix}
2 & 3 \\
3 & -6
\end{bmatrix}
$$

### Step 1: Construct $(A - \lambda I)$
To build $(A - \lambda I)$, we simply take our matrix $A$ and subtract the variable $\lambda$ from every number on the main diagonal. The off-diagonal numbers do not change.

$$
A - \lambda I = 
\begin{bmatrix}
2 - \lambda & 3 \\
3 & -6 - \lambda
\end{bmatrix}
$$

### Step 2: Set the Determinant to Zero
We must force the determinant of this new matrix to be zero. For a $2 \times 2$ matrix, the determinant is $(ad - bc)$.

$$
\det(A - \lambda I) = (2 - \lambda)(-6 - \lambda) - (3)(3) = 0
$$

### Step 3: Expand the Polynomial
We FOIL the binomials and simplify to find the Characteristic Polynomial.

$$
(-12 - 2\lambda + 6\lambda + \lambda^2) - 9 = 0
$$
$$
\lambda^2 + 4\lambda - 21 = 0
$$

We have successfully generated a standard quadratic equation. 

### Step 4: Solve for $\lambda$
We solve the quadratic equation by factoring (or using the quadratic formula).

$$
(\lambda + 7)(\lambda - 3) = 0
$$

This gives us our two magical scalar multipliers:
$$
\lambda_1 = -7
$$
$$
\lambda_2 = 3
$$

These are the **Eigenvalues**. 
This tells us that somewhere hidden inside this 2D space, there is a specific vector that gets perfectly reversed and stretched by a factor of 7 ($\lambda=-7$). There is another specific vector that gets stretched by a factor of 3 ($\lambda=3$). 

On the next page, we will hunt down those exact physical vectors.
