# Rocket Propulsion Combustion

Rocket combustion operates under conditions far more extreme than any other combustion application. Combustion chambers run at pressures of 50–300 bar, temperatures of 3,000–3,600 K, and mass flow rates that generate millions of newtons of thrust — all within an engine that must be lightweight enough to fly.

## 1. Rocket Propellants

Unlike air-breathing engines, rockets carry their own oxidizer. The choice of propellant determines thrust, specific impulse, storage requirements, and safety.

**Liquid Propellants (Highest Performance):**

| Propellant Combination | Oxidizer | Fuel | Typical $I_{sp}$ (vacuum) |
|---|---|---|---|
| LOX / LH₂ | Liquid Oxygen | Liquid Hydrogen | ~450 s |
| LOX / RP-1 (Kerosene) | Liquid Oxygen | Refined Kerosene | ~350 s |
| LOX / Methane | Liquid Oxygen | Liquid Methane | ~380 s |
| N₂O₄ / UDMH (hypergolic) | Nitrogen Tetroxide | Unsymmetrical Dimethylhydrazine | ~320 s |

**Hypergolic propellants** ignite spontaneously on contact — no ignition system required. Critical for spacecraft that must restart in orbit (attitude control, lunar landing). Highly toxic.

**Solid Propellants:**
Fuel and oxidizer pre-mixed in a solid grain. Simple (no pumps, valves), storable, high thrust density.
*   Typical composition: Ammonium perchlorate (oxidizer) + aluminum powder (fuel) + HTPB binder.
*   $I_{sp} \approx 250$–280 s (lower than liquids).
*   Cannot be throttled or shut down easily once ignited.
*   Used for: Space Shuttle SRBs, strategic missiles, upper stages.

## 2. Specific Impulse ($I_{sp}$)

**Specific impulse** is the key performance metric for rocket propellants — the thrust produced per unit of propellant mass flow rate:

$$ I_{sp} = \frac{F}{\dot{m} g_0} \quad \text{(seconds)} $$

It is engine- and propellant-independent in units of seconds, allowing fair comparison across all rocket types.

*   Higher $I_{sp}$ → more thrust per kg of propellant → better mass fraction efficiency.
*   LOX/LH₂ has the highest $I_{sp}$ (~450 s) of any practical chemical propellant because H₂ has the lowest molecular weight products (H₂O has MW = 18), giving the highest exhaust velocity.
*   Cold gas thrusters: $I_{sp} \approx 50$–80 s.
*   Ion thrusters (electric propulsion): $I_{sp} \approx 1,000$–10,000 s (but very low thrust).

## 3. Combustion Chamber Design

**Chamber Pressure:**
Higher chamber pressure improves $I_{sp}$ (better nozzle expansion ratio for the same exit pressure) and reduces combustion instability. But it requires heavier, more expensive turbopumps and thicker chamber walls. SpaceX Raptor operates at ~300 bar — the highest ever for a flight engine.

**Combustion Instability:**
One of the most feared problems in rocket development. Acoustic pressure oscillations in the combustion chamber couple with the combustion heat release rate, feeding energy into the oscillation in a positive feedback loop. The result is violent vibration at frequencies up to 20,000 Hz that can destroy the engine in milliseconds.

*   Characterized by **1L** (longitudinal), **1T** (first tangential), **2T** transverse modes.
*   Remediated by baffles on the injector faceplate (disrupting acoustic modes), acoustic cavities tuned to damp specific frequencies, and injector element design (distributing combustion more uniformly).
*   The F-1 engine (Saturn V) famously suffered years of instability before being solved.

## 4. Regenerative Cooling

At 3,000–3,600 K chamber temperatures, no known material can survive without active cooling. **Regenerative cooling** is the standard solution:

*   The cryogenic fuel (LOX/LH₂, LOX/methane, or RP-1) is routed through hundreds of narrow channels milled into the inner wall of the combustion chamber and nozzle.
*   The fuel cools the wall (typically keeping it below 700–900°C) before entering the injector and burning.
*   The heat absorbed by the fuel (now superheated) is not wasted — it is deposited directly into the combustion process as enthalpy.
