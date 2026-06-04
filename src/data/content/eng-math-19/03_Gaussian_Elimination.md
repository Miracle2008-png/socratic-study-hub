# 3. Gaussian Elimination (Row Echelon Form)

How do we systematically solve an Augmented Matrix without getting lost in substitution algebra? We use **Gaussian Elimination**, an algorithm named after Carl Friedrich Gauss (though Chinese mathematicians documented the exact same method 1500 years earlier in the *Nine Chapters on the Mathematical Art*).

The goal of Gaussian Elimination is to manipulate the matrix into a specific triangular shape called **Row Echelon Form (REF)**.

### Row Echelon Form Definition
A matrix is officially in Row Echelon Form if it satisfies three strict physical rules:
1.  All rows that consist entirely of zeros (if there are any) must be pushed to the very bottom of the matrix.
2.  The first non-zero number in any row (called the **Leading Entry** or **Pivot**) must be further to the right than the leading entry of the row above it.
3.  All entries directly below a leading entry must be exactly zero.

Here is a visual example of a matrix successfully reduced into Row Echelon Form:
$$ \begin{bmatrix} \mathbf{2} & -1 & 3 & \big| & 5 \\ 0 & \mathbf{4} & 1 & \big| & -2 \\ 0 & 0 & \mathbf{-3} & \big| & 9 \end{bmatrix} $$

Notice the clear "staircase" pattern of the bolded pivot numbers. The entire bottom-left triangle of the coefficient matrix has been turned into zeros.

### Why is this useful? Back-Substitution!
Once a matrix is forced into this staircase shape, solving the system becomes trivially easy. Let's translate the Row Echelon matrix above back into standard algebra equations:

1.  $2x - y + 3z = 5$
2.  $0x + 4y + z = -2$
3.  $0x + 0y - 3z = 9$

Look at the very last equation. Because we eliminated the $x$ and $y$ variables, it is simply $-3z = 9$.
We can instantly divide by -3 to find **$z = -3$**.

Now that we know $z$, we can use a process called **Back-Substitution**.
We walk exactly one step backwards up the staircase to Equation 2: $4y + z = -2$.
Substitute our known $z$: $4y + (-3) = -2 \implies 4y = 1 \implies \mathbf{y = 0.25}$.

Finally, we walk one more step back up to Equation 1: $2x - y + 3z = 5$.
Substitute our known $y$ and $z$: $2x - (0.25) + 3(-3) = 5$.
$2x - 0.25 - 9 = 5 \implies 2x = 14.25 \implies \mathbf{x = 7.125}$.

By creating that triangle of zeros, we guarantee that the final equation will always have only one variable, allowing us to solve the entire system recursively from the bottom up!
