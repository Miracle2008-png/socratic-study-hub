# 4. Runge-Kutta Methods

To achieve high accuracy without requiring impossibly tiny time steps, we need higher-order methods. Instead of calculating higher derivatives $y''(t)$ or $y'''(t)$ (which is analytically exhausting), **Runge-Kutta (RK) methods** achieve higher-order accuracy by evaluating the first derivative $f(t,y)$ at several intermediate points within the time step.

### The Classic Fourth-Order Runge-Kutta (RK4)
RK4 is the most famous and widely used ODE solver in history. If an engineer says they "solved an ODE numerically," they almost certainly used RK4.

It evaluates the slope $f(t,y)$ four times per step:
1.  **$k_1$:** Slope at the beginning of the step.
    $$k_1 = f(t_n, y_n)$$
2.  **$k_2$:** Slope at the midpoint, using $k_1$ to estimate the midpoint $y$.
    $$k_2 = f\left(t_n + \frac{h}{2}, y_n + \frac{h}{2}k_1\right)$$
3.  **$k_3$:** A second, refined slope at the midpoint, using $k_2$ to estimate the midpoint $y$.
    $$k_3 = f\left(t_n + \frac{h}{2}, y_n + \frac{h}{2}k_2\right)$$
4.  **$k_4$:** Slope at the end of the step, using $k_3$ to estimate the final $y$.
    $$k_4 = f(t_n + h, y_n + hk_3)$$

The final value $y_{n+1}$ is computed using a weighted average of these four slopes, patterned exactly after Simpson's 1/3 Rule for integration:
$$y_{n+1} = y_n + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$$

### Why RK4 is the "Sweet Spot"
*   **Accuracy:** RK4 is a **fourth-order** method. Global Truncation Error is $O(h^4)$. Cutting the step size in half reduces the error by a factor of 16.
*   **Cost vs. Reward:** 
    *   RK1 (Euler) takes 1 evaluation for $O(h)$ accuracy.
    *   RK2 (Heun) takes 2 evaluations for $O(h^2)$ accuracy.
    *   RK4 takes 4 evaluations for $O(h^4)$ accuracy.
    *   To get $O(h^5)$ accuracy, an RK method requires **6** evaluations. The 1-to-1 relationship breaks down after order 4. Thus, RK4 is the mathematical "sweet spot" of maximum accuracy for minimum computational work.

### Adaptive Step Size: Runge-Kutta-Fehlberg (RK45)
Just like adaptive quadrature, ODE solvers need dynamic step sizing to navigate sharp transients efficiently.

The **RK45 method** (e.g., MATLAB's `ode45`, Python's `scipy.integrate.solve_ivp`) evaluates $f(t,y)$ **six** times per step.
*   It combines these six slopes using one set of weights to produce a 4th-order estimate $y_4$.
*   It combines the exact same six slopes using a different set of weights to produce a 5th-order estimate $y_5$.
*   The difference $\Delta = |y_5 - y_4|$ provides an instant estimate of the local truncation error.
*   If $\Delta$ is smaller than the required tolerance, the step is accepted, and $h$ is increased for the next step. If $\Delta$ is too large, the step is rejected, and $h$ is shrunk.
