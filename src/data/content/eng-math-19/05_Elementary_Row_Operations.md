# 5. Elementary Row Operations in Detail

How do we actually perform Gaussian Elimination to drive a matrix into Row Echelon Form? We use three specific legal moves called **Elementary Row Operations**. 

Because each row in an Augmented Matrix represents an algebraic equation, these operations are mathematically identical to manipulating equations in high school algebra. They alter the numbers inside the matrix without changing the final geometric solution of the system.

### The Three Legal Operations

**1. Row Swapping ($R_i \leftrightarrow R_j$)**
You can swap the positions of any two rows. 
*Why it works:* Writing the equation $2x=4$ before the equation $3y=9$ does not change the fact that $x=2$ and $y=3$. The order of the equations in a system is irrelevant.

**2. Scalar Multiplication ($R_i \rightarrow k R_i$)**
You can multiply every number in a single row by any non-zero constant $k$. 
*Why it works:* If you have the equation $x + y = 5$, multiplying both sides by 2 gives $2x + 2y = 10$. It is the exact same line, just scaled up.

**3. Row Addition ($R_i \rightarrow R_i + k R_j$)**
This is the workhorse of Gaussian Elimination. You can multiply one row by a scalar $k$, and add the results to another row, replacing that second row.
*Why it works:* This is the classic "elimination" method from algebra. If $x + y = 5$ and $x - y = 1$, you can literally add the two equations vertically to get $2x + 0y = 6$. The $y$ is annihilated.

### The Annihilation Strategy (A Worked Example)
The overarching strategy is to use Row Addition to deliberately create zeros below the diagonal.
Suppose we have a pivot (leading entry) of $2$ in Row 1. Directly below it in Row 2 is the number $6$. We want to turn that $6$ into a $0$.

1. We need to turn the $2$ into a $-6$ so it will cancel out.
2. We multiply Row 1 by $-3$.
3. We add this modified Row 1 to Row 2, replacing Row 2.
4. The operation is written as: $R_2 \rightarrow R_2 - 3R_1$.

$$ \begin{bmatrix} \mathbf{2} & 3 & | & 8 \\ \mathbf{6} & 5 & | & 10 \end{bmatrix} \xrightarrow{R_2 - 3R_1} \begin{bmatrix} 2 & 3 & | & 8 \\ \mathbf{0} & -4 & | & -14 \end{bmatrix} $$

The $x$-variable in the second equation has been successfully eliminated! You repeat this algorithm, moving down the staircase, until the bottom-left triangle is completely filled with zeros.
