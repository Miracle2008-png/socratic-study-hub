# 1D Isentropic Flow in Variable Area Ducts

How do we accelerate a gas to supersonic speeds? We must pass it through a duct with a changing cross-sectional area (a nozzle).

In incompressible flow (liquids), the rule is simple: if the area shrinks, the velocity increases ($A_1 V_1 = A_2 V_2$). 
In compressible flow, as the area shrinks, the velocity increases, but the pressure drops, causing the density to drop. The area must shrink to accommodate the higher velocity, but it must expand to accommodate the lower density. Which effect wins?

## 1. The Area-Velocity Relation

By combining the differential forms of the conservation of mass ($d(\rho A V) = 0$), conservation of momentum (Euler's equation, $dP = -\rho V dV$), and the speed of sound definition ($dP = c^2 d\rho$), we arrive at the most famous equation in gas dynamics:

$$\frac{dA}{A} = (M^2 - 1) \frac{dV}{V}$$

This equation dictates exactly how duct area ($A$) relates to fluid velocity ($V$) based entirely on the Mach number ($M$).

## 2. Subsonic Flow ($M < 1$)

If $M < 1$, the term $(M^2 - 1)$ is **negative**.
Therefore, $dA$ and $dV$ must have opposite signs.
- **To accelerate ($dV > 0$) a subsonic flow:** $dA$ must be negative. The duct must converge (shrink).
- **To decelerate ($dV < 0$) a subsonic flow:** $dA$ must be positive. The duct must diverge (expand).
*(This exactly matches our intuition from incompressible liquid flow).*

## 3. Supersonic Flow ($M > 1$)

If $M > 1$, the term $(M^2 - 1)$ is **positive**.
Therefore, $dA$ and $dV$ must have the *same* sign.
- **To accelerate ($dV > 0$) a supersonic flow:** $dA$ must be positive. **The duct must DIVERGE (expand).**
- **To decelerate ($dV < 0$) a supersonic flow:** $dA$ must be negative. The duct must CONVERGE (shrink).

This is highly counter-intuitive. In supersonic flow, the density drops so incredibly fast as the fluid accelerates that the duct must flare outward just to make room for the rapidly expanding gas.

## 4. Sonic Flow ($M = 1$)

If $M = 1$, the term $(M^2 - 1) = 0$.
Therefore, $\frac{dA}{A} = 0$, meaning the area $A$ is at a local minimum or maximum.

For a flow to transition from subsonic to supersonic, it must start in a converging duct (accelerating), reach $M=1$ exactly where the duct area reaches a minimum, and then enter a diverging duct to continue accelerating to $M>1$.

This minimum area throat where $M=1$ is called the **sonic throat**, denoted $A^*$. 
**Rule:** Mach 1 can *only* occur at a throat. (However, having a throat does not guarantee Mach 1; the flow might just speed up subsonically and then slow back down).

## 5. The Isentropic Area Ratio ($A/A^*$)

Using the isentropic relations, we can write a formula relating the local Area $A$ at any point to the critical throat area $A^*$, based entirely on the local Mach number:

$$\frac{A}{A^*} = \frac{1}{M} \left[ \frac{2 + (k-1)M^2}{k+1} \right]^{\frac{k+1}{2(k-1)}}$$

This function has a minimum value of 1.0 at $M=1$. 
For any given $A/A^* > 1$ (e.g., the duct is twice as big as the throat, $A/A^* = 2.0$), there are exactly two mathematical solutions for Mach number: one subsonic, and one supersonic. Which one occurs depends on the back pressure at the exit of the nozzle.
