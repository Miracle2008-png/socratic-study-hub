import sys

filepath = 'src/data/mathContentExt.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if "'Sequences & series': `" in line:
        start_idx = i
    if "'Linear algebra (matrices, vectors)': `" in line:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    replacement = """  'Sequences & series': `
# Sequences & Infinite Series: Convergence, Rigorous Tests & Pathological Sums

## 1. Sequences & Progressions

A **sequence** is an ordered list of numbers following a specific pattern. Each number in the sequence is called a *term*, usually denoted as $u_1, u_2, u_3, \\dots, u_n$.

### Arithmetic Progressions (AP)
In an arithmetic sequence, the difference between consecutive terms is always constant (denoted as $d$).
* General Term: $u_n = a + (n-1)d$
* Example: $2, 5, 8, 11 \\dots$ (Here, $a = 2$ and $d = 3$)

### Geometric Progressions (GP)
In a geometric sequence, the ratio between consecutive terms is always constant (denoted as $r$).
* General Term: $u_n = a \\cdot r^{n-1}$
* Example: $3, 6, 12, 24 \\dots$ (Here, $a = 3$ and $r = 2$)

## 2. Finite Series (Sums)

A **series** is the sum of the terms of a sequence. For finite sequences, we can calculate the exact sum $S_n$.

### Sum of an Arithmetic Series
To sum the first $n$ terms of an AP, we use the formula derived by young Carl Friedrich Gauss:
$$ S_n = \\frac{n}{2}(2a + (n-1)d) $$
Alternatively, if you know the last term $u_n$:
$$ S_n = \\frac{n}{2}(a + u_n) $$

### Sum of a Geometric Series
To sum the first $n$ terms of a GP:
$$ S_n = \\frac{a(1 - r^n)}{1 - r} $$
*(Valid for $r \\neq 1$)*

## 3. Infinite Series & Convergence

What happens if a sequence goes on forever? Can we add an infinite number of things together and get a finite answer? 

In calculus, an infinite series $\\sum_{n=1}^{\\infty} a_n$ is defined strictly as the **limit of its partial sums** $S_k = \\sum_{n=1}^k a_n$. 
If $\\lim_{k \\to \\infty} S_k$ exists and equals a finite real number $S$, the series **converges**. If it blows up to infinity or oscillates forever, it **diverges**.

### Infinite Geometric Series
For a geometric series, if the common ratio $r$ is between $-1$ and $1$ ($|r| < 1$), the terms get smaller and smaller. As $n \\to \\infty$, the $r^n$ term approaches $0$. The sum formula collapses beautifully to:
$$ S_{\\infty} = \\frac{a}{1 - r} $$
Example: Zeno's Paradox. To walk 1 meter, you must walk 1/2 meter, then 1/4 meter, then 1/8 meter...
$S_{\\infty} = \\frac{1/2}{1 - 1/2} = 1$. 
You do eventually reach the destination!

## 4. Rigorous Convergence Tests

How do we prove whether non-geometric series converge? Mathematicians developed a battery of tests:

1. **Divergence Test**: If the individual terms don't shrink to zero ($\\lim_{n\\to\\infty} a_n \\neq 0$), then the series $\\sum a_n$ absolutely diverges. *(Note: If they do shrink to zero, the series might STILL diverge!)*
2. **Comparison Test**: If $0 \\le a_n \\le b_n$ and you know $\\sum b_n$ converges, then $\\sum a_n$ must also converge because it's trapped underneath.
3. **Integral Test**: If you can represent the terms as a continuous, positive, decreasing function $f(x)$, then the series $\\sum a_n$ converges if and only if the improper integral $\\int_1^{\\infty} f(x)\\,dx$ converges to a finite area.

### The Ratio Test (d'Alembert)
One of the most powerful tools in analysis. Take the limit of the ratio of consecutive terms:
$$ L = \\lim_{n\\to\\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| $$
* If $L < 1$, the series converges absolutely.
* If $L > 1$, the series diverges.
* If $L = 1$, the test is inconclusive (you must use another test).

## 5. Absolute vs. Conditional Convergence

Consider the famous **Harmonic Series**:
$$ 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\dots $$
Even though the terms shrink to zero, this series **diverges** to infinity! It just grows incredibly slowly.

However, consider the **Alternating Harmonic Series**:
$$ 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\dots $$
By Leibniz's Alternating Series Test, this series **converges** (specifically to $\\ln(2)$).

Because the alternating series converges, but its all-positive version diverges, we say the Alternating Harmonic Series converges **conditionally**. If it converged in both cases, we would call it **absolutely convergent**.

## 6. Insane Level: Riemann Rearrangement Theorem

Conditionally convergent series break the fundamental rules of elementary arithmetic—specifically, they violate the **Commutative Property of Addition**.

In 1854, Bernhard Riemann proved a mind-bending theorem: 
*If a series is conditionally convergent, you can rearrange its terms to make it sum to **any real number you want**, or even diverge to infinity!*

**Proof Sketch:**
1. Split the series into all its positive terms (which diverge to $+\\infty$) and all its negative terms (which diverge to $-\\infty$).
2. Pick any target number, say $M = 100$.
3. Start adding positive terms sequentially until you just barely cross $100$.
4. Then, add one negative term to dip back under $100$.
5. Add more positive terms until you cross $100$ again. 
6. Add negative terms to dip under.
7. Because the terms themselves are shrinking to zero ($\\lim_{n\\to\\infty} a_n = 0$), your "overshoots" past $100$ get smaller and smaller each time. 
8. The sequence of partial sums will zero in and converge exactly to $100$. ∎

You can literally rearrange the terms of $\\ln(2)$ to sum to $\\pi$, $-\\sqrt{2}$, or $1,000,000$. Infinite sums are not just "big finite sums"—they are a completely different beast!
`,

"""
    lines = lines[:start_idx] + [replacement] + lines[end_idx:]
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("Replaced Sequences successfully.")
else:
    print(f"Failed to find bounds. start={start_idx}, end={end_idx}")
