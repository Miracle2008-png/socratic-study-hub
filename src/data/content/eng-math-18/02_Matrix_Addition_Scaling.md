# 2. Matrix Addition and Scalar Multiplication

Matrices follow very simple, intuitive rules for addition and scalar multiplication. 

### 1. Matrix Addition
To add or subtract two matrices, you simply add or subtract their corresponding elements.

**CRITICAL RULE:** You can ONLY add matrices if they have the exact same dimensions. You cannot add a $2\times 3$ matrix to a $2\times 2$ matrix. The operation is undefined.

**Example:**
$$ \begin{bmatrix} 1 & 5 \\ -2 & 0 \end{bmatrix} + \begin{bmatrix} 3 & -1 \\ 4 & 7 \end{bmatrix} = \begin{bmatrix} 1+3 & 5+(-1) \\ -2+4 & 0+7 \end{bmatrix} = \begin{bmatrix} 4 & 4 \\ 2 & 7 \end{bmatrix} $$

**Properties of Addition:**
Just like normal numbers, matrix addition is perfectly well-behaved:
*   **Commutative:** $A + B = B + A$
*   **Associative:** $(A + B) + C = A + (B + C)$

### 2. Scalar Multiplication
A "scalar" is just a normal, single number (like 5, -2, or $\pi$).
To multiply a matrix by a scalar, you distribute that scalar to every single element inside the matrix.

**Example:**
$$ 3 \begin{bmatrix} 2 & -1 \\ 0 & 4 \end{bmatrix} = \begin{bmatrix} 3(2) & 3(-1) \\ 3(0) & 3(4) \end{bmatrix} = \begin{bmatrix} 6 & -3 \\ 0 & 12 \end{bmatrix} $$

**Combining Operations:**
You can combine these operations to form linear combinations, just like in standard algebra.
For example, to calculate $2A - 3B$:
1. Multiply every element in $A$ by 2.
2. Multiply every element in $B$ by 3.
3. Subtract the resulting matrices element-by-element.
