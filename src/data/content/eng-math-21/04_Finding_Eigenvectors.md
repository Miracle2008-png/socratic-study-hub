# 4. Finding Eigenvectors (Eigenspaces)

Now that we have the Eigenvalues ($\lambda_1 = -7, \lambda_2 = 3$), we must find their corresponding Eigenvectors ($\mathbf{x}$). 

To find the eigenvectors for a specific $\lambda$, we plug that $\lambda$ back into the homogeneous equation: $(A - \lambda I)\mathbf{x} = \mathbf{0}$. We then use Gaussian Elimination to find the Null Space.

### Hunting the First Eigenvector ($\lambda_1 = -7$)
Plug $\lambda = -7$ into the diagonal of $(A - \lambda I)$:

$$
A - (-7)I = 
\begin{bmatrix}
2 - (-7) & 3 \\
3 & -6 - (-7)
\end{bmatrix}
=
\begin{bmatrix}
9 & 3 \\
3 & 1
\end{bmatrix}
$$

We set up the augmented matrix $[ (A - (-7)I) \ | \ \mathbf{0} ]$ to solve for $\mathbf{x}$:
$$
\begin{bmatrix}
9 & 3 & \big| & 0 \\
3 & 1 & \big| & 0
\end{bmatrix}
$$

Look closely at the rows! Row 1 is exactly 3 times Row 2. They are dependent equations! This is exactly what we wanted. Because we forced the determinant to be zero, one row *must* cancel out.
If we do Row 1 - 3(Row 2), the bottom row zeroes out:

$$
\begin{bmatrix}
3 & 1 & \big| & 0 \\
0 & 0 & \big| & 0
\end{bmatrix}
$$

This translates to the equation: $3x_1 + x_2 = 0 \implies x_2 = -3x_1$.
We have a free variable! Let $x_1 = 1$. Then $x_2 = -3$.
Our first eigenvector is:
$$
\mathbf{v_1} = 
\begin{bmatrix}
1 \\
-3
\end{bmatrix}
$$
*(Any scalar multiple of this vector is also a valid eigenvector, meaning the entire infinite line passing through this vector is an **Eigenspace**).*

### Hunting the Second Eigenvector ($\lambda_2 = 3$)
Now we repeat the entire process for $\lambda = 3$. Plug it into the diagonal:

$$
A - (3)I = 
\begin{bmatrix}
2 - 3 & 3 \\
3 & -6 - 3
\end{bmatrix}
=
\begin{bmatrix}
-1 & 3 \\
3 & -9
\end{bmatrix}
$$

Once again, Row 2 is exactly -3 times Row 1. The matrix is perfectly singular!
$$
\begin{bmatrix}
-1 & 3 & \big| & 0 \\
0 & 0 & \big| & 0
\end{bmatrix}
$$

This translates to: $-x_1 + 3x_2 = 0 \implies x_1 = 3x_2$.
Let $x_2 = 1$. Then $x_1 = 3$.
Our second eigenvector is:
$$
\mathbf{v_2} = 
\begin{bmatrix}
3 \\
1
\end{bmatrix}
$$
