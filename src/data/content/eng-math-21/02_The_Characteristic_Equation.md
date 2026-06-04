# 2. The Characteristic Equation

How do we actually find these magical $\lambda$ values hidden inside a matrix? We must algebraically manipulate the defining equation: $A\mathbf{x} = \lambda\mathbf{x}$.

Our goal is to get all the terms onto one side of the equation. But we face an immediate algebra problem. $A$ is a matrix, and $\lambda$ is a scalar number. You cannot subtract a scalar number from a matrix!

To fix this, we use the Identity Matrix $I$ (the matrix equivalent of the number 1). We can safely rewrite $\lambda\mathbf{x}$ as $\lambda I \mathbf{x}$.

$$
A\mathbf{x} = (\lambda I)\mathbf{x}
$$

Now both sides contain matrices, so we can subtract to move everything to the left side:
$$
A\mathbf{x} - (\lambda I)\mathbf{x} = \mathbf{0}
$$

We can factor out the common vector $\mathbf{x}$:
$$
(A - \lambda I)\mathbf{x} = \mathbf{0}
$$

### The Determinant Trap

Look closely at the equation we just derived: $(A - \lambda I)\mathbf{x} = \mathbf{0}$.
This is a standard Homogeneous System of equations. 

We know from Topic 19 that homogeneous systems always have the Trivial Solution ($\mathbf{x} = \mathbf{0}$). 
But remember our strict rule: **The zero vector is never allowed to be an eigenvector!** We need to find the Non-Trivial solutions.

When does a homogeneous system have non-trivial solutions? *If and only if the coefficient matrix is singular (has a determinant of exactly zero).*

Therefore, for eigenvectors to exist, we must force the determinant of that new matrix $(A - \lambda I)$ to be zero!

### The Characteristic Equation

This requirement gives us the most important formula in this entire topic. To find the eigenvalues $\lambda$ of a matrix $A$, you must solve the **Characteristic Equation**:

$$
\det(A - \lambda I) = 0
$$

The term $\det(A - \lambda I)$ is called the **Characteristic Polynomial**. 
For an $n \times n$ matrix, this will always yield an $n$-th degree algebraic polynomial. 
*   A $2 \times 2$ matrix yields a quadratic equation ($\lambda^2 + \dots = 0$), yielding up to 2 eigenvalues.
*   A $3 \times 3$ matrix yields a cubic equation ($\lambda^3 + \dots = 0$), yielding up to 3 eigenvalues.
*   An $n \times n$ matrix yields up to $n$ eigenvalues.
