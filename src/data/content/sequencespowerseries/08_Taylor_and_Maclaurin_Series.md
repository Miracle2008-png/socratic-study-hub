# Taylor and Maclaurin Series

Using the geometric series trick to represent functions is clever, but it is severely limited. It only works for functions that mathematically resemble $1/(1-x)$.

How do we find a power series for transcendental functions like $f(x) = e^x$, $\sin(x)$, or $\sqrt{x}$? We need a universal formula. Brook Taylor published this formula in 1715, providing a way to extract the "polynomial DNA" of any smooth, infinitely differentiable function.

In engineering, Taylor and Maclaurin series are the cornerstone of **perturbation theory** in quantum mechanics and **AC circuit analysis**. For instance, Euler's identity, which relates complex exponentials to trigonometric functions, is derived directly from Maclaurin series and forms the foundation of phasor analysis in electrical engineering.

## 1. Deriving the Coefficients

Suppose a function *can* be represented by a power series centered at $a$:
$$ f(x) = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \dots $$
Our goal is to find a formula for the coefficients $c_n$. Let's plug in $x=a$:
*   $f(a) = c_0 + 0 + 0 + \dots \implies c_0 = f(a)$

Now, take the first derivative:
$f'(x) = c_1 + 2c_2(x-a) + 3c_3(x-a)^2 + \dots$
Plug in $x=a$:
*   $f'(a) = c_1 + 0 + 0 + \dots \implies c_1 = f'(a)$

Take the second derivative:
$f''(x) = 2c_2 + (3\cdot2)c_3(x-a) + (4\cdot3)c_4(x-a)^2 + \dots$
Plug in $x=a$:
*   $f''(a) = 2c_2 \implies c_2 = \frac{f''(a)}{2}$

A clear pattern emerges due to the power rule of derivatives continually bringing down exponents: $c_n = \frac{f^{(n)}(a)}{n!}$.

## 2. The Taylor Series Formula

The **Taylor Series** for a function $f(x)$ centered at $x=a$ is:

$$ f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x-a)^n $$
$$ f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots $$

This is one of the most important equations in all of applied mathematics. It tells us that if we know a function's value and all its derivatives at a *single localized point*, we can reconstruct the entire global behavior of the function.

## 3. The Maclaurin Series

A **Maclaurin Series** is simply a Taylor Series centered at the origin, $a = 0$. Because many systems naturally oscillate or decay around zero, this is heavily used.
$$ f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n $$

## 4. Examples and Applications

### Example 1 (Easy): Maclaurin Series for $e^{3x}$
**Problem:** Find the Maclaurin series for $f(x) = e^{3x}$.

**Step-by-Step Solution:**
1. We know the fundamental Maclaurin series for $e^u$:
   $$ e^u = \sum_{n=0}^{\infty} \frac{u^n}{n!} = 1 + u + \frac{u^2}{2!} + \frac{u^3}{3!} + \dots $$
2. Substitute $u = 3x$:
   $$ e^{3x} = \sum_{n=0}^{\infty} \frac{(3x)^n}{n!} = \sum_{n=0}^{\infty} \frac{3^n x^n}{n!} $$
3. Expand:
   $$ e^{3x} = 1 + 3x + \frac{9x^2}{2} + \frac{27x^3}{6} + \dots = 1 + 3x + \frac{9}{2}x^2 + \frac{9}{2}x^3 + \dots $$

### Example 2 (Medium): Taylor Series for $\sqrt{x}$
**Problem:** Find the Taylor series for $f(x) = \sqrt{x}$ centered at $a = 4$. This is useful for linearizing non-linear square-root behaviors in fluid dynamics (like flow rate through an orifice) around a steady state of 4 units.

**Step-by-Step Solution:**
1. Calculate the function and its first few derivatives at $x=4$:
   * $f(x) = x^{1/2} \implies f(4) = 2$
   * $f'(x) = \frac{1}{2}x^{-1/2} \implies f'(4) = \frac{1}{2}(4)^{-1/2} = \frac{1}{4}$
   * $f''(x) = -\frac{1}{4}x^{-3/2} \implies f''(4) = -\frac{1}{4}(4)^{-3/2} = -\frac{1}{32}$
   * $f'''(x) = \frac{3}{8}x^{-5/2} \implies f'''(4) = \frac{3}{8}(4)^{-5/2} = \frac{3}{256}$
2. Plug into the Taylor Series formula centered at $a=4$:
   $$ f(x) = f(4) + f'(4)(x-4) + \frac{f''(4)}{2!}(x-4)^2 + \frac{f'''(4)}{3!}(x-4)^3 + \dots $$
   $$ \sqrt{x} = 2 + \frac{1}{4}(x-4) - \frac{1}{32 \cdot 2!}(x-4)^2 + \frac{3}{256 \cdot 3!}(x-4)^3 - \dots $$
   $$ \sqrt{x} = 2 + \frac{1}{4}(x-4) - \frac{1}{64}(x-4)^2 + \frac{1}{512}(x-4)^3 - \dots $$

### Example 3 (Hard): Proving Euler's Formula for Electrical Engineers
**Problem:** Use Maclaurin series to prove Euler's Formula: $e^{ix} = \cos(x) + i\sin(x)$. This identity is the bedrock of AC circuit analysis and signal processing.

**Step-by-Step Solution:**
1. Start with the Maclaurin series for $e^u$, and let $u = ix$:
   $$ e^{ix} = 1 + (ix) + \frac{(ix)^2}{2!} + \frac{(ix)^3}{3!} + \frac{(ix)^4}{4!} + \frac{(ix)^5}{5!} + \dots $$
2. Evaluate the powers of $i$ (where $i^2 = -1, i^3 = -i, i^4 = 1$):
   $$ e^{ix} = 1 + ix - \frac{x^2}{2!} - i\frac{x^3}{3!} + \frac{x^4}{4!} + i\frac{x^5}{5!} - \dots $$
3. Group the real terms and the imaginary terms together:
   $$ e^{ix} = \left( 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots \right) + i \left( x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots \right) $$
4. Recognize the grouped series. The first parenthesis is the Maclaurin series for $\cos(x)$. The second is the Maclaurin series for $\sin(x)$.
   $$ e^{ix} = \cos(x) + i\sin(x) $$

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Function & Derivatives at x=a",
        "icon": "BrainCircuit",
        "description": "f(a), f'(a), f''(a)..."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Compute Coefficients",
        "icon": "Settings",
        "description": "c_n = f^(n)(a) / n!"
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Taylor Series",
        "icon": "ArrowRightCircle",
        "description": "Centered at arbitrary a"
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Maclaurin Series",
        "icon": "CheckCircle",
        "description": "Special Case: Centered at a=0"
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
