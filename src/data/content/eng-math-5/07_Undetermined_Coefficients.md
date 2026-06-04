# 7. Method of Undetermined Coefficients

The Method of Undetermined Coefficients is essentially a highly structured guessing game. We use it to find the Particular Solution ($y_p$) when the forcing function $g(x)$ is a "nice" function (polynomials, exponentials, sines, or cosines).

The logic is simple: If $g(x)$ is $e^{2x}$, then $y_p$ must involve $e^{2x}$, because differentiating an exponential yields an exponential.

### The Guessing Table
If $g(x)$ is:
*   **Constant (e.g., $5$):** Guess $y_p = A$
*   **Linear (e.g., $3x$):** Guess $y_p = Ax + B$
*   **Quadratic (e.g., $x^2$):** Guess $y_p = Ax^2 + Bx + C$
*   **Exponential (e.g., $e^{kx}$):** Guess $y_p = A e^{kx}$
*   **Trigonometric ($\sin(kx)$ or $\cos(kx)$):** Guess $y_p = A\cos(kx) + B\sin(kx)$ *(You must include both, even if $g(x)$ only has one).*

### The "Uh-Oh" Rule
If your guess for $y_p$ happens to be identical to a term already inside your homogeneous solution $y_h$, it will annihilate to zero when plugged in. 
If this happens, you must multiply your entire $y_p$ guess by $x$ (or $x^2$ if it is a repeated root) to make it linearly independent.

### Worked Example
**Problem:** Find the general solution to $y'' - 4y = e^{3x}$.

**1. Find $y_h$:**
Characteristic equation: $r^2 - 4 = 0 \implies r = \pm 2$.
$$ y_h = C_1 e^{2x} + C_2 e^{-2x} $$

**2. Form the Guess for $y_p$:**
Because $g(x) = e^{3x}$, our guess is an exponential with the exact same power.
$$ y_p = A e^{3x} $$
*(Check the Uh-Oh Rule: Is $e^{3x}$ inside $y_h$? No. Our guess is safe).*

**3. Find Derivatives of $y_p$:**
$$ y_p' = 3A e^{3x} $$
$$ y_p'' = 9A e^{3x} $$

**4. Plug $y_p$ into the original ODE:**
$$ y'' - 4y = e^{3x} $$
$$ (9A e^{3x}) - 4(A e^{3x}) = e^{3x} $$
$$ 5A e^{3x} = e^{3x} $$

**5. Solve for the Undetermined Coefficient (A):**
Divide both sides by $e^{3x}$:
$$ 5A = 1 \implies A = \frac{1}{5} $$
So, our specific particular solution is $y_p = \frac{1}{5} e^{3x}$.

**6. Combine for Final Solution:**
$$ y(x) = y_h + y_p $$
$$ y(x) = C_1 e^{2x} + C_2 e^{-2x} + \frac{1}{5} e^{3x} $$
