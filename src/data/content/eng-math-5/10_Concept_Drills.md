# Concept Drills: Sequences and Series

Test your conceptual understanding of infinite sequences and power series.

## Conceptual Questions

1.  **True or False:** If the sequence $a_n$ converges to 0, then the infinite series $\sum a_n$ must converge.
2.  What is the difference between an infinite sequence and an infinite series?
3.  If you are testing the series $\sum \frac{3n^2}{5n^2 + 1}$, which test should you use first, and what does it tell you?
4.  Why is the Ratio Test useless for the p-series $\sum \frac{1}{n^2}$?
5.  What does it mean for a series to be *conditionally convergent* versus *absolutely convergent*?
6.  For a power series centered at $x = 0$, if it converges at $x = 4$ and diverges at $x = 6$, what can you say about its radius of convergence $R$?
7.  Explain conceptually why integrating a power series term-by-term does not change its radius of convergence.

## Analytical Problems

1.  **Geometric Series:** Find the exact sum of the series $\sum_{n=1}^{\infty} \frac{3^{n-1}}{4^n}$.
2.  **Integral Test:** Use the integral test to determine if $\sum_{n=1}^{\infty} n e^{-n^2}$ converges or diverges.
3.  **Ratio Test:** Determine the convergence of $\sum_{n=1}^{\infty} \frac{n^2}{3^n}$.
4.  **Radius of Convergence:** Find the radius of convergence for the power series $\sum_{n=0}^{\infty} \frac{(x-2)^n}{n!}$.
5.  **Maclaurin Series:** Find the first 3 non-zero terms of the Maclaurin series for $f(x) = x \cos(x)$.
6.  **Approximation:** Use the first two non-zero terms of a Taylor series to approximate $\int_{0}^{0.1} e^{-x^2} \, dx$.

---

## Solutions

### Conceptual Solutions

1.  **False.** This is the most common mistake in series. The Harmonic series $1/n \to 0$, but the sum $\sum 1/n$ diverges. (The Divergence Test only works one way).
2.  A sequence is a *list* of numbers ($a_1, a_2, a_3$). A series is the *sum* of that list ($a_1 + a_2 + a_3$).
3.  **The Divergence Test**. The limit of the terms as $n \to \infty$ is $3/5$, which is not zero. Therefore, the series diverges trivially.
4.  Because polynomials and algebraic functions grow so slowly compared to factorials or exponentials, the limit $L = \lim |a_{n+1}/a_n|$ will always evaluate to exactly 1, rendering the test inconclusive.
5.  Absolutely convergent means the series converges even if you make all terms positive (it's "strong"). Conditionally convergent means it only converges because the negative terms cancel out the positive terms (it's "weak"); if you took the absolute value, it would diverge.
6.  The radius $R$ must be at least 4 (because it converges at 4) and less than or equal to 6 (because it diverges at 6). So, $4 \le R \le 6$.
7.  Differentiation drops the power by 1 and multiplies by $n$. Integration raises the power by 1 and divides by $n+1$. When applying the Ratio Test, the limit of $\frac{n+1}{n}$ as $n \to \infty$ is 1. Therefore, these polynomial multipliers don't affect the exponential ratio $L$ that determines the radius $R$.

### Analytical Solutions

1.  Rewrite as $\sum \frac{1}{4} \left(\frac{3}{4}\right)^{n-1}$. This is geometric with $a=1/4$ and $r=3/4$. Since $|r|<1$, it converges to $S = \frac{1/4}{1 - 3/4} = \frac{1/4}{1/4} = 1$.
2.  $\int_{1}^{\infty} x e^{-x^2} dx$. Use u-sub $u = -x^2$, $du = -2x dx$.
    $\lim_{t \to \infty} \left[ -\frac{1}{2} e^{-x^2} \right]_1^t = \lim_{t \to \infty} (-\frac{1}{2}e^{-t^2} + \frac{1}{2}e^{-1}) = \frac{1}{2e}$. Since the integral converges, the series **converges**.
3.  $L = \lim_{n \to \infty} \left| \frac{(n+1)^2}{3^{n+1}} \cdot \frac{3^n}{n^2} \right| = \lim_{n \to \infty} \left( \frac{(n+1)^2}{n^2} \cdot \frac{1}{3} \right) = 1 \cdot \frac{1}{3} = \frac{1}{3}$. Since $1/3 < 1$, it **converges absolutely**.
4.  $L = \lim_{n \to \infty} \left| \frac{(x-2)^{n+1}}{(n+1)!} \cdot \frac{n!}{(x-2)^n} \right| = \lim_{n \to \infty} \left| \frac{x-2}{n+1} \right| = 0$ for *all* $x$. Since $0 < 1$ always, the series converges for all real numbers. **$R = \infty$**.
5.  We know $\cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots$
    Multiply by $x$: $x\cos(x) = x - \frac{x^3}{2} + \frac{x^5}{24} - \dots$
6.  $e^u = 1 + u + \frac{u^2}{2} + \dots \implies e^{-x^2} \approx 1 - x^2$.
    $\int_{0}^{0.1} (1 - x^2) \, dx = \left[ x - \frac{x^3}{3} \right]_0^{0.1} = 0.1 - \frac{0.001}{3} \approx 0.1 - 0.000333 = 0.099667$.


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Concept Drills",
        "icon": "BrainCircuit",
        "description": "Core Concept: Concept Drills"
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
