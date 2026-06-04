# Concept Drills

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
