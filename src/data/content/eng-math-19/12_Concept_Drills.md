# 12. Concept Drills

Test your mastery of Systems of Linear Equations. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: You perform Gaussian elimination on a system of 3 equations with 3 variables ($x, y, z$). The final row of your augmented matrix reads `[0 0 0 | 5]`. What does this geometrically mean about the three planes?
Options:
A) The planes intersect at a single point where z=5.
B) The planes intersect along an infinite line.
C) The planes do not share a common intersection point; the system is inconsistent.
D) The system has infinitely many solutions.
Answer: C
Explanation: The row `[0 0 0 | 5]` translates to the algebraic equation $0x + 0y + 0z = 5$, which simplifies to $0 = 5$. This is a mathematical contradiction. Geometrically, this means at least two of the planes are strictly parallel, or they form a hollow triangular prism. There is no solution.
```

```drill
Question: A system of linear equations is Homogeneous ($AX = \mathbf{0}$). You determine that the coefficient matrix $A$ has Full Rank ($\det(A) \neq 0$). What is the complete solution to this system?
Options:
A) The system is inconsistent; there is no solution.
B) The system has infinitely many non-trivial solutions (a Null Space).
C) The only solution is the Trivial Solution ($x=0, y=0, z=0$).
D) You cannot determine the solution without knowing the size of the matrix.
Answer: C
Explanation: Because the matrix has full rank, we know the system must have exactly one unique solution. Because it is homogeneous, we know the Trivial Solution ($0,0,0$) is always mathematically valid. Since there can only be one solution, the Trivial Solution must be the ONLY solution.
```

```drill
Question: What is the primary difference between standard Gaussian Elimination and Gauss-Jordan Elimination?
Options:
A) Gauss-Jordan requires dividing by the determinant.
B) Gauss-Jordan only works for homogeneous systems.
C) Gaussian elimination puts the matrix in Reduced Row Echelon Form (RREF), creating the identity matrix.
D) Gauss-Jordan puts the matrix in Reduced Row Echelon Form (RREF), completely eliminating the need for back-substitution.
Answer: D
Explanation: Standard Gaussian Elimination puts the matrix in Row Echelon Form (a triangle of zeros), which still requires manual algebra (back-substitution) to solve. Gauss-Jordan Elimination goes further, eliminating numbers above the diagonal to create the Identity Matrix (RREF), which directly yields the final answers.
```

```drill
Question: You are designing structural analysis software for an architecture firm. Which algorithm should you implement to solve a system of 5,000 linear equations?
Options:
A) Cramer's Rule (Determinants)
B) Direct Matrix Inversion
C) LU Decomposition (Gaussian Elimination)
D) Cofactor Expansion
Answer: C
Explanation: Cramer's rule and Cofactor expansion are factorial $O(n!)$ algorithms that are physically impossible for computers to solve for large matrices. Matrix inversion is slow and introduces floating point errors. LU Decomposition (an optimized form of Gaussian Elimination) is an $O(n^3)$ algorithm and is the industry standard for high-performance computing.
```
