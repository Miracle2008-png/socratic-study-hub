# 4. Newton-Cotes Formulas and their Limits

The Trapezoidal Rule (degree 1) and Simpson's Rules (degree 2 and 3) belong to a general family called **Newton-Cotes formulas**. 

These formulas are derived by substituting the function $f(x)$ with its $n$-th degree Lagrange interpolating polynomial on $n+1$ **equally spaced** nodes, and then integrating the polynomial exactly.

$$\int_a^b f(x) \, dx \approx \int_a^b P_n(x) \, dx = \sum_{i=0}^n \left( \int_a^b \ell_i(x) \, dx \right) y_i = \sum_{i=0}^n w_i y_i$$

The integral of the Lagrange basis polynomial $\ell_i(x)$ is the constant weight $w_i$.

### Closed vs. Open Formulas
*   **Closed Newton-Cotes:** The endpoints $a$ and $b$ are included as nodes (e.g., Trapezoidal, Simpson's). Used for standard integrals.
*   **Open Newton-Cotes:** The endpoints $a$ and $b$ are NOT used as nodes. The first node is $a+h$ and the last is $b-h$. Used when integrating functions with singularities at the boundaries (e.g., $\int_0^1 x^{-1/2} dx$) where $f(0)$ evaluates to infinity.

### Summary of Closed Formulas
| Degree $n$ | Name | Weights Pattern | Global Error | Exact for polynomials up to degree: |
|---|---|---|---|---|
| 1 | Trapezoidal | $1, 1$ | $O(h^2)$ | 1 (Linear) |
| 2 | Simpson's 1/3 | $1, 4, 1$ | $O(h^4)$ | 3 (Cubic) |
| 3 | Simpson's 3/8 | $1, 3, 3, 1$ | $O(h^4)$ | 3 (Cubic) |
| 4 | Boole's Rule | $7, 32, 12, 32, 7$ | $O(h^6)$ | 5 (Quintic) |

**Notice the symmetry:** Even-degree formulas ($n=2, 4$) "gain a degree" of accuracy for free due to cancellation of the odd-order error terms. Simpson's 1/3 rule ($n=2$) is exact for cubics.

### The Limit of Newton-Cotes (Why we stop at $n=4$)
If Simpson's is better than Trapezoidal, and Boole's is better than Simpson's, why not use a 10th-degree Newton-Cotes formula with 11 nodes?

**Runge's Phenomenon strikes again.**
Because Newton-Cotes formulas force the use of *equally spaced nodes*, integrating a single high-degree interpolating polynomial causes massive oscillations. 

Mathematically, for $n \ge 8$, the Newton-Cotes weights begin to include **negative numbers**.
*   In Trapezoidal and Simpson's, all $w_i > 0$.
*   If $w_i$ contains mixed positive and negative signs, evaluating $\sum w_i f(x_i)$ leads to **catastrophic subtractive cancellation** in floating-point arithmetic. The numerical round-off error destroys the theoretical accuracy.

**The Engineering Conclusion:** 
Never use single high-degree Newton-Cotes formulas. The standard practice for equally-spaced data is to use the **Composite Simpson's 1/3 Rule**, chaining together many low-degree, stable, positive-weight panels.
