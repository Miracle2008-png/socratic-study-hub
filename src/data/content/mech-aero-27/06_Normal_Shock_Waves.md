# Normal Shock Waves

When a supersonic flow ($M > 1$) is forced to decelerate or turn suddenly, it cannot do so smoothly. Because the flow is moving faster than the speed of sound, upstream fluid cannot be warned to gradually diverge. Instead, the flow slams into the obstacle, creating a discontinuous, violently abrupt change in properties called a **Shock Wave**.

A **Normal Shock Wave** stands perfectly perpendicular to the flow direction. (e.g., standing inside a CD nozzle, or detached just in front of a blunt re-entry capsule).

## 1. The Physics of the Shock

A normal shock is an infinitesimally thin region (on the order of a few molecular mean free paths, $\sim 10^{-5}$ cm). Within this microscopic distance, massive viscous dissipation and heat conduction occur. 

Because the process is adiabatic (it happens too fast for heat to escape to the walls) but highly irreversible (massive friction), the **entropy of the gas increases dramatically**.

Applying 1D conservation of mass, momentum, and energy across the shock from State 1 (upstream) to State 2 (downstream):
- $\rho_1 V_1 = \rho_2 V_2$
- $P_1 + \rho_1 V_1^2 = P_2 + \rho_2 V_2^2$
- $h_1 + V_1^2/2 = h_2 + V_2^2/2$

## 2. The Mach Number Behind the Shock

Combining the conservation equations yields a direct relationship between the Mach number ahead of the shock ($M_1$) and the Mach number behind the shock ($M_2$):

$$M_2^2 = \frac{M_1^2 + \frac{2}{k-1}}{\frac{2k}{k-1}M_1^2 - 1}$$

**The Fundamental Rules of Normal Shocks:**
1. **$M_1$ MUST be > 1:** A normal shock can only occur in supersonic flow. (If $M_1 < 1$, solving the equations requires a decrease in entropy, which violates the Second Law of Thermodynamics).
2. **$M_2$ MUST be < 1:** The flow behind a normal shock is **always subsonic**. The shock violently slams the brakes on the fluid.
3. As $M_1 \to \infty$, $M_2$ does not go to zero; it asymptotically approaches a lower limit (for air, $M_2 \to \sqrt{1/7} \approx 0.378$).

## 3. The Second Law and Stagnation Pressure

Because the energy equation is $h_{01} = h_{02}$, the **Stagnation Temperature ($T_0$) remains absolutely constant across a shock.** No heat was added or removed.

However, because the shock generates immense entropy ($\Delta s > 0$), the available work of the gas is destroyed. This manifests as a permanent, irrecoverable **drop in Stagnation Pressure ($P_0$)**.
$$P_{02} < P_{01}$$

The ratio of stagnation pressures relates directly to the entropy increase:
$$\Delta s = -R \ln\left(\frac{P_{02}}{P_{01}}\right)$$

Engineers despise normal shocks because this loss in stagnation pressure directly ruins the thrust of a jet engine or the efficiency of a supersonic wind tunnel. Supersonic engine inlets (like on the Concorde or F-15) use sharp geometric wedges to create weaker, angled "oblique shocks" to slow the air down gradually, minimizing stagnation pressure loss before the air enters the compressor.
