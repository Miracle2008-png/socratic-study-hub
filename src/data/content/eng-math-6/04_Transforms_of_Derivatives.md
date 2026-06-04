# 4. Transforms of Derivatives

We have learned how to transform polynomials, trig functions, and exponentials. But to solve a differential equation, we must know how to transform the derivatives themselves ($y'$ and $y''$).

This is where the magic of the Laplace Transform occurs. **It transforms calculus operations into algebraic operations.**

### The Transform of a First Derivative
If we know the transform of a function $\mathcal{L}\{y(t)\} = Y(s)$, what is the transform of its derivative $y'(t)$?
Using integration by parts on the integral definition $\int e^{-st} y'(t) dt$, we derive:

$$ \mathcal{L}\{y'(t)\} = s Y(s) - y(0) $$

Notice what happened! We traded the derivative operator ($\frac{d}{dt}$) for simple algebraic multiplication by the variable $s$. 
Furthermore, the formula automatically incorporates the initial condition $y(0)$ right from the very first step.

### The Transform of a Second Derivative
By applying the rule a second time, we get the transform for the second derivative $y''(t)$:

$$ \mathcal{L}\{y''(t)\} = s^2 Y(s) - s y(0) - y'(0) $$

Again, the second derivative is traded for multiplication by $s^2$, and both initial position $y(0)$ and initial velocity $y'(0)$ are baked into the formula automatically.

### The General Pattern for the n-th Derivative
The pattern continues for higher-order derivatives. You start with $s^n Y(s)$ and subtract lower powers of $s$ attached to the initial conditions.

$$ \mathcal{L}\{y^{(n)}(t)\} = s^n Y(s) - s^{n-1}y(0) - s^{n-2}y'(0) - \dots - y^{(n-1)}(0) $$

### A Brief Preview
Imagine we have the differential equation:
$$ y'' - 4y = 0 \quad \text{with} \quad y(0)=1, y'(0)=0 $$

If we take the Laplace Transform of both sides, it instantly becomes an algebraic equation:
$$ [s^2 Y(s) - s(1) - 0] - 4[Y(s)] = 0 $$
$$ s^2 Y(s) - s - 4Y(s) = 0 $$

No characteristic equations, no guessing, no solving for constants at the end. In the next section, we will walk through the full algorithm of solving ODEs using this method.
