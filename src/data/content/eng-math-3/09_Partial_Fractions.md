# 9. Partial Fraction Decomposition

In engineering fields like control systems, signal processing, and electrical circuit analysis, we frequently model systems using rational functions (polynomials divided by polynomials). A classic example is computing the **Inverse Laplace Transform** to find the time-domain response of a linear time-invariant (LTI) system from its transfer function in the $s$-domain. These rational functions are often incredibly complex.

When integrating such rational functions directly is impossible (and U-substitution fails), we use an algebraic lifesaver called **Partial Fraction Decomposition**. This technique takes a large, unwieldy fraction and shatters it into a sum of much simpler, easily integrable fractions.

**Important Prerequisite:** Partial fractions only work on *proper* rational functions, meaning the degree of the numerator must be strictly less than the degree of the denominator. If the numerator's degree is equal to or greater than the denominator's, you **must** perform polynomial long division first.

## The Four Cases of Denominators

The first step in any decomposition is to completely factor the denominator. The types of factors you find dictate the structure of your partial fractions.

### Case 1: Distinct Linear Factors
If the denominator factors into non-repeating linear terms like $(ax+b)(cx+d)$, each factor gets its own fraction with a simple constant numerator:
$$ \frac{P(x)}{(ax+b)(cx+d)} = \frac{A}{ax+b} + \frac{B}{cx+d} $$

### Case 2: Repeated Linear Factors
If a linear factor is repeated, like $(ax+b)^n$, you must include a fraction for *every ascending power* of that factor up to $n$:
$$ \frac{P(x)}{(ax+b)^3} = \frac{A}{ax+b} + \frac{B}{(ax+b)^2} + \frac{C}{(ax+b)^3} $$

### Case 3: Distinct Irreducible Quadratic Factors
If the denominator contains an irreducible quadratic factor (one that cannot be factored into real numbers, i.e., $b^2 - 4ac < 0$) like $(ax^2+bx+c)$, the corresponding numerator must be a linear term:
$$ \frac{P(x)}{(ax^2+bx+c)(dx+e)} = \frac{Ax+B}{ax^2+bx+c} + \frac{C}{dx+e} $$

### Case 4: Repeated Irreducible Quadratic Factors
Similar to Case 2, if an irreducible quadratic is squared or raised to a higher power, you must include a term for each ascending power, all with linear numerators:
$$ \frac{P(x)}{(ax^2+bx+c)^2} = \frac{Ax+B}{ax^2+bx+c} + \frac{Cx+D}{(ax^2+bx+c)^2} $$

---

## Example 1: Easy Level (Distinct Linear Factors)
**Problem:** Evaluate $\int \frac{3x+11}{x^2-x-6} dx$.

**Solution:**
1. **Factor the denominator:** $x^2-x-6 = (x-3)(x+2)$. Since these are distinct linear factors, this is Case 1.
2. **Set up the decomposition:**
   $$ \frac{3x+11}{(x-3)(x+2)} = \frac{A}{x-3} + \frac{B}{x+2} $$
3. **Clear the denominators:** Multiply the entire equation by $(x-3)(x+2)$.
   $$ 3x + 11 = A(x+2) + B(x-3) $$
4. **Solve for constants (The "Strategic Roots" Method):** 
   Pick values for $x$ that zero out certain terms.
   *   Let $x = -2$: 
       $$ 3(-2) + 11 = A(0) + B(-2 - 3) \implies 5 = -5B \implies B = -1 $$
   *   Let $x = 3$:
       $$ 3(3) + 11 = A(3+2) + B(0) \implies 20 = 5A \implies A = 4 $$
5. **Rewrite and integrate:**
   Substitute $A$ and $B$ back into the integral.
   $$ \int \left( \frac{4}{x-3} - \frac{1}{x+2} \right) dx $$
   These integrate directly into natural logarithms:
   $$ 4 \ln|x-3| - \ln|x+2| + C $$

---

## Example 2: Medium Level (Repeated Linear Factors)
**Problem:** Evaluate $\int \frac{x^2+2x-1}{x^3-x^2} dx$.

**Solution:**
1. **Factor the denominator:** $x^3-x^2 = x^2(x-1)$. The $x^2$ is a repeated linear factor (it's $(x-0)^2$), and $(x-1)$ is a distinct linear factor. This is a mix of Case 1 and Case 2.
2. **Set up the decomposition:**
   $$ \frac{x^2+2x-1}{x^2(x-1)} = \frac{A}{x} + \frac{B}{x^2} + \frac{C}{x-1} $$
3. **Clear the denominators:** Multiply by $x^2(x-1)$.
   $$ x^2 + 2x - 1 = Ax(x-1) + B(x-1) + Cx^2 $$
4. **Solve for constants:**
   *   Let $x = 1$ to kill $A$ and $B$:
       $$ (1)^2 + 2(1) - 1 = C(1)^2 \implies 2 = C $$
   *   Let $x = 0$ to kill $A$ and $C$:
       $$ (0)^2 + 2(0) - 1 = B(0-1) \implies -1 = -B \implies B = 1 $$
   *   To find $A$, we can substitute any other value for $x$, or compare coefficients of $x^2$. Let's compare $x^2$ coefficients on both sides:
       Left side $x^2$ coefficient: $1$
       Right side $x^2$ coefficient: $A + C$
       So, $1 = A + C \implies 1 = A + 2 \implies A = -1$.
5. **Rewrite and integrate:**
   $$ \int \left( \frac{-1}{x} + \frac{1}{x^2} + \frac{2}{x-1} \right) dx $$
   Rewrite $1/x^2$ as $x^{-2}$ for the power rule:
   $$ -\ln|x| - x^{-1} + 2\ln|x-1| + C $$
   $$ -\ln|x| - \frac{1}{x} + 2\ln|x-1| + C $$

---

## Example 3: Hard Level (Irreducible Quadratic Factor)
**Problem:** Evaluate $\int \frac{2x^2-x+4}{x^3+4x} dx$.

**Solution:**
1. **Factor the denominator:** $x^3+4x = x(x^2+4)$. The term $(x^2+4)$ is an irreducible quadratic. This brings in Case 3.
2. **Set up the decomposition:**
   Notice that the quadratic factor gets a linear numerator.
   $$ \frac{2x^2-x+4}{x(x^2+4)} = \frac{A}{x} + \frac{Bx+C}{x^2+4} $$
3. **Clear the denominators:** Multiply by $x(x^2+4)$.
   $$ 2x^2 - x + 4 = A(x^2+4) + (Bx+C)x $$
   $$ 2x^2 - x + 4 = Ax^2 + 4A + Bx^2 + Cx $$
4. **Solve for constants (Comparing Coefficients):**
   Group the terms by powers of $x$:
   $$ 2x^2 - x + 4 = (A+B)x^2 + (C)x + (4A) $$
   Now equate the coefficients from the left side to the right side:
   *   Constant terms: $4 = 4A \implies A = 1$
   *   $x$ terms: $-1 = C \implies C = -1$
   *   $x^2$ terms: $2 = A + B \implies 2 = 1 + B \implies B = 1$
5. **Rewrite and integrate:**
   $$ \int \left( \frac{1}{x} + \frac{1x - 1}{x^2+4} \right) dx $$
   To integrate the second fraction, split it into two:
   $$ \int \frac{1}{x} dx + \int \frac{x}{x^2+4} dx - \int \frac{1}{x^2+4} dx $$
6. **Evaluate each part:**
   *   $\int \frac{1}{x} dx = \ln|x|$
   *   $\int \frac{x}{x^2+4} dx$ requires U-Substitution ($u = x^2+4$, $du = 2x dx$). This evaluates to $\frac{1}{2}\ln|x^2+4|$.
   *   $\int \frac{1}{x^2+4} dx$ is an inverse tangent form ($\int \frac{1}{x^2+a^2} dx = \frac{1}{a}\arctan(\frac{x}{a})$). With $a=2$, this is $\frac{1}{2}\arctan(\frac{x}{2})$.
7. **Final Answer:**
   $$ \ln|x| + \frac{1}{2}\ln(x^2+4) - \frac{1}{2}\arctan\left(\frac{x}{2}\right) + C $$
   *(Note: The absolute value is dropped on $x^2+4$ because it is always positive).*

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Rational Function",
        "icon": "DivideSquare",
        "description": "Check if numerator degree < denominator degree."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Factor Denominator",
        "icon": "Filter",
        "description": "Break down into linear & quadratic terms."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Decompose",
        "icon": "SplitSquareHorizontal",
        "description": "Assign variables (A, B, Cx+D) based on cases."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Solve & Integrate",
        "icon": "Activity",
        "description": "Find constants, evaluate simpler integrals."
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
