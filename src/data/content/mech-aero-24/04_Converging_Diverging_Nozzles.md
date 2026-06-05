---
title: "Converging-Diverging Nozzles"
---

# Converging-Diverging Nozzles

To accelerate a rocket exhaust or a supersonic wind tunnel from zero velocity to Mach 3, you must use a **Converging-Diverging (CD) Nozzle** (a de Laval nozzle). 
The gas comes from a high-pressure reservoir ($P_0$), accelerates through a converging section to the throat, and then accelerates further through a diverging section to the exit.

The behavior of the nozzle is entirely dictated by the **back pressure ($P_b$)**—the pressure of the environment the nozzle is exhausting into.

## The Operating Regimes of a CD Nozzle

Consider a CD nozzle attached to a tank at constant $P_0$. We slowly lower the back pressure $P_b$ from $P_0$ down to vacuum.

**1. No Flow ($P_b = P_0$)**
Nothing happens.

**2. Subsonic Flow ($P_b$ slightly less than $P_0$)**
The flow acts like a Venturi tube. It accelerates in the converging section (but $M_{throat} < 1$). Because it didn't reach Mach 1, when it enters the diverging section, it acts like a standard subsonic diffuser: it decelerates, and the pressure rises back up to exactly match $P_b$ at the exit. The flow is entirely subsonic everywhere.

**3. The Subsonic Limit / First Critical Pressure ($P_b = P_c$)**
As we lower $P_b$, the velocity at the throat gets faster. Eventually, we lower $P_b$ just enough that the throat reaches exactly **Mach 1**. 
However, the diverging section is still acting as a subsonic diffuser. The flow reaches Mach 1 at the throat, then immediately slows back down to subsonic speeds in the diverging section, exiting at $P_b$.

**4. Choked Flow and Shock Waves (The Overexpanded Regime)**
What happens if we lower $P_b$ *below* $P_c$? 
The throat is already at Mach 1. It cannot go any faster (this is "choked flow"). Because the throat is at Mach 1, the diverging section now acts as a supersonic nozzle. The flow accelerates to supersonic speeds ($M>1$) in the diverging section, and the pressure drops precipitously.

But the pressure is dropping *too low* compared to the relatively high back pressure $P_b$. The flow is forced to suddenly decelerate to match $P_b$. Supersonic flow can only decelerate violently via a **Normal Shock Wave** standing directly inside the diverging section.
- Before the shock: Supersonic, very low pressure.
- Across the shock: Immense entropy increase, sudden jump in pressure.
- After the shock: Subsonic, slows down further to match $P_b$ at the exit.
As $P_b$ is lowered further, the shock wave gets sucked further down the nozzle toward the exit.

**5. Design Condition / Third Critical Pressure ($P_b = P_d$)**
If we drop $P_b$ to a very specific, very low value, the flow accelerates smoothly to supersonic speeds all the way through the diverging section, and the pressure drops perfectly to hit $P_d$ right at the exit plane. The nozzle is operating flawlessly, entirely isentropic, with a completely supersonic exit jet and no shock waves. 
This is the **design condition** of the nozzle. The ratio $A_e/A^*$ dictates exactly what this exit Mach number and $P_d$ must be.

**6. Underexpanded Regime ($P_b < P_d$)**
If the nozzle exhausts into a vacuum (like a rocket in space), the pressure at the exit plane $P_e$ is higher than the surrounding space $P_b$. The flow exits the nozzle and violently expands outward in 3D space (creating expansion fans). The nozzle is "underexpanded" because the diverging section wasn't long enough to expand the gas down to the vacuum pressure.
