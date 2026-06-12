# Power Series

Until now, our series have been sums of constants (like $\sum \frac{1}{n^2}$). A **Power Series** represents a monumental shift: it is a series where the terms involve a variable $x$. You can think of a power series as an infinite polynomial. 

## 1. Engineering Context: Linearization and Approximation

Power series are arguably the most important mathematical tool in applied engineering:
*   **Mechanical and Aerospace Engineering:** Real-world dynamics (like air resistance or pendulum motion) are governed by highly non-linear differential equations that are often impossible to solve exactly. Engineers use power series to "linearize" these systems—approximating non-linear curves with infinite polynomials—allowing them to predict aerodynamics, heat transfer, and stress.
*   **Electrical and Computer Engineering:** Calculators and computers do not "know" what $\sin(x)$ or $e^x$ are. The silicon chips only know how to add, subtract, multiply, and divide. Power series allow processors to compute complex transcendental functions to incredible accuracy using only basic arithmetic operations.
*   **Digital Signal Processing:** Finite Impulse Response (FIR) and Infinite Impulse Response (IIR) filter transfer functions are explicitly designed mathematically as power series in the complex plane.

## 2. Definition of a Power Series

A power series centered at $x = a$ has the general form:
$$ \sum_{n=0}^{\infty} c_n (x - a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \dots $$
*   $x$ is the independent variable.
*   $c_n$ represents the coefficient of the $n$-th term.
*   $a$ is the "center" of the series.

If $a = 0$, the series is centered at the origin, simplifying to a Maclaurin-style form:
$$ \sum_{n=0}^{\infty} c_n x^n = c_0 + c_1 x + c_2 x^2 + c_3 x^3 + \dots $$

For any specific numerical value you plug in for $x$, the power series becomes a standard series of constants, which will either converge to a finite number or diverge.

## 3. Radius and Interval of Convergence

Because convergence completely depends on the value of $x$, we no longer ask "Does the series converge?" Instead, we ask, "**For what specific values of $x$ does the series converge?**"

There are only three possible scenarios for a power series centered at $a$:
1.  **Converges only at the center $x = a$.** (If you plug in $a$, every term is zero except $c_0$). The radius of convergence is $R = 0$.
2.  **Converges for all real numbers $x$.** The polynomial perfectly mimics the function everywhere. The radius is $R = \infty$.
3.  **Converges on a finite interval around $a$.** There exists a positive number $R$ (the **Radius of Convergence**) such that the series converges absolutely if $|x - a| < R$, and diverges if $|x - a| > R$.

The **Interval of Convergence** is the actual segment on the 1D number line where the series behaves stably. If the radius is $R$, the open interval is $(a - R, a + R)$.

---

## 4. Finding the Radius of Convergence

To find the radius $R$, we almost exclusively deploy the **Ratio Test**, treating $x$ as a constant parameter during the limit.

### Example 1: Infinite Radius of Convergence (Easy)

Find the radius of convergence for:
$$ \sum_{n=0}^{\infty} \frac{x^n}{n!} $$

1.  **Apply the Ratio Test:**
    $$ L = \lim_{n \to \infty} \left| \frac{x^{n+1}}{(n+1)!} \cdot \frac{n!}{x^n} \right| $$
2.  **Simplify:**
    $$ L = \lim_{n \to \infty} \left| x \cdot \frac{1}{n+1} \right| = |x| \lim_{n \to \infty} \frac{1}{n+1} $$
3.  **Evaluate the limit:**
    $$ L = |x| \cdot 0 = 0 $$
4.  **Conclusion:** Since $L = 0$, which is *always* less than $1$ regardless of what $x$ is, the series converges for all real numbers. 
    **Radius $R = \infty$. Interval: $(-\infty, \infty)$.**
    *(Note: This series actually defines $e^x$!)*

---

### Example 2: Finite Radius and Checking Endpoints (Medium)

Find the interval of convergence for:
$$ \sum_{n=1}^{\infty} \frac{(x-3)^n}{n \cdot 2^n} $$

1.  **Apply the Ratio Test:**
    $$ L = \lim_{n \to \infty} \left| \frac{(x-3)^{n+1}}{(n+1) 2^{n+1}} \cdot \frac{n \cdot 2^n}{(x-3)^n} \right| $$
2.  **Simplify and Group:**
    $$ L = \lim_{n \to \infty} \left| \frac{x-3}{2} \right| \cdot \frac{n}{n+1} $$
3.  **Evaluate limit as $n \to \infty$:**
    $$ L = \frac{|x-3|}{2} \cdot 1 = \frac{|x-3|}{2} $$
4.  **Set $L < 1$ for convergence:**
    $$ \frac{|x-3|}{2} < 1 \implies |x - 3| < 2 $$
    The distance from the center ($3$) must be less than $2$. Thus, the **Radius of Convergence is $R = 2$**. The open interval is $1 < x < 5$.

**Crucial Step: Checking the Endpoints**
The Ratio Test is completely inconclusive when $L = 1$, which occurs exactly at the boundaries $x = 1$ and $x = 5$. We must plug these endpoints back into the original series and test them manually.

*   **Test $x = 5$:** $\sum \frac{(5-3)^n}{n \cdot 2^n} = \sum \frac{2^n}{n \cdot 2^n} = \sum \frac{1}{n}$. This is the Harmonic Series, which **diverges**.
*   **Test $x = 1$:** $\sum \frac{(1-3)^n}{n \cdot 2^n} = \sum \frac{(-2)^n}{n \cdot 2^n} = \sum \frac{(-1)^n}{n}$. This is the Alternating Harmonic Series, which **converges** (by AST).

Therefore, we include $1$ but exclude $5$. The full Interval of Convergence is **$[1, 5)$**.

---

### Example 3: Finding the Radius with Non-Standard Powers (Hard)

Find the radius of convergence for:
$$ \sum_{n=1}^{\infty} \frac{(-1)^n 3^n x^{2n}}{n} $$

1.  **Apply the Ratio Test:**
    $$ L = \lim_{n \to \infty} \left| \frac{(-1)^{n+1} 3^{n+1} x^{2(n+1)}}{n+1} \cdot \frac{n}{(-1)^n 3^n x^{2n}} \right| $$
    *(Notice we plugged in $n+1$, making the power $2n+2$, not $2n+1$)*
2.  **Simplify (Absolute value destroys the $(-1)^n$):**
    $$ L = \lim_{n \to \infty} \left| \frac{3^{n+1}}{3^n} \cdot \frac{x^{2n+2}}{x^{2n}} \cdot \frac{n}{n+1} \right| $$
    $$ L = \lim_{n \to \infty} \left| 3 x^2 \cdot \frac{n}{n+1} \right| = 3|x^2| \cdot 1 = 3x^2 $$
3.  **Set $L < 1$ for convergence:**
    $$ 3x^2 < 1 \implies x^2 < \frac{1}{3} \implies |x| < \frac{1}{\sqrt{3}} $$
    Because the series is centered at $0$, the **Radius of Convergence is $R = \frac{1}{\sqrt{3}}$**.

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Power Series",
        "icon": "Variable",
        "description": "Infinite polynomials used for system approximation."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "R = 0",
        "icon": "Minimize2",
        "description": "Converges only at Center 'a'."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fecaca"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "R = Finite",
        "icon": "Maximize2",
        "description": "Converges on interval (a-R, a+R)."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "R = Infinity",
        "icon": "Infinity",
        "description": "Converges for all real numbers."
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
      "source": "1",
      "target": "3",
      "animated": true
    },
    {
      "source": "1",
      "target": "4",
      "animated": true
    }
  ]
}
```
