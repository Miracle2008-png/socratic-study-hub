# 12. Concept Drills

Test your mastery of Eigenvalues and Eigenvectors. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: You find that a $3 \times 3$ matrix $A$ has exactly one eigenvalue: $\lambda = 0$. What can you conclude about this matrix?
Options:
A) The matrix is the Identity matrix.
B) The matrix is singular and its determinant is exactly zero.
C) The matrix is definitely defective (it does not have enough eigenvectors).
D) The transformation preserves 3D volume perfectly.
Answer: B
Explanation: The determinant of a matrix is equal to the product of its eigenvalues ($\lambda_1 \times \lambda_2 \times \lambda_3$). If even one eigenvalue is zero, the entire product is zero, meaning the determinant is zero. A determinant of zero means the matrix crushes space, is singular, and has no inverse.
```

```drill
Question: A matrix has a characteristic polynomial of $(\lambda - 4)^3 = 0$. You perform row reduction on $(A - 4I)$ and find that there is only 1 free variable. What is the Algebraic and Geometric multiplicity?
Options:
A) Algebraic = 3, Geometric = 3.
B) Algebraic = 1, Geometric = 3.
C) Algebraic = 3, Geometric = 1.
D) Algebraic = 1, Geometric = 1.
Answer: C
Explanation: The Algebraic Multiplicity is the number of times the root appears in the polynomial (the exponent is 3, so algebraic = 3). The Geometric Multiplicity is the dimension of the eigenspace, which is exactly the number of free variables you find (you found 1, so geometric = 1). Because $1 < 3$, this matrix is highly defective and cannot be diagonalized.
```

```drill
Question: You are handed a Symmetric matrix ($A = A^T$). Without doing any calculations, what mathematical "miracles" are you absolutely guaranteed?
Options:
A) The eigenvalues will be purely real numbers (no complex $i$).
B) The matrix will be perfectly diagonalizable.
C) The eigenvectors belonging to different eigenvalues will be perfectly perpendicular (orthogonal) to each other.
D) All of the above.
Answer: D
Explanation: Symmetric matrices are the most perfectly behaved matrices in linear algebra. The Spectral Theorem guarantees that they only produce real eigenvalues, they never suffer from geometric shortages (they are never defective), and their eigenspaces are perfectly orthogonal.
```

```drill
Question: You want to calculate $A^{100}$ for a massive simulation. You know the diagonalization of the matrix is $A = PDP^{-1}$. What is the most computationally efficient way to calculate this?
Options:
A) Multiply $A$ by itself 100 times in a massive loop.
B) Invert the matrix $A$, multiply by 100, then invert it back.
C) Use Cramer's Rule to find the determinant of $A^{100}$.
D) Calculate $P \cdot D^{100} \cdot P^{-1}$, where $D^{100}$ is found simply by raising the numbers on the diagonal to the 100th power.
Answer: D
Explanation: Due to the cascading cancellation of the inner $P^{-1}P$ matrices, $A^{100}$ simplifies beautifully to $P D^{100} P^{-1}$. Because $D$ is a diagonal matrix, raising it to a power requires zero matrix multiplication; you just raise the individual diagonal scalars to the 100th power, saving billions of computer operations.
```
