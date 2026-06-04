# 9. L'Hôpital's Rule (Advanced)

When algebraic manipulation fails to resolve an indeterminate form like $\frac{0}{0}$ or $\frac{\infty}{\infty}$, calculus provides an extremely powerful tool: **L'Hôpital's Rule**.

### Formal Statement
Suppose that $f(x)$ and $g(x)$ are differentiable functions and $g'(x) \neq 0$ on an open interval containing $c$ (except possibly at $c$). 

If $\lim_{x \to c} f(x) = 0$ and $\lim_{x \to c} g(x) = 0$, OR if $\lim_{x \to c} f(x) = \pm\infty$ and $\lim_{x \to c} g(x) = \pm\infty$, then:
$$ \lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)} $$
provided that the limit on the right side exists (or is $\infty$ or $-\infty$).

### Crucial Warnings
1. **DO NOT use the Quotient Rule.** You are differentiating the numerator and the denominator entirely separately, not applying the quotient rule to the fraction.
2. **Verify the Condition.** You *must* confirm that the fraction evaluates to $\frac{0}{0}$ or $\frac{\infty}{\infty}$ before taking derivatives. Applying it to a non-indeterminate form will yield the wrong answer.

### Worked Example 1: Classic $\frac{0}{0}$ Form
**Evaluate:** $\lim_{x \to 0} \frac{e^x - 1}{x^2 + x}$

**Solution:**
Direct substitution yields: $\frac{e^0 - 1}{0 + 0} = \frac{1 - 1}{0} = \frac{0}{0}$. The condition is met.

Apply L'Hôpital's Rule (differentiate top and bottom separately):
Numerator derivative: $\frac{d}{dx}(e^x - 1) = e^x$
Denominator derivative: $\frac{d}{dx}(x^2 + x) = 2x + 1$

$$ \lim_{x \to 0} \frac{e^x}{2x + 1} $$
Evaluate via direct substitution again:
$$ \frac{e^0}{2(0) + 1} = \frac{1}{1} = 1 $$

### Worked Example 2: Repeated Application
**Evaluate:** $\lim_{x \to 0} \frac{\cos x - 1}{x^2}$

**Solution:**
Substitution gives $\frac{1 - 1}{0} = \frac{0}{0}$. Apply L'Hôpital's:
$$ \lim_{x \to 0} \frac{-\sin x}{2x} $$
Substitution gives $\frac{0}{0}$ *again*. 
Because it is still indeterminate, we can apply L'Hôpital's Rule a second time!
$$ \lim_{x \to 0} \frac{-\cos x}{2} $$
Evaluate:
$$ \frac{-1}{2} = -0.5 $$
