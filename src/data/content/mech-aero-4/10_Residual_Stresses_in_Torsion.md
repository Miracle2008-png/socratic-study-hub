---
title: "Residual Stresses in Torsion"
---

# Residual Stresses in Torsion

When a shaft is twisted into the inelastic (elasto-plastic) region and the applied torque is subsequently removed, the shaft does not return to its original unstressed state. 

Permanent plastic deformation has occurred. Even with zero external torque applied, a complex internal stress distribution remains permanently locked inside the material. These are called **residual stresses**.

## 1. The Principle of Superposition for Unloading

The calculation of residual stresses relies on a brilliant application of the principle of superposition. We treat the loading and unloading as two separate events.

1. **Loading Phase:** The shaft is loaded to an elasto-plastic state with torque $T$. This creates a non-linear stress distribution (an elastic core and a constant-stress plastic annulus at $\tau_Y$).
2. **Unloading Phase:** The removal of the torque $T$ is mathematically modeled as the application of a fictitious torque equal to $-T$ (an equal and opposite torque). 
   *Crucial Insight:* Material unloading is almost always perfectly elastic, even if the material was heavily plastically deformed during loading. Therefore, the stress distribution caused by the $-T$ unloading torque is perfectly linear and is calculated using the elastic torsion formula: $\tau' = \frac{-T\rho}{J}$.

## 2. Calculating the Residual Stress Distribution

The final residual stress at any radial distance $\rho$ is simply the algebraic sum of the stress from the loading phase and the stress from the elastic unloading phase.

$$ \tau_{residual} = \tau_{loading} + \tau_{unloading} $$

- **In the elastic core ($\rho < \rho_Y$):**
  $$ \tau_{res} = \left( \frac{\rho}{\rho_Y} \tau_Y \right) - \left( \frac{T\rho}{J} \right) $$
- **In the plastic annulus ($\rho \ge \rho_Y$):**
  $$ \tau_{res} = \tau_Y - \left( \frac{T\rho}{J} \right) $$

## 3. The Shape of the Residual Stress Profile

Plotting these equations reveals a highly counter-intuitive stress profile trapped inside the resting shaft:
- At the outer surface ($\rho = c$), the residual shear stress is typically large and acts in the *opposite direction* to the original applied torque.
- Moving inward, the residual stress drops to zero at some intermediate radius, and then reverses direction.
- Near the center of the shaft, the residual stress acts in the *same direction* as the original applied torque.

The total integral of this trapped stress profile over the cross-section must mathematically equal exactly zero, because there is no external torque acting on the shaft.

## 4. Engineering Utility (Autofrettage)

Residual stresses are not always bad. If a drive shaft is designed to only ever spin in one direction, a manufacturer can intentionally overload it during fabrication to induce plastic yielding and create this residual stress profile. 

When the shaft is put into service and loaded in the same direction, the applied stress must first overcome the negative residual stress at the outer surface before it can reach the yield point. This intentional prestressing (autofrettage) artificially increases the elastic load-carrying capacity of the shaft.
