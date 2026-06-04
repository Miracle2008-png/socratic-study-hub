# 10. Euler's Method (Numerical Approximation)

The harsh reality of engineering is that most differential equations governing complex physical systems (like turbulent fluid flow or multi-body orbital mechanics) **cannot be solved analytically**. There is no magical substitution or integrating factor that will yield an explicit $y(x)$ equation.

When analytical methods fail, we turn to computers and **numerical methods**. The simplest, foundational numerical method is Euler's Method.

### The Logic Behind Euler's Method
Recall that a first-order ODE $\frac{dy}{dx} = f(x, y)$ is a slope-generating machine. 

If we know a starting point $(x_0, y_0)$, we can use the ODE to calculate the exact slope at that point. If we assume the curve is roughly a straight line for a very small distance (a "step size" $h$), we can follow that tangent line to approximate the next point $(x_1, y_1)$.

We then recalculate the slope at this new point, take another small step, and repeat.

### The Algorithm Formula
Given an initial value $(x_0, y_0)$ and a step size $h$:
1. Calculate the next x-coordinate:
   $$ x_{n+1} = x_n + h $$
2. Calculate the next y-coordinate using the tangent line:
   $$ y_{n+1} = y_n + h \cdot f(x_n, y_n) $$
*(Current Y + [Step Size $\times$ Current Slope])*

### Worked Example
**Problem:** Approximate $y(0.2)$ for the initial value problem $y' = x + y$, where $y(0) = 1$. Use a step size of $h = 0.1$.

**Solution:**
We need to take two steps of 0.1 to get from $x=0$ to $x=0.2$.
The slope function is $f(x, y) = x + y$.

**Step 0 (Initial Condition):**
$x_0 = 0$
$y_0 = 1$

**Step 1:**
Find slope at $(0, 1)$: $f(0, 1) = 0 + 1 = 1$.
$x_1 = 0 + 0.1 = 0.1$
$y_1 = y_0 + h \cdot f(x_0, y_0) = 1 + 0.1(1) = 1.1$
So our first approximated point is $(0.1, 1.1)$.

**Step 2:**
Find slope at $(0.1, 1.1)$: $f(0.1, 1.1) = 0.1 + 1.1 = 1.2$.
$x_2 = 0.1 + 0.1 = 0.2$
$y_2 = y_1 + h \cdot f(x_1, y_1) = 1.1 + 0.1(1.2) = 1.1 + 0.12 = 1.22$

**Final Answer:**
Our approximation is $y(0.2) \approx 1.22$.

### The Error in Euler's Method
Because curves bend, following a straight tangent line will always slightly overshoot or undershoot the true curve. This error accumulates with every step. 
To reduce error, you must decrease the step size $h$. However, modern engineering software uses much more advanced, highly-accurate numerical solvers, such as **Runge-Kutta 4th Order (RK4)**.
