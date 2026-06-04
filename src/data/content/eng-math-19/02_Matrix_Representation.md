# 2. Matrix Representation of Systems

Writing out the variables $x, y, z$ over and over again when dealing with dozens of equations is incredibly inefficient. Since the variables themselves never change their alphabetical names, the only information that actually matters mathematically are the **coefficients** (the numbers in front of the variables).

We can strip away all the alphabetical clutter by mapping the entire system into Matrix form.

### The Standard Matrix Equation ($AX = B$)
Consider the following standard system of three linear equations with three unknowns:
$$ \begin{aligned} 2x_1 + 3x_2 - 4x_3 &= 10 \\ x_1 - 2x_2 + 5x_3 &= -3 \\ -3x_1 + x_2 + 2x_3 &= 7 \end{aligned} $$

We can brutally separate this system into three distinct matrix components:
1.  **The Coefficient Matrix ($A$):** A square grid containing only the multipliers on the left side.
2.  **The Variable Vector ($X$):** A vertical column containing our unknown variables.
3.  **The Constant Vector ($B$):** A vertical column containing the answers on the right side of the equals sign.

This translates the massive system into the elegant matrix equation $AX = B$:
$$ \begin{bmatrix} 2 & 3 & -4 \\ 1 & -2 & 5 \\ -3 & 1 & 2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 10 \\ -3 \\ 7 \end{bmatrix} $$

If you were to manually perform the "Row by Column" matrix multiplication on the left side, you would perfectly recreate the original three algebraic equations!

### The Augmented Matrix
While $AX = B$ is mathematically beautiful, when we actually want to calculate the answer by hand (or program a computer to do it), writing the $X$ vector is still a waste of space.

Instead, we fuse the Coefficient Matrix $A$ and the Constant Vector $B$ together into a single, wider matrix called the **Augmented Matrix**. We typically draw a vertical line inside to represent the location of the equals signs.

$$ [A | B] = \begin{bmatrix} 2 & 3 & -4 & \big| & 10 \\ 1 & -2 & 5 & \big| & -3 \\ -3 & 1 & 2 & \big| & 7 \end{bmatrix} $$

This Augmented Matrix is the ultimate stripped-down data structure. It contains every single piece of mathematical information required to solve the physical problem, packed into the smallest possible space. For the rest of this topic, we will perform all our calculations directly on Augmented Matrices.
