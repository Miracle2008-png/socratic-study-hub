# 9. Integrals with Branch Cuts (The Keyhole Contour)

We have successfully used the giant Semicircle trick to solve integrals from $-\infty$ to $\infty$.
But what if the integral only goes from $0$ to $\infty$?
$$
\int_0^{\infty} \frac{\sqrt{x}}{x^2 + 1} \, dx
$$

We cannot use the Semicircle, because a semicircle requires a straight line crossing the entire axis from $-R$ to $+R$. If we try to push our $x$ variable into the negative numbers, we hit a massive problem: $\sqrt{-x}$ generates imaginary numbers! The function is undefined on the negative real axis.

When we convert this to complex variables ($z^{1/2}$), we know from Topic 24 that fractional powers and logarithms are Multi-Valued functions. They require a **Branch Cut** to prevent the angles from spiraling to infinity.
Typically, we slice the complex plane along the positive real x-axis!

### The Keyhole Contour
Because there is a massive razor-blade slice down the positive x-axis, our contour is absolutely forbidden from crossing it. 

To evaluate the integral, we must construct a **Keyhole Contour**:
1. We start just *barely* above the positive x-axis and travel out to radius $R$.
2. We travel all the way around a giant circular arc $C_R$, almost completing a full $360^\circ$ circle.
3. We stop just *barely* below the positive x-axis, and travel straight back towards the origin.
4. We wrap around the origin in a tiny inner circle $C_\epsilon$ to avoid the singularity at $z=0$, and reconnect to the start!

The contour looks exactly like an old-fashioned keyhole. It perfectly encloses the entire complex plane without ever touching the branch cut!

### The Phase Shift
As we evaluate this terrifying contour, the massive outer circle $C_R$ and the tiny inner circle $C_\epsilon$ will both shrink to zero by the ML-Inequality.
This leaves only the two straight lines! 
$$
\text{Top Line} + \text{Bottom Line} = 2\pi i \sum \text{Residues}
$$

Why don't the Top Line and Bottom Line just perfectly cancel each other out (since they go in opposite directions)?
Because of the Branch Cut!
On the top line, the angle of the complex variable is $\theta = 0$.
But to reach the bottom line, we had to travel a full $360^\circ$ around the plane! So on the bottom line, the angle is $\theta = 2\pi$.

When we plug these angles into the function (like $z^{1/2} = r^{1/2} e^{i\theta/2}$), the top line evaluates to $r^{1/2} e^0 = \sqrt{r}$.
The bottom line evaluates to $r^{1/2} e^{i\pi} = -\sqrt{r}$!

Because the function physically changed signs after crossing the plane, the two lines DO NOT cancel out. They actually add together! This allows us to perfectly isolate the integral from $0$ to $\infty$ and solve it using the trapped residues!
