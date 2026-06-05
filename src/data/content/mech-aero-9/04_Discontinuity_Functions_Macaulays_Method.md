# Discontinuity Functions (Macaulay's Method)

To avoid the algebraic nightmare of generating a dozen different constants of integration for a beam with multiple loads, we use a clever mathematical trick invented by W.H. Macaulay. 

Macaulay's Method allows us to write a **single, continuous mathematical equation** for $M(x)$ that is valid for the entire length of the beam, regardless of how many point loads or moment couples are applied to it.

## 1. Macaulay Brackets $\langle x - a \rangle$

The core of the method relies on a specialized mathematical operator called a singularity function, denoted by angle brackets: $\langle x - a \rangle^n$.

The rule for Macaulay brackets is remarkably simple:
*   If the term inside the bracket is **negative** (i.e., $x < a$), the entire bracket is mathematically defined as exactly **zero**. The load has not been "reached" yet.
*   If the term inside the bracket is **positive** (i.e., $x > a$), the bracket behaves like normal standard parentheses: $(x - a)^n$. The load has been reached and is now active.

## 2. Formulating the Load Equation $w(x)$

We can express any point load, moment, or distributed load starting at position $x=a$ using these brackets:

*   **Concentrated Moment ($M_0$):** $w(x) = M_0 \langle x - a \rangle^{-2}$
*   **Concentrated Point Load ($P$):** $w(x) = P \langle x - a \rangle^{-1}$
*   **Uniform Distributed Load ($w_0$):** $w(x) = w_0 \langle x - a \rangle^0$
*   **Triangular Distributed Load (slope $m$):** $w(x) = m \langle x - a \rangle^1$

**Crucial Rule:** Macaulay brackets "turn on" at $x=a$ and *never turn off*. If you have a uniform distributed load that ends halfway down the beam, you cannot turn it off. Instead, you must mathematically add a new, negative uniform distributed load acting upwards at the cutoff point to cancel it out.

## 3. Integrating the Singularity Functions

Because these functions represent the load $w(x)$, we can integrate them progressively to find Shear $V(x)$, Moment $M(x)$, Slope $EI\theta(x)$, and Deflection $EIv(x)$.

The integration rules for Macaulay brackets are identical to standard polynomials, with one vital exception for negative exponents:
*   $\int \langle x - a \rangle^{-2} dx = \langle x - a \rangle^{-1}$ (Do not divide by the exponent)
*   $\int \langle x - a \rangle^{-1} dx = \langle x - a \rangle^0$
*   $\int \langle x - a \rangle^n dx = \frac{1}{n+1} \langle x - a \rangle^{n+1}$ (Standard polynomial rule, for $n \ge 0$)

## 4. The Unified Deflection Equation

1.  Write the single $w(x)$ equation containing all loads using Macaulay brackets.
2.  Integrate to find $V(x)$. (Add constant $C_1$, which is usually the shear reaction at $x=0$).
3.  Integrate to find $M(x)$. (Add constant $C_2$, which is usually the moment reaction at $x=0$).
4.  Integrate to find $EI\theta(x)$. (Add constant $C_3$).
5.  Integrate to find $EIv(x)$. (Add constant $C_4$).

You now have a single algebraic equation for deflection for the entire beam. You only have to apply your geometric boundary conditions once to solve for $C_3$ and $C_4$, vastly reducing the algebraic complexity of solving the beam.
