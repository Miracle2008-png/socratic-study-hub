# Representing Functions as Power Series

If a power series $\sum c_n x^n$ converges on some interval, it defines a mathematical function $f(x)$ on that interval.
$$ f(x) = c_0 + c_1 x + c_2 x^2 + c_3 x^3 + \dots $$

The incredible power of this concept is that we can take difficult, non-algebraic functions (like $1/(1-x)$, $\sin(x)$, $\ln(x)$) and represent them exactly as infinite polynomials. Polynomials are incredibly easy for computers and engineers to differentiate, integrate, and evaluate.

## 1. Starting with the Geometric Series

Recall the sum of a convergent geometric series: $S = \frac{a}{1-r}$ for $|r| < 1$.
If we let $a = 1$ and $r = x$, we immediately get our first function representation:

$$ \frac{1}{1-x} = 1 + x + x^2 + x^3 + \dots = \sum_{n=0}^{\infty} x^n $$
*This is valid only for $|x| < 1$.*

## 2. Algebraic Manipulation

We can use this base formula to find power series for many related functions through simple algebra (substitution, multiplication).

**Substitution:**
Find a series for $f(x) = \frac{1}{1+x^2}$.
Rewrite it to look like the geometric formula: $\frac{1}{1 - (-x^2)}$.
Substitute $-x^2$ for $x$ in the original series:
$$ \frac{1}{1+x^2} = 1 + (-x^2) + (-x^2)^2 + (-x^2)^3 + \dots = 1 - x^2 + x^4 - x^6 + \dots $$
$$ = \sum_{n=0}^{\infty} (-1)^n x^{2n} $$
This converges when $|-x^2| < 1$, which means $|x| < 1$.

**Multiplication by $x$:**
Find a series for $\frac{x^3}{1+x^2}$.
Simply multiply the series we just found by $x^3$:
$$ x^3 \left( 1 - x^2 + x^4 - x^6 + \dots \right) = x^3 - x^5 + x^7 - x^9 + \dots $$
$$ = \sum_{n=0}^{\infty} (-1)^n x^{2n+3} $$

## 3. Calculus of Power Series

Because a power series is just an infinitely long polynomial, we can take its derivative or integral **term-by-term**.

If $f(x) = \sum_{n=0}^{\infty} c_n x^n = c_0 + c_1 x + c_2 x^2 + c_3 x^3 + \dots$ has a radius of convergence $R > 0$, then on the interval $(-R, R)$:

1.  **Differentiation:**
    $f'(x) = c_1 + 2c_2 x + 3c_3 x^2 + \dots = \sum_{n=1}^{\infty} n c_n x^{n-1}$
2.  **Integration:**
    $\int f(x) \, dx = C + c_0 x + c_1 \frac{x^2}{2} + c_2 \frac{x^3}{3} + \dots = C + \sum_{n=0}^{\infty} c_n \frac{x^{n+1}}{n+1}$

*Crucial Theorem:* When you differentiate or integrate a power series term-by-term, **the Radius of Convergence $R$ remains exactly the same.** (However, convergence at the specific endpoints might change).

## 4. Finding Series via Calculus

We can use term-by-term calculus to find series for functions that don't immediately look geometric.

*Example:* Find a power series for $f(x) = \ln(1-x)$.
We know the derivative is $f'(x) = -\frac{1}{1-x}$.
We know the series for $\frac{1}{1-x} = 1 + x + x^2 + x^3 + \dots$
Therefore, $f'(x) = - (1 + x + x^2 + x^3 + \dots)$.

To find $f(x)$, we integrate both sides term-by-term:
$$ \ln(1-x) = \int -(1 + x + x^2 + x^3 + \dots) \, dx $$
$$ \ln(1-x) = C - x - \frac{x^2}{2} - \frac{x^3}{3} - \frac{x^4}{4} - \dots $$

To find the constant $C$, plug in $x = 0$:
$\ln(1-0) = C - 0 \implies \ln(1) = C \implies C = 0$.

So, $\ln(1-x) = -\sum_{n=1}^{\infty} \frac{x^n}{n}$.
This provides a powerful way to calculate logarithms by hand using simple addition and multiplication!


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Representing Functions as Power Series",
        "icon": "BrainCircuit",
        "description": "Core Concept: Representing Functions as Power Series"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Infinite Series",
        "icon": "ArrowRightCircle",
        "description": "Summation of infinite sequences."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Convergence Tests",
        "icon": "ArrowRightCircle",
        "description": "Ratio, root, and integral tests."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Power Series",
        "icon": "CheckCircle",
        "description": "Taylor and Maclaurin expansions."
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
