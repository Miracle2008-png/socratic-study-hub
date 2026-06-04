# 4. Properties of Matrix Operations

Because matrix multiplication involves taking rows from the first matrix and columns from the second, the order in which you multiply them fundamentally changes the math.

### The Loss of Commutativity
In standard algebra, $3 \times 4 = 4 \times 3$.
In matrix algebra, **$AB \neq BA$**. Matrix multiplication is NOT commutative!

In fact:
1.  $AB$ might give you a totally different matrix than $BA$.
2.  $AB$ might be possible to calculate, but $BA$ might be dimensionally impossible! (If A is $2\times3$ and B is $3\times4$, $AB$ works. But $BA$ is $3\times4$ times $2\times3$, which fails because $4 \neq 2$).

Whenever you multiply matrices, you must respect the order. You cannot arbitrarily swap them around to make an equation look nicer.

### What Does Work?
Fortunately, most other standard algebraic properties still hold true:

*   **Associative Property:** $A(BC) = (AB)C$
    (You can group the multiplications however you want, as long as you don't change the left-to-right order).
*   **Distributive Property (Left):** $A(B + C) = AB + AC$
*   **Distributive Property (Right):** $(B + C)A = BA + CA$
    *(Notice we explicitly define Left and Right distribution because $AB \neq BA$)*.

### The Zero Divisor Trap
In standard algebra, if $x \cdot y = 0$, you know for an absolute fact that either $x=0$ or $y=0$.
In matrix algebra, this is **FALSE**.
You can multiply two completely non-zero matrices together, and through the weird cancellations of the dot products, accidentally output a pure Zero Matrix!

$$ \begin{bmatrix} 1 & 1 \\ 2 & 2 \end{bmatrix} \begin{bmatrix} -1 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} $$

This tells us we must be incredibly careful. Just because $AB = \mathbf{0}$ does not mean $A$ or $B$ is zero.
