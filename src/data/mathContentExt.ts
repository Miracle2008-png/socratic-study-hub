export const mathContentExt: Record<string, string> = {

  'Taylor Series Derivation': `
# Taylor Series: Polynomial Approximation

A Taylor series is an infinite sum of terms that are expressed in terms of the function's derivatives at a single point.

## Step 1: The Goal
We want to approximate a smooth function $f(x)$ near a point $x = a$ using a polynomial:
$$ P(x) = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \\dots $$

## Step 2: Matching the Value
For the polynomial to match the function exactly at $x = a$:
$$ P(a) = f(a) $$
$$ c_0 = f(a) $$

## Step 3: Matching the First Derivative
Take the derivative of $P(x)$:
$$ P'(x) = c_1 + 2c_2(x-a) + 3c_3(x-a)^2 + \\dots $$
To match the slope at $x = a$:
$$ P'(a) = f'(a) \\implies c_1 = f'(a) $$

## Step 4: Matching the Second Derivative
Take the second derivative:
$$ P''(x) = 2c_2 + 3 \\cdot 2 c_3(x-a) + \\dots $$
Evaluate at $x = a$:
$$ P''(a) = f''(a) \\implies 2c_2 = f''(a) \\implies c_2 = \\frac{f''(a)}{2} $$

## Step 5: The General Term
Continuing for the $n$-th derivative:
$$ P^{(n)}(a) = n! c_n \\implies c_n = \\frac{f^{(n)}(a)}{n!} $$

## Step 6: The Infinite Series
$$ f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n $$
Q.E.D.
`,

  // Foundation (Grade 9-10)

  'Numbers & Indices': `
# Numbers & Indices: From Counting to Transcendental & p-adic Fields

## 1. Fundamentals of Numbers

Before we can manipulate numbers, we must understand the fundamental sets that build the entire mathematical universe. We start from the simplest concepts used in early human history.

*   **Natural Numbers ($\\mathbb{N}$)**: The set of positive counting numbers $\\{1, 2, 3, \\dots\\}$. 
*   **Whole Numbers ($\\mathbb{W}$)**: The natural numbers including the concept of zero: $\\{0, 1, 2, 3, \\dots\\}$.
*   **Integers ($\\mathbb{Z}$)**: If we want to be able to subtract any number from any other number without getting stuck, we must invent negative numbers. The integers represent this complete set: $\\{ \\dots, -3, -2, -1, 0, 1, 2, 3, \\dots \\}$.

These numbers can be visualized on a basic Number Line, stretching infinitely in both positive and negative directions.

## 2. Fractions, Decimals, and Rationals

Integers are great for counting discrete objects, but what if we need to split an object? This leads us to the concept of **Rational Numbers ($\\mathbb{Q}$)**.

A rational number is any number that can be expressed as a fraction $\\frac{p}{q}$, where $p$ and $q$ are integers and $q \\neq 0$.

Every rational number can be written as a decimal, and it will always do one of two things:
1.  **Terminate**: e.g., $\\frac{1}{4} = 0.25$
2.  **Repeat**: e.g., $\\frac{1}{3} = 0.3333\\dots$ or $\\frac{1}{7} = 0.142857142857\\dots$

If a decimal never terminates and never falls into a repeating pattern, it is fundamentally impossible to write it as a fraction. These are called **Irrational Numbers** (like $\\pi$ or $\\sqrt{2}$). Together, all Rational and Irrational numbers form the **Real Numbers ($\\mathbb{R}$)**, which completely fill every microscopic gap on the Number Line.

## 3. The Basics of Indices (Exponents)

Often in mathematics, we need to multiply a number by itself many times. Instead of writing $2 \\times 2 \\times 2 \\times 2 \\times 2$, we use **indices** (also called exponents or powers) to write this compactly as $2^5$.

Here, $2$ is the **base** and $5$ is the **index**.

There are three fundamental laws of indices that you must master:

1.  **Multiplication Law**: When multiplying terms with the same base, you *add* the indices.
    $$ x^a \\times x^b = x^{a+b} $$
    *Example*: $y^3 \\times y^4 = y^7$
2.  **Division Law**: When dividing terms with the same base, you *subtract* the indices.
    $$ \\frac{x^a}{x^b} = x^{a-b} $$
    *Example*: $\\frac{m^8}{m^2} = m^6$
3.  **Power of a Power Law**: When raising a power to another power, you *multiply* the indices.
    $$ (x^a)^b = x^{ab} $$
    *Example*: $(k^3)^4 = k^{12}$

## 4. Advanced Indices: Zero, Negative, and Fractional

What happens if we break the normal rules of counting? 

### The Zero Index
Using the Division Law, what is $\\frac{x^3}{x^3}$? 
Algebraically, anything divided by itself is $1$. But using the law of indices, $\\frac{x^3}{x^3} = x^{3-3} = x^0$. 
Therefore, **any non-zero number raised to the power of zero is exactly 1**.
$$ x^0 = 1 $$

### Negative Indices
What about $\\frac{x^2}{x^5}$? 
Using the rule, it is $x^{2-5} = x^{-3}$.
But physically, $\\frac{x \\times x}{x \\times x \\times x \\times x \\times x} = \\frac{1}{x^3}$.
Therefore, a negative index represents a reciprocal (a fraction).
$$ x^{-n} = \\frac{1}{x^n} $$

### Fractional Indices (Surds)
What does $x^{\\frac{1}{2}}$ mean?
If we square it: $(x^{\\frac{1}{2}})^2 = x^{\\frac{1}{2} \\times 2} = x^1 = x$.
What number, when squared, gives $x$? The square root of $x$!
Therefore, fractional indices represent roots.
$$ x^{\\frac{1}{n}} = \\sqrt[n]{x} $$
$$ x^{\\frac{m}{n}} = \\sqrt[n]{x^m} = (\\sqrt[n]{x})^m $$

## 5. Complex Numbers

We established earlier that the Real Numbers ($\\mathbb{R}$) fill the entire number line. But there is a glaring problem: what is the square root of a negative number?
$$ \\sqrt{-1} = ? $$
There is no real number that, when squared, equals a negative number (e.g., $3 \\times 3 = 9$, and $-3 \\times -3 = 9$).

To solve this, mathematicians expanded the universe again by defining the **Imaginary Unit ($i$)**, where:
$$ i^2 = -1 $$

Combining Real and Imaginary numbers creates **Complex Numbers ($\\mathbb{C}$)**, written in the form $a + bi$. Instead of sitting on a 1D Number Line, Complex Numbers exist on a 2D Complex Plane, allowing for incredible applications in quantum mechanics and electrical engineering.

## 6. Insane Level: Transcendental Numbers & p-adic Fields

Now we reach the absolute frontier of number theory. 

### Algebraic vs Transcendental
An algebraic number is any number that is the root of a polynomial with integer coefficients (e.g., $\\sqrt{2}$ is the root of $x^2 - 2 = 0$). 
A **transcendental number** is a number (real or complex) that is *not* algebraic. It cannot be the solution to any integer polynomial equation. $\\pi$ and $e$ are famously transcendental.

### Liouville's Theorem
In 1844, Joseph Liouville proved that transcendental numbers exist by constructing one. He used a theorem that states: if $\\alpha$ is an algebraic irrational number of degree $d > 1$, there exists a constant $C > 0$ such that for any rational number $\\frac{p}{q}$:
$$ \\left| \\alpha - \\frac{p}{q} \\right| > \\frac{C}{q^d} $$
Liouville's Constant ($0.110001000000000000000001\\dots$) violates this, proving it is strictly transcendental.

### The p-adic Numbers ($\\mathbb{Q}_p$)
While the Real Numbers ($\\mathbb{R}$) measure the "geometric" distance between numbers, the $p$-adic numbers use a bizarre metric where two numbers are considered "close" to each other if their difference is highly divisible by a prime number $p$. In the 5-adic system, the numbers $1$ and $126$ are extremely close together because $126 - 1 = 125 = 5^3$. This alien number system is the foundation of modern cryptography and Andrew Wiles' proof of Fermat's Last Theorem.
`,


  'Linear equations': `
# Linear Equations: From Basic Algebra to Multidimensional Spaces

## 1. Introduction to Equality and Variables

At its core, a mathematical equation is a statement of perfect balance. Like a physical scale, the expression on the left side of the equals sign ($=$) must have the exact same intrinsic value as the expression on the right side.
In algebra, we use **variables** (letters like $x, y, z$) to represent unknown quantities that we wish to discover. 

A **linear equation** is the simplest type of equation: it involves variables raised only to the first power ($x^1$). There are no squares ($x^2$), cubes ($x^3$), square roots, or complex transcendental functions like $\\sin(x)$ or $e^x$.

## 2. The Anatomy of a Linear Equation

A general linear equation in one variable takes the form:
$$ ax + b = c $$
* **$x$**: The variable (or unknown).
* **$a$**: The coefficient (a number multiplying the variable). It determines the "steepness" or rate of change.
* **$b$ and $c$**: Constants (fixed numbers).

The fundamental rule for solving any equation is the **Property of Equality**: Whatever operation you perform on one side of the equation, you must perform the exact same operation on the other side to maintain balance.

## 3. Geometric Interpretation (Lines in 1D and 2D)

In one dimension (a standard number line), the equation $ax + b = c$ represents a single specific point. Once you solve for $x$, you find exactly where that point lives.

In two dimensions (the Cartesian $xy$-plane), a linear equation with two variables represents a perfectly straight **line**. 
The standard form is $Ax + By = C$, but it is often rearranged into the highly intuitive **Slope-Intercept Form**:
$$ y = mx + c $$
* **$m$ (Slope)**: The ratio of vertical change (rise) to horizontal change (run). $\\Delta y / \\Delta x$.
* **$c$ (y-intercept)**: The exact coordinate where the line crosses the y-axis (where $x = 0$).

## 4. Solving First-Degree Equations (Axiomatic Approach)

To solve $3x + 5 = 17$, we apply the axioms of real numbers:
1. **Additive Inverse**: Subtract $5$ from both sides.
   $$ 3x + 5 - 5 = 17 - 5 \\implies 3x = 12 $$
2. **Multiplicative Inverse**: Divide both sides by $3$ (or multiply by $1/3$).
   $$ \\frac{3x}{3} = \\frac{12}{3} \\implies x = 4 $$

We can verify the solution by substituting $x=4$ back into the original equation: $3(4) + 5 = 12 + 5 = 17$. The scale remains perfectly balanced!

## 5. Systems of Two Linear Equations (Substitution & Elimination)

What happens if we have two variables? An equation like $x + y = 10$ has infinitely many solutions (e.g., $5+5, 2+8, -10+20$). 
To nail down a single, unique solution for two variables, we need **two distinct equations**. This is called a **System of Linear Equations**.

Geometrically, finding the solution means finding the exact $(x,y)$ coordinate where two straight lines intersect on a graph!

There are two primary algebraic methods to solve them:
* **Substitution**: Isolate one variable in the first equation (e.g., $y = 10 - x$), and substitute that entire expression into the second equation. This reduces the problem to a single variable.
* **Elimination**: Multiply the equations by constants so that when you add or subtract the two equations together, one of the variables perfectly cancels out (eliminates) to zero.

## 6. Cramer's Rule and Determinants

In the 18th century, Gabriel Cramer published an elegant, purely algorithmic formula for solving systems of linear equations using **Determinants**.

For a $2 \\times 2$ system:
$$ a_1x + b_1y = c_1 $$
$$ a_2x + b_2y = c_2 $$

We define the main determinant $\\Delta$ (or $D$) constructed from the coefficients:
$$ \\Delta = \\begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \\end{vmatrix} = a_1b_2 - a_2b_1 $$

The solutions for $x$ and $y$ are found by replacing the respective columns with the constants:
$$ x = \\frac{\\Delta_x}{\\Delta} = \\frac{\\begin{vmatrix} c_1 & b_1 \\ c_2 & b_2 \\end{vmatrix}}{\\Delta} $$
$$ y = \\frac{\\Delta_y}{\\Delta} = \\frac{\\begin{vmatrix} a_1 & c_1 \\ a_2 & c_2 \\end{vmatrix}}{\\Delta} $$
*(Note: If $\\Delta = 0$, the lines are either parallel (no solution) or coincident (infinite solutions).*

## 7. Linear Systems in 3D (Planes and Intersections)

When we add a third variable ($z$), the equation $Ax + By + Cz = D$ no longer represents a line—it represents a flat, infinite **2D Plane** slicing through 3D space.

A system of three linear equations ($3 \\times 3$) represents three planes. Solving the system means finding the coordinates where all three planes intersect.
* **Unique Solution:** The three planes intersect at a single 3D point (like the corner of a room where two walls meet the ceiling).
* **Infinite Solutions:** The planes intersect along a common line (like the pages of an open book meeting at the spine).
* **No Solution:** Two or more planes are parallel and never touch, or they form a triangular prism with no single common intersection point.

## 8. Matrix Representation (Gaussian Elimination)

Cramer's Rule becomes computationally disastrous for large systems (e.g., $10 \\times 10$). The standard modern method is **Gaussian Elimination**.

We extract the coefficients into an **Augmented Matrix**:
$$ \\begin{bmatrix} a_1 & b_1 & c_1 & | & d_1 \\ a_2 & b_2 & c_2 & | & d_2 \\ a_3 & b_3 & c_3 & | & d_3 \\end{bmatrix} $$

Using elementary row operations (swapping rows, multiplying a row by a constant, adding a multiple of one row to another), we methodically manipulate the matrix until it reaches **Row Echelon Form** (a staircase of 1s down the diagonal, with 0s below it). 
From there, we simply use "back-substitution" to find $z$, then $y$, then $x$. 
If we continue manipulating until we get 0s *above* the diagonal as well, it is called **Reduced Row Echelon Form (Gauss-Jordan Elimination)**, and the solutions are read directly off the right side!

## 9. The Rouché-Capelli Theorem (Rank and Consistency)

How can we know *theoretically* if a massive system has zero, one, or infinite solutions without actually doing the tedious Gaussian elimination? 

We use the **Rouché-Capelli Theorem**, which relies on the concept of **Matrix Rank**. The rank is the number of linearly independent rows (rows that aren't just scaled copies of each other).

Let $A$ be the coefficient matrix, and $[A|b]$ be the augmented matrix. Let $n$ be the number of variables.
1. **Inconsistent (0 solutions):** If $\\text{Rank}(A) < \\text{Rank}([A|b])$. This physically means the equations are contradictory (e.g., $x+y=5$ and $x+y=10$).
2. **Unique Solution:** If $\\text{Rank}(A) = \\text{Rank}([A|b]) = n$.
3. **Infinite Solutions:** If $\\text{Rank}(A) = \\text{Rank}([A|b]) < n$. There are not enough independent equations to pin down a single point; the system has "degrees of freedom."

## 10. Ill-Conditioned Systems and SVD (Numerical Stability)

In the real world (e.g., engineering simulations, physics engines, AI neural networks), coefficients are not perfect integers like $2$ or $3$; they are decimal approximations from sensor readings.

This introduces a terrifying problem: **Ill-Conditioned Systems**.
Consider a system of two equations whose lines are *almost* perfectly parallel (e.g., slopes of $1.000$ and $1.001$). 
They will intersect eventually, but their intersection point is incredibly sensitive. If your sensor has an error of just $0.0001$, the intersection point could shift by hundreds of miles!

Mathematicians measure this fragility using the **Condition Number** of the matrix $A$, denoted $\\kappa(A)$. 
* A condition number near $1$ means the system is "well-conditioned" (stable, robust).
* A condition number of $1,000,000$ means the system is highly "ill-conditioned." Any tiny measurement error will be amplified a million times in the final solution!

To solve ill-conditioned systems safely, computers abandon Gaussian Elimination entirely and use the **Singular Value Decomposition (SVD)** or Tikhonov Regularization to filter out the instability. Linear equations are the foundation of modern computation, but mastering their stability is the true art of numerical analysis.
`,


  'Quadratic equations': `
# Quadratic Equations: Curves, Roots & The Unsolvable Quintic

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

Because $A_5$ cannot be broken down any further, the general quintic equation is fundamentally, theoretically impossible to solve with a simple algebraic formula. This breakthrough gave birth to modern Abstract Algebra!

## Derivation of the Quadratic Formula

The quadratic formula is not magic; it is simply the result of "Completing the Square" on the general equation $ax^2 + bx + c = 0$. Here is the rigorous step-by-step derivation:

**Step 1: Start with the standard form**
$$ ax^2 + bx + c = 0 $$

**Step 2: Divide the entire equation by $a$ (assuming $a \\neq 0$)**
$$ x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0 $$

**Step 3: Move the constant term to the right side**
$$ x^2 + \\frac{b}{a}x = -\\frac{c}{a} $$

**Step 4: Complete the square**
Take half of the $x$ coefficient ($\\frac{b}{2a}$), square it ($\\frac{b^2}{4a^2}$), and add it to both sides to maintain equality:
$$ x^2 + \\frac{b}{a}x + \\frac{b^2}{4a^2} = -\\frac{c}{a} + \\frac{b^2}{4a^2} $$

**Step 5: Factor the perfect square on the left, and find a common denominator on the right**
The left side collapses perfectly into $(x + \\frac{b}{2a})^2$. 
For the right side, multiply $-\\frac{c}{a}$ by $\\frac{4a}{4a}$ to get $-\\frac{4ac}{4a^2}$:
$$ \\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2} $$

**Step 6: Take the square root of both sides**
Remember to include the $\\pm$ symbol, as both a positive and negative root will satisfy the square:
$$ x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{b^2 - 4ac}}{\\sqrt{4a^2}} $$

**Step 7: Simplify the denominator and isolate $x$**
Since $\\sqrt{4a^2} = 2a$:
$$ x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a} $$
Move $\\frac{b}{2a}$ to the right side:
$$ x = -\\frac{b}{2a} \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a} $$

**Step 8: Combine into a single fraction**
$$ x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} $$
Q.E.D. The formula is derived!

`,

  'Sequences & series': `
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

You can literally rearrange the terms of $\\ln(2)$ to sum to $\\pi$, $-\\sqrt{2}$, or $1,000,000$. Infinite sums are not just "big finite sums"—they are a completely different beast!

## Derivation of the Infinite Geometric Series Sum

How do we prove that an infinite geometric series with $|r| < 1$ converges to $S_\\infty = \\frac{a}{1-r}$?

**Step 1: Write the finite sum $S_n$**
$$ S_n = a + ar + ar^2 + ar^3 + \\dots + ar^{n-1} $$

**Step 2: Multiply the entire equation by $r$**
$$ rS_n = ar + ar^2 + ar^3 + \\dots + ar^{n-1} + ar^n $$

**Step 3: Subtract the second equation from the first**
Notice that almost all the terms perfectly cancel out! The $ar$ cancels with $ar$, $ar^2$ with $ar^2$, all the way up to $ar^{n-1}$.
$$ S_n - rS_n = a - ar^n $$

**Step 4: Factor out $S_n$**
$$ S_n(1 - r) = a(1 - r^n) $$
$$ S_n = \\frac{a(1 - r^n)}{1 - r} $$
This gives us the formula for the sum of a *finite* geometric series of $n$ terms.

**Step 5: Take the limit as $n \\to \\infty$**
$$ S_\\infty = \\lim_{n \\to \\infty} \\frac{a(1 - r^n)}{1 - r} $$
If the ratio $r$ is strictly between $-1$ and $1$ ($|r| < 1$), then multiplying $r$ by itself infinitely many times will drive it to zero.
$$ \\lim_{n \\to \\infty} r^n = 0 $$
Therefore, the $r^n$ term vanishes completely:
$$ S_\\infty = \\frac{a(1 - 0)}{1 - r} = \\frac{a}{1 - r} $$
Q.E.D.

`,

  'Linear algebra (matrices, vectors)': `
# Linear Algebra: Matrices, Vectors & Transformations

## 1. What is a Vector?
In physics, a vector is an arrow with a length (magnitude) and a direction. In computer science, a vector is a list of ordered numbers. In linear algebra, both views are unified.
A vector $\\vec{v} = \\begin{bmatrix} x \\\\ y \\end{bmatrix}$ represents a movement from the origin $(0,0)$ to the coordinate $(x,y)$.

**Example:**
If $\\vec{v} = \\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix}$, we move 3 units right and 2 units up.

## 2. Vector Addition and Scalar Multiplication
Vectors can be added component-wise, geometrically representing placing arrows tip-to-tail.
$\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} + \\begin{bmatrix} 3 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 1 \\end{bmatrix}$

Scalar multiplication stretches or shrinks a vector.
$2 \\cdot \\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ 2 \\end{bmatrix}$

## 3. The Dot Product
The dot product measures how much two vectors point in the same direction. It outputs a scalar (single number).
$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 + u_3 v_3$

**Geometrically:**
$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| |\\vec{v}| \\cos(\\theta)$
If the dot product is exactly 0, the vectors are perfectly perpendicular (orthogonal).

## 4. The Cross Product
In 3D space, the cross product of two vectors produces a new vector that is entirely perpendicular to both original vectors. The length of this new vector equals the area of the parallelogram formed by the original two vectors.

## 5. Linear Transformations & Matrices
A matrix is not just a grid of numbers; it is a **function** that transforms space. 
When a matrix multiplies a vector, it moves that vector to a new location.
$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = x \\begin{bmatrix} a \\\\ c \\end{bmatrix} + y \\begin{bmatrix} b \\\\ d \\end{bmatrix}$

The columns of the matrix tell you exactly where the basis vectors $\\hat{i}$ and $\\hat{j}$ land after the transformation!

## 6. The Determinant
The determinant of a matrix represents the **scaling factor of area** (or volume in 3D) during the transformation.
$\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$

If $\\det(A) = 0$, the transformation squishes space into a lower dimension (like flattening a 2D plane into a 1D line). This means information is lost, and the matrix is not invertible.

## 7. Systems of Linear Equations
A system of equations like:
$2x + 3y = 8$
$5x - y = 3$
Can be rewritten as a matrix equation $A\\vec{x} = \\vec{b}$:
$\\begin{bmatrix} 2 & 3 \\\\ 5 & -1 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 8 \\\\ 3 \\end{bmatrix}$

## 8. Matrix Inverses
To solve $A\\vec{x} = \\vec{b}$, we "divide" by the matrix $A$ by multiplying by its inverse, $A^{-1}$.
$\\vec{x} = A^{-1}\\vec{b}$
If the determinant is zero, $A^{-1}$ does not exist. Geometrically, you cannot "un-squish" a line back into a plane!

## 9. Eigenvectors and Eigenvalues
When a matrix transforms space, most vectors get knocked off their original span (they change direction). However, some special vectors stay exactly on their original line, only getting stretched or squished.
These are **Eigenvectors**, and the factor by which they are stretched is the **Eigenvalue** ($\\lambda$).
$$ A\\vec{v} = \\lambda\\vec{v} $$

## 10. Insane Level: Principal Component Analysis (PCA)
Eigenvectors are the core engine of modern data science. In PCA, we find the eigenvectors of a massive data covariance matrix. The eigenvector with the largest eigenvalue points in the direction of maximum variance in the data! This allows us to compress 10,000-dimensional data down to 2 or 3 dimensions while retaining the most critical information, powering image recognition and AI.

`,
  'Real analysis': `
# Real Analysis: The Strict Rigor of Limits and Continuity

## 1. The Flaw in Intuitive Calculus
Newton and Leibniz invented calculus using "infinitesimals" (infinitely small numbers). While it worked, it was mathematically sloppy. Philosophers like Bishop Berkeley mocked them for using "ghosts of departed quantities." It took 150 years for Augustin-Louis Cauchy and Karl Weierstrass to build a rigorous foundation.

## 2. Formal Definition of a Limit (Epsilon-Delta)
To formally prove $\\lim_{x \\to c} f(x) = L$, we cannot just say "$x$ gets close to $c$". We use the $\\epsilon-\\delta$ (epsilon-delta) definition.
For every error tolerance $\\epsilon > 0$, there exists a boundary $\\delta > 0$ such that:
If $0 < |x - c| < \\delta$, then $|f(x) - L| < \\epsilon$.

**Example: Prove $\\lim_{x \\to 2} (3x - 1) = 5$**
*Proof:* Let $\\epsilon > 0$ be given. We need $|(3x - 1) - 5| < \\epsilon$.
$|3x - 6| < \\epsilon \\implies 3|x - 2| < \\epsilon \\implies |x - 2| < \\frac{\\epsilon}{3}$.
Choose $\\delta = \\frac{\\epsilon}{3}$. 
Thus, if $|x - 2| < \\delta$, then $|3x - 6| < 3\\delta = 3(\\frac{\\epsilon}{3}) = \\epsilon$. QED.

## 3. Formal Definition of Continuity
A function $f$ is continuous at $x=c$ if:
1. $f(c)$ is defined.
2. $\\lim_{x \\to c} f(x)$ exists.
3. $\\lim_{x \\to c} f(x) = f(c)$.

In epsilon-delta terms, we don't have $0 < |x - c|$ because $x=c$ is allowed.

## 4. Derivatives and Differentiability
The derivative is defined via the limit of the difference quotient:
$$ f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} $$

If $f'(a)$ exists, we say $f$ is **differentiable** at $a$. 
*Theorem:* Differentiability implies continuity. However, continuity does NOT imply differentiability! A classic example is $f(x) = |x|$, which is continuous everywhere but not differentiable at $x=0$ because the limit approaches $-1$ from the left and $+1$ from the right.

## 5. The Mean Value Theorem (MVT)
If $f(x)$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one point $c$ in $(a, b)$ such that:
$$ f'(c) = \\frac{f(b) - f(a)}{b - a} $$
Geometrically, this means there is at least one point where the instantaneous tangent slope is exactly parallel to the average secant slope connecting the endpoints.

## 6. The Intermediate Value Theorem (IVT)
If $f$ is continuous on $[a, b]$, and $k$ is any number between $f(a)$ and $f(b)$, then there exists at least one $c$ in $[a, b]$ such that $f(c) = k$.
This formally proves that a continuous line crossing from negative to positive MUST cross the x-axis (have a root).

## 7. Supremum and Infimum
In real analysis, instead of just "maximum," we use the **Supremum** (Least Upper Bound). 
The set of real numbers $S = (0, 1)$ does not have a maximum element (you can always pick $0.999...$), but it does have a supremum, $\\sup(S) = 1$. The **Axiom of Completeness** states that every non-empty set of real numbers bounded above has a supremum in $\\mathbb{R}$.

## 8. Sequences in Real Numbers (Cauchy Sequences)
A sequence $(x_n)$ is a Cauchy sequence if the terms become arbitrarily close to each other as the sequence progresses.
For any $\\epsilon > 0$, there exists an $N$ such that for all $m, n > N$, $|x_m - x_n| < \\epsilon$.
In $\\mathbb{R}$, every Cauchy sequence converges to a real limit. This is not true in $\\mathbb{Q}$ (rationals).

## 9. Integration: Riemann vs. Lebesgue
The Riemann integral defines area using vertical rectangles. 
$$ \\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*)\\Delta x $$
But this fails for highly discontinuous functions (like Dirichlet's function, which is $1$ on rationals and $0$ on irrationals). Henri Lebesgue fixed this by slicing the area *horizontally* instead, creating Lebesgue Measure theory, the foundation of modern probability.

## 10. Insane Level: Pathological Functions (Weierstrass)
Mathematicians used to believe that if a function was continuous everywhere, it must be differentiable *almost* everywhere. 
In 1872, Karl Weierstrass shocked the world by publishing a function that is **continuous everywhere, but differentiable nowhere!**
$$ f(x) = \\sum_{n=0}^{\\infty} a^n \\cos(b^n \\pi x) $$
(Where $0 < a < 1$ and $ab > 1 + \\frac{3}{2}\\pi$).
If you zoom in on the graph of this function, it never becomes a smooth line. It is infinitely jagged at every single microscopic point, pre-dating the discovery of fractals by nearly a century!

## Proof: The Derivative of $x^2$ is $2x$

In elementary calculus, you learn the Power Rule ($x^n \\to nx^{n-1}$) by rote memorization. In Real Analysis, we must rigorously prove it using the limit definition of the derivative.

**Step 1: The Limit Definition**
The derivative of a function $f(x)$ is defined as the limit of the difference quotient (the slope of the secant line) as the distance $h$ between the points shrinks to absolute zero:
$$ f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} $$

**Step 2: Substitute $f(x) = x^2$**
$$ f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h} $$

**Step 3: Expand the binomial**
Using algebraic expansion, $(x+h)^2 = x^2 + 2xh + h^2$:
$$ f'(x) = \\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h} $$

**Step 4: Cancel terms**
The $x^2$ and $-x^2$ perfectly annihilate each other:
$$ f'(x) = \\lim_{h \\to 0} \\frac{2xh + h^2}{h} $$

**Step 5: Factor out $h$**
Since $h$ is approaching $0$ but is not exactly $0$ yet, we are legally allowed to divide by it. We factor $h$ out of the numerator:
$$ f'(x) = \\lim_{h \\to 0} \\frac{h(2x + h)}{h} $$
The $h$'s cancel out:
$$ f'(x) = \\lim_{h \\to 0} (2x + h) $$

**Step 6: Evaluate the limit**
Now that the dreaded division by zero is eliminated, we can safely evaluate the limit by direct substitution. As $h$ shrinks to exactly $0$, the $+h$ term vanishes:
$$ f'(x) = 2x + 0 = 2x $$
Q.E.D. We have rigorously proven the power rule for $n=2$.



`,


  'Multivariable Calculus & Vector Fields': `
# Multivariable Calculus & Vector Fields: The 3D World

## 1. Functions of Several Variables
In single-variable calculus, we study $y = f(x)$, representing a 2D curve. 
In multivariable calculus, we study functions like $z = f(x, y)$, which represent a 3D surface (like a mountain terrain), or $w = f(x, y, z)$, which assigns a value to every point in a 3D room (like temperature in a room).

## 2. Partial Derivatives
How do we find the slope of a 3D surface? The slope depends on which direction you are walking! We solve this using **Partial Derivatives**.
To find the partial derivative with respect to $x$ (denoted $\\frac{\\partial f}{\\partial x}$ or $f_x$), we treat all other variables (like $y$) as constants and differentiate normally.

**Example Problem:** Find the partial derivatives of $f(x, y) = x^3y^2 + 5y$
* $\\frac{\\partial f}{\\partial x}$: Treat $y^2$ and $5y$ as constants. The derivative of $x^3$ is $3x^2$. Thus, $\\frac{\\partial f}{\\partial x} = 3x^2y^2$.
* $\\frac{\\partial f}{\\partial y}$: Treat $x^3$ as a constant. The derivative of $y^2$ is $2y$, and $5y$ is $5$. Thus, $\\frac{\\partial f}{\\partial y} = 2x^3y + 5$.

$\\frac{\\partial f}{\\partial x}$ gives the slope if you walk purely East-West. $\\frac{\\partial f}{\\partial y}$ gives the slope if you walk North-South.

## 3. The Gradient Vector
If we combine all the partial derivatives of a function into a vector, we get the **Gradient**, denoted by $\\nabla f$ (del $f$).
$$ \\nabla f = \\left\\langle \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z} \\right\\rangle $$

**Magical Properties of the Gradient:**
1. It always points in the direction of **steepest ascent** (maximum increase) on the surface.
2. Its magnitude $|\\nabla f|$ gives the exact rate of that steepest ascent.
3. It is always **orthogonal** (perpendicular) to the level curves/surfaces.

## 4. Directional Derivatives
What if you want to find the slope walking in an arbitrary direction $\\vec{u}$?
We use the **Directional Derivative**, $D_{\\vec{u}}f$. It is calculated by taking the dot product of the gradient and a unit vector $\\vec{u}$ pointing in your chosen direction:
$$ D_{\\vec{u}}f = \\nabla f \\cdot \\vec{u} $$

**Example Problem:** Find the directional derivative of $f(x,y) = x^2y$ at the point $(1,2)$ in the direction of the vector $\\vec{v} = \\langle 3, 4 \\rangle$.
1. Find gradient: $\\nabla f = \\langle 2xy, x^2 \\rangle$.
2. Evaluate gradient at $(1,2)$: $\\nabla f(1,2) = \\langle 4, 1 \\rangle$.
3. Normalize $\\vec{v}$ to a unit vector: The magnitude is $\\sqrt{3^2 + 4^2} = 5$. So $\\vec{u} = \\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$.
4. Dot product: $\\langle 4, 1 \\rangle \\cdot \\langle \\frac{3}{5}, \\frac{4}{5} \\rangle = \\frac{12}{5} + \\frac{4}{5} = \\frac{16}{5}$. 
The slope in that direction is exactly $3.2$.

## 5. Multiple Integrals
Just as a single integral finds the 2D area under a curve, a **Double Integral** $\\iint f(x,y)\\,dA$ finds the 3D volume under a surface.
To compute it, we iterate the integrals:
$$ \\int_{x=a}^{b} \\int_{y=c}^{d} f(x,y) \\,dy \\,dx $$
Fubini's Theorem states that you can swap the order of integration ($dx\\,dy$ instead of $dy\\,dx$) and you will get the exact same volume!

## 6. Vector Fields
A vector field assigns a vector to every point in space. Think of it as a map of ocean currents, or the magnetic field around a magnet. We define a vector field as $\\vec{F}(x,y) = \\langle P(x,y), Q(x,y) \\rangle$.

## 7. Line Integrals
A line integral measures the accumulation of a field along a specific curvy path $C$. 
$$ \\int_C \\vec{F} \\cdot d\\vec{r} $$
In physics, if $\\vec{F}$ is a force field (like gravity or a storm), this integral calculates the total **Work** done pushing an object along that path.

## 8. Conservative Fields and Potential Functions
If a vector field is the gradient of some scalar function ($\\vec{F} = \\nabla f$), it is called **Conservative**. 
Gravity is a conservative field. The incredible property of conservative fields is the **Fundamental Theorem of Line Integrals**:
The work done moving from point $A$ to point $B$ depends *only* on the start and end points, NOT the path taken!
$$ \\int_C \\nabla f \\cdot d\\vec{r} = f(B) - f(A) $$

## 9. Divergence and Curl
Two operations measure the "flow" of a vector field:
* **Divergence** ($\\nabla \\cdot \\vec{F}$): A scalar measuring how much the field is expanding or compressing at a point. If divergence is positive, it's a "source". If negative, it's a "sink".
* **Curl** ($\\nabla \\times \\vec{F}$): A vector measuring how much the field is rotating or swirling around a point. A tornado has massive curl.

## 10. Insane Level: Stokes' Theorem and Divergence Theorem
The capstones of multivariable calculus link macroscopic areas to microscopic boundary loops:
1. **Stokes' Theorem**: The macroscopic swirl of a surface equals the circulation around its edge boundary! $\\iint_S (\\nabla \\times \\vec{F}) \\cdot d\\vec{S} = \\oint_C \\vec{F} \\cdot d\\vec{r}$
2. **Divergence Theorem**: The total flow expanding *out* of a 3D volume is exactly equal to the flux bursting through its 2D surface skin! $\\iiint_V (\\nabla \\cdot \\vec{F}) \\,dV = \\iint_S \\vec{F} \\cdot d\\vec{S}$
These theorems are the foundations of Maxwell's Equations, literally dictating how electricity, magnetism, and light work in our universe!

## Derivation of the Directional Derivative

We previously stated that the directional derivative $D_{\\vec{u}}f$ is simply the dot product $\\nabla f \\cdot \\vec{u}$. But why is this true? Here is the rigorous derivation.

**Step 1: The Definition of the Directional Derivative**
Just like a standard 1D derivative, we define it using a limit. We want to find the rate of change of $f(x,y)$ as we move from a point $(x_0, y_0)$ along a straight path defined by a unit vector $\\vec{u} = \\langle u_1, u_2 \\rangle$.
We parameterize this path using a scalar $h$ (representing the distance walked):
$x(h) = x_0 + hu_1$
$y(h) = y_0 + hu_2$

The directional derivative is the limit as our step size $h$ approaches 0:
$$ D_{\\vec{u}}f(x_0, y_0) = \\lim_{h \\to 0} \\frac{f(x_0 + hu_1, y_0 + hu_2) - f(x_0, y_0)}{h} $$

**Step 2: Apply the Multivariable Chain Rule**
Let's define a new 1D function $g(h) = f(x(h), y(h))$. 
The directional derivative is simply the standard derivative of $g$ evaluated at $h=0$:
$$ D_{\\vec{u}}f = g'(0) $$

By the multivariable chain rule:
$$ g'(h) = \\frac{\\partial f}{\\partial x}\\frac{dx}{dh} + \\frac{\\partial f}{\\partial y}\\frac{dy}{dh} $$

**Step 3: Evaluate the Derivatives**
Since $x(h) = x_0 + hu_1$, the derivative $\\frac{dx}{dh}$ is simply the constant $u_1$.
Since $y(h) = y_0 + hu_2$, the derivative $\\frac{dy}{dh}$ is simply the constant $u_2$.

Substitute these into the chain rule:
$$ g'(h) = \\frac{\\partial f}{\\partial x}u_1 + \\frac{\\partial f}{\\partial y}u_2 $$

**Step 4: Convert to Dot Product Notation**
Notice that the expression $\\frac{\\partial f}{\\partial x}u_1 + \\frac{\\partial f}{\\partial y}u_2$ is exactly the algebraic definition of a dot product between two vectors!
Let Vector 1 be the Gradient: $\\nabla f = \\langle \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y} \\rangle$.
Let Vector 2 be our direction vector: $\\vec{u} = \\langle u_1, u_2 \\rangle$.

Therefore:
$$ D_{\\vec{u}}f = \\langle \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y} \\rangle \\cdot \\langle u_1, u_2 \\rangle = \\nabla f \\cdot \\vec{u} $$
Q.E.D. The directional derivative is perfectly captured by the dot product!
`,

  'Differential Equations': `
# Differential Equations: The Language of the Universe

## 1. The Anatomy of Change
Algebraic equations ask you to find a specific *number* (e.g., solve $x^2 = 4$ for $x$). 
A **Differential Equation (DE)** asks you to find a specific *function* (e.g., solve $y' = y$ for $y(t)$).
Differential equations relate an unknown function to its own rates of change. Because derivatives represent change, DEs are the universal language for modeling reality: population growth, planetary orbits, chemical kinetics, epidemiology, and quantum mechanics are all fundamentally described by differential equations.

## 2. Classification: Order, Linearity, and Type
Before solving a DE, you must classify it to select the right weapon from the mathematical arsenal.
* **Ordinary vs. Partial (ODE vs. PDE)**: If the unknown function depends on only *one* independent variable (like $t$), it is an ODE ($dy/dt$). If it depends on *multiple* variables (like $x, y, z, t$), it is a PDE (using $\\partial y/\\partial t$).
* **Order**: The highest derivative present in the equation. 
  * $y' + 2y = 0$ is a **first-order** ODE.
  * $y'' - 5y' + 6y = \\sin(t)$ is a **second-order** ODE.
* **Linearity**: An ODE is linear if the unknown function $y$ and all its derivatives appear strictly to the first power, are not multiplied together, and are not nested inside other functions. 
  * Linear: $t^2 y'' + \\ln(t) y' = e^t$ (coefficients can be non-linear functions of $t$).
  * Non-Linear: $y'' + y^2 = 0$ or $y' = \\sin(y)$.

## 3. First-Order Separable Equations
The most beautifully straightforward DEs are **Separable**. If you can algebraically quarantine all the $y$'s and $dy$'s to one side of the equals sign, and all the $t$'s and $dt$'s to the other, you can simply integrate both sides independently.

**Example: The Logistic Growth Model**
Populations don't grow exponentially forever; they are limited by a carrying capacity $K$. The rate of growth is:
$$ \\frac{dP}{dt} = rP\\left(1 - \\frac{P}{K}\\right) $$
1. Separate the variables:
   $$ \\frac{dP}{P(1 - P/K)} = r \\, dt $$
2. Use partial fraction decomposition on the left side:
   $$ \\left( \\frac{1}{P} + \\frac{1/K}{1 - P/K} \\right) dP = r \\, dt $$
3. Integrate both sides:
   $$ \\ln|P| - \\ln|1 - P/K| = rt + C $$
4. Exponentiate and solve for $P(t)$:
   $$ P(t) = \\frac{K}{1 + Ae^{-rt}} $$
This is the famous **Logistic Curve** (an S-curve) that precisely models virus outbreaks, yeast colonies, and machine learning activation functions (the Sigmoid)!

## 4. First-Order Linear Equations & The Integrating Factor
If an equation takes the standard form:
$$ \\frac{dy}{dx} + P(x)y = Q(x) $$
It is a first-order linear DE. It is *not* generally separable. However, Leonard Euler discovered an ingenious trick. We construct a magic multiplier called the **Integrating Factor**, denoted $\\mu(x)$:
$$ \\mu(x) = e^{\\int P(x) \\, dx} $$
Multiplying the entire differential equation by $\\mu(x)$ triggers a mathematical miracle: the left side instantly collapses into the exact derivative of a single product via the reverse product rule!
$$ \\mu(x)\\frac{dy}{dx} + \\mu(x)P(x)y = \\mu(x)Q(x) $$
$$ \\frac{d}{dx}[\\mu(x) y] = \\mu(x)Q(x) $$
Now, simply integrate both sides with respect to $x$ and divide by $\\mu(x)$ to find $y(x)$.

## 5. Second-Order Linear Homogeneous Equations with Constant Coefficients
These dictate the physics of oscillators (mass-spring systems, RLC circuits, pendulums).
$$ ay'' + by' + cy = 0 $$
Because the derivative of $e^{rx}$ is simply $re^{rx}$, an exponential function's shape is immune to differentiation. We "guess" the solution has the form $y = e^{rx}$. Plugging this into the ODE yields the **Characteristic Equation**:
$$ ar^2 + br + c = 0 $$
This reduces calculus to middle-school algebra! We solve for the roots of $r$ using the quadratic formula. The physics of the system depends entirely on the Discriminant $\\Delta = b^2 - 4ac$:

1. **$\\Delta > 0$ (Two distinct real roots $r_1, r_2$)**:
   The system is **Overdamped**. It slowly oozes back to equilibrium without ever crossing it (like a door with a very stiff hydraulic closer).
   $$ y(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t} $$

2. **$\\Delta = 0$ (One repeated real root $r$)**:
   The system is **Critically Damped**. It snaps back to equilibrium as fast as physically possible without oscillating (how car shock absorbers are designed). We must multiply the second term by $t$ to maintain linear independence.
   $$ y(t) = C_1 e^{rt} + C_2 t e^{rt} $$

3. **$\\Delta < 0$ (Complex conjugate roots $\\alpha \\pm i\\beta$)**:
   The system is **Underdamped**. By Euler's Formula ($e^{i\\theta} = \\cos\\theta + i\\sin\\theta$), the imaginary exponents transform into oscillating sine and cosine waves! The real part $\\alpha$ dictates the exponential decay envelope.
   $$ y(t) = e^{\\alpha t}(C_1 \\cos(\\beta t) + C_2 \\sin(\\beta t)) $$

## 6. Non-Homogeneous Equations and Driven Systems
What if the system is pushed by an external force?
$$ ay'' + by' + cy = F(t) $$
By the principle of superposition, the total general solution is the sum of the un-driven (homogeneous) solution $y_h(t)$ and a particular driven solution $y_p(t)$.
$$ y(t) = y_h(t) + y_p(t) $$
To find $y_p(t)$, we use the **Method of Undetermined Coefficients**. We make an educated guess about the shape of $y_p(t)$ based on the shape of $F(t)$. 
* If $F(t)$ is a polynomial like $3t^2$, we guess $y_p(t) = At^2 + Bt + C$.
* If $F(t)$ is an exponential like $e^{5t}$, we guess $y_p(t) = A e^{5t}$.
* If $F(t)$ is an oscillator like $\\cos(3t)$, we guess $y_p(t) = A\\cos(3t) + B\\sin(3t)$.
We plug the guess into the ODE, equate coefficients, and solve the resulting algebraic system for $A, B, C$.

**Resonance:** If the external driving force $F(t)$ perfectly matches the natural frequency $\\beta$ of the homogeneous system, you must multiply your guess by $t$. The amplitude of oscillation will grow linearly with time ($t \\cos(\\beta t)$), eventually shattering the system! This is how opera singers shatter glass and how the Tacoma Narrows Bridge collapsed.

## 7. The Laplace Transform: Navigating the Frequency Domain
For discontinuous driving forces (like a hammer striking a mass, or a sudden square-wave voltage spike in a circuit), piecewise calculus is an absolute nightmare. 
Pierre-Simon Laplace formalized an operation that teleports the entire differential equation out of the "Time Domain" ($t$) and into an algebraic "Frequency Domain" ($s$):
$$ \\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^{\\infty} f(t)e^{-st} \\, dt $$

The supreme power of the Laplace Transform lies in how it treats derivatives. It turns calculus into algebra!
$$ \\mathcal{L}\\{y'(t)\\} = sY(s) - y(0) $$
$$ \\mathcal{L}\\{y''(t)\\} = s^2 Y(s) - sy(0) - y'(0) $$
You take the Laplace transform of the entire differential equation, solve the resulting trivial algebra problem for $Y(s)$, and then perform an **Inverse Laplace Transform** (usually using Partial Fraction Decomposition and lookup tables) to teleport the answer back to the time domain $y(t)$.

## 8. Systems of First-Order Linear Differential Equations
In reality, variables are heavily coupled. The population of wolves ($W$) depends on the population of rabbits ($R$), and the rabbits depend on the wolves.
$$ \\frac{dR}{dt} = 4R - 2W $$
$$ \\frac{dW}{dt} = R + W $$
We rewrite this as a single matrix equation:
$$ \\mathbf{X}' = \\mathbf{A}\\mathbf{X} $$
$$ \\begin{bmatrix} R' \\\\ W' \\end{bmatrix} = \\begin{bmatrix} 4 & -2 \\\\ 1 & 1 \\end{bmatrix} \\begin{bmatrix} R \\\\ W \\end{bmatrix} $$
The solution is profoundly elegant. We find the **Eigenvalues** ($\\lambda_1, \\lambda_2$) and **Eigenvectors** ($\\vec{v}_1, \\vec{v}_2$) of the coefficient matrix $\\mathbf{A}$. The general solution is simply a linear combination of the eigenvectors scaled by exponential eigenvalues!
$$ \\mathbf{X}(t) = C_1 \\vec{v}_1 e^{\\lambda_1 t} + C_2 \\vec{v}_2 e^{\\lambda_2 t} $$
The eigenvalues perfectly predict the ultimate fate of the ecosystem:
* If both $\\lambda$ are negative, both populations crash to zero (a Stable Node sink).
* If one $\\lambda$ is positive, populations explode to infinity (an Unstable Node source).
* If the $\\lambda$'s are complex conjugates, the populations oscillate in a permanent predator-prey cycle (a Center or Spiral).

## 9. Partial Differential Equations (PDEs): The Equations of Physics
When a function depends on multiple variables, such as a temperature profile varying across both 1D space ($x$) and time ($t$), we use PDEs. The three pillars of classical physics are all second-order linear PDEs:

1. **The Heat Equation (Diffusion)**: $\\frac{\\partial u}{\\partial t} = \\alpha \\frac{\\partial^2 u}{\\partial x^2}$
   * Describes how temperature smooths out over time. It requires one initial condition and two spatial boundary conditions.
2. **The Wave Equation**: $\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\frac{\\partial^2 u}{\\partial x^2}$
   * Describes the vibration of a guitar string, sound waves, or electromagnetic radiation traveling at speed $c$.
3. **Laplace's Equation (Steady-State)**: $\\nabla^2 u = \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0$
   * Describes the final, steady-state temperature distribution of a 2D plate after infinite time has passed, or the shape of a soap film stretched across a wire frame.

These are solved using **Separation of Variables**, where we assume the solution is the product of two independent 1D functions: $u(x,t) = X(x)T(t)$. This shatters the PDE into two ordinary ODEs, which are then solved and stitched back together using Fourier Series to match the boundary conditions!

## 10. Insane Level: Chaos Theory & The Lorenz Attractor
Is the universe predictable? If you have the exact differential equations of the atmosphere and perfect initial conditions, can you predict the weather infinitely far into the future?
In 1963, meteorologist Edward Lorenz was simulating atmospheric convection using a highly simplified system of three coupled, non-linear ODEs:
$$ \\frac{dx}{dt} = \\sigma(y - x) $$
$$ \\frac{dy}{dt} = x(\\rho - z) - y $$
$$ \\frac{dz}{dt} = xy - \\beta z $$
He ran a simulation, paused it, rounded a variable from $0.506127$ to $0.506$, and resumed it. The new solution completely and rapidly diverged from the original solution! 
This was the birth of **Chaos Theory** and the "Butterfly Effect" (Sensitive Dependence on Initial Conditions). Lorenz proved mathematically that even if a system is perfectly deterministic (governed by exact ODEs with zero randomness), its long-term future is fundamentally, intrinsically unpredictable if the equations are non-linear. The phase-space trajectories of these equations trace out the mesmerizing, infinitely-layered **Lorenz Attractor**—a shape that never repeats itself, embodying deterministic chaos.

## Proof: Solving the Exponential Growth ODE
Let's rigorously prove that the solution to $\\frac{dy}{dt} = ky$ is $y(t) = y_0 e^{kt}$.

**Step 1: Separate the variables**
Assume $y \\neq 0$. Divide both sides by $y$ and multiply by $dt$:
$$ \\frac{1}{y} dy = k \\, dt $$

**Step 2: Integrate both sides**
$$ \\int \\frac{1}{y} \\, dy = \\int k \\, dt $$
The integral of $1/y$ is the natural logarithm, and the integral of a constant $k$ is $kt$:
$$ \\ln|y| = kt + C $$
Where $C$ is the arbitrary constant of integration.

**Step 3: Isolate $y$**
To eliminate the natural logarithm, we raise $e$ to the power of both sides:
$$ e^{\\ln|y|} = e^{kt + C} $$
$$ |y| = e^{kt} \\cdot e^C $$

**Step 4: Resolve the constant**
Since $e^C$ is just a constant raised to a constant, it is simply another constant. Let's call it $A$. Furthermore, $A$ can absorb the absolute value sign (since it can be positive or negative):
$$ y(t) = A e^{kt} $$

**Step 5: Apply the Initial Condition**
At time $t=0$, the initial population is $y(0) = y_0$.
$$ y(0) = A e^{k(0)} $$
$$ y_0 = A e^0 = A(1) $$
Therefore, $A = y_0$. Substituting this back in yields our final, rigorous formula:
$$ y(t) = y_0 e^{kt} $$
Q.E.D.

## 11. Advanced: Phase Plane Analysis & The Jacobian
For non-linear systems of differential equations, finding an exact algebraic equation is often mathematically impossible. Instead, we analyze the **Phase Portrait**—a vector field showing how the system flows over time.
Given:
$$ x' = f(x,y) $$
$$ y' = g(x,y) $$
We find the **Equilibrium Points** where $x' = 0$ and $y' = 0$ (the system is perfectly stationary). To determine if these points are stable (attractors) or unstable (repulsors), we calculate the **Jacobian Matrix**:
$$ J = \begin{bmatrix} \frac{\partial f}{\partial x} & \frac{\partial f}{\partial y} \\ \frac{\partial g}{\partial x} & \frac{\partial g}{\partial y} \end{bmatrix} $$
By evaluating the Jacobian at the equilibrium point and finding its Eigenvalues, we can linearly approximate the chaotic non-linear system!

## 12. Numerical Methods: How Computers Solve DEs
When an equation is too difficult to solve analytically (like the Navier-Stokes equations governing fluid dynamics), we use computers to simulate it step-by-step.
* **Euler's Method**: The simplest approach. You calculate the slope at your current point, take a tiny step forward ($\Delta t$) along that slope, and recalculate.
  $$ y_{n+1} = y_n + f(t_n, y_n) \Delta t $$
  However, Euler's method is incredibly inaccurate because it assumes the slope stays constant for the entire step!
* **Runge-Kutta 4th Order (RK4)**: The workhorse of modern physics engines and simulations. Instead of just taking the slope at the start of the step, RK4 cleverly calculates the slope at the start, two slopes at the midpoint, and a slope at the end. It takes a weighted average of these four slopes to take an incredibly accurate step forward.

## 13. Power Series Solutions & The Method of Frobenius
What if the coefficients in a linear DE are not constants, but polynomials? e.g., $x^2 y'' + x y' + (x^2 - n^2)y = 0$ (Bessel's Equation).
You cannot guess $e^{rx}$. Instead, you guess that the solution is an **Infinite Power Series**:
$$ y(x) = \sum_{m=0}^{\infty} c_m x^{m+r} $$
You plug this infinite sum into the DE, shift the summation indices so the powers of $x$ align, and create a **Recurrence Relation** that dictates exactly how to calculate $c_2$ from $c_0$, $c_3$ from $c_1$, etc. 
This method gives birth to the "Special Functions" of mathematical physics: Bessel Functions (how drums vibrate), Legendre Polynomials (quantum mechanics orbitals), and Hermite Polynomials (quantum harmonic oscillators).

## 14. Green's Functions & The Dirac Delta
Imagine a differential equation describing a bridge. What happens if you hit the bridge with an instantaneous, infinitely concentrated sledgehammer blow? 
This mathematically impossible strike is the **Dirac Delta Function** $\delta(t - t_0)$. It is zero everywhere, except at $t_0$ where it is infinitely tall, yet its total area is exactly 1.
If you can solve the differential equation for a single Dirac Delta strike, that solution is called the **Green's Function**, $G(t, \tau)$.
The absolute magic of Green's Functions is that any continuous driving force $F(t)$ can be thought of as an infinite sequence of tiny hammer strikes! By convolving the Green's function with $F(t)$, you can instantly solve the DE for *any* arbitrary force:
$$ y(t) = \int G(t, \tau) F(\tau) \, d\tau $$
This is how quantum field theory fundamentally calculates particle interactions!
`,

  'Vector Algebra & 3D Geometry': `
# Vector Algebra & 3D Geometry: Mapping the Universe

## 1. The 3D Coordinate System
While 2D geometry lives on a flat piece of paper with $x$ and $y$ axes, 3D geometry adds a $z$-axis representing depth.
A point in 3D space is written as $(x, y, z)$. 
The distance between two points $P(x_1, y_1, z_1)$ and $Q(x_2, y_2, z_2)$ is an extension of the Pythagorean theorem:
$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2} $$

## 2. Vectors in 3D Space
A vector $\\vec{v} = \\langle v_1, v_2, v_3 \\rangle$ represents a displacement. 
It can also be written using the standard unit basis vectors $\\hat{i}, \\hat{j}, \\hat{k}$ (which point perfectly along the x, y, and z axes):
$$ \\vec{v} = v_1\\hat{i} + v_2\\hat{j} + v_3\\hat{k} $$
The magnitude (length) of the vector is $|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$.

## 3. The Dot Product (Scalar Product)
The dot product multiplies two vectors to yield a single number (a scalar).
Algebraically: $\\vec{u} \\cdot \\vec{v} = u_1v_1 + u_2v_2 + u_3v_3$
Geometrically: $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| |\\vec{v}| \\cos\\theta$

**Crucial Property:**
If $\\vec{u} \\cdot \\vec{v} = 0$, the vectors are perfectly **orthogonal** (perpendicular) at 90 degrees.

**Example Problem:** Find the angle between $\\vec{u} = \\langle 1, 2, 3 \\rangle$ and $\\vec{v} = \\langle 4, -5, 6 \\rangle$.
1. Dot product: $(1)(4) + (2)(-5) + (3)(6) = 4 - 10 + 18 = 12$
2. Magnitudes: $|\\vec{u}| = \\sqrt{14}$, $|\\vec{v}| = \\sqrt{77}$
3. $\\cos\\theta = \\frac{12}{\\sqrt{14}\\sqrt{77}}$. 
4. $\\theta \\approx 68.6^\\circ$.

## 4. The Cross Product (Vector Product)
Unlike the dot product, the cross product $\\vec{u} \\times \\vec{v}$ yields a *new vector* that is orthogonal to *both* original vectors.
It is calculated using the determinant of a $3 \\times 3$ matrix:
$$ \\vec{u} \\times \\vec{v} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{vmatrix} $$

Geometrically, the magnitude $|\\vec{u} \\times \\vec{v}| = |\\vec{u}| |\\vec{v}| \\sin\\theta$.
This magnitude perfectly equals the **Area of the parallelogram** formed by the two vectors!

## 5. Equations of Lines in 3D
You cannot use $y = mx + b$ in 3D. A line requires two things: a starting point $P_0(x_0, y_0, z_0)$ and a direction vector $\\vec{v} = \\langle a, b, c \\rangle$.
We define the line using a parameter $t$ (think of $t$ as time).
**Parametric Equations:**
$x = x_0 + at$
$y = y_0 + bt$
$z = z_0 + ct$

## 6. Equations of Planes in 3D
A flat plane in 3D space is defined by a point on the plane $P_0(x_0, y_0, z_0)$ and a **Normal Vector** $\\vec{n} = \\langle A, B, C \\rangle$ that points perfectly perpendicular to the entire plane.
Because any vector lying on the plane must be orthogonal to the normal vector, their dot product must be zero:
$$ A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 $$

**Example Problem:** Find the plane passing through three points $P, Q, R$.
1. Create two vectors on the plane: $\\vec{PQ}$ and $\\vec{PR}$.
2. Take their cross product $\\vec{PQ} \\times \\vec{PR}$. This gives you the normal vector $\\vec{n}$.
3. Plug $\\vec{n}$ and point $P$ into the plane equation!

## 7. Intersections and Distances
* **Distance from a point to a plane:** Uses the projection of a vector onto the normal vector. $D = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$.
* **Intersection of two planes:** Two non-parallel planes intersect to form a line. The direction vector of this line is simply the cross product of the two planes' normal vectors!

## 8. Cylindrical Coordinates
Instead of $(x, y, z)$, we can map 3D space using a radius $r$, an angle $\\theta$, and a height $z$. This is just 2D polar coordinates with a vertical $z$-axis stacked on top. It is perfect for analyzing cylinders, pipes, and symmetrical rotation.

## 9. Spherical Coordinates
We can also map 3D space using a radius from the origin $\\rho$, an azimuthal angle $\\theta$ (longitude), and a polar angle $\\phi$ (latitude from the north pole). 
$(x, y, z) \\to (\\rho\\sin\\phi\\cos\\theta, \\rho\\sin\\phi\\sin\\theta, \\rho\\cos\\phi)$
This is the coordinate system used by GPS satellites to pinpoint locations on Earth!

## 10. Insane Level: N-Dimensional Geometry
Who says we have to stop at 3 dimensions? Using vectors, we can instantly generalize geometry to 4, 5, or 100 dimensions!
A sphere in $n$-dimensions (a hypersphere) is simply the set of all vectors $\\vec{v}$ where $|\\vec{v}| = R$.
Using the dot product formula, we can calculate the exact angle between two diagonal lines in a 10-dimensional hypercube. Linear algebra allows our math to explore dimensions our physical brains are utterly incapable of visualizing!


`,


  'Conic Sections': `
# Conic Sections: The Geometry of Orbits

## 1. Slicing the Cone
Over 2,000 years ago, Apollonius of Perga discovered that if you take a double-napped cone (two ice cream cones stacked tip-to-tip) and slice it with a flat plane at different angles, you produce four perfectly beautiful 2D curves: the **Circle**, the **Ellipse**, the **Parabola**, and the **Hyperbola**.
These curves, studied purely for their geometric beauty by the ancient Greeks, turned out to be the exact trajectories of planets, comets, and spacecraft in Newtonian physics!

## 2. The General Equation
Every single conic section can be represented by a general second-degree algebraic equation:
$$ Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0 $$
By looking at the discriminant $B^2 - 4AC$, you can instantly identify the shape:
* $B^2 - 4AC < 0$: Ellipse (or Circle)
* $B^2 - 4AC = 0$: Parabola
* $B^2 - 4AC > 0$: Hyperbola

## 3. The Circle
A circle is formed when the cutting plane is perfectly horizontal.
* **Geometric Definition**: The set of all points $(x,y)$ that are a fixed distance (radius $r$) from a center point $(h,k)$.
* **Standard Equation**: 
  $$ (x - h)^2 + (y - k)^2 = r^2 $$

## 4. The Parabola
A parabola is formed when the plane slices parallel to the slanted edge of the cone.
* **Geometric Definition**: The set of all points perfectly equidistant from a fixed point (the **Focus**) and a fixed line (the **Directrix**).
* **Standard Equation (Vertical)**: $(x - h)^2 = 4p(y - k)$
* **Standard Equation (Horizontal)**: $(y - k)^2 = 4p(x - h)$
The distance $p$ is the distance from the vertex to the focus.
* **Optical Property**: Any light ray traveling perfectly straight down into a parabolic mirror will reflect and hit the focus perfectly. This is how satellite dishes and telescope mirrors work!

## 5. The Ellipse
An ellipse is formed when the plane slices the cone at a shallow angle.
* **Geometric Definition**: The set of all points where the *sum* of the distances to two fixed points (the **Foci**) is perfectly constant.
* **Standard Equation**:
  $$ \\frac{(x - h)^2}{a^2} + \\frac{(y - k)^2}{b^2} = 1 $$
Here, $a$ is the semi-major axis (longest radius) and $b$ is the semi-minor axis. 
The foci are located at a distance $c$ from the center, where $c^2 = a^2 - b^2$.
* **Kepler's First Law**: Every planet in our solar system orbits the Sun in a perfect ellipse, with the Sun located exactly at one of the two foci!

## 6. The Hyperbola
A hyperbola is formed when the plane slices vertically through *both* halves of the double cone, creating two mirrored, U-shaped branches.
* **Geometric Definition**: The set of all points where the *difference* of the distances to two foci is perfectly constant.
* **Standard Equation (Horizontal)**:
  $$ \\frac{(x - h)^2}{a^2} - \\frac{(y - k)^2}{b^2} = 1 $$
Unlike an ellipse, a hyperbola has strict **Asymptotes** (diagonal lines the curve approaches but never touches).
* **Physical Application**: If a rogue comet flies into our solar system incredibly fast, it won't be trapped in an elliptical orbit. It will slingshot around the Sun and fly off into deep space forever, tracing a perfect hyperbolic path.

## 7. Eccentricity ($e$)
A single number, **Eccentricity ($e$)**, defines the "squished-ness" of any conic section.
$$ e = \\frac{c}{a} $$
* $e = 0$: Perfect Circle.
* $0 < e < 1$: Ellipse. (Earth's orbit has $e = 0.0167$, it's nearly circular!).
* $e = 1$: Parabola.
* $e > 1$: Hyperbola.

## 8. Polar Coordinates and Conics
In astrophysics, we don't use $(x,y)$ grids to track planets. We use polar coordinates $(r, \\theta)$ with the Sun at the origin.
Remarkably, all four conic sections collapse into ONE single, elegant equation in polar coordinates:
$$ r = \\frac{ed}{1 \\pm e \\cos\\theta} $$
This single equation governs the motion of every orbiting body in the universe!

## 9. Degenerate Conics
What happens if the slicing plane passes perfectly through the sharp tip (the apex) of the double cone?
You don't get curves. You get **Degenerate Conics**:
1. A single point (a collapsed circle/ellipse).
2. A single straight line (a collapsed parabola).
3. Two intersecting straight lines (a collapsed hyperbola).

## 10. Insane Level: Projective Geometry
Why do a parabola and hyperbola look so different on paper, yet come from the same cone?
In the 1600s, Girard Desargues invented **Projective Geometry**. He realized that if you add a "line at infinity" to our flat 2D plane, all conic sections are actually the exact same shape!
A parabola is just an ellipse that is tangent to the line at infinity. A hyperbola is just an ellipse that intersects the line at infinity twice! To the universe, there is only one shape.


`,


  'Radial Kinematics & Polar Dynamics': `
# Radial Kinematics & Polar Dynamics

## 1. Beyond the Cartesian Grid
When tracking a rocket launch or a planet in orbit, using a standard $(x,y)$ grid is incredibly mathematically clumsy. The math simplifies beautifully if we switch to **Polar Coordinates**, tracking the object using its distance from the origin ($r$) and its angle ($\\theta$).

## 2. Position in Polar Coordinates
Instead of $\\vec{r} = x\\hat{i} + y\\hat{j}$, we define two new dynamic unit vectors that rotate with the object:
* $\\hat{e}_r$: Points straight outwards from the origin.
* $\\hat{e}_\\theta$: Points perpendicular to $r$, in the direction of increasing angle.
The position vector is astonishingly simple:
$$ \\vec{r} = r \\hat{e}_r $$

## 3. Velocity in Polar Coordinates
Taking the derivative of position is tricky because, unlike $\\hat{i}$ and $\\hat{j}$, the unit vector $\\hat{e}_r$ *changes direction* as the object moves! We must use the product rule.
$$ \\vec{v} = \\dot{r}\\hat{e}_r + r\\dot{\\theta}\\hat{e}_\\theta $$
This means the velocity has two distinct parts:
1. **Radial Velocity ($\\dot{r}$)**: How fast it moves away from the origin.
2. **Transverse Velocity ($r\\dot{\\theta}$)**: How fast it sweeps across the angle.

## 4. Acceleration in Polar Coordinates
Taking another derivative yields an even more complex formula with four terms:
$$ \\vec{a} = (\\ddot{r} - r\\dot{\\theta}^2)\\hat{e}_r + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\hat{e}_\\theta $$
This beautiful equation dictates orbital mechanics!

## Derivation of Polar Acceleration (The Coriolis Term)
Let's rigorously prove the acceleration formula and discover the mysterious Coriolis term: $2\\dot{r}\\dot{\\theta}$.

**Step 1:** The derivatives of the unit vectors.
As the object rotates by $d\\theta$, the vector $\\hat{e}_r$ tilts towards $\\hat{e}_\\theta$, and $\\hat{e}_\\theta$ tilts towards $-\\hat{e}_r$.
Calculus proves:
$\\frac{d\\hat{e}_r}{dt} = \\dot{\\theta}\\hat{e}_\\theta$
$\\frac{d\\hat{e}_\\theta}{dt} = -\\dot{\\theta}\\hat{e}_r$

**Step 2:** Start with the velocity vector.
$$ \\vec{v} = \\dot{r}\\hat{e}_r + r\\dot{\\theta}\\hat{e}_\\theta $$

**Step 3:** Take the time derivative $\\vec{a} = \\frac{d\\vec{v}}{dt}$.
We must apply the product rule to *both* terms!
For the first term ($\\dot{r}\\hat{e}_r$):
$$ \\frac{d}{dt}(\\dot{r}\\hat{e}_r) = \\ddot{r}\\hat{e}_r + \\dot{r}\\frac{d\\hat{e}_r}{dt} = \\ddot{r}\\hat{e}_r + \\dot{r}(\\dot{\\theta}\\hat{e}_\\theta) $$

For the second term ($r\\dot{\\theta}\\hat{e}_\\theta$), apply the product rule across all three variables:
$$ \\frac{d}{dt}(r\\dot{\\theta}\\hat{e}_\\theta) = \\dot{r}\\dot{\\theta}\\hat{e}_\\theta + r\\ddot{\\theta}\\hat{e}_\\theta + r\\dot{\\theta}\\frac{d\\hat{e}_\\theta}{dt} $$
Substitute the unit vector derivative:
$$ = \\dot{r}\\dot{\\theta}\\hat{e}_\\theta + r\\ddot{\\theta}\\hat{e}_\\theta - r\\dot{\\theta}^2\\hat{e}_r $$

**Step 4:** Combine all terms.
$$ \\vec{a} = \\left( \\ddot{r}\\hat{e}_r + \\dot{r}\\dot{\\theta}\\hat{e}_\\theta \\right) + \\left( \\dot{r}\\dot{\\theta}\\hat{e}_\\theta + r\\ddot{\\theta}\\hat{e}_\\theta - r\\dot{\\theta}^2\\hat{e}_r \\right) $$

**Step 5:** Group by $\\hat{e}_r$ and $\\hat{e}_\\theta$.
$$ \\vec{a} = (\\ddot{r} - r\\dot{\\theta}^2)\\hat{e}_r + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\hat{e}_\\theta $$
Q.E.D.
* $\\ddot{r}$ is radial acceleration.
* $-r\\dot{\\theta}^2$ is centripetal acceleration.
* $r\\ddot{\\theta}$ is angular acceleration.
* $2\\dot{r}\\dot{\\theta}$ is the **Coriolis Acceleration**—a bizarre fictitious force you feel when you walk radially outwards on a spinning merry-go-round!


`,


  'Algebra Fundamentals': `
# Algebra Fundamentals: The Architecture of Logic

## 1. Variables and Abstraction
Algebra is the transition from arithmetic (working with specific numbers like $5+3$) to true mathematics (working with generalized structures like $a+b$). A variable like $x$ is not a "missing number"; it is a placeholder for *any* number, allowing us to discover universal laws that apply to all numbers simultaneously.

## 2. Polynomials
A polynomial is an expression consisting of variables and coefficients, that involves only the operations of addition, subtraction, multiplication, and non-negative integer exponents.
$$ P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0 $$
The highest power $n$ is the **degree** of the polynomial, which dictates exactly how many complex roots the equation has (The Fundamental Theorem of Algebra).

## 3. Factoring and Expanding
* **Expanding**: Using the distributive property (FOIL) to multiply polynomials. $(x+a)(x+b) = x^2 + (a+b)x + ab$.
* **Factoring**: The reverse process, breaking a complex polynomial down into irreducible prime pieces. Example: $x^2 - y^2 = (x-y)(x+y)$.

## 4. Rational Expressions
A rational expression is a fraction where both the numerator and the denominator are polynomials. 
$$ \\frac{P(x)}{Q(x)} $$
They behave exactly like normal fractions, requiring common denominators to add or subtract, but you must strictly state the domain restrictions (any $x$ that makes $Q(x) = 0$ is mathematically illegal).

## Derivation of the Difference of Two Squares
Prove that $a^2 - b^2 = (a-b)(a+b)$.

**Step 1:** Start with the right-hand side.
$$ (a - b)(a + b) $$

**Step 2:** Distribute $a$ to the second binomial.
$$ a(a + b) - b(a + b) $$

**Step 3:** Distribute fully.
$$ a^2 + ab - ba - b^2 $$

**Step 4:** Cancel terms.
By the commutative property of multiplication, $ab = ba$, so they perfectly annihilate each other:
$$ a^2 - b^2 $$
Q.E.D.

## Derivation of the Difference of Two Cubes
Prove that $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$.

**Step 1:** Expand the right-hand side.
$$ (a - b)(a^2 + ab + b^2) $$

**Step 2:** Distribute $a$ to the trinomial.
$$ a(a^2 + ab + b^2) = a^3 + a^2b + ab^2 $$

**Step 3:** Distribute $-b$ to the trinomial.
$$ -b(a^2 + ab + b^2) = -a^2b - ab^2 - b^3 $$

**Step 4:** Combine all terms.
$$ a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3 $$

**Step 5:** Cancel the middle terms.
The $+a^2b$ cancels with $-a^2b$, and the $+ab^2$ cancels with $-ab^2$:
$$ a^3 - b^3 $$
Q.E.D.


`,


  'Trigonometry': `
# Trigonometry: The Geometry of Circles

## 1. The Unit Circle
Trigonometry is not about triangles; it is about circles. The fundamental definition of $\\sin(\\theta)$ and $\\cos(\\theta)$ is the $y$ and $x$ coordinate of a point traveling around a circle of radius $1$.
$$ x^2 + y^2 = 1 \\implies \\cos^2\\theta + \\sin^2\\theta = 1 $$

## 2. Radians vs. Degrees
Degrees ($360^\\circ$) are an arbitrary human invention from the Babylonians. 
**Radians** are the natural language of the universe. An angle of $1$ radian means the arc length on the edge of the circle is exactly equal to the radius. Since the circumference is $2\\pi r$, a full circle is $2\\pi$ radians.

## 3. Sine, Cosine, and Tangent
* $\\sin(\\theta) = \\text{Opposite} / \\text{Hypotenuse}$
* $\\cos(\\theta) = \\text{Adjacent} / \\text{Hypotenuse}$
* $\\tan(\\theta) = \\sin(\\theta) / \\cos(\\theta) = \\text{Opposite} / \\text{Adjacent}$

## 4. Trigonometric Identities
Trig identities are equations that are universally true for all angles. They allow us to radically simplify complex mathematical expressions in physics and engineering.
* **Pythagorean Identity**: $\\sin^2\\theta + \\cos^2\\theta = 1$
* **Double Angle Identity**: $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$
* **Angle Addition Identity**: $\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$

## Derivation of the Pythagorean Identity
Prove that $\\sin^2\\theta + \\cos^2\\theta = 1$ for any angle.

**Step 1:** Draw a right triangle inside a circle.
Let the hypotenuse be the radius $r$ of the circle, making an angle $\\theta$ with the x-axis. The base of the triangle is $x$, and the height is $y$.

**Step 2:** Apply the Pythagorean Theorem.
$$ x^2 + y^2 = r^2 $$

**Step 3:** Use SOH CAH TOA.
By definition, $\\cos\\theta = \\frac{x}{r}$ and $\\sin\\theta = \\frac{y}{r}$.
Therefore, $x = r\\cos\\theta$ and $y = r\\sin\\theta$.

**Step 4:** Substitute $x$ and $y$ back into the theorem.
$$ (r\\cos\\theta)^2 + (r\\sin\\theta)^2 = r^2 $$
$$ r^2\\cos^2\\theta + r^2\\sin^2\\theta = r^2 $$

**Step 5:** Divide the entire equation by $r^2$.
$$ \\cos^2\\theta + \\sin^2\\theta = 1 $$
Q.E.D.

## Derivation of the Law of Cosines
Prove that $c^2 = a^2 + b^2 - 2ab\\cos(C)$ for any arbitrary triangle.

**Step 1:** Set up the geometry.
Drop a perpendicular height $h$ from the top vertex of the triangle down to the base. This splits the base into two segments: $x$ and $b-x$. 
This forms two smaller right-angled triangles inside the big triangle.

**Step 2:** Use the Pythagorean Theorem on both small triangles.
Triangle 1 (left): $x^2 + h^2 = a^2$
Triangle 2 (right): $(b-x)^2 + h^2 = c^2$

**Step 3:** Isolate $h^2$ in Triangle 1 and substitute it into Triangle 2.
$h^2 = a^2 - x^2$
Substitute:
$$ (b-x)^2 + (a^2 - x^2) = c^2 $$

**Step 4:** Expand the binomial and simplify.
$$ b^2 - 2bx + x^2 + a^2 - x^2 = c^2 $$
The $x^2$ terms perfectly cancel!
$$ a^2 + b^2 - 2bx = c^2 $$

**Step 5:** Express $x$ in terms of angles.
Looking at Triangle 1, $\\cos(C) = \\frac{x}{a}$. Therefore, $x = a\\cos(C)$.
Substitute this back into the equation:
$$ a^2 + b^2 - 2b(a\\cos C) = c^2 $$
$$ c^2 = a^2 + b^2 - 2ab\\cos C $$
Q.E.D. This is a brilliant, generalized version of the Pythagorean theorem that works even when the triangle is not $90^\\circ$!

`,

  'Vector Calculus': `
# Vector Calculus: Grad, Div, Curl & The Fundamental Theorems

## 1. Scalar vs. Vector Fields
* **Scalar Field**: Assigns a single number to every point in space (e.g., Temperature in a room).
* **Vector Field**: Assigns a vector (magnitude and direction) to every point in space (e.g., Wind velocity, Gravity, Magnetic Fields).

## 2. The Gradient ($\\nabla f$)
The Gradient takes a scalar field and turns it into a vector field. It points in the direction of the *steepest ascent*, and its magnitude is the rate of that ascent.
$$ \\nabla f = \\left\\langle \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z} \\right\\rangle $$

## 3. Divergence ($\\nabla \\cdot \\vec{F}$)
Divergence measures how much a vector field acts like a "source" or a "sink" at a given point. If you drop confetti in a flowing river, divergence measures if the confetti spreads out (positive) or bunches together (negative).
$$ \\nabla \\cdot \\vec{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z} $$

## 4. Curl ($\\nabla \\times \\vec{F}$)
Curl measures the macroscopic rotation or "swirliness" of a vector field. If you drop a tiny paddlewheel in a river, the curl vector tells you exactly how fast it spins, and the direction points along the axis of rotation.
$$ \\nabla \\times \\vec{F} = \\text{det} \\begin{pmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\ P & Q & R \\end{pmatrix} $$

## 5. The Grand Theorems
Vector calculus culminates in three generalized versions of the Fundamental Theorem of Calculus. They all state that the integral of a "derivative" over a region is equal to the value of the function on the *boundary* of that region:
1. **Gradient Theorem (Line Integrals)**
2. **Stokes' Theorem (Surface Integrals of Curl)**
3. **Divergence Theorem (Volume Integrals of Flux)**

## Derivation of the Gradient Theorem (Fundamental Theorem of Line Integrals)
Prove that $\\int_C \\nabla f \\cdot d\\vec{r} = f(B) - f(A)$.

**Step 1:** Parameterize the path $C$.
Let the path from point $A$ to point $B$ be parameterized by a vector function $\\vec{r}(t) = \\langle x(t), y(t), z(t) \\rangle$, for $a \\le t \\le b$.
Thus, $\\vec{r}(a) = A$ and $\\vec{r}(b) = B$.

**Step 2:** Write the line integral in terms of $t$.
$$ \\int_C \\nabla f \\cdot d\\vec{r} = \\int_a^b \\left( \\nabla f(\\vec{r}(t)) \\cdot \\frac{d\\vec{r}}{dt} \\right) dt $$

**Step 3:** Expand the dot product.
$$ = \\int_a^b \\left( \\frac{\\partial f}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial f}{\\partial y}\\frac{dy}{dt} + \\frac{\\partial f}{\\partial z}\\frac{dz}{dt} \\right) dt $$

**Step 4:** Recognize the Multivariable Chain Rule.
The entire expression in the parentheses is exactly the time derivative of the composite function $f(x(t), y(t), z(t))$!
$$ = \\int_a^b \\frac{d}{dt} [f(\\vec{r}(t))] \\, dt $$

**Step 5:** Apply the 1D Fundamental Theorem of Calculus.
The integral of a total derivative simply evaluates the original function at its bounds:
$$ = \\left[ f(\\vec{r}(t)) \\right]_a^b $$
$$ = f(\\vec{r}(b)) - f(\\vec{r}(a)) $$
$$ = f(B) - f(A) $$
Q.E.D. This proves that for a conservative vector field, the path taken between two points absolutely does not matter! The total work done depends purely on the endpoints.


`
,
  'Single-Variable Calculus': `
# Single-Variable Calculus: The Mathematics of Change

## 1. Introduction to the Limit
Calculus is the mathematics of continuous change, and its foundation is the **Limit**.
Before calculus, math was static. You could find the average speed of a car over 1 hour, but finding its exact speed at an instantaneous moment ($t = 2.500$ seconds) resulted in dividing by zero: $\\frac{0}{0}$.
The limit allows us to infinitely approach that moment without ever touching it. We say $\\lim_{x \\to a} f(x) = L$ if $f(x)$ gets arbitrarily close to $L$ as $x$ gets arbitrarily close to $a$.

## 2. The Derivative (Differential Calculus)
The derivative $f'(x)$ is the instantaneous rate of change of a function. Geometrically, it is the slope of the tangent line to the curve at a specific point.
It is defined by the difference quotient:
$$ f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} $$

## 3. Rules of Differentiation
Using the limit definition for every problem would take hours. Instead, we use derived rules:
1. **Power Rule**: $\\frac{d}{dx} x^n = n x^{n-1}$
2. **Product Rule**: $\\frac{d}{dx} [u(x)v(x)] = u'v + uv'$
3. **Quotient Rule**: $\\frac{d}{dx} \\left[\\frac{u(x)}{v(x)}\\right] = \\frac{u'v - uv'}{v^2}$
4. **Chain Rule**: $\\frac{d}{dx} f(g(x)) = f'(g(x))g'(x)$

## 4. Derivatives of Transcendental Functions
* **Trigonometry**: $\\frac{d}{dx}\\sin(x) = \\cos(x)$, $\\frac{d}{dx}\\cos(x) = -\\sin(x)$, $\\frac{d}{dx}\\tan(x) = \\sec^2(x)$.
* **Exponentials**: The magical property of $e^x$ is that it is its own derivative! $\\frac{d}{dx} e^x = e^x$.
* **Logarithms**: $\\frac{d}{dx} \\ln(x) = \\frac{1}{x}$.

## 5. The Integral (Integral Calculus)
While the derivative finds the slope, the **Integral** finds the area under the curve.
The Definite Integral is defined as the limit of a Riemann Sum (adding up an infinite number of infinitely thin rectangles):
$$ \\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*)\\Delta x $$

## 6. The Fundamental Theorem of Calculus (FTC)
The most brilliant discovery in human history: Finding slopes (derivatives) and finding areas (integrals) are **exact inverse operations**.
If you integrate a rate of change, you get the total accumulated change:
$$ \\int_a^b f'(x)\\,dx = f(b) - f(a) $$

## Derivation of the Power Rule
Let's prove that $\\frac{d}{dx} x^n = n x^{n-1}$ using the Binomial Theorem.

**Step 1:** Plug $f(x) = x^n$ into the limit definition.
$$ f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^n - x^n}{h} $$

**Step 2:** Expand $(x+h)^n$ using the Binomial Theorem.
$$ (x+h)^n = x^n + nx^{n-1}h + \\frac{n(n-1)}{2}x^{n-2}h^2 + \\dots + h^n $$

**Step 3:** Substitute back and subtract $x^n$.
$$ f'(x) = \\lim_{h \\to 0} \\frac{x^n + nx^{n-1}h + h^2(\\dots) - x^n}{h} $$
The $x^n$ terms cancel out.

**Step 4:** Factor out $h$ and divide.
$$ f'(x) = \\lim_{h \\to 0} \\frac{h(nx^{n-1} + h(\\dots))}{h} = \\lim_{h \\to 0} [nx^{n-1} + h(\\dots)] $$

**Step 5:** Evaluate the limit as $h \\to 0$.
Every term with an $h$ goes to $0$, leaving only the first term:
$$ f'(x) = nx^{n-1} $$
Q.E.D.

## Derivation of the Product Rule
How do we prove $\\frac{d}{dx} [u(x)v(x)] = u'v + uv'$?

**Step 1:** Use the limit definition.
$$ \\lim_{h \\to 0} \\frac{u(x+h)v(x+h) - u(x)v(x)}{h} $$

**Step 2:** The magical algebraic trick. Add and subtract $u(x+h)v(x)$ in the numerator!
$$ \\lim_{h \\to 0} \\frac{u(x+h)v(x+h) - u(x+h)v(x) + u(x+h)v(x) - u(x)v(x)}{h} $$

**Step 3:** Group the terms.
$$ \\lim_{h \\to 0} \\left[ u(x+h) \\frac{v(x+h) - v(x)}{h} + v(x) \\frac{u(x+h) - u(x)}{h} \\right] $$

**Step 4:** Take the limits.
As $h \\to 0$, $u(x+h) \\to u(x)$. The fractions become the definitions of $v'(x)$ and $u'(x)$ respectively.
$$ = u(x)v'(x) + v(x)u'(x) $$
Q.E.D.

## Derivation of the Quotient Rule
Prove $\\frac{d}{dx} \\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}$.

**Step 1:** We can rewrite division as multiplication using a negative exponent.
$$ y = u(x) \\cdot [v(x)]^{-1} $$

**Step 2:** Apply the Product Rule and Chain Rule!
$$ y' = u'(x)[v(x)]^{-1} + u(x) \\cdot \\frac{d}{dx}([v(x)]^{-1}) $$
By the chain rule, $\\frac{d}{dx}([v(x)]^{-1}) = -1[v(x)]^{-2} \\cdot v'(x)$.
$$ y' = \\frac{u'}{v} - \\frac{uv'}{v^2} $$

**Step 3:** Find a common denominator ($v^2$).
Multiply the first term by $\\frac{v}{v}$:
$$ y' = \\frac{u'v}{v^2} - \\frac{uv'}{v^2} = \\frac{u'v - uv'}{v^2} $$
Q.E.D.

## Derivation of the Derivative of $\\sin(x)$
Prove $\\frac{d}{dx} \\sin(x) = \\cos(x)$.

**Step 1:** Limit definition.
$$ \\lim_{h \\to 0} \\frac{\\sin(x+h) - \\sin(x)}{h} $$

**Step 2:** Use the trigonometric angle addition identity: $\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$.
$$ \\lim_{h \\to 0} \\frac{\\sin(x)\\cos(h) + \\cos(x)\\sin(h) - \\sin(x)}{h} $$

**Step 3:** Group the $\\sin(x)$ terms together.
$$ \\lim_{h \\to 0} \\left[ \\sin(x) \\frac{\\cos(h) - 1}{h} + \\cos(x) \\frac{\\sin(h)}{h} \\right] $$

**Step 4:** Apply fundamental trigonometric limits.
We know that $\\lim_{h \\to 0} \\frac{\\sin(h)}{h} = 1$ and $\\lim_{h \\to 0} \\frac{\\cos(h) - 1}{h} = 0$.
$$ = \\sin(x)(0) + \\cos(x)(1) = \\cos(x) $$
Q.E.D.

## Derivation of Integration by Parts
Where does the formula $\\int u\\,dv = uv - \\int v\\,du$ come from? It is just the Product Rule in reverse!

**Step 1:** Start with the Product Rule for derivatives.
$$ \\frac{d}{dx}[u(x)v(x)] = u'(x)v(x) + u(x)v'(x) $$

**Step 2:** Integrate both sides with respect to $x$.
$$ \\int \\frac{d}{dx}[u(x)v(x)]\\,dx = \\int v(x)u'(x)\\,dx + \\int u(x)v'(x)\\,dx $$

**Step 3:** The integral of a derivative cancels out (by FTC).
$$ u(x)v(x) = \\int v(x) \\,du + \\int u(x) \\,dv $$

**Step 4:** Rearrange the equation to solve for $\\int u \\,dv$.
$$ \\int u \\,dv = uv - \\int v \\,du $$
Q.E.D.

## Derivation of U-Substitution
Where does the formula $\\int f(g(x))g'(x)\\,dx = \\int f(u)\\,du$ come from? It is just the Chain Rule in reverse!

**Step 1:** Start with the Chain Rule for derivatives.
Let $F(x)$ be the antiderivative of $f(x)$, meaning $F'(x) = f(x)$.
$$ \\frac{d}{dx}[F(g(x))] = F'(g(x))g'(x) = f(g(x))g'(x) $$

**Step 2:** Integrate both sides with respect to $x$.
$$ \\int \\frac{d}{dx}[F(g(x))] \\,dx = \\int f(g(x))g'(x) \\,dx $$
$$ F(g(x)) = \\int f(g(x))g'(x) \\,dx $$

**Step 3:** Let $u = g(x)$. Then $du = g'(x)dx$.
Since $F(u)$ is the integral of $f(u)$, we can write:
$$ \\int f(u) \\,du = \\int f(g(x))g'(x) \\,dx $$
Q.E.D.

## Derivation of the Chain Rule
How do we rigorously prove the Chain Rule: $\\frac{d}{dx}[f(g(x))] = f'(g(x))g'(x)$?

**Step 1:** Use the limit definition of the derivative for the composite function.
$$ \\lim_{h \\to 0} \\frac{f(g(x+h)) - f(g(x))}{h} $$

**Step 2:** A clever algebraic multiplication.
Multiply the numerator and denominator by the difference in the inner function, $[g(x+h) - g(x)]$:
$$ \\lim_{h \\to 0} \\left( \\frac{f(g(x+h)) - f(g(x))}{g(x+h) - g(x)} \\cdot \\frac{g(x+h) - g(x)}{h} \\right) $$

**Step 3:** Separate the limits.
$$ \\lim_{h \\to 0} \\left( \\frac{f(g(x+h)) - f(g(x))}{g(x+h) - g(x)} \\right) \\cdot \\lim_{h \\to 0} \\left( \\frac{g(x+h) - g(x)}{h} \\right) $$

**Step 4:** Evaluate the second limit.
The second term is precisely the definition of $g'(x)$.
$$ \\dots \\cdot g'(x) $$

**Step 5:** Evaluate the first limit using substitution.
Let $k = g(x+h) - g(x)$. As $h \\to 0$, $k \\to 0$ (assuming $g$ is continuous). 
Also note that $g(x+h) = g(x) + k$.
Substitute $k$ into the first limit:
$$ \\lim_{k \\to 0} \\frac{f(g(x) + k) - f(g(x))}{k} $$
This is exactly the definition of the derivative of $f$, evaluated at $g(x)$, which is $f'(g(x))$.

**Step 6:** Combine the results.
$$ f'(g(x)) \\cdot g'(x) $$
Q.E.D.

## Derivation of the Derivative of $e^x$
Why is the derivative of $e^x$ exactly $e^x$?

**Step 1:** The limit definition.
$$ \\frac{d}{dx} e^x = \\lim_{h \\to 0} \\frac{e^{x+h} - e^x}{h} $$

**Step 2:** Use the exponent rule $e^{A+B} = e^A e^B$.
$$ \\lim_{h \\to 0} \\frac{e^x e^h - e^x}{h} $$

**Step 3:** Factor out the $e^x$.
Because $e^x$ does not depend on $h$, it acts as a constant and can be pulled outside the limit:
$$ e^x \\cdot \\lim_{h \\to 0} \\frac{e^h - 1}{h} $$

**Step 4:** The definition of Euler's Number ($e$).
The value $e$ is uniquely mathematically defined as the exact base that makes the slope of the curve at $x=0$ perfectly equal to $1$. Therefore, by definition:
$$ \\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1 $$

**Step 5:** Final substitution.
$$ e^x \\cdot 1 = e^x $$
Q.E.D.

## Derivation of the Derivative of $\\ln(x)$
Prove that $\\frac{d}{dx} \\ln(x) = \\frac{1}{x}$.

**Step 1:** Start with the inverse relationship between exponentials and logarithms.
Let $y = \\ln(x)$.
Therefore, $e^y = x$.

**Step 2:** Differentiate both sides implicitly with respect to $x$.
$$ \\frac{d}{dx} [e^y] = \\frac{d}{dx} [x] $$

**Step 3:** Apply the Chain Rule on the left side.
Since $y$ is a function of $x$, the derivative of $e^y$ is $e^y$ multiplied by the derivative of the inside ($y'$):
$$ e^y \\cdot y' = 1 $$

**Step 4:** Isolate $y'$.
$$ y' = \\frac{1}{e^y} $$

**Step 5:** Substitute $x$ back into the equation.
Since we established in Step 1 that $e^y = x$:
$$ y' = \\frac{1}{x} $$
Q.E.D.

## Derivation of the Derivative of $\\tan(x)$
Prove $\\frac{d}{dx} \\tan(x) = \\sec^2(x)$.

**Step 1:** Rewrite tangent using sine and cosine.
$$ \\tan(x) = \\frac{\\sin(x)}{\\cos(x)} $$

**Step 2:** Apply the Quotient Rule.
Let $u = \\sin(x)$ and $v = \\cos(x)$. 
We know $u' = \\cos(x)$ and $v' = -\\sin(x)$.
The quotient rule states: $\\frac{u'v - uv'}{v^2}$
$$ \\frac{(\\cos(x))(\\cos(x)) - (\\sin(x))(-\\sin(x))}{(\\cos(x))^2} $$

**Step 3:** Simplify the numerator.
$$ \\frac{\\cos^2(x) + \\sin^2(x)}{\\cos^2(x)} $$

**Step 4:** Apply the Pythagorean Identity.
We know that $\\cos^2(x) + \\sin^2(x) = 1$.
$$ \\frac{1}{\\cos^2(x)} $$

**Step 5:** Convert back to secant.
Since $\\sec(x) = \\frac{1}{\\cos(x)}$, squaring it yields:
$$ \\sec^2(x) $$
Q.E.D.

## Derivation of the Derivative of $\\arcsin(x)$
Prove $\\frac{d}{dx} \\arcsin(x) = \\frac{1}{\\sqrt{1 - x^2}}$.

**Step 1:** Set up the inverse equation.
Let $y = \\arcsin(x)$.
This implies $\\sin(y) = x$.

**Step 2:** Differentiate implicitly with respect to $x$.
$$ \\cos(y) \\cdot y' = 1 $$
$$ y' = \\frac{1}{\\cos(y)} $$

**Step 3:** Express $\\cos(y)$ in terms of $x$.
Using the Pythagorean identity $\\sin^2(y) + \\cos^2(y) = 1$:
$$ \\cos(y) = \\sqrt{1 - \\sin^2(y)} $$
Since we defined $\\sin(y) = x$, we can substitute $x$ back in:
$$ \\cos(y) = \\sqrt{1 - x^2} $$

**Step 4:** Substitute the denominator.
$$ y' = \\frac{1}{\\sqrt{1 - x^2}} $$
Q.E.D.

## Derivation of the Arc Length Formula
Why is the length of a curve given by $L = \\int \\sqrt{1 + (f'(x))^2} \\, dx$?

**Step 1:** Approximate the curve with tiny straight line segments.
By the Pythagorean theorem, the length of a microscopic straight line segment $dL$ is:
$$ (dL)^2 = (dx)^2 + (dy)^2 $$
$$ dL = \\sqrt{(dx)^2 + (dy)^2} $$

**Step 2:** Factor out $dx$ from the square root.
$$ dL = \\sqrt{(dx)^2 \\left( 1 + \\frac{(dy)^2}{(dx)^2} \\right)} $$
$$ dL = \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2} \\cdot dx $$

**Step 3:** Sum up all the microscopic segments.
To find the total length, we integrate $dL$ from the starting point $a$ to the ending point $b$:
$$ L = \\int_a^b \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2} \\, dx $$
Q.E.D.

## Derivation of the Fundamental Theorem of Calculus (Part 1)
Prove that $\\frac{d}{dx} \\int_a^x f(t)\\,dt = f(x)$.

**Step 1:** Define the area function.
Let $A(x) = \\int_a^x f(t)\\,dt$. This represents the area under the curve $f(t)$ from a fixed point $a$ to a moving point $x$.

**Step 2:** Apply the limit definition of the derivative to $A(x)$.
$$ A'(x) = \\lim_{h \\to 0} \\frac{A(x+h) - A(x)}{h} $$

**Step 3:** Geometrically interpret the numerator.
$A(x+h) - A(x)$ is the area from $a$ to $x+h$, minus the area from $a$ to $x$. This leaves only the tiny vertical strip of area from $x$ to $x+h$:
$$ \\int_x^{x+h} f(t)\\,dt $$

**Step 4:** Approximate the tiny strip's area.
For a very small width $h$, the area of this strip is approximately a rectangle with width $h$ and height $f(x)$:
$$ \\int_x^{x+h} f(t)\\,dt \\approx f(x) \\cdot h $$

**Step 5:** Substitute back into the limit.
$$ A'(x) = \\lim_{h \\to 0} \\frac{f(x) \\cdot h}{h} $$
The $h$'s perfectly cancel:
$$ A'(x) = f(x) $$
Q.E.D. This proves that taking the derivative of an integral simply returns the original function!


`
}
