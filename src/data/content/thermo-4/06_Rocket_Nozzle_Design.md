# Rocket Nozzle Design

The rocket nozzle is the workhorse of propulsion — it converts the high-pressure, high-temperature combustion products into a high-velocity jet, generating thrust. The design of a rocket nozzle involves optimizing for both thermodynamic performance (maximum specific impulse) and structural/weight constraints.

## 1. The Ideal Rocket Nozzle

An ideal rocket nozzle assumes:
*   One-dimensional, steady flow.
*   Perfect gas with constant $k$ and $R$.
*   Isentropic flow (no friction, no heat transfer).
*   Combustion products in chemical equilibrium (or frozen composition).
*   Uniform flow at every cross-section.

Under these assumptions, the exit velocity is:
$$ V_e = \sqrt{\frac{2kRT_c}{k-1}\left[1 - \left(\frac{P_e}{P_c}\right)^{(k-1)/k}\right]} $$

Where:
*   $T_c$: Chamber temperature (K).
*   $P_c$: Chamber pressure.
*   $P_e$: Exit pressure.
*   $k$: Ratio of specific heats for the combustion products.
*   $R$: Specific gas constant of the products.

**Key Insight:** Higher $T_c$ and lower $P_e/P_c$ both increase exit velocity (and therefore $I_{sp}$). Rockets operating in vacuum can expand to very low $P_e$ (approaching zero), giving nearly unlimited expansion ratios.

## 2. Nozzle Contour Design

**Conical Nozzle:**
The simplest design — the diverging section is a straight cone with a half-angle $\alpha$ (typically 15°). Simple to manufacture. The **divergence loss correction factor**:
$$ \lambda = \frac{1 + \cos\alpha}{2} $$

For $\alpha = 15°$: $\lambda = 0.983$ — only 1.7% thrust loss from non-axial flow. Acceptable for many applications.

**Bell Nozzle (Rao's Method):**
A contoured diverging section with a curved wall profile that produces perfectly axial flow at the exit. Developed by G.V.R. Rao in 1958. Nearly eliminates divergence loss ($\lambda \approx 0.99$) while being shorter and lighter than a conical nozzle for the same area ratio.

The contour has two sections:
1.  A circular arc transition from the throat (high curvature, to turn the supersonic flow away from the axis quickly without separation).
2.  A parabolic section approaching axial flow at the exit.

Almost all modern chemical rocket engines use bell nozzles.

**Aerospike Nozzle:**
A fundamentally different design. Instead of a bell nozzle, an aerospike has a central spike with combustion occurring around the outside. The plume's outer boundary is open to ambient pressure, causing the effective exit area to adjust automatically to ambient conditions.

*   **Altitude-compensating:** Works efficiently from sea level to vacuum — unlike a fixed bell nozzle that is optimized for one altitude.
*   **Very complex:** Never flown on a production orbital vehicle (though ground-tested extensively). NASA's X-33 planned to use it.

## 3. Nozzle Cooling

At chamber temperatures of 3,000–3,600 K, the nozzle throat experiences the highest heat flux of any rocket component. The throat is choked — mass flux is maximum here — and the surrounding gas is at very high temperature.

**Regenerative Cooling:** Fuel flows through channels in the nozzle wall (described in the combustion module). The most common approach for liquid rocket engines.

**Film Cooling:** A thin layer of cold propellant is injected along the inner nozzle wall, forming an insulating film. Less effective than regenerative cooling but simpler. Used in upper stages.

**Ablative Cooling:** The nozzle wall material (carbon-phenolic composite or silica-phenolic) slowly ablates (chars and vaporizes). The ablation process absorbs enormous heat and creates a cool gas film. Ideal for solid rockets and disposable liquid engines where the nozzle is not reused.

## 4. Nozzle Separation

In an overexpanded nozzle ($P_e < P_{amb}$), the flow can separate from the nozzle wall inside the diverging section, forming an oblique shock pattern within the nozzle. Separation is generally undesirable because:
*   It reduces effective area ratio (less thrust than design).
*   Asymmetric separation can cause destructive side loads on the nozzle structure.

At sea-level ignition of a vacuum-optimized upper stage engine (very large expansion ratio), severe overexpansion and side loads are major structural concerns. **Forced flow reattachment** and **truncated nozzle designs** are sometimes used to mitigate this.
