# 7. The Rouché-Capelli Theorem

We established earlier that a linear system can only have one solution, no solutions, or infinitely many solutions. How do we mathematically prove which outcome will happen without actually fully solving the system?

We use the **Rouché-Capelli Theorem**, which relies entirely on checking the Rank of the matrices.

For any system $AX = B$ with $n$ unknown variables:
Let $\text{Rank}(A)$ be the rank of the pure coefficient matrix.
Let $\text{Rank}([A|B])$ be the rank of the entire augmented matrix (including the answer column).

### Case 1: Inconsistent (No Solution)
**Condition: $\text{Rank}(A) < \text{Rank}([A|B])$**

If the augmented matrix has a higher rank than the coefficient matrix, it means Gaussian Elimination produced a row that looks like this:
$$ \begin{bmatrix} 0 & 0 & 0 & \big| & 7 \end{bmatrix} $$
This translates to the equation $0x + 0y + 0z = 7$. Because zero can never equal seven, this is a mathematical contradiction. The system is physically impossible (e.g., parallel planes that never touch). There are **No Solutions**.

### Case 2: Consistent and Unique (One Solution)
**Condition: $\text{Rank}(A) = \text{Rank}([A|B]) = n$**

If the ranks are perfectly equal to each other, and they are also equal to the total number of unknown variables $n$, the system is perfectly determined. There are no contradictions, and no free variables. The planes intersect at exactly **One Unique Point**.

### Case 3: Consistent and Dependent (Infinite Solutions)
**Condition: $\text{Rank}(A) = \text{Rank}([A|B]) < n$**

If the ranks are equal, but they are *less* than the number of variables, it means we have more variables than independent equations. (e.g., 3 variables, but only 2 surviving equations). 
Because there are not enough equations to lock down every variable, at least one variable is allowed to roam completely free (a **Free Variable**). Because this free variable can be any real number from $-\infty$ to $\infty$, there are **Infinitely Many Solutions** forming a line or a plane of intersections.
