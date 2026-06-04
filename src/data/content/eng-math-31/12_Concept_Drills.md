# 12. Concept Drills

Test your mastery of Statistical Inference. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: You compute the MLE of the failure rate $\lambda$ from $n=20$ Exponential lifetimes and get $\hat{\lambda} = 1/\bar{x} = 0.005$ failures/hour. You then want the MLE of the mean lifetime $\mu = 1/\lambda$. What is it?
Options:
A) You must re-derive the MLE from scratch for $\mu$ separately.
B) $\hat{\mu} = 1/\hat{\lambda} = 200$ hours, by the MLE Invariance Property.
C) $\hat{\mu} = \bar{x}$ only if the distribution is Normal.
D) The MLE of $\mu$ does not exist because $\mu$ is the reciprocal of a parameter.
Answer: B
Explanation: The Invariance Property of MLE states that if $\hat{\theta}$ is the MLE of $\theta$, then $g(\hat{\theta})$ is the MLE of $g(\theta)$ for any function $g$. Since $\hat{\lambda}_{\text{MLE}} = 1/\bar{x}$, the MLE of the mean lifetime is $\hat{\mu}_{\text{MLE}} = 1/\hat{\lambda} = \bar{x} = 200$ hours. No re-derivation is needed.
```

```drill
Question: A one-way ANOVA test of $k=4$ groups (each $n=8$, total $N=32$) yields $F=2.10$. The critical value at $\alpha=0.05$ is $F_{0.05, 3, 28} = 2.95$. What is the correct conclusion?
Options:
A) Reject $H_0$; at least one group mean differs significantly.
B) Fail to reject $H_0$; there is insufficient evidence to conclude any group means differ.
C) Accept $H_0$; all group means are equal.
D) The test is invalid because there are more than 2 groups.
Answer: B
Explanation: Since $F=2.10 < F_{\text{crit}}=2.95$, we fail to reject $H_0: \mu_1=\mu_2=\mu_3=\mu_4$. "Fail to reject" is not the same as "accept" — we have not proven the means are equal, only that the data does not provide sufficient evidence of a difference at this significance level. ANOVA is valid and standard for comparing any $k \ge 2$ groups.
```

```drill
Question: A process chart shows that all 25 recent sample means fall within the ±3σ control limits, but 12 of 25 consecutive points fall on the same side of the center line. What does this indicate?
Options:
A) The process is in statistical control — no points are outside the control limits.
B) The process is out of control. A run of 12 on one side strongly suggests the process mean has shifted, even though no individual point crossed the limits.
C) This is expected statistical behavior with no action required.
D) The control limits need to be widened.
Answer: B
Explanation: The Western Electric run rules flag a run of 8+ consecutive points on one side of the center line as a signal of a mean shift. The probability of 8 consecutive points on one side by random chance is $(0.5)^8 = 0.0039$ — highly unlikely. With 12 consecutive points on one side, the probability is $(0.5)^{12} = 0.00024$. The process mean has almost certainly drifted. Control limits alone are not sufficient — run patterns must also be monitored.
```

```drill
Question: A Bayesian analysis uses a Beta(3, 7) prior for an unknown proportion $p$. After observing 15 successes in 40 trials, what is the posterior distribution?
Options:
A) Beta(15, 25) — ignoring the prior.
B) Beta(18, 32) — adding prior parameters to observed successes and failures.
C) Beta(3, 7) — the prior is unchanged because $n=40$ is not large enough.
D) Beta(15, 40) — the posterior uses the likelihood only.
Answer: B
Explanation: For a Binomial likelihood with a Beta prior (the conjugate pair), the posterior is: Beta$(\alpha + k, \; \beta + n - k)$ where $\alpha=3, \beta=7$ are the prior parameters, $k=15$ successes, and $n-k=25$ failures. Posterior = Beta$(3+15, \; 7+25)$ = Beta$(18, 32)$. The posterior mean is $18/(18+32) = 18/50 = 0.36$, pulled between the prior mean $3/10=0.30$ and the data proportion $15/40=0.375$.
```
