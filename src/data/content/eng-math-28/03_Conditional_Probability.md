# 3. Conditional Probability

The probability of an event often changes drastically when you know that another event has already occurred. This idea is **Conditional Probability**.

### The Definition
The conditional probability of event $A$, **given that we already know event $B$ has occurred**, is written as $P(A \mid B)$ (read: "P of A given B").

Because we know $B$ happened, we have effectively shrunk our universe. The sample space is no longer the full $\Omega$; it is now restricted to just the outcomes inside $B$. We now ask: of all the outcomes inside $B$, what fraction also lies inside $A$?

That fraction is the intersection $(A \cap B)$, divided by the new, reduced universe $B$:

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}, \quad \text{provided } P(B) > 0
$$

### Example
A factory produces processors. In a batch of 1000:
*   700 passed thermal testing (Event $T$).
*   600 passed speed testing (Event $S$).
*   500 passed BOTH tests.

If we randomly select a processor and are told it passed thermal testing, what is the probability it also passed speed testing?

$$P(S \mid T) = \frac{P(S \cap T)}{P(T)} = \frac{500/1000}{700/1000} = \frac{500}{700} = \mathbf{0.714}$$

If we had NOT known about the thermal test result, the baseline probability of passing speed testing was $P(S) = 600/1000 = 0.60$. The additional information of knowing it passed thermal testing increased our estimated probability from 60% to 71.4%.

### The Multiplication Rule
Rearranging the conditional probability formula gives us the **Multiplication Rule**, which lets us compute intersections:
$$P(A \cap B) = P(A \mid B) \cdot P(B) = P(B \mid A) \cdot P(A)$$

For a chain of three events:
$$P(A \cap B \cap C) = P(A) \cdot P(B \mid A) \cdot P(C \mid A \cap B)$$

### The Physical Interpretation
Conditional probability is not just a formula. It is a statement of how information changes our rational belief about the world. Every time you receive new data (a sensor reading, a test result, an inspection outcome), you must update your probability estimates accordingly. Conditional probability is the mathematical engine that makes that update rigorous and systematic.
