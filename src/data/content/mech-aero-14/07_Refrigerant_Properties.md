# Refrigerant Properties and the Refrigerant Tables

Water/steam is the working fluid of choice for power generation. For **refrigeration and heat pump cycles**, however, water is entirely impractical — it boils at 100°C at atmospheric pressure, far too high for achieving sub-zero cooling.

**Refrigerants** are purpose-engineered working fluids with saturation temperatures and pressures matched to the operating conditions of cooling systems.

## 1. Properties Required of a Good Refrigerant

*   **Low boiling point at atmospheric pressure:** So the refrigerant vaporizes (absorbing heat) at the desired low temperature.
*   **High latent heat of vaporization ($h_{fg}$):** Absorbs maximum heat per kilogram circulated.
*   **Reasonable saturation pressure:** High enough pressure in the condenser (so condensation occurs above ambient) but not so extreme as to require ultra-heavy piping.
*   **Chemical stability, low toxicity, non-flammability:** Safety in occupied buildings.
*   **Low Global Warming Potential (GWP) and Ozone Depletion Potential (ODP):** Environmental regulations.

## 2. The Evolution of Refrigerants

*   **R-11, R-12 (CFCs):** Chlorofluorocarbons. Excellent thermodynamic properties. Banned globally by the Montreal Protocol (1987) due to catastrophic stratospheric ozone depletion.
*   **R-22 (HCFC):** Hydrochlorofluorocarbon. Lower ODP. Now being phased out under Montreal Protocol.
*   **R-134a (HFC):** The dominant automotive air conditioning refrigerant since the 1990s. Zero ODP but high GWP (1430×CO₂). Being phased out under Kigali Amendment.
*   **R-410A (HFC blend):** Dominant in residential HVAC. GWP ~2100×CO₂. Being replaced.
*   **R-32, R-1234yf, R-290 (propane), R-744 (CO₂):** Next-generation refrigerants with very low GWP.

## 3. Structure of Refrigerant Tables

Refrigerant tables follow exactly the same structure as steam tables:
*   **Table 1 — Saturated (Temperature-based):** $P_{sat}$, $v_f$, $v_g$, $u_f$, $u_g$, $h_f$, $h_{fg}$, $h_g$, $s_f$, $s_g$ at each temperature.
*   **Table 2 — Saturated (Pressure-based):** Same data indexed by saturation pressure.
*   **Table 3 — Superheated vapor:** $v$, $u$, $h$, $s$ at specified $P$ and $T$ combinations in the superheated region.

For refrigerants, the reference state convention defines $h_f = 200 \text{ kJ/kg}$ and $s_f = 1.0 \text{ kJ/(kg·K)}$ at 0°C (rather than at 0 K as for steam). Only differences matter in engineering calculations.

## 4. The $P$-$h$ Diagram for Refrigeration Analysis

For refrigeration cycle analysis, engineers use the **$P$-$h$ diagram** (pressure on y-axis, enthalpy on x-axis), not the $T$-$s$ diagram. Advantages:
*   The saturation dome is clearly visible.
*   The ideal refrigeration cycle (Rankine cycle in reverse) plots as a simple rectangular-ish loop.
*   Compressor work = horizontal span of compression process ($\Delta h_{compressor}$).
*   Refrigerating effect = horizontal span of evaporator process ($\Delta h_{evaporator}$).
*   COP can be read directly from the diagram without any integration.
