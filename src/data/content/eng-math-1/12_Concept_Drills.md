# 12. Concept Drills

Test your understanding of Limits & Continuity. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: Evaluate the limit: $\lim_{x \to 4} \frac{x^2 - 16}{x - 4}$
Options:
A) $0$
B) $4$
C) $8$
D) Undefined
Answer: C
Explanation: Direct substitution yields $\frac{0}{0}$, an indeterminate form. 
Factor the numerator (difference of squares):
$$ \frac{x^2 - 16}{x - 4} = \frac{(x-4)(x+4)}{x-4} $$
Cancel the $(x-4)$ terms:
$$ \lim_{x \to 4} (x + 4) = 4 + 4 = 8 $$
```

```drill
Question: Evaluate using L'Hôpital's Rule: $\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$
Options:
A) $0$
B) $0.5$
C) $1$
D) $\infty$
Answer: B
Explanation: Substitution yields $\frac{1 - 1 - 0}{0} = \frac{0}{0}$. Apply L'Hôpital's Rule:
$$ \lim_{x \to 0} \frac{e^x - 1}{2x} $$
Substitution yields $\frac{1 - 1}{0} = \frac{0}{0}$ again. Apply L'Hôpital's Rule a second time:
$$ \lim_{x \to 0} \frac{e^x}{2} $$
Evaluate: $\frac{e^0}{2} = \frac{1}{2} = 0.5$.
```

```drill
Question: Determine the horizontal asymptote of $f(x) = \frac{5x^3 - 2x + 1}{7x^3 + 4x^2}$.
Options:
A) $y = 0$
B) $y = \frac{5}{7}$
C) $y = \frac{5}{4}$
D) No horizontal asymptote
Answer: B
Explanation: To find the horizontal asymptote, evaluate $\lim_{x \to \infty} f(x)$. 
Because the highest degree of the numerator ($x^3$) is identical to the highest degree of the denominator ($x^3$), the limit as $x \to \infty$ is simply the ratio of their leading coefficients.
Leading coefficient of numerator: 5
Leading coefficient of denominator: 7
Therefore, $y = \frac{5}{7}$.
```

```drill
Question: Is the function $f(x) = \frac{x^2 - 9}{x - 3}$ continuous at $x = 3$?
Options:
A) Yes, because the limit is 6.
B) Yes, because the function evaluates to 0.
C) No, because it has a vertical asymptote.
D) No, because $f(3)$ is undefined.
Answer: D
Explanation: For a function to be continuous at $x=c$, three conditions must be met. The very first condition is that $f(c)$ must be defined. 
If we plug 3 into the function: $f(3) = \frac{3^2 - 9}{3 - 3} = \frac{0}{0}$. 
Because division by zero is undefined, $f(3)$ does not exist. It fails the first condition of continuity. (It has a removable discontinuity, or "hole", at $x=3$, but it is not continuous).
```


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Concept Drills",
        "icon": "BrainCircuit",
        "description": "Core Concept: Concept Drills"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Indeterminate Form",
        "icon": "ArrowRightCircle",
        "description": "0/0 or inf/inf requires further manipulation."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Algebraic Manipulation",
        "icon": "ArrowRightCircle",
        "description": "Factor, conjugate, or simplify."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "L'Hôpital's Rule",
        "icon": "CheckCircle",
        "description": "Apply derivatives if applicable."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    }
  ],
  "edges": [
    {
      "source": "1",
      "target": "2",
      "animated": true
    },
    {
      "source": "2",
      "target": "3",
      "animated": true
    },
    {
      "source": "3",
      "target": "4",
      "animated": true
    }
  ]
}
```
