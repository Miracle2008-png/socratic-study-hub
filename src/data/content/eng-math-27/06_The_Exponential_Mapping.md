# 6. The Exponential Mapping

We have explored algebraic mappings (Möbius transformations). 
Now let's see what happens to the physical geometry of space when we apply the most important transcendental function: the Exponential Mapping.

$$
w = f(z) = e^z
$$

We know from Euler's Formula that $e^z = e^{x+iy} = e^x \cdot e^{iy}$.
In the output $w$-plane, this is standard polar form ($w = R e^{i\phi}$).
This reveals the mapping rules perfectly:
*   The output radius is $R = e^x$.
*   The output angle is $\phi = y$.

### Mapping Vertical Lines
Imagine drawing a perfectly straight vertical line in the $z$-plane (like $x = 2$). 
Because $x$ is locked at a constant 2, the output radius is locked at $R = e^2$.
As you slide up and down the vertical line, the $y$ coordinate changes, which means the output angle $\phi$ changes.
Therefore, the vertical line $x=2$ is mapped into a **perfect circle** of radius $e^2$ in the $w$-plane!

### Mapping Horizontal Lines
Imagine drawing a perfectly straight horizontal line in the $z$-plane (like $y = \pi/4$).
Because $y$ is locked, the output angle is locked at $\phi = \pi/4$ (a $45^\circ$ angle).
As you slide left and right along the horizontal line, the $x$ coordinate changes, changing the radius $R$ from 0 to infinity.
Therefore, the horizontal line $y = \pi/4$ is mapped into a **straight ray** shooting out from the origin at a $45^\circ$ angle!

### The Infinite Wrapping
If you draw a vertical line that goes on forever, the $y$ coordinate travels from $-\infty$ to $+\infty$.
Because $e^{iy}$ is periodic, the output angle $\phi$ will loop past $2\pi$ over and over again. The vertical line maps to a circle that is being traced infinitely many times, overlapping itself forever!

To prevent this overlap, we restrict the input $z$-plane to a single **Fundamental Strip**: a horizontal band of space bounded by $y = -\pi$ and $y = \pi$.
The exponential mapping takes this infinite, straight, rectangular strip, and perfectly wraps it exactly once around the origin to fill the entire infinite $w$-plane!

### Why is this useful?
If a thermal engineer is trying to calculate heat flow inside a long, straight, rectangular channel (the strip), they can use the Exponential Mapping to transform the rectangular channel into the entire flat 2D universe, solve the heat problem in the open universe, and transform the solution back into the channel!
