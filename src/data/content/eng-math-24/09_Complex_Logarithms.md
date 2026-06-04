# 9. Complex Logarithms

In standard algebra, the Natural Logarithm ($\ln x$) is the inverse function of the exponential ($e^x$). 
If $e^y = x$, then $y = \ln x$.

We want to define the Complex Logarithm ($\ln z$) in the exact same way.
If $e^w = z$, then $w = \ln z$.

To solve for this, it is vastly easier to write the input $z$ in Polar Form ($z = r e^{i\theta}$) rather than Cartesian Form ($x + iy$).
Here, $r = |z|$ is the magnitude, and $\theta$ is the argument (angle).

$$
e^w = r e^{i\theta}
$$
Take the natural log of both sides:
$$
w = \ln(r) + \ln(e^{i\theta})
$$
$$
w = \ln(r) + i\theta
$$

Therefore, the official formula for the Complex Logarithm is:
$$
\ln(z) = \ln|z| + i \arg(z)
$$

### The Multi-Valued Nightmare
We just proved on the previous page that $e^z$ is periodic. It loops around every $2\pi$. 
This creates a massive problem for its inverse function. 
Because $e^w = z$, and $e^{w + 2\pi i} = z$, and $e^{w + 4\pi i} = z$, there isn't just one answer for the logarithm!

A single complex number $z$ has an **infinite number of valid logarithms**, each separated by $2\pi i$. The function $\ln(z)$ is a "Multi-Valued Function", which completely breaks the Cauchy-Riemann equations and destroys differentiability!

### The Principal Branch
To force the logarithm to behave like a proper, single-valued Analytic Function, mathematicians take out a metaphorical pair of scissors and physically "cut" the 2D complex plane along the negative real axis. This is called a **Branch Cut**.

By declaring that the angle $\theta$ is strictly trapped between $-\pi < \theta \le \pi$, we force the logarithm to only output one single answer per input. This specific slice of the function is called the **Principal Logarithm**, denoted with a capital L:

$$
\text{Ln}(z) = \ln|z| + i \text{Arg}(z) \quad (\text{where } -\pi < \text{Arg}(z) \le \pi)
$$

The Principal Logarithm $\text{Ln}(z)$ is perfectly Analytic everywhere in the complex plane, EXCEPT along the branch cut (the negative x-axis) and the origin (where $\ln(0)$ is undefined). 

### Taking the Log of a Negative Number!
In high school, you were taught that you cannot take the logarithm of a negative number. That was a lie.
Let's calculate $\text{Ln}(-5)$.
1.  The magnitude is $r = |-5| = 5$.
2.  The angle pointing to -5 on the x-axis is $\theta = \pi$.
3.  $\text{Ln}(-5) = \ln(5) + i\pi$.

The answer just happens to have an imaginary component!
