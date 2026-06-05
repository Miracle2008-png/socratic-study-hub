# Exergy: The Quality of Energy

The First Law treats all energy equally — 1 kJ of heat at 1000 K looks identical to 1 kJ of heat at 30 K. But they are profoundly different in usefulness: the high-temperature heat can run a turbine with high efficiency; the low-temperature heat is barely worth collecting. **Exergy** is the thermodynamic quantity that captures the useful work potential of energy.

## 1. Definition of Exergy (Availability)

**Exergy** (also called **availability** or **work potential**) is the maximum useful work obtainable as a system interacts with its surroundings until it reaches **thermodynamic equilibrium with the environment** (the **dead state** at $T_0$, $P_0$).

At the dead state, the system is in complete thermal, mechanical, and chemical equilibrium with the environment — no further work can be extracted. The dead state is typically chosen as standard ambient conditions: $T_0 = 25°C = 298 K$, $P_0 = 101.3 \text{ kPa}$.

## 2. Exergy of a Closed System (Non-Flow Exergy)

For a closed system at state $(T, P, u, v, s)$:
$$\Phi = (u - u_0) + P_0(v - v_0) - T_0(s - s_0)$$

The three terms represent:
- $(u - u_0)$: Internal energy above dead state.
- $P_0(v - v_0)$: Volume work against the atmosphere (not useful).
- $-T_0(s - s_0)$: Entropy term — higher entropy → less exergy.

## 3. Exergy of a Flowing Stream (Flow Exergy)

For a steady-flow stream at $(T, P, h, s)$:
$$\psi = (h - h_0) - T_0(s - s_0) + \frac{V^2}{2} + gz$$

The flow exergy $\psi$ is the maximum work extractable from the stream as it flows to the dead state. This is the quantity that appears in exergy analysis of turbines, compressors, and heat exchangers.

## 4. Exergy of Heat Transfer

Heat $Q$ transferred from a reservoir at temperature $T$ has exergy:
$$\Phi_{heat} = Q\left(1 - \frac{T_0}{T}\right) = Q \cdot \eta_{Carnot}$$

This is precisely the Carnot efficiency factor — at $T = T_0$: exergy = 0 (heat at ambient is worthless for doing work). At $T \to \infty$: exergy → $Q$ (all heat is potentially work).

**Key insight:** Burning fossil fuel (flame at $\sim$2000 K) to heat a room (20°C) is thermodynamically atrocious — the exergy content of the fuel is vastly greater than the exergy needed for room heating. A heat pump converting electricity to room heat preserves far more of the fuel's original exergy.
