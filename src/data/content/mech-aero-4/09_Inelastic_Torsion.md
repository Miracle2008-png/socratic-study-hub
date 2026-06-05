# Inelastic Torsion

The standard torsion formula $\tau = T\rho/J$ is strictly valid only when the material behaves in a linear elastic manner (Hooke's law applies, $\tau = G\gamma$). 

What happens if we continue to increase the torque until the maximum shear stress at the outer surface reaches the **yield shear stress** ($\tau_Y$), and then we keep pushing?

## 1. Elasto-Plastic Behavior

When the torque exceeds the maximum elastic limit, the outer layers of the shaft begin to yield. They undergo massive plastic deformation. However, because shear strain $\gamma$ is still defined purely by the geometry of twist ($\gamma = \rho \, d\phi/dx$), the strain remains perfectly linear from the center to the edge.

If we assume the material is perfectly elasto-plastic (it yields at a constant stress $\tau_Y$ without strain hardening), the stress distribution changes radically.

1. **Elastic Core:** The inner portion of the shaft (where $\rho < \rho_Y$) is still experiencing strains below the yield point. The stress here remains linear: $\tau = (\rho/\rho_Y) \tau_Y$.
2. **Plastic Annulus:** The outer portion of the shaft (where $\rho \ge \rho_Y$) has yielded. The stress cannot increase beyond $\tau_Y$. Therefore, the stress is completely constant ($\tau = \tau_Y$) across this entire outer ring.

## 2. Calculating the Elasto-Plastic Torque

To find the total internal torque required to create this elasto-plastic state, we must integrate the stress distribution over the entire cross-section. 

$$ T = \int_A \rho \tau \, dA $$
We split this integral into two parts: the elastic core and the plastic annulus.

$$ T = \int_0^{\rho_Y} \rho \left( \frac{\rho}{\rho_Y} \tau_Y \right) (2\pi\rho \, d\rho) + \int_{\rho_Y}^{c} \rho (\tau_Y) (2\pi\rho \, d\rho) $$

Evaluating this yields:
$$ T = \frac{\pi}{2} \tau_Y \rho_Y^3 + \frac{2\pi}{3} \tau_Y (c^3 - \rho_Y^3) $$

By setting the radius of the elastic core $\rho_Y$ to a specific value, engineers can calculate exactly how much torque is required to push the yielding boundary to that depth.

## 3. Ultimate Plastic Torque ($T_p$)

The absolute maximum theoretical torque a perfectly elasto-plastic solid shaft can endure occurs when the entire cross-section has completely yielded. The elastic core has shrunk to zero ($\rho_Y = 0$).

Substituting $\rho_Y = 0$ into the equation above yields the **plastic torque**:
$$ T_p = \frac{2\pi}{3} \tau_Y c^3 $$

For comparison, the maximum elastic torque (where yielding just barely begins at the outer surface, $\rho_Y = c$) is:
$$ T_Y = \frac{\pi}{2} \tau_Y c^3 $$

The ratio of the ultimate plastic torque to the maximum elastic torque for a solid circular shaft is:
$$ \frac{T_p}{T_Y} = \frac{4}{3} = 1.33 $$
This indicates a solid shaft can carry 33% more torque after initial yielding before catastrophic plastic collapse occurs.
