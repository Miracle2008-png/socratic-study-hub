# 10. Tangent Lines & Linear Approximations

One of the most practical uses of the derivative in engineering is **Linear Approximation** (also called Tangent Line Approximation). 

Curves are difficult to compute. Straight lines are easy. If we zoom in closely enough on any smooth curve, it looks like a straight line. We can use the tangent line at a known point $a$ to approximate the value of the function at a nearby point $x$.

### Equation of the Tangent Line
Recall the point-slope form of a linear equation:
$$ y - y_1 = m(x - x_1) $$

For a function $f(x)$ at point $x = a$:
*   The point is $(a, f(a))$.
*   The slope $m$ is the derivative $f'(a)$.

Substituting these yields the tangent line equation:
$$ y - f(a) = f'(a)(x - a) $$
$$ y = f(a) + f'(a)(x - a) $$

### Linear Approximation Formula
We define the linear approximation $L(x)$ of a function $f(x)$ near $a$ as:
$$ f(x) \approx L(x) = f(a) + f'(a)(x - a) $$

### Worked Example: Approximating a Square Root
**Problem:** Use a linear approximation to estimate the value of $\sqrt{16.2}$ without a calculator.

**Solution:**
We don't know $\sqrt{16.2}$, but we know a "nice" point very close to it: $a = 16$, where $\sqrt{16} = 4$.

1. Define the function: $f(x) = \sqrt{x} = x^{1/2}$.
2. Find $f(a)$: $f(16) = \sqrt{16} = 4$.
3. Find the derivative $f'(x)$: 
   $$ f'(x) = \frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}} $$
4. Find the slope at $a$: 
   $$ f'(16) = \frac{1}{2\sqrt{16}} = \frac{1}{2(4)} = \frac{1}{8} = 0.125 $$
5. Construct the linear approximation formula:
   $$ L(x) = f(a) + f'(a)(x - a) $$
   $$ L(x) = 4 + 0.125(x - 16) $$
6. Plug in the messy value $x = 16.2$:
   $$ L(16.2) = 4 + 0.125(16.2 - 16) $$
   $$ L(16.2) = 4 + 0.125(0.2) = 4 + 0.025 = 4.025 $$

The true value of $\sqrt{16.2}$ is $\approx 4.02492$. Our linear approximation of $4.025$ was extremely accurate and required no complex computation!
