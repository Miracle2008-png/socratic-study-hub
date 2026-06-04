# 4. Bayes' Theorem

Conditional probability lets us compute $P(A \mid B)$ when we know $P(A \cap B)$ and $P(B)$.
But what if we only know the reverse conditional — $P(B \mid A)$ — and we need to work backwards to find $P(A \mid B)$?

This situation arises constantly in engineering:
*   We know the probability a faulty sensor produces an alarm. We need to find: given an alarm, what is the probability the sensor is actually faulty?
*   We know the probability a disease produces a positive test. We need to find: given a positive test, what is the probability the patient actually has the disease?

### Bayes' Theorem
Starting from the Multiplication Rule applied in both directions:
$$P(A \cap B) = P(B \mid A) \cdot P(A) = P(A \mid B) \cdot P(B)$$

Solving for $P(A \mid B)$:
$$\boxed{P(A \mid B) = \frac{P(B \mid A) \cdot P(A)}{P(B)}}$$

Each term has a formal engineering name:
*   $P(A)$ — **Prior Probability**: your belief about $A$ before observing any evidence.
*   $P(B \mid A)$ — **Likelihood**: how probable the observed evidence is if $A$ is true.
*   $P(B)$ — **Marginal Probability** (the normalizing constant): total probability of observing $B$ regardless of $A$.
*   $P(A \mid B)$ — **Posterior Probability**: your updated belief about $A$ after seeing the evidence.

### Worked Example: Defective Component Detection
A manufacturer has three suppliers: Supplier 1 (S1) provides 50% of components, S2 provides 30%, and S3 provides 20%.
Defect rates: S1 = 2%, S2 = 4%, S3 = 1%.

A randomly chosen component fails inspection. What is the probability it came from S2?

**Step 1 — Total probability of a defect:**
$$P(D) = P(D \mid S1)P(S1) + P(D \mid S2)P(S2) + P(D \mid S3)P(S3)$$
$$P(D) = (0.02)(0.50) + (0.04)(0.30) + (0.01)(0.20)$$
$$P(D) = 0.010 + 0.012 + 0.002 = 0.024$$

**Step 2 — Apply Bayes:**
$$P(S2 \mid D) = \frac{P(D \mid S2) \cdot P(S2)}{P(D)} = \frac{(0.04)(0.30)}{0.024} = \frac{0.012}{0.024} = \mathbf{0.50}$$

Although S2 only supplies 30% of parts, it is responsible for 50% of all defects! Bayes' theorem made this visible immediately, guiding where the engineer should direct quality improvement efforts.
