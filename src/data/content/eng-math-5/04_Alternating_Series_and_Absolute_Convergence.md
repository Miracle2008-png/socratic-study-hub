# Alternating Series and Absolute Convergence

So far, we have only looked at series with entirely positive terms. What happens if the terms oscillate between positive and negative?

## 1. Alternating Series

An **alternating series** has signs that alternate perfectly, usually driven by a $(-1)^n$ or $(-1)^{n-1}$ term.
$$ \sum_{n=1}^{\infty} (-1)^{n-1} b_n = b_1 - b_2 + b_3 - b_4 + \dots \quad (\text{where } b_n > 0) $$

Because we keep adding and then subtracting, the partial sums bounce back and forth. This makes it *easier* for the series to converge, because the terms actively cancel each other out.

**The Alternating Series Test (AST):**
An alternating series $\sum (-1)^{n-1} b_n$ converges if it meets two simple conditions:
1.  $b_{n+1} \le b_n$ for all $n$ (The terms must be strictly decreasing in magnitude).
2.  $\lim_{n \to \infty} b_n = 0$ (The terms must eventually go to zero).

*Example: The Alternating Harmonic Series*
$\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \dots$
We know the regular harmonic series diverges. But here, $b_n = 1/n$.
1.  Is $1/(n+1) \le 1/n$? Yes.
2.  Is $\lim (1/n) = 0$? Yes.
Therefore, by the AST, the alternating harmonic series **converges**. (It actually converges to $\ln 2$).

## 2. Absolute vs. Conditional Convergence

Because negative signs help a series converge, we classify convergent series into two categories of "strength."

**Absolute Convergence:**
A series $\sum a_n$ is called absolutely convergent if the series of its absolute values, $\sum |a_n|$, converges.
*   If a series converges absolutely, it is a very "strong" convergence. It converges even without the helpful cancellation of negative signs.
*   *Theorem:* If a series is absolutely convergent, then the original series $\sum a_n$ is also convergent.

**Conditional Convergence:**
A series $\sum a_n$ is conditionally convergent if the original series $\sum a_n$ converges (thanks to alternating signs), but the absolute value series $\sum |a_n|$ diverges.
*   *Example:* The alternating harmonic series converges. But its absolute value is the regular harmonic series, which diverges. Therefore, the alternating harmonic series is **conditionally convergent**.

## 3. Why the Distinction Matters (Riemann's Rearrangement Theorem)

In a finite sum, order doesn't matter ($1 + 2 = 2 + 1$). This is the commutative property.

In an infinite series, the commutative property only holds for **absolutely convergent** series. You can rearrange the terms infinitely and always get the same sum.

However, if a series is **conditionally convergent**, the commutative property breaks down.
**Riemann's Rearrangement Theorem** proves a mind-bending fact: By carefully rearranging the order of the terms of a conditionally convergent series (like the alternating harmonic series), you can make it sum to *any real number you want*, or even make it diverge to infinity!
Because of this, conditionally convergent series must be handled with extreme mathematical care.

## 4. Alternating Series Estimation Theorem

If an alternating series converges by the AST, and we use the $k$-th partial sum ($s_k$) to approximate the total infinite sum ($S$), what is our error ($R_k$)?

The error is always **less than the magnitude of the very next term**.
$$ |R_k| = |S - s_k| \le b_{k+1} $$
Furthermore, the true sum always lies between any two successive partial sums. This makes approximating alternating series incredibly easy to bound.
