# 8. Dimension of a Vector Space

Because there are infinitely many ways to choose a basis for a vector space, we might worry that things could get chaotic. What if one basis has 3 vectors, but someone else finds a different basis for the same space that has 5 vectors?

Thankfully, linear algebra is protected by a profound mathematical law:
**If a vector space $V$ has a basis of $n$ vectors, then *every single valid basis* for $V$ must consist of exactly $n$ vectors.**

Because this number $n$ is an intrinsic, unchangeable property of the space itself, we give it a name. It is the **Dimension** of the vector space, denoted $\dim(V)$.

### Examples of Dimension

1.  **$\mathbb{R}^n$ (Standard Space):**
    The dimension of $\mathbb{R}^2$ is 2. The dimension of $\mathbb{R}^{10}$ is 10. The dimension tells you exactly how many vectors you need to form a basis.

2.  **$P_n$ (Polynomial Space):**
    What is the dimension of $P_2$ (all quadratics $ax^2+bx+c$)?
    Recall from the previous page that the standard basis is $\{ 1, x, x^2 \}$.
    Count the vectors in that set. There are 3 vectors. 
    Therefore, the dimension of $P_2$ is **3**!
    The general rule is $\dim(P_n) = n + 1$.

3.  **$M_{2\times2}$ (Matrix Space):**
    What is the dimension of the space of all $2\times2$ matrices?
    To build any matrix $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$, you need four independent basis matrices:
    $$
    \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}, 
    \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, 
    \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix}, 
    \begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix}
    $$
    Because there are 4 basis elements, the dimension of $M_{2\times2}$ is **4**.

### Geometric Dimension of Subspaces
When we look at subspaces floating inside $\mathbb{R}^3$, the algebraic dimension perfectly matches our physical intuition:

*   **Dimension 0:** A single point (The origin $\mathbf{0}$). Requires 0 basis vectors to describe.
*   **Dimension 1:** A Line passing through the origin. Requires exactly 1 basis vector to define the direction.
*   **Dimension 2:** A flat Plane passing through the origin. Requires exactly 2 independent basis vectors to lay flat on the surface.
*   **Dimension 3:** The entire 3D space. Requires 3 independent basis vectors to reach everywhere.
