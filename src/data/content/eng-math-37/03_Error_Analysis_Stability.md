# 3. Error Analysis and Stability

When solving ODEs numerically, dealing with truncation error (inaccuracy) is only half the battle. The other, often more dangerous half, is **numerical instability**.

### Truncation Error vs. Instability
*   **Truncation Error:** The difference between the exact analytical solution and the numerical approximation, caused by the finite step size $h$. It determines the *accuracy* of the method.
*   **Instability:** The tendency of a numerical method to amplify small rounding or truncation errors over time until the solution "blows up" (oscillates to infinity), even if the true analytical solution is bounded and stable. 

### The Test Equation
To analyze stability, we use the standard linear test equation:
$$\frac{dy}{dt} = \lambda y \quad \text{with } y(0) = 1$$
Where $\lambda$ is a complex constant. The exact analytical solution is $y(t) = e^{\lambda t}$.
*   If $\text{Re}(\lambda) < 0$, the exact solution decays to zero (a stable physical system, like a damped spring).

### Stability of Forward Euler
Let's apply Euler's method to the test equation:
$$y_{n+1} = y_n + h f(t_n, y_n) = y_n + h(\lambda y_n)$$
$$y_{n+1} = (1 + h\lambda) y_n$$

By induction, after $n$ steps:
$$y_n = (1 + h\lambda)^n y_0$$

For the numerical solution to mimic the physical reality (decaying to zero), the amplification factor must be less than 1 in magnitude:
$$|1 + h\lambda| < 1$$

This defines the **Region of Absolute Stability** in the complex $h\lambda$ plane. For a purely real, negative $\lambda$ (e.g., $\lambda = -10$), the stability condition is:
$$-1 < 1 - 10h < 1 \implies 10h < 2 \implies h < 0.2$$

**The Critical Consequence:** If you choose $h = 0.3$, Euler's method gives $y_{n+1} = (1 - 3)y_n = -2y_n$. 
The values will be: $1, -2, 4, -8, 16, -32, \dots$ 
The numerical solution explodes to infinity, even though the true physical solution decays to zero. **Euler's method is conditionally stable.**

### Implicit Methods and Unconditional Stability
Consider **Backward Euler**, an implicit method where the derivative is evaluated at the *future* point:
$$y_{n+1} = y_n + h f(t_{n+1}, y_{n+1})$$

Applied to the test equation $\frac{dy}{dt} = \lambda y$:
$$y_{n+1} = y_n + h \lambda y_{n+1}$$
$$y_{n+1} = \frac{1}{1 - h\lambda} y_n$$

If $\lambda$ is real and negative, the amplification factor is $\frac{1}{1 + h|\lambda|}$.
Because $1 + h|\lambda|$ is *always* greater than 1 for any step size $h > 0$, the fraction is *always* less than 1. 
$$ \left| \frac{1}{1 - h\lambda} \right| < 1 \quad \text{for all } h > 0 $$

**Backward Euler is unconditionally stable** (A-stable). You can take massive time steps without the solution blowing up (though truncation error will still be large). Implicit methods are the industry standard for tough engineering problems.
