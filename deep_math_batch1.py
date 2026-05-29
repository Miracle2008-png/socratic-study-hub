import re

filepath = 'src/data/mathContentExt.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

def replace_topic(content, topic_name, new_text):
    pattern = r"(\s*'" + re.escape(topic_name) + r"': `)(.*?)(\n\s*`,?\n)"
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        print(f"Could not find topic: {topic_name}")
        return content
    start_tag = match.group(1)
    end_tag = match.group(3)
    new_chunk = start_tag + "\n" + new_text + end_tag
    return content[:match.start()] + new_chunk + content[match.end():]

topics = {}

topics['Quadratic equations'] = """# Quadratic Equations: Curves, Roots & The Unsolvable Quintic

## 1. Introduction to Quadratics

Linear equations ($x^1$) represent perfectly straight lines. If we introduce a squared variable ($x^2$), the line bends. This creates a **Quadratic Equation**, which represents a symmetric, U-shaped curve called a **Parabola**.

The standard form of a quadratic equation is:
$$ ax^2 + bx + c = 0 $$
*(where $a \\neq 0$, because if $a=0$, the $x^2$ term vanishes and it collapses back into a straight linear line).*

* **$a$**: Controls the "width" of the parabola and whether it opens upwards (smile) or downwards (frown).
* **$c$**: The y-intercept (where the curve crosses the vertical axis).

Solving the equation means finding the **roots** (or $x$-intercepts)—the exact points where the parabola crosses the horizontal $x$-axis.

## 2. Solving by Factoring

The simplest way to solve a quadratic is by factoring it into two binomials. This relies on the **Zero Product Property**: If $A \\cdot B = 0$, then either $A=0$, or $B=0$, or both are zero.

**Example:** Solve $x^2 - 5x + 6 = 0$.
1. We need two numbers that multiply to $+6$ and add up to $-5$. Those numbers are $-2$ and $-3$.
2. Rewrite as: $(x - 2)(x - 3) = 0$.
3. Set each factor to zero:
   * $x - 2 = 0 \\implies x = 2$
   * $x - 3 = 0 \\implies x = 3$

The parabola crosses the x-axis at $x=2$ and $x=3$.

## 3. Solving by Completing the Square

Not all quadratics can be factored neatly with whole numbers. The universal algebraic method is **Completing the Square**, which forces the equation into a perfect square trinomial.

**Example:** $x^2 + 6x - 7 = 0$
1. Move the constant: $x^2 + 6x = 7$
2. Take half of the $b$ coefficient ($6/2 = 3$), square it ($3^2 = 9$), and add it to *both sides*:
   $$ x^2 + 6x + 9 = 7 + 9 $$
3. The left side is now a perfect square: $(x + 3)^2 = 16$
4. Take the square root of both sides (remembering the $\\pm$):
   $$ x + 3 = \\pm 4 $$
5. $x = -3 \\pm 4$, yielding the solutions $x=1$ and $x=-7$.

## 4. The Quadratic Formula

If you perform the "Completing the Square" method on the abstract standard equation $ax^2 + bx + c = 0$, you derive the legendary **Quadratic Formula**. This single formula instantly solves *any* quadratic equation in the universe.

$$ x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} $$

The formula guarantees up to two solutions, due to the $\\pm$ symbol, which perfectly aligns with the geometry of a parabola crossing the x-axis in two places.

## 5. The Discriminant and the Nature of Roots

The term inside the square root is called the **Discriminant ($\\Delta$)**:
$$ \\Delta = b^2 - 4ac $$
Without solving the entire equation, the discriminant instantly tells you the geometry of the parabola:
1. **$\\Delta > 0$**: The parabola crosses the x-axis exactly twice. (Two distinct real roots).
2. **$\\Delta = 0$**: The parabola perfectly kisses the x-axis at its vertex. (One repeated real root).
3. **$\\Delta < 0$**: The parabola floats entirely above or below the x-axis, never touching it! (Zero real roots).

## 6. Complex Roots

When $\\Delta < 0$, we are forced to take the square root of a negative number. For centuries, mathematicians deemed this "impossible." But in the 16th century, Gerolamo Cardano realized that treating $\\sqrt{-1}$ as a valid number, which we now call the imaginary unit **$i$**, unlocked an entirely new branch of mathematics.

Combining Real and Imaginary numbers creates **Complex Numbers ($\\mathbb{C}$)**, written in the form $a + bi$. Instead of sitting on a 1D Number Line, Complex Numbers exist on a 2D Complex Plane. 
If a quadratic has $\\Delta < 0$, its two solutions will always be a **Complex Conjugate Pair**: $p + qi$ and $p - qi$.

## 7. The Vertex Form

The standard form $ax^2 + bx + c$ hides the most important geometric feature of the parabola: its turning point, or **vertex**.
By rewriting the equation into **Vertex Form**, the maximum or minimum point becomes instantly visible:
$$ y = a(x - h)^2 + k $$
* The vertex is exactly at the coordinate $(h, k)$.
* The axis of symmetry is the vertical line $x = h$.
You can convert standard form to vertex form by completing the square, or by using the formula $h = \\frac{-b}{2a}$.

## 8. Vieta's Formulas

In the late 16th century, François Viète discovered a profound, hidden relationship between the roots of a polynomial and its coefficients. 
If a quadratic $ax^2 + bx + c = 0$ has roots $r_1$ and $r_2$, then:

* **Sum of the roots**: $r_1 + r_2 = -\\frac{b}{a}$
* **Product of the roots**: $r_1 \\cdot r_2 = \\frac{c}{a}$

This means you can instantly find the sum and product of the roots *without ever actually solving the equation*! This principle extends to polynomials of any degree.

## 9. Higher Degree Polynomials (Cubics & Quartics)

If quadratics ($x^2$) are solved by the quadratic formula, what about $x^3$ and $x^4$?
* **The Cubic Formula ($x^3$)**: Discovered in the 1500s by Tartaglia and Cardano. It is monstrously complex and relies heavily on complex numbers, even when all three roots are real integers!
* **The Quartic Formula ($x^4$)**: Discovered by Lodovico Ferrari. It takes up an entire page of paper to write down.

For hundreds of years, the greatest minds in mathematics searched frantically for the "Quintic Formula" to solve $x^5$ equations.

## 10. Insane Level: Galois Theory and the Unsolvable Quintic

In 1824, a 22-year-old Norwegian genius named Niels Henrik Abel proved that a general Quintic Formula is completely impossible. You literally *cannot* solve $ax^5 + bx^4 + cx^3 + dx^2 + ex + f = 0$ using radicals (addition, subtraction, multiplication, division, and roots).

A few years later, a brilliant French teenager named Évariste Galois explained *why*. He invented an entirely new field of mathematics, now called **Group Theory**, the night before he died in a duel at age 20.
Galois realized that polynomials are governed by the **symmetries** of their roots. These symmetries form mathematical "Groups."
* Quadratics, cubics, and quartics have "solvable" groups (like $S_2, S_3, S_4$).
* But for $n \\ge 5$, the symmetric group $S_n$ contains the alternating group $A_n$, which is a **non-abelian simple group**. 

Because $A_5$ cannot be broken down any further, the general quintic equation is fundamentally, theoretically impossible to solve with a simple algebraic formula. This breakthrough gave birth to modern Abstract Algebra!"""

topics['Sequences & series'] = """# Sequences & Infinite Series: Convergence, Rigorous Tests & Pathological Sums

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
To sum the first $n$ terms of an AP, we use the formula famously derived by a young Carl Friedrich Gauss:
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
If $\\lim_{k \\to \\infty} S_k$ exists and equals a finite real number $S$, the series **converges**. If it blows up to infinity or oscillates forever without settling, it **diverges**.

## 4. Infinite Geometric Series and Zeno's Paradox

For an infinite geometric series, if the common ratio $r$ is strictly between $-1$ and $1$ ($|r| < 1$), the terms get smaller and smaller. As $n \\to \\infty$, the $r^n$ term approaches $0$. The sum formula collapses beautifully to:
$$ S_{\\infty} = \\frac{a}{1 - r} $$

**Zeno's Dichotomy Paradox:**
To walk 1 meter, you must first walk 1/2 meter, then 1/4 meter, then 1/8 meter... infinitely. How can you ever reach the destination if you have to take an infinite number of steps?
Because it is an infinite geometric series with $a=1/2$ and $r=1/2$.
$S_{\\infty} = \\frac{1/2}{1 - 1/2} = 1$. 
Calculus proves you do eventually reach exactly 1 meter!

## 5. The Harmonic Series

Consider the famous **Harmonic Series**:
$$ \\sum_{n=1}^{\\infty} \\frac{1}{n} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\dots $$
Even though the terms shrink to zero, this series **diverges** to infinity! 
Nicole Oresme proved this in the 14th century by grouping terms:
$1/3 + 1/4 > 1/4 + 1/4 = 1/2$
$1/5 + 1/6 + 1/7 + 1/8 > 1/8 + 1/8 + 1/8 + 1/8 = 1/2$
Since you can infinitely group terms to be greater than $1/2$, the sum is $\\infty$.

## 6. Rigorous Convergence Tests

To determine if non-geometric series converge, mathematicians developed a battery of strict tests:

1. **Divergence Test (nth-term test)**: If the individual terms don't shrink to zero ($\\lim_{n\\to\\infty} a_n \\neq 0$), then the series absolutely diverges. *(Note: If they do shrink to zero, the series might STILL diverge, like the harmonic series!)*
2. **Comparison Test**: If $0 \\le a_n \\le b_n$ and you know the larger series $\\sum b_n$ converges, then the smaller series $\\sum a_n$ must also converge because it's trapped underneath.
3. **Limit Comparison Test**: If $\\lim_{n\\to\\infty} \\frac{a_n}{b_n} = c$ (where $c$ is finite and $>0$), then both series share the same fate—they either both converge or both diverge.

## 7. The Integral Test and p-Series

The **Integral Test** links series to calculus: If you can represent the terms as a continuous, positive, decreasing function $f(x)$, then the series $\\sum a_n$ converges if and only if the improper integral $\\int_1^{\\infty} f(x)\\,dx$ converges to a finite area.

This leads to the **p-Series Test**:
The series $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$
* Converges if $p > 1$
* Diverges if $p \\le 1$

This perfectly explains why $\\sum \\frac{1}{n^2}$ converges (Basel Problem, solved by Euler: $\\frac{\\pi^2}{6}$) while $\\sum \\frac{1}{n}$ diverges!

## 8. The Ratio and Root Tests

The **Ratio Test (d'Alembert)** is one of the most powerful tools in analysis, especially for factorials and exponentials. Take the limit of the ratio of consecutive terms:
$$ L = \\lim_{n\\to\\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| $$
* If $L < 1$, the series converges absolutely.
* If $L > 1$, the series diverges.
* If $L = 1$, the test is completely inconclusive.

The **Root Test (Cauchy)** involves taking the nth root of the nth term: $L = \\lim_{n\\to\\infty} \\sqrt[n]{|a_n|}$. The rules for $L$ are exactly the same as the Ratio Test.

## 9. Absolute vs. Conditional Convergence

Consider the **Alternating Harmonic Series**:
$$ \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\dots $$
By Leibniz's Alternating Series Test, this series **converges** (specifically to $\\ln(2)$).

Because the alternating series converges, but its all-positive absolute value version diverges, we say the Alternating Harmonic Series converges **conditionally**. If a series converges even when you force all its terms to be positive, we call it **absolutely convergent**. (Absolute convergence is much "stronger").

## 10. Insane Level: Riemann Rearrangement Theorem

Conditionally convergent series break the fundamental rules of elementary arithmetic—specifically, they violate the **Commutative Property of Addition**. You cannot rearrange their terms without changing the final sum!

In 1854, Bernhard Riemann proved a terrifying, mind-bending theorem: 
*If a series is conditionally convergent, you can rearrange its terms to make it sum to **any real number you want**, or even diverge to infinity!*

**Proof Sketch:**
1. Split the series into all its positive terms (which diverge to $+\\infty$) and all its negative terms (which diverge to $-\\infty$).
2. Pick any target number, say $M = 100$.
3. Start adding positive terms sequentially until your running total just barely crosses $100$.
4. Then, add one negative term to dip back under $100$.
5. Add more positive terms until you cross $100$ again. 
6. Add negative terms to dip under.
7. Because the terms themselves are shrinking to zero ($\\lim_{n\\to\\infty} a_n = 0$), your "overshoots" past $100$ get smaller and smaller each time. 
8. The sequence of partial sums will zero in and converge exactly to $100$. ∎

You can literally rearrange the terms of $\\ln(2)$ to sum to $\\pi$, $-\\sqrt{2}$, or $1,000,000$. Infinite sums are not just "big finite sums"—they are a completely different beast!"""

for topic, text in topics.items():
    content = replace_topic(content, topic, text)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Expanded deep_math_batch1 successfully.")
