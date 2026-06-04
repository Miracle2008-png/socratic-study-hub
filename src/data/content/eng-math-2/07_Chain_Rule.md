# 7. The Chain Rule (Basic & Advanced)

The Chain Rule is arguably the most critical differentiation tool in all of engineering mathematics. It is used to differentiate **composite functions**—functions nested inside of other functions.

For example, $\sin(x^2)$ is a composite function. The "inner" function is $x^2$, and the "outer" function is $\sin()$.

### Chain Rule Definition
If $y = f(u)$ and $u = g(x)$, then:
$$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$
Alternatively, written in Newton's prime notation:
$$ \frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x) $$

**Conceptual Strategy:**
1. Differentiate the "outer" function, leaving the "inner" function completely untouched.
2. Multiply the result by the derivative of the "inner" function.

### Worked Example 1: Basic Chain Rule
**Problem:** Find the derivative of $y = (3x^2 + 5x)^4$.

**Solution:**
Outer function: $(\dots)^4$
Inner function: $3x^2 + 5x$

1. Differentiate the outer function using the Power Rule, keeping the inside intact: $4(3x^2 + 5x)^3$.
2. Multiply by the derivative of the inside: $(6x + 5)$.
$$ \frac{dy}{dx} = 4(3x^2 + 5x)^3 \cdot (6x + 5) $$

### Worked Example 2: The Double Chain (Advanced)
**Problem:** Differentiate $y = e^{\sin(2x)}$.

**Solution:**
This has *three* layers.
1. Outer layer: $e^{(\dots)}$
2. Middle layer: $\sin(\dots)$
3. Inner layer: $2x$

Peel it like an onion, from outside to inside, multiplying at each step.
1. Derivative of outer $e^u$ is $e^u$: $\implies e^{\sin(2x)}$
2. Derivative of middle $\sin(v)$ is $\cos(v)$: $\implies \cos(2x)$
3. Derivative of inner $2x$ is $2$: $\implies 2$

Multiply them all together:
$$ y' = e^{\sin(2x)} \cdot \cos(2x) \cdot 2 $$
$$ y' = 2 \cos(2x) e^{\sin(2x)} $$
