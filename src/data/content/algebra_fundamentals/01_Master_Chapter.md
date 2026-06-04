# Algebra Fundamentals

## 1. Polynomials and Rational Expressions

A polynomial of degree $n$ is defined as:
$$ P(x) = a_nx^n + a_{n-1}x^{n-1} + \dots + a_1x + a_0 $$
where $a_n \neq 0$ and $n$ is a non-negative integer.

### 1.1 Factoring and Roots
The Fundamental Theorem of Algebra states that every non-zero, single-variable, degree $n$ polynomial with complex coefficients has exactly $n$ complex roots (counting multiplicities).

**Worked Example 1.1: Factoring by Grouping**
Factor $P(x) = 2x^3 - 3x^2 - 8x + 12$.
**Step 1:** Group terms in pairs: $(2x^3 - 3x^2) - (8x - 12)$.
**Step 2:** Factor out the greatest common factor (GCF) from each group:
$$ x^2(2x - 3) - 4(2x - 3) $$
**Step 3:** Factor out the common binomial term $(2x - 3)$:
$$ (2x - 3)(x^2 - 4) $$
**Step 4:** Recognize $x^2 - 4$ as a difference of squares and factor completely:
$$ P(x) = (2x - 3)(x - 2)(x + 2) $$

### 1.2 Partial Fraction Decomposition
Partial fraction decomposition is used to break down complex rational expressions into simpler ones, vital for integration.

**Worked Example 1.2: Distinct Linear Factors**
Decompose $\frac{5x - 4}{x^2 - x - 2}$.
**Step 1:** Factor the denominator: $x^2 - x - 2 = (x - 2)(x + 1)$.
**Step 2:** Set up the partial fractions:
$$ \frac{5x - 4}{(x - 2)(x + 1)} = \frac{A}{x - 2} + \frac{B}{x + 1} $$
**Step 3:** Multiply by the common denominator:
$$ 5x - 4 = A(x + 1) + B(x - 2) $$
**Step 4:** Solve for $A$ and $B$. Let $x = 2$:
$$ 5(2) - 4 = A(2 + 1) \implies 6 = 3A \implies A = 2 $$
Let $x = -1$:
$$ 5(-1) - 4 = B(-1 - 2) \implies -9 = -3B \implies B = 3 $$
**Result:**
$$ \frac{5x - 4}{x^2 - x - 2} = \frac{2}{x - 2} + \frac{3}{x + 1} $$

## 2. Exponential and Logarithmic Functions

The exponential function with base $b > 0, b \neq 1$ is $f(x) = b^x$. Its inverse is the logarithmic function $g(x) = \log_b(x)$.

### 2.1 Properties of Logarithms
1. $\log_b(xy) = \log_b(x) + \log_b(y)$
2. $\log_b\left(\frac{x}{y}\right) = \log_b(x) - \log_b(y)$
3. $\log_b(x^k) = k\log_b(x)$
4. Change of Base: $\log_b(x) = \frac{\log_c(x)}{\log_c(b)}$

**Worked Example 2.1: Solving Exponential Equations**
Solve $3^{2x+1} = 7^{x-2}$ for $x$.
**Step 1:** Take the natural logarithm ($\ln$) of both sides:
$$ \ln(3^{2x+1}) = \ln(7^{x-2}) $$
**Step 2:** Apply the power rule:
$$ (2x + 1)\ln(3) = (x - 2)\ln(7) $$
**Step 3:** Distribute the logarithms:
$$ 2x\ln(3) + \ln(3) = x\ln(7) - 2\ln(7) $$
**Step 4:** Isolate terms containing $x$:
$$ 2x\ln(3) - x\ln(7) = -2\ln(7) - \ln(3) $$
$$ x(2\ln(3) - \ln(7)) = -(2\ln(7) + \ln(3)) $$
**Step 5:** Solve for $x$:
$$ x = \frac{-(2\ln(7) + \ln(3))}{2\ln(3) - \ln(7)} = \frac{-\ln(49) - \ln(3)}{\ln(9) - \ln(7)} = \frac{-\ln(147)}{\ln(9/7)} $$

## 3. Complex Numbers

A complex number is defined as $z = a + bi$, where $a, b \in \mathbb{R}$ and $i^2 = -1$.

### 3.1 Operations and Conjugates
The complex conjugate of $z = a + bi$ is $\bar{z} = a - bi$. The modulus is $|z| = \sqrt{a^2 + b^2}$.

**Worked Example 3.1: Division of Complex Numbers**
Simplify $\frac{3 + 4i}{1 - 2i}$.
**Step 1:** Multiply the numerator and denominator by the conjugate of the denominator:
$$ \frac{3 + 4i}{1 - 2i} \cdot \frac{1 + 2i}{1 + 2i} $$
**Step 2:** Expand both polynomials:
$$ \frac{3(1) + 3(2i) + 4i(1) + 4i(2i)}{1^2 - (2i)^2} $$
$$ \frac{3 + 6i + 4i + 8i^2}{1 - 4(-1)} $$
**Step 3:** Substitute $i^2 = -1$ and simplify:
$$ \frac{3 + 10i - 8}{1 + 4} = \frac{-5 + 10i}{5} = -1 + 2i $$
