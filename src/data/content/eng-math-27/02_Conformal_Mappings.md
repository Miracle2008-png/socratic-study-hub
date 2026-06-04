# 2. What is a Conformal Map?

If you draw two straight lines intersecting at a perfectly $90^\circ$ right angle on a rubber sheet, and then you brutally stretch and warp the sheet using a complex mapping function $w = f(z)$, what happens to the angle between those two lines?

In almost all forms of mathematics, the angle will be crushed or stretched. 
But if the mapping function $f(z)$ is an **Analytic Function**, a geometric miracle occurs.

### The Angle-Preserving Miracle
If $f(z)$ is analytic at a point $z_0$, and its derivative is not zero ($f'(z_0) \neq 0$), then the mapping $w = f(z)$ is mathematically guaranteed to be **Conformal** at that point.

A Conformal Mapping possesses the incredible property of **Angle Preservation**.
No matter how violently the complex function stretches, shrinks, or warps the rubber sheet, the angle of intersection between ANY two curves will be perfectly, flawlessly preserved in the new output space. 

If two grid lines intersected at exactly $90^\circ$ in the $z$-plane, their warped, parabolic, twisted shadows in the $w$-plane will still intersect at exactly $90^\circ$!

### The Proof via Derivatives
Why does this happen? The secret lies in the definition of the complex derivative:
$$
f'(z_0) = \lim_{\Delta z \to 0} \frac{\Delta w}{\Delta z}
$$
If $f(z)$ is analytic, we know this derivative exists and is a single, specific complex number (let's call it $R e^{i\phi}$).

If we look incredibly closely at a microscopic point on the rubber sheet (so $\Delta z$ is infinitesimally tiny), the equation becomes:
$$
\Delta w \approx f'(z_0) \cdot \Delta z
$$
$$
\Delta w \approx (R e^{i\phi}) \cdot \Delta z
$$

This proves that at a microscopic, infinitesimally zoomed-in level, EVERY analytic function simply acts like the basic linear mapping $Kz$ from the previous page! 
It perfectly scales the tiny region by $R$, and perfectly rotates the tiny region by $\phi$. 
Because a simple rotation does not crush angles, the angles are perfectly preserved! 

### The Caveat: Critical Points
Notice the condition: $f'(z_0) \neq 0$.
If the derivative IS zero at a specific point, the magnification factor $R$ becomes zero. The local space is completely crushed into a single singularity, and angle preservation is instantly destroyed. 

A point where $f'(z) = 0$ is called a **Critical Point**.
For example, the mapping $w = z^2$ is analytic everywhere. But its derivative is $2z$, which equals zero at the origin! 
Therefore, $w = z^2$ is perfectly conformal everywhere in the universe EXCEPT at $z=0$, where the angles are actually doubled!
