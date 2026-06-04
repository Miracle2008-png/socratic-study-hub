# 12. Concept Drills

Test your mastery of Discrete & Continuous Distributions. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: A Weibull-distributed component has shape parameter $\beta = 0.6$. An engineer observes it has already been running for 500 hours without failure. What does this tell them about its future failure risk compared to a fresh unit?
Options:
A) It is more likely to fail soon, because age always increases failure risk.
B) It is less likely to fail in the next interval, because $\beta < 1$ means a decreasing failure rate — surviving units are stronger than the population average.
C) It has the same failure risk as a fresh unit, by the memoryless property.
D) Its failure rate is now constant, having transitioned out of the infant mortality phase.
Answer: B
Explanation: When $\beta < 1$, the Weibull hazard rate $h(t) = (\beta/\eta)(t/\eta)^{\beta-1}$ is a decreasing function of time. This means the longer a component has survived without failure, the lower its instantaneous failure rate becomes. The surviving population at 500 hours consists only of the robust units — the weak ones already failed early. The memoryless property applies only to the Exponential ($\beta = 1$), not to $\beta \neq 1$.
```

```drill
Question: Network packets arrive at a router at a Poisson rate of $\lambda = 12$ packets/second. In any given second, what is the probability of receiving exactly 12 packets?
Options:
A) $P(X=12) = e^{-12} \cdot 12^{12} / 12! \approx 0.114$
B) $P(X=12) = 0.5$, because 12 is the mean.
C) $P(X=12) = 1 - e^{-12} \approx 0.9999$
D) $P(X=12) = e^{-12} \approx 0.000006$
Answer: A
Explanation: Poisson PMF: $P(X=k) = \lambda^k e^{-\lambda}/k!$. Substituting $\lambda=12$, $k=12$: $(12^{12} \cdot e^{-12}) / 12! = (8916100448256 \times 0.000006144) / 479001600 \approx 0.114$. Despite 12 being the mean, the most probable value for a Poisson only has about 11% probability. The distribution is spread over a wide range of counts around the mean.
```

```drill
Question: A sample of $n=10$ measurements from a Normal population gives sample variance $S^2 = 4.5$. You know the true population variance should be $\sigma^2 = 3.0$. What statistic would you use to assess how unusual this sample variance is?
Options:
A) $Z = (S^2 - \sigma^2)/\sigma$, using the standard Normal.
B) $\chi^2 = (n-1)S^2/\sigma^2 = 9 \times 4.5 / 3.0 = 13.5$, with 9 degrees of freedom.
C) $t = (S^2 - \sigma^2)/(S/\sqrt{n})$, using the t-distribution.
D) $F = S^2/\sigma^2 = 1.5$, using the F-distribution with 1 and 9 degrees of freedom.
Answer: B
Explanation: For inference about population variance $\sigma^2$ from a Normal population, the statistic $(n-1)S^2/\sigma^2$ follows a Chi-Squared distribution with $(n-1)$ degrees of freedom. Here: $\chi^2 = 9 \times 4.5 / 3.0 = 13.5$ with 9 df. Checking a Chi-Squared table, $P(\chi^2 > 13.5)$ with 9 df $\approx 14\%$, so observing $S^2 = 4.5$ when $\sigma^2 = 3.0$ is not statistically unusual.
```

```drill
Question: The Central Limit Theorem guarantees that the sample mean $\bar{X}$ from $n=50$ i.i.d. Exponential(2) random variables is approximately Normal. What are the mean and variance of this approximate Normal distribution?
Options:
A) Mean $= 0.5$, Variance $= 0.25/50 = 0.005$
B) Mean $= 2$, Variance $= 4/50 = 0.08$
C) Mean $= 0.5$, Variance $= 0.25$
D) Mean $= 2$, Variance $= 4$
Answer: A
Explanation: For $\text{Exp}(\lambda)$ with $\lambda = 2$: mean $\mu = 1/\lambda = 0.5$ and variance $\sigma^2 = 1/\lambda^2 = 0.25$. The CLT states the sample mean $\bar{X}_n \approx N(\mu, \sigma^2/n)$. Therefore $\bar{X}_{50} \approx N(0.5, \; 0.25/50) = N(0.5, \; 0.005)$. The variance of the sample mean is always the population variance divided by $n$ — it shrinks as we collect more data.
```
