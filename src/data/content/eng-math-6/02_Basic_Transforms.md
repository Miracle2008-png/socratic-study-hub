# 2. Table of Basic Transforms

While you *can* compute the Laplace Transform of any function using the integral definition $\int_{0}^{\infty} e^{-st} f(t) dt$, doing so for every problem would take hours. 

Instead, engineers rely on a pre-calculated table of common transforms. You must memorize these foundational pairs.

### The Core Transform Table

| Time Domain $f(t)$ | s-Domain $F(s)$ | Restriction on $s$ |
| :--- | :--- | :--- |
| **1** (Constant) | $\frac{1}{s}$ | $s > 0$ |
| **$t^n$** (Polynomial) | $\frac{n!}{s^{n+1}}$ | $s > 0, n = 1, 2, 3 \dots$ |
| **$e^{at}$** (Exponential) | $\frac{1}{s - a}$ | $s > a$ |
| **$\sin(kt)$** (Sine Wave) | $\frac{k}{s^2 + k^2}$ | $s > 0$ |
| **$\cos(kt)$** (Cosine Wave)| $\frac{s}{s^2 + k^2}$ | $s > 0$ |
| **$\sinh(kt)$** (Hyperbolic) | $\frac{k}{s^2 - k^2}$ | $s > \|k\|$ |
| **$\cosh(kt)$** (Hyperbolic) | $\frac{s}{s^2 - k^2}$ | $s > \|k\|$ |

### Observations to Memorize
*   **Constants & Polynomials:** Result in a single $s$ term in the denominator. A power of $n$ results in a power of $n+1$ in the denominator.
*   **Exponentials:** Shift the denominator to $(s-a)$. Notice the sign flip: $e^{5t}$ becomes $\frac{1}{s-5}$, and $e^{-3t}$ becomes $\frac{1}{s+3}$.
*   **Trigonometry:** Sine and Cosine both have $(s^2 + k^2)$ in the denominator. 
    *   **S**ine has the con**s**tant ($k$) on top.
    *   **C**osine has the **s** variable on top.

### Worked Example: Using the Table
**Problem:** Find the Laplace Transform of $f(t) = t^3$.

**Solution:**
Look at the table entry for $t^n$. Here, $n = 3$.
$$ \mathcal{L}\{t^3\} = \frac{3!}{s^{3+1}} $$
Calculate the factorial: $3! = 3 \times 2 \times 1 = 6$.
$$ F(s) = \frac{6}{s^4} $$

**Problem:** Find the Laplace Transform of $f(t) = \cos(4t)$.

**Solution:**
Look at the table entry for $\cos(kt)$. Here, $k = 4$.
$$ \mathcal{L}\{\cos(4t)\} = \frac{s}{s^2 + 4^2} $$
$$ F(s) = \frac{s}{s^2 + 16} $$
