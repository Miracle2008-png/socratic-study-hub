# 3. Subspaces

A **Subspace** ($H$) is a smaller, self-contained Vector Space nested entirely inside a larger Vector Space ($V$). 

For example, $\mathbb{R}^3$ (all 3D space) is a massive Vector Space. 
Imagine a flat, infinite 2D plane cutting straight through the origin $(0,0,0)$ of that 3D space. 
*   If you add two vectors that lie flat on that plane, the resulting vector still lies flat on that plane. 
*   If you stretch a vector on that plane, it stays on the plane. 

This plane is a complete, perfectly functioning Vector Space in its own right, just trapped inside a larger one. It is a Subspace.

### The 3-Step Subspace Test

Proving that a collection of objects is a Vector Space requires checking all 10 Axioms, which is exhausting.

However, if you already know that the objects live inside a larger, verified Vector Space (like $\mathbb{R}^n$ or $M_{2\times2}$), 8 of the 10 axioms are automatically inherited for free! 
To prove that a subset $H$ is officially a Subspace, you only need to verify **three strict conditions**:

1.  **The Zero Vector:** 
    The subset $H$ must absolutely contain the zero vector ($\mathbf{0}$). 
    *(Geometric translation: The plane or line must pass perfectly through the origin. If it is shifted away from the origin, it is immediately disqualified and is NOT a subspace).*
2.  **Closure under Addition:** 
    If you take two vectors $\mathbf{u}$ and $\mathbf{v}$ from $H$, their sum $\mathbf{u} + \mathbf{v}$ must still be inside $H$.
3.  **Closure under Scalar Multiplication:** 
    If you take a vector $\mathbf{u}$ from $H$ and multiply it by any real number $c$, the scaled vector $c\mathbf{u}$ must still be inside $H$.

### Example: A Line in 3D
Let $H$ be the set of all vectors on the line defined by:
$$
\mathbf{v} = 
\begin{bmatrix}
t \\
2t \\
3t
\end{bmatrix}
$$
where $t$ is any real scalar.

*Test 1:* If we set $t=0$, we get the vector $\langle 0, 0, 0 \rangle$. The zero vector is inside $H$. (Pass)
*Test 2:* Let $\mathbf{u} = \langle t_1, 2t_1, 3t_1 \rangle$ and $\mathbf{v} = \langle t_2, 2t_2, 3t_2 \rangle$.
$$
\mathbf{u} + \mathbf{v} = 
\begin{bmatrix}
t_1 + t_2 \\
2(t_1 + t_2) \\
3(t_1 + t_2)
\end{bmatrix}
$$
This perfectly matches the required structural format. (Pass)
*Test 3:* Multiply $\mathbf{u}$ by scalar $c$:
$$
c\mathbf{u} = 
\begin{bmatrix}
c t_1 \\
2(c t_1) \\
3(c t_1)
\end{bmatrix}
$$
This also perfectly matches the structural format. (Pass).

Therefore, this line is officially a Subspace of $\mathbb{R}^3$!
