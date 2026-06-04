# 2. Euler's Method

**Euler's Method** is the oldest, simplest, and most intuitive numerical solver for ODEs. While rarely used in precise engineering simulations due to its severe inaccuracy, it is the conceptual foundation for all advanced methods.

### The Derivation
Given $\frac{dy}{dt} = f(t, y)$, we know the exact slope of the curve at any point $(t, y)$. 

Starting at the known initial condition $(t_0, y_0)$, we calculate the initial slope $m_0 = f(t_0, y_0)$. 
If we assume the slope remains constant over a small time step $h$, we can project forward using a straight line to find the next point:
$$y_1 = y_0 + h \cdot f(t_0, y_0)$$

In general, the recurrence relation is:
$$y_{n+1} = y_n + h f(t_n, y_n)$$
$$t_{n+1} = t_n + h$$

### Geometric Interpretation
At every step, Euler's method calculates the tangent vector and takes a straight-line step along that tangent. Because true ODE solutions are almost always curved, the straight-line step inevitably strays from the true curve. At the new point, it calculates a new tangent and takes another straight step. 

Because the method is "blind" to the curvature of the function between $t_n$ and $t_{n+1}$, it consistently overshoots or undershoots the true path.

### Error Analysis via Taylor Series
Consider the exact Taylor expansion of $y(t)$ around $t_n$:
$$y(t_{n+1}) = y(t_n) + h y'(t_n) + \frac{h^2}{2} y''(t_n) + O(h^3)$$

Substitute $y'(t_n) = f(t_n, y_n)$:
$$y(t_{n+1}) = \underbrace{y(t_n) + h f(t_n, y_n)}_{\text{Euler's Estimate}} + \underbrace{\frac{h^2}{2} y''(t_n) + O(h^3)}_{\text{Local Truncation Error}}$$

*   The **Local Truncation Error (LTE)** is $O(h^2)$.
*   To reach a final time $T$, we must take $N = (T - t_0)/h$ steps.
*   The **Global Truncation Error (GTE)** is roughly $N \times O(h^2) = \frac{T-t_0}{h} O(h^2) = O(h)$.

Euler's method is a **first-order method**. To cut the global error in half, you must cut the time step in half (doubling the computational work). This is terribly inefficient.

### Modified Euler (Heun's Method)
To fix Euler's "blindness" to curvature, Heun's method takes a predictor step, evaluates the slope at the future point, and averages it with the current slope:
1.  **Predictor:** $\tilde{y}_{n+1} = y_n + h f(t_n, y_n)$
2.  **Corrector:** $y_{n+1} = y_n + \frac{h}{2} [ f(t_n, y_n) + f(t_{n+1}, \tilde{y}_{n+1}) ]$

This essentially uses the Trapezoidal rule for integration, yielding a much better **second-order** $O(h^2)$ method.
