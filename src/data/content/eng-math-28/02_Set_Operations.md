# 2. Set Operations and Probability Rules

An Event is a subset of a Sample Space. This means the algebra of Events is identical to Set Theory, and we can derive powerful probability rules directly from set algebra.

### The Three Core Set Operations for Events
Let $A$ and $B$ be two events within the same sample space $\Omega$.

**Union ($A \cup B$):** The event that $A$ OR $B$ (or both) occurs.
In set diagrams, this is the entire region covered by either circle.

**Intersection ($A \cap B$):** The event that BOTH $A$ AND $B$ occur simultaneously.
In set diagrams, this is only the overlapping central region.

**Complement ($A^c$ or $\bar{A}$):** The event that $A$ does NOT occur. Everything in the sample space that is NOT part of $A$.
$$P(A^c) = 1 - P(A)$$

### The Addition Rule
Kolmogorov's third axiom only covers mutually exclusive events ($A \cap B = \emptyset$). What is the probability of $A \cup B$ when the events DO overlap?

If we naively add $P(A) + P(B)$, we accidentally count the overlap region $(A \cap B)$ twice! We must subtract it once to fix the double-counting.

**The General Addition Rule:**
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

### Example
In a batch of 200 electronic components, quality control finds:
*   30 have a solder defect (Event $S$). $P(S) = 30/200 = 0.15$
*   20 have a wiring defect (Event $W$). $P(W) = 20/200 = 0.10$
*   8 have BOTH defects. $P(S \cap W) = 8/200 = 0.04$

What fraction has at least one defect?
$$P(S \cup W) = P(S) + P(W) - P(S \cap W) = 0.15 + 0.10 - 0.04 = \mathbf{0.21}$$

### Inclusion-Exclusion Principle (Three Events)
For three events, the double-counting logic extends further:
$$P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(A \cap C) - P(B \cap C) + P(A \cap B \cap C)$$

Notice the pattern: we add singles, subtract pairs, then add back the triple overlap.

### De Morgan's Laws
These laws allow you to swap between unions and intersections by taking complements:
*   $(A \cup B)^c = A^c \cap B^c$ — "NOT (A or B)" is the same as "(NOT A) AND (NOT B)".
*   $(A \cap B)^c = A^c \cup B^c$ — "NOT (A and B)" is the same as "(NOT A) OR (NOT B)".

De Morgan's Laws are critically important in digital logic, circuit reliability analysis, and fault tree engineering.
