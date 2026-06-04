# 5. Green's Theorem

We established that if a vector field is Conservative, the line integral around a closed loop is exactly zero. $\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$.

But what if the vector field is NOT conservative? What if there is a spinning, swirling vortex in the wind? If a particle travels in a closed loop with the swirling wind, the wind will constantly push it forward, doing positive Work over the entire lap!

Calculating this closed-loop line integral $\oint_C P\,dx + Q\,dy$ the long way is agonizing. But in 1828, George Green discovered a breathtaking shortcut. 

### Green's Theorem
Instead of calculating the agonizing 1D line integral walking around the outer fence (the curve $C$), you can instantly convert the problem into a simple 2D **Double Integral** over the flat grass inside the fence (the region $D$)!

Let $C$ be a positively oriented (counter-clockwise), piecewise-smooth, simple closed curve in a plane, and let $D$ be the region bounded by $C$.
Let $\mathbf{F} = \langle P, Q \rangle$ be a vector field.

**Green's Theorem Formula:**
$$
\oint_C P\,dx + Q\,dy = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \, dA
$$

### The Microscopic Swirl
Look incredibly closely at the integrand inside the double integral: $\left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)$.
Where have we seen this before?
On the previous page, we said a field is conservative if $\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$. If that is true, then subtracting them yields exactly zero! The double integral evaluates to 0, which perfectly matches our rule for conservative closed loops!

But if the field is NOT conservative, this subtraction will not equal zero. 
This subtracted term $\left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)$ measures the **microscopic swirling rotation** of the fluid at every single point inside the region. 

Green's theorem proves a profound physical truth: 
The total amount of work the wind does pushing a particle around the outer boundary fence ($C$) is mathematically identical to the sum of all the tiny microscopic wind vortices spinning inside the region ($D$)!

### Using Green's Theorem to Find Area
If Green's theorem converts a line integral into a double integral, can we run the theorem *backwards*? 
Yes! If you want to find the Area of a strange polygon ($Area = \iint 1 \, dA$), you can artificially design a vector field where $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 1$. 

The most common choice is $\mathbf{F} = \langle -y/2, x/2 \rangle$.
This allows you to find the 2D area of a region using only a 1D line integral tracing its boundary!
$$
\text{Area} = \frac{1}{2} \oint_C x\,dy - y\,dx
$$
This exact mathematical principle is how digital planimeters calculate the acreage of land on a map just by tracing the border with a stylus!
