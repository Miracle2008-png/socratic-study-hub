# 1. Systems of Linear Equations Overview

In engineering and the physical sciences, problems rarely occur in isolation. When you analyze a bridge truss, every single beam interacts with every other beam. When you analyze an electrical grid, every node affects the voltage of the nodes around it. 

These interconnected relationships are modeled mathematically as **Systems of Equations**. When the relationships are strictly proportional—meaning there are no squared terms ($x^2$), no trigonometric functions ($\sin(y)$), and no variables multiplied together ($xy$)—the system is called a **System of Linear Equations**.

### Defining a Linear Equation
A single linear equation with $n$ unknown variables ($x_1, x_2, \dots, x_n$) takes the algebraic form:
$$ a_1 x_1 + a_2 x_2 + a_3 x_3 + \dots + a_n x_n = b $$

Here, the $a$ values are the known constant coefficients (like the resistance in a wire, or the stiffness of a spring), and $b$ is a known constant total (like the total voltage, or total applied force).

### The Geometry of Linear Systems
To truly understand linear systems, we must look at their underlying geometry.
*   **In 2D Space ($x, y$):** A single linear equation like $2x + 3y = 6$ represents a perfectly straight line on a flat plane.
*   **In 3D Space ($x, y, z$):** A single linear equation like $4x - y + 2z = 10$ represents a flat, infinite sheet of paper—a plane.
*   **In n-D Space ($x_1, \dots, x_n$):** A linear equation represents an $(n-1)$-dimensional flat surface called a **Hyperplane**.

### The Three Possible Outcomes
When you have a system of multiple linear equations, "solving the system" geometrically means finding the exact point in space where every single line (or plane) perfectly intersects. 

Because we are dealing exclusively with flat, rigid geometry (lines and planes cannot curve or bend), there are only three mathematical possibilities for any linear system in the universe:

1.  **A Single Unique Solution:** The lines cross at exactly one point. (The system is *Consistent* and *Independent*).
2.  **No Solution:** The lines are perfectly parallel and never touch, or three lines form a triangle with no central crossing point. (The system is *Inconsistent*).
3.  **Infinitely Many Solutions:** The equations are actually describing the exact same line overlapping itself perfectly. Every point on the line is a valid solution. (The system is *Consistent* but *Dependent*).

There is absolutely no such thing as a linear system with exactly two solutions, or exactly five solutions. It is always one, zero, or infinity.
