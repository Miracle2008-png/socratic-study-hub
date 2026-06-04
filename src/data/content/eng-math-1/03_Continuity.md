# Continuity

A function $f(x)$ is continuous at a point $x = c$ if three conditions are strictly met:
1. $f(c)$ is defined.
2. $\lim_{x \to c} f(x)$ exists.
3. $\lim_{x \to c} f(x) = f(c)$.

Functions composed of polynomials, exponentials, and trigonometric functions are continuous across their entire domains. Discontinuities arise at asymptotes, step changes, or undefined holes.

### Worked Example 3: Verifying Continuity
**Problem:** Determine if the piecewise function is continuous at $x = 3$.
$$
f(x) = \begin{cases} 
x^2 - 1 & x < 3 \\ 
2x + 2 & x \geq 3 
\end{cases}
$$

**Solution:**
1. Check $f(3)$: $f(3) = 2(3) + 2 = 8$.
2. Check left-hand limit ($x \to 3^-$): $\lim_{x \to 3^-} (x^2 - 1) = 3^2 - 1 = 8$.
3. Check right-hand limit ($x \to 3^+$): $\lim_{x \to 3^+} (2x + 2) = 2(3) + 2 = 8$.

Since $\lim_{x \to 3^-} f(x) = \lim_{x \to 3^+} f(x) = f(3) = 8$, the function is **continuous** at $x = 3$.
