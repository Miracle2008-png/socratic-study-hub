# 12. Concept Drills

Test your mastery of Integration Techniques. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: Evaluate the indefinite integral: $\int (3x^2 + \cos(x)) dx$
Options:
A) $x^3 + \sin(x) + C$
B) $6x - \sin(x) + C$
C) $x^3 - \sin(x) + C$
D) $6x + \sin(x) + C$
Answer: A
Explanation: Integrate term by term. 
The reverse power rule for $3x^2$ is $\frac{3x^3}{3} = x^3$.
The integral of $\cos(x)$ is positive $\sin(x)$.
Therefore, the answer is $x^3 + \sin(x) + C$.
```

```drill
Question: What is the most appropriate technique to evaluate $\int x e^{x} dx$?
Options:
A) U-Substitution
B) Partial Fractions
C) Integration By Parts
D) Trigonometric Substitution
Answer: C
Explanation: The integrand is the product of two different types of functions (Algebraic $x$, and Exponential $e^x$). U-Substitution fails because the derivative of $x$ is 1, not $e^x$, and vice versa. Integration by Parts reverses the product rule and is designed exactly for this scenario. Following the LIATE rule, you would set $u = x$ and $dv = e^x dx$.
```

```drill
Question: Evaluate using U-Substitution: $\int 3x^2 (x^3 + 1)^4 dx$
Options:
A) $\frac{1}{5}(x^3 + 1)^5 + C$
B) $4(x^3 + 1)^3 + C$
C) $\frac{3x^3}{3} \cdot \frac{(x^3+1)^5}{5} + C$
D) $\frac{1}{4}(x^3 + 1)^5 + C$
Answer: A
Explanation: Let $u = x^3 + 1$.
The differential is $du = 3x^2 dx$.
Notice that $3x^2 dx$ perfectly matches the outside of the parenthesis in our integral. 
Substitute $u$ and $du$: $\int u^4 du$.
Integrate using the reverse power rule: $\frac{u^5}{5} + C$.
Substitute $x$ back in: $\frac{(x^3 + 1)^5}{5} + C$, which is the same as $\frac{1}{5}(x^3 + 1)^5 + C$.
```

```drill
Question: Does the improper integral $\int_{1}^{\infty} \frac{1}{x^3} dx$ converge or diverge?
Options:
A) Diverges to $\infty$
B) Converges to $1$
C) Converges to $0.5$
D) Converges to $0$
Answer: C
Explanation: Set up the limit: $\lim_{t \to \infty} \int_{1}^{t} x^{-3} dx$.
Integrate using reverse power rule: $\lim_{t \to \infty} \left[ \frac{x^{-2}}{-2} \right]_{1}^{t} = \lim_{t \to \infty} \left[ -\frac{1}{2x^2} \right]_{1}^{t}$.
Evaluate bounds: $\lim_{t \to \infty} \left( -\frac{1}{2t^2} - \left(-\frac{1}{2(1)^2}\right) \right)$.
Simplify: $\lim_{t \to \infty} \left( -\frac{1}{2t^2} + \frac{1}{2} \right)$.
As $t \to \infty$, the fraction $\frac{1}{2t^2} \to 0$. The result is $0 + \frac{1}{2} = 0.5$. It converges to a finite area.
```
