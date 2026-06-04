# 7. Basis of a Vector Space

We have discussed the Span (the total space you can build with a set of vectors) and Linear Independence (whether a set of vectors contains any redundant garbage). 

If we combine these two concepts, we arrive at the most important definition in vector geometry: **The Basis**.

A **Basis** for a Vector Space $V$ is an indexed set of vectors $\mathcal{B} = \{\mathbf{b_1}, \dots, \mathbf{b_p}\}$ that satisfies two strict conditions:

1.  **The Spanning Condition:** $\mathcal{B}$ must fully span the entire space $V$. (The set must be powerful enough to reach absolutely every point in the entire space).
2.  **The Independence Condition:** $\mathcal{B}$ must be a Linearly Independent set. (The set must contain zero redundant vectors).

In simple terms, a Basis is the **most efficient, bare-minimum set of vectors** required to build the entire vector space. It is a set that is large enough to span the space, but small enough to not have any useless overlap.

### The Standard Basis

The easiest example is the **Standard Basis** for $\mathbb{R}^3$.
We define the set as $E = \{\mathbf{e_1}, \mathbf{e_2}, \mathbf{e_3}\}$ where:
*   $\mathbf{e_1} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$
*   $\mathbf{e_2} = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}$
*   $\mathbf{e_3} = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}$

*(These are exactly the $\mathbf{i, j, k}$ vectors we used in physics!)*
These three vectors easily span all of 3D space, and none of them can be built from the other two (they point along completely separate $x,y,z$ axes). Therefore, they form a perfect Basis.

### There Are Infinite Bases

Is the Standard Basis the only way to build $\mathbb{R}^3$? Absolutely not. 
You can pick *any* three vectors in 3D space, and as long as they do not lie flat on the same plane (meaning they are linearly independent), they form a valid Basis. 

If you use a different basis, you are simply looking at the same 3D space through a tilted, distorted coordinate grid. This is heavily used in computer graphics to render 3D scenes from the tilted perspective of a moving camera!

### The Basis of a Polynomial Space
What is the standard basis for $P_2$ (the space of polynomials of degree 2 or less)?
The "vectors" that build every quadratic $ax^2 + bx + c$ are simply the polynomial terms themselves!
The standard basis is the set $\{ 1, x, x^2 \}$.
Every single quadratic in existence is just a linear combination of those three pure basis functions!
