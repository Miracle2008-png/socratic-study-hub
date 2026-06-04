# 10. Finite Difference for Partial Differential Equations (PDEs)

The true power of the Finite Difference Method lies in solving PDEs, where the unknown function depends on multiple variables (e.g., space $x$ and time $t$, or 2D space $x, y$).

Consider the **1D Transient Heat Equation** (a parabolic PDE):
$$\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$$

Here, temperature depends on both position and time: $T(x, t)$. We discretize the domain into a space-time grid:
*   $x_i = i \Delta x$ (Spatial index $i$)
*   $t_n = n \Delta t$ (Time index $n$)
Let $T_i^n$ denote the temperature at position $x_i$ and time $t_n$.

### Explicit Method (Forward Time, Centered Space - FTCS)
Replace the time derivative with a Forward Difference ($O(\Delta t)$):
$$\frac{\partial T}{\partial t} \approx \frac{T_i^{n+1} - T_i^n}{\Delta t}$$

Replace the spatial derivative with a Central Difference ($O(\Delta x^2)$), evaluated at the *current* time $n$:
$$\frac{\partial^2 T}{\partial x^2} \approx \frac{T_{i+1}^n - 2T_i^n + T_{i-1}^n}{(\Delta x)^2}$$

Substitute these into the PDE:
$$\frac{T_i^{n+1} - T_i^n}{\Delta t} = \alpha \frac{T_{i+1}^n - 2T_i^n + T_{i-1}^n}{(\Delta x)^2}$$

Solve for the future temperature $T_i^{n+1}$:
$$T_i^{n+1} = T_i^n + \frac{\alpha \Delta t}{(\Delta x)^2} \left( T_{i+1}^n - 2T_i^n + T_{i-1}^n \right)$$

This is an **explicit** marching equation. If you know all temperatures at time $n$, you can compute the temperature at time $n+1$ for every node independently using basic algebra. No matrices are required!

### The Stability Limit (CFL Condition)
Let $r = \frac{\alpha \Delta t}{(\Delta x)^2}$. The explicit equation is:
$$T_i^{n+1} = r T_{i-1}^n + (1 - 2r) T_i^n + r T_{i+1}^n$$

For the solution to remain physically realistic and mathematically stable, all coefficients must be positive. Therefore, we require:
$$1 - 2r \ge 0 \implies r \le 0.5 \implies \Delta t \le \frac{(\Delta x)^2}{2\alpha}$$

This is the **stability criterion**. If you want a finer spatial resolution (halving $\Delta x$), you must shrink the time step $\Delta t$ by a factor of 4. This severe restriction makes explicit PDE solvers impractically slow for fine meshes.

### Implicit Method (Backward Time, Centered Space)
To escape the stability limit, evaluate the spatial derivative at the *future* time $n+1$:
$$\frac{T_i^{n+1} - T_i^n}{\Delta t} = \alpha \frac{T_{i+1}^{n+1} - 2T_i^{n+1} + T_{i-1}^{n+1}}{(\Delta x)^2}$$

Now $T^{n+1}$ appears on both sides, for three adjacent nodes. You cannot isolate a single $T_i^{n+1}$. Instead, you must assemble a massive tridiagonal matrix equation and solve for all nodes at $t_{n+1}$ simultaneously.

**The Reward:** The implicit method is unconditionally stable for any size time step $\Delta t$. It is the standard approach in commercial computational fluid dynamics (CFD) and heat transfer software.
