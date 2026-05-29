import sys

filepath = 'src/data/mathContentExt.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

replacement = """## 4. The Discriminant and Complex Roots

The term inside the square root of the quadratic formula, $\\Delta = b^2 - 4ac$, is known as the **discriminant**. It dictates the geometry of the roots:

*   $\\Delta > 0 \\implies$ Two distinct real roots. The parabola crosses the x-axis twice.
*   $\\Delta = 0 \\implies$ One repeated real root. The vertex of the parabola perfectly touches the x-axis.
*   $\\Delta < 0 \\implies$ No real roots. The parabola completely floats above or below the x-axis.

When $\\Delta < 0$, we are forced to take the square root of a negative number. This introduces **Complex Numbers**.

Example: Solve $x^2 + x + 1 = 0$.
Here, $a=1, b=1, c=1$. The discriminant is $1^2 - 4(1)(1) = -3$.
$$ x = \\frac{-1 \\pm \\sqrt{-3}}{2} $$
Using the imaginary unit $i = \\sqrt{-1}$:
$$ x = -\\frac{1}{2} \\pm \\frac{\\sqrt{3}}{2}i $$
These two complex roots are always complex conjugates of each other.

## 5. Vieta's Formulas

There is a beautiful relationship between the roots of a polynomial and its coefficients, discovered by François Viète.

If a quadratic equation $ax^2 + bx + c = 0$ has roots $\\alpha$ and $\\beta$, then the equation can be written as:
$$ a(x - \\alpha)(x - \\beta) = 0 $$
Expanding this:
$$ a(x^2 - (\\alpha + \\beta)x + \\alpha\\beta) = 0 $$
$$ ax^2 - a(\\alpha + \\beta)x + a\\alpha\\beta = 0 $$

By matching coefficients with $ax^2 + bx + c = 0$, we get **Vieta's Formulas**:
1. Sum of the roots: $\\alpha + \\beta = -\\frac{b}{a}$
2. Product of the roots: $\\alpha\\beta = \\frac{c}{a}$

This allows us to find the sum and product of the roots instantly without ever actually solving the equation!

## 6. Insane Level: Galois Theory & Unsolvability of the Quintic

We have a Quadratic formula for $x^2$. There is also a cubic formula (Cardano's formula) for $ax^3 + bx^2 + cx + d = 0$, and a massive quartic formula for degree 4. 

However, there is **no general formula for degree 5 (quintic) or higher**. Why? 

This was proved by Évariste Galois (who died in a duel at age 20). Galois realized that the solvability of an equation is intrinsically tied to the symmetries of its roots. He invented **Group Theory** to measure this.

For an equation to be solvable by radicals (roots and fractions), its **Galois Group** must be a "solvable group" (a group that can be broken down into abelian components). 
* The Galois group of a general polynomial of degree $n$ is the symmetric group $S_n$. 
* For $n \\le 4$, the group $S_n$ is solvable. 
* But for $n \\ge 5$, the symmetric group $S_n$ contains the alternating group $A_n$, which is a **non-abelian simple group**. 

Because $A_5$ cannot be broken down any further, the general quintic equation is fundamentally, theoretically impossible to solve with a simple formula. This breakthrough gave birth to modern Abstract Algebra!
"""

# 0-indexed: line 256 is index 255, line 319 is index 318
# We want to replace lines[255:319] with replacement
lines = lines[:255] + [replacement] + lines[319:]

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Replaced lines successfully.")
