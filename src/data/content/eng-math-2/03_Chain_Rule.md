# The Chain Rule

The Chain Rule is arguably the most critical differentiation tool in engineering, used for differentiating composite functions.

**Chain Rule Definition:**
If $y = f(u)$ and $u = g(x)$, then:
$$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$
Alternatively, $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$.

### Worked Example 2: The Chain Rule
**Problem:** Find the derivative of the damped oscillation envelope $y = e^{-3x^2}$.

**Solution:**
This is a composition where the outer function is $e^u$ and the inner function is $u = -3x^2$.
1. Derivative of the outer function $e^u$ is $e^u$.
2. Derivative of the inner function $u = -3x^2$ is $-6x$.
Multiply them together:
$$ \frac{dy}{dx} = e^{-3x^2} \cdot (-6x) = -6x e^{-3x^2} $$
