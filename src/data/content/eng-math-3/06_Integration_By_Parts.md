# 6. Integration By Parts (The Reverse Product Rule)

While U-Substitution reverses the Chain Rule, **Integration by Parts** reverses the Product Rule. It is used to integrate the product of two functions when U-Sub fails (e.g., $\int x \sin(x) dx$ or $\int x e^x dx$).

### The Formula
Starting from the Product Rule $(uv)' = u'v + uv'$, integrating both sides and rearranging yields the Integration by Parts formula:
$$ \int u \, dv = uv - \int v \, du $$

To use this, you must split your integrand into two parts:
*   $u$: A part that gets simpler (or doesn't get worse) when differentiated.
*   $dv$: The rest of the integral, which must be something you can easily integrate.

### The LIATE Rule (How to choose $u$)
Choosing the wrong $u$ will make the integral mathematically worse. Use the LIATE acronym to prioritize your choice for $u$. Pick the first one that appears on this list:
1.  **L**ogarithmic ($\ln x$)
2.  **I**nverse Trigonometric ($\arctan x$, $\arcsin x$)
3.  **A**lgebraic ($x^2$, $3x^5$)
4.  **T**rigonometric ($\sin x$, $\cos x$)
5.  **E**xponential ($e^x$)

### Worked Example 1: Standard Application
**Problem:** Evaluate $\int x \cos(x) \, dx$.

**Solution:**
We have an Algebraic term ($x$) and a Trig term ($\cos x$). According to LIATE, Algebraic comes first, so we set $u = x$.

1. Let $u = x$  $\implies du = dx$
2. Let $dv = \cos(x) dx$ $\implies v = \sin(x)$

Apply the formula $\int u \, dv = uv - \int v \, du$:
$$ = (x)(\sin x) - \int (\sin x) dx $$
$$ = x \sin(x) - (-\cos x) + C $$
$$ = x \sin(x) + \cos(x) + C $$

### Worked Example 2: The "Hidden" 1
Sometimes, Integration by Parts is used when there appears to be only one function.

**Problem:** Evaluate $\int \ln(x) \, dx$.

**Solution:**
We don't have a formula for this. We rewrite it as $\int \ln(x) \cdot 1 \, dx$.
By LIATE, Logarithms are top priority.
1. Let $u = \ln(x)$ $\implies du = \frac{1}{x} dx$
2. Let $dv = 1 dx$ $\implies v = x$

Formula: $uv - \int v \, du$
$$ = x \ln(x) - \int x \left(\frac{1}{x}\right) dx $$
$$ = x \ln(x) - \int 1 \, dx $$
$$ = x \ln(x) - x + C $$
