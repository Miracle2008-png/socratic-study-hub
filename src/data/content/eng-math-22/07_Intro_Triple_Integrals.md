# 7. Introduction to Triple Integrals

If a single integral $\int dx$ calculates 2D Area...
And a double integral $\iint dx\,dy$ calculates 3D Volume...
What does a **Triple Integral** $\iiint dx\,dy\,dz$ calculate?

Technically, if you integrate a 4D function $w = f(x,y,z)$ over a solid 3D region $E$, you are calculating a 4-Dimensional Hypervolume. Because human brains cannot visualize 4D space, we must change how we interpret the math.

### The Density Interpretation
Instead of visualizing $f(x,y,z)$ as a 4th physical dimension, we visualize it as a property *inside* the 3D volume, such as **Density** or **Temperature**.

Imagine a solid 3D block of metal (Region $E$). 
If the temperature at any point inside the block is given by $f(x,y,z)$, the Triple Integral calculates the total, aggregate thermal energy trapped inside the entire block!

$$
\text{Total Mass or Energy} = \iiint_E f(x,y,z) \, dV
$$

### The Volume Trick
What if we set the internal function to exactly 1? ($f(x,y,z) = 1$).
If the "density" of the block is exactly 1 everywhere, then the total mass of the block is perfectly equal to its physical volume!

This gives us a brilliant trick. We can use a triple integral to calculate standard 3D Volume by integrating the number 1:
$$
\text{Volume} = \iiint_E 1 \, dV
$$

### The Volume Differential ($dV$)
In a double integral, $dA$ was a tiny 2D rectangle ($dx\,dy$).
In a triple integral, $dV$ represents an infinitesimally small 3D cube. 
Because the volume of a cube is length $\times$ width $\times$ height, the Cartesian differential is simply:

$$
dV = dx \, dy \, dz
$$

Just like Fubini's Theorem for double integrals, you can evaluate a triple integral over a perfectly rectangular 3D box ($[a,b] \times [c,d] \times [r,s]$) by nesting three iterated integrals. 
And just like before, for a perfect rectangular box, you can arrange the $dx, dy, dz$ in any of the 6 possible permutations (e.g., $dz\,dy\,dx$ or $dx\,dz\,dy$), and the final answer will be identical.

$$
\int_r^s \int_c^d \int_a^b f(x,y,z) \, dx \, dy \, dz
$$
