# Sequences and Series

## 1. Introduction
A **sequence** is an ordered list of numbers following a specific pattern. A **series** is the sum of the elements of a sequence.

## 2. Arithmetic Progression (AP)
An AP is a sequence where the difference between consecutive terms is constant.
- **nth term:** $a_n = a_1 + (n-1)d$
- **Sum of first $n$ terms:** $S_n = \frac{n}{2} (2a_1 + (n-1)d) = \frac{n}{2} (a_1 + a_n)$
where $a_1$ is the first term, and $d$ is the common difference.

## 3. Geometric Progression (GP)
A GP is a sequence where the ratio of consecutive terms is constant.
- **nth term:** $a_n = a_1 r^{n-1}$
- **Sum of first $n$ terms:** $S_n = a_1 \frac{1 - r^n}{1 - r}$ (for $r \neq 1$)
- **Sum to infinity:** If $|r| < 1$, the infinite series converges to $S_\infty = \frac{a_1}{1 - r}$.

## 4. Sigma Notation
Sigma notation $\sum$ is used to concisely write series.
$$ \sum_{k=1}^{n} a_k = a_1 + a_2 + \dots + a_n $$
Key formulas:
- $\sum_{k=1}^n k = \frac{n(n+1)}{2}$
- $\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}$
- $\sum_{k=1}^n k^3 = \left( \frac{n(n+1)}{2} \right)^2$

## 5. Step-by-Step Solved Examples

### Example 1: Finding Terms in an AP
**Problem:** The 4th term of an AP is 14, and the 9th term is 29. Find the first term and the common difference.
**Solution:**
1. Use the $n$th term formula:
   $a_4 = a_1 + 3d = 14$
   $a_9 = a_1 + 8d = 29$
2. Subtract the first equation from the second:
   $(a_1 + 8d) - (a_1 + 3d) = 29 - 14$
   $5d = 15 \implies d = 3$
3. Substitute $d = 3$ into the first equation:
   $a_1 + 3(3) = 14 \implies a_1 + 9 = 14 \implies a_1 = 5$
First term is 5, common difference is 3.

### Example 2: Sum of a Geometric Series
**Problem:** Find the sum of the first 6 terms of the GP: $3, 6, 12, 24, \dots$
**Solution:**
1. Identify the parameters: $a_1 = 3$, $r = 6/3 = 2$, $n = 6$.
2. Use the sum formula:
   $$ S_6 = \frac{3(2^6 - 1)}{2 - 1} $$
3. Evaluate: $2^6 = 64$.
   $$ S_6 = 3(64 - 1) = 3(63) = 189 $$

### Example 3: Infinite Geometric Series
**Problem:** A ball is dropped from a height of 10 meters. Each time it bounces, it reaches 75% of its previous height. Find the total vertical distance the ball travels before coming to rest.
**Solution:**
1. The initial drop is $10$ m.
2. The subsequent bounces (up and down) form a geometric series:
   Bounce 1: up $10(0.75)$, down $10(0.75)$ = $2 \times 7.5 = 15$
   Bounce 2: up $7.5(0.75)$, down $7.5(0.75)$ = $11.25$
3. The bounces form a GP with $a_1 = 15$ and $r = 0.75$.
4. Calculate the infinite sum of the bounces:
   $$ S_\infty = \frac{a_1}{1 - r} = \frac{15}{1 - 0.75} = \frac{15}{0.25} = 60 $$
5. Total distance = Initial drop + $S_\infty = 10 + 60 = 70$ meters.

### Example 4: Evaluating a Sigma Sum
**Problem:** Evaluate $\sum_{k=1}^{10} (3k^2 - 2k + 1)$
**Solution:**
1. Split the sum: $3 \sum_{k=1}^{10} k^2 - 2 \sum_{k=1}^{10} k + \sum_{k=1}^{10} 1$
2. Apply formulas for $n=10$:
   - $\sum k^2 = \frac{10(11)(21)}{6} = 385$
   - $\sum k = \frac{10(11)}{2} = 55$
   - $\sum 1 = 10 \times 1 = 10$
3. Substitute back:
   $3(385) - 2(55) + 10 = 1155 - 110 + 10 = 1055$.
