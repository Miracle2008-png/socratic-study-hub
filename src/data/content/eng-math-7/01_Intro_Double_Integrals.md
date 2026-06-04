# 1. Introduction to Double Integrals

In single-variable calculus, the definite integral $\int_{a}^{b} f(x) dx$ represents the area under a curve $y = f(x)$ over a 1D interval $[a, b]$ on the x-axis. 

In multivariable calculus, the **double integral** extends this concept to two dimensions. Instead of integrating over a 1D interval, we integrate a function of two variables, $f(x, y)$, over a 2D region $R$ in the xy-plane. 

The double integral represents the **volume** under the surface $z = f(x, y)$ and above the region $R$.

### Mathematical Definition
Let $f$ be a function of two variables defined on a closed rectangle $R = [a, b] \times [c, d]$. We divide $R$ into small sub-rectangles with area $\Delta A$. The double integral of $f$ over $R$ is defined as the limit of a Riemann sum:

$$ \iint_R f(x, y) dA = \lim_{m,n \to \infty} \sum_{i=1}^{m} \sum_{j=1}^{n} f(x_i^*, y_j^*) \Delta A $$

where $(x_i^*, y_j^*)$ is a sample point in the $ij$-th sub-rectangle.

### Interpretation
1.  **Volume:** If $f(x, y) \ge 0$, then $V = \iint_R f(x, y) dA$ is the volume of the solid bounded above by the surface $z=f(x,y)$ and below by the region $R$.
2.  **Area:** If $f(x, y) = 1$ everywhere on $R$, then the double integral simply computes the 2D area of the base region $R$:
    $$ \text{Area}(R) = \iint_R 1 \, dA $$
3.  **Mass:** If $f(x, y)$ represents an area density (mass per unit area, often denoted $\rho(x,y)$), then the double integral gives the total mass of a thin plate shaped like $R$.

### Properties of Double Integrals
Double integrals behave linearly, exactly like single integrals:
1.  **Addition:** $\iint_R [f(x, y) + g(x, y)] dA = \iint_R f(x, y) dA + \iint_R g(x, y) dA$
2.  **Scalar Multiplication:** $\iint_R c f(x, y) dA = c \iint_R f(x, y) dA$
3.  **Region Union:** If region $R$ is split into two non-overlapping regions $D_1$ and $D_2$, then:
    $$ \iint_R f(x,y) dA = \iint_{D_1} f(x,y) dA + \iint_{D_2} f(x,y) dA $$

In the next sections, we will learn how to actually compute these integrals using **Iterated Integrals** (Fubini's Theorem), beginning with the simplest case: rectangular regions.
