# 10. The Rank-Nullity Theorem

In Topic 19, we defined the **Rank** of a matrix as the number of non-zero rows surviving Gaussian Elimination.
With our new vocabulary of Vector Spaces, we can define Rank much more elegantly:

**The Rank of a matrix is exactly the Dimension of its Column Space.**
$$
\text{Rank}(A) = \dim(\text{Col}(A))
$$

Because the number of pivot columns is always exactly equal to the number of non-zero pivot rows, an incredible symmetry emerges: The dimension of the Column Space is always exactly equal to the dimension of the Row Space!

### The Nullity
Just as Rank measures the dimension of the Column Space, we need a term to measure the dimension of the Null Space. We call this the **Nullity**.
$$
\text{Nullity}(A) = \dim(\text{Nul}(A))
$$

Recall how we find the Null Space: we look for the **Free Variables** during row reduction. The number of free variables dictates how many basis vectors the Null Space will have. Therefore, the Nullity is exactly equal to the number of Free Variables!

### The Rank-Nullity Theorem
Consider an $m \times n$ matrix $A$. 
*   $n$ is the total number of columns.
*   Every single column must either be a **Pivot Column** or a **Free Variable Column**. There are no other options.
*   Number of Pivot Columns = Rank.
*   Number of Free Variable Columns = Nullity.

Therefore, if you add them together, they must perfectly equal the total number of columns $n$! This simple but profound realization is the **Rank-Nullity Theorem**:

$$
\text{Rank}(A) + \text{Nullity}(A) = n
$$

### Engineering Consequence
This theorem acts as a strict conservation law for information. 
Imagine a transformation acting on 5-dimensional data ($n=5$). 
If the matrix has a Rank of 3, it successfully maps 3 dimensions of data into the output. 
Because of the theorem ($3 + \text{Nullity} = 5$), the Nullity MUST be 2. 
This means exactly 2 dimensions of data were utterly destroyed and squashed into zero. 

You cannot arbitrarily increase the Rank of a system without simultaneously decreasing the Nullity. Information is strictly conserved!
