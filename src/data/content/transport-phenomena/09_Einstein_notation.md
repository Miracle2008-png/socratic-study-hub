# Einstein notation

In mathematics, especially the usage of linear algebra in mathematical physics and differential geometry, Einstein notation (also known as the  Einstein summation convention or Einstein summation notation) is a notational convention that implies summation over a set of indexed terms in a formula, thus achieving brevity. As part of mathematics it is a notational subset of Ricci calculus; however, it is often used in physics applications that do not distinguish between tangent and cotangent spaces. It was introduced to physics by Albert Einstein in 1916.

## Vector representations

### Superscripts and subscripts versus only subscripts

In terms of covariance and contravariance of vectors,

upper indices represent components of contravariant vectors (vectors),

lower indices represent components of covariant vectors (covectors).

They transform contravariantly or covariantly, respectively, with respect to change of basis.

In recognition of this fact, the following notation uses the same symbol both for a vector or covector and its components, as in:

                v

                =
                  e
                    i
                  v
                    i
                =
                    [
                            e
                              1
                            e
                              2
                          ⋯
                            e
                              n
                    ]
                    [
                            v
                              1
                            v
                              2
                          ⋮
                            v
                              n
                    ]
                w

                =
                  w
                    i
                  e
                    i
                =
                    [
                            w
                              1
                            w
                              2
                          ⋯
                            w
                              n
                    ]
                    [
                            e
                              1
                            e
                              2
                          ⋮
                            e
                              n
                    ]

$$ {\begin{aligned}v=e_{i}v^{i}={\begin{bmatrix}e_{1}&e_{2}&\cdots &e_{n}\end{bmatrix}}{\begin{bmatrix}v^{1}\\v^{2}\\\vdots \\v^{n}\end{bmatrix}}\\w=w_{i}e^{i}={\begin{bmatrix}w_{1}&w_{2}&\cdots &w_{n}\end{bmatrix}}{\begin{bmatrix}e^{1}\\e^{2}\\\vdots \\e^{n}\end{bmatrix}}\end{aligned}} $$

where 
        v

$$ v $$

 is the vector and 
          v
            i

$$ v^{i} $$

 are its components (not the 
        i

$$ i $$

th covector 
        v

$$ v $$

), 
        w

$$ w $$

 is the covector and 
          w
            i

$$ w_{i} $$

 are its components. The basis vector elements 
          e
            i

$$ e_{i} $$

 are each column vectors, and the covector basis elements 
          e
            i

$$ e^{i} $$

 are each row covectors. (See also § Abstract description; duality, below and the examples)

In the presence of a non-degenerate form (an isomorphism 
        V

        →
          V
            ∗

$$ V\to V^{*} $$

, for instance a Riemannian metric or Minkowski metric), one can raise and lower indices.

A basis gives such a form (via the dual basis), hence when working on 
            R
            n

$$ \mathbb {R} ^{n} $$

 with a Euclidean metric and a fixed orthonormal basis, one has the option to work with only subscripts.

However, if one changes coordinates, the way that coefficients change depends on the variance of the object, and one cannot ignore the distinction; see Covariance and contravariance of vectors.

### Mnemonics

In the above example, vectors are represented as 
        n

        ×

        1

$$ n\times 1 $$

 matrices (column vectors), while covectors are represented as 
        1

        ×

        n

$$ 1\times n $$

 matrices (row covectors).

When using the column vector convention:

"Upper indices go up to down; lower indices go left to right."

"Covariant tensors are row vectors that have indices that are below (co-row-below)."

Covectors are row vectors: 
            [
                    w
                      1
                  ⋯
                    w
                      k
            ]
        .

$$ {\begin{bmatrix}w_{1}&\cdots &w_{k}\end{bmatrix}}. $$

 Hence the lower index indicates which column you are in.

Contravariant vectors are column vectors: 
            [
                    v
                      1
                  ⋮
                    v
                      k
            ]

$$ {\begin{bmatrix}v^{1}\\\vdots \\v^{k}\end{bmatrix}} $$

 Hence the upper index indicates which row you are in.

### Abstract description

The virtue of Einstein notation is that it represents the invariant quantities with a simple notation.

In physics, a scalar is invariant under transformations of basis. In particular, a Lorentz scalar is invariant under a Lorentz transformation. The individual terms in the sum are not. When the basis is changed, the components of a vector change by a linear transformation described by a matrix. This led Einstein to propose the convention that repeated indices imply the summation is to be done.

As for covectors, they change by the inverse matrix. This is designed to guarantee that the linear function associated with the covector, the sum above, is the same no matter what the basis is.

The value of the Einstein convention is that it applies to other vector spaces built from 
        V

$$ V $$

 using the tensor product and duality. For example, 
        V

        ⊗

        V

$$ V\otimes V $$

, the tensor product of 
        V

$$ V $$

with itself, has a basis consisting of tensors of the form 
            e
            i

            j
        =
            e
            i
        ⊗
            e
            j

$$ \mathbf {e} _{ij}=\mathbf {e} _{i}\otimes \mathbf {e} _{j} $$

. Any tensor 
          T

$$ \mathbf {T} $$

 in 
        V

        ⊗

        V

$$ V\otimes V $$

 can be written as:

          T
        =
          T
            i

            j
            e
            i

            j
        .

$$ \mathbf {T} =T^{ij}\mathbf {e} _{ij}. $$

The dual space 
          V
            ∗

$$ V^{*} $$

 of 
        V

$$ V $$

 has a basis 
            e
            1
        ,
            e
            2
        ,

        …

        ,
            e
            n

$$ \mathbf {e} ^{1},\mathbf {e} ^{2},\dots ,\mathbf {e} ^{n} $$

 which obeys the rule

            e
            i
        (
            e
            j
        )

        =
          δ
            j
            i
        .

$$ \mathbf {e} ^{i}(\mathbf {e} _{j})=\delta _{j}^{i}. $$

where 
        δ

$$ \delta $$

 is the Kronecker delta. As

        Hom

        ⁡

        (

        V

        ,

        W

        )

        =
          V
            ∗
        ⊗

        W

$$ \operatorname {Hom} (V,W)=V^{*}\otimes W $$

the row/column coordinates on a matrix correspond to the upper/lower indices on the tensor product.

## Common operations in this notation

In Einstein notation, the usual element reference 
          A
            m

            n

$$ A_{mn} $$

 for the 
        m

$$ m $$

-th row and 
        n

$$ n $$

-th column of matrix 
        A

$$ A $$

 becomes 
              A
                m
            n

$$ {A^{m}}_{n} $$

. We can then write the following operations in Einstein notation as follows.

### Inner product

The inner product of two vectors is the sum of the products of their corresponding components, with the indices of one vector lowered (see #Raising and lowering indices):

        ⟨
          u
        ,
          v
        ⟩

        =

        ⟨
            e
            i
        ,
            e
            j
        ⟩
          u
            i
          v
            j
        =
          u
            j
          v
            j

$$ \langle \mathbf {u} ,\mathbf {v} \rangle =\langle \mathbf {e} _{i},\mathbf {e} _{j}\rangle u^{i}v^{j}=u_{j}v^{j} $$

In the case of an orthonormal basis, we have 
          u
            j
        =
          u
            j

$$ u^{j}=u_{j} $$

, and the expression simplifies to:

        ⟨
          u
        ,
          v
        ⟩

        =
          ∑
            j
          u
            j
          v
            j
        =
          u
            j
          v
            j

$$ \langle \mathbf {u} ,\mathbf {v} \rangle =\sum _{j}u^{j}v^{j}=u_{j}v^{j} $$

### Vector cross product

In three dimensions, the cross product of two vectors with respect to a positively oriented orthonormal basis, meaning that 
            e
            1
        ×
            e
            2
        =
            e
            3

$$ \mathbf {e} _{1}\times \mathbf {e} _{2}=\mathbf {e} _{3} $$

, can be expressed as:

          u
        ×
          v
        =
          ε
            j

            k
            i
          u
            j
          v
            k
            e
            i

$$ \mathbf {u} \times \mathbf {v} =\varepsilon _{\,jk}^{i}u^{j}v^{k}\mathbf {e} _{i} $$

Here, 
          ε
            j

            k
            i
        =
          ε
            i

            j

            k

$$ \varepsilon _{\,jk}^{i}=\varepsilon _{ijk} $$

 is the Levi-Civita symbol. Since the basis is orthonormal, raising the index 
        i

$$ i $$

 does not alter the value of 
          ε
            i

            j

            k

$$ \varepsilon _{ijk} $$

, when treated as a tensor.

### Matrix-vector multiplication

The product of a matrix 
          A
            i

            j

$$ A_{ij} $$

 with a column vector 
          v
            j

$$ v_{j} $$

 is:

            u
            i
        =

        (
          A
          v
          )
            i
        =
          ∑
            j

            =

            1
            N
          A
            i

            j
          v
            j

$$ \mathbf {u} _{i}=(\mathbf {A} \mathbf {v} )_{i}=\sum _{j=1}^{N}A_{ij}v_{j} $$

equivalent to

          u
            i
        =
              A
                i
            j
          v
            j

$$ u^{i}={A^{i}}_{j}v^{j} $$

This is a special case of matrix multiplication.

### Matrix multiplication

The matrix product of two matrices 
          A
            i

            j

$$ A_{ij} $$

 and 
          B
            j

            k

$$ B_{jk} $$

 is:

            C
            i

            k
        =

        (
          A
          B
          )
            i

            k
        =
          ∑
            j

            =

            1
            N
          A
            i

            j
          B
            j

            k

$$ \mathbf {C} _{ik}=(\mathbf {A} \mathbf {B} )_{ik}=\sum _{j=1}^{N}A_{ij}B_{jk} $$

equivalent to

              C
                i
            k
        =
              A
                i
            j
              B
                j
            k

$$ {C^{i}}_{k}={A^{i}}_{j}{B^{j}}_{k} $$

### Trace

For a square matrix 
              A
                i
            j

$$ {A^{i}}_{j} $$

, the trace is the sum of the diagonal elements, hence the sum over a common index 
              A
                i
            i

$$ {A^{i}}_{i} $$

.

### Outer product

The outer product of the column vector 
          u
            i

$$ u^{i} $$

 by the row vector 
          v
            j

$$ v_{j} $$

 yields an 
        m

        ×

        n

$$ m\times n $$

 matrix 
          A

$$ \mathbf {A} $$

:

              A
                i
            j
        =
          u
            i
          v
            j
        =
            (

            u

            v
              )
                i
            j

$$ {A^{i}}_{j}=u^{i}v_{j}={(uv)^{i}}_{j} $$

Since 
        i

$$ i $$

 and 
        j

$$ j $$

 represent two different indices, there is no summation and the indices are not eliminated by the multiplication.

### Raising and lowering indices

Given a tensor, one can raise an index or lower an index by contracting the tensor with the metric tensor, 
          g
            μ

            ν

$$ g_{\mu \nu } $$

. For example, taking the tensor 
              T
                α
            β

$$ {T^{\alpha }}_{\beta } $$

, one can lower an index:

          g
            μ

            σ
              T
                σ
            β
        =
          T
            μ

            β

$$ g_{\mu \sigma }{T^{\sigma }}_{\beta }=T_{\mu \beta } $$

Or one can raise an index:

          g
            μ

            σ
              T
                σ
            α
        =
          T
            μ

            α

$$ g^{\mu \sigma }{T_{\sigma }}^{\alpha }=T^{\mu \alpha } $$
