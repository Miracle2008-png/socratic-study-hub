# 12. Concept Drills

Test your mastery of Numerical ODEs and Finite Differences. Select your answer to immediately reveal the worked mathematical correction.

```drill
Question: You are simulating the trajectory of a ballistic projectile using Forward Euler with a time step of $h=0.1$ seconds. You want to reduce your global error to be 100 times smaller. What time step must you use?
Options:
A) $h = 0.01$ seconds
B) $h = 0.001$ seconds
C) $h = 0.05$ seconds
D) Euler's global error cannot be reduced; it is fixed by the equation type.
Answer: B
Explanation: The Global Truncation Error (GTE) of Forward Euler is $O(h)$, meaning it is a first-order method. The error is directly proportional to the step size. To reduce the error by a factor of 100, you must reduce the step size by a factor of 100. The new step size must be $h = 0.1 / 100 = 0.001$ seconds. This requires 100 times more computational work, highlighting the inefficiency of Euler's method compared to higher-order methods like RK4.
```

```drill
Question: A chemical reaction simulation involves one molecule reacting in $10^{-7}$ seconds and another reacting in $5$ seconds. When you try to simulate it over a 10-second span using standard RK4, the software freezes or takes hours. Why?
Options:
A) The matrix $\mathbf{A}$ in RK4 cannot be inverted.
B) The system is stiff. RK4 is an explicit method and requires a time step smaller than $10^{-7}$ seconds to remain stable, forcing it to take hundreds of millions of steps.
C) RK4 is not accurate enough to handle large numbers.
D) The system has chaotic attractors that break explicit solvers.
Answer: B
Explanation: The system has wildly differing time scales, making it a "stiff" system. Explicit methods like RK4 have limited regions of absolute stability dictated by the fastest dynamic (largest eigenvalue). To prevent the numerical solution from exploding, RK4 is forced to use a time step $h < 10^{-7}$. To reach $T=10$ seconds, it must take over 100 million steps. The solution is to switch to an Implicit solver (like BDF/ode15s), which is unconditionally stable and can take large time steps, ignoring the fast dynamic once it has decayed.
```

```drill
Question: How do you solve the 3rd-order ODE $y''' - 4y'' + 2y' - y = \sin(t)$ using a standard RK4 solver?
Options:
A) You cannot; RK4 only works on 1st-order and 2nd-order ODEs.
B) Define $y_1 = y, y_2 = y', y_3 = y''$ and rewrite the equation as a system of three coupled 1st-order ODEs. Apply vectorized RK4 to the system.
C) Integrate the equation analytically twice, then apply RK4 to the remaining 1st-order equation.
D) Use a 3-point central finite difference to approximate the 3rd derivative directly.
Answer: B
Explanation: Standard IVP solvers (Euler, RK) are exclusively programmed to solve systems in the form $\frac{d\mathbf{y}}{dt} = \mathbf{f}(t, \mathbf{y})$. Any $n$-th order ODE must be reduced to a system of $n$ first-order ODEs via state-space reduction. By defining the state vector $\mathbf{y} = [y, y', y'']^T$, you create a 3x1 vector system that RK4 handles effortlessly via vector algebra.
```

```drill
Question: When solving the 1D Transient Heat Equation $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$ using the Explicit Finite Difference method, what is the consequence of halving the grid spacing $\Delta x$ to get a more detailed temperature map?
Options:
A) The solution becomes unconditionally stable.
B) The simulation will run twice as fast.
C) You must also divide the time step $\Delta t$ by 4 to satisfy the CFL stability condition and prevent the simulation from blowing up.
D) The spatial error increases.
Answer: C
Explanation: The explicit FTCS method has a severe stability limit: $\Delta t \le (\Delta x)^2 / (2\alpha)$. Because the stable time step is proportional to the *square* of the grid spacing, dividing $\Delta x$ by 2 forces $\Delta t$ to be divided by 4. This is the primary drawback of explicit PDE solvers: increasing spatial resolution demands a punishing increase in computational time.
```
