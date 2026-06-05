---
title: "Fanno Flow: Friction in Ducts"
---

# Fanno Flow: Friction in Ducts

Thus far, we assumed flow in a pipe was isentropic (frictionless). But in a long natural gas pipeline or the interior of a supersonic wind tunnel, wall friction is unavoidable.

**Fanno Flow** is the theoretical model of 1D compressible flow in a **constant-area duct with friction**, but strictly **adiabatic** (no heat transfer).

## 1. The Physics of Fanno Flow

Friction acts as a drag force. Intuition suggests friction always slows things down. In compressible flow, this is only half true!

The energy equation for an adiabatic flow guarantees that stagnation temperature is constant ($T_0 = \text{constant}$). However, friction continuously generates entropy ($\Delta s > 0$), meaning stagnation pressure drops along the pipe ($dP_0 < 0$).

Because the area is constant, the continuity equation ($\rho V = \text{const}$) and the friction relations dictate how the Mach number changes along the pipe distance $x$:

$$\frac{dM^2}{dx} \propto \frac{M^2(1 + \frac{k-1}{2}M^2)}{1 - M^2}$$

The denominator $(1 - M^2)$ dictates the entire behavior:

**1. Subsonic Flow ($M < 1$):** The denominator is positive. Therefore, $dM/dx$ is positive. 
- Friction forces a subsonic flow to **accelerate**. Velocity increases, pressure drops, and density drops.

**2. Supersonic Flow ($M > 1$):** The denominator is negative. $dM/dx$ is negative.
- Friction forces a supersonic flow to **decelerate**. Velocity drops, pressure rises, and density rises.

## 2. The Fanno Choking Limit ($M \to 1$)

Notice that whether you start subsonic (accelerating) or supersonic (decelerating), friction universally drives the flow exactly toward **Mach 1**.

What happens if the pipe is so incredibly long that the flow reaches Mach 1 before it reaches the exit?
It cannot pass through Mach 1. (If a subsonic flow hit M=1 and kept accelerating to M>1, the denominator flips sign, demanding it decelerate. It's a mathematical impassable barrier).

When the flow hits exactly Mach 1 at the exit, the pipe is **choked by friction**.
The length of pipe required to take a flow from an initial Mach number $M$ and choke it to $M=1$ is a critical parameter called the **frictional choking length ($L^*$):**

$$\frac{f L^*}{D} = \text{Function of } (M, k)$$
*(where $f$ is the Darcy friction factor and $D$ is pipe diameter).*

## 3. What if the pipe is longer than $L^*$?

If you try to push flow through a pipe of length $L > L^*$, physics intervenes to prevent it.

- **If the inlet was Subsonic:** The flow will spontaneously choke down at the inlet. The mass flow rate will plummet, and the initial Mach number $M_1$ will drop to a lower value such that the *new* $L^*$ exactly equals your physical pipe length $L$.
- **If the inlet was Supersonic:** The upstream nozzle determines the mass flow, so it can't choke down. Instead, a **Normal Shock Wave** will spontaneously form inside the pipe! The shock instantly violently decelerates the flow to subsonic. The subsonic flow then accelerates due to friction for the remainder of the pipe, hitting exactly Mach 1 at the exit.
