# Representing Functions as Power Series

If a power series $\sum c_n x^n$ converges on some interval, it defines a continuous, differentiable mathematical function $f(x)$ on that interval.
$$ f(x) = c_0 + c_1 x + c_2 x^2 + c_3 x^3 + \dots $$

The incredible power of this concept lies in taking difficult, non-algebraic functions (like $1/(1-x)$, $\arctan(x)$, $\ln(x)$) and representing them exactly as infinite polynomials. Polynomials are incredibly easy for computers, microcontrollers, and engineers to differentiate, integrate, and evaluate. 

In engineering, this concept is the mathematical foundation for the **Z-transform** used in Digital Signal Processing (DSP) to analyze discrete-time signals, where a signal sequence is represented as the coefficients of a power series. It is also essential in control systems for linearizing non-linear dynamics around an equilibrium point.

## 1. Starting with the Geometric Series

Recall the sum of a convergent geometric series: $S = \frac{a}{1-r}$ for $|r| < 1$.
If we let $a = 1$ and $r = x$, we immediately obtain our foundational function representation:

$$ \frac{1}{1-x} = 1 + x + x^2 + x^3 + \dots = \sum_{n=0}^{\infty} x^n $$
*This is valid only for the interval of convergence $|x| < 1$.* This simple formula acts as the "DNA" for generating series representations of many other functions.

## 2. Algebraic Manipulation

We can use this base formula to find power series for many related functions through simple algebra (substitution, multiplication). 

### Example 1 (Easy): Basic Substitution
**Problem:** Find a power series representation for $f(x) = \frac{1}{1+3x}$ and determine its interval of convergence.

**Step-by-Step Solution:**
1. We want to manipulate the function to match the form $\frac{1}{1-r}$.
2. Rewrite the denominator: $\frac{1}{1 - (-3x)}$.
3. Substitute $r = -3x$ into the geometric series formula:
   $$ \frac{1}{1 - (-3x)} = \sum_{n=0}^{\infty} (-3x)^n = \sum_{n=0}^{\infty} (-1)^n 3^n x^n $$
4. Expand the first few terms to see the pattern:
   $$ f(x) = 1 - 3x + 9x^2 - 27x^3 + \dots $$
5. **Convergence:** The geometric series converges when $|r| < 1$. Here, $|-3x| < 1 \implies |x| < \frac{1}{3}$. The interval of convergence is $(-\frac{1}{3}, \frac{1}{3})$.

## 3. Calculus of Power Series

Because a power series is just an infinitely long polynomial, we can take its derivative or integral **term-by-term**. This is a profound theorem that bridges discrete sums and continuous calculus.

If $f(x) = \sum_{n=0}^{\infty} c_n x^n$ has a radius of convergence $R > 0$, then on the interval $(-R, R)$:

1.  **Differentiation:**
    $$ f'(x) = c_1 + 2c_2 x + 3c_3 x^2 + \dots = \sum_{n=1}^{\infty} n c_n x^{n-1} $$
2.  **Integration:**
    $$ \int f(x) \, dx = C + c_0 x + c_1 \frac{x^2}{2} + c_2 \frac{x^3}{3} + \dots = C + \sum_{n=0}^{\infty} c_n \frac{x^{n+1}}{n+1} $$

*Crucial Theorem:* When you differentiate or integrate a power series term-by-term, **the Radius of Convergence $R$ remains exactly the same.** (However, convergence at the specific boundary endpoints $x = \pm R$ might change and must be tested manually).

### Example 2 (Medium): Integration to find $\arctan(x)$
**Problem:** Find a power series for $f(x) = \arctan(x)$.

**Step-by-Step Solution:**
1. Recognize the derivative: $\frac{d}{dx}[\arctan(x)] = \frac{1}{1+x^2}$.
2. Find the series for $\frac{1}{1+x^2}$ by substituting $r = -x^2$ into the geometric series:
   $$ \frac{1}{1 - (-x^2)} = \sum_{n=0}^{\infty} (-x^2)^n = \sum_{n=0}^{\infty} (-1)^n x^{2n} $$
   $$ \frac{1}{1+x^2} = 1 - x^2 + x^4 - x^6 + \dots $$
3. Integrate both sides term-by-term:
   $$ \arctan(x) = \int \left( 1 - x^2 + x^4 - x^6 + \dots \right) dx $$
   $$ \arctan(x) = C + x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \dots = C + \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{2n+1} $$
4. Find $C$ by evaluating at $x=0$:
   $$ \arctan(0) = C + 0 \implies 0 = C $$
5. Final Series:
   $$ \arctan(x) = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{2n+1} $$
*(Note: Plugging in $x=1$ gives the famous Madhava-Gregory-Leibniz infinite series for $\pi/4 = 1 - 1/3 + 1/5 - 1/7 + \dots$)*

### Example 3 (Hard): Differentiation for DSP Z-Transforms
**Problem:** Find the power series for $f(x) = \frac{x}{(1-x)^2}$. In Digital Signal Processing, this mathematical structure is proportional to the Z-transform of a "ramp" discrete signal $n \cdot u[n]$.

**Step-by-Step Solution:**
1. Notice that the denominator $(1-x)^2$ looks like the derivative of $\frac{1}{1-x}$.
   $$ \frac{d}{dx} \left[ \frac{1}{1-x} \right] = \frac{d}{dx} [ (1-x)^{-1} ] = -(1-x)^{-2}(-1) = \frac{1}{(1-x)^2} $$
2. Differentiate the geometric series representation of $\frac{1}{1-x}$:
   $$ \frac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \dots $$
   $$ \frac{d}{dx} \left[ \frac{1}{1-x} \right] = \frac{d}{dx} \left[ \sum_{n=0}^{\infty} x^n \right] = \sum_{n=1}^{\infty} n x^{n-1} $$
   $$ \frac{1}{(1-x)^2} = 1 + 2x + 3x^2 + 4x^3 + \dots $$
3. Multiply both sides by $x$ to match the target function:
   $$ x \cdot \frac{1}{(1-x)^2} = x \sum_{n=1}^{\infty} n x^{n-1} = \sum_{n=1}^{\infty} n x^n $$
   $$ \frac{x}{(1-x)^2} = x + 2x^2 + 3x^3 + 4x^4 + \dots $$
4. **Conclusion:** This elegant series yields coefficients $1, 2, 3, 4\dots$, demonstrating how rational functions can perfectly model linearly increasing sequences in engineering control systems.

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Rational Functions",
        "icon": "Binary",
        "description": "Like 1/(1-x)"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Geometric Series",
        "icon": "ArrowRightCircle",
        "description": "Base Infinite Polynomial"
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Algebraic & Calculus Operations",
        "icon": "Settings",
        "description": "Substitution, Differentiation, Integration"
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Transcendental Functions",
        "icon": "CheckCircle",
        "description": "Logarithms, Inverse Trig"
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
