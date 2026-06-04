# Linear Equations and Systems

## 1. Linear Equations in One Variable
A linear equation in one variable takes the form:
$$ ax + b = 0 $$
where $a, b \in \mathbb{R}$ and $a \neq 0$. The unique solution is $x = -\frac{b}{a}$.

## 2. Linear Equations in Two Variables
A linear equation in two variables forms a straight line on a Cartesian plane:
$$ ax + by = c $$
The slope-intercept form is $y = mx + c$, where $m = -\frac{a}{b}$ is the slope and $c$ is the y-intercept.

## 3. Systems of Linear Equations
A system of linear equations in two variables:
$$ a_1x + b_1y = c_1 $$
$$ a_2x + b_2y = c_2 $$

Solutions represent the intersection of the two lines. The system can have:
- **Unique solution:** Lines intersect at exactly one point ($a_1/a_2 \neq b_1/b_2$).
- **No solution:** Lines are parallel ($a_1/a_2 = b_1/b_2 \neq c_1/c_2$).
- **Infinite solutions:** Lines are identical ($a_1/a_2 = b_1/b_2 = c_1/c_2$).

### Methods of Solution
1. **Substitution:** Isolate one variable and substitute it into the other equation.
2. **Elimination:** Add/subtract multiples of equations to eliminate a variable.
3. **Cramer's Rule:** Using determinants for $n \times n$ systems.

## 4. Step-by-Step Solved Examples

### Example 1: Single Variable Equation
**Problem:** Solve $3(2x - 5) - 4(x + 1) = 2x - 7$
**Solution:**
1. Distribute terms: $6x - 15 - 4x - 4 = 2x - 7$
2. Combine like terms: $2x - 19 = 2x - 7$
3. Subtract $2x$ from both sides: $-19 = -7$
4. The statement is false, thus there is **no solution**.

### Example 2: Systems of Equations via Elimination
**Problem:** Solve the system:
1) $3x + 4y = 10$
2) $2x - 3y = 1$
**Solution:**
1. Make coefficients of $x$ match. Multiply (1) by 2 and (2) by 3:
   $6x + 8y = 20$
   $6x - 9y = 3$
2. Subtract the second equation from the first:
   $(6x - 6x) + (8y - (-9y)) = 20 - 3$
   $17y = 17 \implies y = 1$
3. Substitute $y = 1$ back into (2):
   $2x - 3(1) = 1 \implies 2x - 3 = 1 \implies 2x = 4 \implies x = 2$
4. Solution: $(x, y) = (2, 1)$

### Example 3: Systems of Equations via Substitution
**Problem:** Solve the system:
1) $x - 2y = 4$
2) $3x + y = 5$
**Solution:**
1. Isolate $x$ in (1): $x = 2y + 4$
2. Substitute into (2): $3(2y + 4) + y = 5$
3. Distribute and combine: $6y + 12 + y = 5 \implies 7y = 5 - 12 \implies 7y = -7 \implies y = -1$
4. Back-substitute into isolated $x$: $x = 2(-1) + 4 = 2$
5. Solution: $(x, y) = (2, -1)$

### Example 4: Cramer's Rule for a $3 \times 3$ System
**Problem:** Solve for $x$ in the system:
$2x - y + z = 3$
$x + y + z = 4$
$3x - y - 2z = -1$
**Solution:**
1. The determinant of the coefficient matrix $D$:
$$ D = \begin{vmatrix} 2 & -1 & 1 \\ 1 & 1 & 1 \\ 3 & -1 & -2 \end{vmatrix} = 2(-2 - (-1)) - (-1)(-2 - 3) + 1(-1 - 3) $$
$$ D = 2(-1) + 1(-5) + 1(-4) = -2 - 5 - 4 = -11 $$
2. The determinant for $x$ ($D_x$): Replace first column with constants.
$$ D_x = \begin{vmatrix} 3 & -1 & 1 \\ 4 & 1 & 1 \\ -1 & -1 & -2 \end{vmatrix} = 3(-2 - (-1)) - (-1)(-8 - (-1)) + 1(-4 - (-1)) $$
$$ D_x = 3(-1) + 1(-7) + 1(-3) = -3 - 7 - 3 = -13 $$
3. Compute $x = \frac{D_x}{D} = \frac{-13}{-11} = \frac{13}{11}$.
