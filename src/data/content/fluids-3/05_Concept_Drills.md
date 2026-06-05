# Concept Drills: Turbulence & Modeling

Test your conceptual understanding of turbulence mechanics, the RANS equations, and turbulence modeling.

## Conceptual Questions

1.  **True or False:** The Reynolds Stresses are physical forces caused by the friction between fluid molecules.
2.  Explain the concept of the "Energy Cascade" in turbulence. Where does the energy come from, and where does it go?
3.  Why are the RANS equations impossible to solve without a turbulence model? (What is the Closure Problem?)
4.  What is the fundamental difference between dynamic viscosity ($\mu$) and eddy viscosity ($\mu_t$)?
5.  If you are designing an airplane wing and need to accurately predict exactly where the flow will separate near the trailing edge, which turbulence model should you choose: $k-\epsilon$ or $k-\omega$ SST? Why?
6.  Why is Large Eddy Simulation (LES) vastly more computationally expensive than a standard RANS simulation?

## Analytical Problems

1.  **Reynolds Decomposition:** A velocity probe measures the instantaneous velocity $u(t)$ over 10 seconds. The data shows $u(t) = 5 + 2\sin(10\pi t)$ m/s. What is the mean velocity $\bar{u}$? What is the fluctuating component $u'(t)$?
2.  **Fluctuation Averages:** Based on the data in Question 1, prove that the time average of the fluctuation, $\overline{u'}$, is exactly zero over one complete period of the sine wave.
3.  **Reynolds Stress:** Suppose in a specific 2D turbulent flow, the x-fluctuations and y-fluctuations are perfectly correlated such that $u'(t) = 2\sin(t)$ and $v'(t) = -3\sin(t)$. Calculate the time-averaged product $\overline{u'v'}$ over the interval $t=0$ to $t=2\pi$. What is the resulting specific Reynolds stress ($-\rho\overline{u'v'}$) if density $\rho = 1.2$ kg/m³?
4.  **Mixing Length Model:** Using Prandtl's mixing length model, $\mu_t = \rho l_m^2 | \frac{\partial \bar{u}}{\partial y} |$, calculate the eddy viscosity if the fluid is water ($\rho = 1000$ kg/m³), the mixing length is estimated at $l_m = 0.05$ m, and the mean velocity gradient is $40$ s⁻¹. How does this compare to the dynamic viscosity of water ($\mu \approx 0.001$ Pa·s)?

---

## Solutions

### Conceptual Solutions

1.  **False.** Reynolds Stresses ($-\rho\overline{u'v'}$) are mathematical constructs that arise from time-averaging the convective acceleration terms in the Navier-Stokes equations. They represent the macroscopic transfer of momentum by swirling eddies, which *acts* like a massive frictional shear stress to the mean flow, but it is not caused by molecular friction.
2.  Kinetic energy is extracted from the bulk mean flow to create large, unstable macroscopic eddies. These large eddies break down into smaller eddies, transferring the kinetic energy down the hierarchy. Finally, the eddies become microscopically small (Kolmogorov scale), where viscous molecular friction dominates, converting the kinetic energy into heat.
3.  Time-averaging the non-linear convective terms produces the Reynolds Stresses ($-\rho\overline{u'v'}$). We now have equations for the mean velocities $\bar{u}, \bar{v}$, but these equations contain unknown terms ($\overline{u'v'}$). We have more unknowns than equations, leaving the system mathematically open (unsolvable).
4.  Dynamic viscosity ($\mu$) is a physical property of the fluid material itself. Eddy viscosity ($\mu_t$) is a property of the *flow state*; it depends entirely on how turbulent and chaotic the specific flow region is.
5.  **$k-\omega$ SST**. The standard $k-\epsilon$ model famously over-predicts turbulent kinetic energy near walls, which artificially delays or prevents flow separation. The $k-\omega$ formulation was explicitly designed to handle adverse pressure gradients and boundary layer separation accurately near a wall.
6.  RANS time-averages *everything*, allowing you to use a coarse grid and find a steady-state (time-independent) solution. LES only models the microscopic eddies; it must explicitly calculate the chaotic, swirling motion of all the large eddies. Therefore, LES requires a much finer 3D grid and must be run as an unsteady (time-marching) simulation over thousands of time steps, requiring massive computing power.

### Analytical Solutions

1.  The mean velocity is the constant baseline: $\bar{u} = 5$ m/s.
    The fluctuating component is the part that oscillates around the mean: $u'(t) = 2\sin(10\pi t)$ m/s.
2.  The period $T = 2\pi / 10\pi = 0.2$ s.
    $\overline{u'} = \frac{1}{0.2} \int_{0}^{0.2} 2\sin(10\pi t) \, dt = \frac{1}{0.2} \left[ -\frac{2}{10\pi}\cos(10\pi t) \right]_0^{0.2} = \frac{1}{0.2} \left(-\frac{2}{10\pi}\cos(2\pi) - (-\frac{2}{10\pi}\cos(0))\right) = \frac{1}{0.2} (-\frac{2}{10\pi} + \frac{2}{10\pi}) = 0$.
3.  $u'v' = (2\sin(t))(-3\sin(t)) = -6\sin^2(t)$.
    Using the half-angle identity: $-6\sin^2(t) = -6(\frac{1 - \cos(2t)}{2}) = -3 + 3\cos(2t)$.
    Averaging over $2\pi$: $\overline{u'v'} = \frac{1}{2\pi} \int_{0}^{2\pi} (-3 + 3\cos(2t)) \, dt = -3$.
    Notice the average is not zero!
    The specific Reynolds stress is $-\rho\overline{u'v'} = -(1.2)(-3) = 3.6$ Pascals.
4.  $\mu_t = \rho l_m^2 \left| \frac{\partial \bar{u}}{\partial y} \right| = (1000)(0.05)^2 |40| = 1000(0.0025)(40) = 100$ Pa·s.
    Comparing $\mu_t = 100$ to $\mu = 0.001$, the turbulent eddy viscosity is **100,000 times larger** than the molecular viscosity. This shows why turbulence dominates the flow physics.
