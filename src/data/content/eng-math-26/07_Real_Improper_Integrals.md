# 7. Evaluating Real Improper Integrals

Why do engineers learn Residue Calculus? Because it gives us the power to solve incredibly difficult **Real-World Integrals** that standard Calculus 2 techniques cannot touch.

Consider a massive improper integral spanning the entire real number line:
$$
\int_{-\infty}^{\infty} \frac{1}{x^2 + 1} \, dx
$$
*(Standard calculus solves this with arctangent, but we will use this easy integral to demonstrate the terrifying power of complex analysis).*

### The Semicircle Trick
We cannot integrate this from $-\infty$ to $\infty$ using the Residue Theorem, because the x-axis is a straight line. The Residue Theorem ONLY works on **Closed Contours** (loops).

So, we invent a closed loop!
1.  We draw a straight path along the real x-axis from $-R$ to $+R$.
2.  We connect those two endpoints by drawing a massive semi-circular arc ($C_R$) through the upper half of the complex plane!

Our new closed contour $C$ is the sum of the straight line and the giant arc.
$$
\oint_C f(z) \, dz = \int_{-R}^{R} f(x) \, dx + \int_{C_R} f(z) \, dz
$$

### Step 1: Use the Residue Theorem
Let's calculate the full closed loop $\oint_C$ using Residues!
Our function is $f(z) = \frac{1}{z^2 + 1}$.
The singularities are at $z^2 + 1 = 0 \implies z = \pm i$.

Look at our contour! It is a semicircle in the UPPER half plane. 
Therefore, $z = i$ is trapped inside, but $z = -i$ is outside! We throw $-i$ away.
Using the Simple Pole formula for $z=i$:
$$
\text{Res}(f, i) = \lim_{z \to i} \left[ (z - i) \frac{1}{(z-i)(z+i)} \right] = \lim_{z \to i} \frac{1}{z+i} = \frac{1}{2i}
$$
By the Residue Theorem, the full closed loop equals $2\pi i \times \text{Residue}$:
$$
\oint_C = 2\pi i \left( \frac{1}{2i} \right) = \mathbf{\pi}
$$

### Step 2: Blow up the Semicircle
We know the total loop perfectly equals $\pi$.
$$
\pi = \int_{-R}^{R} f(x) \, dx + \int_{C_R} f(z) \, dz
$$

Now, we take the Limit as $R \to \infty$!
*   The straight line segment $\int_{-R}^{R}$ physically stretches to become the infinite real integral we actually want: $\int_{-\infty}^{\infty}$.
*   What happens to the giant arc $C_R$? As $R \to \infty$, the fraction $\frac{1}{R^2+1}$ shrinks to zero incredibly fast! By the ML-Inequality (Topic 25), the integral over that massive infinite arc perfectly evaluates to **0**.

$$
\pi = \int_{-\infty}^{\infty} f(x) \, dx + 0
$$

We have perfectly isolated the real integral!
$$
\int_{-\infty}^{\infty} \frac{1}{x^2 + 1} \, dx = \mathbf{\pi}
$$
We just evaluated an infinite real integral without ever taking an anti-derivative!
