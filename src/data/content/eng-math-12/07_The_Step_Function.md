# 7. The Step Function (Heaviside Function)

The true superiority of the Laplace Transform reveals itself when we model discontinuous forces.
Imagine a circuit where a 12-volt battery is switched ON at time $t=3$, and then switched OFF at $t=5$. 

We model these sudden "on/off" events using the **Heaviside Unit Step Function**, denoted $u(t-a)$ or $H(t-a)$.

### Definition of $u(t-a)$
The unit step function is an "on switch" that flips at time $t=a$.
*   $u(t-a) = 0$ for all time $t < a$ (Switch is OFF)
*   $u(t-a) = 1$ for all time $t \ge a$ (Switch is ON)

### Building Piecewise Functions
By combining step functions, we can construct any discontinuous "pulse" or piecewise function mathematically in a single line.

**Example 1: The "On-Off" Pulse**
We want a voltage of 12V to turn ON at $t=3$ and turn OFF at $t=5$.
*   Turn it on at 3: $12 \cdot u(t-3)$
*   Turn it off at 5 (by subtracting it): $- 12 \cdot u(t-5)$
Full function: $g(t) = 12 u(t-3) - 12 u(t-5)$.

**Example 2: Changing Functions mid-way**
Suppose $f(t) = t^2$ from $t=0$ to $t=4$, and then $f(t) = \sin(t)$ after $t=4$.
*   Start with $t^2$.
*   At $t=4$, we must turn $t^2$ OFF, and turn $\sin(t)$ ON.
Full function: $f(t) = t^2 - t^2 u(t-4) + \sin(t) u(t-4)$.

### Transform of the Step Function
The Laplace transform of the standard unit step function $u(t-a)$ is:
$$ \mathcal{L}\{u(t-a)\} = \frac{e^{-as}}{s} $$

This translates the physical concept of "turning on at time $a$" into the mathematical concept of an exponential $e^{-as}$ in the $s$-domain.

If we encounter a driving force $g(t)$ containing unit step functions, we simply take the Laplace transform of the equation, creating $e^{-as}$ terms in our algebraic expression for $Y(s)$. We then solve for $Y(s)$ normally. 

But how do we perform the Inverse Transform to get back to the time domain when we have $e^{-as}$ floating in our answer? We need the Second Shifting Theorem, covered on the next page.
