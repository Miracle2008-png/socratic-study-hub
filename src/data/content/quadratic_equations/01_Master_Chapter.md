# Quadratic Equations

## 1. Definition and Standard Form
A quadratic equation is a second-degree polynomial equation in a single variable $x$, with the standard form:
$$ ax^2 + bx + c = 0 $$
where $a, b, c \in \mathbb{R}$ and $a \neq 0$.

## 2. Methods of Solving Quadratic Equations

### Factoring
If the quadratic can be factored as $(px + q)(rx + s) = 0$, the roots are given by setting each factor to zero.

### Completing the Square
Transform the equation into the form $(x + h)^2 = k$, which leads directly to the solution via square roots.

### The Quadratic Formula
Derived from completing the square, the roots are:
$$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

## 3. The Discriminant and Nature of Roots
The term under the square root, $\Delta = b^2 - 4ac$, is the discriminant.
- $\Delta > 0$: Two distinct real roots.
- $\Delta = 0$: One real repeated root.
- $\Delta < 0$: Two complex conjugate roots.

## 4. Vieta's Formulas
For roots $x_1$ and $x_2$:
- Sum of roots: $x_1 + x_2 = -\frac{b}{a}$
- Product of roots: $x_1 x_2 = \frac{c}{a}$

## 5. Step-by-Step Solved Examples

### Example 1: Solving by Factoring
**Problem:** Solve $6x^2 - 11x - 10 = 0$
**Solution:**
1. Find two numbers that multiply to $ac = 6 \times (-10) = -60$ and add to $b = -11$. These are $-15$ and $4$.
2. Split the middle term: $6x^2 - 15x + 4x - 10 = 0$
3. Factor by grouping: $3x(2x - 5) + 2(2x - 5) = 0 \implies (3x + 2)(2x - 5) = 0$
4. Set each factor to zero:
   $3x + 2 = 0 \implies x = -2/3$
   $2x - 5 = 0 \implies x = 5/2$

### Example 2: Solving by Completing the Square
**Problem:** Solve $x^2 + 6x - 7 = 0$
**Solution:**
1. Move the constant term to the right: $x^2 + 6x = 7$
2. Take half of the $x$ coefficient, square it, and add to both sides: $(6/2)^2 = 9$.
   $x^2 + 6x + 9 = 7 + 9$
3. Rewrite the left side as a perfect square: $(x + 3)^2 = 16$
4. Take the square root of both sides: $x + 3 = \pm 4$
5. Solve for $x$: $x = -3 \pm 4 \implies x = 1$ or $x = -7$

### Example 3: Using the Quadratic Formula
**Problem:** Solve $2x^2 - 4x + 3 = 0$
**Solution:**
1. Identify coefficients: $a = 2, b = -4, c = 3$.
2. Compute the discriminant: $\Delta = (-4)^2 - 4(2)(3) = 16 - 24 = -8$.
3. Since $\Delta < 0$, the roots will be complex.
4. Apply the formula:
   $$ x = \frac{-(-4) \pm \sqrt{-8}}{2(2)} = \frac{4 \pm 2i\sqrt{2}}{4} $$
5. Simplify: $x = 1 \pm i\frac{\sqrt{2}}{2}$.

### Example 4: Forming an Equation from Roots
**Problem:** Find a quadratic equation with roots $x_1 = 3 + \sqrt{5}$ and $x_2 = 3 - \sqrt{5}$.
**Solution:**
1. Calculate the sum of roots: $S = x_1 + x_2 = (3 + \sqrt{5}) + (3 - \sqrt{5}) = 6$
2. Calculate the product of roots: $P = x_1 x_2 = (3 + \sqrt{5})(3 - \sqrt{5}) = 9 - 5 = 4$
3. Use the relationship $x^2 - Sx + P = 0$.
4. The equation is $x^2 - 6x + 4 = 0$.
