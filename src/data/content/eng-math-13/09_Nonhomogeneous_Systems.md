# 9. Nonhomogeneous Systems

Just as with single second-order equations, a system of differential equations can be nonhomogeneous if it is subjected to an external driving force.

The standard matrix form is:
$$ \mathbf{X}' = \mathbf{A}\mathbf{X} + \mathbf{F}(t) $$
where $\mathbf{F}(t)$ is a column vector representing the external forces applied to each part of the system.

### The Structure of the Solution
The structure is identical to what we saw previously. The general solution is the sum of the complementary homogeneous solution ($\mathbf{X_c}$) and a particular solution ($\mathbf{X_p}$):
$$ \mathbf{X}(t) = \mathbf{X_c} + \mathbf{X_p} $$

1.  **Find $\mathbf{X_c}$:** Temporarily set $\mathbf{F}(t) = \mathbf{0}$. Find the eigenvalues and eigenvectors of $\mathbf{A}$ to form the complementary solution.
2.  **Find $\mathbf{X_p}$:** Find any specific vector function that satisfies the full equation.

### The Method of Undetermined Coefficients (Vectors)
If the forcing vector $\mathbf{F}(t)$ contains simple polynomials, exponentials, or sines/cosines, we can guess the form of $\mathbf{X_p}$. 

**CRITICAL DIFFERENCE:** In single equations, you guess a scalar function with unknown constants ($A, B, C$). For systems, you must guess a **vector** with unknown constant vectors ($\mathbf{a}, \mathbf{b}, \mathbf{c}$).

**Example:**
Suppose $\mathbf{F}(t) = \begin{bmatrix} 5t \\ e^{2t} \end{bmatrix}$. We can separate this into a polynomial vector and an exponential vector: $\begin{bmatrix} 5 \\ 0 \end{bmatrix}t + \begin{bmatrix} 0 \\ 1 \end{bmatrix}e^{2t}$.

Our guess for the particular solution must be a full polynomial vector of the same degree plus a full exponential vector:
$$ \mathbf{X_p} = \mathbf{a} t + \mathbf{b} + \mathbf{c} e^{2t} $$
where $\mathbf{a} = \begin{bmatrix} a_1 \\ a_2 \end{bmatrix}$, $\mathbf{b} = \begin{bmatrix} b_1 \\ b_2 \end{bmatrix}$, and $\mathbf{c} = \begin{bmatrix} c_1 \\ c_2 \end{bmatrix}$.

Substitute this $\mathbf{X_p}$ and its derivative $\mathbf{X_p}'$ back into the original system equation, group the $t$ terms, the constant terms, and the $e^{2t}$ terms, and solve the resulting systems of algebraic equations to find the six unknown constants.

*(Note: The Duplication Trap applies here too. If your guess overlaps with the homogeneous solution, you must multiply your guess by $t$, but for systems, you must also add a lower-degree vector! e.g., guess $\mathbf{a}t e^{\lambda t} + \mathbf{b}e^{\lambda t}$).*
