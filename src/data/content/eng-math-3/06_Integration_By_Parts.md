# 6. Integration By Parts (The Reverse Product Rule)

While U-Substitution perfectly reverses the Chain Rule, **Integration by Parts** serves as the inverse operation to the Product Rule. It is an indispensable technique used to integrate the product of two distinct, unrelated functions when standard substitution fails. Consider calculating the moment of inertia in structural engineering, determining the center of mass of a non-uniform object, or analyzing electrical signals in signal processing—these scenarios often produce integrals like $\int x \sin(x) \, dx$ or $\int x e^x \, dx$ which require integration by parts.

### The Formula
The Product Rule for derivatives states that $(uv)' = u'v + uv'$. 
If we integrate both sides with respect to $x$ and algebraically rearrange the terms, we arrive at the Integration by Parts formula:

$$ \int u \, dv = uv - \int v \, du $$

To apply this formula, you must artificially split your original integrand into two distinct components:
*   **$u$**: A part of the integrand that becomes simpler (or at least no more complicated) when you take its derivative.
*   **$dv$**: The remaining part of the integrand (including the $dx$), which must be a function you know how to easily integrate.

### The LIATE Rule (How to choose $u$)
Choosing the correct $u$ is half the battle. If you pick the wrong $u$, the resulting integral $\int v \, du$ will often be worse than the one you started with! 
Engineers use the **LIATE** acronym as a priority list for choosing $u$. Pick the first function type that appears on this list to be your $u$:

1.  **L**ogarithmic ($\ln x$)
2.  **I**nverse Trigonometric ($\arctan x$, $\arcsin x$)
3.  **A**lgebraic ($x$, $x^2$, $3x^5$)
4.  **T**rigonometric ($\sin x$, $\cos x$)
5.  **E**xponential ($e^x$)

Once $u$ is chosen, the rest of the expression *must* be $dv$.

---

### Worked Examples

#### Example 1: Easy - Standard Application
**Problem:** Evaluate $\int x e^x \, dx$. This integral often appears when calculating the expected value in probability distributions.

**Solution:**
We have an Algebraic term ($x$) and an Exponential term ($e^x$). According to LIATE, Algebraic (A) comes before Exponential (E), so we set $u = x$.

1. **Assign parts:**
   - Let $u = x$ 
   - Let $dv = e^x \, dx$
2. **Differentiate $u$ and integrate $dv$:**
   - $du = dx$
   - $v = \int e^x \, dx = e^x$
3. **Apply the formula ($\int u \, dv = uv - \int v \, du$):**
   $$ \int x e^x \, dx = (x)(e^x) - \int (e^x)(dx) $$
4. **Evaluate the new integral:**
   $$ = x e^x - e^x + C $$

#### Example 2: Medium - Algebraic and Trigonometric
**Problem:** Evaluate $\int x \cos(x) \, dx$. Common in analyzing damped vibrations or signal modulation.

**Solution:**
Using LIATE, the Algebraic term ($x$) takes priority over the Trigonometric term ($\cos x$).

1. **Assign parts:**
   - Let $u = x$ $\implies du = dx$
   - Let $dv = \cos(x) \, dx$ $\implies v = \sin(x)$
2. **Apply the formula:**
   $$ \int x \cos(x) \, dx = x \sin(x) - \int \sin(x) \, dx $$
3. **Evaluate the new integral:**
   Recall that $\int \sin(x) \, dx = -\cos(x)$.
   $$ = x \sin(x) - (-\cos(x)) + C $$
   $$ = x \sin(x) + \cos(x) + C $$

#### Example 3: Hard - The "Hidden" 1
Integration by Parts isn't just for products of two obvious functions. Sometimes it is the only way to integrate a single, stubborn function by pretending it's multiplied by 1.

**Problem:** Evaluate $\int \ln(x) \, dx$. 

**Solution:**
We do not have a standard antiderivative for the natural logarithm. We must rewrite the integral as $\int \ln(x) \cdot 1 \, dx$.
By LIATE, Logarithms (L) are the highest priority for $u$.

1. **Assign parts:**
   - Let $u = \ln(x)$ $\implies du = \frac{1}{x} \, dx$
   - Let $dv = 1 \, dx$ $\implies v = x$
2. **Apply the formula:**
   $$ \int \ln(x) \, dx = x \ln(x) - \int x \left(\frac{1}{x}\right) dx $$
3. **Simplify and evaluate the new integral:**
   The $x$ and $\frac{1}{x}$ cancel out perfectly!
   $$ = x \ln(x) - \int 1 \, dx $$
   $$ = x \ln(x) - x + C $$

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Integration By Parts",
        "icon": "BrainCircuit",
        "description": "Reversing the Product Rule for multiplied functions."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "The LIATE Rule",
        "icon": "ListOrdered",
        "description": "Prioritize choice of u: Log, Inv Trig, Alg, Trig, Exp."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Assign u and dv",
        "icon": "SplitSquareHorizontal",
        "description": "Differentiate u to get du, integrate dv to get v."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Apply Formula",
        "icon": "Calculator",
        "description": "Integral of udv = uv - Integral of vdu."
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
