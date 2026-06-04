# 9. Minors and Cofactors

To perform advanced matrix operations (like division, which we will see on the next page), we need to formally define the pieces of the determinant calculation we used earlier.

### The Minor ($M_{ij}$)
Every single element $a_{ij}$ in a square matrix has a corresponding **Minor**, denoted $M_{ij}$.
To find the Minor $M_{ij}$:
1. Go to element $a_{ij}$ in the matrix.
2. Mentally delete its entire row $i$ and its entire column $j$.
3. You are left with a smaller sub-matrix. 
4. The Minor $M_{ij}$ is the determinant of that smaller sub-matrix.

For example, in a $3\times3$ matrix, to find $M_{12}$, you delete row 1 and column 2, leaving a $2\times2$ matrix. You calculate the $ad-bc$ determinant of that $2\times2$ matrix. That single number is $M_{12}$.

### The Cofactor ($C_{ij}$)
The **Cofactor** is simply the Minor, but with the alternating plus/minus sign applied to it!
Recall the checkerboard pattern:
$$ \begin{matrix} + & - & + \\ - & + & - \\ + & - & + \end{matrix} $$

Mathematically, the sign is determined by $(-1)^{i+j}$. 
If $i+j$ is even, the sign is positive. If $i+j$ is odd, the sign is negative.

Therefore, the formal definition of a Cofactor is:
$$ C_{ij} = (-1)^{i+j} M_{ij} $$

### Re-defining the Determinant
Using this new formal vocabulary, we can mathematically define the Determinant of an $n \times n$ matrix $A$.
If you choose to expand across the $i$-th row, the determinant is the sum of the elements in that row multiplied by their corresponding Cofactors:

$$ \det(A) = a_{i1}C_{i1} + a_{i2}C_{i2} + \dots + a_{in}C_{in} $$

This formula works for matrices of any size: $4\times4, 5\times5, 100\times100$. (Though for anything larger than $3\times3$, we use computers!)
