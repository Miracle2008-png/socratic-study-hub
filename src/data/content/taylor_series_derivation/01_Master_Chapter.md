# Taylor and Maclaurin Series

## 1. Definition of Taylor and Maclaurin Series

Let $f(x)$ be a function that is infinitely differentiable at a point $a$. The **Taylor Series** of $f(x)$ centered at $x = a$ is given by:

$$ f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x - a)^n $$

Expanded out, this is:
$$ f(x) = f(a) + f'(a)(x - a) + \frac{f''(a)}{2!} (x - a)^2 + \frac{f'''(a)}{3!} (x - a)^3 + \dots $$

When $a = 0$, the series is known as a **Maclaurin Series**:
$$ f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \dots $$

## 2. Derivation of the Taylor Series

Suppose we want to approximate a function $f(x)$ near $x = a$ using a polynomial $P_n(x)$ of degree $n$:
$$ P_n(x) = c_0 + c_1(x-a) + c_2(x-a)^2 + \dots + c_n(x-a)^n $$

We demand that the polynomial and its first $n$ derivatives match the function $f(x)$ and its derivatives at $x = a$.
1. $P_n(a) = f(a) \implies c_0 = f(a)$
2. $P'_n(x) = c_1 + 2c_2(x-a) + 3c_3(x-a)^2 + \dots \implies P'_n(a) = c_1 = f'(a)$
3. $P''_n(x) = 2c_2 + 3\cdot 2 c_3(x-a) + \dots \implies P''_n(a) = 2c_2 = f''(a) \implies c_2 = \frac{f''(a)}{2}$
4. In general, $P_n^{(k)}(a) = k! c_k = f^{(k)}(a) \implies c_k = \frac{f^{(k)}(a)}{k!}$

Thus, extending to infinity yields the Taylor series.

## 3. Convergence and Taylor's Theorem with Remainder

A Taylor series converges to the function $f(x)$ if the remainder $R_n(x)$ tends to 0 as $n \to \infty$. Taylor's Theorem states:
$$ f(x) = P_n(x) + R_n(x) $$
where the **Lagrange Remainder** is:
$$ R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!} (x - a)^{n+1} $$
for some $c$ strictly between $a$ and $x$.

## 4. Step-by-Step Solved Examples

### Example 1: Maclaurin Series for $e^x$
**Problem:** Derive the Maclaurin series for $f(x) = e^x$.
**Solution:**
1. Evaluate derivatives: $f(x) = e^x \implies f^{(n)}(x) = e^x$.
2. Evaluate at $x=0$: $f^{(n)}(0) = e^0 = 1$ for all $n$.
3. Substitute into formula: 
$$ e^x = \sum_{n=0}^{\infty} \frac{1}{n!} x^n = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots $$
Radius of convergence: By the ratio test, $\lim_{n \to \infty} \left| \frac{x^{n+1}/(n+1)!}{x^n/n!} \right| = \lim_{n \to \infty} \frac{|x|}{n+1} = 0 < 1$ for all $x$. Thus, $R = \infty$.

### Example 2: Maclaurin Series for $\sin(x)$
**Problem:** Derive the Maclaurin series for $f(x) = \sin(x)$.
**Solution:**
1. Derivatives cycle:
   $f(x) = \sin(x) \implies f(0) = 0$
   $f'(x) = \cos(x) \implies f'(0) = 1$
   $f''(x) = -\sin(x) \implies f''(0) = 0$
   $f'''(x) = -\cos(x) \implies f'''(0) = -1$
2. The non-zero terms occur at odd powers ($2n+1$) and alternate in sign.
3. The series is:
$$ \sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!} x^{2n+1} $$

### Example 3: Error Estimation Using Lagrange Remainder
**Problem:** Use the 3rd degree Maclaurin polynomial for $\sin(x)$ to approximate $\sin(0.1)$ and find an upper bound for the error.
**Solution:**
1. The 3rd degree polynomial is $P_3(x) = x - \frac{x^3}{3!}$.
2. Approximation: $\sin(0.1) \approx 0.1 - \frac{0.1^3}{6} = 0.1 - 0.0001666... = 0.0998333...$
3. Remainder formula: $R_3(x) = \frac{f^{(4)}(c)}{4!} x^4$ for $0 < c < 0.1$.
4. Since $f^{(4)}(x) = \sin(x)$, $|f^{(4)}(c)| \le 1$.
5. Error bound: $|R_3(0.1)| \le \frac{1}{24} (0.1)^4 = \frac{0.0001}{24} \approx 4.167 \times 10^{-6}$.
