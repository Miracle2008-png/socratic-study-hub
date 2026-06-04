# 11. Algorithm Selection Workflow

In engineering practice, do not write a root-finding routine from scratch unless on a deeply embedded system with severe memory limits. Use robust library functions (MATLAB `fzero`, `fsolve`; SciPy `optimize.root_scalar`, `optimize.root`). But you must know *which* algorithm to specify based on your problem constraints.

### 1D Root Finding (Scalar Functions)

**1. Is the analytical derivative $f'(x)$ easy and cheap to compute?**
*   **Yes:** Use **Newton-Raphson**. It is unmatched for speed (quadratic convergence). Provide a good initial guess.
*   **No:** Proceed to step 2.

**2. Can you provide a bracket $[a, b]$ where $f(a)$ and $f(b)$ have opposite signs?**
*   **Yes:** Use **Brent's Method**. It is the ultimate hybrid — guaranteed to converge (like Bisection) and very fast near the root (like Secant/IQI). This should be your default choice for almost all 1D problems.
*   **No, I only have an initial guess:** Use the **Secant Method**. Be prepared for it to diverge if the initial guess is poor or the function has severe curvature.

**3. Is the function extremely noisy or discontinuous?**
*   Use **Bisection**. Fast methods rely on smoothness (gradients) and will fail catastrophically on noisy data.

### Multidimensional Root Finding (Systems of Equations)

**1. Are analytical Jacobians available and cheap?**
*   **Yes:** Use **Full Newton-Raphson**.
*   **No:** Proceed to step 2.

**2. Is the system size $n$ small (e.g., $< 50$)?**
*   Use **Newton's method with a finite-difference Jacobian**. Evaluating the $n \times n$ Jacobian requires $n$ extra function evaluations per step, which is acceptable for small systems.

**3. Is the system size $n$ very large?**
*   Use **Broyden's Method** (or another Quasi-Newton update). It avoids recomputing and factoring the Jacobian at every step.
*   Alternatively, reformulate as an optimization problem $\min \|F(x)\|^2$ and use **Levenberg-Marquardt** or L-BFGS.

### Special Case: Polynomials
Never use general root-finding methods to find the roots of a polynomial.
*   Use the **Companion Matrix Eigenvalue method** (standard in `np.roots()` and MATLAB `roots`). It reliably finds all real, multiple, and complex roots simultaneously.

### The Crucial Role of the Initial Guess
No fast algorithm guarantees global convergence. The single most common cause of failure in nonlinear solvers is a bad initial guess. In engineering, always use physical intuition, asymptotic approximations, or a coarse grid search to find a starting point close to the true root.
