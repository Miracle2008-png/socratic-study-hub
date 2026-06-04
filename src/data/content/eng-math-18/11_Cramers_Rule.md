# 11. Cramer's Rule

We just learned how to solve a system of equations $AX = B$ by calculating the entire Inverse Matrix ($A^{-1}$). 
However, finding the inverse of a $3\times3$ matrix by hand requires calculating nine separate $2\times2$ determinants to build the Adjugate matrix. It is exhausting.

What if you only care about finding one specific variable? For example, in a massive circuit analysis problem, you have 5 equations and 5 unknown currents, but you ONLY need to know the current $I_3$. 
Finding the entire $5\times5$ inverse matrix just to find one variable is a colossal waste of time.

Gabriel Cramer published a brilliant shortcut in 1750.

### Cramer's Rule
To find the value of a single specific unknown variable $x_i$ in the system $AX = B$:

1.  Calculate the determinant of the main coefficient matrix $A$. Let's call it $D$. (If $D=0$, Cramer's rule fails, and the system has no unique solution).
2.  Take the coefficient matrix $A$. Completely erase the $i$-th column. Replace that column with the answer column vector $B$.
3.  Calculate the determinant of this new "frankenstein" matrix. Let's call it $D_i$.
4.  The value of the unknown variable is simply the ratio of the two determinants:

$$ x_i = \frac{D_i}{D} $$

### Example
Solve for $y$ in the system:
$2x + 3y = 8$
$4x - y = 2$

Matrix form: $\begin{bmatrix} 2 & 3 \\ 4 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 8 \\ 2 \end{bmatrix}$

1.  **Find D:** $\det \begin{bmatrix} 2 & 3 \\ 4 & -1 \end{bmatrix} = (2)(-1) - (3)(4) = -2 - 12 = -14$.
2.  **Find $D_y$:** We want $y$, which is the 2nd variable. We replace the 2nd column with the answers $\begin{bmatrix} 8 \\ 2 \end{bmatrix}$.
    $D_y = \det \begin{bmatrix} 2 & \mathbf{8} \\ 4 & \mathbf{2} \end{bmatrix} = (2)(2) - (8)(4) = 4 - 32 = -28$.
3.  **Calculate $y$:** $y = \frac{D_y}{D} = \frac{-28}{-14} = 2$.

Done! We found $y=2$ using just two fast determinants, without ever having to find $x$ or calculate an inverse matrix!
