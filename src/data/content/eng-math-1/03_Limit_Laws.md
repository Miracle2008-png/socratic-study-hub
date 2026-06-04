# 3. Limit Laws & Algebraic Manipulation

In practice, evaluating limits via the $\epsilon$-$\delta$ definition or graphing is tedious and slow. Instead, we use established Limit Laws and algebraic manipulation to solve limits analytically.

### The Limit Laws
Assuming that $\lim_{x \to c} f(x)$ and $\lim_{x \to c} g(x)$ both exist, and $k$ is a constant:

1. **Sum Rule:** $\lim_{x \to c} [f(x) + g(x)] = \lim_{x \to c} f(x) + \lim_{x \to c} g(x)$
2. **Difference Rule:** $\lim_{x \to c} [f(x) - g(x)] = \lim_{x \to c} f(x) - \lim_{x \to c} g(x)$
3. **Constant Multiple Rule:** $\lim_{x \to c} [k \cdot f(x)] = k \cdot \lim_{x \to c} f(x)$
4. **Product Rule:** $\lim_{x \to c} [f(x) \cdot g(x)] = \lim_{x \to c} f(x) \cdot \lim_{x \to c} g(x)$
5. **Quotient Rule:** $\lim_{x \to c} \left[ \frac{f(x)}{g(x)} \right] = \frac{\lim_{x \to c} f(x)}{\lim_{x \to c} g(x)}$ *(provided the limit of the denominator is not 0)*
6. **Power Rule:** $\lim_{x \to c} [f(x)]^n = [\lim_{x \to c} f(x)]^n$

### Direct Substitution Property
For any polynomial, rational function, trigonometric function, exponential, or logarithmic function $f(x)$, if $c$ is within the domain of the function, the limit can be evaluated via direct substitution:
$$\lim_{x \to c} f(x) = f(c)$$

### Algebraic Manipulation Techniques
When direct substitution yields $\frac{0}{0}$ (an indeterminate form), it means a "hole" exists, and we must manipulate the algebra to reveal the hidden limit.

#### Technique 1: Factoring
Used when dealing with polynomials.
**Evaluate:** $\lim_{x \to -3} \frac{x^2 - 9}{x + 3}$
*Direct substitution yields $\frac{0}{0}$.*
Factor the numerator (difference of squares):
$$ \lim_{x \to -3} \frac{(x - 3)(x + 3)}{x + 3} $$
Cancel the $(x+3)$ term (valid since $x$ approaches, but does not equal, -3):
$$ \lim_{x \to -3} (x - 3) = -3 - 3 = -6 $$

#### Technique 2: Multiplication by Conjugate
Used when dealing with square roots.
**Evaluate:** $\lim_{x \to 0} \frac{\sqrt{x^2 + 9} - 3}{x^2}$
*Direct substitution yields $\frac{0}{0}$.*
Multiply numerator and denominator by the conjugate $\sqrt{x^2 + 9} + 3$:
$$ \lim_{x \to 0} \frac{(\sqrt{x^2 + 9} - 3)(\sqrt{x^2 + 9} + 3)}{x^2(\sqrt{x^2 + 9} + 3)} $$
Expand the numerator (difference of squares):
$$ \lim_{x \to 0} \frac{(x^2 + 9) - 9}{x^2(\sqrt{x^2 + 9} + 3)} = \lim_{x \to 0} \frac{x^2}{x^2(\sqrt{x^2 + 9} + 3)} $$
Cancel $x^2$:
$$ \lim_{x \to 0} \frac{1}{\sqrt{x^2 + 9} + 3} = \frac{1}{\sqrt{0 + 9} + 3} = \frac{1}{3 + 3} = \frac{1}{6} $$
