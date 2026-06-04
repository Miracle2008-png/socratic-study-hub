# 12. Concept Drills

Test your mastery of Matrix Operations & Determinants. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: Matrix $A$ is $4 \times 3$. Matrix $B$ is $3 \times 5$. What are the dimensions of the resulting matrix $C = AB$?
Options:
A) $4 \times 5$
B) $3 \times 3$
C) $12 \times 15$
D) The multiplication is undefined.
Answer: A
Explanation: Matrix multiplication is allowed if the inner dimensions match ($3$ and $3$). The dimensions of the resulting matrix are the outer dimensions: $4 \times 5$.
```

```drill
Question: You calculate the determinant of a $3\times3$ matrix representing a physical transformation and get $\det(A) = 0$. What does this imply about the matrix?
Options:
A) The matrix is the Identity Matrix.
B) The matrix is singular and does not have an inverse.
C) The matrix only contains zeros.
D) The transformation preserves 3D volume perfectly.
Answer: B
Explanation: A determinant of zero means the transformation squishes the 3D volume flat into 2D or 1D (zero volume). Because information is lost in the flattening, it is impossible to reverse the process. Therefore, the matrix is singular and has no inverse.
```

```drill
Question: If $A$ and $B$ are valid square matrices, which of the following algebraic statements is generally TRUE?
Options:
A) $AB = BA$
B) $(AB)^T = A^T B^T$
C) $A(B+C) = AB + AC$
D) If $AB = 0$, then either $A=0$ or $B=0$.
Answer: C
Explanation: Matrix multiplication is NOT commutative (so A is false). The transpose of a product requires reversing the order $(AB)^T = B^T A^T$ (so B is false). The zero divisor rule does not apply to matrices (so D is false). However, the standard distributive property (C) is perfectly valid for matrices.
```

```drill
Question: You are solving a $5\times5$ system of equations using Cramer's Rule to find the variable $x_3$. You calculate the main system determinant $D = 0$. What should you do next?
Options:
A) Calculate $D_3$ and divide by zero.
B) The system has no unique solution; Cramer's rule fails.
C) Use the Identity Matrix instead.
D) Expand using cofactors.
Answer: B
Explanation: Cramer's rule relies on dividing by the main determinant $D$ ($x_i = D_i / D$). If $D = 0$, the matrix is singular. The system of equations is either inconsistent (parallel lines, no solution) or dependent (overlapping lines, infinite solutions). In either case, a unique solution does not exist.
```
