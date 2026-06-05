# Reynolds-Averaged Navier-Stokes (RANS)

Because we cannot computationally resolve every microscopic eddy in a turbulent flow (a process known as Direct Numerical Simulation, or DNS), we need a mathematical workaround.

In 1895, Osborne Reynolds proposed a brilliant simplification: separate the chaotic fluctuations from the smooth, underlying trend. This led to the RANS equations, which are the backbone of modern industrial Computational Fluid Dynamics (CFD).

## 1. Reynolds Decomposition

If you stick a velocity probe into a turbulent pipe, the velocity $u(t)$ jumps around wildly. Reynolds proposed splitting this instantaneous velocity into two parts:
1.  A **Time-Averaged Mean** velocity ($\bar{u}$).
2.  A **Fluctuating** velocity component ($u'$).

$$ u(x,t) = \bar{u}(x) + u'(x,t) $$
$$ v(x,t) = \bar{v}(x) + v'(x,t) $$
$$ p(x,t) = \bar{p}(x) + p'(x,t) $$

By definition, the time average of the fluctuation is exactly zero: $\overline{u'} = 0$. (It fluctuates equally above and below the mean).

## 2. Deriving the RANS Equations

We take these decomposed variables ($u = \bar{u} + u'$) and substitute them directly into the full, raw Navier-Stokes equations.

Then, we take the time-average of the *entire* resulting equation.

Because the N-S equations are non-linear, they contain convective acceleration terms that involve the multiplication of velocities, like $u \frac{\partial u}{\partial x}$.
When we average the product of two fluctuations ($\overline{u' v'}$), the result is **not zero**. Even though $\overline{u'} = 0$ and $\overline{v'} = 0$, their product might consistently correlate (e.g., if an eddy always pushes slow air upward, the product is always negative).

The resulting time-averaged x-momentum equation looks almost identical to the original laminar N-S equation, but with one critical addition:

$$ \rho \left( \bar{u}\frac{\partial \bar{u}}{\partial x} + \bar{v}\frac{\partial \bar{u}}{\partial y} \right) = -\frac{\partial \bar{p}}{\partial x} + \mu \left( \frac{\partial^2 \bar{u}}{\partial x^2} + \frac{\partial^2 \bar{u}}{\partial y^2} \right) - \rho \left( \frac{\partial}{\partial x}(\overline{u'u'}) + \frac{\partial}{\partial y}(\overline{u'v'}) \right) $$

## 3. The Reynolds Stress Tensor

Look at the new terms on the far right. They involve the density multiplied by the averaged products of the fluctuations: $-\rho\overline{u'v'}$.

Mathematically, these terms act exactly like additional shear stresses applied to the mean flow. We call them the **Reynolds Stresses**.

These are not physical forces caused by molecular friction (viscosity). They are "apparent" stresses caused by the macroscopic mixing and momentum exchange of the turbulent eddies.
*   If a swirling eddy takes a chunk of fast-moving fluid and throws it into a slower-moving adjacent layer, the slow layer speeds up.
*   To the time-averaged mean flow, this transfer of momentum feels exactly like an immense frictional drag pulling it along.

In turbulent flows, the Reynolds Stresses are usually orders of magnitude larger than the natural viscous stresses. This is why turbulent flows mix chemicals so much faster and cause so much more drag than laminar flows.

## 4. The Curse of the Closure Problem

The RANS equations represent a massive triumph: they allow us to calculate the smooth, time-averaged flow field ($\bar{u}, \bar{v}, \bar{p}$) without simulating the chaotic microscopic eddies.

However, there is a fatal catch.
We now have equations to solve for the mean velocities and pressure. But we introduced new unknown variables into the equations: the Reynolds Stresses ($-\rho\overline{u'v'}$).

We have more unknown variables than we have equations. This means the mathematical system is "open" and cannot be solved. This is the **Closure Problem of Turbulence**.

To "close" the equations and solve for the flow, we must invent mathematical models that guess or approximate the Reynolds Stresses based purely on the mean flow variables. This is the entire field of **Turbulence Modeling**.
