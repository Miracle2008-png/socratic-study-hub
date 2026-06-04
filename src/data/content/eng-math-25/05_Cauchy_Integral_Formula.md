# 5. Cauchy's Integral Formula

We know that integrating a perfectly analytic function around a closed loop yields zero (Cauchy-Goursat).
We know that if a closed loop traps a singularity, the integral is NOT zero, and we can shrink the contour down to tightly hug the singularity (Deformation).

But how do we actually *calculate* the value of that tight little loop around the singularity?

### The Magic Formula
Suppose you have a closed contour $C$ that traps a single point $z_0$ inside of it. 
Suppose you want to integrate a function that looks like this: $\frac{f(z)}{z - z_0}$.
Assume the numerator $f(z)$ is perfectly analytic everywhere inside and on the contour. The only thing causing the singularity is the division by zero at the denominator $(z - z_0)$.

Augustin-Louis Cauchy proved an equation so powerful it almost feels like cheating:

**Cauchy's Integral Formula:**
$$
\oint_C \frac{f(z)}{z - z_0} \, dz = 2\pi i \cdot f(z_0)
$$

### How to Use the Shortcut
You don't need to parameterize a circle. You don't need to take any anti-derivatives.
If you recognize that your integral matches this specific rational format, the answer requires exactly zero calculus!

**Step 1:** Look at the denominator $(z - z_0)$ to identify the singularity point $z_0$. Ensure it is actually trapped inside the contour $C$.
**Step 2:** Identify the numerator function $f(z)$. Ensure it has no other singularities inside the contour.
**Step 3:** Take the singularity point $z_0$ and literally just plug it into the numerator function $f(z_0)$.
**Step 4:** Multiply that result by $2\pi i$. You are done.

### Example
Evaluate $\oint_C \frac{\cos(z)}{z - \pi} \, dz$, where $C$ is a massive square with corners at $\pm 4 \pm 4i$.

1.  **Identify $z_0$:** The denominator is $z - \pi$, so the singularity is at $z_0 = \pi \approx 3.14$.
2.  **Check the boundary:** The point $x=3.14$ is safely inside the giant square spanning from $x=-4$ to $x=4$.
3.  **Identify $f(z)$:** The numerator is $f(z) = \cos(z)$, which is analytic.
4.  **Evaluate:** Plug $z_0 = \pi$ into the numerator: $f(\pi) = \cos(\pi) = -1$.
5.  **Final Answer:** Multiply by $2\pi i$.
$$
\oint_C \frac{\cos(z)}{z - \pi} \, dz = 2\pi i (-1) = \mathbf{-2\pi i}
$$

A calculation that would be a nightmare in real calculus takes 10 seconds in the complex plane!
