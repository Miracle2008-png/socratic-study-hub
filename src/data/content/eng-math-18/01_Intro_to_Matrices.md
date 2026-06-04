# 1. Introduction to Matrices

In engineering, we rarely deal with single equations. We deal with massive systems of equations—sometimes millions of them at once. To handle this immense amount of data, mathematicians invented the **Matrix**.

A matrix is simply a rectangular array of numbers arranged in rows and columns. It is denoted by a capital letter (like $A$) and surrounded by square brackets.

$$ A = \begin{bmatrix} 2 & -5 & 3 \\ 0 & 8 & 1 \end{bmatrix} $$

### Dimensions (Size)
The size of a matrix is always given as **Rows $\times$ Columns**. 
Matrix $A$ above has 2 horizontal rows and 3 vertical columns. Therefore, it is a $2 \times 3$ matrix.
*(A helpful mnemonic is "RC Cola" $\rightarrow$ Rows then Columns).*

### Elements
Each individual number inside the matrix is called an **element** or an **entry**. 
We denote a specific element using a lowercase letter with two subscripts ($a_{ij}$), where $i$ is the row number and $j$ is the column number.
Looking at matrix $A$ above:
*   $a_{12} = -5$ (Row 1, Column 2)
*   $a_{23} = 1$ (Row 2, Column 3)

### Special Types of Matrices
1.  **Square Matrix:** Has the exact same number of rows and columns (e.g., $3 \times 3$). These are the most mathematically powerful matrices.
2.  **Row Vector:** A matrix with only 1 row (e.g., $1 \times 4$).
3.  **Column Vector:** A matrix with only 1 column (e.g., $3 \times 1$). In linear algebra, standard vectors $\mathbf{v}$ are almost always written as column vectors.
4.  **Zero Matrix ($O$ or $\mathbf{0}$):** A matrix of any size where every single element is the number zero. It acts like the number '0' in matrix algebra.
