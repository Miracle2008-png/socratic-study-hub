---
title: "Pump Cavitation and NPSH"
---

# Pump Cavitation and NPSH

Liquids have a massive vulnerability that gases do not: they can boil. If the local static pressure anywhere in a liquid system drops below the fluid's vapor pressure ($P_v$) at that temperature, the liquid will spontaneously flash into vapor bubbles. This localized boiling is called **cavitation**.

## 1. The Physics of Cavitation

In a centrifugal pump, the fluid is accelerated as it gets sucked into the eye of the impeller. By Bernoulli's principle, as velocity increases, static pressure decreases. Therefore, **the lowest pressure in the entire pumping system occurs right at the eye of the impeller**, just before the fluid is picked up by the blades.

If the pressure at the impeller eye drops below $P_v$, vapor bubbles form. 
- These bubbles are swept into the impeller, where the pressure rapidly increases.
- The high pressure causes the bubbles to violently collapse (implode).
- The implosion creates microscopic, supersonic shockwaves that blast against the metal impeller blades.
- Over time, these micro-jets pit and erode the solid metal, destroying the impeller.
- Cavitation also causes severe vibration, noise (sounds like pumping gravel), and a massive drop in pump performance because vapor blocks the flow passages.

## 2. Net Positive Suction Head (NPSH)

To prevent cavitation, the engineer must ensure that the pressure at the pump inlet stays safely above the vapor pressure. We measure this safety margin using **Net Positive Suction Head (NPSH)**.

NPSH is the total absolute head at the pump inlet, *minus* the vapor pressure head of the liquid.
$$NPSH = \left( \frac{P_{in}}{\rho g} + \frac{V_{in}^2}{2g} \right) - \frac{P_v}{\rho g}$$

There are two different types of NPSH that must be compared:

### A. NPSH Required ($NPSH_R$)
This is a property of the *pump itself*. It is provided by the pump manufacturer on the performance chart. It represents the minimum pressure margin required at the inlet to overcome the local pressure drop as the fluid enters the impeller eye.
- $NPSH_R$ increases drastically as flow rate $Q$ increases (because higher velocity means a larger Bernoulli pressure drop).

### B. NPSH Available ($NPSH_A$)
This is a property of your *piping system*. You, the engineer, calculate this based on how you install the pump.
Consider a pump drawing water from an open tank. By applying Bernoulli's equation from the tank surface to the pump inlet, we find:
$$NPSH_A = \frac{P_{atm}}{\rho g} \pm z_{elevation} - h_{friction\_loss} - \frac{P_v}{\rho g}$$
- $P_{atm}$: Atmospheric pressure pushing down on the supply tank. (Decreases at high altitudes!).
- $z_{elevation}$: The height of the tank surface relative to the pump. Positive if the tank is above the pump (flooded suction). Negative if the pump is lifting water from below (suction lift).
- $h_{friction\_loss}$: Head loss in the suction pipe, valves, and filters.
- $P_v$: Vapor pressure of the fluid. (Increases exponentially with temperature!).

## 3. The Golden Rule of Pump Design

To prevent cavitation, the system you design must always provide more pressure margin than the pump requires:

$$\boxed{NPSH_A > NPSH_R}$$

Usually, an safety margin of at least 1 to 2 meters is added.

**How to fix a cavitating pump (increase $NPSH_A$):**
1. Lower the pump elevation (or raise the supply tank).
2. Cool the liquid (decreases vapor pressure $P_v$).
3. Use a larger diameter suction pipe (decreases velocity, reducing friction losses $h_f$).
4. Clean the suction strainer/filter (reduces $h_f$).
5. Throttle the *discharge* valve to reduce flow rate $Q$ (this reduces the pump's $NPSH_R$). *Never throttle the suction valve!*
