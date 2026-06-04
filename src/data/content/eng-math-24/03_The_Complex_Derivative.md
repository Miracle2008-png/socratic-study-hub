# 3. The Complex Derivative

If a complex function is continuous, can we find its slope? Can we take the derivative?
The formal definition of the derivative for a complex function $f(z)$ looks perfectly identical to the definition from Calculus 1:

$$
f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}
$$

Because this formula is just a Limit, it is bound by the terrifying rule of 2D complex limits we established on the previous page: **The limit must exist, and it must yield the exact same answer regardless of which direction $\Delta z$ approaches from!**

### The Extreme Rarity of Complex Differentiability
In standard calculus, almost every smooth, continuous function is differentiable.
In complex analysis, a function being continuous is nowhere near enough. 

For a complex derivative $f'(z)$ to exist, the geometric slope of the function approached from the x-axis must perfectly equal the geometric slope approached from the y-axis, and every diagonal angle in between. 

This requirement is so brutally strict that **the vast majority of continuous complex functions are completely non-differentiable!**

### Example: $f(z) = \bar{z}$ is Not Differentiable!
Let's try to take the derivative of the incredibly simple, perfectly continuous complex conjugate function: $f(z) = \bar{z} = x - iy$.

Let's plug it into the definition of the derivative at a point $z$:
$$
f'(z) = \lim_{\Delta z \to 0} \frac{\overline{(z + \Delta z)} - \bar{z}}{\Delta z}
$$
Because the conjugate distributes over addition:
$$
f'(z) = \lim_{\Delta z \to 0} \frac{\bar{z} + \overline{\Delta z} - \bar{z}}{\Delta z} = \lim_{\Delta z \to 0} \frac{\overline{\Delta z}}{\Delta z}
$$

Now we must evaluate this limit as the tiny step $\Delta z$ shrinks to zero. 
Let $\Delta z = \Delta x + i\Delta y$.

**Approach Horizontally ($\Delta y = 0$):**
$$
\lim_{\Delta x \to 0} \frac{\Delta x - i(0)}{\Delta x + i(0)} = \frac{\Delta x}{\Delta x} = 1
$$
The derivative (slope) from the horizontal direction is 1.

**Approach Vertically ($\Delta x = 0$):**
$$
\lim_{\Delta y \to 0} \frac{0 - i\Delta y}{0 + i\Delta y} = \frac{-i\Delta y}{i\Delta y} = -1
$$
The derivative (slope) from the vertical direction is -1.

Because $1 \neq -1$, the limit fails. 
Despite $f(z) = \bar{z}$ being a perfectly flat, smooth, unbroken 2D plane with absolutely zero sharp corners or holes, it is **nowhere differentiable** in the complex plane! 

The requirement for all infinite directional slopes to perfectly align is almost impossible to satisfy by accident.
