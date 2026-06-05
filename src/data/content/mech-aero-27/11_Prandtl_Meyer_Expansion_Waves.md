# Prandtl-Meyer Expansion Waves

Oblique shock waves occur when a supersonic flow is forced to turn *into* itself (a concave corner), compressing the gas. 
What happens when a supersonic flow turns *away* from itself (a convex corner, like the trailing edge of an airfoil)? The flow must expand to fill the void. 

This creates an **Expansion Wave**. Unlike a shock wave, which is a violent, infinitely thin, irreversible discontinuity, an expansion wave is a smooth, continuous, completely isentropic "fan" of Mach waves.

## 1. The Expansion Fan

Because an expansion wave is a gradual, isentropic process, it does not happen instantly. As the flow negotiates the convex corner, it passes through a fan-shaped region.
- The fan starts at the corner and spreads outward.
- The front boundary of the fan is a Mach wave defined by the incoming Mach number ($M_1$).
- The rear boundary of the fan is a Mach wave defined by the exiting Mach number ($M_2$).
- Inside the fan, the flow is smoothly and continuously turning, accelerating, and expanding.

## 2. Properties Across an Expansion Wave

Because the process is expanding the gas, the properties change in the exact opposite direction of a shock wave:
- **Mach Number ($M$):** Increases ($M_2 > M_1$). The flow accelerates.
- **Static Pressure ($P$):** Decreases continuously.
- **Static Temperature ($T$):** Decreases continuously.
- **Density ($\rho$):** Decreases continuously.

Because it is isentropic ($\Delta s = 0$), the Stagnation Pressure and Stagnation Temperature remain absolutely constant ($P_{01} = P_{02}$, $T_{01} = T_{02}$). No energy availability is lost.

## 3. The Prandtl-Meyer Function ($\nu$)

To calculate how much the Mach number changes when the flow turns by a specific angle $\theta$, we integrate the differential changes across the infinite number of tiny Mach waves in the fan.

This yields the **Prandtl-Meyer Function**, $\nu(M)$:
$$\nu(M) = \sqrt{\frac{k+1}{k-1}} \tan^{-1}\left( \sqrt{\frac{k-1}{k+1}(M^2 - 1)} \right) - \tan^{-1}(\sqrt{M^2 - 1})$$

The function $\nu(M)$ is an angle (usually in degrees). It represents the angle a flow would have to turn to accelerate from exactly Mach 1 to the given Mach number $M$.
Like shock relations, $\nu(M)$ is tabulated in standard Isentropic Flow Tables.

## 4. Solving Expansion Problems

Solving a corner expansion is incredibly simple using the tables.

Let $\theta$ be the angle of the physical convex corner.
1. Given the incoming Mach number $M_1$, look up the value of $\nu(M_1)$ in the tables.
2. The exiting Prandtl-Meyer angle is simply:
   $$\nu(M_2) = \nu(M_1) + \theta$$
3. Take this new value $\nu(M_2)$, go back to the tables, and look up the corresponding $M_2$. 
4. Since the flow is isentropic, to find the new pressure $P_2$, use the standard isentropic ratios for $M_1$ and $M_2$:
   $$P_2 = P_1 \left( \frac{P_2/P_0}{P_1/P_0} \right)$$

## 5. Maximum Expansion (Vacuum Limit)

Look at the Prandtl-Meyer function equation. As $M \to \infty$, the function does not go to infinity. It reaches a finite mathematical limit.
For air ($k=1.4$), $\nu_{max} \approx 130^\circ$.

If a flow at Mach 1 encounters a corner that bends away at an angle greater than $130^\circ$, the flow will simply detach from the wall, expanding out into a perfect vacuum ($P=0$). It is physically impossible to turn a supersonic airflow around a hairpin corner.
