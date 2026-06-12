# 9. Partial Fraction Decomposition

When integrating rational functions (polynomials divided by polynomials) where U-substitution fails, we can often break the large fraction down into a sum of much simpler, easily integrable fractions.

This algebraic technique is called **Partial Fraction Decomposition**. It only works if the degree of the numerator is strictly less than the degree of the denominator. (If it isn't, you must do polynomial long division first).

### The Four Cases of Denominators
To decompose a fraction, you must first completely factor the denominator.

**Case 1: Distinct Linear Factors**
If the denominator is $(ax+b)(cx+d)$, break it up like this:
$$ \frac{P(x)}{(ax+b)(cx+d)} = \frac{A}{ax+b} + \frac{B}{cx+d} $$

**Case 2: Repeated Linear Factors**
If the denominator is $(ax+b)^2$, you must include all ascending powers:
$$ \frac{P(x)}{(ax+b)^2} = \frac{A}{ax+b} + \frac{B}{(ax+b)^2} $$

**Case 3: Distinct Quadratic Factors**
If the denominator contains an irreducible quadratic like $(ax^2+bx+c)$, its numerator must be a linear term:
$$ \frac{P(x)}{(ax^2+bx+c)(dx+e)} = \frac{Ax+B}{ax^2+bx+c} + \frac{C}{dx+e} $$

**Case 4: Repeated Quadratic Factors**
If a quadratic is squared $(ax^2+bx+c)^2$, treat it like Case 2 but with linear numerators:
$$ \frac{P(x)}{(ax^2+bx+c)^2} = \frac{Ax+B}{ax^2+bx+c} + \frac{Cx+D}{(ax^2+bx+c)^2} $$

### Worked Example: Case 1
**Problem:** Evaluate $\int \frac{3x+11}{x^2-x-6} dx$.

**Solution:**
1. Factor the denominator: $x^2-x-6 = (x-3)(x+2)$.
2. Set up the decomposition:
   $$ \frac{3x+11}{(x-3)(x+2)} = \frac{A}{x-3} + \frac{B}{x+2} $$
3. Multiply everything by the common denominator $(x-3)(x+2)$:
   $$ 3x + 11 = A(x+2) + B(x-3) $$
4. Solve for A and B. The easiest method is picking strategic values for $x$.
   Let $x = -2$:
   $$ 3(-2) + 11 = A(0) + B(-2 - 3) $$
   $$ 5 = -5B \implies B = -1 $$
   Let $x = 3$:
   $$ 3(3) + 11 = A(3+2) + B(0) $$
   $$ 20 = 5A \implies A = 4 $$
5. Rewrite the integral using $A=4$ and $B=-1$:
   $$ \int \left( \frac{4}{x-3} - \frac{1}{x+2} \right) dx $$
6. Integrate using the natural log rule ($\int \frac{1}{u} du = \ln|u|$):
   $$ 4 \ln|x-3| - \ln|x+2| + C $$


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Partial Fractions",
        "icon": "BrainCircuit",
        "description": "Core Concept: Partial Fractions"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Fundamental Theorem",
        "icon": "ArrowRightCircle",
        "description": "Linking derivatives and integrals."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "U-Substitution",
        "icon": "ArrowRightCircle",
        "description": "Reverse chain rule."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Integration by Parts",
        "icon": "CheckCircle",
        "description": "Reverse product rule."
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
