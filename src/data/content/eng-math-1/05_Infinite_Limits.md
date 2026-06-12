# 5. Infinite Limits & Vertical Asymptotes

Often, as a function's input $x$ approaches a specific value $c$, the output of the function grows without bound. In these cases, the limit does not exist as a finite number, but we use the symbol $\infty$ or $-\infty$ to precisely describe *how* it fails to exist.

### Defining Infinite Limits
We say:
$$\lim_{x \to c} f(x) = \infty$$
if, as $x$ gets arbitrarily close to $c$, the values of $f(x)$ become arbitrarily large and positive.

Similarly, we say:
$$\lim_{x \to c} f(x) = -\infty$$
if the values of $f(x)$ become arbitrarily large and negative.

### Vertical Asymptotes
Whenever a function exhibits an infinite limit as it approaches a value $c$ (from the left, right, or both), the vertical line $x = c$ is called a **vertical asymptote**.

Vertical asymptotes most commonly occur in rational functions $\frac{P(x)}{Q(x)}$ at values where the denominator $Q(c) = 0$ but the numerator $P(c) \neq 0$. If both are zero, it is an indeterminate form, which may be a hole instead of an asymptote.

### Worked Example 1: Rational Function Asymptote
**Evaluate:** $\lim_{x \to 3} \frac{1}{(x-3)^2}$

**Solution:**
As $x$ approaches 3, the denominator $(x-3)^2$ approaches 0. Because any real number squared is strictly positive, the denominator is always a very small *positive* number. 
Dividing 1 by a very small positive number yields a very large positive number.
$$ \lim_{x \to 3} \frac{1}{(x-3)^2} = \infty $$
The line $x = 3$ is a vertical asymptote.

### Worked Example 2: Differing One-Sided Infinite Limits
**Evaluate:** $\lim_{x \to 0} \frac{1}{x}$

**Solution:**
As $x$ approaches 0 from the right ($x \to 0^+$), we divide 1 by very small *positive* numbers (e.g., $1/0.001 = 1000$).
$$ \lim_{x \to 0^+} \frac{1}{x} = \infty $$

As $x$ approaches 0 from the left ($x \to 0^-$), we divide 1 by very small *negative* numbers (e.g., $1/-0.001 = -1000$).
$$ \lim_{x \to 0^-} \frac{1}{x} = -\infty $$

Because the left and right limits are different (one goes up, one goes down), the overall limit $\lim_{x \to 0} \frac{1}{x}$ Does Not Exist (DNE), though the line $x=0$ is still a vertical asymptote.


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Infinite Limits",
        "icon": "BrainCircuit",
        "description": "Core Concept: Infinite Limits"
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
