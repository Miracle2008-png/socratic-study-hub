# 5. Linear Independence vs. Dependence

If you are given a set of vectors to use as building blocks, you must ask a critical question: *Are all of these vectors actually useful, or are some of them redundant?*

### Linear Dependence (The Redundant Vectors)

An indexed set of vectors $\{\mathbf{v_1}, \mathbf{v_2}, \dots, \mathbf{v_p}\}$ is said to be **Linearly Dependent** if at least one of the vectors in the set can be created by mixing the other vectors together (a linear combination).

For example, suppose we have a set of three vectors in $\mathbb{R}^3$:
*   $\mathbf{v_1} = \langle 1, 0, 0 \rangle$
*   $\mathbf{v_2} = \langle 0, 1, 0 \rangle$
*   $\mathbf{v_3} = \langle 2, 3, 0 \rangle$

Notice that $\mathbf{v_3}$ is simply $2\mathbf{v_1} + 3\mathbf{v_2}$. 
Because $\mathbf{v_3}$ brings absolutely zero new geometric information to the table—it just points in a direction we could already reach using the first two vectors—the entire set is Linearly Dependent.

### Linear Independence (The Essential Vectors)

A set of vectors is **Linearly Independent** if no vector in the set can be written as a combination of the others. Every single vector provides a completely unique direction that the others cannot access.

The formal mathematical definition relies on the Homogeneous equation ($A\mathbf{x} = \mathbf{0}$).
A set is Linearly Independent *if and only if* the vector equation:
$$
c_1\mathbf{v_1} + c_2\mathbf{v_2} + \dots + c_p\mathbf{v_p} = \mathbf{0}
$$
has **only the trivial solution** ($c_1=0, c_2=0, \dots, c_p=0$).

If there is any other way to mix the vectors and get back to the origin (a non-trivial solution), the set is Linearly Dependent.

### 3 Quick Rules for Dependence

You can often spot Linearly Dependent sets instantly without doing any math:

1.  **Too Many Vectors:** If a set contains more vectors than there are entries in each vector (e.g., 4 vectors floating in 3D space ($\mathbb{R}^3$)), the set is mathematically guaranteed to be Dependent. There isn't enough space for 4 unique directions in 3 dimensions!
2.  **The Zero Vector:** If a set contains the zero vector ($\mathbf{0}$), it is automatically Linearly Dependent. The zero vector brings no directional information to the set.
3.  **Two Vectors:** If a set contains only two vectors, it is Linearly Dependent *if and only if* one vector is an exact scalar multiple of the other (they are parallel).
