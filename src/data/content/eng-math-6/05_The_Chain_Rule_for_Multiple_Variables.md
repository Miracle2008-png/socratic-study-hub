# The Chain Rule for Multiple Variables

In 1D calculus, if $y = f(x)$ and $x = g(t)$, the chain rule tells us how $y$ changes with $t$: $\frac{dy}{dt} = \frac{dy}{dx} \cdot \frac{dx}{dt}$.

In multivariable calculus, the dependent variable $z$ might depend on $x$ and $y$, and *both* $x$ and $y$ might depend on time $t$. Or they might depend on two other variables, $u$ and $v$. The chain rule must account for all possible pathways of change.

## 1. Chain Rule (Case 1: One Independent Variable)

Suppose $z = f(x, y)$ is a surface. Let $x = g(t)$ and $y = h(t)$ be parametric equations defining a path running across that surface over time $t$.

How fast is $z$ changing with respect to time $t$?
Since $z$ ultimately depends only on $t$, we want the ordinary derivative $\frac{dz}{dt}$. The change in $z$ is the sum of the change caused by moving in the x-direction plus the change caused by moving in the y-direction.

$$ \frac{dz}{dt} = \frac{\partial f}{\partial x} \frac{dx}{dt} + \frac{\partial f}{\partial y} \frac{dy}{dt} $$

*Example:* An ant is walking on a heated metal plate. The temperature of the plate is $T(x,y) = x^2 + 3y$. The ant's position over time is $x = \cos(t)$, $y = \sin(t)$. How fast is the temperature changing for the ant at $t=0$?
1.  Calculate partials: $T_x = 2x$, $T_y = 3$.
2.  Calculate path derivatives: $dx/dt = -\sin(t)$, $dy/dt = \cos(t)$.
3.  Chain rule: $\frac{dT}{dt} = (2x)(-\sin(t)) + (3)(\cos(t))$.
4.  At $t=0$, $x = \cos(0) = 1$, $y = \sin(0) = 0$.
5.  $\frac{dT}{dt} = (2(1))(-\sin(0)) + (3)(\cos(0)) = 0 + 3 = 3$. The temperature is increasing at 3 degrees per second.

## 2. Chain Rule (Case 2: Multiple Independent Variables)

Suppose $z = f(x, y)$, but now $x$ and $y$ are functions of two other variables, $u$ and $v$: $x = g(u, v)$ and $y = h(u, v)$.
Now $z$ ultimately depends on $u$ and $v$. Because there are multiple independent variables, we must use partial derivatives, $\frac{\partial z}{\partial u}$ and $\frac{\partial z}{\partial v}$.

To find $\frac{\partial z}{\partial u}$, trace all paths from $z$ through the intermediate variables ($x$ and $y$) to the target variable $u$:
$$ \frac{\partial z}{\partial u} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial u} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial u} $$

Similarly, for $v$:
$$ \frac{\partial z}{\partial v} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial v} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial v} $$

## 3. Tree Diagrams

For very complex dependencies (e.g., $w$ depends on $x,y,z$, which in turn depend on $u,v,r,s$, which depend on $t$), the best way to write the chain rule without making a mistake is to draw a tree diagram.

1.  Write the dependent variable at the top.
2.  Draw branches to the intermediate variables.
3.  Draw branches from those down to the independent variables.
4.  To find the derivative of the top variable with respect to a bottom variable, trace every possible path from top to bottom.
5.  Multiply the derivatives along a single path.
6.  Add the results of all the different paths.

## 4. Implicit Differentiation

The multivariable chain rule provides a much faster, more powerful way to do implicit differentiation.

Suppose you have an equation involving $x$ and $y$ that you cannot solve for $y$, like $x^3 + y^3 = 6xy$. We want to find $\frac{dy}{dx}$.

1.  Move everything to one side to define a function $F(x,y) = 0$.
    $F(x,y) = x^3 + y^3 - 6xy = 0$
2.  Because $F(x,y) = 0$, its derivative with respect to $x$ is 0.
3.  Apply the Case 1 chain rule: $\frac{dF}{dx} = \frac{\partial F}{\partial x} \frac{dx}{dx} + \frac{\partial F}{\partial y} \frac{dy}{dx} = 0$
4.  Since $dx/dx = 1$, we get $F_x + F_y \frac{dy}{dx} = 0$.
5.  Solve for $\frac{dy}{dx}$:

$$ \frac{dy}{dx} = -\frac{F_x}{F_y} $$

This is infinitely faster than doing traditional implicit differentiation with the product rule. For our example:
$F_x = 3x^2 - 6y$
$F_y = 3y^2 - 6x$
$\frac{dy}{dx} = -\frac{3x^2 - 6y}{3y^2 - 6x} = -\frac{x^2 - 2y}{y^2 - 2x}$
