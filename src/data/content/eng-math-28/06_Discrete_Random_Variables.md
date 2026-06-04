# 6. Discrete Random Variables

So far we have computed probabilities of events. Now we upgrade: we attach a **number** to every possible outcome.

A **Random Variable** (RV) $X$ is a function that assigns a real number to each outcome in the sample space $\Omega$.

It is NOT a variable in the classical sense. It is a mapping from random outcomes to the real number line, allowing us to do algebra on uncertainty.

### Discrete vs. Continuous
*   **Discrete RV:** Takes a countable number of distinct values (integers, finite lists). Examples: number of defects per wafer, number of packets dropped per second.
*   **Continuous RV:** Can take any value within a continuous interval. Examples: voltage, temperature, time to failure. (Covered in the next page.)

### Probability Mass Function (PMF)
For a discrete RV $X$, the **Probability Mass Function** $p(x)$ gives the exact probability that $X$ equals a specific value $x$:
$$p(x) = P(X = x)$$

The PMF must satisfy:
1.  $p(x) \ge 0$ for all $x$.
2.  $\sum_{\text{all } x} p(x) = 1$ (all probabilities must sum to 1).

### Example: Number of Transmission Errors
A digital channel sends packets, each with a 10% chance of error, independently.
Suppose we track the number of errors $X$ in 3 packets.
The possible values are $x = 0, 1, 2, 3$.

Using the Binomial formula (developed formally in the next topic):
$$p(0) = (0.9)^3 = 0.729, \quad p(1) = 3(0.1)(0.9)^2 = 0.243$$
$$p(2) = 3(0.1)^2(0.9) = 0.027, \quad p(3) = (0.1)^3 = 0.001$$

Verify: $0.729 + 0.243 + 0.027 + 0.001 = 1.000$ ✓

### Cumulative Distribution Function (CDF)
The **Cumulative Distribution Function** $F(x)$ gives the probability that $X$ is less than or equal to $x$:
$$F(x) = P(X \le x) = \sum_{k \le x} p(k)$$

For the transmission example:
$$F(1) = P(X \le 1) = p(0) + p(1) = 0.729 + 0.243 = 0.972$$

This means there is a 97.2% chance of at most 1 error in 3 packets.
The CDF always starts at 0, ends at 1, and is non-decreasing. It allows quick computation of range probabilities:
$$P(a < X \le b) = F(b) - F(a)$$
