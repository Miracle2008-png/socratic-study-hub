# Probability and Improper Integrals

A powerful application of calculus is in probability theory, specifically dealing with continuous random variables—like the exact height of a randomly selected person, or the exact lifespan of a lightbulb.

Because a continuous variable can take on infinitely many values, the probability of hitting one *exact* value is zero (e.g., exactly 70.000000... inches). Instead, we calculate the probability that a value falls within a certain *range*.

## 1. Probability Density Functions (PDF)

A continuous random variable is described by a Probability Density Function, $f(x)$.

The probability that the variable $X$ falls between $a$ and $b$ is the area under the PDF curve from $a$ to $b$:
$$ P(a \le X \le b) = \int_{a}^{b} f(x) \, dx $$

**Two Rules for a valid PDF:**
1.  $f(x) \ge 0$ for all $x$. (You cannot have negative probability).
2.  The total area under the entire curve must equal exactly 1 (meaning there is a 100% chance the variable takes *some* value).
    $$ \int_{-\infty}^{\infty} f(x) \, dx = 1 $$

## 2. Improper Integrals

Notice the $\infty$ in the bounds of the integral above. This is an **improper integral**. You cannot plug $\infty$ into an antiderivative because $\infty$ is not a number; it is a concept.

To evaluate an improper integral, we replace $\infty$ with a variable $t$, and take the limit as $t \to \infty$:
$$ \int_{a}^{\infty} f(x) \, dx = \lim_{t \to \infty} \int_{a}^{t} f(x) \, dx $$

If the limit exists and yields a finite number, the integral **converges**.
If the limit is infinite or does not exist, the integral **diverges**.

## 3. The Exponential Distribution

A classic PDF used to model wait times or lifespans (like radioactive decay or the time until a machine part fails) is the Exponential Distribution.
$$ f(t) = \begin{cases} c e^{-ct} & \text{for } t \ge 0 \\ 0 & \text{for } t < 0 \end{cases} $$
Where $c > 0$ is a rate constant.

**Verify it is a valid PDF:**
Does the total area equal 1?
$$ \int_{0}^{\infty} c e^{-ct} \, dt = \lim_{b \to \infty} \int_{0}^{b} c e^{-ct} \, dt $$
$$ = \lim_{b \to \infty} \left[ -e^{-ct} \right]_0^b = \lim_{b \to \infty} ( -e^{-cb} - (-e^0) ) $$
As $b \to \infty$, $e^{-cb} \to 0$.
So the limit is $0 - (-1) = 1$. The integral converges to 1. It is a valid PDF.

## 4. Expected Value (Mean)

The mean or Expected Value $\mu$ of a continuous random variable is found by multiplying the value $x$ by its probability density $f(x)$ and integrating over all possible values. This is analogous to the formula for the center of mass in 1D!

$$ \mu = \int_{-\infty}^{\infty} x \cdot f(x) \, dx $$

For the exponential distribution $f(t) = c e^{-ct}$, evaluating the expected value requires integration by parts:
$$ \mu = \int_{0}^{\infty} t (c e^{-ct}) \, dt = \frac{1}{c} $$
If the rate of failure $c$ is $0.1$ failures per year, the expected lifespan is $1/0.1 = 10$ years.
