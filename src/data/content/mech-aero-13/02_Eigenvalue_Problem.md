# The Eigenvalue Problem in Structural Dynamics

The equation $\det([K] - \omega^2[M]) = 0$ is precisely the **generalized eigenvalue problem** from linear algebra. The natural frequencies squared ($\omega_i^2$) are the **eigenvalues**, and the mode shape vectors $\{X\}^{(i)}$ are the **eigenvectors**.

For a system with $n$ DOF, there are $n$ eigenvalues and $n$ eigenvectors. For large structures (thousands or millions of DOF in an FEA model), solving this problem efficiently is one of the great challenges of computational mechanics.

## 1. Standard Eigenvalue Form

The generalized eigenvalue problem $[K]\{X\} = \omega^2[M]\{X\}$ can be converted to standard form by pre-multiplying by $[M]^{-1}$:
$$[M]^{-1}[K]\{X\} = \omega^2\{X\}$$
$$[A]\{X\} = \lambda\{X\}, \quad \lambda = \omega^2$$

This is the classic eigenvalue problem. The eigenvalues $\lambda_i$ are the squares of the natural frequencies. The eigenvectors $\{X\}^{(i)}$ are the mode shapes.

## 2. Orthogonality of Mode Shapes

A fundamental and deeply important property: **mode shapes are orthogonal with respect to both the mass and stiffness matrices**.

For two distinct modes $i$ and $j$:
$$\{X\}^{(i)T}[M]\{X\}^{(j)} = 0 \quad (i \neq j)$$
$$\{X\}^{(i)T}[K]\{X\}^{(j)} = 0 \quad (i \neq j)$$

And for the same mode:
$$\{X\}^{(i)T}[M]\{X\}^{(i)} = M_i \quad \text{(modal mass)}$$
$$\{X\}^{(i)T}[K]\{X\}^{(i)} = K_i \quad \text{(modal stiffness)}$$

Where $\omega_i^2 = K_i/M_i$.

## 3. Modal Matrix

Assembling all $n$ mode shape vectors as columns gives the **modal matrix** $[\Phi]$:
$$[\Phi] = [\{X\}^{(1)} | \{X\}^{(2)} | \cdots | \{X\}^{(n)}]$$

Orthogonality in matrix form:
$$[\Phi]^T[M][\Phi] = [m_r] \quad \text{(diagonal modal mass matrix)}$$
$$[\Phi]^T[K][\Phi] = [k_r] \quad \text{(diagonal modal stiffness matrix)}$$

The diagonalization is the key to **modal analysis** — it completely decouples the $n$ coupled equations of motion into $n$ independent SDOF equations.

## 4. Numerical Methods for Large Systems

For large FEA models with millions of DOF, computing all eigenvalues is computationally prohibitive and unnecessary (usually only the first 20–100 modes are needed). Efficient iterative methods include:

- **Power Iteration**: Finds the dominant (largest) eigenvalue iteratively.
- **Inverse Iteration**: Modified power iteration to find the smallest eigenvalue (lowest natural frequency).
- **Lanczos Algorithm**: The standard method in modern FEA software (NASTRAN, ABAQUS, ANSYS). Reduces the full $n \times n$ matrix to a small tridiagonal matrix whose eigenvalues approximate the lowest modes.
- **Subspace Iteration**: Simultaneously iterates on a subspace to find multiple eigenvalues at once.
