# 3. Matrix Multiplication

Multiplying two matrices together ($A \times B$) is completely different from addition. You DO NOT just multiply the corresponding elements! 

Matrix multiplication is defined by taking the **Dot Product** of the rows of the first matrix with the columns of the second matrix.

### The Dimension Rule (The Inner/Outer Check)
You cannot multiply just any two matrices.
To multiply $A \times B$, the **number of columns in A must exactly match the number of rows in B.**

If $A$ is an $m \times \mathbf{n}$ matrix, and $B$ is an $\mathbf{n} \times p$ matrix:
1.  Because the inner numbers ($\mathbf{n}$) match, the multiplication is allowed.
2.  The size of the resulting matrix $C$ will be the outer numbers: $m \times p$.

*(Example: If you multiply a $2\times\mathbf{3}$ matrix by a $\mathbf{3}\times4$ matrix, the answer will be a $2\times4$ matrix).*

### How to Multiply (Row $\cdot$ Column)
Let's find the element $c_{12}$ (Row 1, Column 2) of the new matrix $C = AB$.
You must take the entire **1st Row of A** and take its dot product with the entire **2nd Column of B**.

**Example:**
$$ A = \begin{bmatrix} \mathbf{1} & \mathbf{2} \\ 3 & 4 \end{bmatrix} \quad B = \begin{bmatrix} 5 & \mathbf{6} \\ 7 & \mathbf{8} \end{bmatrix} $$

Let's find $c_{12}$ (Top Right element):
Row 1 of A is $\langle 1, 2 \rangle$. Column 2 of B is $\langle 6, 8 \rangle$.
Dot product: $(1 \times 6) + (2 \times 8) = 6 + 16 = \mathbf{22}$.

Let's find the rest of $C$:
*   $c_{11}$ (Row 1 $\cdot$ Col 1): $(1 \times 5) + (2 \times 7) = 5 + 14 = \mathbf{19}$
*   $c_{21}$ (Row 2 $\cdot$ Col 1): $(3 \times 5) + (4 \times 7) = 15 + 28 = \mathbf{43}$
*   $c_{22}$ (Row 2 $\cdot$ Col 2): $(3 \times 6) + (4 \times 8) = 18 + 32 = \mathbf{50}$

$$ C = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix} $$

This "row-by-column" sliding dot product is the engine that powers everything in computer graphics, 3D rotations, and machine learning neural networks!
