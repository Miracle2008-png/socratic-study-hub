# 10. Improper Integrals

The Fundamental Theorem of Calculus strictly requires that the interval $[a, b]$ is finite, and the function $f(x)$ is continuous across that entire interval. 

If either of these conditions is violated, you have an **Improper Integral**.

### Type 1: Infinite Intervals
If you are integrating to infinity (e.g., calculating the total energy dissipated by a resistor over all time), the integral looks like this:
$$ \int_{a}^{\infty} f(x) dx $$

Because infinity is a concept, not a number, you cannot plug it into the FTC. You must replace the infinity with a variable (like $t$), evaluate the definite integral, and then take the limit as $t \to \infty$.
$$ \lim_{t \to \infty} \int_{a}^{t} f(x) dx $$
*   If the limit exists as a finite number, the integral **converges**.
*   If the limit is $\pm\infty$ or DNE, the integral **diverges**.

**Worked Example:** Evaluate $\int_{1}^{\infty} \frac{1}{x^2} dx$.
$$ = \lim_{t \to \infty} \int_{1}^{t} x^{-2} dx $$
$$ = \lim_{t \to \infty} \left[ -\frac{1}{x} \right]_{1}^{t} $$
$$ = \lim_{t \to \infty} \left( -\frac{1}{t} - (-\frac{1}{1}) \right) $$
$$ = \lim_{t \to \infty} \left( 1 - \frac{1}{t} \right) $$
As $t \to \infty$, the fraction $\frac{1}{t} \to 0$. The result is $1 - 0 = 1$. The area is finite!

### Type 2: Infinite Discontinuities (Vertical Asymptotes)
If $f(x)$ has a vertical asymptote at $x=c$ inside the interval $[a, b]$, you cannot simply integrate across it. You must split the integral at the asymptote and use limits to approach it from both sides.
$$ \int_{a}^{b} f(x) dx = \lim_{t \to c^-} \int_{a}^{t} f(x) dx + \lim_{k \to c^+} \int_{k}^{b} f(x) dx $$

**Worked Example:** Evaluate $\int_{0}^{4} \frac{1}{\sqrt{x}} dx$.
The function is undefined at $x=0$, creating an asymptote.
$$ = \lim_{t \to 0^+} \int_{t}^{4} x^{-1/2} dx $$
$$ = \lim_{t \to 0^+} \left[ 2x^{1/2} \right]_{t}^{4} $$
$$ = \lim_{t \to 0^+} (2\sqrt{4} - 2\sqrt{t}) $$
$$ = \lim_{t \to 0^+} (4 - 2\sqrt{t}) $$
As $t \to 0$, $2\sqrt{t} \to 0$. The result is 4.
