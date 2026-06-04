# 1. What is Probability?

Engineers do not live in a world of perfect certainty. 
A bridge must be designed for wind loads that fluctuate unpredictably. A communications system must decode signals corrupted by random noise. A semiconductor must be manufactured within tolerance limits despite random atomic variations.

Probability is the mathematical framework that gives engineers a rigorous, quantitative tool to **reason under uncertainty**. It is not guessing. It is the science of measuring the likelihood of outcomes with mathematical precision.

### The Sample Space and Events
Before we can assign a probability to anything, we must define the universe of all possible outcomes.

The **Sample Space** $\Omega$ (capital omega) is the complete set of every possible outcome of a random experiment.

*   Rolling one die: $\Omega = \{1, 2, 3, 4, 5, 6\}$.
*   Measuring the lifetime of a transistor: $\Omega = [0, \infty)$ (any non-negative real number of hours).
*   Flipping two coins: $\Omega = \{HH, HT, TH, TT\}$.

An **Event** $A$ is any specific subset of the sample space. It is a collection of outcomes you are interested in.

*   Event $A$ = "Rolling an even number" = $\{2, 4, 6\}$ (a subset of the die sample space).
*   Event $B$ = "The transistor lasts more than 1000 hours" = $(1000, \infty)$.

### The Axioms of Probability (Kolmogorov)
In 1933, Andrei Kolmogorov established the rigorous mathematical foundation of probability in just three axioms. Every single rule in probability theory is a direct consequence of these three statements.

**Axiom 1 (Non-negativity):** The probability of any event is always zero or greater.
$$P(A) \ge 0$$

**Axiom 2 (Unitarity):** If an outcome must happen (the certain event), its probability is exactly 1.
$$P(\Omega) = 1$$

**Axiom 3 (Additivity):** If two events $A$ and $B$ are mutually exclusive (they cannot both occur at the same time), the probability of either one occurring is the sum of their individual probabilities.
$$\text{If } A \cap B = \emptyset, \text{ then } P(A \cup B) = P(A) + P(B)$$

Everything else — conditional probability, independence, Bayes' theorem, distributions — follows with pure logic from these three axioms alone.
