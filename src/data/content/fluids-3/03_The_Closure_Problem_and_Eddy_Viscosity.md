# The Closure Problem and Eddy Viscosity

To solve the Reynolds-Averaged Navier-Stokes (RANS) equations, we must find a way to calculate the unknown Reynolds stresses ($-\rho\overline{u'v'}$) without actually tracking the chaotic fluctuations ($u', v'$).

The most successful and widely used approach to this closure problem was proposed by Joseph Boussinesq in 1877.

## 1. The Boussinesq Hypothesis

In laminar flow, Newton's law of viscosity states that viscous shear stress is proportional to the velocity gradient. The constant of proportionality is the dynamic viscosity, $\mu$ (a property of the fluid molecule).
$$ \tau_{laminar} = \mu \frac{\partial u}{\partial y} $$

Boussinesq proposed that the chaotic mixing of turbulent eddies acts exactly like molecular viscosity, just on a macroscopic scale. He hypothesized that the Reynolds stress is also proportional to the mean velocity gradient.

He introduced a new proportionality constant called the **Eddy Viscosity** (or turbulent viscosity), denoted $\mu_t$.
$$ \tau_{turbulent} = -\rho\overline{u'v'} = \mu_t \frac{\partial \bar{u}}{\partial y} $$

Total shear stress in the fluid is simply the sum of the laminar and turbulent contributions:
$$ \tau_{total} = (\mu + \mu_t) \frac{\partial \bar{u}}{\partial y} $$

## 2. The Nature of Eddy Viscosity

This hypothesis mathematically solves the closure problem. We have replaced the unknown Reynolds stresses with a single new unknown: $\mu_t$.

However, there is a critical distinction:
*   Dynamic viscosity ($\mu$) is a **property of the fluid**. Water at 20°C always has the same $\mu$, whether it is moving or standing still.
*   Eddy viscosity ($\mu_t$) is a **property of the flow**. It is highly dependent on how violently the fluid is swirling. In the center of a wake, $\mu_t$ might be 10,000 times larger than $\mu$. Near a solid wall, the eddies are squashed, so $\mu_t$ drops to zero.

Therefore, $\mu_t$ is not a constant; it is a complex variable that changes at every point in space and time. **The entire goal of a turbulence model is to provide a mathematical formula to calculate $\mu_t$ at every point in the grid.**

## 3. Prandtl's Mixing Length Model (Zero-Equation Model)

The earliest attempt to calculate $\mu_t$ was made by Ludwig Prandtl in 1925.

Drawing an analogy to the mean free path of gas molecules, Prandtl proposed that a turbulent eddy travels a certain distance—the **Mixing Length ($l_m$)**—before breaking up and mixing its momentum into the surrounding fluid.

Using dimensional analysis, Prandtl derived that the eddy viscosity must equal the fluid density, times the square of the mixing length, times the absolute value of the mean velocity gradient:
$$ \mu_t = \rho l_m^2 \left| \frac{\partial \bar{u}}{\partial y} \right| $$

If you know how $l_m$ changes (e.g., near a wall, $l_m \approx \kappa y$, where $\kappa$ is the von Kármán constant), you can calculate $\mu_t$ directly from the mean velocity field without needing to solve any extra differential equations.

This is called a "Zero-Equation Model." It was historically useful for simple boundary layers and wakes, but it is too rigid and inaccurate for complex 3D flows around real engineering objects because it assumes turbulence is instantly generated and dissipated exactly where the velocity gradient exists. It cannot account for turbulence being carried downstream.
