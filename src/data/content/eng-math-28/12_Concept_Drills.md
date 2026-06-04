# 12. Concept Drills

Test your mastery of Probability Theory Basics. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: A factory uses three machines (M1, M2, M3) producing 40%, 35%, and 25% of output respectively. Their defect rates are 2%, 3%, and 5%. A defective item is found. Using Bayes' theorem, which machine is most likely responsible?
Options:
A) M1, because it produces the most items.
B) M2, because it has a moderate defect rate and high volume.
C) M3, because it has the highest defect rate.
D) All three are equally likely given Bayes' theorem.
Answer: C
Explanation: Total defect probability: $P(D) = (0.02)(0.40) + (0.03)(0.35) + (0.05)(0.25) = 0.008 + 0.0105 + 0.0125 = 0.031$. Posterior for M3: $P(M3|D) = (0.05)(0.25)/0.031 = 0.0125/0.031 \approx 0.403$. M1: $0.008/0.031 \approx 0.258$. M2: $0.0105/0.031 \approx 0.339$. Despite M3 producing only 25% of parts, its high 5% defect rate makes it the most probable source of any randomly selected defective item.
```

```drill
Question: Two events $A$ and $B$ are mutually exclusive with $P(A) = 0.3$ and $P(B) = 0.4$. Are they independent?
Options:
A) Yes, because mutual exclusivity means each event has no effect on the other.
B) No, because $P(A \cap B) = 0 \neq P(A) \cdot P(B) = 0.12$.
C) Yes, but only if $P(A) + P(B) \le 1$.
D) It cannot be determined without more information.
Answer: B
Explanation: Independence requires $P(A \cap B) = P(A) \cdot P(B) = (0.3)(0.4) = 0.12$. But mutual exclusivity forces $P(A \cap B) = 0$. These are not equal. In fact, knowing $A$ occurred tells you with certainty that $B$ did NOT — which is maximum dependence, not independence. For nonzero-probability events, mutual exclusivity and independence are incompatible.
```

```drill
Question: A component has an exponential lifetime with mean 500 hours. It has already survived 200 hours of operation. What is the probability it survives at least another 300 hours?
Options:
A) $e^{-300/500} = e^{-0.6} \approx 0.549$
B) $e^{-500/500} = e^{-1} \approx 0.368$
C) $e^{-200/500} \cdot e^{-300/500} \approx 0.301$
D) $1 - e^{-500/500} \approx 0.632$
Answer: A
Explanation: The exponential distribution is memoryless. The fact that it survived 200 hours is completely irrelevant — the remaining lifetime has the exact same $\text{Exp}(1/500)$ distribution as a fresh component. The probability of surviving at least 300 more hours is simply $P(X > 300) = e^{-300/500} = e^{-0.6} \approx 0.549$. No conditioning is needed.
```

```drill
Question: A signal is the sum of two independent random voltages: $V_1 \sim N(0, 9)$ and $V_2 \sim N(0, 16)$. What is the distribution of the total signal $V = V_1 + V_2$?
Options:
A) $N(0, 25)$ because normal distributions add and variances sum for independent variables.
B) $N(0, 5)$ because standard deviations add.
C) $N(0, 12.5)$ because the average variance is used.
D) The sum of two normal distributions is not normal.
Answer: A
Explanation: The sum of two independent normal random variables is always normal. The means add: $0 + 0 = 0$. The variances add (independence means zero covariance): $9 + 16 = 25$. Therefore $V \sim N(0, 25)$, giving a standard deviation of $\sigma = 5$ V. Note that standard deviations do NOT add — only variances do. Adding standard deviations directly would give 3 + 4 = 7, which is wrong.
```
