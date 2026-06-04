# Concept Drills

Test your understanding. Select your answer to immediately reveal the worked correction.

```drill
Question: What is the derivative of $f(x) = x^3 \sin(x)$?
Options:
A) $3x^2 \cos(x)$
B) $3x^2 \sin(x) - x^3 \cos(x)$
C) $3x^2 \sin(x) + x^3 \cos(x)$
D) $x^3 \cos(x)$
Answer: C
Explanation: Use the Product Rule: $(uv)' = u'v + uv'$.
Let $u = x^3$ and $v = \sin(x)$.
Then $u' = 3x^2$ and $v' = \cos(x)$.
Substitute these into the formula:
$$ f'(x) = (3x^2)(\sin x) + (x^3)(\cos x) = 3x^2 \sin(x) + x^3 \cos(x) $$
```

```drill
Question: Find $\frac{dy}{dx}$ if $y = \ln(x^2 + 4x)$.
Options:
A) $\frac{1}{x^2 + 4x}$
B) $\frac{2x + 4}{x^2 + 4x}$
C) $\frac{1}{2x + 4}$
D) $\frac{2}{x}$
Answer: B
Explanation: Use the Chain Rule. The derivative of $\ln(u)$ is $\frac{1}{u} \cdot u'$.
Let $u = x^2 + 4x$. Then $u' = 2x + 4$.
$$ \frac{dy}{dx} = \frac{1}{x^2 + 4x} \cdot (2x + 4) = \frac{2x + 4}{x^2 + 4x} $$
```

```drill
Question: Determine the slope of the tangent line to the curve $x^3 + y^3 = 9$ at the point $(1, 2)$.
Options:
A) $-\frac{1}{4}$
B) $\frac{1}{4}$
C) $-4$
D) $-\frac{1}{2}$
Answer: A
Explanation: Use implicit differentiation.
$$ \frac{d}{dx}[x^3 + y^3] = \frac{d}{dx}[9] $$
$$ 3x^2 + 3y^2 \frac{dy}{dx} = 0 $$
Solve for $\frac{dy}{dx}$:
$$ \frac{dy}{dx} = -\frac{3x^2}{3y^2} = -\frac{x^2}{y^2} $$
Evaluate at $(x, y) = (1, 2)$:
$$ m = -\frac{(1)^2}{(2)^2} = -\frac{1}{4} $$
```
