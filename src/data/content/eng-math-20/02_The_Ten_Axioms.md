# 2. The 10 Axioms of a Vector Space

How do mathematicians officially decide if a collection of objects is allowed to be called a "Vector Space"? 

The collection of objects ($V$) and the scalars ($c, d$) must perfectly satisfy a strict checklist of **10 Axioms** (rules). If a set fails even a single one of these axioms, it is completely rejected and cannot be treated using the tools of linear algebra.

### Closure Axioms (The Most Important)

These two rules guarantee that operations won't accidentally "break" the objects out of their container.

1.  **Closure under Addition:** 
    If $\mathbf{u}$ and $\mathbf{v}$ are in $V$, then their sum $(\mathbf{u} + \mathbf{v})$ must also be in $V$.
2.  **Closure under Scalar Multiplication:** 
    If $\mathbf{u}$ is in $V$ and $c$ is any real scalar, then the scaled object $(c\mathbf{u})$ must also be in $V$.

### Addition Axioms

These rules ensure that addition behaves the way standard high-school arithmetic behaves.

3.  **Commutativity:** 
    $$ \mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u} $$
4.  **Associativity:** 
    $$ (\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w}) $$
5.  **Existence of a Zero Vector:** 
    There must exist a specific vector $\mathbf{0}$ in $V$ such that adding it does nothing:
    $$ \mathbf{u} + \mathbf{0} = \mathbf{u} $$
6.  **Existence of Negative Inverses:** 
    For every vector $\mathbf{u}$, there must exist a vector $-\mathbf{u}$ such that:
    $$ \mathbf{u} + (-\mathbf{u}) = \mathbf{0} $$

### Scalar Multiplication Axioms

These rules ensure that scaling objects distributes nicely.

7.  **Distributivity (Scalar over Vector Addition):** 
    $$ c(\mathbf{u} + \mathbf{v}) = c\mathbf{u} + c\mathbf{v} $$
8.  **Distributivity (Vector over Scalar Addition):** 
    $$ (c + d)\mathbf{u} = c\mathbf{u} + d\mathbf{u} $$
9.  **Associativity of Scalars:** 
    $$ c(d\mathbf{u}) = (cd)\mathbf{u} $$
10. **Multiplicative Identity:** 
    Multiplying by the scalar $1$ must do absolutely nothing.
    $$ 1\mathbf{u} = \mathbf{u} $$

### Example of a Failure
Consider the set of all polynomials of *exactly* degree 2 (e.g., $ax^2 + bx + c$, where $a \neq 0$). Is this a vector space?
**No.** It fails Closure under Addition (Axiom 1).
If you add $\mathbf{u} = 5x^2 + 2x$ and $\mathbf{v} = -5x^2 + 3$, the $x^2$ terms perfectly cancel out.
$$
\mathbf{u} + \mathbf{v} = 2x + 3
$$
The result is a degree 1 polynomial. It has "broken out" of the container of exactly degree 2 polynomials. Therefore, it is not a vector space!
