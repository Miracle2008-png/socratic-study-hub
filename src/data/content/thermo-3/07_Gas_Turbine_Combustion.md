# Gas Turbine Combustion

The gas turbine combustion chamber (combustor) is one of the most thermally demanding engineering components ever built. It must ignite a continuous stream of fuel and air, sustain a stable flame across a 30:1 range of power settings, and deliver hot gas at precisely the right temperature to the turbine blades — all within a compact, lightweight package.

## 1. The Brayton Cycle and Combustor Role

The ideal gas turbine operates on the **Brayton cycle**:
1.  **Compression:** Air enters the compressor, pressure rises from $P_1$ to $P_2$.
2.  **Heat Addition (Combustor):** Fuel burns at constant pressure, raising the temperature from the compressor exit temperature ($T_2$) to the turbine inlet temperature ($T_3$).
3.  **Expansion:** Hot gas expands through the turbine, doing work.
4.  **Heat Rejection:** Exhaust discharged (or recirculated in regenerative cycles).

The combustor's job is to maximize the temperature rise from $T_2$ to $T_3$ with minimal pressure loss (typically <5% of the inlet total pressure).

## 2. Combustor Architecture

A typical annular gas turbine combustor has three aerodynamic zones:

**1. Primary Zone:**
Highly swirled air (~20% of total) mixes with fuel from the fuel injectors. A strong recirculation vortex anchors the flame — hot combustion products recirculate back to the base of the flame, continuously re-igniting the fresh mixture. Operates near stoichiometric ($\phi \approx 0.8$–1.2) for high-temperature, stable combustion.

**2. Secondary/Intermediate Zone:**
Additional dilution air (~30% of total) is admitted through holes in the liner. This completes burnout of CO and UHC from the rich primary zone and extends the combustion residence time.

**3. Dilution Zone:**
Large quantities of bypass air (~50% of total) are admitted to cool the hot combustion products from their peak flame temperature (~2,200 K) down to the turbine inlet design temperature (~1,400–1,800 K, depending on generation).

Crucially: over half the air bypasses combustion entirely — its sole purpose is thermal management.

## 3. Turbine Inlet Temperature (TIT) and Materials

The turbine inlet temperature is the most critical performance parameter of a gas turbine. Higher TIT → better thermal efficiency and specific power output.

**Brayton cycle efficiency:**
$$ \eta_{Brayton} = 1 - \frac{T_1}{T_2} = 1 - \frac{1}{r_p^{(k-1)/k}} $$

But in practice, TIT is limited by turbine blade material capability:
*   **1960s turbines:** Nickel superalloys, max ~1,000°C.
*   **Modern aviation engines:** Single-crystal superalloy blades with internal cooling channels and thermal barrier coatings (ceramic TBC) allow TIT of ~1,700°C — far beyond the alloy's melting point (~1,300°C) because the blade is internally cooled by compressor bleed air.
*   **Future targets:** Ceramic matrix composite (CMC) blades aim for TIT > 1,800°C with significantly reduced cooling air penalty.

## 4. Low-NOₓ Combustor Designs

Modern environmental regulations demand dramatic NOₓ reductions. The challenge: low NOₓ requires low flame temperature (lean combustion), but lean combustion is inherently less stable (risk of blowout).

**Lean Premixed Combustion (LPP / DLE):**
*   Fuel and air are premixed upstream of the combustor in a premixer before the flame.
*   Operates at $\phi \approx 0.5$–0.6, keeping peak flame temperatures well below the thermal NOₓ threshold.
*   Achieves NOₓ < 25 ppm (vs. ~200 ppm for conventional combustors).
*   Risk: Flashback into the premixer. Requires precision fuel staging at part-load.

**GE LEAP and Rolls-Royce TRENT engines** use multi-point lean direct injection (LDI) — hundreds of tiny swirlers creating very fine, rapidly mixed fuel-air streams — to achieve both low NOₓ and high stability.
