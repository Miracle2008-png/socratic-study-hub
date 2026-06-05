# Property Changes Across Normal Shocks

To solve engineering problems involving normal shock waves, we rely on the exact algebraic relations derived from the conservation laws. Because these equations are complex, they are universally tabulated in **Normal Shock Tables**, indexed by the incoming upstream Mach number ($M_1$).

## 1. The Property Ratios

Across a normal shock, the fluid violently decelerates from supersonic to subsonic. This massive loss of kinetic energy is converted instantly into internal energy, compressing and heating the gas.

**Static Pressure Ratio ($P_2 / P_1$):**
The static pressure jumps massively. The shock compresses the gas.
$$\frac{P_2}{P_1} = \frac{2k}{k+1}M_1^2 - \frac{k-1}{k+1}$$
*Example: If $M_1 = 3.0$ (air), $P_2 / P_1 = 10.33$. The pressure jumps 10-fold across a thickness of a fraction of a millimeter.*

**Static Temperature Ratio ($T_2 / T_1$):**
The gas heats up intensely due to compression and viscous dissipation.
$$\frac{T_2}{T_1} = \left( 1 + \frac{2k}{k+1}(M_1^2 - 1) \right) \left( \frac{2 + (k-1)M_1^2}{(k+1)M_1^2} \right)$$
*Example: If $M_1 = 3.0$, $T_2 / T_1 = 2.68$. If the air was at 300K, it suddenly jumps to 804K.*

**Density Ratio ($\rho_2 / \rho_1$):**
The density increases (velocity must drop, $\rho_1 V_1 = \rho_2 V_2$).
$$\frac{\rho_2}{\rho_1} = \frac{V_1}{V_2} = \frac{(k+1)M_1^2}{2 + (k-1)M_1^2}$$
Note: Unlike pressure, which goes to infinity as $M_1 \to \infty$, the density ratio approaches a finite limit: $(k+1)/(k-1)$. For air, the maximum possible density jump across a normal shock is exactly 6.0.

## 2. Using Normal Shock Tables

In practice, a Normal Shock Table has columns for:
$M_1 \quad | \quad M_2 \quad | \quad P_2/P_1 \quad | \quad \rho_2/\rho_1 \quad | \quad T_2/T_1 \quad | \quad P_{02}/P_{01} \quad | \quad P_{02}/P_1$

**Example Workflow:**
A supersonic flow at $M=2.0$, $P=50$ kPa encounters a normal shock.
1. Look up $M_1 = 2.0$ in the table.
2. Read $M_2 = 0.577$. (The flow is now subsonic).
3. Read $P_2/P_1 = 4.5$. The new static pressure is $50 \times 4.5 = 225$ kPa.
4. Read $P_{02}/P_{01} = 0.72$. You lost 28% of your valuable stagnation pressure (energy availability) forever.

## 3. The Fictitious Throat ($A_2^*$)

Recall that stagnation pressure drops across a shock ($P_{02} < P_{01}$). 
By combining the choked mass flow equations for State 1 and State 2 (since $\dot{m}$ is constant, and $T_{01} = T_{02}$), we find a critical relationship regarding the "sonic throat" area:

$$\frac{A_2^*}{A_1^*} = \frac{P_{01}}{P_{02}}$$

Because $P_{02}$ is smaller than $P_{01}$, $A_2^*$ must be larger than $A_1^*$.

**Physical Meaning:** 
If a CD nozzle has a throat area $A_1^*$, the flow reaches Mach 1 there. If a shock wave happens in the diverging section, the entropy generated destroys stagnation pressure. 
If you tried to accelerate this shocked, subsonic flow *back* up to Mach 1, you would have to squeeze it through a brand new converging nozzle. But because it has less stagnation pressure, you cannot push the same mass flow through the original small throat $A_1^*$. The new required throat to choke the flow ($A_2^*$) must be physically larger!
