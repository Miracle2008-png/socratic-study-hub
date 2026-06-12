# Applications of Taylor Polynomials

An infinite Taylor series provides an exact representation of a function. However, in engineering and computer science, we cannot compute infinitely many terms.

We use **Taylor Polynomials**—truncating the infinite series after a finite number of terms—to create powerful, highly accurate local approximations of functions.

## 1. Taylor Polynomials

The $k$-th degree Taylor Polynomial $T_k(x)$ of a function $f(x)$ at center $a$ is:
$$ T_k(x) = \sum_{n=0}^{k} \frac{f^{(n)}(a)}{n!} (x-a)^n $$
$$ T_k(x) = f(a) + f'(a)(x-a) + \dots + \frac{f^{(k)}(a)}{k!}(x-a)^k $$

*   **$T_1(x) = f(a) + f'(a)(x-a)$**: This is exactly the equation for the **tangent line** (linear approximation).
*   **$T_2(x) = f(a) + f'(a)(x-a) + \frac{1}{2}f''(a)(x-a)^2$**: This is a **quadratic approximation**, which matches the slope *and* the concavity of the curve at $x=a$.

As $k$ increases, the polynomial hugs the true function $f(x)$ over a wider and wider interval around the center $a$.

## 2. Physics: The Small Angle Approximation

Taylor polynomials explain many "rules of thumb" used in introductory physics.

Consider a simple pendulum. The restoring force depends on $\sin(\theta)$. The exact differential equation is $\theta'' + \frac{g}{L}\sin(\theta) = 0$. This is nonlinear and very hard to solve.

Look at the Maclaurin series for sine:
$$ \sin(\theta) = \theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} - \dots $$

If $\theta$ is a very small angle (near 0), then $\theta^3$ is incredibly small, and $\theta^5$ is microscopic. We can truncate the series after the first term:
$$ \sin(\theta) \approx \theta \quad \text{(for small } \theta \text{)} $$

This is the $T_1$ Taylor polynomial. Substituting this into the pendulum equation makes it linear ($\theta'' + \frac{g}{L}\theta = 0$), which is trivial to solve (simple harmonic motion). The error introduced by this approximation is quantified by Taylor's Theorem.

## 3. Evaluating Impossible Integrals

Certain integrals, like $\int e^{-x^2} \, dx$ (crucial in statistics and heat transfer) or $\int \frac{\sin(x)}{x} \, dx$ (crucial in signal processing), have no elementary antiderivative. You cannot solve them using U-substitution or integration by parts.

Taylor series offer an elegant solution.
To evaluate $\int_{0}^{1} \sin(x^2) \, dx$:

1.  Start with the Maclaurin series for $\sin(u)$:
    $\sin(u) = u - \frac{u^3}{3!} + \frac{u^5}{5!} - \dots$
2.  Substitute $u = x^2$:
    $\sin(x^2) = x^2 - \frac{x^6}{3!} + \frac{x^{10}}{5!} - \dots$
3.  Integrate term-by-term:
    $\int \sin(x^2) \, dx = \int \left( x^2 - \frac{x^6}{6} + \frac{x^{10}}{120} - \dots \right) dx$
    $= \frac{x^3}{3} - \frac{x^7}{42} + \frac{x^{11}}{1320} - \dots$
4.  Evaluate at the bounds $[0, 1]$:
    $= \left(\frac{1}{3} - \frac{1}{42} + \frac{1}{1320} - \dots\right) - 0 \approx 0.31028$

By summing just the first three terms, we easily obtained an answer accurate to 4 decimal places.

## 4. Taylor's Inequality (Bounding the Error)

When you use $T_k(x)$ to approximate $f(x)$, you are making an error. The remainder (error) is $R_k(x) = f(x) - T_k(x)$.

**Taylor's Inequality** (derived from Lagrange's Error Bound) guarantees that if $|f^{(k+1)}(x)| \le M$ for all $x$ in an interval around $a$, then the error is bounded by:
$$ |R_k(x)| \le \frac{M}{(k+1)!} |x-a|^{k+1} $$

Notice this bound looks exactly like the *next* term in the Taylor series, but evaluated at some maximum possible value $M$ of the derivative. This allows engineers to determine exactly how many terms they need to program into a computer's sine/cosine calculator to guarantee 16 digits of precision.


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Applications of Taylor Polynomials",
        "icon": "BrainCircuit",
        "description": "Core Concept: Applications of Taylor Polynomials"
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
