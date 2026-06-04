# 5. Systems of ODEs and Higher-Order ODEs

Engineering systems rarely consist of a single, isolated first-order ODE. 
*   A robotic arm with 6 joints is governed by a system of 12 coupled first-order ODEs.
*   A chemical reactor modeling the concentrations of 5 reacting species is governed by a system of 5 coupled ODEs.
*   A vibrating beam modeled by the equation $m\ddot{x} + c\dot{x} + kx = F(t)$ is a second-order ODE.

All standard numerical solvers (Euler, RK4) are designed *only* for first-order ODEs. How do we solve these complex real-world problems?

### State-Space Reduction
The fundamental rule of numerical ODE solving: **Any $n$-th order ODE can be converted into a system of $n$ coupled first-order ODEs.** 

Consider the nonlinear pendulum:
$$\frac{d^2 \theta}{dt^2} + \frac{g}{L} \sin(\theta) = 0$$

Define new state variables:
1.  Let $y_1 = \theta$ (Position)
2.  Let $y_2 = \frac{d\theta}{dt}$ (Velocity)

Now, differentiate them:
1.  $\frac{dy_1}{dt} = y_2$
2.  $\frac{dy_2}{dt} = \frac{d^2 \theta}{dt^2} = -\frac{g}{L} \sin(y_1)$

We have successfully reduced the single second-order ODE into a vector of two first-order ODEs:
$$\frac{d\mathbf{y}}{dt} = \mathbf{f}(t, \mathbf{y}) \implies \frac{d}{dt} \begin{bmatrix} y_1 \\ y_2 \end{bmatrix} = \begin{bmatrix} y_2 \\ -\frac{g}{L} \sin(y_1) \end{bmatrix}$$

### Vectorizing the Solvers
Once the system is written in vector form $\frac{d\mathbf{y}}{dt} = \mathbf{f}(t, \mathbf{y})$, the numerical algorithms apply identically, simply replacing scalar operations with vector operations.

**Vectorized Forward Euler:**
$$\mathbf{y}_{n+1} = \mathbf{y}_n + h \mathbf{f}(t_n, \mathbf{y}_n)$$
$$\begin{bmatrix} (y_1)_{n+1} \\ (y_2)_{n+1} \end{bmatrix} = \begin{bmatrix} (y_1)_n \\ (y_2)_n \end{bmatrix} + h \begin{bmatrix} (y_2)_n \\ -\frac{g}{L} \sin((y_1)_n) \end{bmatrix}$$

**Vectorized RK4:**
$$\mathbf{k}_1 = \mathbf{f}(t_n, \mathbf{y}_n)$$
$$\mathbf{k}_2 = \mathbf{f}(t_n + h/2, \mathbf{y}_n + (h/2)\mathbf{k}_1)$$
$$\mathbf{k}_3 = \mathbf{f}(t_n + h/2, \mathbf{y}_n + (h/2)\mathbf{k}_2)$$
$$\mathbf{k}_4 = \mathbf{f}(t_n + h, \mathbf{y}_n + h\mathbf{k}_3)$$
$$\mathbf{y}_{n+1} = \mathbf{y}_n + \frac{h}{6}(\mathbf{k}_1 + 2\mathbf{k}_2 + 2\mathbf{k}_3 + \mathbf{k}_4)$$

Every calculation of $\mathbf{k}_i$ evaluates the right-hand side equations for *all* state variables simultaneously.

### The Jacobian Matrix
For a system of ODEs $\dot{\mathbf{y}} = \mathbf{f}(\mathbf{y})$, stability is governed by the eigenvalues of the **Jacobian Matrix** $\mathbf{J}$, where $J_{ij} = \frac{\partial f_i}{\partial y_j}$. 

If the real part of *any* eigenvalue of $\mathbf{J}$ falls outside the stability region of the numerical solver, the *entire system* will go unstable and blow up. This leads directly to the concept of "Stiff Equations".
