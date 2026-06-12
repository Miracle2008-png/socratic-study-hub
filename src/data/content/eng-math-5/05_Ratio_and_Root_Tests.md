# Ratio and Root Tests

These two tests are the workhorses of infinite series. They test for **absolute convergence** and are completely oblivious to negative signs. They are especially powerful when dealing with factorials ($n!$) or exponentials ($2^n$).

## 1. The Ratio Test

The Ratio Test works by checking if the series behaves like a geometric series as $n$ goes to infinity. We take the limit of the ratio of a term to the one immediately preceding it.

Take the limit:
$$ L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| $$

The result $L$ dictates the convergence:
1.  **If $L < 1$:** The series is **absolutely convergent** (and therefore convergent).
2.  **If $L > 1$** (or $L = \infty$): The series is **divergent**.
3.  **If $L = 1$:** The test is **inconclusive**. You must use a different test (like LCT or Integral Test).

**When to use the Ratio Test:**
Almost always use it if the series contains factorials ($n!$) or constants raised to the $n$-th power ($c^n$).
*Do NOT use the Ratio Test for p-series or rational functions (polynomial over polynomial). It will always yield $L=1$ and waste your time.*

*Example:* $\sum_{n=1}^{\infty} \frac{2^n}{n!}$
$a_n = \frac{2^n}{n!}$
$a_{n+1} = \frac{2^{n+1}}{(n+1)!}$

$L = \lim_{n \to \infty} \left| \frac{2^{n+1}}{(n+1)!} \cdot \frac{n!}{2^n} \right|$
$L = \lim_{n \to \infty} \left( \frac{2^{n+1}}{2^n} \cdot \frac{n!}{(n+1)n!} \right)$
$L = \lim_{n \to \infty} \left( 2 \cdot \frac{1}{n+1} \right) = 0$

Since $0 < 1$, the series converges absolutely. (Factorials grow much faster than exponentials).

## 2. The Root Test

The Root Test is similar in logic but is specifically designed for series where the *entire* $n$-th term is raised to a power involving $n$.

Take the limit of the $n$-th root of the absolute value of the $n$-th term:
$$ L = \lim_{n \to \infty} \sqrt[n]{|a_n|} = \lim_{n \to \infty} |a_n|^{1/n} $$

The conclusions are exactly the same as the Ratio Test:
1.  **If $L < 1$:** Absolutely convergent.
2.  **If $L > 1$:** Divergent.
3.  **If $L = 1$:** Inconclusive.

*Example:* $\sum_{n=1}^{\infty} \left( \frac{2n+3}{3n+2} \right)^n$
$L = \lim_{n \to \infty} \left| \left( \frac{2n+3}{3n+2} \right)^n \right|^{1/n}$
$L = \lim_{n \to \infty} \left( \frac{2n+3}{3n+2} \right) = \frac{2}{3}$

Since $2/3 < 1$, the series converges absolutely.

## 3. Hierarchy of Growth Rates

When taking limits to infinity, it is crucial to know which mathematical functions grow faster than others. This intuition helps you immediately guess whether a series will converge or diverge before running a test.

From slowest growing to fastest growing as $n \to \infty$:
1.  **Logarithmic:** $\ln(n)$
2.  **Polynomial/Algebraic:** $n^p$ (e.g., $n^2, n^{100}$)
3.  **Exponential:** $c^n$ (where $c > 1$, e.g., $2^n, e^n$)
4.  **Factorial:** $n!$
5.  **Exponential-Power:** $n^n$

A term lower on the list will *always* eventually outpace a term higher on the list.
*   $\lim \frac{n^{100}}{e^n} = 0$ (Exponential beats polynomial).
*   $\lim \frac{100^n}{n!} = 0$ (Factorial beats exponential).

If your series is $\sum \frac{\text{Fast}}{\text{Slow}}$, it diverges (Divergence Test).
If your series is $\sum \frac{\text{Slow}}{\text{Fast}}$, it strongly tends to converge (use Ratio Test to prove).


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Ratio and Root Tests",
        "icon": "BrainCircuit",
        "description": "Core Concept: Ratio and Root Tests"
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
