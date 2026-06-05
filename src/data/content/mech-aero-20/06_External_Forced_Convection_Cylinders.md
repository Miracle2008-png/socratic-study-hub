---
title: "External Forced Convection: Cylinders and Spheres"
---

# External Forced Convection: Cylinders and Spheres

Flow over curved surfaces like cylinders (pipes, tubes in heat exchangers) and spheres (droplets, ball bearings) introduces flow separation and wake formation, making the heat transfer mechanics vastly more complex than a flat plate.

## 1. Flow Separation

When fluid flows around a cylinder, it accelerates over the front half (pressure decreases) and decelerates over the rear half (pressure increases). 

This "adverse pressure gradient" on the rear half forces the boundary layer fluid to slow down. Eventually, the fluid near the wall comes to a complete halt and reverses direction. The boundary layer detaches from the surface, creating a massive, chaotic, low-pressure turbulent **wake** behind the cylinder.

## 2. Local Heat Transfer Profile

The local convection coefficient $h_\theta$ varies dramatically around the circumference of a cylinder (angle $\theta$ measured from the front stagnation point).

- **$\theta = 0^\circ$ (Front Stagnation Point):** $h_\theta$ is highest here because the thermal boundary layer is thinnest as the fluid slams into the cylinder.
- **$0^\circ < \theta < 80^\circ$:** $h_\theta$ decreases as the laminar boundary layer grows.
- **$\theta \approx 80^\circ$ (Separation Point for Laminar Flow):** $h_\theta$ reaches a minimum. The boundary layer separates.
- **$\theta > 80^\circ$ (The Wake):** The chaotic swirling eddies in the wake wash back against the rear of the cylinder, enhancing mixing. $h_\theta$ actually *increases* in the wake region.

If the incoming flow is fast enough that the boundary layer becomes turbulent *before* it separates, the turbulent momentum delays separation until $\theta \approx 140^\circ$. This dramatically reduces the size of the wake (lowering aerodynamic drag) and alters the $h_\theta$ profile, creating two distinct minima.

## 3. Average Nusselt Number Correlations

Because local behavior is so complex, engineers rely almost exclusively on empirical correlations for the **average** Nusselt number $\overline{Nu}_D$ over the entire surface. The characteristic length is the outer diameter $D$.

**The Churchill-Bernstein Correlation for a Cylinder:**
This is the most comprehensive and widely used correlation, valid for all $Re_D$ and all $Pr \ge 0.2$:

$$\overline{Nu}_D = 0.3 + \frac{0.62 \, Re_D^{1/2} \, Pr^{1/3}}{\left[1 + (0.4/Pr)^{2/3}\right]^{1/4}} \left[ 1 + \left( \frac{Re_D}{282,000} \right)^{5/8} \right]^{4/5}$$

Properties are evaluated at the film temperature $T_f$.

**The Whitaker Correlation for a Sphere:**
Valid for $3.5 \le Re_D \le 7.6 \times 10^4$ and $0.71 \le Pr \le 380$:

$$\overline{Nu}_D = 2 + \left( 0.4 Re_D^{1/2} + 0.06 Re_D^{2/3} \right) Pr^{0.4} \left( \frac{\mu_\infty}{\mu_s} \right)^{1/4}$$

Note the leading "2". For a stationary sphere in a completely stagnant, infinite fluid medium, pure radial conduction yields $Nu_D = 2$. Convection enhances heat transfer above this baseline. 
Also, note the viscosity ratio $\mu_\infty / \mu_s$ (free stream viscosity vs. viscosity at surface temperature) used to correct for large property variations across the boundary layer. All other properties are evaluated at $T_\infty$.
