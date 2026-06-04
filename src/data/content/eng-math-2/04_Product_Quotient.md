# 4. Product & Quotient Rules

While the Sum Rule allows us to distribute the derivative across addition ($ (f+g)' = f' + g' $), this does **NOT** work for multiplication or division.
$(f \cdot g)' \neq f' \cdot g'$
To differentiate products and quotients, we require specialized rules.

### The Product Rule
If you have two functions multiplying each other, the derivative is the first function times the derivative of the second, PLUS the second function times the derivative of the first.
$$ \frac{d}{dx}[u(x)v(x)] = u'(x)v(x) + u(x)v'(x) $$

**Memory Trick:** "Derivative of the first, times the second. Plus derivative of the second, times the first."

#### Worked Example 1: Product Rule
**Problem:** Find the derivative of $f(x) = (x^2 + 3)(4x - 5)$.

**Solution:**
Let $u = x^2 + 3$ and $v = 4x - 5$.
Compute their individual derivatives:
$u' = 2x$
$v' = 4$
Apply the Product Rule formula:
$$ f'(x) = (2x)(4x - 5) + (x^2 + 3)(4) $$
Expand and simplify:
$$ = 8x^2 - 10x + 4x^2 + 12 $$
$$ = 12x^2 - 10x + 12 $$

### The Quotient Rule
If you have a function divided by another function, the rule is slightly more complex and involves subtraction. Order matters immensely here.
$$ \frac{d}{dx}\left[\frac{u(x)}{v(x)}\right] = \frac{u'(x)v(x) - u(x)v'(x)}{[v(x)]^2} $$

**Memory Trick:** "Low D-High minus High D-Low, all over Low squared."
(Where "Low" is the denominator and "High" is the numerator, and "D" means derivative).

#### Worked Example 2: Quotient Rule
**Problem:** Differentiate $y = \frac{3x + 1}{x^2 - 2}$.

**Solution:**
Identify High ($u$) and Low ($v$):
$u = 3x + 1 \implies u' = 3$
$v = x^2 - 2 \implies v' = 2x$

Apply the Quotient Rule ("Low D-High minus High D-Low"):
$$ y' = \frac{(x^2 - 2)(3) - (3x + 1)(2x)}{(x^2 - 2)^2} $$
Expand the numerator carefully:
$$ = \frac{(3x^2 - 6) - (6x^2 + 2x)}{(x^2 - 2)^2} $$
Combine like terms:
$$ = \frac{3x^2 - 6 - 6x^2 - 2x}{(x^2 - 2)^2} $$
$$ = \frac{-3x^2 - 2x - 6}{(x^2 - 2)^2} $$
