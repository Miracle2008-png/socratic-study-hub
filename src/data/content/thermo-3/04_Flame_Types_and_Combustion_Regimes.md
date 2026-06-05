# Flame Types and Combustion Regimes

Not all flames are created equal. The way fuel and oxidizer are mixed before or during combustion fundamentally determines the flame structure, temperature, stability, and pollutant emissions.

## 1. Premixed vs. Diffusion Flames

**Premixed Flames:**
Fuel and air are mixed together *before* combustion begins. When the mixture is ignited, a thin reaction zone (the flame front) propagates through the mixture at a well-defined **laminar burning velocity** ($S_L$).
*   *Examples:* Bunsen burner (with the air ports open), spark-ignition (gasoline) engines, premixed gas turbine combustors.
*   The flame front is very thin (~0.1–1 mm) and intense. All of the combustion occurs in this zone.
*   Advantages: Very complete combustion, lower soot (no fuel-rich pockets), easier to control stoichiometry.
*   Disadvantages: Susceptible to **flashback** (the flame propagates back into the premix supply line if $S_L > \text{flow velocity}$) and pre-ignition/knock in engines.

**Diffusion Flames (Non-Premixed Flames):**
Fuel and air are *not* premixed. They are supplied from separate sources, and combustion occurs wherever the fuel and air mix in the right proportions (near stoichiometric ratio) at the flame surface.
*   *Examples:* A candle flame, a gas stove burner (with the air ports mostly closed), diesel engines, jet aircraft afterburners.
*   The flame is always stoichiometric at the reaction zone, regardless of the overall fuel and air supplies. Fuel-rich on the inside; air-rich on the outside.
*   Advantages: Inherently safe — cannot flashback (fuel and air are never mixed ahead of the flame). Simple control.
*   Disadvantages: Tend to produce **soot** (black smoke) because the fuel-rich core partially pyrolyzes before it can find oxygen. Higher NOₓ due to local stoichiometric high-temperature zones.

## 2. Laminar vs. Turbulent Flames

**Laminar Flames:**
Smooth, quiet, well-ordered flame structure. Fuel and air interact by molecular diffusion only. The burning velocity is low (~0.4 m/s for methane/air). Common in lab experiments and candles.

**Turbulent Flames:**
The flame is wrinkled, fluctuating, and highly disordered due to turbulent mixing. Turbulence dramatically increases the mass transfer rate of fuel and air across the flame surface, resulting in much higher turbulent burning velocities (5–50 m/s). All practical high-power combustors (engines, gas turbines, furnaces) operate with turbulent flames.

## 3. Flame Stability and Extinction

A flame must be anchored — it cannot be blown off its holder.

**Flashback:** The flame propagates upstream faster than the flow can push it back. Occurs when the flow velocity drops below $S_L$ (e.g., during a turndown of a burner). Dangerous — can ignite the fuel supply.

**Blowout (Blowoff):** The flow velocity is too high for the flame to remain anchored. The flame lifts off, stretches, and eventually extinguishes. The ratio of flow velocity to $S_L$ at extinction defines the blowout limit.

**Stabilization methods:**
*   **Swirlers:** Induce a swirling, recirculating flow pattern that creates a low-velocity zone (recirculation zone) near the burner where the flame anchors.
*   **Pilot Flames:** A small, stable pilot burner ignites the main mixture continuously.
*   **Bluff Bodies:** A physical obstruction (disk, cone) creates a low-velocity wake where the flame stabilizes.

## 4. Detonation vs. Deflagration

**Deflagration:** The normal, subsonic flame propagation mode. The flame front travels through the unburned mixture at velocities below the speed of sound in the mixture ($S_L \ll c_{sound}$). The pressure rise across the flame is modest.

**Detonation:** A supersonic combustion wave. The flame front is coupled with a leading shock wave that compresses and auto-ignites the fresh mixture. The wave travels at 1,500–3,000 m/s and the pressure ratio across the detonation wave can be 15–20. Catastrophically destructive in confined systems — pipeline explosions and vessel ruptures.

*Knock* in gasoline engines is a mild detonation event — the end-gas ignites prematurely due to compression heating, creating a pressure wave that collides with the normal flame front.
