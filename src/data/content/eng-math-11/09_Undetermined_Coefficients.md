# 9. Method of Undetermined Coefficients

The **Method of Undetermined Coefficients** is the fastest way to find the particular solution $y_p$, but it only works if the driving force $g(x)$ is a polynomial, an exponential, a sine/cosine, or a product/sum of these.

Because derivatives of polynomials are polynomials, derivatives of exponentials are exponentials, and derivatives of sines are sines/cosines, we can simply *guess* the algebraic form of $y_p$ and solve for the unknown coefficients.

### The Guessing Rules
Look at $g(x)$ and make your initial guess for $y_p$:
1.  **Exponential ($g(x) = k e^{ax}$):** 
    Guess $y_p = A e^{ax}$.
2.  **Sine or Cosine ($g(x) = k \sin(\omega x)$ or $k \cos(\omega x)$):**
    Guess $y_p = A \cos(\omega x) + B \sin(\omega x)$. *(You must include both, even if $g(x)$ only has one!)*
3.  **Polynomial ($g(x) = ax^2 + bx + c$):**
    Guess a general polynomial of the exact same degree: $y_p = Ax^2 + Bx + C$.

### The Duplication Trap
**CRITICAL RULE:** If any term in your guess for $y_p$ happens to be identical to a term in your complementary solution $y_c$, your guess will fail (it will evaluate to zero!). 
To fix this, you must multiply your entire guess by $x$ (or $x^2$ if it duplicates a repeated root).

### Worked Example
**Problem:** Solve $y'' - 3y' - 4y = 3e^{2x}$

**Step 1: Find $y_c$**
Homogeneous equation: $r^2 - 3r - 4 = 0 \implies (r-4)(r+1) = 0$.
$y_c = C_1 e^{4x} + C_2 e^{-x}$

**Step 2: Guess $y_p$**
The right side is $3e^{2x}$. 
Our guess is $y_p = A e^{2x}$.
*(Check the trap: Does $e^{2x}$ appear in $y_c$? No. We are safe to proceed).*

**Step 3: Differentiate the Guess**
$y_p = A e^{2x}$
$y'_p = 2A e^{2x}$
$y''_p = 4A e^{2x}$

**Step 4: Plug into the ODE and Solve for A**
Substitute $y_p, y'_p, y''_p$ into the original left side:
$$ (4A e^{2x}) - 3(2A e^{2x}) - 4(A e^{2x}) = 3e^{2x} $$
Factor out $e^{2x}$:
$$ e^{2x}(4A - 6A - 4A) = 3e^{2x} $$
Divide out $e^{2x}$ and simplify:
$$ -6A = 3 \implies A = -1/2 $$

**Step 5: Write the Full General Solution**
$y_p = -\frac{1}{2} e^{2x}$
$$ y(x) = y_c + y_p = C_1 e^{4x} + C_2 e^{-x} - \frac{1}{2}e^{2x} $$
