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

deep_linear_eq = """# Linear Equations: From Basic Algebra to Multidimensional Spaces

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
$$ \\Delta = \\begin{vmatrix} a_1 & b_1 \\\\ a_2 & b_2 \\end{vmatrix} = a_1b_2 - a_2b_1 $$

The solutions for $x$ and $y$ are found by replacing the respective columns with the constants:
$$ x = \\frac{\\Delta_x}{\\Delta} = \\frac{\\begin{vmatrix} c_1 & b_1 \\\\ c_2 & b_2 \\end{vmatrix}}{\\Delta} $$
$$ y = \\frac{\\Delta_y}{\\Delta} = \\frac{\\begin{vmatrix} a_1 & c_1 \\\\ a_2 & c_2 \\end{vmatrix}}{\\Delta} $$
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
$$ \\begin{bmatrix} a_1 & b_1 & c_1 & | & d_1 \\\\ a_2 & b_2 & c_2 & | & d_2 \\\\ a_3 & b_3 & c_3 & | & d_3 \\end{bmatrix} $$

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

To solve ill-conditioned systems safely, computers abandon Gaussian Elimination entirely and use the **Singular Value Decomposition (SVD)** or Tikhonov Regularization to filter out the instability. Linear equations are the foundation of modern computation, but mastering their stability is the true art of numerical analysis."""

content = replace_topic(content, 'Linear equations', deep_linear_eq)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Expanded Linear Equations successfully.")
