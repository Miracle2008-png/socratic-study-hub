# Mechanisms of Convection

Conduction occurs in stagnant fluids, but when fluid is in macroscopic bulk motion, heat transfer is vastly accelerated. This combined effect of conduction and fluid motion is called **convection**.

## 1. Newton's Law of Cooling

The rate of convection heat transfer is expressed by Newton's Law of Cooling:

$$\dot{Q}_{conv} = h A_s (T_s - T_\infty)$$

Where:
- $h$: Convection heat transfer coefficient [$W/m^2\cdot K$].
- $A_s$: Surface area [$m^2$].
- $T_s$: Surface temperature.
- $T_\infty$: Fluid free-stream temperature sufficiently far from the surface.

Unlike thermal conductivity $k$, the convection coefficient $h$ is **not a fluid property**. It is a complex parameter that depends on fluid velocity, viscosity, density, specific heat, thermal conductivity, surface geometry, and surface roughness. The entire field of convection study is dedicated to finding correlations to predict $h$.

## 2. No-Slip and No-Temperature-Jump Conditions

When a fluid flows over a solid surface, fluid particles immediately adjacent to the surface "stick" to it due to viscous effects. Their velocity relative to the surface is exactly zero. This is the **no-slip condition**.

Similarly, thermal equilibrium dictates that the fluid layer in direct contact with the surface assumes the exact temperature of the surface. This is the **no-temperature-jump condition** ($T_{fluid} = T_s$ at $y=0$).

**The Conduction Link:**
Because the fluid layer directly on the wall is totally stationary (velocity = 0), heat transfer from the solid wall into this first infinitesimal fluid layer occurs **purely by conduction**. 

$$q''_{conv} = q''_{cond, y=0} = -k_{fluid} \left.\frac{\partial T}{\partial y}\right|_{y=0}$$

Equating this to Newton's law ($q''_{conv} = h(T_s - T_\infty)$) yields the fundamental definition of the convection coefficient:

$$h = \frac{-k_{fluid} \left.\frac{\partial T}{\partial y}\right|_{y=0}}{T_s - T_\infty}$$

To find $h$, we must determine the temperature gradient in the fluid right at the wall. This requires solving fluid mechanics (to find velocity profiles) coupled with heat transfer (to find temperature profiles).

## 3. Classification of Convection

**By Driving Force:**
1. **Forced Convection:** Fluid motion is forced by an external device (fan, pump, wind).
2. **Natural (Free) Convection:** Fluid motion is caused solely by buoyancy forces. When a fluid heats up, its density decreases. In a gravitational field, the warmer, lighter fluid rises, drawing cooler, heavier fluid to replace it.

**By Flow Regime:**
1. **Laminar Flow:** Highly ordered fluid motion with smooth streamlines. Mixing only occurs via molecular diffusion (slow).
2. **Turbulent Flow:** Highly disordered, chaotic fluid motion with rapid velocity fluctuations and macroscopic eddies. These eddies physically transport chunks of hot fluid into cold regions, making turbulent heat transfer drastically higher than laminar.

**By Geometry:**
1. **External Flow:** Flow over unbounded surfaces (plates, cylinders, airfoils).
2. **Internal Flow:** Flow completely bounded by solid surfaces (inside pipes, ducts).
