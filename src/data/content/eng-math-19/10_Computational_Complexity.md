# 10. Computational Complexity and Numerical Methods

In a theoretical math class, you learn three ways to solve $AX = B$:
1. Cramer's Rule (Determinants)
2. Matrix Inversion ($X = A^{-1}B$)
3. Gaussian Elimination (Row Reduction)

In real-world engineering, you might be simulating the airflow over a Boeing 777 wing. This requires solving a system of **10 million** equations with **10 million** variables. Which method do you program into the supercomputer?

We measure the efficiency of an algorithm by its **Computational Complexity**—specifically, how many multiplication and addition operations (FLOPS) it requires relative to the number of variables $n$.

### 1. Cramer's Rule is Catastrophic
To use Cramer's Rule for an $n \times n$ matrix, you must calculate $(n+1)$ determinants. 
Calculating a determinant by Cofactor Expansion is an $O(n!)$ factorial algorithm. 
For a tiny $20 \times 20$ matrix, Cramer's Rule requires roughly $20! \approx 2.4 \times 10^{18}$ multiplications. A modern supercomputer would take *years* to solve a 20-variable system this way. It is completely useless for software.

### 2. Matrix Inversion is Inefficient
Finding the inverse matrix is an $O(n^3)$ algorithm. However, even if you successfully find $A^{-1}$, you still have to perform an additional matrix multiplication with $B$. Furthermore, calculating the inverse often introduces severe floating-point rounding errors. It is rarely used in high-performance computing.

### 3. Gaussian Elimination is the Champion
Standard Gaussian Elimination is an $O(n^3/3)$ algorithm. It is vastly faster than calculating the inverse, and infinitely faster than Cramer's rule. 
For massive engineering simulations, supercomputers almost exclusively use advanced variations of Gaussian Elimination, most notably **LU Decomposition**. 

### LU Decomposition
Instead of putting the matrix in an Augmented bracket, LU Decomposition breaks the coefficient matrix $A$ into the product of two triangular matrices: $A = LU$.
*   **$L$ (Lower Triangular):** Contains zeros above the main diagonal.
*   **$U$ (Upper Triangular):** Contains zeros below the main diagonal (This is exactly the Row Echelon Form!).

Once $A$ is split into $LU$, solving the system requires only two lightning-fast sweeps of back-substitution. This algorithm is the engine inside modern finite element analysis (FEA) software.
