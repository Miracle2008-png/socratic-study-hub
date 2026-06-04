# 2. Converting Higher-Order ODEs to Systems

Before we learn how to solve systems of first-order ODEs, there is a massive conceptual leap you must understand: **Any linear ODE of any order can be converted into a system of first-order ODEs.**

This means that if you can build a computer program to solve a first-order system, that exact same program can solve a 100th-order differential equation! This is precisely how modern physics engines and simulation software work.

### The Conversion Strategy
Suppose you have a second-order linear ODE:
$$ y'' + p(t)y' + q(t)y = g(t) $$

To convert this into a system, we introduce a new "dummy" variable to represent the derivative.
Let $x_1 = y$.
Let $x_2 = y'$.

Now, let's take the derivative of both of our new variables:
1.  The derivative of $x_1$ is just $y'$, which we defined as $x_2$.
    $$ x_1' = x_2 $$
2.  The derivative of $x_2$ is $y''$. We can find $y''$ by rearranging our original ODE:
    $$ y'' = -q(t)y - p(t)y' + g(t) $$
    Substitute our dummy variables back in:
    $$ x_2' = -q(t)x_1 - p(t)x_2 + g(t) $$

### The Resulting System
We have perfectly translated our single second-order equation into a coupled system of two first-order equations:
$$ \begin{cases} x_1' = x_2 \\ x_2' = -q(t)x_1 - p(t)x_2 + g(t) \end{cases} $$

### Worked Example: The Spring-Mass System
Take the undamped spring-mass equation: $my'' + ky = 0$.
Rearrange for $y''$:
$$ y'' = -\frac{k}{m}y $$

Define variables:
*   $x_1 = y$ (Position)
*   $x_2 = y'$ (Velocity)

Take derivatives:
*   $x_1' = y' = x_2$ (Velocity is the derivative of position)
*   $x_2' = y'' = -\frac{k}{m}x_1$ (Acceleration is the force divided by mass)

The resulting first-order system is:
$$ x_1' = x_2 $$
$$ x_2' = -\frac{k}{m}x_1 $$

This is exactly how video games calculate the physics of bouncing objects frame-by-frame. They track position ($x_1$) and velocity ($x_2$) simultaneously as a first-order system!
