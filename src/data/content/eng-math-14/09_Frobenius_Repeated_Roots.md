# 9. Frobenius: Repeated Roots

The final case occurs when the indicial equation has a **Repeated Root** ($r_1 = r_2 = r$).

This presents the same fundamental problem we've seen multiple times before: a repeated root only generates one mathematical solution! We need two linearly independent solutions to form the general solution.

### The Fix
As always, the first solution is found normally using the single root $r$:
$$ y_1(x) = \sum_{n=0}^{\infty} c_n x^{n+r} $$

To force a second, linearly independent solution into existence, we once again multiply the first solution by the natural logarithm $\ln(x)$.
However, unlike the integer-difference case where the logarithm might vanish (if $C=0$), for a repeated root, the logarithmic term is **strictly guaranteed** to exist.

The second solution takes the form:
$$ y_2(x) = y_1(x) \ln(x) + \sum_{n=1}^{\infty} b_n x^{n+r} $$

*(Notice that the new sum for $y_2$ starts at $n=1$, because the $n=0$ term is completely absorbed by the $\ln(x)$ portion).*

### The Mathematical Symmetry
Think about the beautiful mathematical symmetry across all of differential equations! Every time we encounter a repeated root, we multiply by the independent variable to force a second solution.
*   **Constant Coefficient ODEs:** Root $r=2,2$. Solutions are $e^{2x}$ and $x e^{2x}$. (We multiply by $x$).
*   **Euler-Cauchy ODEs (Variable Coefficients):** Root $m=2,2$. Solutions are $x^2$ and $x^2 \ln(x)$. (We multiply by $\ln(x)$).
*   **Frobenius Series:** Root $r=2,2$. Solutions are $y_1(x)$ and $y_1(x) \ln(x) + (\text{Correction Series})$. (We multiply by $\ln(x)$).

Whenever the natural geometry of the problem collapses into a single dimension (a repeated root), mathematics forces us to introduce a higher-order term (an $x$ or a $\ln(x)$) to pry the solutions apart and restore linear independence.
