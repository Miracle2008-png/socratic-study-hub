# Infinite Series and Partial Sums

While a sequence is a list of numbers, an **infinite series** is the *sum* of a list of numbers.

If we have a sequence $a_n$, the corresponding infinite series is:
$$ \sum_{n=1}^{\infty} a_n = a_1 + a_2 + a_3 + \dots + a_n + \dots $$

How can you add infinitely many numbers together and get a finite result? Zeno's Paradox struggled with this. The mathematical resolution is the concept of **partial sums**.

## 1. Partial Sums

Let $s_k$ be the sum of the first $k$ terms of the series.
*   $s_1 = a_1$
*   $s_2 = a_1 + a_2$
*   $s_3 = a_1 + a_2 + a_3$
*   $s_k = \sum_{n=1}^{k} a_n$

These partial sums form a brand new sequence: $s_1, s_2, s_3, \dots$

**Definition of Convergence:**
An infinite series $\sum_{n=1}^{\infty} a_n$ converges if and only if the *sequence of its partial sums* $\{s_k\}$ converges to a finite limit $S$.
$$ \sum_{n=1}^{\infty} a_n = \lim_{k \to \infty} s_k = S $$
If the sequence of partial sums diverges, the series diverges.

## 2. Geometric Series

A geometric series is one where each term is found by multiplying the previous term by a constant ratio $r$.
$$ \sum_{n=1}^{\infty} a r^{n-1} = a + ar + ar^2 + ar^3 + \dots $$

By writing out the $k$-th partial sum and doing some algebraic manipulation, we can find an exact, closed-form formula for $s_k$:
$$ s_k = \frac{a(1 - r^k)}{1 - r} $$

To see if the series converges, we take the limit as $k \to \infty$. The only term with $k$ is $r^k$.
*   If $|r| < 1$, then $r^k \to 0$. The series **converges**.
*   If $|r| \ge 1$, then $r^k$ blows up or oscillates. The series **diverges**.

**The Sum of a Convergent Geometric Series ($|r| < 1$):**
$$ S = \frac{a}{1 - r} $$
*(Where $a$ is the first term of the series, and $r$ is the common ratio).*

## 3. Telescoping Series

A telescoping series is a special type of series where almost all the terms in the partial sum cancel each other out, collapsing like an old pirate's telescope.

*Example:* $\sum_{n=1}^{\infty} \left( \frac{1}{n} - \frac{1}{n+1} \right)$
Let's write out the $k$-th partial sum:
$s_k = \left( \frac{1}{1} - \frac{1}{2} \right) + \left( \frac{1}{2} - \frac{1}{3} \right) + \left( \frac{1}{3} - \frac{1}{4} \right) + \dots + \left( \frac{1}{k} - \frac{1}{k+1} \right)$

Notice that the $-1/2$ cancels the $+1/2$, the $-1/3$ cancels the $+1/3$, and so on. All that is left is the very first part of the first term and the very last part of the last term:
$s_k = 1 - \frac{1}{k+1}$

Now, take the limit: $\lim_{k \to \infty} \left( 1 - \frac{1}{k+1} \right) = 1 - 0 = 1$. The series converges to 1.
To identify a telescoping series, you often need to use **partial fraction decomposition** to split a single fraction into two subtracted fractions.

## 4. The Test for Divergence (The $n$-th Term Test)

If you are adding up an infinite number of things, and you want the total to be finite, the things you are adding *must* eventually become infinitely small.

> **Theorem:** If the series $\sum a_n$ converges, then $\lim_{n \to \infty} a_n = 0$.

The contrapositive of this theorem is one of the most useful tests in calculus:
> **The Divergence Test:** If $\lim_{n \to \infty} a_n \neq 0$ (or the limit does not exist), then the series $\sum a_n$ MUST **diverge**.

**WARNING:** The converse is FALSE. Just because the terms go to zero ($\lim a_n = 0$) does *not* mean the series converges. It might still diverge. (The classic example is the Harmonic series, $1 + 1/2 + 1/3 + \dots$, whose terms go to zero, but the sum diverges to infinity). The Divergence Test can *only* prove divergence. It can never prove convergence.
