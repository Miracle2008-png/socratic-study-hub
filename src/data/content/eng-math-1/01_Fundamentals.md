# Fundamentals of Limits

The concept of a limit is the foundational building block of calculus and engineering analysis. It describes the behavior of a function $f(x)$ as its argument $x$ approaches a specific value $c$.

**Formal Definition (Epsilon-Delta):**
Let $f(x)$ be defined on an open interval containing $c$ (except possibly at $c$). The limit of $f(x)$ as $x$ approaches $c$ is $L$:
$$\lim_{x \to c} f(x) = L$$
if for every $\epsilon > 0$, there exists a $\delta > 0$ such that if $0 < |x - c| < \delta$, then $|f(x) - L| < \epsilon$.

### Limit Laws
For limits $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} g(x) = M$:
1. **Sum Rule:** $\lim_{x \to c} [f(x) + g(x)] = L + M$
2. **Product Rule:** $\lim_{x \to c} [f(x)g(x)] = L \cdot M$
3. **Quotient Rule:** $\lim_{x \to c} \left[ \frac{f(x)}{g(x)} \right] = \frac{L}{M} \quad (\text{if } M \neq 0)$
