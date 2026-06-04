# Fundamental Rules of Differentiation

Rather than using first principles for every function, we utilize established rules derived from the definition.

*   **Constant Rule:** $\frac{d}{dx}[c] = 0$
*   **Power Rule:** $\frac{d}{dx}[x^n] = nx^{n-1}$
*   **Constant Multiple Rule:** $\frac{d}{dx}[c f(x)] = c f'(x)$
*   **Sum/Difference Rule:** $\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$

### Product and Quotient Rules
When dealing with products or fractions of functions, standard additive distribution does not apply.

**Product Rule:**
$$ \frac{d}{dx}[u(x)v(x)] = u'(x)v(x) + u(x)v'(x) $$

**Quotient Rule:**
$$ \frac{d}{dx}\left[\frac{u(x)}{v(x)}\right] = \frac{u'(x)v(x) - u(x)v'(x)}{[v(x)]^2} $$

### Worked Example 1: Applying the Quotient Rule
**Problem:** Differentiate $f(x) = \frac{2x^2 + 1}{x - 3}$.

**Solution:**
Let $u = 2x^2 + 1$ and $v = x - 3$.
Then $u' = 4x$ and $v' = 1$.
Applying the quotient rule:
$$ f'(x) = \frac{(4x)(x - 3) - (2x^2 + 1)(1)}{(x - 3)^2} $$
Expand the numerator:
$$ = \frac{4x^2 - 12x - 2x^2 - 1}{(x - 3)^2} = \frac{2x^2 - 12x - 1}{(x - 3)^2} $$
