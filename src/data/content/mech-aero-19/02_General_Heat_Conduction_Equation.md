---
title: "The General Heat Conduction Equation"
---

# The General Heat Conduction Equation

To determine the temperature distribution $T(x,y,z,t)$ within a solid, we must apply the principle of conservation of energy to a differential control volume and substitute Fourier's Law. This yields the general heat conduction equation.

## 1. Energy Balance on a Differential Volume

Consider a small Cartesian element $dx \, dy \, dz$.
$$\dot{E}_{in} - \dot{E}_{out} + \dot{E}_{generated} = \dot{E}_{stored}$$

- $\dot{E}_{in} - \dot{E}_{out}$: Net rate of heat conduction into the element.
- $\dot{E}_{generated}$: Rate of internal heat generation per unit volume, $\dot{q}_{gen}$ [$W/m^3$] (e.g., electrical resistance heating, nuclear reaction).
- $\dot{E}_{stored}$: Rate of change of internal energy of the element, $\rho c \frac{\partial T}{\partial t}$.

Applying Taylor series expansion for the heat fluxes across the faces and dividing by the volume $dx \, dy \, dz$ yields:

$$\frac{\partial}{\partial x}\left(k \frac{\partial T}{\partial x}\right) + \frac{\partial}{\partial y}\left(k \frac{\partial T}{\partial y}\right) + \frac{\partial}{\partial z}\left(k \frac{\partial T}{\partial z}\right) + \dot{q}_{gen} = \rho c \frac{\partial T}{\partial t}$$

## 2. Standard Forms (Constant Thermal Conductivity)

If the thermal conductivity $k$ is constant (homogeneous and isotropic material), it can be pulled out of the spatial derivatives. Dividing the entire equation by $k$:

$$\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2} + \frac{\dot{q}_{gen}}{k} = \frac{1}{\alpha} \frac{\partial T}{\partial t}$$

Using the Laplacian operator $\nabla^2$, the **Heat Equation** is:

$$\nabla^2 T + \frac{\dot{q}_{gen}}{k} = \frac{1}{\alpha} \frac{\partial T}{\partial t}$$

## 3. Thermal Diffusivity ($\alpha$)

The property $\alpha = \frac{k}{\rho c}$ [$m^2/s$] is the **thermal diffusivity**.
- $k$ represents how well the material conducts heat.
- $\rho c$ (volumetric heat capacity) represents how much heat the material stores.

Thermal diffusivity measures how fast heat diffuses through a material. A high $\alpha$ (like copper) means temperature changes propagate rapidly. A low $\alpha$ (like wood) means the material responds sluggishly to temperature changes.

## 4. Special Cases

The general equation simplifies under specific conditions:

**Steady-State (Poisson's Equation):**
Temperature does not change with time ($\partial T / \partial t = 0$).
$$\nabla^2 T + \frac{\dot{q}_{gen}}{k} = 0$$

**Transient, No Generation (Fourier's Equation):**
Common for heating/cooling processes.
$$\nabla^2 T = \frac{1}{\alpha} \frac{\partial T}{\partial t}$$

**Steady-State, No Generation (Laplace's Equation):**
The simplest case, pure geometric conduction.
$$\nabla^2 T = 0$$
