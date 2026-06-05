---
title: "Dimensionless Numbers in Convection"
---

# Dimensionless Numbers in Convection

Solving the Navier-Stokes and energy equations analytically to find $h$ is impossible for all but the simplest laminar flows. Instead, engineers rely on extensive experimental data. To make this data universally applicable to any fluid and any scale, results are correlated using dimensionless groups.

## 1. The Reynolds Number ($Re$)

$$Re = \frac{\rho V L_c}{\mu}$$
Ratio of inertial forces to viscous forces. Determines whether the flow is laminar or turbulent.

## 2. The Prandtl Number ($Pr$)

$$Pr = \frac{\nu}{\alpha} = \frac{\mu c_p}{k}$$
Ratio of momentum diffusivity to thermal diffusivity. A pure fluid property (independent of flow geometry or velocity). Relates the thickness of the velocity and thermal boundary layers.

## 3. The Nusselt Number ($Nu$)

This is the most important dimensionless number in convection. It is the dimensionless convection heat transfer coefficient.

$$Nu = \frac{h L_c}{k_{fluid}}$$

Where $L_c$ is the characteristic length (e.g., $x$ for a flat plate, $D$ for a pipe) and $k_{fluid}$ is the thermal conductivity of the fluid.

**Physical Meaning:** 
Imagine a fluid layer of thickness $L_c$. 
- Heat transfer by convection across it: $q_{conv} = h \Delta T$
- Heat transfer by pure conduction across it (if the fluid were stationary): $q_{cond} = (k/L_c)\Delta T$
- Ratio: $\frac{q_{conv}}{q_{cond}} = \frac{h \Delta T}{(k/L_c)\Delta T} = \frac{h L_c}{k} = Nu$

Therefore, the Nusselt number represents the **enhancement of heat transfer due to fluid motion** compared to pure conduction across the same fluid layer.
- $Nu = 1$: Fluid is stationary; heat transfer is pure conduction.
- $Nu = 100$: Convection is transferring heat 100 times faster than pure conduction would.

## 4. The Grashof Number ($Gr$)

In natural convection, fluid moves due to buoyancy, not a fan. The Reynolds number (which relies on a known free-stream velocity $V$) is irrelevant. The driving force is buoyancy, countered by viscosity.

$$Gr = \frac{\text{Buoyancy Forces}}{\text{Viscous Forces}} = \frac{g \beta (T_s - T_\infty) L_c^3}{\nu^2}$$

Where $g$ is gravity, and $\beta$ is the volumetric thermal expansion coefficient (for ideal gases, $\beta = 1/T_{film}$ in Kelvin).
The Grashof number replaces the Reynolds number in natural convection to determine if the buoyancy-driven boundary layer is laminar or turbulent.

## 5. The Rayleigh Number ($Ra$)

In natural convection, empirical correlations often use the Rayleigh number, which is simply the product of $Gr$ and $Pr$.

$$Ra = Gr \cdot Pr = \frac{g \beta (T_s - T_\infty) L_c^3}{\nu \alpha}$$

## Summary of Empirical Correlations

The entire goal of engineering convection analysis is to find the Nusselt number. Once $Nu$ is known, $h$ is trivially calculated ($h = Nu \cdot k / L_c$), and the heat transfer rate is found via Newton's Law of Cooling.

Experiments show that the Nusselt number is always a function of the flow regime and fluid properties:

- **Forced Convection:** $Nu = f(Re, Pr)$
- **Natural Convection:** $Nu = f(Gr, Pr)$ or $Nu = f(Ra, Pr)$
