# 7. The Squeeze (Sandwich) Theorem

Sometimes, a function's limit cannot be evaluated using direct substitution, factoring, or conjugates because the function oscillates wildly or behaves strangely near the point of interest.

In these cases, we can use the **Squeeze Theorem** (or Sandwich Theorem). If we can "trap" the strange function between two well-behaved functions that both converge to the same limit, the trapped function has no choice but to converge to that limit as well.

### Formal Definition
Suppose that for all $x$ in an open interval containing $c$ (except possibly at $c$ itself):
$$ g(x) \leq f(x) \leq h(x) $$
If we also know that:
$$ \lim_{x \to c} g(x) = L \quad \text{and} \quad \lim_{x \to c} h(x) = L $$
Then it mathematically guarantees that:
$$ \lim_{x \to c} f(x) = L $$

### Worked Example: The Oscillating Limit
**Evaluate:** $\lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right)$

**Solution:**
Direct substitution gives $0 \cdot \sin(\infty)$, which is undefined. The function $\sin(1/x)$ oscillates infinitely fast between -1 and 1 as $x$ approaches 0.

However, we know the bounds of the sine function:
$$ -1 \leq \sin\left(\frac{1}{x}\right) \leq 1 $$

Multiply all parts of the inequality by $x^2$ (since $x^2$ is always positive, the inequality signs do not flip):
$$ -x^2 \leq x^2 \sin\left(\frac{1}{x}\right) \leq x^2 $$

Now we have our "bounding" functions: $g(x) = -x^2$ and $h(x) = x^2$.
Evaluate the limit of both bounding functions as $x \to 0$:
$$ \lim_{x \to 0} -x^2 = 0 $$
$$ \lim_{x \to 0} x^2 = 0 $$

Because the lower bound approaches 0, and the upper bound approaches 0, the function trapped between them must also approach 0.
By the Squeeze Theorem:
$$ \lim_{x \to 0} x^2 \sin\left(\frac{1}{x}\right) = 0 $$
