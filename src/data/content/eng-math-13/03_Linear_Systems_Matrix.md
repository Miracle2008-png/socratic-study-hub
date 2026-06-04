# 3. Linear Systems in Matrix Form

To efficiently solve systems with 2, 3, or even 100 variables, we must abandon writing them out line-by-line and compress them into **Matrices**.

Consider the general 2x2 linear system with constant coefficients:
$$ \frac{dx}{dt} = 3x - 2y $$
$$ \frac{dy}{dt} = 4x + y $$

### The Matrix Translation
We can define a state vector $\mathbf{X}(t)$ that holds both of our unknown functions:
$$ \mathbf{X} = \begin{bmatrix} x(t) \\ y(t) \end{bmatrix} $$
Its derivative is simply the derivative of each component:
$$ \mathbf{X}' = \begin{bmatrix} x'(t) \\ y'(t) \end{bmatrix} $$

We can group all the constant coefficients into a single 2x2 matrix $\mathbf{A}$:
$$ \mathbf{A} = \begin{bmatrix} 3 & -2 \\ 4 & 1 \end{bmatrix} $$

By the rules of matrix multiplication, the entire system collapses into one stunningly simple matrix equation:
$$ \mathbf{X}' = \mathbf{A} \mathbf{X} $$

### The Matrix Guess
Recall from Topic 10 that the solution to the scalar equation $x' = ax$ is an exponential function: $x(t) = C e^{at}$.

Since our matrix equation $\mathbf{X}' = \mathbf{A} \mathbf{X}$ looks structurally identical, let's make an educated guess that the solution is a vector of exponentials:
$$ \mathbf{X} = \mathbf{v} e^{\lambda t} $$
where $\mathbf{v}$ is an unknown constant column vector, and $\lambda$ (lambda) is an unknown constant scalar number.

### The Eigenvalue Problem
Let's test our guess! If $\mathbf{X} = \mathbf{v} e^{\lambda t}$, then the derivative is $\mathbf{X}' = \lambda \mathbf{v} e^{\lambda t}$.
Substitute these into our matrix equation $\mathbf{X}' = \mathbf{A} \mathbf{X}$:
$$ \lambda \mathbf{v} e^{\lambda t} = \mathbf{A} (\mathbf{v} e^{\lambda t}) $$

Divide both sides by the non-zero scalar $e^{\lambda t}$:
$$ \mathbf{A} \mathbf{v} = \lambda \mathbf{v} $$

This is the most famous equation in linear algebra! It states that multiplying the vector $\mathbf{v}$ by the matrix $\mathbf{A}$ results in a vector that points in the exact same direction, just scaled by the number $\lambda$.
*   $\lambda$ is called an **Eigenvalue** of the matrix $\mathbf{A}$.
*   $\mathbf{v}$ is called an **Eigenvector** of the matrix $\mathbf{A}$.

**The Grand Strategy:** To solve a system of differential equations, we simply find the eigenvalues and eigenvectors of its coefficient matrix!
