---
title: "Choked Flow and Mass Flow Rate"
---

# Choked Flow and Mass Flow Rate

One of the most profound phenomena in compressible fluid dynamics is **choked flow**. It fundamentally limits how much gas you can push through a hole or pipe.

## 1. The Physics of Choking

Consider a simple converging nozzle (just a tank emptying through a hole into the atmosphere). The tank is at high pressure $P_0$, and the atmosphere is at back pressure $P_b$.

Mass flow rate is $\dot{m} = \rho A V$.
As you lower the back pressure $P_b$ (or increase the tank pressure $P_0$), the fluid velocity $V$ at the exit increases, so the mass flow rate $\dot{m}$ increases.

However, as discussed previously, information in a fluid travels at the speed of sound. The only way the gas inside the tank "knows" that the back pressure $P_b$ is low is because pressure waves (sound waves) travel upstream from the exit into the tank.

When the velocity at the exit reaches **Mach 1**, the fluid is moving out at exactly the speed of sound. The pressure waves trying to travel upstream are moving at the speed of sound relative to the fluid. Therefore, relative to the nozzle, the pressure waves are traveling at $(c - V) = (c - c) = 0$. 

The pressure waves are trapped at the exit. **The fluid in the tank is now physically cut off from "knowing" anything about the environment outside.** 

If you lower the back pressure $P_b$ even further, into a perfect vacuum, the flow at the exit will remain exactly at Mach 1. The mass flow rate has reached a strict, unpassable maximum limit. This is **choked flow**.

## 2. The Choked Mass Flow Equation

The maximum possible mass flow rate occurs when the throat (minimum area $A^*$) reaches Mach 1.
Using $\dot{m} = \rho^* A^* V^*$, and substituting the critical state relations ($\rho^*$ in terms of $\rho_0$, and $V^* = c^* = \sqrt{kRT^*}$), we get the choked mass flow equation:

$$\dot{m}_{max} = \frac{A^* P_0}{\sqrt{T_0}} \sqrt{\frac{k}{R}} \left( \frac{2}{k+1} \right)^{\frac{k+1}{2(k-1)}}$$

For air ($k=1.4, R=287$):
$$\dot{m}_{max} = 0.0404 \frac{A^* P_0}{\sqrt{T_0}}$$
*(where $P_0$ is in Pascals, $T_0$ is in Kelvin, $A^*$ is in $m^2$, yielding $kg/s$)*

**Key Takeaways from the Equation:**
Once a nozzle is choked, the mass flow rate depends ONLY on the stagnation conditions in the tank ($P_0$, $T_0$) and the size of the throat ($A^*$). It is 100% independent of the downstream back pressure $P_b$.
- To push more mass through a choked rocket engine, you cannot lower the outside pressure. You must either increase the chamber pressure ($P_0$), decrease the chamber temperature ($T_0$ - though this hurts thrust), or physically drill a larger throat ($A^*$).

## 3. When does Choking Occur?

A converging nozzle chokes when the back pressure $P_b$ drops below the critical pressure $P^*$.
Recall that $P^* / P_0 = 0.528$ for air.

Therefore, **any time you vent a tank of air to the atmosphere ($P_b = 1$ atm), the flow will instantly choke if the tank pressure is greater than $1 / 0.528 = 1.89$ atm (about 28 psi absolute, or 13 psi gage).** 
Releasing air from a standard 100 psi shop air compressor will always produce choked, sonic flow at the valve exit.
