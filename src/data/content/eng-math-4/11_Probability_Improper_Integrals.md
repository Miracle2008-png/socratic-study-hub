# Probability and Improper Integrals

A profound application of calculus lies in probability theory, specifically dealing with continuous random variables. In real-world engineering—whether modeling the exact height of a randomly manufactured mechanical strut, the expected lifespan of a lightbulb, or the arrival times of data packets in a network router—quantities are rarely discrete.

Because a continuous variable can take on infinitely many precise values, the probability of measuring one *exact* value (e.g., exactly 70.0000000... inches) is technically zero. Instead, we use integral calculus to compute the probability that a value falls within a specific *range* or *tolerance band*.

## 1. Probability Density Functions (PDF)

A continuous random variable is mathematically described by a Probability Density Function, $f(x)$.

The probability that the variable $X$ falls between values $a$ and $b$ is computed as the definite integral of the PDF, which represents the area under the curve from $a$ to $b$:

$$ P(a \le X \le b) = \int_{a}^{b} f(x) \, dx $$

**Two Rules for a valid PDF:**
1.  **Positivity:** $f(x) \ge 0$ for all $x$. (You cannot have a negative probability of an event occurring).
2.  **Normalization:** The total area under the entire curve across all possible values must equal exactly 1 (meaning there is a 100% certainty the variable takes *some* value in its domain).
    $$ \int_{-\infty}^{\infty} f(x) \, dx = 1 $$

## 2. Improper Integrals

Notice the $\infty$ and $-\infty$ in the bounds of the integral above. Integrals with infinite limits (or infinite discontinuities) are known as **improper integrals**. 

You cannot simply plug $\infty$ into an antiderivative because $\infty$ is not a real number; it is a limit concept. To evaluate an improper integral mathematically rigorously, we replace $\infty$ with a finite variable $t$, evaluate the definite integral, and then take the limit as $t \to \infty$:

$$ \int_{a}^{\infty} f(x) \, dx = \lim_{t \to \infty} \int_{a}^{t} f(x) \, dx $$

- If the limit exists and yields a finite number, we say the integral **converges**.
- If the limit goes to infinity or does not exist, the integral **diverges**.

## 3. Engineering Reliability: The Exponential Distribution

A classic PDF widely used in reliability engineering, queueing theory, and physics (radioactive decay) is the Exponential Distribution. It models the time until an event occurs, such as a machine part failing or a server receiving a request.

$$ f(t) = \begin{cases} \lambda e^{-\lambda t} & \text{for } t \ge 0 \\ 0 & \text{for } t < 0 \end{cases} $$

Where $\lambda > 0$ is a rate constant (e.g., failures per year).

**Verifying the PDF:**
Does the total area equal 1? We compute the improper integral:
$$ \int_{0}^{\infty} \lambda e^{-\lambda t} \, dt = \lim_{b \to \infty} \int_{0}^{b} \lambda e^{-\lambda t} \, dt $$
$$ = \lim_{b \to \infty} \left[ -e^{-\lambda t} \right]_0^b = \lim_{b \to \infty} ( -e^{-\lambda b} - (-e^0) ) $$
As $b \to \infty$, the exponential term $e^{-\lambda b} \to 0$.
So the limit evaluates to $0 - (-1) = 1$. The integral converges exactly to 1, proving it is a valid probability density function.

## 4. Expected Value (Mean)

The mean or Expected Value $\mu$ of a continuous random variable represents the long-term average outcome. It is found by multiplying every possible value $x$ by its probability density $f(x)$ and integrating over the entire domain. Conceptually, this is identical to finding the center of mass (centroid) of a 1D object with variable density!

$$ \mu = E[X] = \int_{-\infty}^{\infty} x \cdot f(x) \, dx $$

---

## Example Problems

### Example 1: Probability from a Given PDF (Easy)

**Problem:** A continuous random variable has the PDF $f(x) = \frac{3}{8} x^2$ for $0 \le x \le 2$ and $f(x) = 0$ otherwise. Find the probability that $x$ is between $1$ and $2$.

**Solution:**
1. **Set up the probability integral:**
   $$ P(1 \le X \le 2) = \int_{1}^{2} \frac{3}{8} x^2 \, dx $$

2. **Evaluate the integral:**
   $$ \int_{1}^{2} \frac{3}{8} x^2 \, dx = \left[ \frac{3}{8} \cdot \frac{x^3}{3} \right]_1^2 = \left[ \frac{x^3}{8} \right]_1^2 $$
   
3. **Calculate bounds:**
   $$ \frac{2^3}{8} - \frac{1^3}{8} = \frac{8}{8} - \frac{1}{8} = \frac{7}{8} $$

The probability is $7/8$ or $87.5\%$.

### Example 2: Finding an Improper Integral (Medium)

**Problem:** Evaluate the improper integral $\int_{1}^{\infty} \frac{1}{x^3} \, dx$ to determine if it converges or diverges.

**Solution:**
1. **Convert to a limit:**
   $$ \lim_{t \to \infty} \int_{1}^{t} x^{-3} \, dx $$
   
2. **Find the antiderivative:**
   $$ \int x^{-3} \, dx = \frac{x^{-2}}{-2} = -\frac{1}{2x^2} $$
   
3. **Evaluate the definite integral:**
   $$ \lim_{t \to \infty} \left[ -\frac{1}{2x^2} \right]_1^t = \lim_{t \to \infty} \left( -\frac{1}{2t^2} - \left(-\frac{1}{2(1)^2}\right) \right) $$
   
4. **Take the limit:**
   As $t \to \infty$, the term $\frac{1}{2t^2}$ approaches $0$.
   $$ = 0 + \frac{1}{2} = \frac{1}{2} $$
   
The integral **converges** to $\frac{1}{2}$.

### Example 3: Finding the Constant of a PDF (Medium)

**Problem:** The lifespan of a specific battery in hundreds of hours is modeled by $f(x) = C e^{-x/2}$ for $x \ge 0$. Find the value of $C$ that makes this a valid PDF.

**Solution:**
1. **Set the total area equal to 1:**
   $$ \int_{0}^{\infty} C e^{-x/2} \, dx = 1 $$

2. **Evaluate the improper integral:**
   $$ \lim_{t \to \infty} \int_{0}^{t} C e^{-x/2} \, dx = \lim_{t \to \infty} \left[ -2C e^{-x/2} \right]_0^t $$
   $$ \lim_{t \to \infty} \left( -2C e^{-t/2} - (-2C e^0) \right) = 0 + 2C = 2C $$

3. **Solve for C:**
   $$ 2C = 1 \implies C = \frac{1}{2} $$

The constant is $C = 0.5$.

### Example 4: Expected Lifespan (Hard)

**Problem:** Given the exponential distribution $f(t) = \lambda e^{-\lambda t}$ (for $t \ge 0$), determine the Expected Value $\mu$ in terms of $\lambda$.

**Solution:**
1. **Set up the Expected Value formula:**
   $$ \mu = \int_{0}^{\infty} t (\lambda e^{-\lambda t}) \, dt $$
   
2. **Apply Integration by Parts:**
   Let $u = t$, $dv = \lambda e^{-\lambda t} dt$
   Then $du = dt$, $v = -e^{-\lambda t}$
   $$ \int u \, dv = uv - \int v \, du $$
   $$ \int_{0}^{t} t \lambda e^{-\lambda t} \, dt = \left[ -t e^{-\lambda t} \right]_0^t - \int_{0}^{t} (-e^{-\lambda t}) \, dt $$
   $$ = -t e^{-\lambda t} + \left[ \frac{-e^{-\lambda t}}{\lambda} \right]_0^t $$
   
3. **Evaluate limits as $t \to \infty$:**
   $$ \mu = \lim_{t \to \infty} \left( -t e^{-\lambda t} - \frac{e^{-\lambda t}}{\lambda} - \left( 0 - \frac{1}{\lambda} \right) \right) $$
   By L'Hôpital's Rule, $\lim_{t \to \infty} \frac{-t}{e^{\lambda t}} = 0$.
   The term $- \frac{e^{-\lambda t}}{\lambda}$ also goes to $0$.
   
4. **Final calculation:**
   $$ \mu = 0 - 0 + \frac{1}{\lambda} = \frac{1}{\lambda} $$
   
If the failure rate $\lambda$ is $0.05$ failures per hour, the expected lifespan is $1 / 0.05 = 20$ hours.

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Probability density",
        "icon": "BrainCircuit",
        "description": "Continuous distributions"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Improper Integrals",
        "icon": "ArrowRightCircle",
        "description": "Infinite limits in bounds"
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Expected Value",
        "icon": "ArrowRightCircle",
        "description": "Long term mean calculations"
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Reliability Engineering",
        "icon": "CheckCircle",
        "description": "Failure rates and lifespan"
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
