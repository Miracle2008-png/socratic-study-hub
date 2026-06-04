# 7. Continuous Random Variables and the PDF

A continuous random variable $X$ can take any value in an interval — for example, a voltage reading anywhere from 0 to 5 V, or a component lifetime anywhere from 0 to infinity.

Because the possible values form an uncountably infinite continuum, the probability of hitting any single exact value is exactly zero:
$$P(X = x) = 0 \text{ for every specific } x$$

This is not a paradox. Think of a dart hitting a dartboard: the probability of landing on a specific dimensionless mathematical point is zero, yet the dart must land somewhere. We can only sensibly ask for the probability of landing in a **range**.

### Probability Density Function (PDF)
For a continuous RV, we define a **Probability Density Function** $f(x)$ such that:
$$P(a \le X \le b) = \int_a^b f(x) \, dx$$

The PDF is not a probability itself — it is a density. $f(x)$ can exceed 1. The area under the curve over any interval gives the probability for that interval.

Requirements for a valid PDF:
1.  $f(x) \ge 0$ for all $x$.
2.  $\displaystyle\int_{-\infty}^{\infty} f(x) \, dx = 1$ (total area = 1).

### The CDF for Continuous Variables
Just as in the discrete case, the CDF $F(x) = P(X \le x)$, but now it is an integral:
$$F(x) = \int_{-\infty}^{x} f(t) \, dt$$

By the Fundamental Theorem of Calculus:
$$f(x) = \frac{d}{dx} F(x)$$

The PDF and CDF are derivatives/integrals of each other.

### Worked Example: Uniform Distribution
A sensor reads voltage uniformly at random between 2 V and 6 V. The PDF is flat:
$$f(x) = \frac{1}{6-2} = \frac{1}{4}, \quad 2 \le x \le 6$$

What is the probability the reading falls between 3 V and 5 V?
$$P(3 \le X \le 5) = \int_3^5 \frac{1}{4} \, dx = \frac{1}{4}(5 - 3) = \frac{2}{4} = \mathbf{0.5}$$

Geometrically: the probability is just the fraction of the total interval length covered — the area of a rectangle.

What is the CDF at $x = 4$?
$$F(4) = \int_2^4 \frac{1}{4} \, dt = \frac{1}{4}(4-2) = 0.5$$

There is exactly a 50% chance the voltage is at or below 4 V — which makes intuitive sense for a uniform distribution centered in the interval.
