# 2. The Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus (FTC) is arguably the greatest achievement of 17th-century mathematics. Discovered independently by Newton and Leibniz, it proves that differentiation and integration are inverse operations. 

It connects the concept of an antiderivative (the indefinite integral) with the concept of the area under a curve (the definite integral).

### Definite Integrals & Area
While an indefinite integral yields a *function* (plus C), a **definite integral** yields a specific *number*. It calculates the exact net area bounded by the curve $y=f(x)$, the x-axis, and the vertical lines $x=a$ and $x=b$.

Notation for a definite integral:
$$ \int_{a}^{b} f(x) dx $$
*   $a$: The lower limit of integration.
*   $b$: The upper limit of integration.

### The FTC: Part 1
If a function $f$ is continuous on $[a, b]$, then the function defined by the integral:
$$ g(x) = \int_{a}^{x} f(t) dt $$
is continuous on $[a, b]$, differentiable on $(a, b)$, and its derivative is exactly $f(x)$:
$$ g'(x) = f(x) $$
*Meaning:* Differentiating an integral gives you back the original function. They are opposites.

### The FTC: Part 2 (The Evaluation Theorem)
This is the part used every day by engineers to calculate real values. If $f$ is continuous on $[a, b]$, and $F$ is any antiderivative of $f$ (meaning $F' = f$), then the definite area under the curve is:
$$ \int_{a}^{b} f(x) dx = F(b) - F(a) $$

*Meaning:* To find the exact area under $f(x)$ from $a$ to $b$, you simply find its antiderivative $F(x)$, plug in the upper bound $b$, and subtract the result of plugging in the lower bound $a$. The $+C$ is ignored because $(C) - (C) = 0$.

### Worked Example: Calculating Area
**Problem:** Find the exact area under the curve $y = 3x^2$ from $x = 1$ to $x = 3$.

**Solution:**
Set up the definite integral:
$$ \text{Area} = \int_{1}^{3} 3x^2 dx $$

1. Find the antiderivative of $3x^2$:
   $$ F(x) = x^3 $$
2. Apply FTC Part 2 ($F(b) - F(a)$):
   $$ F(3) - F(1) = (3)^3 - (1)^3 $$
   $$ = 27 - 1 = 26 $$

The exact area under the curve is 26 square units.
