# 1. The Binomial Distribution In Depth

The Binomial Distribution is the backbone of all reliability, quality control, and digital communications modelling. Topic 28 introduced the formula; here we build full mastery.

### Setup and Parameters
You have $n$ trials. Each trial is independent. Each trial has exactly two outcomes: Success (probability $p$) or Failure (probability $q = 1-p$). 
$X$ counts the total number of successes across all $n$ trials.

$$X \sim B(n, p)$$

$$P(X = k) = \binom{n}{k} p^k q^{n-k}, \qquad k = 0, 1, 2, \dots, n$$

$$E[X] = np \qquad \text{Var}(X) = npq$$

### Why the Binomial Coefficient?
$\binom{n}{k} = \frac{n!}{k!(n-k)!}$ counts the distinct arrangements of $k$ successes among $n$ trials.

For example, with $n=4$ trials and $k=2$ successes, the arrangements are: SSFF, SFSF, SFFS, FSSF, FSFS, FFSS — that is $\binom{4}{2} = 6$ orderings. Each arrangement has the same probability $p^2 q^2$, so the total probability of exactly 2 successes is $6 p^2 q^2$.

### CDF and Tail Probabilities
Engineering problems usually ask "at most $k$" or "at least $k$":
$$P(X \le k) = \sum_{j=0}^{k} \binom{n}{j} p^j q^{n-j}$$

$$P(X \ge k) = 1 - P(X \le k-1)$$

### Worked Example: Reliability Testing
A circuit board has 20 solder joints, each with an independent 4% defect rate.
What is the probability that 2 or fewer joints are defective?

$$P(X \le 2) = P(0) + P(1) + P(2)$$

$$P(X=0) = (0.96)^{20} = 0.4420$$

$$P(X=1) = \binom{20}{1}(0.04)^1(0.96)^{19} = 20 \times 0.04 \times 0.4604 = 0.3683$$

$$P(X=2) = \binom{20}{2}(0.04)^2(0.96)^{18} = 190 \times 0.0016 \times 0.4796 = 0.1458$$

$$P(X \le 2) = 0.4420 + 0.3683 + 0.1458 = \mathbf{0.9561}$$

There is a 95.6% probability of 2 or fewer defective joints. Acceptable for most production standards.

### The Normal Approximation to the Binomial
When $n$ is large and $p$ is not close to 0 or 1, summing Binomial terms by hand becomes impractical. Instead:
$$B(n, p) \approx N(\mu, \sigma^2), \quad \text{where } \mu = np, \; \sigma^2 = npq$$

Rule of thumb: use the approximation when $np \ge 5$ AND $nq \ge 5$.

**Continuity Correction:** Because the Binomial is discrete and the Normal is continuous, improve accuracy by expanding each integer by ±0.5:
$$P(X = k) \approx P\left(k - 0.5 \le Z_{\text{normal}} \le k + 0.5\right)$$
