# Indeterminate Forms & L'Hôpital's Rule

In engineering, evaluating limits often leads to indeterminate forms such as $\frac{0}{0}$ or $\frac{\infty}{\infty}$. 

**L'Hôpital's Rule:**
If $\lim_{x \to c} \frac{f(x)}{g(x)}$ yields $\frac{0}{0}$ or $\frac{\infty}{\infty}$, then:
$$\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}$$
provided the limit on the right exists.

### Worked Example 1: Rational Functions
**Evaluate:** $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$

**Solution:**
Direct substitution yields $\frac{0}{0}$. We can resolve this algebraically by factoring:
$$ \frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2} $$
For $x \neq 2$, the terms cancel, leaving $x + 2$.
$$ \lim_{x \to 2} (x + 2) = 2 + 2 = 4 $$

### Worked Example 2: L'Hôpital's Application
**Evaluate:** $\lim_{x \to 0} \frac{\sin x}{x}$

**Solution:**
Direct substitution yields $\frac{0}{0}$. Applying L'Hôpital's Rule:
$$ \lim_{x \to 0} \frac{\frac{d}{dx}(\sin x)}{\frac{d}{dx}(x)} = \lim_{x \to 0} \frac{\cos x}{1} $$
Evaluate at $x = 0$:
$$ \frac{\cos(0)}{1} = \frac{1}{1} = 1 $$
