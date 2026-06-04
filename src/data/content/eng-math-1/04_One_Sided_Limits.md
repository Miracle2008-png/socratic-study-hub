# 4. One-Sided Limits

A standard limit $\lim_{x \to c} f(x)$ examines the behavior of a function as $x$ approaches $c$ from *both* directions simultaneously. However, many engineering applications involve piecewise functions, sudden step changes (like throwing a switch), or boundaries of domains where two-sided approaches are impossible.

For these, we define **one-sided limits**.

### Left-Hand Limit
The limit as $x$ approaches $c$ from values strictly less than $c$. Denoted by a negative superscript:
$$\lim_{x \to c^-} f(x)$$

### Right-Hand Limit
The limit as $x$ approaches $c$ from values strictly greater than $c$. Denoted by a positive superscript:
$$\lim_{x \to c^+} f(x)$$

### The Two-Sided Limit Theorem
A fundamental theorem states that the overall (two-sided) limit exists if and only if both the left-hand and right-hand limits exist and are equal to each other.

$$\lim_{x \to c} f(x) = L \iff \lim_{x \to c^-} f(x) = L \text{ and } \lim_{x \to c^+} f(x) = L$$

If the left and right limits yield different values, the two-sided limit **Does Not Exist (DNE)**.

### Worked Example 1: The Absolute Value Function
**Evaluate:** $\lim_{x \to 0} \frac{|x|}{x}$

**Solution:**
The absolute value function is defined piecewise:
$|x| = x$ if $x > 0$
$|x| = -x$ if $x < 0$

Check the right-hand limit ($x > 0$):
$$ \lim_{x \to 0^+} \frac{|x|}{x} = \lim_{x \to 0^+} \frac{x}{x} = \lim_{x \to 0^+} 1 = 1 $$

Check the left-hand limit ($x < 0$):
$$ \lim_{x \to 0^-} \frac{|x|}{x} = \lim_{x \to 0^-} \frac{-x}{x} = \lim_{x \to 0^-} -1 = -1 $$

Because $1 \neq -1$, the left-hand limit does not equal the right-hand limit. 
Therefore, $\lim_{x \to 0} \frac{|x|}{x}$ **DNE**.

### Worked Example 2: Piecewise Thermal Control
A heater's power output $P(t)$ jumps at time $t = 5$ seconds:
$P(t) = 2t$ for $t < 5$
$P(t) = 15$ for $t > 5$

**Evaluate $\lim_{t \to 5} P(t)$.**

**Solution:**
Left-hand approach: $\lim_{t \to 5^-} 2t = 2(5) = 10$.
Right-hand approach: $\lim_{t \to 5^+} 15 = 15$.
Since $10 \neq 15$, the overall limit DNE, representing an instantaneous step discontinuity in the system.
