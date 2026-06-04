# 1. What is a Partial Differential Equation?

Up until now, every equation we have solved has been an Ordinary Differential Equation (ODE). 
An ODE has one unknown function $y$, and it depends on exactly **one** independent variable (usually time $t$ or distance $x$). Therefore, we only ever take standard derivatives: $\frac{dy}{dt}$.

However, the real physical world has more than one dimension. 
Imagine heating up a long metal rod. The temperature of the rod $u$ depends on **where** you measure it (position $x$) AND **when** you measure it (time $t$). 

The temperature is a multivariable function: $u(x, t)$.
Because it depends on two independent variables, its rates of change must be described using **Partial Derivatives**:
*   $\frac{\partial u}{\partial t}$: How fast the temperature is changing over time at a specific spot.
*   $\frac{\partial u}{\partial x}$: How steep the temperature gradient is at a specific moment in time.

A **Partial Differential Equation (PDE)** is any equation that relates a multivariable function to its partial derivatives.

### The Complexity of PDEs
Solving PDEs is orders of magnitude more difficult than solving ODEs. 

For an ODE like $y'' = 0$, the solution is a simple polynomial: $y(x) = C_1 x + C_2$. The arbitrary constants $C_1, C_2$ are just numbers.

For a PDE like $\frac{\partial^2 u}{\partial x \partial y} = 0$, the solution is $u(x,y) = F(x) + G(y)$.
The arbitrary constants are no longer numbers... they are **entirely arbitrary functions!** 
There are infinitely many functions $F(x)$ and $G(y)$ that solve that equation. To nail down a single, specific solution in the real world, we will need very specific constraints called Boundary Conditions.
