# Taylor and Maclaurin Series

Using the geometric series trick to represent functions is clever, but it only works for functions that look vaguely like $1/(1-x)$.

How do we find a power series for $f(x) = e^x$, or $\sin(x)$, or $\sqrt{x}$? We need a universal formula. Brook Taylor published this formula in 1715.

## 1. Deriving the Coefficients

Suppose a function *can* be represented by a power series centered at $a$:
$$ f(x) = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \dots $$
Our goal is to find a formula for $c_n$. Let's plug in $x=a$:
*   $f(a) = c_0 + 0 + 0 + \dots \implies c_0 = f(a)$

Now, take the first derivative:
$f'(x) = c_1 + 2c_2(x-a) + 3c_3(x-a)^2 + \dots$
Plug in $x=a$:
*   $f'(a) = c_1 + 0 + 0 + \dots \implies c_1 = f'(a)$

Take the second derivative:
$f''(x) = 2c_2 + (3\cdot2)c_3(x-a) + (4\cdot3)c_4(x-a)^2 + \dots$
Plug in $x=a$:
*   $f''(a) = 2c_2 \implies c_2 = \frac{f''(a)}{2}$

Take the third derivative:
$f'''(x) = (3\cdot2\cdot1)c_3 + (4\cdot3\cdot2)c_4(x-a) + \dots$
Plug in $x=a$:
*   $f'''(a) = (3!)c_3 \implies c_3 = \frac{f'''(a)}{3!}$

A clear pattern emerges: $c_n = \frac{f^{(n)}(a)}{n!}$.

## 2. The Taylor Series Formula

The **Taylor Series** for a function $f(x)$ centered at $x=a$ is:

$$ f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x-a)^n $$
$$ f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots $$

This is one of the most important equations in all of applied mathematics. It tells us that if we know a function's value and all its derivatives at a single point, we can reconstruct the entire function.

## 3. The Maclaurin Series

A **Maclaurin Series** is simply a Taylor Series centered at $a = 0$.
$$ f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n $$

## 4. Vital Maclaurin Series to Memorize

These specific series appear constantly in physics and engineering. Because of the factorials in the denominator, these series converge for **all real numbers** ($R = \infty$).

**1. The Exponential Function:**
Because the derivative of $e^x$ is always $e^x$, $f^{(n)}(0) = e^0 = 1$ for all $n$.
$$ e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \dots $$

**2. Sine:**
The derivatives of $\sin(x)$ cycle: $\cos, -\sin, -\cos, \sin$. Evaluated at $x=0$, this cycle is $1, 0, -1, 0$. The even power terms vanish.
$$ \sin(x) = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots $$

**3. Cosine:**
The cycle is reversed. The odd power terms vanish.
$$ \cos(x) = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots $$

*Notice a beautiful connection:* If you plug $ix$ into the $e^x$ series, the real parts form the $\cos(x)$ series and the imaginary parts form the $\sin(x)$ series. This immediately proves Euler's Formula: $e^{ix} = \cos(x) + i\sin(x)$.
