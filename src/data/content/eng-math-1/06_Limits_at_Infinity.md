# 6. Limits at Infinity & Horizontal Asymptotes

Instead of asking what happens to $f(x)$ as $x$ approaches a specific number, engineering analysis frequently asks what happens to a system over a long period of time, or as variables grow without bound. This is the concept of a limit at infinity.

### Evaluating Limits at Infinity
We evaluate the behavior of $f(x)$ as $x \to \infty$ or $x \to -\infty$. 

If the function eventually settles down and approaches a single finite value $L$ as $x$ gets infinitely large, we write:
$$\lim_{x \to \infty} f(x) = L$$
In this case, the horizontal line $y = L$ is called a **horizontal asymptote**.

### Fundamental Rule of Limits at Infinity
For any rational number $r > 0$:
$$ \lim_{x \to \infty} \frac{1}{x^r} = 0 $$
*(Example: as $x$ gets massive, $1/x$ gets closer and closer to 0).*

### Solving Rational Functions at Infinity
When evaluating the limit of a polynomial fraction as $x \to \infty$, the standard algebraic technique is to divide every term in the numerator and denominator by the highest power of $x$ present in the denominator.

### Worked Example 1: Horizontal Asymptote
**Evaluate:** $\lim_{x \to \infty} \frac{4x^2 - 3x + 2}{2x^2 + 5}$

**Solution:**
The highest power of $x$ in the denominator is $x^2$. Divide all terms by $x^2$:
$$ \lim_{x \to \infty} \frac{\frac{4x^2}{x^2} - \frac{3x}{x^2} + \frac{2}{x^2}}{\frac{2x^2}{x^2} + \frac{5}{x^2}} $$
Simplify:
$$ = \lim_{x \to \infty} \frac{4 - \frac{3}{x} + \frac{2}{x^2}}{2 + \frac{5}{x^2}} $$
As $x \to \infty$, any term with $x$ in the denominator goes to 0:
$$ = \frac{4 - 0 + 0}{2 + 0} = \frac{4}{2} = 2 $$
The function has a horizontal asymptote at $y = 2$.

### The Shortcut Rule for Rational Functions
1. If the degree of the numerator **equals** the degree of the denominator, the limit is the ratio of their leading coefficients (as seen above: $4/2 = 2$).
2. If the degree of the numerator is **less than** the denominator, the limit is $0$. (e.g. $x/x^2 \to 0$).
3. If the degree of the numerator is **greater than** the denominator, the limit is $\pm\infty$ (no horizontal asymptote).


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Limits at Infinity",
        "icon": "BrainCircuit",
        "description": "Core Concept: Limits at Infinity"
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
