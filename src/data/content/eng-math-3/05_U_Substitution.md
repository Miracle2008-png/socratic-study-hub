# 5. U-Substitution (The Reverse Chain Rule)

When differentiating composite functions, we use the Chain Rule. When integrating those same functions, we must reverse the Chain Rule. This technique is called **Integration by Substitution**, or commonly, "U-Sub."

It is used when an integrand contains both a composite function *and* the derivative of its "inner" function.

### The Mechanism of U-Substitution
If you have an integral of the form $\int f(g(x)) \cdot g'(x) dx$:
1. Let $u = g(x)$ (the "inner" function).
2. Take the differential of both sides: $du = g'(x) dx$.
3. Substitute $u$ and $du$ into the integral, transforming it entirely into the $u$-domain: $\int f(u) du$.
4. Integrate with respect to $u$.
5. Substitute $g(x)$ back in place of $u$ to get the final answer in terms of $x$.

### Worked Example 1: Standard U-Substitution
**Problem:** Evaluate $\int 2x \cos(x^2) \, dx$.

**Solution:**
We see a composite function $\cos(x^2)$. The inner function is $x^2$, and conveniently, its derivative ($2x$) is sitting right next to it.

1. Let $u = x^2$.
2. Then $du = 2x \, dx$.
3. Look at the original integral: $\int \cos(\mathbf{x^2}) \cdot \mathbf{2x \, dx}$. We can cleanly swap these out for $u$ and $du$.
4. The integral becomes: $\int \cos(u) \, du$.
5. Integrate: $\int \cos(u) \, du = \sin(u) + C$.
6. Substitute $x^2$ back in: $\sin(x^2) + C$.

### Worked Example 2: Adjusting for Constants
Often, the derivative is off by a constant multiplier. We can fix this using algebra.

**Problem:** Evaluate $\int x^2 e^{x^3} \, dx$.

**Solution:**
1. Let $u = x^3$.
2. Then $du = 3x^2 \, dx$.
3. Our integral has $x^2 \, dx$, not $3x^2 \, dx$. To make it match, divide both sides of our differential equation by 3: 
   $\frac{1}{3}du = x^2 \, dx$.
4. Substitute into the integral:
   $$ \int e^u \left(\frac{1}{3}du\right) $$
5. Pull the constant out and integrate:
   $$ \frac{1}{3} \int e^u \, du = \frac{1}{3} e^u + C $$
6. Substitute back:
   $$ \frac{1}{3} e^{x^3} + C $$
