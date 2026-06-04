# 5. Solving the Heat Equation (1D)

Let's solve the complete Boundary Value Problem for a metal rod of length $L$.
**PDE:** $u_t = k u_{xx}$
**Boundary Conditions (Dirichlet):** Both ends are held at zero degrees in ice water. $u(0,t) = 0$ and $u(L,t) = 0$.
**Initial Condition:** The rod has some initial temperature distribution $u(x,0) = f(x)$.

### Step 1: Separation of Variables
From the previous page, assuming $u = XT$ gives us:
1. $T' + k\lambda T = 0$
2. $X'' + \lambda X = 0$

### Step 2: Translate the Boundary Conditions
Since $u(0,t) = X(0)T(t) = 0$, and $T(t)$ cannot be zero everywhere (or the rod is just empty space), it must be that $X(0) = 0$.
Similarly, $X(L) = 0$.
These are our spatial boundary conditions!

### Step 3: Solve the Spatial ODE (Eigenvalue Problem)
We must solve $X'' + \lambda X = 0$ with $X(0)=0, X(L)=0$.
Depending on the sign of $\lambda$, we get three cases:
*   **Case 1: $\lambda < 0$.** Solution is $X = A\cosh(\dots) + B\sinh(\dots)$. Applying boundary conditions forces $A=0, B=0$. Trivial (empty space).
*   **Case 2: $\lambda = 0$.** Solution is $X = Ax + B$. Boundary conditions force $A=0, B=0$. Trivial.
*   **Case 3: $\lambda > 0$.** Let $\lambda = \omega^2$. Solution is $X = A\cos(\omega x) + B\sin(\omega x)$.
    *   $X(0) = 0 \implies A = 0$.
    *   $X(L) = 0 \implies B\sin(\omega L) = 0$. 

For a non-trivial solution, $\sin(\omega L)$ must be zero. This happens when the inside is a multiple of $\pi$.
$\omega L = n\pi \implies \omega = \frac{n\pi}{L}$.
So, $\lambda = (\frac{n\pi}{L})^2$.

We have an infinite number of solutions for the spatial part (one for every integer $n$):
$$ X_n(x) = \sin\left(\frac{n\pi x}{L}\right) $$

### Step 4: Solve the Time ODE
Now plug $\lambda = (\frac{n\pi}{L})^2$ into the time equation: $T' + k(\frac{n\pi}{L})^2 T = 0$.
This is a basic first-order decay equation! The solution is:
$$ T_n(t) = e^{-k \left(\frac{n\pi}{L}\right)^2 t} $$

### Step 5: Construct the Fundamental Solutions
Multiply $X$ and $T$ back together. We now have an infinite family of building blocks that satisfy the PDE and the zero-boundary conditions:
$$ u_n(x,t) = \sin\left(\frac{n\pi x}{L}\right) e^{-k \left(\frac{n\pi}{L}\right)^2 t} $$

How do we satisfy the Initial Condition $u(x,0) = f(x)$? We will need the Superposition Principle and Fourier Series on the next page.
