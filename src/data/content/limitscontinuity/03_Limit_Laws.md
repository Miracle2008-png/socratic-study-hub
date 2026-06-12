# 3. Limit Laws & Algebraic Manipulation

While graphical evaluation provides excellent intuition and the $\epsilon$-$\delta$ definition guarantees rigorous proofs, applying them to complex engineering equations is extremely tedious. In practice, engineers and mathematicians rely on established **Limit Laws** and **Algebraic Manipulation** techniques to analytically solve limits with speed and precision.

### The Engineering Power of Limit Laws
Limit laws rely on the principle of *superposition*. If an engineering system is composed of multiple independent subsystems, the behavior of the complex system at a boundary can be found by evaluating the limits of the individual parts and combining them.

Assuming that $\lim_{x \to c} f(x)$ and $\lim_{x \to c} g(x)$ both securely exist, and $k$ is a constant:

1. **Sum Rule (Superposition):** $\lim_{x \to c} [f(x) + g(x)] = \lim_{x \to c} f(x) + \lim_{x \to c} g(x)$
2. **Difference Rule:** $\lim_{x \to c} [f(x) - g(x)] = \lim_{x \to c} f(x) - \lim_{x \to c} g(x)$
3. **Constant Multiple Rule (Amplification):** $\lim_{x \to c} [k \cdot f(x)] = k \cdot \lim_{x \to c} f(x)$
4. **Product Rule:** $\lim_{x \to c} [f(x) \cdot g(x)] = \lim_{x \to c} f(x) \cdot \lim_{x \to c} g(x)$
5. **Quotient Rule:** $\lim_{x \to c} \left[ \frac{f(x)}{g(x)} \right] = \frac{\lim_{x \to c} f(x)}{\lim_{x \to c} g(x)}$ *(Critically provided the limit of the denominator is NOT 0)*
6. **Power Rule:** $\lim_{x \to c} [f(x)]^n = \left[ \lim_{x \to c} f(x) \right]^n$

### Direct Substitution Property
Thanks to these laws, for any "well-behaved" function—such as polynomials, rational functions, trigonometric functions, exponentials, or logarithmic functions $f(x)$—if $c$ is within the continuous domain of the function, the limit can be evaluated via simple **direct substitution**:
$$ \lim_{x \to c} f(x) = f(c) $$

### The Threat of Indeterminate Forms
The smooth operation of Direct Substitution breaks down when we encounter a denominator of zero. Specifically, if substitution yields the form $\frac{0}{0}$ or $\frac{\infty}{\infty}$, this is called an **Indeterminate Form**. 

In engineering, $\frac{0}{0}$ does not mean "undefined" or "no answer." It implies a critical threshold, like finding the instantaneous velocity where $v = \frac{\Delta \text{position}}{\Delta \text{time}} = \frac{0}{0}$ exactly at the instant. An indeterminate form is a mathematical mask; the true limit is hiding underneath, and we must use algebra to rip off the mask.

---

### Mathematical Examples

#### Example 1 (Easy): Applying Limit Laws and Substitution
**Problem:** Calculate the limit of the combined dynamic pressure equation $\lim_{x \to 2} (3x^2 - 4x + 5)$.

**Solution:**
Because this is a standard polynomial, it is continuous everywhere. We can utilize limit laws, which ultimately resolve into direct substitution.
$$ \lim_{x \to 2} (3x^2 - 4x + 5) = 3(2)^2 - 4(2) + 5 $$
$$ = 3(4) - 8 + 5 $$
$$ = 12 - 8 + 5 = 9 $$
The limit is 9.

#### Example 2 (Medium): Algebraic Manipulation via Factoring
**Problem:** An equation modeling the stress of a truss collapses to $\frac{0}{0}$ at the boundary $x=4$. Evaluate the true limit: 
$$ \lim_{x \to 4} \frac{x^2 - 2x - 8}{x - 4} $$

**Solution:**
1. **Check Direct Substitution:** $\frac{4^2 - 2(4) - 8}{4 - 4} = \frac{16 - 8 - 8}{0} = \frac{0}{0}$. We have an indeterminate form.
2. **Factor the Numerator:** We need two numbers that multiply to -8 and add to -2. Those are -4 and +2.
   $$ \lim_{x \to 4} \frac{(x - 4)(x + 2)}{x - 4} $$
3. **Cancel the Problematic Term:** Because $x$ is approaching 4 but *never exactly equals 4*, the term $(x-4)$ is close to zero but not zero. We can safely cancel it from top and bottom.
   $$ \lim_{x \to 4} (x + 2) $$
4. **Evaluate via Substitution:**
   $$ = 4 + 2 = 6 $$
The limit exists and equals 6.

#### Example 3 (Hard): Algebraic Manipulation via Conjugates
**Problem:** When calculating thermal expansion with square roots, an engineer encounters this limit at boundary $t = 0$:
$$ \lim_{t \to 0} \frac{\sqrt{t^2 + 16} - 4}{t^2} $$

**Solution:**
1. **Check Substitution:** $\frac{\sqrt{0 + 16} - 4}{0} = \frac{4 - 4}{0} = \frac{0}{0}$. Indeterminate form.
2. **Multiply by the Conjugate:** To eliminate the square root in the numerator, multiply the top and bottom by the conjugate $(\sqrt{t^2 + 16} + 4)$.
   $$ \lim_{t \to 0} \frac{(\sqrt{t^2 + 16} - 4)}{t^2} \cdot \frac{(\sqrt{t^2 + 16} + 4)}{(\sqrt{t^2 + 16} + 4)} $$
3. **Expand the Numerator:** Use the difference of squares rule $(a-b)(a+b) = a^2 - b^2$.
   $$ \lim_{t \to 0} \frac{(t^2 + 16) - 16}{t^2(\sqrt{t^2 + 16} + 4)} $$
4. **Simplify:**
   $$ \lim_{t \to 0} \frac{t^2}{t^2(\sqrt{t^2 + 16} + 4)} $$
5. **Cancel the $t^2$ Term:**
   $$ \lim_{t \to 0} \frac{1}{\sqrt{t^2 + 16} + 4} $$
6. **Substitute $t=0$:**
   $$ = \frac{1}{\sqrt{0 + 16} + 4} = \frac{1}{4 + 4} = \frac{1}{8} $$
The true limit is $\frac{1}{8}$.

#### Example 4 (Hard): Complex Fractions (Nested Denominators)
**Problem:** In parallel circuit resistance calculations, limits involving complex fractions often arise. Evaluate:
$$ \lim_{x \to 2} \frac{\frac{1}{x} - \frac{1}{2}}{x - 2} $$

**Solution:**
1. **Check Substitution:** $\frac{\frac{1}{2} - \frac{1}{2}}{2 - 2} = \frac{0}{0}$. Indeterminate form.
2. **Find a Common Denominator:** Focus on the numerator. The common denominator for $\frac{1}{x}$ and $\frac{1}{2}$ is $2x$.
   $$ \lim_{x \to 2} \frac{\frac{2}{2x} - \frac{x}{2x}}{x - 2} = \lim_{x \to 2} \frac{\frac{2 - x}{2x}}{x - 2} $$
3. **Rearrange the Complex Fraction:** Dividing by $(x-2)$ is the same as multiplying by $\frac{1}{x-2}$.
   $$ \lim_{x \to 2} \frac{2 - x}{2x(x - 2)} $$
4. **Factor out a Negative:** Notice that $(2 - x) = -(x - 2)$. Let's factor out $-1$ in the numerator to match the denominator.
   $$ \lim_{x \to 2} \frac{-(x - 2)}{2x(x - 2)} $$
5. **Cancel the $(x-2)$ Term:**
   $$ \lim_{x \to 2} \frac{-1}{2x} $$
6. **Substitute $x=2$:**
   $$ = \frac{-1}{2(2)} = -\frac{1}{4} $$

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Attempt Direct Substitution",
        "icon": "PlayCircle",
        "description": "Plug c into f(x)"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Real Number (L)",
        "icon": "CheckCircle",
        "description": "Done! Limit is L."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Indeterminate (0/0)",
        "icon": "AlertCircle",
        "description": "Needs Algebraic Manipulation"
      },
      "style": {
        "background": "#991b1b",
        "color": "#fee2e2"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Factor & Cancel",
        "icon": "Scissors",
        "description": "For polynomials"
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Conjugate Method",
        "icon": "Minimize2",
        "description": "For square roots"
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
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
      "source": "1",
      "target": "3",
      "animated": true
    },
    {
      "source": "3",
      "target": "4",
      "animated": true
    },
    {
      "source": "3",
      "target": "5",
      "animated": true
    }
  ]
}
```
