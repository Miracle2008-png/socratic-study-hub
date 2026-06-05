# Internal Combustion Engines

The internal combustion engine (ICE) is among the most consequential technologies in human history. Despite over 150 years of development, the fundamental thermodynamic cycles governing gasoline and diesel engines remain rooted in the same classical analysis.

## 1. The Otto Cycle (Gasoline Engine)

The Otto cycle is the ideal thermodynamic model for a spark-ignition (SI) gasoline engine. It consists of four internally reversible processes:

**Process 1→2: Isentropic Compression**
The piston compresses the fuel-air mixture. No heat transfer. The mixture heats up due to compression alone.
*   Compression Ratio: $r = V_1/V_2$ (typically 8–12 for gasoline engines)

**Process 2→3: Constant-Volume Heat Addition**
The spark plug fires. Combustion is assumed to occur so rapidly that the piston barely moves — essentially at constant volume. The temperature and pressure spike dramatically.

**Process 3→4: Isentropic Expansion (Power Stroke)**
The hot high-pressure combustion gases push the piston down, doing work on the crankshaft.

**Process 4→1: Constant-Volume Heat Rejection (Exhaust)**
The exhaust valve opens. Combustion products are expelled. The pressure drops to atmospheric.

**Otto Cycle Thermal Efficiency:**
$$ \eta_{th,Otto} = 1 - \frac{1}{r^{k-1}} $$

Where $k = c_p/c_v \approx 1.4$ for air. This result is remarkable: the efficiency depends **only** on the compression ratio. Higher compression → higher efficiency. A compression ratio of 10 gives $\eta_{th} \approx 60\%$ — but real engines achieve only 30–38% due to heat losses, friction, incomplete combustion, and non-ideal gas behavior.

**Limitation — Knock:** High compression ratios cause the fuel-air mixture to auto-ignite from heat before the spark fires. This knock destroys engines. Higher octane fuel resists auto-ignition, allowing higher compression ratios.

## 2. The Diesel Cycle

The Diesel cycle models a compression-ignition (CI) diesel engine. Unlike the Otto cycle, fuel is injected at the end of compression — the temperature from compression alone is hot enough to auto-ignite the fuel. There is no spark plug.

Key difference from the Otto cycle: **Heat addition occurs at constant pressure** (not constant volume), because as the fuel burns, the piston continues to move.

**Diesel Cycle Thermal Efficiency:**
$$ \eta_{th,Diesel} = 1 - \frac{1}{r^{k-1}} \cdot \frac{r_c^k - 1}{k(r_c - 1)} $$

Where $r_c$ is the **cutoff ratio** — the ratio of volumes at the end and start of heat addition.

Diesel engines use much higher compression ratios (16–22) than gasoline engines (8–12) because there is no fuel present during compression (no knock risk). This gives diesel engines fundamentally higher thermal efficiency (~40–45% real efficiency) than gasoline engines (~30–38%).

## 3. Real Deviations from the Ideal Cycles

**Combustion duration:** Real combustion takes 20–60° of crank angle — not instantaneous. Timing of combustion start (spark timing / injection timing) is critical.
**Heat Transfer:** Cylinder walls, piston, and valves absorb significant heat — reducing work output.
**Pumping Losses:** The piston must push exhaust out and draw fresh charge in. These consume work.
**Friction:** Piston rings, bearings, and valve train all impose mechanical friction losses.

**Indicated Thermal Efficiency** (from in-cylinder pressure measurement): Captures combustion and thermodynamic losses only.
**Brake Thermal Efficiency (BTE)**: Efficiency measured at the crankshaft output — includes friction. Modern diesel engines exceed 50% BTE in heavy-duty optimized conditions.

## 4. Modern Engine Technologies

*   **Direct Injection (GDI):** Fuel injected directly into the cylinder (like diesel) rather than into the intake port. Allows higher compression ratios, stratified charge operation, and reduced pumping losses.
*   **Variable Valve Timing (VVT) and Lift:** Adjusting when valves open/close optimizes breathing across the entire RPM range.
*   **Turbocharging:** Compresses intake air, allowing more air (and fuel) into each cylinder — increasing power without increasing displacement. Exhaust-driven turbine recovers otherwise wasted exhaust energy.
*   **Homogeneous Charge Compression Ignition (HCCI):** A research concept combining Otto and Diesel features — premixed fuel-air that auto-ignites uniformly throughout the cylinder. Very low NOₓ and soot, very high efficiency. Extremely difficult to control across varying loads.
