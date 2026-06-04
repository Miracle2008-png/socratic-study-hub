# 8. Properties of Determinants

Determinants have very specific algebraic properties. Knowing these can often let you evaluate a determinant instantly without doing any tedious multiplication!

### 1. The Multiplicative Property
The determinant of a product is the product of the determinants:
$$ \det(AB) = \det(A) \cdot \det(B) $$

### 2. The Transpose Property
Transposing a matrix does not change its volume or area. Therefore, it does not change the determinant.
$$ \det(A^T) = \det(A) $$

### 3. Row Operations and Determinants
In linear algebra, we frequently manipulate matrices by swapping rows, multiplying rows by numbers, or adding rows together. How does this affect the determinant?

*   **Swapping Rows:** If you swap any two rows, the determinant flips its sign (gets multiplied by -1).
*   **Scalar Multiplication:** If you multiply a single row by a constant $k$, the determinant is multiplied by $k$.
    *(Warning: If you multiply the ENTIRE $n\times n$ matrix by $k$, the determinant is multiplied by $k^n$!)*
*   **Adding Rows:** If you add a multiple of one row to another row, the determinant **does not change at all**.

### Instant Zeros (Singular Matrices)
Based on these properties, we can instantly spot matrices that have a determinant of zero ($\det = 0$):

1.  **A row of zeros:** If an entire row (or column) is zeros, expanding across it yields $0+0+0 = 0$.
2.  **Identical rows:** If two rows are exactly the same, swapping them would multiply the determinant by -1. But swapping identical rows doesn't change the matrix. What number is equal to its own negative? Only 0.
3.  **Proportional rows:** If Row 2 is exactly exactly 3 times Row 1, the matrix is squished and the determinant is 0. 

If you notice any of these properties, you can skip the calculation and instantly write down "0".
