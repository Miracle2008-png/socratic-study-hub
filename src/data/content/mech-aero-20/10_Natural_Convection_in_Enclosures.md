# Natural Convection in Enclosures

When fluid is trapped between two surfaces at different temperatures (like air between double-pane windows, or fluid inside solar collectors), natural convection establishes complex internal circulation cells. The boundary layer cannot escape to infinity; it collides with the opposing wall.

## 1. Effective Thermal Conductivity

Heat transfer across an enclosure is characterized not by a convection coefficient $h$, but by an **effective thermal conductivity ($k_{eff}$)**.

We calculate the total heat transfer as if it were pure conduction across the gap of thickness $L$, but we replace the fluid's actual thermal conductivity $k$ with $k_{eff}$.
$$\dot{Q} = k_{eff} A \frac{T_1 - T_2}{L}$$

The Nusselt number in this context is defined as the ratio of effective to actual conductivity:
$$Nu = \frac{k_{eff}}{k}$$
- If $Nu = 1$, the fluid is perfectly stationary, and heat transfers by pure conduction.
- If $Nu > 1$, convection cells have formed, enhancing heat transfer.

## 2. Horizontal Enclosures

Fluid is trapped between a hot plate and a cold plate separated by distance $L$.

**Heating from Above ($T_{top} > T_{bottom}$):**
The hot, light fluid is already at the top. The cold, heavy fluid is at the bottom. The system is unconditionally stable. No convection can occur.
- **Result:** $Nu = 1$. Heat transfer is purely via conduction.

**Heating from Below ($T_{bottom} > T_{top}$):**
The hot fluid wants to rise. However, viscous forces initially prevent it. Only when the buoyancy force overcomes viscous drag ($Ra_L \approx 1708$, the critical Rayleigh number) does the fluid break into hexagonal circulation patterns called **Bénard cells**.
- $Ra_L < 1708$: Pure conduction ($Nu = 1$).
- $1708 < Ra_L < 3 \times 10^5$: Laminar convection cells form. $Nu \approx 0.059 Ra_L^{0.4}$.
- $Ra_L > 3 \times 10^5$: Convection cells break down into chaotic turbulence.

## 3. Vertical Enclosures (e.g., Double-Pane Windows)

Fluid is trapped between two vertical plates (left plate at $T_1$, right at $T_2$), separated by gap $L$ with height $H$.
- Fluid rises along the hot wall, flows across the top, descends along the cold wall, and flows across the bottom, creating a massive continuous circulation cell.

For building windows, the aspect ratio $H/L$ is large.
- If the gap $L$ is very small, $Ra_L$ is tiny, and $Nu \approx 1$ (pure conduction).
- If the gap $L$ is too large, strong convection loops form, increasing $k_{eff}$ and ruining the insulation value.
- **Window Design:** Engineers optimize the gap spacing (typically 10-15 mm) to maximize the layer of air (increasing conduction resistance) without triggering strong convection cells. Using a heavy gas like Argon (high molecular weight $\implies$ higher density $\implies$ higher kinematic viscosity) suppresses convection cells further, improving window insulation.
