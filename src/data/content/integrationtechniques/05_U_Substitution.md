# 5. U-Substitution (The Reverse Chain Rule)

In differential calculus, the Chain Rule allows us to differentiate composite functions—functions nested inside other functions. In integral calculus, when we encounter a composite function, we must systematically "un-nest" it. This reversing process is called **Integration by Substitution**, or affectionately known by engineers and mathematicians as "U-Sub."

U-Substitution is heavily utilized when an integrand contains a composite function alongside the derivative of its "inner" function. In engineering contexts, this happens constantly. For example, when calculating the total work done by a non-linear spring force, or finding the total fluid accumulated in a tank when the flow rate is a complex nested function of time, U-substitution simplifies the complex geometry into a manageable form.

### The Mechanism of U-Substitution
The fundamental goal of U-Substitution is to transform a difficult integral with respect to $x$ into a simpler integral with respect to a new variable, $u$. 

If you have an integral of the form $\int f(g(x)) \cdot g'(x) \, dx$:
1. **Identify the inner function:** Let $u = g(x)$.
2. **Find the differential:** Take the derivative of $u$ with respect to $x$, which gives $\frac{du}{dx} = g'(x)$. Multiply by $dx$ to get $du = g'(x) \, dx$.
3. **Substitute:** Replace all instances of $x$ and $dx$ in the original integral, transforming it entirely into the $u$-domain: $\int f(u) \, du$.
4. **Integrate:** Compute the antiderivative with respect to $u$.
5. **Back-substitute:** Replace $u$ with the original $g(x)$ to express the final answer in terms of $x$.

*Note on Definite Integrals:* If your integral has bounds (e.g., from $x=a$ to $x=b$), you must also plug those $x$-bounds into your equation $u = g(x)$ to find the new $u$-bounds. If you do this, you do *not* need to back-substitute in step 5!

---

### Worked Examples

#### Example 1: Easy - Standard U-Substitution
**Problem:** Evaluate $\int 2x \cos(x^2) \, dx$. This could represent the variable force applied over a distance.

**Solution:**
Notice we have a composite function, $\cos(x^2)$. The inner function is $x^2$, and conveniently, its exact derivative ($2x$) is multiplying the cosine term.

1. Let $u = x^2$.
2. Then the differential is $du = 2x \, dx$.
3. Substitute these into the integral: $\int \cos(\mathbf{x^2}) \cdot \mathbf{2x \, dx} \implies \int \cos(u) \, du$.
4. Integrate with respect to $u$: 
   $$ \int \cos(u) \, du = \sin(u) + C $$
5. Substitute $x^2$ back in place of $u$:
   $$ \sin(x^2) + C $$

#### Example 2: Medium - Adjusting for Constants
Often, the derivative sitting outside the composite function is off by a constant multiplier. We can fix this using algebra.

**Problem:** Evaluate $\int x^2 e^{x^3} \, dx$. 

**Solution:**
1. Let $u = x^3$.
2. Then $du = 3x^2 \, dx$.
3. Our integral has $x^2 \, dx$, but our differential is $3x^2 \, dx$. To make it match exactly, divide both sides of our differential equation by 3: 
   $$ \frac{1}{3}du = x^2 \, dx $$
4. Substitute into the integral:
   $$ \int e^{x^3} (x^2 \, dx) = \int e^u \left(\frac{1}{3}du\right) $$
5. Pull the constant out of the integral and solve:
   $$ \frac{1}{3} \int e^u \, du = \frac{1}{3} e^u + C $$
6. Substitute back $u = x^3$:
   $$ \frac{1}{3} e^{x^3} + C $$

#### Example 3: Hard - Definite Integral Changing Bounds
**Problem:** Evaluate the definite integral $\int_{0}^{\pi/2} \sin^2(x) \cos(x) \, dx$. This is equivalent to finding the energy of a specific wave pulse.

**Solution:**
Rewrite $\sin^2(x)$ as $(\sin(x))^2$ to clearly see the inner function.
1. Let $u = \sin(x)$.
2. Then $du = \cos(x) \, dx$.
3. **Crucial Step - Change the bounds!** 
   - When $x = 0$, $u = \sin(0) = 0$.
   - When $x = \pi/2$, $u = \sin(\pi/2) = 1$.
4. Substitute everything to form the new definite integral entirely in $u$:
   $$ \int_{0}^{1} u^2 \, du $$
5. Integrate:
   $$ \left[ \frac{u^3}{3} \right]_{0}^{1} $$
6. Evaluate the bounds directly (no need to go back to $x$!):
   $$ = \frac{(1)^3}{3} - \frac{(0)^3}{3} = \frac{1}{3} $$

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "U-Substitution",
        "icon": "BrainCircuit",
        "description": "Reversing the Chain Rule for nested functions."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Identify Inner Function",
        "icon": "Target",
        "description": "Let u = g(x), the deepest nested term."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Compute Differential",
        "icon": "Scissors",
        "description": "Find du = g'(x) dx and adjust constants."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Transform & Integrate",
        "icon": "RefreshCw",
        "description": "Solve in u-domain, then back-substitute."
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
