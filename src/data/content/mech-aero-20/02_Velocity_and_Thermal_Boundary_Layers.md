# Velocity and Thermal Boundary Layers

To understand how $h$ (the convection coefficient) behaves, we must understand the thin region of fluid near the surface where velocity and temperature change from the wall conditions to the free-stream conditions.

## 1. The Velocity Boundary Layer

Consider uniform fluid flowing at velocity $V$ approaching a flat plate. 
- At the wall ($y=0$), the velocity is 0 (no-slip condition).
- Far from the wall, the velocity is $V$.
- The region between $y=0$ and $y=\delta$, where viscous effects are significant and the velocity changes from 0 to $0.99V$, is called the **velocity boundary layer**.

The thickness of this layer, $\delta(x)$, starts at 0 at the leading edge and grows as the flow moves downstream along the plate ($x$-direction). Viscous friction slows down more and more fluid as the flow progresses.

The slope of the velocity profile at the wall, $\left.\frac{\partial u}{\partial y}\right|_{y=0}$, determines the **wall shear stress**, $\tau_w = \mu \left.\frac{\partial u}{\partial y}\right|_{y=0}$.

## 2. The Thermal Boundary Layer

Now assume the plate is heated to $T_s$ and the fluid arrives at $T_\infty$.
- At the wall ($y=0$), the fluid is at $T_s$.
- Far from the wall, the fluid is at $T_\infty$.
- The region between $y=0$ and $y=\delta_t$, where the temperature changes from $T_s$ to $0.99T_\infty$ (or $0.99(T_s-T_\infty)$ difference), is the **thermal boundary layer**.

Like the velocity boundary layer, the thermal boundary layer thickness $\delta_t(x)$ grows with $x$ as heat diffuses further out into the fluid stream.

Recall the definition of $h$:
$$h = \frac{-k_{fluid}}{T_s - T_\infty} \left.\frac{\partial T}{\partial y}\right|_{y=0}$$

The slope of the temperature profile at the wall, $\left.\frac{\partial T}{\partial y}\right|_{y=0}$, is inversely proportional to the thermal boundary layer thickness $\delta_t$. 
- Where the thermal boundary layer is very thin (near the leading edge of a plate), the temperature gradient is extremely steep. Therefore, **$h$ is very high at the leading edge**.
- As the boundary layer grows thicker downstream, the temperature gradient flattens out, and **$h$ decreases as $x$ increases**.

## 3. The Prandtl Number (Pr)

The relative thickness of the velocity and thermal boundary layers is governed by fluid properties. 

- Momentum diffuses at a rate proportional to kinematic viscosity $\nu$ [m²/s].
- Heat diffuses at a rate proportional to thermal diffusivity $\alpha$ [m²/s].

The ratio of these two diffusivities is the **Prandtl Number ($Pr$)**:

$$Pr = \frac{\text{Molecular diffusivity of momentum}}{\text{Molecular diffusivity of heat}} = \frac{\nu}{\alpha} = \frac{\mu c_p}{k}$$

- **$Pr \approx 1$ (Gases):** Momentum and heat diffuse at roughly the same rate. The velocity and thermal boundary layers grow together ($\delta \approx \delta_t$).
- **$Pr \gg 1$ (Oils):** Momentum diffuses much faster than heat. The velocity boundary layer is much thicker than the thermal boundary layer ($\delta \gg \delta_t$).
- **$Pr \ll 1$ (Liquid Metals):** Heat conducts incredibly fast compared to momentum diffusion. The thermal boundary layer is much thicker than the velocity boundary layer ($\delta_t \gg \delta$).
