# 5. Independence

Two events are **Independent** if knowing that one occurred gives you absolutely no information about whether the other occurred.

This is the formal, mathematical definition, NOT an intuitive guess. You must verify independence using the definition, not assume it because the events "seem unrelated."

### The Mathematical Definition
Events $A$ and $B$ are independent if and only if:
$$P(A \cap B) = P(A) \cdot P(B)$$

This is equivalent to saying:
$$P(A \mid B) = P(A) \quad \text{and} \quad P(B \mid A) = P(B)$$

Knowing $B$ happened does not alter the probability of $A$ at all. The conditional probability collapses back to the unconditional probability.

### Independence vs. Mutual Exclusivity (Critical Distinction)
These two concepts are constantly confused. They are not the same thing — in fact, for events with nonzero probability, they are mutually exclusive ideas!

*   **Mutually Exclusive:** $A$ and $B$ cannot BOTH occur. $P(A \cap B) = 0$.
*   **Independent:** Knowing $A$ tells you nothing about $B$. $P(A \cap B) = P(A) \cdot P(B)$.

If $A$ and $B$ are mutually exclusive with $P(A) > 0$ and $P(B) > 0$, are they independent?
Check: $P(A \cap B) = 0$, but $P(A) \cdot P(B) > 0$.
These are NOT equal, so mutually exclusive events are actually **dependent**: if you know $A$ occurred, you know for certain that $B$ did NOT.

### Worked Example
A circuit has two components, a resistor (R) and a capacitor (C), that fail independently.
*   $P(R \text{ fails}) = 0.05$
*   $P(C \text{ fails}) = 0.08$

Since failures are independent, the probability that BOTH fail simultaneously:
$$P(R \cap C) = P(R) \cdot P(C) = (0.05)(0.08) = \mathbf{0.004}$$

The probability that AT LEAST ONE fails (system failure, if they are in series):
$$P(R \cup C) = P(R) + P(C) - P(R \cap C) = 0.05 + 0.08 - 0.004 = \mathbf{0.126}$$

### Independence of Multiple Events
Events $A_1, A_2, \dots, A_n$ are **mutually independent** if for EVERY possible subset of them, the intersection probability factors into a product.
For three events $A$, $B$, $C$, the conditions are:
$$P(A \cap B) = P(A)P(B), \quad P(A \cap C) = P(A)P(C), \quad P(B \cap C) = P(B)P(C)$$
$$P(A \cap B \cap C) = P(A)P(B)P(C)$$

All four conditions must hold. Pairwise independence alone does not guarantee mutual independence!
