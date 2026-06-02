# Transpose

In linear algebra, transposition is an operation that flips a matrix over its diagonal; that is, transposition switches the row and column indices of the matrix A to produce another matrix, called the transpose of A and often denoted AT (among other notations). 
The transpose of a matrix was introduced in 1858 by the British mathematician Arthur Cayley. 

## Transpose of a matrix

### Definition

The transpose of a matrix A, denoted by AT, TA, Atr, tA or At, may be constructed by any of the following methods:

Reflect A over its main diagonal (which runs from the top left to the bottom right) to obtain AT
Write the rows of A as the columns of AT
Write the columns of A as the rows of AT
Formally, the ith row, jth column element of AT is the jth row, ith column element of A:

  
    
      
        
          
            [
            
              
                A
              
              
                T
              
            
            ]
          
          
            i
            j
          
        
        =
        
          
            [
            
              A
            
            ]
          
          
            j
            i
          
        
        .
      
    
    

$$ \left[\mathbf {A} ^{\text{T}}\right]_{ij}=\left[\mathbf {A} \right]_{ji}. $$

  

If A is an m × n matrix, then AT is an n × m matrix. 

#### Matrix definitions involving transposition

A square matrix whose transpose is equal to itself is called a symmetric matrix; that is, A is symmetric if

  
    
      
        
          
            A
          
          
            T
          
        
        =
        
          A
        
        .
      
    
    

$$ \mathbf {A} ^{\text{T}}=\mathbf {A} . $$

  

A square matrix whose transpose is equal to its negative is called a skew-symmetric matrix; that is, A is skew-symmetric if

  
    
      
        
          
            A
          
          
            T
          
        
        =
        −
        
          A
        
        .
      
    
    

$$ \mathbf {A} ^{\text{T}}=-\mathbf {A} . $$

  

A square complex matrix whose transpose is equal to the matrix with every entry replaced by its complex conjugate (denoted here with an overline) is called a Hermitian matrix (equivalent to the matrix being equal to its conjugate transpose); that is, A is Hermitian if

  
    
      
        
          
            A
          
          
            T
          
        
        =
        
          
            
              A
            
            ¯
          
        
        .
      
    
    

$$ \mathbf {A} ^{\text{T}}={\overline {\mathbf {A} }}. $$

  

A square complex matrix whose transpose is equal to the negation of its complex conjugate is called a skew-Hermitian matrix; that is, A is skew-Hermitian if

  
    
      
        
          
            A
          
          
            T
          
        
        =
        −
        
          
            
              A
            
            ¯
          
        
        .
      
    
    

$$ \mathbf {A} ^{\text{T}}=-{\overline {\mathbf {A} }}. $$

  

A square matrix whose transpose is equal to its inverse is called an orthogonal matrix; that is, A is orthogonal if

  
    
      
        
          
            A
          
          
            T
          
        
        =
        
          
            A
          
          
            −
            1
          
        
        .
      
    
    

$$ \mathbf {A} ^{\text{T}}=\mathbf {A} ^{-1}. $$

  

A square complex matrix whose transpose is equal to its conjugate inverse is called a unitary matrix; that is, A is unitary if

  
    
      
        
          
            A
          
          
            T
          
        
        =
        
          
            
              
                A
              
              
                −
                1
              
            
            ¯
          
        
        .
      
    
    

$$ \mathbf {A} ^{\text{T}}={\overline {\mathbf {A} ^{-1}}}. $$

  

### Examples

  
    
      
        
          
            
              [
              
                
                  
                    1
                  
                  
                    2
                  
                
              
              ]
            
          
          
            T
          
        
        =
        
        
          
            [
            
              
                
                  1
                
              
              
                
                  2
                
              
            
            ]
          
        
      
    
    

$$ {\begin{bmatrix}1&2\end{bmatrix}}^{\text{T}}=\,{\begin{bmatrix}1\\2\end{bmatrix}} $$

  

  
    
      
        
          
            
              [
              
                
                  
                    1
                  
                  
                    2
                  
                
                
                  
                    3
                  
                  
                    4
                  
                
              
              ]
            
          
          
            T
          
        
        =
        
          
            [
            
              
                
                  1
                
                
                  3
                
              
              
                
                  2
                
                
                  4
                
              
            
            ]
          
        
      
    
    

$$ {\begin{bmatrix}1&2\\3&4\end{bmatrix}}^{\text{T}}={\begin{bmatrix}1&3\\2&4\end{bmatrix}} $$

  

  
    
      
        
          
            
              [
              
                
                  
                    1
                  
                  
                    2
                  
                
                
                  
                    3
                  
                  
                    4
                  
                
                
                  
                    5
                  
                  
                    6
                  
                
              
              ]
            
          
          
            T
          
        
        =
        
          
            [
            
              
                
                  1
                
                
                  3
                
                
                  5
                
              
              
                
                  2
                
                
                  4
                
                
                  6
                
              
            
            ]
          
        
      
    
    

$$ {\begin{bmatrix}1&2\\3&4\\5&6\end{bmatrix}}^{\text{T}}={\begin{bmatrix}1&3&5\\2&4&6\end{bmatrix}} $$

  

### Properties

Let A and B be matrices and c be a scalar. 

  
    
      
        
          
            (
            
              
                A
              
              
                T
              
            
            )
          
          
            T
          
        
        =
        
          A
        
        .
      
    
    

$$ \left(\mathbf {A} ^{\text{T}}\right)^{\text{T}}=\mathbf {A} . $$

  

The operation of taking the transpose is an involution (self-inverse).

  
    
      
        
          
            (
            
              
                A
              
              +
              
                B
              
            
            )
          
          
            T
          
        
        =
        
          
            A
          
          
            T
          
        
        +
        
          
            B
          
          
            T
          
        
        .
      
    
    

$$ \left(\mathbf {A} +\mathbf {B} \right)^{\text{T}}=\mathbf {A} ^{\text{T}}+\mathbf {B} ^{\text{T}}. $$

  

The transpose respects addition.

  
    
      
        
          
            (
            
              c
              
                A
              
            
            )
          
          
            T
          
        
        =
        c
        (
        
          
            A
          
          
            T
          
        
        )
        .
      
    
    

$$ \left(c\mathbf {A} \right)^{\text{T}}=c(\mathbf {A} ^{\text{T}}). $$

  

The transpose of a scalar is the same scalar. Together with the preceding property, this implies that the transpose is a linear map from the space of m × n matrices to the space of the n × m matrices.

  
    
      
        
          
            (
            
              A
              B
            
            )
          
          
            T
          
        
        =
        
          
            B
          
          
            T
          
        
        
          
            A
          
          
            T
          
        
        .
      
    
    

$$ \left(\mathbf {AB} \right)^{\text{T}}=\mathbf {B} ^{\text{T}}\mathbf {A} ^{\text{T}}. $$

  

The order of the factors reverses. By induction, this result extends to the general case of multiple matrices, so
(A1A2...Ak−1Ak)T = AkTAk−1T…A2TA1T.

  
    
      
        det
        
          (
          
            
              A
            
            
              T
            
          
          )
        
        =
        det
        (
        
          A
        
        )
        .
      
    
    

$$ \det \left(\mathbf {A} ^{\text{T}}\right)=\det(\mathbf {A} ). $$

  

The determinant of a square matrix is the same as the determinant of its transpose.
The dot product of two column vectors a and b can be computed as the single entry of the matrix product
  
    
      
        
          a
        
        ⋅
        
          b
        
        =
        
          
            a
          
          
            T
          
        
        
          b
        
        .
      
    
    

$$ \mathbf {a} \cdot \mathbf {b} =\mathbf {a} ^{\text{T}}\mathbf {b} . $$

  

If A has only real entries, then ATA is a positive-semidefinite matrix.

  
    
      
        
          
            (
            
              
                A
              
              
                T
              
            
            )
          
          
            −
            1
          
        
        =
        
          
            (
            
              
                A
              
              
                −
                1
              
            
            )
          
          
            T
          
        
        .
      
    
    

$$ \left(\mathbf {A} ^{\text{T}}\right)^{-1}=\left(\mathbf {A} ^{-1}\right)^{\text{T}}. $$

  

The transpose of an invertible matrix is also invertible, and its inverse is the transpose of the inverse of the original matrix.The notation A−T is sometimes used to represent either of these equivalent expressions.
If A is a square matrix, then its eigenvalues are equal to the eigenvalues of its transpose, since they share the same characteristic polynomial. This can also be seen directly, see Eigenvalues of Transpose

  
    
      
        
          (
          
            
              A
            
            
              a
            
          
          )
        
        ⋅
        
          b
        
        =
        
          a
        
        ⋅
        
          (
          
            
              
                A
              
              
                T
              
            
            
              b
            
          
          )
        
      
    
    

$$ \left(\mathbf {A} \mathbf {a} \right)\cdot \mathbf {b} =\mathbf {a} \cdot \left(\mathbf {A} ^{\text{T}}\mathbf {b} \right) $$

  
 for two column vectors 
  
    
      
        
          a
        
        ,
        
          b
        
      
    
    

$$ \mathbf {a} ,\mathbf {b} $$

  
 and the standard dot product.
Over any field 
  
    
      
        k
      
    
    

$$ k $$

  
, a square matrix 
  
    
      
        
          A
        
      
    
    

$$ \mathbf {A} $$

  
 is similar to 
  
    
      
        
          
            A
          
          
            T
          
        
      
    
    

$$ \mathbf {A} ^{\text{T}} $$

  
.
This implies that 
  
    
      
        
          A
        
      
    
    

$$ \mathbf {A} $$

  
 and 
  
    
      
        
          
            A
          
          
            T
          
        
      
    
    

$$ \mathbf {A} ^{\text{T}} $$

  
 have the same invariant factors, which implies they share the same minimal polynomial, characteristic polynomial, and eigenvalues, among other properties.
A proof of this property uses the following two observations.
Let 
  
    
      
        
          A
        
      
    
    

$$ \mathbf {A} $$

  
 and 
  
    
      
        
          B
        
      
    
    

$$ \mathbf {B} $$

  
 be 
  
    
      
        n
        ×
        n
      
    
    

$$ n\times n $$

  
 matrices over some base field 
  
    
      
        k
      
    
    

$$ k $$

  
 and let 
  
    
      
        L
      
    
    

$$ L $$

  
 be a field extension of 
  
    
      
        k
      
    
    

$$ k $$

  
. If 
  
    
      
        
          A
        
      
    
    

$$ \mathbf {A} $$

  
 and 
  
    
      
        
          B
        
      
    
    

$$ \mathbf {B} $$

  
 are similar as matrices over 
  
    
      
        L
      
    
    

$$ L $$

  
, then they are similar over 
  
    
      
        k
      
    
    

$$ k $$

  
. In particular this applies when 
  
    
      
        L
      
    
    

$$ L $$

  
 is the algebraic closure of 
  
    
      
        k
      
    
    

$$ k $$

  
.
If 
  
    
      
        
          A
        
      
    
    

$$ \mathbf {A} $$

  
 is a matrix over an algebraically closed field in Jordan normal form with respect to some basis, then 
  
    
      
        
          A
        
      
    
    

$$ \mathbf {A} $$

  
 is similar to 
  
    
      
        
          
            A
          
          
            T
          
        
      
    
    

$$ \mathbf {A} ^{\text{T}} $$

  
. This further reduces to proving the same fact when 
  
    
      
        
          A
        
      
    
    

$$ \mathbf {A} $$

  
 is a single Jordan block, which is a straightforward exercise.

### Products

If A is an m × n matrix and AT is its transpose, then the result of matrix multiplication with these two matrices gives two square matrices: A AT is m × m and AT A is n × n. Furthermore, these products are symmetric matrices. Indeed, the matrix product A AT has entries that are the inner product of a row of A with a column of AT. But the columns of AT are the rows of A, so the entry corresponds to the inner product of two rows of A. If pij is the entry of the product, it is obtained from rows i and j in A. The entry pji is also obtained from these rows, thus pij = pji, and the product matrix (pij) is symmetric. Similarly, the product AT A is a symmetric matrix.
A quick proof of the symmetry of A AT results from the fact that it is its own transpose:

  
    
      
        
          
            (
            
              
                A
              
              
                
                  A
                
                
                  T
                
              
            
            )
          
          
            T
          
        
        =
        
          
            (
            
              
                A
              
              
                T
              
            
            )
          
          
            T
          
        
        
          
            A
          
          
            T
          
        
        =
        
          A
        
        
          
            A
          
          
            T
          
        
        .
      
    
    

$$ \left(\mathbf {A} \mathbf {A} ^{\text{T}}\right)^{\text{T}}=\left(\mathbf {A} ^{\text{T}}\right)^{\text{T}}\mathbf {A} ^{\text{T}}=\mathbf {A} \mathbf {A} ^{\text{T}}. $$

  

### Implementation of matrix transposition on computers

On a computer, one can often avoid explicitly transposing a matrix in memory by simply accessing the same data in a different order. For example, software libraries for linear algebra, such as BLAS, typically provide options to specify that certain matrices are to be interpreted in transposed order to avoid the necessity of data movement.
However, there remain a number of circumstances in which it is necessary or desirable to physically reorder a matrix in memory to its transposed ordering. For example, with a matrix stored in row-major order, the rows of the matrix are contiguous in memory and the columns are discontiguous. If repeated operations need to be performed on the columns, for example in a fast Fourier transform algorithm, transposing the matrix in memory (to make the columns contiguous) may improve performance by increasing memory locality.
Ideally, one might hope to transpose a matrix with minimal additional storage. This leads to the problem of transposing an n × m matrix in-place, with O(1) additional storage or at most storage much less than mn. For n ≠ m, this involves a complicated permutation of the data elements that is non-trivial to implement in-place. Therefore, efficient in-place matrix transposition has been the subject of numerous research publications in computer science, starting in the late 1950s, and several algorithms have been developed.

## Transposes of linear maps and bilinear forms

As the main use of matrices is to represent linear maps between finite-dimensional vector spaces, the transpose is an operation on matrices that may be seen as the representation of some operation on linear maps.
This leads to a much more general definition of the transpose that works on every linear map, even when linear maps cannot be represented by matrices (such as in the case of infinite dimensional vector spaces). In the finite dimensional case, the matrix representing the transpose of a linear map is the transpose of the matrix representing the linear map, independently of the basis choice.

### Transpose of a linear map

Let X# denote the algebraic dual space of an R-module X. 
Let X and Y be R-modules. 
If u : X → Y is a linear map, then its algebraic adjoint or dual, is the map u# : Y# → X# defined by f ↦ f ∘ u. 
The resulting functional u#(f) is called the pullback of f by u. 
The following relation characterizes the algebraic adjoint of u 

⟨u#(f), x⟩ = ⟨f, u(x)⟩ for all f ∈ Y# and x ∈ X
where ⟨•, •⟩ is the natural pairing (i.e. defined by ⟨h, z⟩ := h(z)). 
This definition also applies unchanged to left modules and to vector spaces.
The definition of the transpose may be seen to be independent of any bilinear form on the modules, unlike the adjoint (below).
The continuous dual space of a topological vector space (TVS) X is denoted by X′. 
If X and Y are TVSs then a linear map u : X → Y is weakly continuous if and only if u#(Y′) ⊆ X′, in which case we let tu : Y′ → X′ denote the restriction of u# to Y′. 
The map tu is called the transpose of u. 
If the matrix A describes a linear map with respect to bases of V and W, then the matrix AT describes the transpose of that linear map with respect to the dual bases.

### Transpose of a bilinear form

Every linear map to the dual space u : X → X# defines a bilinear form B : X × X → F, with the relation B(x, y) = u(x)(y). 
By defining the transpose of this bilinear form as the bilinear form tB defined by the transpose tu : X## → X# i.e. tB(y, x) = tu(Ψ(y))(x), we find that B(x, y) = tB(y, x). 
Here, Ψ is the natural homomorphism X → X## into the double dual.

### Adjoint

If the vector spaces X and Y have respectively nondegenerate bilinear forms BX and BY, a concept known as the adjoint, which is closely related to the transpose, may be defined:
If u : X → Y is a linear map between vector spaces X and Y, we define g as the adjoint of u if g : Y → X satisfies

  
    
      
        
          B
          
            X
          
        
        
          
            (
          
        
        x
        ,
        g
        (
        y
        )
        
          
            )
          
        
        =
        
          B
          
            Y
          
        
        
          
            (
          
        
        u
        (
        x
        )
        ,
        y
        
          
            )
          
        
      
    
    

$$ B_{X}{\big (}x,g(y){\big )}=B_{Y}{\big (}u(x),y{\big )} $$

  
 for all x ∈ X and y ∈ Y.
These bilinear forms define an isomorphism between X and X#, and between Y and Y#, resulting in an isomorphism between the transpose and adjoint of u. 
The matrix of the adjoint of a map is the transposed matrix only if the bases are orthonormal with respect to their bilinear forms. 
In this context, many authors however, use the term transpose to refer to the adjoint as defined here.
The adjoint allows us to consider whether g : Y → X is equal to u −1 : Y → X. 
In particular, this allows the orthogonal group over a vector space X with a quadratic form to be defined without reference to matrices (nor the components thereof) as the set of all linear maps X → X for which the adjoint equals the inverse.
Over a complex vector space, one often works with sesquilinear forms (conjugate-linear in one argument) instead of bilinear forms. 
The Hermitian adjoint of a map between such spaces is defined similarly, and the matrix of the Hermitian adjoint is given by the conjugate transpose matrix if the bases are orthonormal.