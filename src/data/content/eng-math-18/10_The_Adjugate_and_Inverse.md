# 10. The Adjugate and Inverse Matrices

In standard algebra, if you have the equation $3x = 12$, you solve for $x$ by dividing by 3 (or multiplying by $1/3$).
In matrix algebra, if you have $AX = B$, how do you divide by matrix $A$?

**You cannot divide by a matrix.** Division does not exist in linear algebra.
Instead, you must multiply by the **Inverse Matrix ($A^{-1}$)**.

If a matrix $A$ has an inverse, then multiplying them together yields the Identity Matrix:
$$ A A^{-1} = I \quad \text{and} \quad A^{-1} A = I $$

### How to Calculate the Inverse
For a tiny $2\times2$ matrix, the shortcut formula is:
$$ A = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \implies A^{-1} = \frac{1}{\det(A)} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix} $$
*(Swap the main diagonal, negate the anti-diagonal, divide by the determinant).*

For a $3\times3$ matrix (or larger), we use the formal Cofactor method:
1.  Calculate the Cofactor $C_{ij}$ for every single element in the matrix.
2.  Arrange these cofactors into a new matrix called the Cofactor Matrix.
3.  Transpose the Cofactor Matrix. This new transposed matrix is called the **Adjugate Matrix, $\text{adj}(A)$**.
4.  Divide the Adjugate Matrix by the determinant of $A$.

$$ A^{-1} = \frac{1}{\det(A)} \text{adj}(A) $$

### The Singular Trap
Look closely at the inverse formula: you must divide by $\det(A)$.
What happens if the determinant is zero? You get division by zero! The math explodes. 

This proves what we stated earlier: **If a matrix has a determinant of zero ($\det = 0$), it is a Singular Matrix and it DOES NOT have an inverse.** 
It is a flattened space that cannot be un-flattened.

### Solving Matrix Equations
If you want to solve $AX = B$, you multiply both sides by $A^{-1}$ **on the left**:
$$ A^{-1}(AX) = A^{-1}B $$
$$ (A^{-1}A)X = A^{-1}B $$
$$ IX = A^{-1}B $$
$$ X = A^{-1}B $$
You have successfully "divided" to solve for the unknown vector $X$!
