# 1. The Numerical ODE Problem

In earlier topics, we solved Ordinary Differential Equations (ODEs) analytically using techniques like Separation of Variables, Integrating Factors, and Laplace Transforms. However, the vast majority of nonlinear ODEs encountered in real-world engineering (e.g., turbulent fluid drag, chaotic pendulum motion, orbital mechanics) **have no analytical solution**.

To model these systems, we must solve them numerically.

### The Initial Value Problem (IVP)
The standard form for an ODE in numerical analysis is the first-order Initial Value Problem:
$$ \frac{dy}{dt} = f(t, y) \quad \text{with initial condition} \quad y(t_0) = y_0 $$

*   $t$ is the independent variable (usually time).
*   $y(t)$ is the unknown state variable we want to find.
*   $f(t, y)$ is the known derivative function (the "slope" or "rate of change").
*   $y_0$ is the known starting state.

**Higher-Order ODEs:** What if we have a second-order equation like $m\ddot{x} + c\dot{x} + kx = F(t)$? 
We **never** solve higher-order ODEs directly with numerical methods. Instead, we always convert an $n$-th order ODE into a system of $n$ first-order ODEs. Therefore, developing robust solvers for $\frac{dy}{dt} = f(t,y)$ solves all IVPs.

### The Discretization Concept
Analytical solutions yield a continuous formula $y(t)$. Numerical methods yield a **discrete set of points** $(t_0, y_0), (t_1, y_1), (t_2, y_2), \dots$ that approximate the true curve.

We divide time into discrete steps of size $h$:
$$t_{n+1} = t_n + h$$

The goal of any numerical solver is to establish a mathematical rule to compute the next state $y_{n+1}$ given the current state $y_n$ and the derivative function $f(t, y)$.

### Local vs. Global Truncation Error
As we step forward in time, errors accumulate.
1.  **Local Truncation Error (LTE):** The error introduced in a *single* step, assuming the starting point $y_n$ was perfectly exact.
2.  **Global Truncation Error (GTE):** The total accumulated error at time $t_n$ after $n$ steps. 

Because errors compound, if a method has an LTE of $O(h^{p+1})$, its GTE is generally one order lower: $O(h^p)$. We classify solvers by their GTE. A "second-order solver" has a global error proportional to $h^2$.
