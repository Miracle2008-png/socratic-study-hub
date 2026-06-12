# Integral and Comparison Tests

Once we rule out trivial divergence using the Divergence Test ($\lim a_n \neq 0$), we must use more sophisticated tests to determine if a series converges. We start with series containing only **positive terms**.

## 1. The Integral Test

There is a profound connection between an infinite sum $\sum_{n=1}^{\infty} a_n$ and an improper integral $\int_{1}^{\infty} f(x) \, dx$.

If we have a sequence $a_n$, let $f(x)$ be the continuous function where $f(n) = a_n$.
If $f(x)$ is **continuous, positive, and decreasing** for $x \ge 1$:

> **The Integral Test:**
> *   If $\int_{1}^{\infty} f(x) \, dx$ is convergent, then $\sum_{n=1}^{\infty} a_n$ is convergent.
> *   If $\int_{1}^{\infty} f(x) \, dx$ is divergent, then $\sum_{n=1}^{\infty} a_n$ is divergent.

They share the same fate. Note that if they converge, they do *not* generally converge to the exact same number.

## 2. The $p$-Series

A direct and incredibly useful application of the Integral Test is the $p$-series.
$$ \sum_{n=1}^{\infty} \frac{1}{n^p} $$

By evaluating the improper integral $\int_{1}^{\infty} x^{-p} \, dx$, we find a strict rule:
*   The $p$-series **converges if $p > 1$**.
*   The $p$-series **diverges if $p \le 1$**.

*Example:* The Harmonic Series $\sum \frac{1}{n}$. Here $p=1$. Therefore, it diverges. Even though $1/n$ goes to zero, it doesn't go to zero fast enough.
*Example:* $\sum \frac{1}{n^2}$. Here $p=2 > 1$. Therefore, it converges (specifically to $\pi^2/6$, a famous result by Euler).

## 3. The Direct Comparison Test (DCT)

If you have a complex series, you can often determine its convergence by comparing it term-by-term to a simpler, known series (like a $p$-series or a geometric series).

Suppose we have two series with positive terms, $\sum a_n$ and $\sum b_n$.

1.  **If the "bigger" series converges, the "smaller" series must converge.**
    If $a_n \le b_n$ for all $n$, and $\sum b_n$ converges, then $\sum a_n$ converges.
2.  **If the "smaller" series diverges, the "bigger" series must diverge.**
    If $a_n \ge b_n$ for all $n$, and $\sum b_n$ diverges, then $\sum a_n$ diverges.

*Example:* Does $\sum \frac{1}{n^3 + 5}$ converge?
We know that $n^3 + 5 > n^3$, so $\frac{1}{n^3 + 5} < \frac{1}{n^3}$.
The series $\sum \frac{1}{n^3}$ is a convergent $p$-series ($p=3 > 1$).
Because our series is smaller than a convergent series, it must also converge.

## 4. The Limit Comparison Test (LCT)

The Direct Comparison Test fails if the inequality goes the wrong way (e.g., your series is *larger* than a convergent series). The Limit Comparison Test is far more robust because it relies on the *ratio* of the terms as they go to infinity.

Suppose $a_n > 0$ and $b_n > 0$.
Take the limit of their ratio:
$$ L = \lim_{n \to \infty} \frac{a_n}{b_n} $$

If $L$ is a **finite, positive number** ($0 < L < \infty$), it means both series grow or shrink at the exact same rate. Therefore, they share the same fate:
*   Both series converge, or both series diverge.

*Example:* Does $\sum \frac{3n + 5}{\sqrt{n^4 + 1}}$ converge?
For very large $n$, the $+5$ and $+1$ don't matter. The terms look like $\frac{3n}{\sqrt{n^4}} = \frac{3n}{n^2} = \frac{3}{n}$.
This looks like it will diverge (similar to the harmonic series). Let's use LCT with $b_n = \frac{1}{n}$.

$\lim_{n \to \infty} \frac{a_n}{b_n} = \lim_{n \to \infty} \left( \frac{3n + 5}{\sqrt{n^4 + 1}} \cdot \frac{n}{1} \right) = \lim_{n \to \infty} \frac{3n^2 + 5n}{\sqrt{n^4 + 1}}$
Divide top and bottom by $n^2$ (which is $\sqrt{n^4}$ inside the root):
$= \lim_{n \to \infty} \frac{3 + 5/n}{\sqrt{1 + 1/n^4}} = \frac{3}{1} = 3$.
Since $L=3$ (a finite positive number), and $\sum \frac{1}{n}$ diverges, our original series also **diverges**.


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Integral and Comparison Tests",
        "icon": "BrainCircuit",
        "description": "Core Concept: Integral and Comparison Tests"
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
