# 12. Concept Drills

Test your mastery of the Central Limit Theorem. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: The fill volume of a machine-filled bottle follows an unknown distribution with mean $\mu = 500$ mL and standard deviation $\sigma = 8$ mL. A sample of $n = 64$ bottles is drawn. What is the probability the sample mean exceeds 502 mL?
Options:
A) $P(\bar{X} > 502) = P(Z > 2) = 0.0228$
B) $P(\bar{X} > 502) = P(Z > 0.25) = 0.4013$
C) Cannot be computed because the individual distribution is unknown.
D) $P(\bar{X} > 502) = P(Z > 16) \approx 0$
Answer: A
Explanation: By the CLT, $\bar{X} \approx N(\mu, \sigma^2/n) = N(500, 64/64) = N(500, 1)$. So the standard error is $\sigma/\sqrt{n} = 8/8 = 1$ mL. Standardizing: $Z = (502 - 500)/1 = 2.0$. Therefore $P(\bar{X} > 502) = P(Z > 2) = 1 - \Phi(2) = 0.0228$. The CLT applies regardless of the unknown shape of the underlying distribution.
```

```drill
Question: You want to estimate the mean weight of components to within $E = 2$ grams with 95% confidence. You pilot-test 15 units and get $S = 10$ g. What sample size is required?
Options:
A) $n = (1.96 \times 10/2)^2 = 96.04 \implies n = 97$
B) $n = (1.96 \times 10/2)^2 / 15 = 6.4 \implies n = 7$
C) $n = (2.576 \times 10/2)^2 = 165.9 \implies n = 166$
D) $n = (1.96/10)^2 \times 2^2 = 0.154 \implies n = 1$
Answer: A
Explanation: The sample size formula is $n = (z_{\alpha/2} \cdot \sigma / E)^2$. At 95% confidence, $z_{0.025} = 1.96$. Using the pilot estimate $S \approx \sigma = 10$ g and target margin $E = 2$ g: $n = (1.96 \times 10/2)^2 = (9.8)^2 = 96.04$, so round up to $n = 97$. The pilot study's $n=15$ is irrelevant to the final sample size formula — it only provided the $\sigma$ estimate.
```

```drill
Question: A hypothesis test on a process mean gives a p-value of 0.032 at significance level $\alpha = 0.05$. What is the correct conclusion?
Options:
A) There is a 3.2% probability that $H_0$ is true.
B) We fail to reject $H_0$ because 0.032 is a small probability.
C) We reject $H_0$ because $p = 0.032 < \alpha = 0.05$. The data provides statistically significant evidence against the null hypothesis.
D) We accept $H_1$ as definitely true because the p-value is below $\alpha$.
Answer: C
Explanation: Since $p = 0.032 < \alpha = 0.05$, we reject $H_0$. The p-value does NOT measure the probability that $H_0$ is true — it measures the probability of observing data at least this extreme IF $H_0$ were true. Rejecting $H_0$ means the data is incompatible with $H_0$ at the chosen significance level. We do not "accept $H_1$ as definitely true" — we simply conclude the evidence is statistically significant.
```

```drill
Question: In a Monte Carlo simulation with $N = 2500$ runs, the sample standard deviation of outputs is $S_Y = 40$ units. What is the 95% confidence interval half-width (margin of error) for the estimated expected value?
Options:
A) $1.96 \times 40 = 78.4$ units
B) $1.96 \times 40/2500 = 0.031$ units
C) $1.96 \times 40/\sqrt{2500} = 1.96 \times 0.8 = 1.568$ units
D) $1.96 \times 40/\sqrt{40} = 12.4$ units
Answer: C
Explanation: The Monte Carlo standard error is $S_Y/\sqrt{N} = 40/\sqrt{2500} = 40/50 = 0.8$ units. The 95% margin of error is $1.96 \times 0.8 = 1.568$ units. Dividing by $\sqrt{N}$ (not $N$) is the CLT result — the standard deviation of the sample mean scales as $1/\sqrt{N}$. With 2500 simulations and high variability ($S = 40$), the estimate is only accurate to about ±1.6 units.
```
