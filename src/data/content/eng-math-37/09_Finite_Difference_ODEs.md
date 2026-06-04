# 9. Solving ODE BVPs with Finite Differences

Let's apply the finite difference approximations to a classic Boundary Value Problem (BVP): 1D steady-state heat conduction in a rod with a heat source.

**The BVP:**
$$\frac{d^2T}{dx^2} = -Q(x)$$
*   Domain: $0 \le x \le L$
*   Boundary Conditions: $T(0) = T_A$ and $T(L) = T_B$
*   $Q(x)$ is a known heat generation function.

### Step 1: Discretize the Domain
Divide the rod of length $L$ into $N$ equal segments of width $\Delta x = L/N$.
This creates $N+1$ nodes: $x_0, x_1, x_2, \dots, x_N$.
*   We already know the boundary nodes: $T_0 = T_A$ and $T_N = T_B$.
*   Our goal is to find the $N-1$ unknown internal temperatures: $T_1, T_2, \dots, T_{N-1}$.

### Step 2: Discretize the ODE
Replace the continuous 2nd derivative with the Central Difference approximation at node $i$:
$$\frac{T_{i+1} - 2T_i + T_{i-1}}{(\Delta x)^2} = -Q(x_i)$$

Rearrange the equation to group the unknowns on the left side:
$$-T_{i-1} + 2T_i - T_{i+1} = (\Delta x)^2 Q_i$$
This algebraic equation must hold true at *every interior node* ($i = 1, 2, \dots, N-1$).

### Step 3: Assemble the Global Matrix
Let's write out the equations for the first few interior nodes.

For $i=1$:
$$-T_0 + 2T_1 - T_2 = (\Delta x)^2 Q_1$$
But $T_0$ is a known boundary condition ($T_A$). Move it to the right side (the "force vector"):
$$2T_1 - T_2 = (\Delta x)^2 Q_1 + T_A$$

For $i=2$:
$$-T_1 + 2T_2 - T_3 = (\Delta x)^2 Q_2$$

For $i=N-1$:
$$-T_{N-2} + 2T_{N-1} - T_N = (\Delta x)^2 Q_{N-1}$$
Substitute $T_N = T_B$ and move it to the right:
$$-T_{N-2} + 2T_{N-1} = (\Delta x)^2 Q_{N-1} + T_B$$

We now have $N-1$ linear equations for $N-1$ unknowns. We can write this in matrix form $\mathbf{A}\mathbf{T} = \mathbf{b}$:

$$
\begin{bmatrix}
2 & -1 & 0 & \dots & 0 \\
-1 & 2 & -1 & \dots & 0 \\
0 & -1 & 2 & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & -1 \\
0 & 0 & 0 & -1 & 2
\end{bmatrix}
\begin{bmatrix} T_1 \\ T_2 \\ T_3 \\ \vdots \\ T_{N-1} \end{bmatrix}
=
\begin{bmatrix} (\Delta x)^2 Q_1 + T_A \\ (\Delta x)^2 Q_2 \\ (\Delta x)^2 Q_3 \\ \vdots \\ (\Delta x)^2 Q_{N-1} + T_B \end{bmatrix}
$$

### Step 4: Solve
The matrix $\mathbf{A}$ is a **tridiagonal matrix**. It is highly sparse, symmetric, and positive definite. 
We can solve $\mathbf{A}\mathbf{T} = \mathbf{b}$ extremely efficiently using the Thomas Algorithm in $O(N)$ operations.

By solving this single matrix equation, we compute the temperature at every point in the rod simultaneously. This is the foundation of the Finite Element and Finite Volume methods used in commercial software.
