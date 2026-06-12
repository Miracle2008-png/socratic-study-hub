# Fick's Second Law (Transient Diffusion)

Fick's First Law ($J_A = -D_{AB} dC_A/dz$) describes steady-state diffusion, where the concentration at any given point does not change with time. However, many critical industrial processes are unsteady-state (transient).

When you steep tea in hot water, case-harden a steel gear with carbon, or dope a silicon wafer with phosphorus, the concentration of the diffusing species at any specific location within the medium changes continuously as time passes. To model this, we must derive Fick's Second Law.

## 1. Derivation of the Unsteady-State Equation

Consider a 1-dimensional differential control volume of thickness $\Delta z$ and cross-sectional area $A$. We perform a species mass balance over this volume:
$$ \text{Accumulation} = \text{Input} - \text{Output} + \text{Generation} - \text{Consumption} $$

Assuming no chemical reaction occurs, Generation = 0 and Consumption = 0.

The rate of moles of species A entering at $z$ is $(J_A|_z)(A)$.
The rate of moles of species A leaving at $z + \Delta z$ is $(J_A|_{z+\Delta z})(A)$.
The rate of accumulation of A inside the volume is $\frac{\partial C_A}{\partial t} (A \Delta z)$.

Equating these:
$$ \frac{\partial C_A}{\partial t} (A \Delta z) = (J_A|_z)(A) - (J_A|_{z+\Delta z})(A) $$

Dividing by the volume ($A \Delta z$) and taking the limit as $\Delta z \to 0$ yields the continuity equation for species A:
$$ \frac{\partial C_A}{\partial t} = -\frac{\partial J_A}{\partial z} $$

Now, substitute Fick's First Law ($J_A = -D_{AB} \frac{\partial C_A}{\partial z}$) into the continuity equation:
$$ \frac{\partial C_A}{\partial t} = -\frac{\partial}{\partial z} \left( -D_{AB} \frac{\partial C_A}{\partial z} \right) $$

If we assume the diffusion coefficient $D_{AB}$ is constant (does not vary with concentration or position), it can be pulled out of the derivative to yield **Fick's Second Law**:
$$ \frac{\partial C_A}{\partial t} = D_{AB} \frac{\partial^2 C_A}{\partial z^2} $$

This is a parabolic partial differential equation. It is mathematically identical to the 1-D transient heat conduction equation ($\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial z^2}$).

## 2. Solving Fick's Second Law

Solving Fick's Second Law predicts the exact concentration profile $C_A(z,t)$ at any depth $z$ and at any time $t$. Because it is a PDE, it requires one initial condition (at $t=0$) and two boundary conditions (at $z=0$ and $z=L$).

### Case: Diffusion into a Semi-Infinite Medium
A common industrial scenario is exposing a thick solid slab to a constant surface concentration of a gas or liquid.
*   **Initial Condition:** At $t=0$, the concentration inside the solid is uniform ($C_A = C_{A,i}$ for all $z > 0$).
*   **Boundary Condition 1:** At the surface ($z=0$), the concentration is suddenly raised to and held at a constant value $C_{A,s}$ for $t > 0$.
*   **Boundary Condition 2:** Deep inside the solid ($z \to \infty$), the concentration remains at the initial value ($C_A = C_{A,i}$).

Under these boundary conditions, Fick's Second Law can be solved using the Laplace Transform to yield:
$$ \frac{C_A(z,t) - C_{A,s}}{C_{A,i} - C_{A,s}} = \text{erf}\left(\frac{z}{2\sqrt{D_{AB} t}}\right) $$

Where **erf** is the **Gaussian error function**, defined as:
$$ \text{erf}(x) = \frac{2}{\sqrt{\pi}} \int_0^x e^{-\eta^2} d\eta $$
Values of the error function are universally tabulated in engineering handbooks.

## 3. The Penetration Depth

The term $2\sqrt{D_{AB} t}$ acts as a characteristic length scale for diffusion. It provides a quick, back-of-the-envelope way to estimate how deep a diffusing species has penetrated into a medium after a given time $t$. 
If you want to double the depth of diffusion, you must increase the time by a factor of **four**.

## 4. Transient Diffusion Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "steady", "data": { "label": "Steady State", "icon": "Minus", "description": "dC/dt = 0 (First Law)." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "trans", "data": { "label": "Transient State", "icon": "Activity", "description": "dC/dt = D * d^2C/dz^2." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "pen", "data": { "label": "Penetration Depth", "icon": "ArrowDown", "description": "Scales as sqrt(t)." }, "style": { "background": "#b45309", "color": "#fef3c7" } }
  ],
  "edges": [
    { "source": "steady", "target": "trans", "animated": true },
    { "source": "trans", "target": "pen", "animated": true }
  ]
}
```
