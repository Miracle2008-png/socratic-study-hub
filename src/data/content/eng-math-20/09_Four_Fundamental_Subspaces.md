# 9. The Four Fundamental Subspaces

Every single matrix $A$ (of size $m \times n$) secretly contains four distinct, perfectly defined Subspaces hidden inside its numbers. These are called the **Four Fundamental Subspaces**. They govern exactly how the matrix behaves as a transformation.

### 1. The Column Space, $\text{Col}(A)$
The Column Space is the **Span of the columns** of $A$. 
If you treat each vertical column as a vector in $\mathbb{R}^m$, the Column Space is the entire geometric region you can reach by taking linear combinations of those columns.

**Why it matters:** The system $A\mathbf{x} = \mathbf{b}$ has a solution *if and only if* the target vector $\mathbf{b}$ lives inside the Column Space! If $\mathbf{b}$ is outside the span of the columns, the system is physically impossible to solve.

**How to find the Basis:** Perform Gaussian Elimination to find the Pivot Columns (the columns with leading 1s). The *original* columns in matrix $A$ that correspond to those pivot columns form the Basis for $\text{Col}(A)$.

### 2. The Null Space, $\text{Nul}(A)$
The Null Space is the set of all solutions to the homogeneous equation $A\mathbf{x} = \mathbf{0}$. It lives in $\mathbb{R}^n$.

**Why it matters:** It tells you exactly how much information the matrix destroys. If the Null Space is just the zero vector, the matrix perfectly preserves all information. If the Null Space is a 2D plane, it means the matrix takes entire planes of data and annihilates them into zero.

**How to find the Basis:** Put the matrix in RREF. Solve the homogeneous equations for the Free Variables. The resulting vectors attached to the free variables form the Basis for $\text{Nul}(A)$.

### 3. The Row Space, $\text{Row}(A)$
The Row Space is the Span of the *horizontal rows* of $A$. It lives in $\mathbb{R}^n$.
*(Note: This is mathematically identical to the Column Space of the transpose, $\text{Col}(A^T)$).*

**How to find the Basis:** Perform Gaussian Elimination. The non-zero rows that survive at the end of the elimination process form the Basis for the Row Space!

### 4. The Left Null Space, $\text{Nul}(A^T)$
The Left Null Space is the set of all solutions to the transposed homogeneous equation $A^T\mathbf{y} = \mathbf{0}$. It lives in $\mathbb{R}^m$.

These four spaces are deeply interconnected and form the absolute core of the Singular Value Decomposition (SVD), the most important algorithm in modern data compression.
