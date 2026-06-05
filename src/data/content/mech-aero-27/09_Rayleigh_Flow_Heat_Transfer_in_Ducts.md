---
title: "Rayleigh Flow: Heat Transfer in Ducts"
---

# Rayleigh Flow: Heat Transfer in Ducts

While Fanno flow models friction, **Rayleigh Flow** is the theoretical model of 1D compressible flow in a **constant-area duct with Heat Transfer**, but assuming it is **frictionless**.

This model is the foundational approximation for understanding flow inside combustion chambers (like the combustor in a ramjet, scramjet, or turbojet), where massive amounts of heat are rapidly dumped into the high-speed air.

## 1. The Physics of Rayleigh Flow

In Rayleigh flow, heat is added ($q_{in} > 0$) or removed (cooling, $q_{in} < 0$).
Because heat is added, the energy equation dictates that the **Stagnation Temperature ($T_0$) increases**.

Applying the conservation laws, the change in Mach number along the duct due to heat transfer is governed by:
$$\frac{dM^2}{M^2} \propto \frac{1 + k M^2}{1 - M^2} dT_0$$

Again, the denominator $(1 - M^2)$ rules everything.

**Heating the Flow ($dT_0 > 0$):**
- **Subsonic Flow ($M < 1$):** Denominator is positive. $dM$ is positive. Adding heat to a subsonic flow makes it **accelerate**.
- **Supersonic Flow ($M > 1$):** Denominator is negative. $dM$ is negative. Adding heat to a supersonic flow makes it **decelerate**.

**Cooling the Flow ($dT_0 < 0$):**
- Subsonic flow decelerates.
- Supersonic flow accelerates.

## 2. Thermal Choking ($M \to 1$)

Just like friction in Fanno flow, **Adding heat universally drives the flow toward Mach 1**, regardless of whether it started subsonic or supersonic.

If you add a specific critical amount of heat ($q_{max}$), the flow will reach exactly Mach 1 at the exit. The stagnation temperature at this state is defined as $T_0^*$.
This phenomenon is called **Thermal Choking**.

The amount of heat required to choke a flow is:
$$q_{max} = c_p (T_0^* - T_{0, inlet})$$

## 3. What if you add more heat than $q_{max}$?

If you pour even more heat into a combustor that is already choked ($q > q_{max}$), the flow cannot pass through Mach 1. The physics force a radical adjustment upstream.

- **If the inlet was Subsonic:** The flow will restrict itself. The mass flow rate will drop, dropping the inlet Mach number $M_1$, which increases the allowable $q_{max}$ until the system balances with the new heat load.
- **If the inlet was Supersonic (A Scramjet):** This is a disastrous scenario. A scramjet relies on supersonic combustion. If you inject too much fuel and exceed $q_{max}$, the flow will choke. A massive normal shock wave is disgorged out the front of the engine (an "unstart"), violently dropping the internal flow to subsonic, and destroying the aircraft's thrust and aerodynamic stability.

## 4. The Bizarre Temperature Reversal

One highly counter-intuitive feature of subsonic Rayleigh flow occurs with the static temperature $T$.
If you add heat to a flow starting at $M \approx 0.1$, the static temperature $T$ rises, as you would expect. 
However, once the flow accelerates past $M = 1/\sqrt{k}$ (which is $M \approx 0.845$ for air), continuing to add heat actually causes the static temperature to **drop**! 
The flow is accelerating so aggressively toward Mach 1 that the conversion of internal thermal energy into kinetic velocity energy outpaces the heat you are dumping in. (The total stagnation temperature $T_0$, however, always rises).
