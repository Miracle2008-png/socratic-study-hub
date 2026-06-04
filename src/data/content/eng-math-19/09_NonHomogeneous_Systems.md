# 9. Non-Homogeneous Systems and General Solutions

If the Constant Vector $B$ contains any non-zero numbers, the system is **Non-Homogeneous** ($AX = B$).
Unlike Homogeneous systems, Non-Homogeneous systems are not guaranteed to have a solution. They can easily be inconsistent (parallel lines).

However, if a solution *does* exist, and the system has free variables (meaning infinite solutions), how do we mathematically write down an infinite number of answers? We use the **General Solution** format.

### The Structure of the General Solution
An incredible theorem in linear algebra states that the complete, infinite General Solution to *any* Non-Homogeneous system can be constructed by adding together two specific pieces:

$$ X_{\text{General}} = X_{\text{Particular}} + X_{\text{Homogeneous}} $$

1.  **The Particular Solution ($X_p$):** This is just one, single, specific point in space that happens to make the equation $AX = B$ true. It acts as an anchor point.
2.  **The Homogeneous Solution ($X_h$):** This is the entire Null Space we learned about on the previous page! It is the infinite set of vectors that solve $AX = \mathbf{0}$.

### Why does this work? (The Proof)
Suppose $X_p$ solves the non-homogeneous system ($A X_p = B$).
Suppose $X_h$ solves the homogeneous system ($A X_h = \mathbf{0}$).
If we add them together and plug them into the matrix $A$:
$$ A(X_p + X_h) = A X_p + A X_h $$
$$ = B + \mathbf{0} $$
$$ = B $$
The math holds perfectly! 

### Geometric Interpretation
The Homogeneous Solution ($X_h$) always forms a line or a plane that passes directly through the origin $(0,0,0)$. 
However, the system we are actually trying to solve ($AX = B$) might be a plane floating high up in the air at $z=10$. 

The Particular Solution ($X_p$) is simply a vector that points from the origin up to the floating plane. By adding $X_p + X_h$, we take the infinite homogeneous plane at the origin, and we physically slide it through space to the correct height! 

This concept of "General = Particular + Homogeneous" is not just for matrices. It is the exact same underlying logic used to solve non-homogeneous differential equations in Topic 13!
