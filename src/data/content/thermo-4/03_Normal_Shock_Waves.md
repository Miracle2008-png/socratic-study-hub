# Normal Shock Waves

A shock wave is one of the most dramatic phenomena in gas dynamics — a nearly discontinuous jump in flow properties that occurs when a supersonic flow is forced to decelerate. Understanding shock waves is essential for supersonic aircraft design, nozzle engineering, and high-speed aerodynamics.

## 1. Physical Origin of Shocks

Imagine a piston accelerating in a tube of gas. As the piston pushes, it generates pressure waves that travel ahead at the speed of sound. If the piston accelerates faster than the speed of sound, these pressure waves cannot outrun the piston — they pile up and coalesce into a single, very thin (a few molecular mean free paths, ~10⁻⁷ m), extremely intense compression wave: the shock.

**In a C-D nozzle:** The supersonic flow in the diverging section has higher velocity than the speed of sound. If the back pressure demands a pressure rise that cannot be communicated upstream (signals travel at the speed of sound — they cannot travel upstream in supersonic flow), the flow adjusts by forming an abrupt shock.

## 2. The Normal Shock Equations (Rankine-Hugoniot Relations)

A normal shock is a shock wave perpendicular to the flow direction. Applying conservation of mass, momentum, and energy across the shock (treating it as a zero-thickness discontinuity), we derive the **Rankine-Hugoniot relations**:

**Mach Number after the shock:**
$$ M_2^2 = \frac{M_1^2 + \frac{2}{k-1}}{\frac{2k}{k-1}M_1^2 - 1} $$

**Key results for $k = 1.4$ air:**
*   The downstream Mach number is always **subsonic** ($M_2 < 1$) for any supersonic upstream $M_1 > 1$.
*   As $M_1 \rightarrow \infty$: $M_2 \rightarrow \sqrt{\frac{k-1}{2k}} = 0.378$.

**Static Pressure Ratio:**
$$ \frac{P_2}{P_1} = \frac{2k M_1^2 - (k-1)}{k+1} $$
Pressure jumps dramatically across the shock.

**Static Temperature Ratio:**
$$ \frac{T_2}{T_1} = \frac{[2kM_1^2 - (k-1)][(k-1)M_1^2 + 2]}{(k+1)^2 M_1^2} $$
Temperature rises across the shock.

**Stagnation Pressure Ratio (Loss):**
$$ \frac{P_{0,2}}{P_{0,1}} = \left[\frac{(k+1)M_1^2/2}{1 + (k-1)M_1^2/2}\right]^{k/(k-1)} \left[\frac{2k M_1^2/(k+1) - (k-1)/(k+1)}{1}\right]^{-1/(k-1)} $$

The stagnation pressure always **decreases** across a shock. This stagnation pressure loss is a direct measure of thermodynamic irreversibility (entropy production) in the shock. This is why shock waves cause aerodynamic drag — they are irreversible dissipators of total pressure.

## 3. Practical Example: Mach 2 Normal Shock

For air ($k = 1.4$) with $M_1 = 2.0$:
*   $M_2 = 0.577$
*   $P_2/P_1 = 4.50$ (pressure quadruples)
*   $T_2/T_1 = 1.69$ (temperature rises 69%)
*   $P_{0,2}/P_{0,1} = 0.721$ (28% stagnation pressure loss)

## 4. The Entropy Increase Across a Shock

By the Second Law, the entropy must increase across the shock (irreversible process):
$$ \Delta s = c_p \ln\frac{T_2}{T_1} - R\ln\frac{P_2}{P_1} > 0 $$

The entropy increase and stagnation pressure loss are directly related:
$$ \frac{P_{0,2}}{P_{0,1}} = \exp\left(-\frac{\Delta s}{R}\right) $$

A stagnation pressure loss of 28% for $M_1 = 2$ represents substantial entropy generation. At $M_1 = 5$: $P_{0,2}/P_{0,1} = 0.061$ — a catastrophic 94% stagnation pressure loss. This is why inlet design for supersonic aircraft is so critical: the inlet must slow the flow from freestream supersonic to subsonic for the engine using oblique shocks (which cause much less loss) rather than a single normal shock.
