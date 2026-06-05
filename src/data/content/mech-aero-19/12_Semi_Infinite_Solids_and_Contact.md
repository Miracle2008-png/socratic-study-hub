# Semi-Infinite Solids and Contact Temperature

The transient solutions for plane walls ($2L$), cylinders, and spheres assume the heat wave penetrates to the center and then influences the entire body. However, for a very thick body (like the Earth's crust, or a thick steel block over a short time), the temperature at the center (or far side) never changes. The body acts as if it extends to infinity in one direction. This is a **semi-infinite solid**.

## 1. The Governing Equation

Consider a solid extending from $x=0$ to $x=\infty$, initially at uniform temperature $T_i$.
The heat equation is $\frac{\partial^2 T}{\partial x^2} = \frac{1}{\alpha} \frac{\partial T}{\partial t}$.
Boundary conditions: $T(x \to \infty, t) = T_i$, and an applied condition at $x=0$.

This problem lacks a characteristic length $L$. It is solved using a similarity variable $\eta = \frac{x}{\sqrt{4\alpha t}}$, which transforms the PDE into an ODE.

## 2. Case 1: Specified Surface Temperature

At $t=0$, the surface $x=0$ is suddenly raised to $T_s$ and held constant.
The analytical solution utilizes the complementary error function ($erfc$):

$$\frac{T(x,t) - T_s}{T_i - T_s} = \text{erf}\left(\frac{x}{\sqrt{4\alpha t}}\right)$$

Where $\text{erf}(\eta)$ is the Gaussian error function (available in math tables or software). 
- At $x=0$, $\text{erf}(0) = 0 \implies T = T_s$.
- As $x \to \infty$, $\text{erf}(\infty) = 1 \implies T = T_i$.

**Heat Flux at the Surface:**
By applying Fourier's law at $x=0$:
$$q''_s(t) = \frac{k(T_s - T_i)}{\sqrt{\pi \alpha t}}$$
Notice the heat flux is infinite at $t=0$ and decays as $1/\sqrt{t}$ over time.

## 3. Case 2: Specified Surface Heat Flux

If a constant heat flux $q''_0$ (like a laser or friction) is applied at $x=0$ starting at $t=0$:
$$T(x,t) - T_i = \frac{q''_0}{k} \left[ \sqrt{\frac{4\alpha t}{\pi}} \exp\left(-\frac{x^2}{4\alpha t}\right) - x \cdot \text{erfc}\left(\frac{x}{\sqrt{4\alpha t}}\right) \right]$$

The surface temperature ($x=0$) rises continuously over time:
$$T(0,t) = T_i + \frac{2 q''_0}{k} \sqrt{\frac{\alpha t}{\pi}}$$

## 4. Contact Temperature of Two Semi-Infinite Solids

When two semi-infinite solids at different initial temperatures $T_A$ and $T_B$ are suddenly brought into perfect thermal contact, the interface instantly reaches a constant intermediate temperature $T_c$.

By equating the heat flux leaving body A to the heat flux entering body B at $x=0$, the contact temperature is found to be:

$$T_c = \frac{T_A \sqrt{(k\rho c)_A} + T_B \sqrt{(k\rho c)_B}}{\sqrt{(k\rho c)_A} + \sqrt{(k\rho c)_B}}$$

The property combination $\sqrt{k\rho c}$ is called the **thermal effusivity** (or contact coefficient).

**Physical Intuition:** 
Why does touching cold metal feel colder than touching cold wood, even if both are at 0°C? Your finger (at 37°C) acts as solid A, the metal/wood is solid B. Metal has a massive thermal effusivity compared to wood. Therefore, the contact temperature $T_c$ drops much closer to the metal's initial 0°C than it does to the wood's 0°C. Your nerve endings sense this rapid drop to $T_c$, not the bulk temperature of the material.
