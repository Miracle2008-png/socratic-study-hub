import sys

filepath = 'src/data/mathContentExt.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if "'Linear algebra (matrices, vectors)': `" in line:
        start_idx = i
    if "'Real analysis': `" in line:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    replacement = """  'Linear algebra (matrices, vectors)': `
# Advanced Linear Algebra: Vector Spaces, Transformations & Eigenvalues

## 1. Vector Spaces & Subspaces

A **vector space** $V$ over a field $F$ (usually the real numbers $\\mathbb{R}$ or complex numbers $\\mathbb{C}$) is a set of objects called *vectors* that can be added together and multiplied by scalars, obeying 8 fundamental axioms (commutativity, associativity, distributive properties, etc.).

A **subspace** $W$ is a subset of $V$ that is itself a valid vector space. To prove $W$ is a subspace, you only need to show it is closed under linear combinations:
For any vectors $\\vec{u}, \\vec{v} \\in W$ and scalars $c, d \\in F$, the vector $c\\vec{u} + d\\vec{v}$ must also be in $W$.

### Basis and Dimension
* A set of vectors is **linearly independent** if no vector in the set can be written as a linear combination of the others.
* A set of vectors **spans** $V$ if every vector in $V$ can be built using a linear combination of that set.
* A **basis** is a set of vectors that is *both* linearly independent and spans $V$.
* The **dimension** of $V$, denoted $\\dim(V)$, is the number of vectors in its basis.

## 2. Linear Transformations

A function $T: V \\to W$ between two vector spaces is a **linear transformation** if it perfectly preserves the structure of the space:
$$ T(\\vec{u} + \\vec{v}) = T(\\vec{u}) + T(\\vec{v}) $$
$$ T(c\\vec{u}) = cT(\\vec{u}) $$

Every linear transformation between finite-dimensional vector spaces can be represented as a **matrix** multiplication!
If we choose a basis for $V$ and a basis for $W$, $T$ can be encoded as a matrix $A$, such that $T(\\vec{x}) = A\\vec{x}$.

## 3. Four Fundamental Subspaces

For any $m \\times n$ matrix $A$, there are four fundamental subspaces that completely describe its geometry:

1. **Column Space $C(A)$**: The space spanned by the columns of $A$. It lives in $\\mathbb{R}^m$. Its dimension is the rank $r$.
2. **Null Space $N(A)$**: The set of all vectors $\\vec{x}$ such that $A\\vec{x} = \\vec{0}$. It lives in $\\mathbb{R}^n$. Its dimension is $n - r$.
3. **Row Space $C(A^T)$**: The space spanned by the rows of $A$. It lives in $\\mathbb{R}^n$. Its dimension is $r$.
4. **Left Null Space $N(A^T)$**: The set of all vectors $\\vec{y}$ such that $A^T\\vec{y} = \\vec{0}$. It lives in $\\mathbb{R}^m$. Its dimension is $m - r$.

### The Rank-Nullity Theorem
One of the most beautiful theorems in mathematics connects the dimensions of the Column Space and the Null Space:
$$ \\dim(C(A)) + \\dim(N(A)) = n $$
$$ \\text{Rank} + \\text{Nullity} = \\text{Number of columns} $$

## 4. Eigenvalues and Eigenvectors

When a matrix $A$ multiplies a vector $\\vec{x}$, it usually rotates and stretches it in a complicated way. But for certain special vectors, $A$ acts merely as a scalar multiplier! These are **eigenvectors**.

If $A$ is an $n \\times n$ square matrix, a non-zero vector $\\vec{v}$ is an eigenvector if:
$$ A\\vec{v} = \\lambda\\vec{v} $$
where the scalar $\\lambda$ is the corresponding **eigenvalue**.

### How to Find Them:
1. Rearrange the equation: $(A - \\lambda I)\\vec{v} = \\vec{0}$.
2. For this to have a non-zero solution $\\vec{v}$, the matrix $(A - \\lambda I)$ must be non-invertible (singular).
3. This means its determinant must be zero: **$\\det(A - \\lambda I) = 0$**.
4. This gives the **characteristic polynomial**, whose roots are the eigenvalues $\\lambda$.
5. Plug each $\\lambda$ back into $(A - \\lambda I)\\vec{v} = \\vec{0}$ to find the eigenvectors $\\vec{v}$.

## 5. Diagonalization

If an $n \\times n$ matrix $A$ has $n$ linearly independent eigenvectors, we can arrange them as columns in a matrix $P$. 
By placing the corresponding eigenvalues on the diagonal of a matrix $D$, we achieve **diagonalization**:
$$ A = PDP^{-1} $$

This is incredibly powerful for calculating large matrix powers. For example, $A^{100} = (PDP^{-1})^{100} = PD^{100}P^{-1}$. Since $D$ is diagonal, $D^{100}$ is trivial to compute (just raise the diagonal entries to the 100th power)!

## 6. Insane Level: The Spectral Theorem & SVD

What if a matrix is not square, or doesn't have enough eigenvectors to be diagonalized? We turn to the ultimate tools of advanced linear algebra.

### The Spectral Theorem for Symmetric Matrices
If $A$ is a real, symmetric matrix ($A = A^T$), the Spectral Theorem guarantees three incredible facts:
1. All its eigenvalues are strictly real (no complex numbers).
2. It has a full set of $n$ orthogonal eigenvectors.
3. It can be unitarily diagonalized: $A = Q \\Lambda Q^T$, where $Q$ is an orthogonal matrix ($Q^{-1} = Q^T$).

### Singular Value Decomposition (SVD)
SVD is the crown jewel of linear algebra. It generalizes diagonalization to **any** $m \\times n$ matrix $A$.
Every matrix $A$ can be decomposed into:
$$ A = U \\Sigma V^T $$
* $U$ is an $m \\times m$ orthogonal matrix (its columns are the eigenvectors of $AA^T$).
* $V$ is an $n \\times n$ orthogonal matrix (its columns are the eigenvectors of $A^TA$).
* $\\Sigma$ is an $m \\times n$ diagonal matrix containing the **singular values** (the square roots of the non-zero eigenvalues of $A^TA$).

SVD is the mathematical engine behind modern data science, PCA (Principal Component Analysis), image compression, and recommendation algorithms!
`,
"""
    lines = lines[:start_idx] + [replacement] + lines[end_idx:]
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("Replaced Linear Algebra successfully.")
else:
    print(f"Failed to find bounds. start={start_idx}, end={end_idx}")
