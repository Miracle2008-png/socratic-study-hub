# 2. The Big Three: Heat, Wave, and Laplace Equations

While there are infinite possible PDEs, almost all of classical physics and engineering boils down to three fundamental, second-order linear equations. 

We write these equations using a shorthand notation for partial derivatives: $u_{xx}$ means $\frac{\partial^2 u}{\partial x^2}$ (the second spatial derivative), and $u_t$ means $\frac{\partial u}{\partial t}$ (the first time derivative).

### 1. The Heat Equation (Diffusion)
$$ u_t = k \, u_{xx} $$
This equation describes how a quantity diffuses or spreads out over time. 
*   **Physics:** It models how heat flows through a metal rod. The constant $k$ is the thermal diffusivity of the metal.
*   **Biology:** It models how perfume molecules diffuse through a room, or how bacteria spread across a petri dish.
*   **Finance:** (The Black-Scholes equation is a variation of the Heat equation) It models how the price of stock options diffuses over time.

### 2. The Wave Equation (Oscillation)
$$ u_{tt} = c^2 \, u_{xx} $$
Notice this equation has a *second* time derivative. It describes how disturbances propagate as waves.
*   **Acoustics:** It models how a plucked guitar string vibrates. The constant $c$ is the speed of sound on the string.
*   **Electromagnetism:** It models how light, radio waves, and Wi-Fi signals propagate through empty space (where $c$ is the speed of light).
*   **Fluid Dynamics:** It models ocean waves and ripples in a pond.

### 3. Laplace's Equation (Steady-State)
$$ u_{xx} + u_{yy} = 0 $$
Notice there is no time derivative ($t$) here! This equation describes systems that have settled into a perfect, unchanging equilibrium. 
*   **Thermodynamics:** If you hold one side of a metal plate at 100°C and the other at 0°C, and wait a million years, the final unchanging temperature distribution across the plate is governed by Laplace's equation.
*   **Electrostatics:** It models the electric potential (voltage) in empty space between charged capacitors.
*   **Fluid Dynamics:** It models the smooth, steady flow of an ideal fluid (like air flowing over an airplane wing).

If a function $u(x,y)$ perfectly solves Laplace's equation, it is called a **Harmonic Function**.
