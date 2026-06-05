# Thermal Design of Heat Exchangers

Designing a heat exchanger from scratch requires integrating thermodynamics, fluid mechanics, and structural engineering simultaneously. This module walks through the full engineering design process.

## 1. Defining the Design Problem

Every heat exchanger design begins with a clear **Process Specification** (the "data sheet") containing:

*   **Fluids:** Identity and composition of both streams.
*   **Flow Rates:** Mass flow rates ($\dot{m}$) for both streams, or at least one flow rate and the overall duty.
*   **Temperatures:** Inlet and desired outlet temperatures for both streams.
*   **Operating Pressure:** Maximum allowable pressure on both sides.
*   **Allowable Pressure Drop:** The system pumps/compressors set a maximum pressure loss the exchanger can impose. A lower pressure drop means larger, more expensive equipment.
*   **Fouling Resistances:** Based on the fluid type (TEMA tables).
*   **Materials:** Compatibility with the fluids (corrosion resistance).

## 2. Overall Energy Balance

The first calculation is always a global energy balance to verify consistency and find any missing temperatures. Assuming no heat loss to the environment (adiabatic exchanger):

$$ \dot{Q} = \dot{m}_h c_{p,h}(T_{h,in} - T_{h,out}) = \dot{m}_c c_{p,c}(T_{c,out} - T_{c,in}) $$

For phase-change streams (condensers, evaporators), replace $c_p \Delta T$ with the latent heat:
$$ \dot{Q} = \dot{m}_{condensing} \cdot h_{fg} $$

## 3. Selecting Exchanger Type and Geometry

Based on the fluids, pressures, temperatures, and fouling tendency, the engineer selects:
*   **Type:** Shell-and-tube, plate, compact, double-pipe.
*   **Shell and Tube layout:** Number of passes, tube size, tube pitch, baffle cut, baffle spacing.

Key initial assumptions (which will be refined iteratively):
*   Tube outer diameter ($D_o$) and wall thickness ($t$): Common sizes are 19mm, 25mm, or 32mm OD.
*   Tube material and layout (triangular pitch is denser; square pitch allows mechanical cleaning on shell side).

## 4. Calculating Heat Transfer Coefficients

**Tube-Side Coefficient ($h_i$):**
Calculate the Reynolds Number: $Re = \frac{\rho V D_i}{\mu}$
*   If $Re > 10,000$ (turbulent): Use the **Dittus-Boelter Equation**: $Nu = 0.023 Re^{0.8} Pr^n$
*   If $Re < 2300$ (laminar): Use $Nu = 3.66$ (uniform wall temperature) or $Nu = 4.36$ (uniform heat flux).

**Shell-Side Coefficient ($h_o$):**
Shell-side flow is complex due to baffles. Use the **Bell-Delaware Method** — a detailed procedure that accounts for baffle geometry, bypass streams, and leakage flows. Software tools like HTRI or ASPEN are typically used for rigorous shell-side calculations.

## 5. Sizing and Iteration

With $h_i$, $h_o$, fouling factors, and wall conductivity, calculate $U_{dirty}$. Then:
$$ A_{required} = \frac{\dot{Q}}{U_{dirty} \cdot F \cdot \Delta T_{lm}} $$

Convert area to number of tubes:
$$ N_{tubes} = \frac{A_{required}}{\pi D_o L} $$

(where $L$ is the assumed tube length, typically 3m, 4.5m, or 6m standard lengths)

**Check Pressure Drops:**
Calculate tube-side and shell-side pressure drops. If they exceed the allowable limits, adjust geometry (change tube length, add passes, adjust baffle spacing) and repeat. This iterative process typically requires 2–5 loops before converging.

## 6. Mechanical and Safety Checks

*   **ASME Code Compliance:** Pressure vessels and heat exchangers must comply with the ASME Boiler and Pressure Vessel Code (in the USA) or equivalent international standards (PED in Europe).
*   **Thermal Stress:** Temperature differences between the shell and tubes cause differential thermal expansion. If the shell is at 200°C and the tubes are at 50°C, the tubes will be significantly shorter than the shell. This creates massive internal stresses. Fixed tube-sheet designs use expansion joints; U-tube and floating head designs are inherently self-compensating.
*   **Vibration:** Shell-side flow can excite the tubes into resonant vibration (flow-induced vibration), which causes rapid fatigue failure of tubes at baffle holes. Baffle spacing is limited to prevent this.
