# Numbers and Indices

## 1. Number Systems
Mathematics fundamentally relies on various sets of numbers:
- **Natural Numbers** ($\mathbb{N}$): $\{1, 2, 3, \dots\}$
- **Integers** ($\mathbb{Z}$): $\{\dots, -2, -1, 0, 1, 2, \dots\}$
- **Rational Numbers** ($\mathbb{Q}$): Numbers that can be expressed as a fraction $p/q$ where $p, q \in \mathbb{Z}$ and $q \neq 0$.
- **Real Numbers** ($\mathbb{R}$): The continuum of all rational and irrational numbers.
- **Complex Numbers** ($\mathbb{C}$): Numbers of the form $a + bi$ where $a, b \in \mathbb{R}$ and $i = \sqrt{-1}$.

## 2. Laws of Indices (Exponents)
For real numbers $a, b > 0$ and any real numbers $m, n$:
1. $a^m \cdot a^n = a^{m+n}$
2. $\frac{a^m}{a^n} = a^{m-n}$
3. $(a^m)^n = a^{mn}$
4. $(ab)^n = a^n b^n$
5. $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$
6. $a^0 = 1$
7. $a^{-n} = \frac{1}{a^n}$
8. $a^{m/n} = \sqrt[n]{a^m} = (\sqrt[n]{a})^m$

## 3. Surds and Radicals
A surd is an unresolved radical, like $\sqrt{2}$. 
**Rationalizing the Denominator:**
To simplify fractions with surds in the denominator, multiply numerator and denominator by the conjugate.
$$ \frac{1}{a + \sqrt{b}} \cdot \frac{a - \sqrt{b}}{a - \sqrt{b}} = \frac{a - \sqrt{b}}{a^2 - b} $$

## 4. Step-by-Step Solved Examples

### Example 1: Simplifying Expressions using Laws of Indices
**Problem:** Simplify $\frac{(2x^2 y^3)^3}{4x^4 y^{-2}}$
**Solution:**
1. Expand the numerator: $(2x^2 y^3)^3 = 2^3 (x^2)^3 (y^3)^3 = 8x^6 y^9$
2. Rewrite the expression: $\frac{8x^6 y^9}{4x^4 y^{-2}}$
3. Divide coefficients: $\frac{8}{4} = 2$
4. Apply index laws for $x$: $x^{6-4} = x^2$
5. Apply index laws for $y$: $y^{9 - (-2)} = y^{11}$
6. Final answer: $2x^2 y^{11}$

### Example 2: Solving Equations with Indices
**Problem:** Solve for $x$: $9^{2x-1} = 27^{x+2}$
**Solution:**
1. Express bases in prime factors: $9 = 3^2$ and $27 = 3^3$.
2. Substitute: $(3^2)^{2x-1} = (3^3)^{x+2}$
3. Apply power rule: $3^{4x-2} = 3^{3x+6}$
4. Equate exponents (since bases are equal): $4x - 2 = 3x + 6$
5. Isolate $x$: $4x - 3x = 6 + 2 \implies x = 8$.

### Example 3: Rationalizing Denominators
**Problem:** Rationalize the denominator of $\frac{3\sqrt{2}}{\sqrt{5} - \sqrt{2}}$
**Solution:**
1. Multiply by the conjugate $\sqrt{5} + \sqrt{2}$:
$$ \frac{3\sqrt{2}(\sqrt{5} + \sqrt{2})}{(\sqrt{5} - \sqrt{2})(\sqrt{5} + \sqrt{2})} $$
2. Expand the denominator using difference of squares: $(\sqrt{5})^2 - (\sqrt{2})^2 = 5 - 2 = 3$.
3. Expand the numerator: $3\sqrt{2}\cdot\sqrt{5} + 3\sqrt{2}\cdot\sqrt{2} = 3\sqrt{10} + 3(2) = 3\sqrt{10} + 6$.
4. Divide: $\frac{3\sqrt{10} + 6}{3} = \sqrt{10} + 2$.

### Example 4: Fractional Exponents
**Problem:** Evaluate $81^{-3/4}$
**Solution:**
1. Rewrite negative exponent: $\frac{1}{81^{3/4}}$
2. Rewrite as a root: $\frac{1}{(\sqrt[4]{81})^3}$
3. Evaluate the 4th root: $\sqrt[4]{81} = 3$
4. Cube the result: $\frac{1}{3^3} = \frac{1}{27}$.
