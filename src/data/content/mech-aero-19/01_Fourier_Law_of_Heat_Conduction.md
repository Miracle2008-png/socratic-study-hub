---
title: "Fourier's Law of Heat Conduction"
---

# Fourier's Law of Heat Conduction

Heat transfer is energy in transit due to a temperature difference. The three fundamental modes of heat transfer are conduction, convection, and radiation. **Conduction** is the transfer of energy from more energetic particles to adjacent, less energetic particles as a result of interactions between them (collisions in gases/liquids, lattice vibrations and electron drift in solids).

## 1. Fourier's Law

The empirical foundation of conduction is **Fourier's Law**, named after Jean-Baptiste Joseph Fourier (1822). For one-dimensional heat conduction, the rate of heat transfer $\dot{Q}_x$ (in Watts) is proportional to the cross-sectional area $A$ and the temperature gradient $dT/dx$:

$$\dot{Q}_{cond,x} = -k A \frac{dT}{dx}$$

**The Heat Flux:**
Heat flux $q''$ (in $W/m^2$) is the heat transfer rate per unit area perpendicular to the direction of transfer:

$$q''_x = \frac{\dot{Q}_{cond,x}}{A} = -k \frac{dT}{dx}$$

## 2. The Negative Sign

The negative sign is crucial. Temperature is a scalar field, and heat flows "downhill" from high temperature to low temperature.
- If $T$ decreases as $x$ increases, $dT/dx$ is negative.
- Heat must flow in the positive $x$ direction.
- Therefore, the negative sign ensures that $\dot{Q}$ is positive when heat flows in the positive coordinate direction.

## 3. Thermal Conductivity ($k$)

The proportionality constant $k$ is the **thermal conductivity** of the material, measured in $W/(m\cdot K)$ or $W/(m\cdot ^\circ C)$. It is a thermophysical property that indicates how well a material conducts heat.

- **High $k$ (Good Conductors):** Metals (Copper $\approx 400$, Aluminum $\approx 237$). Heat is conducted rapidly by the sea of free electrons.
- **Medium $k$:** Non-metallic solids, liquids (Water $\approx 0.6$). Heat is conducted via lattice vibrations (phonons).
- **Low $k$ (Insulators):** Gases, foams, fiberglass (Air $\approx 0.026$, Polyurethane foam $\approx 0.02$). Heat conduction is very poor because molecules are far apart and collisions are infrequent.

Note: In solids, thermal conductivity often varies with temperature, $k = k(T)$. However, over small temperature ranges, it is usually approximated as a constant.

## 4. Vector Form

In three-dimensional space, heat flux is a vector quantity pointing in the direction of maximum temperature decrease. Fourier's law generalizes to:

$$\vec{q}'' = -k \nabla T = -k \left( \frac{\partial T}{\partial x}\hat{i} + \frac{\partial T}{\partial y}\hat{j} + \frac{\partial T}{\partial z}\hat{k} \right)$$

This vector equation forms the basis for deriving the general heat conduction equation.
