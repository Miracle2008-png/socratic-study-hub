# 7. Romberg Integration

**Romberg Integration** is an elegant method that generates highly accurate integral approximations from the simple Trapezoidal Rule by systematically eliminating error terms using **Richardson Extrapolation**.

### The Theory of Error Elimination
The error of the composite Trapezoidal Rule $T(h)$ on interval $[a,b]$ can be expressed as an exact power series in $h^2$:
$$I = T(h) + C_1 h^2 + C_2 h^4 + C_3 h^6 + \dots$$

Because only even powers of $h$ appear, we can algebraically eliminate the dominant $O(h^2)$ error term by evaluating the Trapezoidal rule twice: once with step $h$, and once with step $h/2$.

Substitute $h \to h/2$:
$$I = T(h/2) + C_1 \frac{h^2}{4} + C_2 \frac{h^4}{16} + \dots$$

Multiply this second equation by 4 and subtract the first equation to cancel the $C_1 h^2$ term exactly:
$$3I = 4T(h/2) - T(h) + O(h^4)$$
$$I = \frac{4T(h/2) - T(h)}{3} + O(h^4)$$

This new approximation is accurate to $O(h^4)$ — we have magically created Simpson's 1/3 Rule out of two Trapezoidal estimates.

### The Romberg Tableau
We can repeat this extrapolation process infinitely. Eliminate $h^4$ to get an $O(h^6)$ estimate (Boole's rule). Eliminate $h^6$ to get $O(h^8)$, and so on.

Let $R_{k,1}$ be the Trapezoidal estimate with $2^{k-1}$ panels. The Romberg recursive formula to eliminate the $O(h^{2j})$ error is:
$$R_{k, j} = \frac{4^{j-1} R_{k, j-1} - R_{k-1, j-1}}{4^{j-1} - 1}$$

This builds a triangular tableau:
| $k$ (Rows) | $O(h^2)$ | $O(h^4)$ | $O(h^6)$ | $O(h^8)$ |
|---|---|---|---|---|
| 1 ($n=1$) | $R_{1,1}$ | | | |
| 2 ($n=2$) | $R_{2,1}$ | $R_{2,2}$ | | |
| 3 ($n=4$) | $R_{3,1}$ | $R_{3,2}$ | $R_{3,3}$ | |
| 4 ($n=8$) | $R_{4,1}$ | $R_{4,2}$ | $R_{4,3}$ | $R_{4,4}$ |

*   Column 1 is the Trapezoidal Rule.
*   Column 2 is Simpson's 1/3 Rule.
*   Column 3 is Boole's Rule.
*   The bottom-right entry $R_{4,4}$ is the most accurate estimate.

### Why Use Romberg?
To achieve the $O(h^8)$ accuracy of $R_{4,4}$, a direct Newton-Cotes formula would require evaluating an 8th-degree interpolating polynomial, which guarantees negative weights and catastrophic Runge instability.

Romberg achieves $O(h^8)$ accuracy using ONLY the stable, positive-weight evaluations of the Trapezoidal Rule. It separates the evaluation of the function from the increase in theoretical accuracy, providing high-order precision without numerical instability. It stops building the tableau when $|R_{k,k} - R_{k,k-1}| < \varepsilon$.
