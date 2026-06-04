# 4. Linear Combinations

The core machinery of linear algebra is built on one simple operation: mixing vectors together. 

If you are given a set of vectors $\{\mathbf{v_1}, \mathbf{v_2}, \dots, \mathbf{v_p}\}$, you can multiply each of them by a scalar weight ($c_1, c_2, \dots, c_p$) and then add all the pieces together.

The resulting vector $\mathbf{y}$ is called a **Linear Combination** of the original vectors.

### The Algebraic Definition
$$
\mathbf{y} = c_1\mathbf{v_1} + c_2\mathbf{v_2} + \dots + c_p\mathbf{v_p}
$$

The numbers $c_1, \dots, c_p$ are called the **weights** or the **coefficients**. 
*(Note: These weights can be zero! If you set all the weights to zero, the resulting linear combination is just the Zero Vector).*

### Geometric Interpretation in $\mathbb{R}^2$
Imagine you are given two base vectors on a flat map:
*   $\mathbf{v_1} = \langle 1, 0 \rangle$ (Take one step East)
*   $\mathbf{v_2} = \langle 0, 1 \rangle$ (Take one step North)

By choosing different scalar weights ($c_1, c_2$), you can build a linear combination to reach absolutely any point on the entire map!
*   To reach the point $(4, 3)$, the linear combination is:
    $$
    \mathbf{y} = 4\mathbf{v_1} + 3\mathbf{v_2}
    $$
*   To reach the point $(-2, 7)$, the linear combination is:
    $$
    \mathbf{y} = -2\mathbf{v_1} + 7\mathbf{v_2}
    $$

This proves that the standard $(x,y)$ coordinates we have used since high school are actually just the scalar weights of a linear combination of the standard basis vectors $\mathbf{i}$ and $\mathbf{j}$!

### The Fundamental Question
The most common problem you will face in this topic is: *Is vector $\mathbf{b}$ a linear combination of the vectors $\mathbf{v_1}, \mathbf{v_2}, \mathbf{v_3}$?*

This translates into the algebraic equation:
$$
c_1\mathbf{v_1} + c_2\mathbf{v_2} + c_3\mathbf{v_3} = \mathbf{b}
$$

Look closely at this equation. It is exactly a System of Linear Equations!
The vectors $\mathbf{v_1}, \mathbf{v_2}, \mathbf{v_3}$ form the columns of a Coefficient Matrix $A$. The unknown weights $c_1, c_2, c_3$ are the variables we need to solve for. The target vector $\mathbf{b}$ is the constant answer column.

To answer the question, you simply build the Augmented Matrix $[ \mathbf{v_1} \ \mathbf{v_2} \ \mathbf{v_3} \ | \ \mathbf{b} ]$ and use Gaussian Elimination to see if a consistent solution for the weights exists.
