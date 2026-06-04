# 6. Rank of a Matrix

When you perform Gaussian Elimination on a system of equations, strange things can happen. 

Sometimes, you might perform a row addition ($R_3 \rightarrow R_3 - 2R_1$) and completely annihilate an *entire row*. The entire row becomes `[0 0 0 | 0]`.

### Dependent Equations
Why does an entire row disappear into zeros? 
It means that the original equation was mathematically redundant. It contained absolutely no new information. For example, if Equation 1 is $x+y=5$, and Equation 2 is $2x+2y=10$, Equation 2 is just a scaled clone of Equation 1. It is a **Dependent Equation**. 

When Gaussian Elimination detects dependent equations, it ruthlessly zeroes them out and pushes them to the bottom of the matrix.

### The Definition of Rank
This brings us to one of the most important concepts in linear algebra: **Rank**.

The **Rank** of a matrix is the number of strictly non-zero rows remaining *after* the matrix has been fully reduced into Row Echelon Form. 
Equivalently, it is the number of **independent equations** in the system.

If a matrix starts with 5 equations, but 2 of them get wiped out into zeros during elimination, the matrix only has a Rank of 3.

$$ A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 0 & 0 \end{bmatrix} \implies \text{Rank}(A) = 2 $$

### Full Rank vs. Rank Deficient
If an $n \times n$ square coefficient matrix survives Gaussian elimination without a single row turning into zeros, it is said to have **Full Rank**. 

Having Full Rank is the ultimate mathematical green flag. It guarantees:
1. Every equation provides unique geometric information.
2. The determinant is strictly non-zero ($\det \neq 0$).
3. The matrix is non-singular and perfectly invertible.
4. The system has exactly one unique, intersecting solution point.

If the rank is less than $n$, the matrix is **Rank Deficient**. The determinant is zero, the matrix is singular, and the system is geometrically collapsed.
