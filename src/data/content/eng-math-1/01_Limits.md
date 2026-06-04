# Limits & Continuity

## 1. Fundamentals of Limits
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

## 2. Indeterminate Forms & L'Hôpital's Rule
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

## 3. Continuity
A function $f(x)$ is continuous at a point $x = c$ if three conditions are strictly met:
1. $f(c)$ is defined.
2. $\lim_{x \to c} f(x)$ exists.
3. $\lim_{x \to c} f(x) = f(c)$.

Functions composed of polynomials, exponentials, and trigonometric functions are continuous across their entire domains. Discontinuities arise at asymptotes, step changes, or undefined holes.

### Worked Example 3: Verifying Continuity
**Problem:** Determine if the piecewise function is continuous at $x = 3$.
$$
f(x) = \begin{cases} 
x^2 - 1 & x < 3 \\ 
2x + 2 & x \geq 3 
\end{cases}
$$

**Solution:**
1. Check $f(3)$: $f(3) = 2(3) + 2 = 8$.
2. Check left-hand limit ($x \to 3^-$): $\lim_{x \to 3^-} (x^2 - 1) = 3^2 - 1 = 8$.
3. Check right-hand limit ($x \to 3^+$): $\lim_{x \to 3^+} (2x + 2) = 2(3) + 2 = 8$.

Since $\lim_{x \to 3^-} f(x) = \lim_{x \to 3^+} f(x) = f(3) = 8$, the function is **continuous** at $x = 3$.

## 4. Concept Drills
Test your understanding. Select your answer to immediately reveal the worked correction.

```drill
Question: Evaluate the limit: $\lim_{x \to \infty} \frac{3x^2 + 5x - 1}{2x^2 - x + 4}$
Options:
A) $\infty$
B) $0$
C) $1.5$
D) $3$
Answer: C
Explanation: For rational functions approaching infinity, divide all terms by the highest power of $x$ in the denominator ($x^2$ in this case). 
$$ \lim_{x \to \infty} \frac{3 + \frac{5}{x} - \frac{1}{x^2}}{2 - \frac{1}{x} + \frac{4}{x^2}} $$
As $x \to \infty$, all terms with $x$ in the denominator approach $0$.
$$ = \frac{3 + 0 - 0}{2 - 0 + 0} = \frac{3}{2} = 1.5 $$
```

```drill
Question: Evaluate using L'Hôpital's Rule: $\lim_{x \to 0} \frac{e^{2x} - 1}{x}$
Options:
A) $1$
B) $2$
C) $0$
D) $e^2$
Answer: B
Explanation: Direct substitution yields $\frac{e^0 - 1}{0} = \frac{0}{0}$, which is an indeterminate form. 
Apply L'Hôpital's Rule by differentiating the numerator and denominator:
Numerator derivative: $\frac{d}{dx}[e^{2x} - 1] = 2e^{2x}$
Denominator derivative: $\frac{d}{dx}[x] = 1$
$$ \lim_{x \to 0} \frac{2e^{2x}}{1} = 2e^0 = 2(1) = 2 $$
```

```drill
Question: At which value of $x$ does the function $f(x) = \frac{1}{x^2 - 9}$ have a non-removable discontinuity (vertical asymptote)?
Options:
A) $x = 0$
B) $x = 9$
C) $x = \pm 3$
D) It is continuous everywhere
Answer: C
Explanation: The function is undefined when the denominator is equal to zero. 
Set the denominator to zero: $x^2 - 9 = 0$.
Factor the difference of squares: $(x - 3)(x + 3) = 0$.
Therefore, $x = 3$ and $x = -3$. Since the numerator does not equal zero at these points, these discontinuities cannot be cancelled out (they are non-removable asymptotes).
```
